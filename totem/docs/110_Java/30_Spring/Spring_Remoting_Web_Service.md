---
title: Spring Restful API 取值練習
description: Spring Remoting and Web Service
keywords: [Spring,Restful API]
---

    * 參考: 
        * [Remoting and web services using Spring](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/remoting.html)
        * [http://gturnquist-quoters.cfapps.io/api/random](http://gturnquist-quoters.cfapps.io/api/random)
    * 版本 Spring 4.x
    
* [Spring Wicket Restful API 整併練習](./Spring_Wicket_Restful)
* [Spring Restful API 練習](./Spring_Restful)

## Dependencies 

__pom.xml__

```xml

    <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-annotations -->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-annotations</artifactId>
        <version>2.8.6</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-core -->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-core</artifactId>
        <version>2.8.6</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind -->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.8.6</version>
    </dependency>
     
    <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.dataformat/jackson-dataformat-xml -->
    <dependency>
        <groupId>com.fasterxml.jackson.dataformat</groupId>
        <artifactId>jackson-dataformat-xml</artifactId>
        <version>2.8.6</version>
    </dependency>

```


## 向 RESTful server 取 String 資料 
* 取得 JASON String 並自行使用 ObjectMapper 轉換成指定型別

```javascript

        //向 RESTful server 取資料範例
        import org.springframework.web.client.RestTemplate;
        ------------------------------------------------------------
        RestTemplate restTemplate = new RestTemplate();
        String uri = "http://opendata.cwb.gov.tw/opendataapi?dataid=F-A0012-001&authorizationkey=CWB-936FC500-F62C-487C-95C9-BB17DD188132";
        String result = restTemplate.getForObject(uri, String.class);
         
        System.out.println("2----------------------"+result);
 
  
        // 自行 parse JSON 成 JsonResp.class 範例
        import com.fasterxml.jackson.databind.ObjectMapper;
        ------------------------------------------------------------       
        String test ="{'type':'success','value':{'id':3,'quote':'Spring has come quite a ways in addressing developer enjoyment and ease of use since the last time I built an application using it.'}}";
        ObjectMapper mapper = new ObjectMapper();
        try {
            JsonResp read = mapper.readValue(test, JsonResp.class);
            System.out.println(read.getType()); // Enum
            System.out.println(read.getValue().getId()); //Long
            System.out.println(read.getValue().getQuote()); //String
        } catch (IOException e) {
            throw new RuntimeException("unexpected", e);
        }
```

## 向 RESTful server 取 POJO 資料 
* 直接將 server 端資料轉成指定 Entity
    * 可以是 composite 結構 

__指定 POJO 型別: Quote and Value class__
* @JsonIgnoreProperties\(ignoreUnknown = true) : 忽略 JSON 中有出現，但 Entity 中不打算 mapping 的資料


__Quote.java__

```javascript
    package insect.totem.restful;
    import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
    @JsonIgnoreProperties(ignoreUnknown = true)
    public class Quote {
        private String type;
        private Value value; // composite
        public Quote() {
        }

        @Override
        public String toString() {
            return "Quote{" +
                    "type='" + type + '\'' +
                    ", value=" + value +
                    '}';
        }
        
        getters/setters...
    }
```

__Value.java__

```javascript
    package insect.totem.restful;
    import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
    @JsonIgnoreProperties(ignoreUnknown = true)
    public class Value {
        private Long id;
        private String quote;
        public Value() {}
        public Long getId() {
            return this.id;
        }
        public String getQuote() {
            return this.quote;
        }
        public void setId(Long id) {
            this.id = id;
        }
        public void setQuote(String quote) {
            this.quote = quote;
        }
        @Override
        public String toString() {
            return "Value{" + "id=" + id + ", quote='" + quote + '\'' + '}';
        }
    }
```

__Restful Service__
* 搭配 restTemplate.getForObject\() method

```javascript
    //向 RESTful server 取資料範例
    import org.springframework.web.client.RestTemplate;
    ------------------------------------------------------------
    //Test JSON
            RestTemplate restTemplate = new RestTemplate();
            String uri = "http://gturnquist-quoters.cfapps.io/api/random";
            Quote  result = restTemplate.getForObject(uri, Quote .class);
```


## 向 RESTful server 取集合資料 
* 搭配 restTemplate.getForEntity\() method

```javascript
            // 若restful server回傳的是collection資料
            RestTemplate restTemplate = new RestTemplate();
            String uri = "http://localhost:8080/insect/totem/collection";
            ResponseEntity<JsonResp[]> responseEntity = restTemplate.getForEntity(uri, JsonResp[].class);
            JsonResp[] data = responseEntity.getBody();
```

## 向 RESTful server 取 xml 資料
* 向氣象局取 xml 資料

__目標結果格式: cwbopendata.java__
* POJO 內的 attribute 與 XML 中的 element 須同名
* 或是以 @JacksonXmlProperty\(localName = "identifier") 指定, element 名稱
* @JsonIgnoreProperties\(ignoreUnknown = true) : 忽略 XML 中有出現的 elements ，但 Entity 中不打算 mapping 的資料

```javascript
    package insect.totem.restful;
    import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
    import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
    import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
    @JacksonXmlRootElement
    @JsonIgnoreProperties(ignoreUnknown = true)
    public class cwbopendata {
        @JacksonXmlProperty(localName = "identifier")
        private String identifier__;

        @JacksonXmlProperty(localName = "sender")
        private String sender;

        @JacksonXmlProperty(localName = "sent")
        private String sent;

        @JacksonXmlProperty(localName = "status")
        private String status;
       
       getters/setters...
    }

```



__RestService: XmlMapper__
* 先取得 String 再搭配使用 XmlMapper 

```javascript
    RestTemplate restTemplate = new RestTemplate();
     
    String text = restTemplate.getForObject(
            "http://opendata.cwb.gov.tw/opendataapi?dataid=F-A0012-001&authorizationkey=CWB-936FC500-F62C-487C-95C9-BB17DD188132",
            String.class);
    XmlMapper mapper = new XmlMapper();
    try {
        cwbopendata value =
                mapper.readValue(text, cwbopendata.class);
         
        System.out.println("-------------------------------------------");
        System.out.println(text);
        System.out.println("-------------------------------------------");
         
        System.out.println(value.getIdentifier__());
        System.out.println(value.getSender());
        System.out.println(value.getSent());
        System.out.println(value.getStatus());
    } catch (IOException e) {
        throw new RuntimeException("unexpected", e);
    }
```

__RestService: POJO__
* 直接將 xml 轉 Entity 

```javascript
    RestTemplate restTemplate = new RestTemplate();
     
    cwbopendata value = restTemplate.getForObject(
            "http://opendata.cwb.gov.tw/opendataapi?dataid=F-A0012-001&authorizationkey=CWB-936FC500-F62C-487C-95C9-BB17DD188132",
            cwbopendata.class);
        System.out.println(value.getIdentifier__());
        System.out.println(value.getSender());
        System.out.println(value.getSent());
        System.out.println(value.getStatus());
```
