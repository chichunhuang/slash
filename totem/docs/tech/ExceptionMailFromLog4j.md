---
title: 【Log4j EmailAppender Configuration】
description: 當log4j looger紀錄指定等級的訊息時，發信通知特定人員
keywords: [log4j,mail,SMTPAppender]
---
import { CodeBlock, dracula  } from "react-code-blocks";

## Log4j SMTPAppender 使用時機
* 通常針對 Scheduler 相關的程式，我會額外撰寫許多 log 輸出。例如程式走到哪個步驟了，我走訪的資料走到那一筆了，整個動作花費了多少時間等等。相關資訊可以供後續異常或效能分析以及 cron job 調整。相關步驟都是為了營運持續管理(BCM)與風險管理(RM)，Log4j 在這當中的角色除了軌跡紀錄外其實也可為主動報警機制的一環。
* 下列介紹便是以 org.apache.log4j.net.SMTPAppender 主動報警的相關設定方式。

## log4j.xml 定義 SMTPAppender Filter
* Mail appender : from / to / subject / SMTPHost 設定
  * 相關參數可以在 build 過程置換，會是以其他技巧經由 \*.properties 帶入。這邊不贅述。
* Mail appender filter 設定 : 指定要寄信的 logger 等級。
* 完成下方設定時當 logger 紀錄 error 至 fatal 間的訊息時便會一併寄信通知指定人員。


<CodeBlock text={`

<appender name="EmailAppender">
         <param name="BufferSize" value="512" />
         <param name="SMTPHost" value="xxx.xxx.xxx.xxx" />
         <param name="From" value="mailFrom@dummy.org" />
         <param name="To" value="mailToAdmin@dummy.org" />
         <param name="Subject" value="Subject of Exception Mail" />
         <layout>
              <param name="ConversionPattern"
               value="%d\\{dd-MM-yy HH:mm:ss,SSS\\} %-5p %c - %m%n" />
         </layout>
         <filter>
              <param name="LevelMin" value="error" />
              <param name="LevelMax" value="fatal" />
         </filter>
    </appender>
     
    <logger name="exceptionEmailAppenderLogger" additivity="false">
       <appender-ref ref="EmailAppender" />
    </logger>
  
	`}
	  language='xml'
	  showLineNumbers='true'
	  />
	  

## Java 程式借用 Log4j 寄信機制 (選配)
* 上方範例建立了一個名為 exceptionEmailAppenderLogger 的 logger
  * 這邊 additivity="false" 意味著不繼承自 root，不會將資訊輸出至 root 的 appender。只輸出到自己 Appender 所指定位置。
* 程式碼中其實可以利用 logger name 直接取 exceptionEmailAppenderLogger 然後寄信。
* 範例如下: EmailAppenderLogger.java


<CodeBlock
      text={`
	  
	package totem.log4j.logger.mail;
	
	public class EmailAppenderLogger implements EmailLogger{
		 
		private boolean disableMail;
	 
		private final static Logger logger = Logger
				.getLogger("exceptionEmailAppenderLogger");
		 
		@Override
		public void sendMessage(String message) {
	 
			if (!disableMail){
				logger.error(message); 
			}
		}	 
		public void setDisableMail(boolean disableMail) {
			this.disableMail = disableMail;
		}	 
	}
	  `
	}
      language='Java'
      showLineNumbers='true'
      
    />

## Spring Context 與 Log4j 整合寄信功能 (選配)
* 既然上方都建立了一個寄信工具\(EmailAppenderLogger.java\) 那不如直接將他交給 Spring 管理，需要時直接 Injection。
* Spring Application Context 設定範例如下:
* applicationContext-log4j.xml
	
<CodeBlock
      text={`	  
	<bean id="emailAppenderLogger"
        class="totem.log4j.logger.mail.EmailAppenderLogger">
        <property name="disableMail" value="$\{mail.disable\}" />
    </bean>
	  `}
      language='xml'
      showLineNumbers='true'
      //theme={dracula} //use default else 
    />	


