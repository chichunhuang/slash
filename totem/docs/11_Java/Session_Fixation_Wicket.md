---
title: 非正規Session Fixation處理
description: 降低風險，並未完全即時
keywords: [Session Fixation,Wicket]
---


# Session Fixation 的[非正規]處理方式
* 非正規: 因為還是會被工具掃出來。下列方法僅是降低被駭的機會。
* 調整概念:
    * 強行更換 JSESSIONID 值，縮短 ID 的效期。就讓你偷吧!我頻繁更換 key 總行了吧
    * 離開頁面時，殺死當前 SESSION
    * Container 縮短 Session Timeout 時間
    * JSESSIONID 偽裝
* Session Timeout

## 強行更換 JSESSIONID
* 以 Wicket Framework 為範例

```

SignInPanel {
  public String signIn(String username, String password) throws AuthenticationException {
        //更換 Session(Session 還活著), 其他 cookies 會一併被清除。
		getBaseSession().replaceSession();
  }
}

```

## 離開頁面時，殺死當前 SESSION。
* invalidete : 整個 Session 被摧毀

```
 ExternalLink link = new ExternalLink("destSystemUrl",
                            tuple.getSecond());
                    link.add(new AjaxEventBehavior("click") {

                        @Override
                        protected void onEvent(AjaxRequestTarget target) {
                            // 更至其他外部頁面時，殺死當下系統的 Session
                            getSession().invalidate();
                        }

                        @Override
                        protected void updateAjaxAttributes(
                                AjaxRequestAttributes attributes) {
                            super.updateAjaxAttributes(attributes);
                            // 因為 Ajax 為同步動作為避免轉外部頁面時 request 尚未動作便登出，故延遲1sec,
                            // 以避免當前 Session 先 destroy 而跳到登入頁
                            attributes.setThrottlingSettings(
                                    new ThrottlingSettings(link.getMarkupId(),
                                            Duration.ONE_SECOND, true));
                        }
                    });
```

## 縮短 Session key 的效期

* 在使用者做動作時: 
    * action(on request submit) =>  change Session ID
* Session 與原本的 Cookies 都還在，但是 Container 用來辨別 Session 的 token 已被更換.

```

    //Wicket7.x
    ServletWebRequest request = (ServletWebRequest) RequestCycle
                .get().getRequest();
    HttpServletRequest httpRequest = request.getContainerRequest();
    Map params = httpRequest.getParameterMap();
    httpRequest.changeSessionId();
    	
    //Wicket8.x
    Session session = getSession();
    BaseSession bs = (BaseSession) session;
    session.changeSessionid();

```


## JSESSIONID 偽裝
* 在被攻擊當下，單純只是為了爭取時間而已......
* 更改預設 Container Session ID 的 key : jsessionid
* 偽裝一個 jsessionid 放入 cookie，不變更值。用以模擬預設 Session ID 動作。
* 製作十個假的動態變更值的 cookies，其中一個是真正的 Session ID
  * 搭配 tomcat 更換 Session ID 的 key : fake_session_name
  
```
//server.xml: 更改 預設 sessionCookieName 方法A
<Context path="/" docBase="webapp" reloadable="false" sessionCookieName="fake_session_name"></Context>

```  

```
//context.xml:  更改預設 sessionCookieName 方法B

<Context sessionCookieName="fake_session_name ">
 
    <!-- Default set of monitored resources. If one of these changes, the    -->
    <!-- web application will be reloaded.                                   -->
    <WatchedResource>WEB-INF/web.xml</WatchedResource>
    <WatchedResource>${catalina.base}/conf/web.xml</WatchedResource>
</Context>

```

## web.xml Session Time 設定

* 在 web.xml 中的 session-config 設定 session-timeout 元素 (unit: mins)

```
    <session-config>
        <session-timeout>30</session-timeout>
    </session-config>

```

## Java code 設定 MaxInactiveInterval
* 單位 秒

```
    session.setMaxInactiveInterval(30 * 60); 
    
```    

## 其他: 瀏覽器提醒: 

* 當使用者嘗試離開時，如關閉 Browser 或 Browser tabs 時給予提醒訊息。讓使用者主動登出避免 Session key 殘留。
* __必須在網頁上有互動之後下列 JS 才會生效__
* 當事件返回值不是 null 或者 undefined 時，使用者將會被提醒是否離開頁面。
* Firefox 44+, Chrome 51+, Opera 38+, Safari 9.1+ 以後 無法自訂提示文字。

* 網路上查到的預設的提示內容如下:
   * Firefox(66.0.3)“此頁面想詢問您是否要離開 - 您輸入的資料可能不會被保存”
   * Safari(10.1.2)“您確定要離開此頁面嗎?
   * Chrome(74.0.3729.131)“重新載入此網站?”“系統可能不會保存您所做的更改。
   * alert, confirm&, prompt不執行
   * 在一些流覽器中,在onbeforeunload中調用alert,confirm,prompt等方法會被忽略。
   
   
* [How to detect browser or tab closing in JavaScript ?](https://www.geeksforgeeks.org/how-to-detect-browser-or-tab-closing-in-javascript/)

```
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});
```

* 網路上的 e.preventDefault() 全部範例

```
<!DOCTYPE html>
<html>
<head>
    <title>
        Detect Browser or Tab Closing Event in JavaScript
    </title>
    <script  language="JavaScript">
      window.addEventListener('beforeunload', function (e) {
            e.preventDefault();
            e.returnValue = '';
        });
    
    
    </script>
</head>
<body>
     <h1>
        Detect Browser or Tab Closing Event in JavaScript
    </h1>
    <p>
        The beforeunload event is fired just 
        before the closing the tab or browser
        window or reloading the page. 
        In modern web browsers, you may have 
        to interate with the web
        page to get the confirmation dialog.
    </p>
    <form>
        <textarea placeholder = "Write few words here to trigger an
        interaction">
        </textarea>
    </form>
</body>
</html> 
```