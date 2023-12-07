


reference : 
https://www.baeldung.com/configuration-properties-in-spring-boot


sprint boot 2.2+

1. POJO with geters / setters

```
public class DataSource {
    private String url;
    private String driverClassName;
    private String username;
    private String password;
    //getters & setters, etc.
}

```


2. Inject

* @Configuration 
* @ConfigurationProperties

```
@Component
@ConfigurationProperties(prefix="spring.datasource")
public DataSource dataSource() {
    return new DataSource();
}
```