## 一個 log4j.xml 的其他 Appenders 設定範例
* log4j.xml 
  * ConsoleAppender
  * DailyRollingFileAppender
  * SMTPAppender



<CodeBlock text={`
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
<log4j:configuration xmlns:log4j='http://jakarta.apache.org/log4j/'>
    <!-- 指定message 輸出到console  -->
    <appender name="STDOUT" class="org.apache.log4j.ConsoleAppender">
        <layout class="org.apache.log4j.PatternLayout">
            <param name="ConversionPattern"
                value="%d\{dd-MM-yy HH:mm:ss,SSS\} %-5p %c - %m%n" />
        </layout>
    </appender>
    
	<!-- 指定message輸出到指定檔,輸出等級為INFO以上  -->
	 <appender name="FILE_INFO"
        class="org.apache.log4j.DailyRollingFileAppender">
		<param name="File" value="$\{java.io.tmpdi\}/logs/cable_info.log" />
		<!-- Rollover at midnight each day -->
        <param name="DatePattern" value="'.'yyyy-MM-dd" />
        <layout class="org.apache.log4j.PatternLayout">
		    <!-- The default pattern: Date Priority [Category] Message -->
            <param name="ConversionPattern"
                value="%d\{dd-MM-yy HH:mm:ss,SSS\} %-5p %c{2} - %m%n" />
        </layout>
    </appender>
	
    <!-- 指定message 輸出到指定檔,輸出等級為WARN以上  -->
    <appender name="FILE_WARN"
        class="org.apache.log4j.DailyRollingFileAppender">
        <param name="File" value="$\{java.io.tmpdir\}/logs/cable_error.log" />
        <!-- Rollover at midnight each day -->
        <param name="DatePattern" value="'.'yyyy-MM-dd" />
        <param name="Threshold" value="warn" />
        <layout class="org.apache.log4j.PatternLayout">
            <!-- The default pattern: Date Priority [Category] Message\n -->
            <param name="ConversionPattern"
                value="%d\{dd-MM-yy HH:mm:ss,SSS\} %-5p %c - %m%n" />
        </layout>
    </appender>

<appender name="EmailAppender" class="org.apache.log4j.net.SMTPAppender">
         <param name="BufferSize" value="512" />
         <param name="SMTPHost" value="dummySmtpHost" />
         <param name="From" value="dummyFrom" />
         <param name="To" value="dummyTo" />
         <param name="Subject" value="dummySubject" />
         <layout class="org.apache.log4j.PatternLayout">
              <param name="ConversionPattern"
               value="%d\{dd-MM-yy HH:mm:ss,SSS\} %-5p %c - %m%n" />
         </layout>
         <filter class="org.apache.log4j.varia.LevelRangeFilter">
              <param name="LevelMin" value="error" />
              <param name="LevelMax" value="fatal" />
         </filter>
    </appender>	

<appender name="CATALINA"
        class="org.apache.log4j.DailyRollingFileAppender">
        <param name="File" value="$\{java.io.tmpdir\}/logs/catalina.out" />
        <param name="DatePattern" value="'.'yyyy-MM-dd" />
        <layout class="org.apache.log4j.PatternLayout">
        <param name="ConversionPattern"
                value="%d\{dd-MM-yy HH:mm:ss,SSS\} %-5p %c\{2\} - %m%n" />
        </layout>
    </appender>

<logger name="exceptionEmailAppenderLogger" additivity="false">
        <appender-ref ref="EmailAppender" />
    </logger>
	
<root>
        <level value="info" />
        <appender-ref ref="STDOUT" />
        <appender-ref ref="FILE_INFO" />
        <appender-ref ref="FILE_WARN" />
        <appender-ref ref="CATALINA" />
    </root>
<//log4j:configuration>	
	`}
      language='xml'
      showLineNumbers='true'
      //theme={dracula} //use default else 
    />	  
	 
<br/>	 
