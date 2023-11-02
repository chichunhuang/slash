---
title: 【Tomcat 客製錯誤頁】
description: 自訂 Tomcat 錯誤頁顯示方式
keywords: [Tomcat,404, error page]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Container 錯誤頁的設定分類
* [於 Tomcat 進行全域設定，Container下所有 WeApps 接生效](#global-setting)
* [針對單一 Application 設定](#ap-only-id)
* [若單純只想隱藏 Tomcat 錯誤資訊，不想客製的話...](./Hide_Tomcat_Version)
* [Web Container 其他常見客製化錯誤頁設定範例](#full-examples)

# Tomcat 錯誤頁全域設定 <span id="global-setting"></span>

1. 此處以 404 錯誤頁為範例，其他錯誤頁設定方式相同。
1. 先準備一個自訂的404.html頁面.例如: customized404.html
1. 到 tomcat 安裝目錄下的 conf 修改 <span style={{color: '#0044FF'}}>web.xml</span> 檔.
1. 將客製好的錯誤頁(customized404.html)放在 <span style={{color: '#0044FF'}}>webapps/ROOT/目錄</span>
下即可.

* config/web.xml 下增加下列設定:

<CodeBlock text={`
<error-page> 
        <error-code>404</error-code> 
        <location>/customized404.html</location> 
</error-page>
    `}
      language='xml'
      showLineNumbers='true'
      /> 
<br/>
<br/>

---

# 單一 Application 設定 <span id="ap-only-id"></span>
1. 先準備客製好的錯誤頁 
    * 專案根目錄下相對應資料夾建立 /pages/customized404.html
1. 單一 App 則在在專案的 web.xml 中加入下列設定即可。

<CodeBlock text={`
<error-page> 
        <error-code>404</error-code> 
        <location>/pages/customized404.html</location> 
</error-page>
    `}
      language='xml'
      showLineNumbers='true'
      /> 

---

# 隱藏 Tomcat 版本與報告資訊
* 為了避免駭客得知container資訊最簡易設定可採用下列方法
* /tomcat/config/server.xml
* 在 Host 區塊增加 <span style={{color: '#0044FF'}}>ErrorReportValve</span>資訊，以隱藏 report 與 serverinfo。


<CodeBlock text={`

<Host name="localhost"  appBase="webapps"
        unpackWARs="true" autoDeploy="true">
<Valve className="org.apache.catalina.valves.ErrorReportValve"
        showReport="false"
        showServerInfo="false"/>
</Host>
    `}
      language='xml'
      showLineNumbers='true'
      />    

---
      
# Web Container 其他常見客製化錯誤頁設定範例<span id="full-examples"></span>

<CodeBlock text={`

<!-- 400 錯誤 -->
<error-page>
    <error-code>400</error-code>
    <location>/error.jsp</location>
</error-page>



<!-- 404 查無頁面錯誤 -->
<error-page>
    <error-code>404</error-code>
    <location>/error.jsp</location>
</error-page>


<!-- 500 伺服器內部錯誤 -->
<error-page>
    <error-code>500</error-code>
    <location>/error.jsp</location>
</error-page>


<!-- java.lang.Exception 異常錯誤 -->
<error-page>
    <exception-type>java.lang.Exception</exception-type>
    <location>/error.jsp</location>
</error-page>


<!-- java.lang.NullPointerException 異常錯誤 -->
<error-page>
    <exception-type>java.lang.NullPointerException </exception-type>
    <location>/error.jsp</location>
</error-page>


<!-- ServletException 異常錯誤 -->
<error-page>
    <exception-type>javax.servlet.ServletException</exception-type>
    <location>/error.jsp</location>
</error-page>
    `}
      language='xml'
      showLineNumbers='true'
      />       