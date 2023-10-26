!! Session Fixation 的非正規處理方式
* 非正規: 因為還是會被工具掃出來。下列方法僅是降低被駭的機會。

1. log in => replace Session
* replace : 更換 Session(Session 還活著), 其他 cookies 會一併被清除。
```
// LoginPage.java

SignInPanel {
  public String signIn(String username, String password) throws AuthenticationException {
		//...
		getBaseSession().replaceSession();
  }
}

```


2. switch dest => terminate session
* invalidete : 整個 Session 被摧毀

```
 ExternalLink link = new ExternalLink("destSystemUrl",
                            tuple.getSecond());
                    link.add(new AjaxEventBehavior("click") {

                        @Override
                        protected void onEvent(AjaxRequestTarget target) {
                            // CH-1332: 切換子系統時，殺死當下系統的 Session
                            getSession().invalidate();
                        }

                        @Override
                        protected void updateAjaxAttributes(
                                AjaxRequestAttributes attributes) {
                            super.updateAjaxAttributes(attributes);
                            // 因為Ajax為同步動作為避免轉子系統request尚未動作便登出，故延遲1sec,
                            // 以避免Session先destroy
                            attributes.setThrottlingSettings(
                                    new ThrottlingSettings(link.getMarkupId(),
                                            Duration.ONE_SECOND, true));
                        }
                    });
```

3. action(on request submit) =>  change Session ID
* Session 與原本的 Cookies 都還在，但是 Container 用來辨別 Session 的 token 已被更換.
```
//KeepAlivePage.java

		Wicket7.x
        ServletWebRequest request = (ServletWebRequest) RequestCycle
                .get().getRequest();
        HttpServletRequest httpRequest = request.getContainerRequest();
        Map params = httpRequest.getParameterMap();
        httpRequest.changeSessionId();
        
		
		Wicket8.x
        Session session = getSession();
        BaseSession bs = (BaseSession) session;
		session.changeSessionid();


```

4. interference
* 更改預設 Container Session ID 的 key : jsessionid
* 偽裝一個 jsessionid 放入 cookie，不變更值。用以模擬預設 Session ID 動作。
* 製作十個假的動態變更值的 cookies，其中一個是真正的 Session ID
  * 搭配 tomcat 更換 Session ID 的 key : fake_session_name
```
//server.xml: 更改 預設 sessionCookieName 方法A

<Context path="/" docBase="webapp" reloadable="false" sessionCookieName="fake_session_name"></Context>

```  

```
// context.xml:  更改預設 sessionCookieName 方法B
<Context sessionCookieName="fake_session_name ">
 
    <!-- Default set of monitored resources. If one of these changes, the    -->
    <!-- web application will be reloaded.                                   -->
    <WatchedResource>WEB-INF/web.xml</WatchedResource>
    <WatchedResource>${catalina.base}/conf/web.xml</WatchedResource>
 
    <!-- Uncomment this to disable session persistence across Tomcat restarts -->
    <!--
    <Manager pathname="" />
    -->
</Context>

```


5.  當事件返回值不是null或者undefined時.使用者將會被提醒是否離開頁面。
如果不需要展示彈窗,不使用 Event.preventDefault(), Event.returnValue即可。
returnValue自訂文本無效原因:在舊版本流覽器中.事件的返回值會被展示在對話方塊中。但從Firefox 44.Chrome 51.Opera 38.和Safari 9.1以後.返回文本將不會被展示.換言之.無法自訂彈窗提示文本。


預設的提示文本如下:
 * Firefox(66.0.3)“此頁面想詢問您是否要離開 - 您輸入的資料可能不會被保存”
 * Safari(10.1.2)“您確定要離開此頁面嗎?
 * Chrome(74.0.3729.131)“重新載入此網站?”“系統可能不會保存您所做的更改。
 * alert, confirm&, prompt不執行
 * 在一些流覽器中,在onbeforeunload中調用alert,confirm,prompt等方法會被忽略。
 
 
6. 在web.xml中的session-config設定 session-timeout元素 (mins)
```
<session-config>
<session-timeout>30</session-timeout>
</session-config>

```

7. session.setMaxInactiveInterval(30 * 60); (min * 60)