---
title: XFS Cross Frame Scripting
description: XFS、XSS、跨站腳本攻擊
keywords: [ISMS]
---

## 避免頁面被內嵌

### html head 設定
* Content Security Policy :CSP 設定

```html
    <head>
        <meta http-equiv="Content-Security-Policy" content="frame-ancestors 'none';" />
    </head>
```

### js location 轉導
* browser 可停用

```html

    <head>
        <script type="text/javascript">
            if (top != self) {
                top.location = self.location;
            }
         </script>
    </head>
```

### filter 
* X-Frame-Options, 下面範例是 tomcat 處理方式。不同 container 處理方式不同。

___web.xml___

```xml
        <!-- XFS -->
        <filter>
            <filter-name>httpHeaderSecurity</filter-name>
            <filter-class>org.apache.catalina.filters.HttpHeaderSecurityFilter</filter-class>
            <init-param>
                <param-name>antiClickJackingOption</param-name>
                <param-value>SAMEORIGIN</param-value>
            </init-param>
        </filter>
        <filter-mapping>
            <filter-name>httpHeaderSecurity</filter-name>
            <url-pattern>/*</url-pattern>
        </filter-mapping>
```

