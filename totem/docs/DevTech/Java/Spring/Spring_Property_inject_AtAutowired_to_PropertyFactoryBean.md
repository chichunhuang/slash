---
title: Spring Properties to PropertyFactoryBean by @Autowired
description: Spring Properties to PropertyFactoryBean by @Autowired
keywords: [Spring,Properties,PropertyFactoryBean,Autowired]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Spring : 使用 @Autowired 將屬性檔 map to PropertyFactoryBean

* @Autowired by type inject spring bean
* 直接將指定屬性檔(如: config.properties)轉成 PropertyFactoryBean 來使用。

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
* java code 端取出 properties 的使用範例
* @Qualifier 是用來指名要 contex.xml 哪一個 bean。在有多個 *.properties 設定且 map to 不同名稱時使用。

<CodeBlock text={`
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
    private PropertiesFactoryBean configProperties;
    @Autowired
    @Qualifier("configProperties")
    public void setconfigProperties(PropertiesFactoryBean configProperties) {
        this.configProperties = configProperties;
    }
    @Override
    public void printProperties(){
        Properties props;
        try {
            props = configProperties.getObject();
	        Enumeration en = props.propertyNames();
	        while (en.hasMoreElements()) {
	            String key = (String) en.nextElement();
	            String Property = props.getProperty(key);
	            System.out.println(key + Property);
	        }
	        } catch (IOException e) {
	            throw new RuntimeException("unexpected", e);
	        }
    }
    `}
      language='java'
      showLineNumbers='true'
      />     

## 其他 Properties Location xml 設定的其他方式
參考: 
   * [Spring framework 注入 property 檔方式: by @Resource to Map](./Spring_Property_inject_AtResource_to_Map)
   * [Spring 下 Properties 檔注入與使用範例](./Spring_List_Proerties)

1. PathMatchingResourcePatternResolver
1. ClassPathResource
1. FileSystemResource
<br/>        