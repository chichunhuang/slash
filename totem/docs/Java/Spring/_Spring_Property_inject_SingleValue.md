works well


1. XML



inject single value or combined with others

combined:  #{propertyBeanId['key']}




```
    <bean id="configProperties" lazy-init="false"
        class="org.springframework.beans.factory.config.PropertiesFactoryBean">
        <property name="location">
            <value>classpath:config.properties</value>
        </property>
    </bean>
    
    
    <bean id="jdbcUrlWithPort" class="java.lang.String">
        <constructor-arg index="0">
            <value>#{configProperties['jdbc.url']}:5432</value>
        </constructor-arg>
    </bean>

    <!-- 依發布版本套用不同檔案 -->
    <bean id="customProperties" lazy-init="false"
        class="org.springframework.beans.factory.config.PropertiesFactoryBean">
        <property name="location">
            <value>classpath:totem/custom/#{configProperties['key.in.configProperties.distribution']}.properties
            </value>
        </property>
    </bean>
    
```


```
    //note: xml 中有定義 class type String
    private String jdbcUrlWithPort;
    
    //resource by name/autowired by type
    @Resource(name = "jdbcUrlWithPort")
    public void setSaltSource(String jdbcUrlWithPort) {
        this.jdbcUrlWithPort = jdbcUrlWithPort;
    }
    
```
