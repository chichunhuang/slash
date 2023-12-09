"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[5395],{4904:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905)),i=t(1424);const a={title:"Spring \u4e0b Properties \u6a94\u6ce8\u5165\u8207\u4f7f\u7528\u7bc4\u4f8b",description:"Spring \u4e0b Properties \u6a94\u6ce8\u5165\u8207\u4f7f\u7528\u7bc4\u4f8b",keywords:["Spring","Properties","PropertyFactoryBean"]},p="Spring \u4e0b Properties \u6a94\u6ce8\u5165\u8207\u4f7f\u7528\u7bc4\u4f8b",s={unversionedId:"DevTech/Java/Spring/Spring_List_Proerties",id:"DevTech/Java/Spring/Spring_List_Proerties",title:"Spring \u4e0b Properties \u6a94\u6ce8\u5165\u8207\u4f7f\u7528\u7bc4\u4f8b",description:"Spring \u4e0b Properties \u6a94\u6ce8\u5165\u8207\u4f7f\u7528\u7bc4\u4f8b",source:"@site/docs/DevTech/Java/Spring/Spring_List_Proerties.md",sourceDirName:"DevTech/Java/Spring",slug:"/DevTech/Java/Spring/Spring_List_Proerties",permalink:"/docs/DevTech/Java/Spring/Spring_List_Proerties",draft:!1,tags:[],version:"current",frontMatter:{title:"Spring \u4e0b Properties \u6a94\u6ce8\u5165\u8207\u4f7f\u7528\u7bc4\u4f8b",description:"Spring \u4e0b Properties \u6a94\u6ce8\u5165\u8207\u4f7f\u7528\u7bc4\u4f8b",keywords:["Spring","Properties","PropertyFactoryBean"]},sidebar:"tutorialSidebar",previous:{title:"\u975e\u6b63\u898fSession Fixation\u8655\u7406",permalink:"/docs/DevTech/Java/Session_Fixation_Wicket"},next:{title:"Spring Properties to PropertyFactoryBean by @Autowired",permalink:"/docs/DevTech/Java/Spring/Spring_Property_inject_AtAutowired_to_PropertyFactoryBean"}},c={},l=[{value:"\u4e00\u500b\u5c08\u6848\u8a72\u6709\u5e7e\u500b\u5c6c\u6027\u6a94\u5462?",id:"\u4e00\u500b\u5c08\u6848\u8a72\u6709\u5e7e\u500b\u5c6c\u6027\u6a94\u5462",level:2},{value:"PropertiesFactoryBean Location \u8a2d\u5b9a\u7684\u5176\u4ed6\u65b9\u5f0f",id:"propertiesfactorybean-location-\u8a2d\u5b9a\u7684\u5176\u4ed6\u65b9\u5f0f",level:2}],u={toc:l},y="wrapper";function g(e){let{components:r,...t}=e;return(0,o.kt)(y,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spring-\u4e0b-properties-\u6a94\u6ce8\u5165\u8207\u4f7f\u7528\u7bc4\u4f8b"},"Spring \u4e0b Properties \u6a94\u6ce8\u5165\u8207\u4f7f\u7528\u7bc4\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u76f8\u95dc\u95b1\u8b80 ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./Spring_Property_inject_AtAutowired_to_PropertyFactoryBean"},"Spring framework \u6ce8\u5165 property \u6a94\u65b9\u5f0f: by @Autowired to PropertyFactoryBean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./Spring_Property_inject_AtResource_to_Map"},"Spring framework \u6ce8\u5165 property \u6a94\u65b9\u5f0f: by @Resource to Map"))))),(0,o.kt)("h1",{id:"properties-\u6a94\u7684\u529f\u7528"},"Properties \u6a94\u7684\u529f\u7528"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e0d\u7ba1\u662f\u9075\u5faa ISO \u6216\u662f\u63a1\u7d0d DevOps \u7b49\u6d41\u7a0b\u3002\u901a\u5e38\u958b\u767c\u7aef\u8207\u7dad\u904b\u7aef\u5fc5\u9808 ",(0,o.kt)("strong",{parentName:"p"},"\u6b0a\u8cac\u5206\u96e2")," \u3002\n\u4f46\u7562\u7adf\u662f\u591a\u7d44\u4eba\u5171\u540c\u5354\u4f5c\uff0c\u8981\u5982\u4f55\u91d0\u6e05\u7cfb\u7d71\u554f\u984c\u4e0d\u662f\u4f86\u81ea\u958b\u767c\u7aef\u800c\u662f\u7dad\u904b\u7aef\u8a2d\u5b9a\u7684\u554f\u984c\u5462?\n\u7562\u7adf\u6211\u9019\u908a\u5076\u800c\u767c\u751f MIS \u5c6c\u6027\u6a94\u8a2d\u5b9a\u932f\u8aa4\u800c\u9020\u6210\u7cfb\u7d71\u7121\u6cd5\u958b\u555f\u7684\u554f\u984c\u3002\n\u4f8b\u5982: \u8207\u5176\u4ed6\u7cfb\u7d71\u4e92\u52d5\u7684 host name \u6216 IP \u8a2d\u932f\uff0c\u6b63\u5f0f\u6a5f\u6307\u5411\u7df4\u7fd2\u6a5f\u3002\n\u6216\u662f\u4f60 bla bla~ \u7684\u9023 DB \u5e33\u5bc6\u90fd\u6539\u932f\u3002\n\u53ea\u597d\u5148\u5c0f\u4eba\u63d0\u4f9b App \u7ba1\u7406\u4eba\u67e5\u8a62\u7279\u5b9a\u7cfb\u7d71\u53c3\u6578\u7684\u529f\u80fd\u3002\n\u4e5f\u9806\u4fbf\u5beb\u4e86\u9019\u4efd\u8a3b\u8a18\u3002")),(0,o.kt)("h2",{id:"\u4e00\u500b\u5c08\u6848\u8a72\u6709\u5e7e\u500b\u5c6c\u6027\u6a94\u5462"},"\u4e00\u500b\u5c08\u6848\u8a72\u6709\u5e7e\u500b\u5c6c\u6027\u6a94\u5462?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u9019\u908a\u7684\u7fd2\u6163\u662f\u81f3\u5c11\u5169\u500b\u3002\u5982\u6b64\u8a2d\u5b9a\u4e5f\u662f\u56e0\u70ba\u6b0a\u8cac\u5206\u96e2\uff0c\u6e1b\u5c11 MIS \u7dad\u8b77\u6642\u51fa\u932f\u3002\n\u4e00\u500b\u662f\u8207\u7dad\u904b\u76f8\u95dc: \u4f8b\u5982 IP / DB \u5e33\u5bc6 / Mail Server / Exception \u767c\u751f\u6642\u7684\u544a\u8b66\u5c0d\u8c61\u3002\n\u53e6\u4e00\u500b\u662f\u7cfb\u7d71\u53c3\u6578\u76f8\u95dc: \u8207\u61c9\u7528\u76f8\u95dc\u7684\u8a2d\u5b9a MIS \u4e0d\u9808\u77e5\u9053\u3002\n\u6211\u9019\u505a\u662f\u56e0\u70ba\uff0c\u9019\u908a\u90e8\u5206\u7dad\u904b\u4eba\u54e1\u6703\u4ee5\u5c6c\u6027\u6a94\u66f4\u63db\u7684\u65b9\u5f0f\u4f86\u6539\u53c3\u6578\u3002\u8acb\u5047\u6642\u4ea4\u63a5\u53c8\u4e0d\u6e05\u695a\uff0c\u8077\u4ee3\u4e5d\u6210\u4e5d\u6703\u51fa\u932f\u3002\n\u70ba\u907f\u514d\u7d1b\u722d\uff0c\u6240\u4ee5\u63d0\u4f9b\u7cfb\u7d71\u7ba1\u7406\u54e1\u67e5\u8a62\u756b\u9762\u3002")),(0,o.kt)("h1",{id:"pathmatchingresourcepatternresolver-\u76f4\u63a5\u8b80\u53d6\u5c6c\u6027\u6a94"},"PathMatchingResourcePatternResolver \u76f4\u63a5\u8b80\u53d6\u5c6c\u6027\u6a94"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u500b\u65b9\u5f0f\u76f4\u63a5\u8b80\u53d6\u5c6c\u6027\u6a94\uff0c\u9019\u908a\u662f\u63a1\u7528 ",(0,o.kt)("span",{style:{color:"#0044FF"}},"PathMatchingResourcePatternResolver")," \u985e\u5225\uff0c\u76f4\u63a5\u4ee5 pattern \u544a\u77e5\u5c6c\u6027\u6a94\u4f4d\u7f6e\u3002\u7136\u5f8c\u518d\u770b\u4f60\u60f3\u8f38\u51fa\u5230\u90a3\u88e1\u56c9\u3002\u9019\u908a\u5148\u76f4\u63a5\u8f38\u51fa\u5230 Console."),(0,o.kt)("li",{parentName:"ol"},"\u9019\u908a\u5047\u8a2d\u5c6c\u6027\u6a94\u540d\u70ba config.properties\u3002")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PropertiesFactoryBeanServiceImpl.java \u7bc4\u4f8b",(0,o.kt)(i.dn,{text:'\n    @Service\n    public class PropertiesFactoryBeanServiceImpl\n            implements PropertiesFactoryBeanService {\n            \n        public PropertiesFactoryBean configProperties() throws Exception {\n            PropertiesFactoryBean propertiesFactoryBean = new PropertiesFactoryBean();\n            PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();\n            propertiesFactoryBean.setLocations(\n                    resolver.getResources("classpath*:config.properties"));\n            return propertiesFactoryBean;\n        }\n    \n        @Override\n        public void doPrintAllPrperties() {\n            try {\n                PropertiesFactoryBean factory = configProperties();\n                factory.afterPropertiesSet();\n                Properties props = factory.getObject();\n    \n                @SuppressWarnings("rawtypes")\n                Enumeration en = props.propertyNames();\n                while (en.hasMoreElements()) {\n                    String key = (String) en.nextElement();\n                    String Property = props.getProperty(key);\n                    System.out.println(key + Property);\n                }\n            } catch (Exception e) {\n                throw new RuntimeException("unexpected", e);\n            }\n        }\n    }\n    ',language:"java",showLineNumbers:"true",mdxType:"CodeBlock"}))),(0,o.kt)("h2",{id:"propertiesfactorybean-location-\u8a2d\u5b9a\u7684\u5176\u4ed6\u65b9\u5f0f"},"PropertiesFactoryBean Location \u8a2d\u5b9a\u7684\u5176\u4ed6\u65b9\u5f0f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"PathMatchingResourcePatternResolver"),(0,o.kt)("li",{parentName:"ol"},"ClassPathResource"),(0,o.kt)("li",{parentName:"ol"},"FileSystemResource")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ClassPathResource \u7bc4\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  PropertiesFactoryBean bean = new PropertiesFactoryBean();\n  bean.setLocation(new ClassPathResource("bar/foo/app.properties"));\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"FileSystemResource \u7bc4\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  PropertiesFactoryBean bean = new PropertiesFactoryBean();\n  bean.setFileEncoding("UTF-8");\n  bean.setLocation(new FileSystemResource("file:ENV_VAR/appConfig/3rdConfig.properties"));\n')),(0,o.kt)("h1",{id:"\u81ea-spring-application-context-\u4e2d\u53d6\u51fa-property-bean"},"\u81ea Spring Application Context \u4e2d\u53d6\u51fa Property Bean"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u90e8\u5206\u820a\u5c08\u6848\u53ef\u80fd\u6df7\u96dc\u4f7f\u7528 xml \u8a2d\u5b9a\u6b64\u6642\u5247\u53ef\u76f4\u63a5\u53d6\u51fa property bean \u5373\u53ef\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"applicationContext.xml : \u9019\u908a\u8a3b\u518a\u4e86 id \u70ba configProperties \u7684 bean"),(0,o.kt)(i.dn,{text:'\n    <bean id="configProperties" lazy-init="false"\n        class="org.springframework.beans.factory.config.PropertiesFactoryBean">\n        <property name="location">\n            <value>classpath:config.properties</value>\n        </property>\n    </bean>\n    ',language:"xml",showLineNumbers:"true",mdxType:"CodeBlock"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"PropertiesFactoryBeanServiceImpl.java \u7bc4\u4f8b"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"* \u8a3b: \u524d\u9762\u8aaa\u904e\u9019\u908a\u7fd2\u6163\u6709\u591a\u500b *.properties \u6a94\uff0c\u6240\u4ee5 inject \u6642\u4f7f\u7528 @Qualifier \u6ce8\u5165\u3002\u672a\u518d by Type \u81ea\u52d5 inject\u3002\n")),(0,o.kt)(i.dn,{text:'\n@Service\npublic class PropertiesFactoryBeanServiceImpl\n        implements PropertiesFactoryBeanService {\n    private PropertiesFactoryBean configProperties;\n    @Autowired\n    @Qualifier("configProperties")\n    public void setconfigProperties(PropertiesFactoryBean configProperties) {\n        this.configProperties = configProperties;\n    }\n    @Override\n    public void doPrintAllPrperties() {\n        try {\n            PropertiesFactoryBean factory2 = configProperties;\n            factory2.afterPropertiesSet();\n            Properties props = factory2.getObject();\n            @SuppressWarnings("rawtypes")\n            Enumeration en = props.propertyNames();\n            while (en.hasMoreElements()) {\n                String key = (String) en.nextElement();\n                String Property = props.getProperty(key);\n                System.out.println(key + Property);\n            }\n        } catch (Exception e) {\n            throw new RuntimeException("unexpected", e);\n        }\n    }\n}\n    ',language:"java",showLineNumbers:"true",mdxType:"CodeBlock"}))),(0,o.kt)("h1",{id:"\u76f8\u95dc-3rd-party-libraries"},"\u76f8\u95dc 3rd party libraries"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* import java.util.Enumeration;\n* import java.util.Properties;\n* import org.springframework.beans.factory.annotation.Autowired;\n* import org.springframework.beans.factory.annotation.Qualifier;\n* import org.springframework.beans.factory.config.PropertiesFactoryBean;\n* import org.springframework.core.io.support.PathMatchingResourcePatternResolver;\n* import org.springframework.stereotype.Service;\n")))}g.isMDXComponent=!0}}]);