---
title: Spring Wicket Restful 
description: Spring Wicket Restful API 整併練習
keywords: [Spring,Restful,Wicket]
---

> Wicket7.x  
> Spring4.x  

* 參考 [Wicket 7.x 提供 RESTful Service 整合方式](https://github.com/wicketstuff/core/tree/master/wicketstuff-restannotations-parent)
* [Spring Restful API 取值練習](./Spring_Remoting_Web_Service)
* [Spring Restful API 練習](./Spring_Restful)

## Dependencies
* wicketstuff-restannotations

```xml
    <!-- https://mvnrepository.com/artifact/org.wicketstuff/wicketstuff-restannotations -->
    <dependency>
        <groupId>org.wicketstuff</groupId>
        <artifactId>wicketstuff-restannotations</artifactId>
        <version>7.6.0</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.wicketstuff/wicketstuff-restannotations-json -->
    <dependency>
        <groupId>org.wicketstuff</groupId>
        <artifactId>wicketstuff-restannotations-json</artifactId>
        <version>7.6.0</version>
    </dependency>
```


## 相關實作類別
* AccountRestResource 
    * RestResource: 提供RESTful verbs(GET,POST,DELETE,CREATE) 主體的類別
* WebApplication
    * Wicket 用來 Mount RestResource 位置     


## RestResource: AccountRestResource
* 下列範例是 HttpMethod.GET
* 注意 MethodMapping annotation 的值: /roles，與RESTful Service 根目錄組合後便是該服務的URI \(http://localhost:8080/appName/accmanager/roles)

```javascript
    import java.util.List;
     
    import org.wicketstuff.rest.annotations.MethodMapping;
    import org.wicketstuff.rest.contenthandling.json.objserialdeserial.GsonObjectSerialDeserial;
    import org.wicketstuff.rest.contenthandling.json.webserialdeserial.JsonWebSerialDeserial;
    import org.wicketstuff.rest.resource.AbstractRestResource;
     
    import thor.account.AccountService;
    import thor.core.role.Role;
     
    public class AccountRestResource extends AbstractRestResource<JsonWebSerialDeserial> {
     
        private RestfulService service;
     
        public AccountRestResource(RestfulService restService) {
            super(new JsonWebSerialDeserial(new GsonObjectSerialDeserial()));
            this.service = restService;
        }
     
        @MethodMapping("/roles")
        public List<Role> getAllPersons() {
            return service.queryAllRoles();
        }
     
    //    @MethodMapping(value = "/roles/{index}", httpMethod = HttpMethod.DELETE)
    //    public void deleteRole(int index) {
    //        ...
    //    }
    //
    //    @MethodMapping(value = "/roles", httpMethod = HttpMethod.POST)
    //    public Role createRole(
    //            @ValidatorKey("roleValidator") @RequestBody Role newRole) {
    //       ...
    //    }
    //
    //    @Override
    //    protected void onInitialize(JsonWebSerialDeserial objSerialDeserial) {
    //        super.onInitialize(objSerialDeserial);
    //        registerValidator("roleValidator", new RoleValidator());
    //    }
     
     }
```

## Wicket WebApplication.class
* 在 WebApplication 的 init\() 下 mount Restful Resource
* 須在此處先找出 Resource 所需的 Beans
* 注意: mountResource 的第一個參數 path : /accmanager，這是這個 REST Service 的根目錄

```javascript

    @Override
    protected void init() {
        super.init();
        mountRestfulService();
           
    }
  
    public void mountRestfulService() {
        final RestService restService = getRestfulService();
             
            mountResource("/accmanager", new ResourceReference("accRestReference") {
            AccountRestResource resource = new AccountRestResource(
                    restService );
 
            @Override
            public IResource getResource() {
                return resource;
            }
        });
    }
  
    public RestService getRestfulService() {
       ServletContext sc = WebApplication.get().getServletContext();
      WebApplicationContext applicationContext = WebApplicationContextUtils
              .getWebApplicationContext(sc);
 
        RestfulService restService = (RestfulService)applicationContext
                .getBean("restfulServiceImpl");
        return restService;
    }
```

## Client 呼叫使用

>  另啟一Browser 呼叫  
>  http://localhost:8080/appName/accmanager/roles 便會得到 JASON format 的 Roles 資訊  
>  \(AccountRestResource 採用 JsonWebSerialDeserial, GsonObjectSerialDeserial )  
>  
>  也可使用  
>  JacksonWebSerialDeserial, JacksonObjectSerialDeserial 或是同時支援多種 types 的實作 MultiFormatSerialDeserial   
>  可參考 https://github.com/wicketstuff/core/tree/master/wicketstuff-restannotations-parent  