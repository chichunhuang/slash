---
title: Log4j 學習紀錄
description: Log4j 
keywords: [Log4j]
---

    這邊是 log4j 1.x 版  
    log4j-1.2.17.jar  
    下面的 Appender / Layout 等若未設定則採用預設的 Root Logger 中設定  
    
    Log4j 是一套開放源碼的工具，方便開發人員在程式中加入 log 機制，並輸出到不同媒介上。  
    Log4j 由<code>properites</code> 或 <code>XML</code>設定檔進行設定。  
    輸出媒介包含 console， 檔案，串流，TCP 協定的伺服器，Unix Syslog daemon 等。  
    Log4j 具有 5 種 log 層級( <code>DEBUG</code>, <code>INFO</code>, <code>WARN</code>, <code>ERROR</code>, <code>FATAL</code> )，可用於不同的系統狀態下所產生的訊息。  
    

## 組成 Log4j 的三大元件
* [<code>Logger</code>: 程式中進行 logging 的元件](#log4j_logger)
* [<code>Appender</code>: 負責將 log message 輸出到不同媒介](#log4j_appender)
* [<code>Layout</code>: 定義 log message 的格式](#log4j_layout)


## Log4j 的階層架構
* 一個程式中可以擁有多個 Logger，Logger 間以<code>名稱</code>區分，並以名稱分階層。  
    例如: 當一個 Logger 的名稱為 ___package.a___ ，另一個名為 ___package.a.b___ 的 Logger 就隸屬於 ___package.a___ logger，  
    如果 ___package.a.b___ 未定義自己的 log 等級，則以 ___package.a___ 的 log 等級為預設值。  

* 階層的最高為 <code>Root logger</code>。  
    Root logger 為預設物件，不具有名稱屬性，  
    可以隨時在程式中以 ___Logger.getRootLogger\(\)___ 取得，  
    其它 logger 則以 ___Logger.getLogger\(String name\)___ 取得。  

## Logger <span id="log4j_logger">&nbsp;</span>
* <span style={{color: '#0044FF'}}> __Logger 可以被指派等級__ </span> 。
    * 能夠指派給 Logger 的等級有 : <code>DEBUG</code>, <code>INFO</code>, <code>WARN</code>, <code>ERROR</code>, <code>FATAL</code> 5 種，定義在 ___org.apache.log4j.Level___ 類別中。
    * 這 5 種等級的高低順序為 FATAL > ERROR > WARN > INFO > DEBUG。
* Logger 的等級決定它產生 log message 的種類 : Logger 只寫 __出高於或等於本身等級__ 的 log message。  
    例如: 某個 WARN 等級的 Logger ，它可寫出等級為 WARN、ERROR、FATAL 等級的 log message，  
    並忽略 DEBUG， INFO 等級的 log message 。
* 若是 Logger 的等級未被設定，則自動套用 parent\(上一層\) 的等級。  
    如果程式中所有的 Logger 都未設定等級，則套用 root logger。
* Logger 以名稱辨別，所以在程式中任何地方，呼叫 Logger.getLogger()，並傳入同一個 Logger 名稱，則會得到同一個 Logger 的 reference。
* Logger 之間以名稱區分出階層。即使父階層在程式中出現的時機比子階層晚，例如 package.a logger 比 package.a.b 被取得的時間來得晚，package.a 仍然是 package.a.b 的父階層。仍然會影響到子階層 logger 未被定義的屬性， 如: log 等級、appender、layout 等等。  
* 通常 Logger.getLogger(loggerName) 當中的 loggerName 會以 Logger 所在 Class 的 class.getName() 來命名以避免重名。


## Appender <span id="log4j_appender">&nbsp;</span>
* 透過 Appender，Logger 能夠將 log message 輸出到指定的媒體上。  
* 一個 Logger 能夠擁有多個 Appender，所以 Logger 能夠同時輸出到多個媒體上。
* <span style={{color: '#0044FF'}}> Appender 的設定亦會反映在 __Logger 的階層中__ </span> 。
    * 當 Logger 輸出一筆 log 時，__父階層的 Appender 和自己的 Appender 輸出設定都會反應到這筆 log__  中。
    * 例如: __package.insect__ Logger 有一個 Appender 將 message 輸出到 console，而 __package.insect.totem__ 有一個 Appender 將 message 輸出到檔案。當 package.insect.totem 輸出 log 時，console 和檔案都會出現這筆 log。  
    * 例外情況是: 當 logger 將 <code>additivity 屬性設為 false</code>，則此 <span style={{color: '#996633'}}>__logger 與它的子 logger 都不會承襲父層__</span>的設定。

```
    Logger.setAdditivity(false)
```


## Layout <span id="log4j_layout">&nbsp;</span>
* <span style={{color: '#0044FF'}}>Layout 的設定亦會反映在 __Logger 的階層中__ </span>
* 開發人員藉由 Layout 的設定，改變 message 所輸出的格式。
    * 例如: 為 Logger 加入一個 conversion pattern 為 <code>%r %t %-5p %c - %m%n</code> 的 PatternLayout，則輸出的 message 就可能會像下列這樣:

```
176 [main] INFO  org.foo.Bar - Located nearest gas station.
```

* __PatternLayout__ 的 格式字元列表如下:

   |      | 說明   |
   | ---- | ----   |
   | __\%c__ | 輸出日誌訊息所屬的 <span style={{color: '#996633'}}>__Class 的全名__</span> | 
   | __%d__  | 輸出日誌時間點的 <span style={{color: '#996633'}}>__日期或時間__</span> ，指定格式的方式：\%d\{dd-MM-yy HH:mm:ss,SSS\} | 
   | __%l__  | 輸出日誌事件的發生位置，即輸出日誌訊息的語句處於它所在的類別的 <span style={{color: '#996633'}}>__第幾行__</span> | 
   | __%m__  | 輸出代碼中指定的訊息，如log(message)中的message | 
   | __%n__  | 輸出一個 <span style={{color: '#996633'}}>__換行符號__</span> | 
   | __%p__  | 輸出優先階層，即 DEBUG，INFO，WARN，ERROR，FATAL <br/> 如果是呼叫 debug() 輸出的，則為 DEBUG，依此類推 <br/> -5p 代表將此字串以空白補至 5 個字元 | 
   | __%r__  | 輸出啟動到輸出該日誌訊息所耗費的毫秒數 | 
   | __%t__  | 輸出產生該日誌事件的 <span style={{color: '#996633'}}>__thread__</span> 名 | 
   | __%f__  | 輸出日誌訊息所屬的 <span style={{color: '#996633'}}>__Class 的類別名__</span> | 


## 設定
* Log4j 有 3 種設定方式 
    * 經由 [Java 程式配置](#log4j_java_configuration)
    * 經由 [<code>__property__</code> 檔設定](#log4j_prop_configuration)
    * 經由 [<code>__xml__</code> 設定檔](#log4j_xml_configuration)

* 步驟:
    1. 先定義 Root Logger 等級: 所有 logger 的預設等級
    1. 再定義 Root Logger Appender: 若定義 Root Logger，則 Root Logger 的 Appender 一定要指定
    1. 定義 Root Logger Layout: 定義 Layout 的類別後，選擇性定義 Layout 的 conversion pattern 
    1. 依需要定義個別的 Logger、Appender、Layout

### Java 程式配置 log4j <span id="log4j_java_configuration">&nbsp;</span>
   使用 ___BasicConfigurator___ 進行設定  
   Root Logger 預設被設定為 __DEBUG 等級__  
   log message 以 <code>%r %t %p %c %x - %m%n</code> 的格式輸出到 console

```java
    import org.apache.log4j.BasicConfigurator;
    import org.apache.log4j.Logger;
    
    public class Log4jByBasicConfigurator {
        private static Logger logger = Logger.getLogger(Log4jByBasicConfigurator.class);
        //private static Logger logger = 
        //          Logger.getLogger(Log4jByBasicConfigurator.class.getName());
        
        public static void main(String[] args){
            BasicConfigurator.configure(); 
            logger.info("This is an info message."); 
            logger.debug("This is a debug message."); 
        }
    }
```

### Property 配置 log4j <span id="log4j_prop_configuration">&nbsp;</span>
    以 \*.properties 設定移至外部檔案，增加靈活與 DevOp 偕同
    
* Log4j 會從 <span style={{color: '#996633'}}>__class path__</span> 中尋找 <code>log4j.properties</code>，並讀取相關設定。
* 設定範例:
    * package insect.totem.school.School;
    * package insect.totem.school.classroom.ClassRoom;
    * Root Logger 資料輸出到 console
    * School 的資料只輸出到 file
    * ClassRoom  的資料只輸出到 email
    * 變色區域是自定義的名稱

<hr/>


___log4j.properties___

    ! =========================  
    ! 1. Root Logger 設定 (console)  
    ! =========================  
    
    !定義 Root Logger 的等級為 INFO，且為其指定一個 appender 名為 <span style={{color: '#0044FF'}}> __CONSOLE__ </span>    
    log4j.rootLogger=INFO, <span style={{color: '#0044FF'}}> __CONSOLE__ </span>  
    
    ! <span style={{color: '#0044FF'}}> __CONSOLE__ </span> Appender  
    log4j.appender.<span style={{color: '#0044FF'}}> __CONSOLE__ </span>=org.apache.log4j.ConsoleAppender  
    
    !指定 Console 的 Layout  
    log4j.appender.<span style={{color: '#0044FF'}}> __CONSOLE__ </span>.layout=org.apache.log4j.PatternLayout  
    
    !指定 Console Layout 的輸出格式  
    log4j.appender.<span style={{color: '#0044FF'}}> __CONSOLE__ </span>.layout.ConversionPattern=%d\{yyyy-MM-dd HH:mm:ss\} \[%t\] %-5p %c - %m%n  
    
    
    ! =========================  
    ! 設定特定名稱的 Logger  
    ! 2. Logger for insect.totem.school.School (file)  
    ! =========================  
    log4j.__logger.insect.totem.school.School__=DEBUG, <span style={{color: '#996633'}}>__SCHOOL_FILE__</span>  
    log4j.__additivity.insect.totem.school.School__=false  
    
    log4j.appender.<span style={{color: '#996633'}}>__SCHOOL_FILE__</span>=org.apache.log4j.RollingFileAppender  
    log4j.appender.<span style={{color: '#996633'}}>__SCHOOL_FILE__</span>.File=logs/school.log  
    log4j.appender.<span style={{color: '#996633'}}>__SCHOOL_FILE__</span>.MaxFileSize=1MB  
    log4j.appender.<span style={{color: '#996633'}}>__SCHOOL_FILE__</span>.MaxBackupIndex=3  
    log4j.appender.<span style={{color: '#996633'}}>__SCHOOL_FILE__</span>.layout=org.apache.log4j.PatternLayout  
    log4j.appender.<span style={{color: '#996633'}}>__SCHOOL_FILE__</span>.layout.ConversionPattern=%d\{yyyy-MM-dd HH:mm:ss\} \[%t\] %-5p %c - %m%n  
    
    
    ! =========================  
    ! 設定特定名稱的 Logger  
    ! 3. Logger for insect.totem.school.classroom.ClassRoom (email)  
    ! =========================  
    log4j.__logger.insect.totem.school.classroom.ClassRoom__=ERROR, <span style={{color: '#009900'}}> __MAIL__ </span>  
    log4j.__additivity.insect.totem.school.classroom.ClassRoom__=false  
    
    log4j.appender.<span style={{color: '#009900'}}> __MAIL__ </span>=org.apache.log4j.net.SMTPAppender  
    log4j.appender.<span style={{color: '#009900'}}> __MAIL__ </span>.Threshold=ERROR  
    log4j.appender.<span style={{color: '#009900'}}> __MAIL__ </span>.SMTPHost=smtp.example.com  
    log4j.appender.<span style={{color: '#009900'}}> __MAIL__ </span>.SMTPUsername=your_email@example.com  
    log4j.appender.<span style={{color: '#009900'}}> __MAIL__ </span>.SMTPPassword=your_password  
    log4j.appender.<span style={{color: '#009900'}}> __MAIL__ </span>.From=your_email@example.com  
    log4j.appender.<span style={{color: '#009900'}}> __MAIL__ </span>.To=admin@example.com  
    log4j.appender.<span style={{color: '#009900'}}> __MAIL__ </span>.Subject=Log4j Error in ClassRoom  
    log4j.appender.<span style={{color: '#009900'}}> __MAIL__ </span>.layout=org.apache.log4j.PatternLayout  
    log4j.appender.<span style={{color: '#009900'}}> __MAIL__ </span>.layout.ConversionPattern=%d\{yyyy-MM-dd HH:mm:ss\} \[%t\] %-5p %c - %m%n  
    
<hr/>

<p>
  <a class="btn btn-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    完整範例
  </a>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">

```property
# =========================
# 1. Root Logger 設定 (console)
# =========================
    #定義 Root Logger 的等級為 INFO，且為其指定一個 appender 名為 CONSOLE  
    log4j.rootLogger=INFO, CONSOLE
    
    # Console Appender
    log4j.appender.CONSOLE=org.apache.log4j.ConsoleAppender
    #指定 Console 的 Layout
    log4j.appender.CONSOLE.layout=org.apache.log4j.PatternLayout
    #指定 Console Layout 的輸出格式
    log4j.appender.CONSOLE.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} [%t] %-5p %c - %m%n
    
    
    # =========================
    # 2. Logger for insect.totem.school.School (file)
    # #設定特定名稱的 Logger
    # =========================
    log4j.logger.insect.totem.school.School=DEBUG, SCHOOL_FILE
    log4j.additivity.insect.totem.school.School=false
    
    log4j.appender.SCHOOL_FILE=org.apache.log4j.RollingFileAppender
    log4j.appender.SCHOOL_FILE.File=logs/school.log
    log4j.appender.SCHOOL_FILE.MaxFileSize=1MB
    log4j.appender.SCHOOL_FILE.MaxBackupIndex=3
    log4j.appender.SCHOOL_FILE.layout=org.apache.log4j.PatternLayout
    log4j.appender.SCHOOL_FILE.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} [%t] %-5p %c - %m%n
    
    
    # =========================
    # 3. Logger for insect.totem.school.classroom.ClassRoom (email)
    # #設定特定名稱的 Logger
    # =========================
    log4j.logger.insect.totem.school.classroom.ClassRoom=ERROR, MAIL
    log4j.additivity.insect.totem.school.classroom.ClassRoom=false
    
    log4j.appender.MAIL=org.apache.log4j.net.SMTPAppender
    log4j.appender.MAIL.Threshold=ERROR
    log4j.appender.MAIL.SMTPHost=smtp.example.com
    log4j.appender.MAIL.SMTPUsername=your_email@example.com
    log4j.appender.MAIL.SMTPPassword=your_password
    log4j.appender.MAIL.From=your_email@example.com
    log4j.appender.MAIL.To=admin@example.com
    log4j.appender.MAIL.Subject=Log4j Error in ClassRoom
    log4j.appender.MAIL.layout=org.apache.log4j.PatternLayout
    log4j.appender.MAIL.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} [%t] %-5p %c - %m%n

```
  
  </div>
</div>


| 區塊  | 說明 | 
| ---- | ---- |
| __rootLogger__ |   全域預設 Logger，這裡設定為 INFO 級別並輸出到 Console。|
| __logger.insect.totem.school.School__   |  設定 School 的 logger 為 DEBUG 級別，輸出到 school.log 檔案。使用 additivity=false 避免輸出重複到 root logger（console）。|
| __logger.insect.totem.school.classroom.ClassRoom__  |  設定 ClassRoom logger 為 ERROR 級別，並將錯誤透過 email 通知，additivity=false 避免輸出到其他 appender。|
| __SMTPAppender__   |   為 email 通知的組件，記得替換 SMTP 主機與帳號密碼。|


___Java 中使用方式___

```java
    package insect.totem.school;
    
    import org.apache.log4j.Logger;
    
    public class School {
        private static final Logger logger = Logger.getLogger(School.class);
    
        public void performTask() {
            logger.debug("School debug message - something detailed.");
            logger.info("School info message - general process update.");
            logger.warn("School warning message - something might be wrong.");
        }
    }
```


```java
    package insect.totem.school.classroom;
    
    import org.apache.log4j.Logger;
    
    public class ClassRoom {
        private static final Logger logger = Logger.getLogger(ClassRoom.class);
        // 或 private static final Logger logger = Logger.getLogger(ClassRoom.class.getName());
    
        public void causeError() {
            try {
                // 模擬錯誤
                int result = 10 / 0;
            } catch (Exception e) {
                logger.error("ClassRoom error occurred!", e);
            }
        }
    }
```


### Xml 配置 log4j <span id="log4j_xml_configuration">&nbsp;</span>
* 需將 log4j.xml 放在你的 classpath 根目錄
* 相同情境改以 xml 設定

___log4j.xml___

```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
    
    <log4j:configuration xmlns:log4j="http://jakarta.apache.org/log4j/">
    
      <!-- ========== Root Logger：輸出到 console ========== -->
      <root>
        <priority value="info" />
        <appender-ref ref="CONSOLE" />
      </root>
    
      <!-- ========== Logger for insect.totem.school.School：輸出到 file ========== -->
      <logger name="insect.totem.school.School" additivity="false">
        <level value="debug" />
        <appender-ref ref="SCHOOL_FILE" />
      </logger>
    
      <!-- ========== Logger for insect.totem.school.classroom.ClassRoom：輸出到 email ========== -->
      <logger name="insect.totem.school.classroom.ClassRoom" additivity="false">
        <level value="error" />
        <appender-ref ref="MAIL" />
      </logger>
    
      <!-- ========== Appender：CONSOLE ========== -->
      <appender name="CONSOLE" class="org.apache.log4j.ConsoleAppender">
        <layout class="org.apache.log4j.PatternLayout">
          <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss} [%t] %-5p %c - %m%n"/>
        </layout>
      </appender>
    
      <!-- ========== Appender：SCHOOL_FILE ========== -->
      <appender name="SCHOOL_FILE" class="org.apache.log4j.RollingFileAppender">
        <param name="File" value="logs/school.log"/>
        <param name="MaxFileSize" value="1MB"/>
        <param name="MaxBackupIndex" value="3"/>
        <layout class="org.apache.log4j.PatternLayout">
          <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss} [%t] %-5p %c - %m%n"/>
        </layout>
      </appender>
    
      <!-- ========== Appender：MAIL ========== -->
      <appender name="MAIL" class="org.apache.log4j.net.SMTPAppender">
        <param name="Threshold" value="ERROR"/>
        <param name="SMTPHost" value="smtp.example.com"/>
        <param name="SMTPUsername" value="your_email@example.com"/>
        <param name="SMTPPassword" value="your_password"/>
        <param name="From" value="your_email@example.com"/>
        <param name="To" value="admin@example.com"/>
        <param name="Subject" value="Log4j Error in ClassRoom"/>
        <layout class="org.apache.log4j.PatternLayout">
          <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss} [%t] %-5p %c - %m%n"/>
        </layout>
      </appender>
    
    </log4j:configuration>

```