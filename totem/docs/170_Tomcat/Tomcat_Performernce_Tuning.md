---
title: Tomcat 效能調教
description: Tomcat Performernce Tuning
keywords: [Tomcat，Performernce]
---

筆記來源: [http://www.techbrainwave.com/?p=836](http://www.techbrainwave.com/?p=836)  
文章中建議的效能調教方式

## 解決JRE Memory Leak
    選用較新版本的 Tomcat !!


## 增加 Heap Size
    配置多一點記憶體給 Tomcat，減少 GC 的次數。  
    可以修改 tomcat/bin/catalina.sh  
    windows 下則可意修改啟動參數

* -Xms/-Xmx: 指定初始/最大的 Heap Size
* -XX:NewSize/-XX:MaxNewSize: 指定 __放置新生Java物件__ 區的初始/最大值。  
如果程式會產生大量的物件，這個數值就必須相對大一點。
    
```bash
    JAVA_OPTS="-server -Xms1024m -Xmx1024m -XX:NewSize=512m -XX:MaxNewSize=512m -XX:PermSize=512m -XX:MaxPermSize=512m"
```

## Thread Pool Setting
    Thread pool 大小關係到 Tomcat 處理多個 request 時的效能，預設值是 200。   
    當 Thread pool 中的 thread 都被佔用時，之後進來的 request 就會進入等待狀態，  
    直到另一個 thread 被釋放，Tomcat 才能處理等待中的 request。  
    但 Thread pool 愈大，Tomcat 啟動時間愈長。  

如果 log 中出現下面訊息，代表 thread pool 需要增加。

```
    org.apache.tomcat.util.threads.ThreadPool logFull SEVERE: 
    All threads (250) are currently busy， waiting. 
    Increase maxThreads (250) or check the servlet status
```


## 設定傳輸內容壓縮
    在 tomcat/conf/server.xml 中設定壓縮

* 範例: 針對 html、xml、純文字與串流，大於 500 個位元組時進行壓縮。
    
```xml
    <Connector port="8080" 
        protocol="HTTP/1.1"
        connectionTimeout="20000"
        redirectPort="8181" 
        compression="500"
        compressableMimeType="text/html，text/xml，text/plain，application/octet-stream" />
```

### Apache 開啟網頁壓縮
    /etc/httpd/conf 
    
```xml
    <VirtualHost *:80>
        ServerName ...
        ...
         
        AddOutputFilter DEFLATE css js txt
        AddOutputFilterByType DEFLATE text/html text/plain text/xml
    </VirtualHost>
```

## 使用 Tomcat 原生函式庫
    Tomcat 是以 Java 寫成的 Web server， 所以是運行在 JVM 之上，  
    雖然具有可移植性，效能卻比原生執行檔來得差。  
    Apache 為此有發佈一些主要平台上的原生 Tomcat 函式庫，以提升 Tomcat 效能。  
    詳情可以參考 [https://tomcat.apache.org/native-1.3-doc/index.html](https://tomcat.apache.org/native-1.3-doc/index.html)
    
##  資料庫效能調整
    當Tomcat在等待資料庫的回應時，也會耗損服務的時間。  
    所以如果讓操作資料庫的時間變短，Tomcat 就能處理更多的 request。  
    常用的方式有預儲程序或預先編譯的查詢，以及適當的 connection pool 設定。  
    
    
## 其他
* 在客戶端啟用瀏覽器暫存，減少靜態內容的 request
* Tomcat 應該在作業系統載入完成後自動啟動
* 啟用 HTTPS。雖然會造成效態上的負擔，但可以提升服務的安全性    