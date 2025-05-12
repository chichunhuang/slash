---
title: Spring Properties to Map by @Resource
description: Spring Properties to Map by @Resource
keywords: [Spring,Properties,Resource]
---

# Spring : 使用 @Resource 將屬性檔映射成一個 Map

* @Resource by name or id inject spring bean
* 直接將指定屬性檔(如: config.properties)轉成 Map 來使用。


## applicationContex.xml 屬性檔範例: 

* applicationContex.xml: 這邊以 classpath 路徑指名要匯入的屬性檔案(config.properties)

```xml
    <bean id="configProperties" lazy-init="false"
        class="org.springframework.beans.factory.config.PropertiesFactoryBean">
        <property name="location">
            <value>classpath:config.properties</value>
        </property>
    </bean>
```   


## Java 端取出屬性檔範例: 
* java code 端取出 properties Map 的使用範例
* @Resource 是用來指名要 contex.xml 中哪一個 bean。在有多個 *.properties 設定且 map to 不同名稱時使用。

```
    @Resource(name="configProperties")
    private Map<String, String> configProperties;
    public Map<String, String> getConfigProperties() {
        return configProperties;
    }
    public void setConfigProperties(Map<String, String> configProperties) {
        this.configProperties = configProperties;
    }
    @Override
    public void printProperties(){
        for (String string : getConfigProperties().keySet()) {
            System.out.println(string + " : " + getConfigProperties().get(string));
        }
    }
```      

## 其他 Properties Location xml 設定的其他方式
參考: 
   * [Spring framework 注入 property 檔方式: by @Autowired to PropertyFactoryBean](./Spring_Property_inject_AtAutowired_to_PropertyFactoryBean)
   * [Spring 下 Properties 檔注入與使用範例](./Spring_List_Proerties)

1. PathMatchingResourcePatternResolver
1. ClassPathResource
1. FileSystemResource
<br/>



  