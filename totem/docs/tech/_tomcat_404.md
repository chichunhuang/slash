Tomcat全域設定 
1、先準備一個自訂的404html頁面。 部落客是在益播網站上複製的404頁。 
2、找到tomcat安裝目錄下的conf

config/web.xml
<error-page> 
    <error-code>404</error-code> 
    <location>/pagenotfound.html</location> 
</error-page> 
3. 根據如上配置，將準備好的頁面放到webapps/ROOT/目錄下。




單一項目配置 在專案的web.xml中加入
專案 根目錄 下相對應資料夾建立 /page/pagenotfound.html
<error-page> 
    <error-code>404</error-code> 
    <location>/page/pagenotfound.html</location> 
</error-page> 

---
<!-- 400錯誤 -->
<error-page>
<error-code>400</error-code>
<location>/error.jsp</location>
</error-page>
<!-- 404 頁面不存在錯誤 -->
<error-page>
<error-code>404</error-code>
<location>/error.jsp</location>
</error-page>
<!-- 500 伺服器內部錯誤 -->
<error-page>
<error-code>500</error-code>
<location>/error.jsp</location>
</error-page>
<!-- java.lang.Exception異常錯誤,依據這個標記可定義多個類似錯誤提示 -->
<error-page>
<exception-type>java.lang.Exception</exception-type>
<location>/error.jsp</location>
</error-page>
<!-- java.lang.NullPointerException異常錯誤,依據這個標記可定義多個類似錯誤提示 -->
<error-page>
<exception-type>java.lang.NullPointerException </exception-type>
<location>/error.jsp</location>
</error-page>

<error-page>
<exception-type>javax.servlet.ServletException</exception-type>
<location>/error.jsp</location>
</error-page>



若單純的僅是想隱藏 tomcat 版本資訊
* 為了避免駭客得知container資訊可採用下列方法
* /tomcat/config/server.xml

在  <Host> 區塊內增加 ErrorReportValve 資訊, 隱藏 report 與 serverinfo

```
      <Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">

        <!-- SingleSignOn valve, share authentication between web applications
             Documentation at: /docs/config/valve.html -->
        <!--
        <Valve className="org.apache.catalina.authenticator.SingleSignOn" />
        -->

        <!-- Access log processes all example.
             Documentation at: /docs/config/valve.html
             Note: The pattern used is equivalent to using pattern="common" -->
        <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
               prefix="localhost_access_log" suffix=".txt"
               pattern="%h %l %u %t &quot;%r&quot; %s %b" />
			   
		<Valve className="org.apache.catalina.valves.ErrorReportValve"
               showReport="false" 
               showServerInfo="false"/> 	   

      </Host>


```
