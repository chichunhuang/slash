---
title: Log4j 以 Email 進行 log
description: Log4j Email Appender
keywords: [Log4j,EmailAppender]
---

    Log4j 有提供將 log 寄到指定 email 的功能    
    可用在系統發生錯誤時，將錯誤以 Email 寄出到某個固定的帳號   
    log4j.xml 中加入一個 Appender 和 Logger 之後，  
    就可以在程式碼中取得該 Logger 並將訊息以 Email 寄出.
    相關說明如下:

## org.apache.log4j.net.SMTPAppender 設定

__Log4j Setting__   
* SMTPHost: mail server
* Subject: mail title 
* From/To: mails
* LevelRangeFilter: 指定訊息等級區間需寄出 mail

```xml
    <appender name="EmailAppender" class="org.apache.log4j.net.SMTPAppender">
     <param name="BufferSize" value="512" />
     <param name="SMTPHost" value="mail.server.ip" />
     <param name="From" value="projectName@b.c" />
     <param name="To" value="admin@receiver.org" />
     <param name="Subject" value="Email Subject" />
     <layout class="org.apache.log4j.PatternLayout">
          <param name="ConversionPattern"
           value="%d\{dd-MM-yy HH:mm:ss,SSS\} %-5p %c - %m%n" />
     </layout>
     <filter class="org.apache.log4j.varia.LevelRangeFilter">
          <param name="LevelMin" value="error" />
          <param name="LevelMax" value="fatal" />
     </filter>
    </appender>
     
    <logger name="EmailAppenderLogger" additivity="false">
     <appender-ref ref="EmailAppender" />
    </logger>
```    