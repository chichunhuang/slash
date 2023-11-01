---
title: 【隱藏 Tomcat 版本資訊】
description: Hide Tomcat Version Info:隱藏Tomcat版本資訊，避免暴露過多資訊
keywords: [Tomcat,Version,Hide,隱藏]
---
import { CodeBlock, dracula  } from "react-code-blocks";
## 隱藏 Tomcat 版本資訊

 老機器、老系統、老版本一切都是千年老妖等級......但依舊法力無邊。
 總統府資安稽核員不滿意。也懶得給客製化的 ErrorPage。那只好偷吃步了......
 直接隱藏版本看你怎麼開 NC。



## 隱藏方式
* 最簡單方式直接隱藏錯誤頁的 Report 與 ServerInfo 等相關資訊
* Server.xml檔案位置:  %SPECROOT%\tomcat\conf\Server.xml
* 將 showReport 設為 false
* 將 showServerInfo 設為 false


<CodeBlock text={`

    <Host>
    <!-- tomcat 錯誤畫面不顯示版本 -->
    <Valve className="org.apache.catalina.valves.ErrorReportValve"
        showReport="false"
        showServerInfo="false"/>
    
    </Host>

`}
  language='xml'
  showLineNumbers='true'
  />