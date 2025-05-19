---
title: Tomcat 編碼
description: Tomcat encoding
keywords: [Tomcat,encoding]
---

    部分情形當使用 Windows 開發時，   
    可能會遇到編碼問題。  
    簡單的處理方式是
    
    1. Windows 開發環境請在 Tomcat 啟動時增加參數，強制 Tomcat 使用UTF-8編碼
    2. 讀入的檔案一律轉成 UTF-8 後處理
    
    這邊介紹幾個與 Tomcat Encoding 相關的設定方式
    
## 啟動參數增加 encoding

* 如果你的開發平台是 Linux，那也不需設，因為本身就是 zh_TW.UTF-8

```bash
    "-Dfile.encoding=UTF8"
```

__eample__

```bash
    -server -Xms11G -Xmx2G -Dfile.encoding=UTF8
    
```

## Connector 增加 URIEncoding 設定

__tomcat/conf/server.xml__
* 增加 URIEncoding 設定，部分網頁套件使用 URIEncoding。可避免  submit 資料亂碼問題

```xml
    <Connector port="8080" 
        URIEncoding="UTF-8"
        maxHttpHeaderSize="8192" 
        maxThreads="150" 
        minSpareThreads="25" 
        maxSpareThreads="75"
        enableLookups="false" 
        redirectPort="8443" 
        acceptCount="100"
                   connectionTimeout="20000" disableUploadTimeout="true" />
```               

## apache 增加 ajp connector 設定
* 如果 tomcat 外加掛了 apache ，那 ajp connector 也要加上 URIEncoding

```xml
    <Connector port="8009" 
        URIEncoding="UTF-8" 
        enableLookups="false" 
        redirectPort="8443" 
        protocol="AJP/1.3" />
```

__tomcat/conf/server.xml__