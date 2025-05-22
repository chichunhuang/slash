---
title: Java 取 IP
description: 伺服器 客端 IP 取得方式 
keywords: [Java,Han,String]
---

    App Server 的實際 IP 可能會受到 firewall / switch / Proxy 的影響  
    Client 端的 IP 也可能在 servers 轉交間被遺漏了  
    同一套方法也似乎無法完全滿足所有需求  
    所以，這邊列出曾經使用過的方式  
    有些在 server 調整後便無法使用  
    不擔保一定能有作用，僅作參考  
    
    註: 這邊指的並非直接讀取相關設定檔
    
## 可能影響 IP 取得原因
* App 是否安裝在虛擬機
* 外層是否有 firewall / switch / Proxy 
* 外層 server 的 IP 相關設定 
* load balance 的設定  
* VPN 設定  
* hosts 中的設定


## 取得本機 IP 
    別跟我說問 MIS 就好了  
    這可能牽涉資安問題，所以不能說，但異常發生時卻要 App 寄信通知相關設備管理員      
    也有可能是因為動態佈署上的問題，連執行佈署的工程師都不確定，只知道 IP 區間    
    資安防護等機高的單位下，MIS 有時連 server 架構都須保密  
    所以有時還真麻煩  

__InetAddress__    
* 如果伺服器位於防火牆或 NAT 之後，失效

```javascript
    import java.net.InetAddress;
    import java.net.UnknownHostException;
    
    private String getLocalAddress() {
        String localAddress = "unknown host";
        try {
            InetAddress address = InetAddress.getLocalHost();
            localAddress = address.getHostAddress();
        } catch (UnknownHostException e1) {
            logger.warn("get local address error!");
        }
        return localAddress;
    }
```

__NetworkInterface__

```javascript
    import javax.servlet.http.HttpServletRequest;
    import java.net.InetAddress;
    import java.net.NetworkInterface;
    import java.net.SocketException;

    public static String getHostAddress() {

        StringBuilder ifconfig = new StringBuilder();
        String msg = StringUtils.EMPTY;
        try {
            for (Enumeration<NetworkInterface> en = NetworkInterface
                    .getNetworkInterfaces(); en.hasMoreElements();) {
                NetworkInterface intf = en.nextElement();
                for (Enumeration<InetAddress> enumIpAddr = intf
                        .getInetAddresses(); enumIpAddr.hasMoreElements();) {
                    InetAddress inetAddress = enumIpAddr.nextElement();
                    if (!inetAddress.isLoopbackAddress()
                            && !inetAddress.isLinkLocalAddress()
                            && inetAddress.isSiteLocalAddress()) {
                        ifconfig.append(
                                "\n" + inetAddress.getHostAddress().toString());
                    }
                }
            }
        } catch (SocketException e) {
            e.printStackTrace();
            msg = "InetAddressUtil.getHostAddress() found SocketException : "
                    + e.getMessage();
            logger.info(msg);
            logger.warn(msg);
        }
        return ifconfig.toString();
    }
```


## 取得客戶端 IP 

__request.getRemoteAddr()__
* 取直接連接到 App Server 的客戶端 IP
* 可能只會返回代理伺服器的 IP

```javascript
    import javax.servlet.http.HttpServletRequest;
    import org.apache.wicket.protocol.http.servlet.ServletWebRequest;

    ServletWebRequest request = ... ;
    request.getRemoteAddr();
    
    HttpServletRequest httpRequest = request.getContainerRequest();
    httpRequest.getRemoteHost();
```

__X-Forwarded-For__    
* 若有多層 servers 在外，通常第一個非 unknown 的 IP 是客戶端的真實 IP

```javascript
    import javax.servlet.http.HttpServletRequest;

    public String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }
        
```

__Proxy-Client-IP__    
* Proxy-Client-IP
* WL-Proxy-Client-IP
* 有些 server 會將 Client IP 藏在上述 header 參數中

```javascript
    import javax.servlet.http.HttpServletRequest;
    
    public String getRealIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }
```