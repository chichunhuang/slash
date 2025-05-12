---
title: Tomcat Cookie 安全性設定
description: Tomcat Cookie 安全性設定- HttpOnly Secure SameSite
keywords: [Tomcat,Cookie,HttpOnly,Secure,SameSite]
---

# Tomcat Cookie 安全性設定

## 測試環境
* 受稽核的舊系統 
* Tomcat8.5
* JDK8

# COOKIE 可分為 
* SESSION COOKIE ie JSESSIONID: 由 Tomcat Container 所產生與管理。
* Customized Cookie : 這邊泛指開發時自行建立與維護的部分。
* 3rd Cookie : 其他 Libs 所建立與使用。

# Tomcat 中與 JSESSIONID Cookie 相關全性設定
* 主要會討論到下列三項
    * [HttpOnly](#HttpOnly-id) : 限制 Cookie 僅能經由 Http(s) Protocol 存取。所以其他  JavaScript 無法存取。
    * [Secure](#Secure-id) : Cookie 僅能在加密的連下情境下使用。也就是又再依縮限制只能在 Https 中使用。 
    * [SameSite](#SameSite-id) : 同源，Cookie 不能跨網站分享。

# HttpOnly 用途 <span id="HttpOnly-id"></span>
> Tomcat 設定 Cookie 為 HttpOnly 時意味著，Cookie 僅能經由 http/https 存取，其他 Script 一律禁止存取。<br/>
> 簡單的說法是瀏覽器可<span style={{color: '#0044FF'}}>拒絕與他人如 JsvaScript 共享 Cookies</span>。<br/>
> 為何重要 Cookie 不該共享? 舉例來說: 常見的 cookie JSESSIONID 若被竊取，通常造成 SESSION 與身分被盜用，
> 也就是說 HttpOnly 主要目的在於防止 [XSS(Cross Site Scripting)](https://owasp.org/www-community/attacks/xss/) 攻擊。<br/>

---

# Secure 用途 <span id="Secure-id"></span>
> Secure 設為 true 意味著 Cookie 僅能在加密的管道使用。
> 舉例來說，降低風險的機制為當一個 https 網站若被嵌在 http 的釣魚網站內時。因為 Cookie 被限制只能在 https 之下使用。
> 所以釣魚網站部分功能會失效。若是該 Cookie 為 Session Cookie (如: JSESSIONID)則會自動被登出。


---

# SameSite 用途 <span id="SameSite-id"></span>
> 同源，這邊解釋就更容易理解了。Cookie 無法跨 Domain 使用。所以當網站被內嵌時，
> 由於釣魚網站的網址 Domain 是偽造的一定與原始網站不同。因此無法取用 Cookies。
>> 延伸閱讀 Line of Death


---

# Tomcat JSESSIONID HttpOnly 設定方式
* Tomcat7+ 之後 JSESSIONID 的 <span style={{color: '#0044FF'}}>HttpOnly 屬性預設為 true</span>。
* Tomcat7+ 顯式 HttpOnly 設定方式需同時設定
    * web.xml : cookie-config > http-only = true
    * web.xml : cookie-config > secure = true
    * server.xml : connector > secure = true
    * context.xml : CookieProcessor > sameSiteCookies = strict

* web.xml
```
    <session-config>
         <tracking-mode>COOKIE</tracking-mode>
         <cookie-config>
            <http-only>true</http-only>
            <secure>true</secure>
         </cookie-config>
    </session-config>
```

* server.xml
```
        <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" URIEncoding="UTF-8" secure="true"/>
```
      
* context.xml
```
<Context>
    <CookieProcessor className="org.apache.tomcat.util.http.LegacyCookieProcessor" sameSiteCookies="strict" />      
</Context>  
```
      
      
# 檢查設定是否生效
    Chrome developer tool (F12) &gt; Application &gt; Storage Cookies 

# 其他

## 參考資料
* [HttpOnly 簡介](https://blog.51cto.com/u_9597987/3485720)
* 防禦 Cross-Site Scripting (XSS) [Content-Security-Pilicy](https://devco.re/blog/2014/04/08/security-issues-of-http-headers-2-content-security-policy/)
* [HTTP Session 攻擊與防護](https://devco.re/blog/2014/06/03/http-session-protection/)  
* HttpOnly [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)

## JQuery Cookie 建立與設定方式
* [https://www.runoob.com/jquery/jquery-cookie-plugin.html](https://www.runoob.com/jquery/jquery-cookie-plugin.html)
* jquery is js: 所以無法管理與設定超出自己權限範圍的 httponly 屬性
* 有人把 sameSite: 'strict' 藏在 path 屬性之中。實際測試可行。

```
tricky 1: 放在 path
tricky 2: 字首大寫

$.cookie("testCookieName", "TestValue Name",{ expires : 30, path: "/;SameSite=strict"});
```

## wicket Framework 中設定方式

```
        WebResponse webResponse = (WebResponse) RequestCycle.get()
                .getResponse();
        Cookie cookie = new Cookie("showLeftColumn", "");
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        webResponse.addCookie(cookie);
```