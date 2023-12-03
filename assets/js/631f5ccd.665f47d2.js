"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[9017],{8041:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var l=n(7462),t=(n(7294),n(3905)),r=n(1424);const o={title:"Log4j EmailAppender Configuration",description:"\u7576log4j looger\u7d00\u9304\u6307\u5b9a\u7b49\u7d1a\u7684\u8a0a\u606f\u6642\uff0c\u767c\u4fe1\u901a\u77e5\u7279\u5b9a\u4eba\u54e1",keywords:["log4j","mail","SMTPAppender"]},p=void 0,i={unversionedId:"DevTech/Java/ExceptionMailFromLog4j",id:"DevTech/Java/ExceptionMailFromLog4j",title:"Log4j EmailAppender Configuration",description:"\u7576log4j looger\u7d00\u9304\u6307\u5b9a\u7b49\u7d1a\u7684\u8a0a\u606f\u6642\uff0c\u767c\u4fe1\u901a\u77e5\u7279\u5b9a\u4eba\u54e1",source:"@site/docs/DevTech/Java/ExceptionMailFromLog4j.md",sourceDirName:"DevTech/Java",slug:"/DevTech/Java/ExceptionMailFromLog4j",permalink:"/slash/docs/DevTech/Java/ExceptionMailFromLog4j",draft:!1,tags:[],version:"current",frontMatter:{title:"Log4j EmailAppender Configuration",description:"\u7576log4j looger\u7d00\u9304\u6307\u5b9a\u7b49\u7d1a\u7684\u8a0a\u606f\u6642\uff0c\u767c\u4fe1\u901a\u77e5\u7279\u5b9a\u4eba\u54e1",keywords:["log4j","mail","SMTPAppender"]},sidebar:"tutorialSidebar",previous:{title:"Docs",permalink:"/slash/docs/docs-map"},next:{title:"Gson fromJson \u62cb\u51fa ClassCastException",permalink:"/slash/docs/DevTech/Java/GSON_ClassCastException"}},m={},g=[{value:"Log4j SMTPAppender \u4f7f\u7528\u6642\u6a5f",id:"log4j-smtpappender-\u4f7f\u7528\u6642\u6a5f",level:2},{value:"log4j.xml \u5b9a\u7fa9 SMTPAppender Filter",id:"log4jxml-\u5b9a\u7fa9-smtpappender-filter",level:2},{value:"Java \u7a0b\u5f0f\u501f\u7528 Log4j \u5bc4\u4fe1\u6a5f\u5236 (\u9078\u914d)",id:"java-\u7a0b\u5f0f\u501f\u7528-log4j-\u5bc4\u4fe1\u6a5f\u5236-\u9078\u914d",level:2},{value:"Spring Context \u8207 Log4j \u6574\u5408\u5bc4\u4fe1\u529f\u80fd (\u9078\u914d)",id:"spring-context-\u8207-log4j-\u6574\u5408\u5bc4\u4fe1\u529f\u80fd-\u9078\u914d",level:2},{value:"\u4e00\u500b log4j.xml \u7684\u5176\u4ed6 Appenders \u8a2d\u5b9a\u7bc4\u4f8b",id:"\u4e00\u500b-log4jxml-\u7684\u5176\u4ed6-appenders-\u8a2d\u5b9a\u7bc4\u4f8b",level:2}],d={toc:g},s="wrapper";function u(e){let{components:a,...n}=e;return(0,t.kt)(s,(0,l.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"log4j-smtpappender-\u4f7f\u7528\u6642\u6a5f"},"Log4j SMTPAppender \u4f7f\u7528\u6642\u6a5f"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u901a\u5e38\u91dd\u5c0d Scheduler \u76f8\u95dc\u7684\u7a0b\u5f0f\uff0c\u6211\u6703\u984d\u5916\u64b0\u5beb\u8a31\u591a log \u8f38\u51fa\u3002\u4f8b\u5982\u7a0b\u5f0f\u8d70\u5230\u54ea\u500b\u6b65\u9a5f\u4e86\uff0c\u6211\u8d70\u8a2a\u7684\u8cc7\u6599\u8d70\u5230\u90a3\u4e00\u7b46\u4e86\uff0c\u6574\u500b\u52d5\u4f5c\u82b1\u8cbb\u4e86\u591a\u5c11\u6642\u9593\u7b49\u7b49\u3002\u76f8\u95dc\u8cc7\u8a0a\u53ef\u4ee5\u4f9b\u5f8c\u7e8c\u7570\u5e38\u6216\u6548\u80fd\u5206\u6790\u4ee5\u53ca cron job \u8abf\u6574\u3002\u76f8\u95dc\u6b65\u9a5f\u90fd\u662f\u70ba\u4e86\u71df\u904b\u6301\u7e8c\u7ba1\u7406(BCM)\u8207\u98a8\u96aa\u7ba1\u7406(RM)\uff0cLog4j \u5728\u9019\u7576\u4e2d\u7684\u89d2\u8272\u9664\u4e86\u8ecc\u8de1\u7d00\u9304\u5916\u5176\u5be6\u4e5f\u53ef\u70ba\u4e3b\u52d5\u5831\u8b66\u6a5f\u5236\u7684\u4e00\u74b0\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u4e0b\u5217\u4ecb\u7d39\u4fbf\u662f\u4ee5 org.apache.log4j.net.SMTPAppender \u4e3b\u52d5\u5831\u8b66\u7684\u76f8\u95dc\u8a2d\u5b9a\u65b9\u5f0f\u3002")),(0,t.kt)("h2",{id:"log4jxml-\u5b9a\u7fa9-smtpappender-filter"},"log4j.xml \u5b9a\u7fa9 SMTPAppender Filter"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Mail appender : from / to / subject / SMTPHost \u8a2d\u5b9a",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"\u76f8\u95dc\u53c3\u6578\u53ef\u4ee5\u5728 build \u904e\u7a0b\u7f6e\u63db\uff0c\u6703\u662f\u4ee5\u5176\u4ed6\u6280\u5de7\u7d93\u7531 ","*",".properties \u5e36\u5165\u3002\u9019\u908a\u4e0d\u8d05\u8ff0\u3002"))),(0,t.kt)("li",{parentName:"ul"},"Mail appender filter \u8a2d\u5b9a : \u6307\u5b9a\u8981\u5bc4\u4fe1\u7684 logger \u7b49\u7d1a\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u4e0b\u65b9\u8a2d\u5b9a\u6642\u7576 logger \u7d00\u9304 error \u81f3 fatal \u9593\u7684\u8a0a\u606f\u6642\u4fbf\u6703\u4e00\u4f75\u5bc4\u4fe1\u901a\u77e5\u6307\u5b9a\u4eba\u54e1\u3002")),(0,t.kt)(r.dn,{text:'\n<appender name="EmailAppender">\n         <param name="BufferSize" value="512" />\n         <param name="SMTPHost" value="xxx.xxx.xxx.xxx" />\n         <param name="From" value="mailFrom@dummy.org" />\n         <param name="To" value="mailToAdmin@dummy.org" />\n         <param name="Subject" value="Subject of Exception Mail" />\n         <layout>\n              <param name="ConversionPattern"\n               value="%d\\{dd-MM-yy HH:mm:ss,SSS\\} %-5p %c - %m%n" />\n         </layout>\n         <filter>\n              <param name="LevelMin" value="error" />\n              <param name="LevelMax" value="fatal" />\n         </filter>\n    </appender>\n     \n    <logger name="exceptionEmailAppenderLogger" additivity="false">\n       <appender-ref ref="EmailAppender" />\n    </logger>\n  \n\t',language:"xml",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,t.kt)("h2",{id:"java-\u7a0b\u5f0f\u501f\u7528-log4j-\u5bc4\u4fe1\u6a5f\u5236-\u9078\u914d"},"Java \u7a0b\u5f0f\u501f\u7528 Log4j \u5bc4\u4fe1\u6a5f\u5236 (\u9078\u914d)"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u4e0a\u65b9\u7bc4\u4f8b\u5efa\u7acb\u4e86\u4e00\u500b\u540d\u70ba exceptionEmailAppenderLogger \u7684 logger",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},'\u9019\u908a additivity="false" \u610f\u5473\u8457\u4e0d\u7e7c\u627f\u81ea root\uff0c\u4e0d\u6703\u5c07\u8cc7\u8a0a\u8f38\u51fa\u81f3 root \u7684 appender\u3002\u53ea\u8f38\u51fa\u5230\u81ea\u5df1 Appender \u6240\u6307\u5b9a\u4f4d\u7f6e\u3002'))),(0,t.kt)("li",{parentName:"ul"},"\u7a0b\u5f0f\u78bc\u4e2d\u5176\u5be6\u53ef\u4ee5\u5229\u7528 logger name \u76f4\u63a5\u53d6 exceptionEmailAppenderLogger \u7136\u5f8c\u5bc4\u4fe1\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u7bc4\u4f8b\u5982\u4e0b: EmailAppenderLogger.java")),(0,t.kt)(r.dn,{text:'\n\t  \n\tpackage totem.log4j.logger.mail;\n\t\n\tpublic class EmailAppenderLogger implements EmailLogger{\n\t\t \n\t\tprivate boolean disableMail;\n\t \n\t\tprivate final static Logger logger = Logger\n\t\t\t\t.getLogger("exceptionEmailAppenderLogger");\n\t\t \n\t\t@Override\n\t\tpublic void sendMessage(String message) {\n\t \n\t\t\tif (!disableMail){\n\t\t\t\tlogger.error(message); \n\t\t\t}\n\t\t}\t \n\t\tpublic void setDisableMail(boolean disableMail) {\n\t\t\tthis.disableMail = disableMail;\n\t\t}\t \n\t}\n\t  ',language:"Java",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,t.kt)("h2",{id:"spring-context-\u8207-log4j-\u6574\u5408\u5bc4\u4fe1\u529f\u80fd-\u9078\u914d"},"Spring Context \u8207 Log4j \u6574\u5408\u5bc4\u4fe1\u529f\u80fd (\u9078\u914d)"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u65e2\u7136\u4e0a\u65b9\u90fd\u5efa\u7acb\u4e86\u4e00\u500b\u5bc4\u4fe1\u5de5\u5177","(","EmailAppenderLogger.java",")"," \u90a3\u4e0d\u5982\u76f4\u63a5\u5c07\u4ed6\u4ea4\u7d66 Spring \u7ba1\u7406\uff0c\u9700\u8981\u6642\u76f4\u63a5 Injection\u3002"),(0,t.kt)("li",{parentName:"ul"},"Spring Application Context \u8a2d\u5b9a\u7bc4\u4f8b\u5982\u4e0b:"),(0,t.kt)("li",{parentName:"ul"},"applicationContext-log4j.xml")),(0,t.kt)(r.dn,{text:'\t  \n\t<bean id="emailAppenderLogger"\n        class="totem.log4j.logger.mail.EmailAppenderLogger">\n        <property name="disableMail" value="${mail.disable}" />\n    </bean>\n\t  ',language:"xml",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,t.kt)("h2",{id:"\u4e00\u500b-log4jxml-\u7684\u5176\u4ed6-appenders-\u8a2d\u5b9a\u7bc4\u4f8b"},"\u4e00\u500b log4j.xml \u7684\u5176\u4ed6 Appenders \u8a2d\u5b9a\u7bc4\u4f8b"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"log4j.xml ",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"ConsoleAppender"),(0,t.kt)("li",{parentName:"ul"},"DailyRollingFileAppender"),(0,t.kt)("li",{parentName:"ul"},"SMTPAppender")))),(0,t.kt)(r.dn,{text:'\n<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">\n<log4j:configuration xmlns:log4j=\'http://jakarta.apache.org/log4j/\'>\n    \x3c!-- \u6307\u5b9amessage \u8f38\u51fa\u5230console  --\x3e\n    <appender name="STDOUT" class="org.apache.log4j.ConsoleAppender">\n        <layout class="org.apache.log4j.PatternLayout">\n            <param name="ConversionPattern"\n                value="%d{dd-MM-yy HH:mm:ss,SSS} %-5p %c - %m%n" />\n        </layout>\n    </appender>\n    \n\t\x3c!-- \u6307\u5b9amessage\u8f38\u51fa\u5230\u6307\u5b9a\u6a94,\u8f38\u51fa\u7b49\u7d1a\u70baINFO\u4ee5\u4e0a  --\x3e\n\t <appender name="FILE_INFO"\n        class="org.apache.log4j.DailyRollingFileAppender">\n\t\t<param name="File" value="${java.io.tmpdi}/logs/cable_info.log" />\n\t\t\x3c!-- Rollover at midnight each day --\x3e\n        <param name="DatePattern" value="\'.\'yyyy-MM-dd" />\n        <layout class="org.apache.log4j.PatternLayout">\n\t\t    \x3c!-- The default pattern: Date Priority [Category] Message --\x3e\n            <param name="ConversionPattern"\n                value="%d{dd-MM-yy HH:mm:ss,SSS} %-5p %c{2} - %m%n" />\n        </layout>\n    </appender>\n\t\n    \x3c!-- \u6307\u5b9amessage \u8f38\u51fa\u5230\u6307\u5b9a\u6a94,\u8f38\u51fa\u7b49\u7d1a\u70baWARN\u4ee5\u4e0a  --\x3e\n    <appender name="FILE_WARN"\n        class="org.apache.log4j.DailyRollingFileAppender">\n        <param name="File" value="${java.io.tmpdir}/logs/cable_error.log" />\n        \x3c!-- Rollover at midnight each day --\x3e\n        <param name="DatePattern" value="\'.\'yyyy-MM-dd" />\n        <param name="Threshold" value="warn" />\n        <layout class="org.apache.log4j.PatternLayout">\n            \x3c!-- The default pattern: Date Priority [Category] Message\n --\x3e\n            <param name="ConversionPattern"\n                value="%d{dd-MM-yy HH:mm:ss,SSS} %-5p %c - %m%n" />\n        </layout>\n    </appender>\n<appender name="EmailAppender" class="org.apache.log4j.net.SMTPAppender">\n         <param name="BufferSize" value="512" />\n         <param name="SMTPHost" value="dummySmtpHost" />\n         <param name="From" value="dummyFrom" />\n         <param name="To" value="dummyTo" />\n         <param name="Subject" value="dummySubject" />\n         <layout class="org.apache.log4j.PatternLayout">\n              <param name="ConversionPattern"\n               value="%d{dd-MM-yy HH:mm:ss,SSS} %-5p %c - %m%n" />\n         </layout>\n         <filter class="org.apache.log4j.varia.LevelRangeFilter">\n              <param name="LevelMin" value="error" />\n              <param name="LevelMax" value="fatal" />\n         </filter>\n    </appender>\t\n<appender name="CATALINA"\n        class="org.apache.log4j.DailyRollingFileAppender">\n        <param name="File" value="${java.io.tmpdir}/logs/catalina.out" />\n        <param name="DatePattern" value="\'.\'yyyy-MM-dd" />\n        <layout class="org.apache.log4j.PatternLayout">\n        <param name="ConversionPattern"\n                value="%d{dd-MM-yy HH:mm:ss,SSS} %-5p %c{2} - %m%n" />\n        </layout>\n    </appender>\n<logger name="exceptionEmailAppenderLogger" additivity="false">\n        <appender-ref ref="EmailAppender" />\n    </logger>\n\t\n<root>\n        <level value="info" />\n        <appender-ref ref="STDOUT" />\n        <appender-ref ref="FILE_INFO" />\n        <appender-ref ref="FILE_WARN" />\n        <appender-ref ref="CATALINA" />\n    </root>\n<//log4j:configuration>\t\n\t',language:"xml",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,t.kt)("br",null))}u.isMDXComponent=!0}}]);