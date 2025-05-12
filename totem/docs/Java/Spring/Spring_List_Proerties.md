---
title: Spring 下 Properties 檔注入與使用範例
description: Spring 下 Properties 檔注入與使用範例
keywords: [Spring,Properties,PropertyFactoryBean]
---

# Spring 下 Properties 檔注入與使用範例

* 相關閱讀 
   * [Spring framework 注入 property 檔方式: by @Autowired to PropertyFactoryBean](./Spring_Property_inject_AtAutowired_to_PropertyFactoryBean)
   * [Spring framework 注入 property 檔方式: by @Resource to Map](./Spring_Property_inject_AtResource_to_Map)


# Properties 檔的功用

> 不管是遵循 ISO 或是採納 DevOps 等流程。通常開發端與維運端必須 __權責分離__ 。
> 但畢竟是多組人共同協作，要如何釐清系統問題不是來自開發端而是維運端設定的問題呢?
> 畢竟我這邊偶而發生 MIS 屬性檔設定錯誤而造成系統無法開啟的問題。
> 例如: 與其他系統互動的 host name 或 IP 設錯，正式機指向練習機。
> 或是你 bla bla~ 的連 DB 帳密都改錯。
> 只好先小人提供 App 管理人查詢特定系統參數的功能。
> 也順便寫了這份註記。

## 一個專案該有幾個屬性檔呢?
> 我這邊的習慣是至少兩個。如此設定也是因為權責分離，減少 MIS 維護時出錯。
> 一個是與維運相關: 例如 IP / DB 帳密 / Mail Server / Exception 發生時的告警對象。
> 另一個是系統參數相關: 與應用相關的設定 MIS 不須知道。
> 我這做是因為，這邊部分維運人員會以屬性檔更換的方式來改參數。請假時交接又不清楚，職代九成九會出錯。
> 為避免紛爭，所以提供系統管理員查詢畫面。

# PathMatchingResourcePatternResolver 直接讀取屬性檔
1. 第一個方式直接讀取屬性檔，這邊是採用 <span style={{color: '#0044FF'}}>PathMatchingResourcePatternResolver</span> 類別，直接以 pattern 告知屬性檔位置。然後再看你想輸出到那裡囉。這邊先直接輸出到 Console.
1. 這邊假設屬性檔名為 config.properties。

* PropertiesFactoryBeanServiceImpl.java 範例
```
    @Service
    public class PropertiesFactoryBeanServiceImpl
            implements PropertiesFactoryBeanService {
            
        public PropertiesFactoryBean configProperties() throws Exception {
            PropertiesFactoryBean propertiesFactoryBean = new PropertiesFactoryBean();
            PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
            propertiesFactoryBean.setLocations(
                    resolver.getResources("classpath*:config.properties"));
            return propertiesFactoryBean;
        }
    
        @Override
        public void doPrintAllPrperties() {
            try {
                PropertiesFactoryBean factory = configProperties();
                factory.afterPropertiesSet();
                Properties props = factory.getObject();
    
                @SuppressWarnings("rawtypes")
                Enumeration en = props.propertyNames();
                while (en.hasMoreElements()) {
                    String key = (String) en.nextElement();
                    String Property = props.getProperty(key);
                    System.out.println(key + Property);
                }
            } catch (Exception e) {
                throw new RuntimeException("unexpected", e);
            }
        }
    }
```
 
## PropertiesFactoryBean Location 設定的其他方式
1. PathMatchingResourcePatternResolver
1. ClassPathResource
1. FileSystemResource


* ClassPathResource 範例
```
  PropertiesFactoryBean bean = new PropertiesFactoryBean();
  bean.setLocation(new ClassPathResource("bar/foo/app.properties"));
```

* FileSystemResource 範例
```
  PropertiesFactoryBean bean = new PropertiesFactoryBean();
  bean.setFileEncoding("UTF-8");
  bean.setLocation(new FileSystemResource("file:ENV_VAR/appConfig/3rdConfig.properties"));
```
 
 
# 自 Spring Application Context 中取出 Property Bean
* 部分舊專案可能混雜使用 xml 設定此時則可直接取出 property bean 即可。

* applicationContext.xml : 這邊註冊了 id 為 configProperties 的 bean
```
    <bean id="configProperties" lazy-init="false"
        class="org.springframework.beans.factory.config.PropertiesFactoryBean">
        <property name="location">
            <value>classpath:config.properties</value>
        </property>
    </bean>
```

* PropertiesFactoryBeanServiceImpl.java 範例
    * 註: 前面說過這邊習慣有多個 *.properties 檔，所以 inject 時使用 @Qualifier 注入。未再 by Type 自動 inject。

```
@Service
public class PropertiesFactoryBeanServiceImpl
        implements PropertiesFactoryBeanService {
    private PropertiesFactoryBean configProperties;
    @Autowired
    @Qualifier("configProperties")
    public void setconfigProperties(PropertiesFactoryBean configProperties) {
        this.configProperties = configProperties;
    }
    @Override
    public void doPrintAllPrperties() {
        try {
            PropertiesFactoryBean factory2 = configProperties;
            factory2.afterPropertiesSet();
            Properties props = factory2.getObject();
            @SuppressWarnings("rawtypes")
            Enumeration en = props.propertyNames();
            while (en.hasMoreElements()) {
                String key = (String) en.nextElement();
                String Property = props.getProperty(key);
                System.out.println(key + Property);
            }
        } catch (Exception e) {
            throw new RuntimeException("unexpected", e);
        }
    }
}
```
     
# 相關 3rd party libraries
    * import java.util.Enumeration;
    * import java.util.Properties;
    * import org.springframework.beans.factory.annotation.Autowired;
    * import org.springframework.beans.factory.annotation.Qualifier;
    * import org.springframework.beans.factory.config.PropertiesFactoryBean;
    * import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
    * import org.springframework.stereotype.Service;      