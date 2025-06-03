---
title: Spring Restful API 
description: Spring Restful API 練習
keywords: [Spring,Restful]
---

> 在 Spring Framework 為底的 Web 專案下，增加 Restful API 服務  

* [Spring Wicket Restful API 整併練習](./Spring_Wicket_Restful)
* [Spring Restful API 取值練習](./Spring_Remoting_Web_Service)

## Dependency
* jackson-core-asl-1.7.4.jar
* jackson-mapper-asl-1.7.4.jar

## Container 設定

___web.xml___

* resource: /restful/*
* rest-servlet.xml

```xml
    <servlet-mapping>
            <servlet-name>rest</servlet-name>
            <url-pattern>/restful/*</url-pattern>
    </servlet-mapping>
      
     <servlet>
        <servlet-name>rest</servlet-name>
        <servlet-class>
            org.springframework.web.servlet.DispatcherServlet
        </servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>
                WEB-INF/classes/rest-servlet.xml
            </param-value>
        </init-param>
        <load-on-startup>3</load-on-startup>
    </servlet>
```


## Controller 設定
* scan restful 相關 annotations
* 設定 json 格式的轉換

___rest-servlet.xml___

```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
     xsi:schemaLocation="
     http://www.springframework.org/schema/beans
     http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
     http://www.springframework.org/schema/context
     http://www.springframework.org/schema/context/spring-context-3.0.xsd
     http://www.springframework.org/schema/mvc
     http://www.springframework.org/schema/mvc/spring-mvc-3.0.xsd">
     <context:component-scan base-package="ngc.restful.controller" />
      
         <!-- To enable @RequestMapping process on type level and method level -->
         <bean class="org.springframework.web.servlet.mvc.annotation.DefaultAnnotationHandlerMapping" />
          
         <bean class="org.springframework.web.servlet.mvc.annotation.AnnotationMethodHandlerAdapter">
             <property name="messageConverters">
             <list>
                <ref bean="jsonConverter" />
             </list>
             </property>
         </bean>
          
         <!-- use MappingJacksonHttpMessageConverter to do Serialization/Deserialization of JSON -->
         <bean id="jsonConverter"
         class="org.springframework.http.converter.json.MappingJacksonHttpMessageConverter">
            <property name="supportedMediaTypes" value="application/json" />
         </bean>
      
    </beans>
```


## Controller 類別範例

```javascript

    package ngc.restful.controller;
    import org.springframework.stereotype.Controller;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RequestMethod;
    import org.springframework.web.bind.annotation.ResponseBody;
    import ngc.restful.Employee;

    @Controller
    @RequestMapping("/members")
    public class EmployeeRestController {
        @RequestMapping(value = "/totem", method = RequestMethod.GET)
        @ResponseBody
        public Employee get() {
            Employee empOne = new Employee(1, "Totem", "totem@dummy.org");
            System.out.println("test1");
            return empOne;
        }
        @RequestMapping(value = "/insect", method = RequestMethod.GET)
        @ResponseBody
        public Employee get2() {
            Employee empOne = new Employee(12, "Insect", "insect@dummy.org");
            return empOne;
        }
    }

```

* 註: 
    web.xml 有加一個 filter，做權限控管

```javascript

    import java.security.Principal;
    
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.security.access.prepost.PreAuthorize;
    import org.springframework.web.bind.annotation.*;
    
    import insect.totem.specimen.service.LabelService;
    import insect.totem.vo.wrapper.ResponseData;
    import insect.totem.vo.Label;
    
    @CrossOrigin
    @RequestMapping("/specimen/label")
    @RestController
    public class LabelController {
        
        private static final Logger log = LoggerFactory.getLogger(LabelController.class);
    
        @Autowired
        private LabelService labelService;
    
        @PreAuthorize("hasAnyRole('ROLE_SPECIMEN_LABEL_QUERY')")
        @GetMapping(value = "/{orderId}/findLabel")
        public ResponseData<Label> findSerialNoData(Principal principal,
                @PathVariable("orderId") String orderId) throws Exception {
            
            return labelService.find();
        }
    
        @PreAuthorize("hasAnyRole('ROLE_SPECIMEN_LABEL_INSERT')")
        @PostMapping(value = "/{orderId}/insertLabels")
        public ResponseData<Label> generateLabels(Principal principal,
                @PathVariable("orderId") String orderId, @RequestBody @Valid LabelBean LabelBean) throws Exception {
    
            return labelService.insert();
        }

        @PreAuthorize("hasAnyRole('ROLE_specimen_LABEL_REMOVE')")
        @DeleteMapping(value = "/{orderId}/deleteLabels")
        public ResponseData<Result> deleteLabels(Principal principal,
                @PathVariable("orderId") String orderId) throws Exception {
    
            return labelService.delete();
        }
    }
```

## Entity

```javascript
    package ngc.restful;
    public class Employee {
        private long id;
        private String name;
        private String email;
        public Employee() {}
        public Employee(long id, String name, String email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }

        @Override
        public String toString() {
            return "Employee [id=" + id + ", name=" + name
                    + ", email=" + email + "]";
        }
        
        getters/setters...
    }
```


## Invoke

```javascript

    public class GetJsonTest {
        public static void main(String args[]) {
            RestTemplate restTemplate = new RestTemplate();
            Employee person = restTemplate.getForObject(
                    "http://localhost:8080/appName/restful/members/totem", Employee.class);
            System.out.println("ID: " + person.getId());
            System.out.println("Name: " + person.getName());
            System.out.println("Email: " + person.getEmail());
        }
    }
```

