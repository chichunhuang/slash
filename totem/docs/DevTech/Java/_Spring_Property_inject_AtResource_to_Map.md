works well


    <bean id="configProperties" lazy-init="false"
        class="org.springframework.beans.factory.config.PropertiesFactoryBean">
        <property name="location">
            <value>classpath:config.properties</value>
        </property>
    </bean>
    
    




    @Override
    public void printProperties(){
        for (String string : getConfigProperties().keySet()) {
            System.out.println(string + " : " + getConfigProperties().get(string));
        }
    }

    @Resource(name="configProperties")
    private Map<String, String> configProperties;
    
    public Map<String, String> getConfigProperties() {
        return configProperties;
    }

    public void setConfigProperties(Map<String, String> configProperties) {
        this.configProperties = configProperties;
    }