"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[6598],{8449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(3905)),i=r(1424);const a={title:"Spring Properties to PropertyFactoryBean by @Autowired",description:"Spring Properties to PropertyFactoryBean by @Autowired",keywords:["Spring","Properties","PropertyFactoryBean","Autowired"]},p="Spring : \u4f7f\u7528 @Autowired \u5c07\u5c6c\u6027\u6a94 map to PropertyFactoryBean",l={unversionedId:"DevTech/Java/Spring/Spring_Property_inject_AtAutowired_to_PropertyFactoryBean",id:"DevTech/Java/Spring/Spring_Property_inject_AtAutowired_to_PropertyFactoryBean",title:"Spring Properties to PropertyFactoryBean by @Autowired",description:"Spring Properties to PropertyFactoryBean by @Autowired",source:"@site/docs/DevTech/Java/Spring/Spring_Property_inject_AtAutowired_to_PropertyFactoryBean.md",sourceDirName:"DevTech/Java/Spring",slug:"/DevTech/Java/Spring/Spring_Property_inject_AtAutowired_to_PropertyFactoryBean",permalink:"/zh-tw/docs/DevTech/Java/Spring/Spring_Property_inject_AtAutowired_to_PropertyFactoryBean",draft:!1,tags:[],version:"current",frontMatter:{title:"Spring Properties to PropertyFactoryBean by @Autowired",description:"Spring Properties to PropertyFactoryBean by @Autowired",keywords:["Spring","Properties","PropertyFactoryBean","Autowired"]},sidebar:"tutorialSidebar",previous:{title:"Spring \u4e0b Properties \u6a94\u6ce8\u5165\u8207\u4f7f\u7528\u7bc4\u4f8b",permalink:"/zh-tw/docs/DevTech/Java/Spring/Spring_List_Proerties"},next:{title:"Spring Properties to Map by @Resource",permalink:"/zh-tw/docs/DevTech/Java/Spring/Spring_Property_inject_AtResource_to_Map"}},c={},s=[{value:"applicationContex.xml \u5c6c\u6027\u6a94\u7bc4\u4f8b:",id:"applicationcontexxml-\u5c6c\u6027\u6a94\u7bc4\u4f8b",level:2},{value:"Java \u7aef\u53d6\u51fa\u5c6c\u6027\u6a94\u7bc4\u4f8b:",id:"java-\u7aef\u53d6\u51fa\u5c6c\u6027\u6a94\u7bc4\u4f8b",level:2},{value:"\u5176\u4ed6 Properties Location xml \u8a2d\u5b9a\u7684\u5176\u4ed6\u65b9\u5f0f",id:"\u5176\u4ed6-properties-location-xml-\u8a2d\u5b9a\u7684\u5176\u4ed6\u65b9\u5f0f",level:2}],u={toc:s},y="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(y,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"spring--\u4f7f\u7528-autowired-\u5c07\u5c6c\u6027\u6a94-map-to-propertyfactorybean"},"Spring : \u4f7f\u7528 @Autowired \u5c07\u5c6c\u6027\u6a94 map to PropertyFactoryBean"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@Autowired by type inject spring bean"),(0,n.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5c07\u6307\u5b9a\u5c6c\u6027\u6a94(\u5982: config.properties)\u8f49\u6210 PropertyFactoryBean \u4f86\u4f7f\u7528\u3002")),(0,n.kt)("h2",{id:"applicationcontexxml-\u5c6c\u6027\u6a94\u7bc4\u4f8b"},"applicationContex.xml \u5c6c\u6027\u6a94\u7bc4\u4f8b:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"applicationContex.xml: \u9019\u908a\u4ee5 classpath \u8def\u5f91\u6307\u540d\u8981\u532f\u5165\u7684\u5c6c\u6027\u6a94\u6848(config.properties)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'    <bean id="configProperties" lazy-init="false"\n        class="org.springframework.beans.factory.config.PropertiesFactoryBean">\n        <property name="location">\n            <value>classpath:config.properties</value>\n        </property>\n    </bean>\n')),(0,n.kt)("h2",{id:"java-\u7aef\u53d6\u51fa\u5c6c\u6027\u6a94\u7bc4\u4f8b"},"Java \u7aef\u53d6\u51fa\u5c6c\u6027\u6a94\u7bc4\u4f8b:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"java code \u7aef\u53d6\u51fa properties \u7684\u4f7f\u7528\u7bc4\u4f8b"),(0,n.kt)("li",{parentName:"ul"},"@Qualifier \u662f\u7528\u4f86\u6307\u540d\u8981 contex.xml \u54ea\u4e00\u500b bean\u3002\u5728\u6709\u591a\u500b *.properties \u8a2d\u5b9a\u4e14 map to \u4e0d\u540c\u540d\u7a31\u6642\u4f7f\u7528\u3002")),(0,n.kt)(i.dn,{text:'\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Qualifier;\n    private PropertiesFactoryBean configProperties;\n    @Autowired\n    @Qualifier("configProperties")\n    public void setconfigProperties(PropertiesFactoryBean configProperties) {\n        this.configProperties = configProperties;\n    }\n    @Override\n    public void printProperties(){\n        Properties props;\n        try {\n            props = configProperties.getObject();\n\t        Enumeration en = props.propertyNames();\n\t        while (en.hasMoreElements()) {\n\t            String key = (String) en.nextElement();\n\t            String Property = props.getProperty(key);\n\t            System.out.println(key + Property);\n\t        }\n\t        } catch (IOException e) {\n\t            throw new RuntimeException("unexpected", e);\n\t        }\n    }\n    ',language:"java",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,n.kt)("h2",{id:"\u5176\u4ed6-properties-location-xml-\u8a2d\u5b9a\u7684\u5176\u4ed6\u65b9\u5f0f"},"\u5176\u4ed6 Properties Location xml \u8a2d\u5b9a\u7684\u5176\u4ed6\u65b9\u5f0f"),(0,n.kt)("p",null,"\u53c3\u8003: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Spring_Property_inject_AtResource_to_Map"},"Spring framework \u6ce8\u5165 property \u6a94\u65b9\u5f0f: by @Resource to Map")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Spring_List_Proerties"},"Spring \u4e0b Properties \u6a94\u6ce8\u5165\u8207\u4f7f\u7528\u7bc4\u4f8b"))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"PathMatchingResourcePatternResolver"),(0,n.kt)("li",{parentName:"ol"},"ClassPathResource"),(0,n.kt)("li",{parentName:"ol"},"FileSystemResource",(0,n.kt)("br",null))))}g.isMDXComponent=!0}}]);