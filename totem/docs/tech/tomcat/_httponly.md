---
title: Title for search engines; can be different from the actual heading
description: A short description of this page
image: a thumbnail image to be shown in social media cards
keywords: [httponly, tomcat, cookie]
---

## reference
* [HttpOnly 簡介](https://blog.51cto.com/u_9597987/3485720)
* 防禦 Cross-Site Scripting (XSS) 
  *  [Content-Security-Pilicy](https://devco.re/blog/2014/04/08/security-issues-of-http-headers-2-content-security-policy/)


## HttpOnly 簡介
* HttpOnly 是專門為了抵禦攻擊者利用 Cross-Site Scripting (XSS) 手法來盜取用戶身份所用


## Cross-Site Scripting (XSS)
* 存取使用者的 cookie 來獲得一些機敏資料，如 Session cookie 盜用使用者身分。 ref [HTTP Session 攻擊與防護](https://devco.re/blog/2014/06/03/http-session-protection/)
* 所以後來出現了 HttpOnly [RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)


## HttpOnly 主要作用
* 當 cookie 被設定 HttpOnly 為 true，此時瀏覽器僅會允許 cookie 經由 HTTP(S) 協定來存取。也就是說阻擋了 JavaScript 等 Script 存取，也就增加了 XSS 攻擊的困難度。


## 【Gson fromJson】

<code>


</code>

