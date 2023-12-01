---
title: 關閉 Browser or Tab 自動登出
description: 關閉 Browser or Tab 自動登出
keywords: [Session Fixation,logout,close browser]
---

# 關閉 Browser or Tab 時自動登出解決方案
* 要追蹤使用者未登出便關閉 Browser 或關閉 Tab 時，最直接的方法便是追蹤 onunload/ onbeforeunload 事件。
* 目前這兩個 event 都會限制 alert 等功能。聽說是詐騙集團常使用。
* onunload 事件雖然被現今大多數瀏覽器限制，但是部分功能還是可以使用。預計處理方式是在 unload 事件發生時背後自動傳送一個 httprequest 給後方 server。以移除 Session 或是 Token。來達到主動登出效果，並避免 Session key 殘留供駭客使用。
* clinet-server 架構下測試可行，OAuth 推測用相同概念清除 TOKEN 應該也行得通。


# 關閉時自動登出範例
* HTML 端攔截 onunload event，並即刻向後方發出登出 Request。
* Server 端的話每家的語言不同，概念上就是收到 request 後登出便是。

```html

<script>
                
      window.onunload = function() {
           var pathArray = window.location.pathname.split('/');
           var appPath = window.location.protocol + "//" + window.location.host
                  + "/" + pathArray[1] + "/";
            $.ajax({
                   url : appPath + "logout_browser"
               });
       }    
           
</script>

```