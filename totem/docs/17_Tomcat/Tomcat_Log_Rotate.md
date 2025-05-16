---
title: Tomcat 自動切割 Log 檔
description: Tomcat Log Rotate
keywords: [Tomcat,Log]
---

因為 catalina.out.log 檔案太大，造成查閱 log 資料時檔案常常開不起來  
log4j.xml 進行下列調整後可使 cataline.out.log 能依照每天的日期來切割檔案  


## DailyRollingFileAppender  

下面設定可除了將 catalina.out.log 依據日期切分，  
並依 log 等級再做二次切分  
設定後每日會產下列格式 log files  

* info.log.2025-05-05  
* error.log.2025-05-05  



__log4j.xml __

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">

<log4j:configuration xmlns:log4j='http://jakarta.apache.org/log4j/'>

    <!-- 指定message 輸出到指定檔,輸出等級為INFO以上  -->
    <appender name="FILE_INFO"
        class="org.apache.log4j.DailyRollingFileAppender">
        <param name="File" value="${java.io.tmpdir}/logs/info.log" />
        <!-- Rollover at midnight each day -->
        <param name="DatePattern" value="'.'yyyy-MM-dd" />
        <layout class="org.apache.log4j.PatternLayout">
            <!-- The default pattern: Date Priority [Category] Message\n -->
            <param name="ConversionPattern"
                value="%d{dd-MM-yy HH:mm:ss,SSS} %-5p %c{2} - %m%n" />
        </layout>
    </appender>

    <!-- 指定message 輸出到指定檔,輸出等級為WARN以上  -->
    <appender name="FILE_WARN"
        class="org.apache.log4j.DailyRollingFileAppender">
        <param name="File" value="${java.io.tmpdir}/logs/error.log" />
        <!-- Rollover at midnight each day -->
        <param name="DatePattern" value="'.'yyyy-MM-dd" />
        <param name="Threshold" value="warn" />
        <layout class="org.apache.log4j.PatternLayout">
            <!-- The default pattern: Date Priority [Category] Message\n -->
            <param name="ConversionPattern"
                value="%d{dd-MM-yy HH:mm:ss,SSS} %-5p %c - %m%n" />
        </layout>
    </appender>

    <root>
        <appender-ref ref="FILE_INFO" />
        <appender-ref ref="FILE_WARN" />
    </root>

</log4j:configuration>
```
