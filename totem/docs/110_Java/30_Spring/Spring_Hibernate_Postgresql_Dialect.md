---
title: Spring 搭配使用 DB Dialect
description: Spring with PostgreSQL Dialect
keywords: [Spring,PostgreSQL,Dialect]
---

> Spring Framework 與 Hibernate ORM 整合後，可搭配採用不同的 Datasource，   
> 這便的範例是，  
> 讓 Spring 的 HibernateTemplate / JdbcTemplate 可以直接使用 PostgreSQL 的原生 functions。  
> 並介紹，如何註冊自行開發的 PostgreSQL function 供 Spring 的 HibernateTemplate 使用。  

* 自行開發 function 主要目的: 
    * 可自訂任何資料庫支援的函數語法
    * 不需建立 Java Function，只用模板描述 SQL
    * 支援多參數、多型別回傳
    * 使用 SQLFunctionTemplate 工具

## 先設定 PostgreSQL Dialect
* 下面範例設定是採 Hibernate 5x 版本，6x 設定不完全相同。
    * Hibernate 3.3 後，hibernate.cache.provider_class 被 Deprecated，改用 hibernate.cache.region.factory_class

__applicationContext.xml__
* 這邊範例是想在 Spring HibernateTemplate 中使用自訂 function，所以以 xml 設定。
    * 可依需求改成 property 檔設定。  
* 範例是查找 classpath 下的 hbm 與掃描 package totem 下的 Hibernate 相關 annotated class。
* totem.util.hibernate.CustomPostgreSQL94Dialect 額外自行再擴充的 Dialect 工具

```xml
     <bean id="sessionFactory"
            class="org.springframework.orm.hibernate5.LocalSessionFactoryBean"
            destroy-method="destroy">
            <property name="dataSource" ref="dataSource" />
            <property name="mappingLocations">
                    <value>classpath*:**/*.hbm.xml</value>
            </property>
            <property name="hibernateProperties">
                <props>
                    <prop key="hibernate.dialect">
                        totem.util.hibernate.CustomPostgreSQL94Dialect
                    </prop>
                    <!-- 
                    <prop key="hibernate.dialect">
                        org.hibernate.dialect.PostgreSQLDialect
                    </prop>
                     -->
                    <prop key="hibernate.show_sql">true</prop>
                    <prop key="hibernate.format_sql">false</prop>
                    <prop key="hibernate.cache.use_query_cache">true</prop>
                    
                    <prop key="hibernate.cache.region.factory_class">org.hibernate.cache.ehcache.SingletonEhCacheRegionFactory</prop>
                    
                    <prop key="hibernate.cache.provider_configuration_file_resource_path">/ehcache.xml</prop>
                    <prop key="hibernate.schema_update.unique_constraint_strategy">RECREATE_QUIETLY</prop>
                    <prop key="hibernate.id.new_generator_mappings">false</prop>
                    
                    <prop key="hibernate.jdbc.fetch_size">100</prop>
                    <prop key="hibernate.jdbc.batch_size">100</prop>
                    
                </props>
            </property>
            <property name="packagesToScan" value="totem"/>
        </bean>
```

## 註冊自行定義 function
* CustomPostgreSQL94Dialect.java 繼承自 PostgreSQL94Dialect，並註冊自行設定的 function。
* 下列範例設計一個 date_between 函數，用來將 from date 調整到該日的凌晨，與 to date 調整到該日的結束。
    * \?1,\?2,\?3.... 會被取代為傳入的第 1,2,3 位的 argument。

```sql
    column BETWEEN date_trunc('day', :from)
            AND date_trunc('day', :to) + interval '1 day' - interval '1 second'
```

```javascript
    import org.hibernate.dialect.PostgreSQL94Dialect;
    import org.hibernate.dialect.function.SQLFunctionTemplate;
    import org.hibernate.type.StringType;
    
    public class CustomPostgreSQL94Dialect extends PostgreSQL94Dialect {
        public CustomPostgreSQL94Dialect() {
            super();
            
            // 註冊自訂的 date_between 函數，自動將傳入的 from 跳到該日期的起始時間, to 跳到該日期的結束時間
            registerFunction(
                "date_between",
                new SQLFunctionTemplate(
                    StandardBasicTypes.BOOLEAN,
                    "?1 between date_trunc('day', ?2) and (date_trunc('day', ?3) + interval '1 day' - interval '1 second')"
                )
            );
        }
    }
```


## 使用範例

```sql
    String hql = " FROM Event e WHERE date_between(e.logTime, :from, :to)";
    
    List<Event> result = session.createQuery(hql, Event.class)
        .setParameter("from", fromDate)  
        .setParameter("to", toDate)
        .getResultList();
```