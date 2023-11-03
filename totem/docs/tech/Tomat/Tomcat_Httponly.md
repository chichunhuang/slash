---
title: 【Tomcat Cookie 安全性設定】
description: Tomcat Cookie 安全性設定- HttpOnly/Secure/SameSite
keywords: [Tomcat,Cookie,HttpOnly,Secure,SameSite]
---
import { CodeBlock, dracula  } from "react-code-blocks";


# COOKIE 應該分為 SESSION COOKIE ie JSESSIONID / customized Cookie


# Tomcat 中與 JSESSIONID/Cookie 相關案全性設定
* 主要會討論到下列三項
    * [HttpOnly](#HttpOnly-id) : Cookie 僅能經由 Http(s) Protocol 存取。
    * [Secure](#Secure-id) : Cooki 僅能在加密的連下情境下使用。
    * [SameSite](#SameSite-id) : 同源，Cookie 不能跨網站分享。

# HttpOnly 用途 <span id="HttpOnly-id"></span>
> Tomcat 設定 Cookie 為 HttpOnly 時意味著，Cookie 僅能經由 http/https 存取，其他 Script 一律禁止存取。<br/>
> 簡單的說法是瀏覽器可<span style={{color: '#0044FF'}}>拒絕與他人如 JsvaScript 共享 Cookies</span>。<br/>
> 為何重要 Cookie 不該共享? 舉例來說: 常見的 cookie JSESSIONID 若被竊取，通常造成 SESSION 與身分被盜用，
> 也就是說 HttpOnly 主要目的在於防止 [XSS(Cross Site Scripting)](https://owasp.org/www-community/attacks/xss/) 攻擊。<br/>

---

# Secure 用途 <span id="Secure-id"></span>


---

# SameSite 用途 <span id="SameSite-id"></span>


---

# Tomcat JSESSIONID HttpOnly 設定方式
* Tomcat7+ 之後 JSESSIONID 的 HttpOnly 屬性預設為 true。
* Tomcat7+ 顯式 HttpOnly 設定方式需同時設定
    * web.xml : cookie-config > http-only = true
    * web.xml : cookie-config > secure = true
    * server.xml : connector > secure = true
    * context.xml : CookieProcessor > sameSiteCookies = strict

web.xml
<CodeBlock text={`
    <session-config>
         <tracking-mode>COOKIE</tracking-mode>
         <cookie-config>
            <http-only>true</http-only>
            <secure>true</secure>
         </cookie-config>
    </session-config>
    `}
      language='xml'
      showLineNumbers='true'
      /> 

server.xml
<CodeBlock text={`
        <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" URIEncoding="UTF-8" secure="true"/>
    `}
      language='xml'
      showLineNumbers='true'
      /> 
      
context.xml
<CodeBlock text={`
<Context>
    <CookieProcessor className="org.apache.tomcat.util.http.Rfc6265CookieProcessor" sameSiteCookies="strict" />      
</Context>    
    `}
      language='xml'
      showLineNumbers='true'
      /> 
      
      
* 驗證是否生效
    * Chrome developer tool (F12) > Application > Storage Cookies 


# reference
* [HttpOnly 簡介](https://blog.51cto.com/u_9597987/3485720)
* 防禦 Cross-Site Scripting (XSS) [Content-Security-Pilicy](https://devco.re/blog/2014/04/08/security-issues-of-http-headers-2-content-security-policy/)
* [HTTP Session 攻擊與防護](https://devco.re/blog/2014/06/03/http-session-protection/)  
* HttpOnly [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)

# JQuery Cookie 建立與設定
* <https://www.runoob.com/jquery/jquery-cookie-plugin.html> 
* jquery is js: 所以無法管理與設定超出自己權限範圍的 httponly 屬性
* sameSite: 'strict'
* 有人把 sameSite: 'strict' 藏在 path 屬性之中
```
tricky: 1 放在 path
tricky: 2 Same 大寫

$.cookie("testName", "Test Name",{ expires : 365, path: "/;SameSite=Lax"});
```

```
html: 
sameSite not working 
secure OK (JSESSIONID OK, 但其他無用)

   $.cookie("showLeftColumn", $("#leftColumn").is(":visible"), { expires: 30, path: '/', secure: true, sameSite: 'strict' });

```