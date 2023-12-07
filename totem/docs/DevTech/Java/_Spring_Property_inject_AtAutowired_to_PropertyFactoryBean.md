works well


    <bean id="configProperties" lazy-init="false"
        class="org.springframework.beans.factory.config.PropertiesFactoryBean">
        <property name="location">
            <value>classpath:config.properties</value>
        </property>
    </bean>
    
    


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