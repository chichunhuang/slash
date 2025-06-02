---
title: Spring 利用 AOP 於異常發生時寄通知信
description: Spring 利用 AOP 於異常發生時寄通知信
keywords: [Spring,Properties,PropertyFactoryBean]
---
    
>    目的: 利用 Spring AOP 特性，當排程工作發生 Exception 時可以寄信通知系統管理人員  
>    然別忘了，排程 Schedulers 也應該輸出 logs 供異常追蹤或耗時參考等    

 * [AOP config 設定](#AOP_config)
 * [AspectJ Expression](#AspectJ_Expression)
 * [Gossip - Pointcut](https://openhome.cc/Gossip/Spring/Pointcut.html)

## 設定步驟
1. 建立 Aspect 工具程式用來處理異常發生後的動作
1. spring 設定檔 AOP 設定。 <code> applicationContext.xml </code> 依據個專案設定差異設定檔檔名會不同。

## 關於 Aspect 命名
* __Point Cut__ : 切入點，指的是 __條件、前題__ 的概念。當工程師所指定的 Point Cut 發生時，系統自動觸發 <span style={{color: '#0044FF'}}> __指定動作__ </span>。  
* __Advice__ : __通知、建議__ 的時間點與動作的意思。這邊指的是當發現 Point Cut 時，系統 <span style={{color: '#0044FF'}}> __觸發的時機__ </span>。在 Point Cut 動作前、後、發生錯誤或回傳結果時等等。  
* __Aspect__ : 管理 Advice 的 Java 物件。  

## Aspect Util
* 這邊 
    * Advise 命名為: ScheduleAspect
    * 事件處理方法命名為: afterThrowingAdvice
    * 相關資訊後續會需要在 applicationContext.xml 進行設定

__Aspect 類別: 管理處理動作__

```javascript

package totem.scheduler.util;

import java.io.PrintWriter;
import java.io.StringWriter;

import org.apache.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.springframework.beans.factory.annotation.Autowired;

import totem.mail.MailService;

public class ScheduleAspect {

    private static final Logger logger = Logger.getLogger(ScheduleAspect.class);

    private MailService mailService;

    @Autowired
    public void setMailService(MailService mailService) {
        this.mailService = mailService;
    }

    public void afterThrowingAdvice(JoinPoint joinPoint, Throwable exception) {
        String methodName = joinPoint.getSignature().getName();

        String allExceptionMsgs = getAllExceptionMsgs(exception);

        //console output
        logger.error(
                String.format("exception method: %s\n" + "exception msg:\n%s",
                        methodName, allExceptionMsgs));

        //mail 也寄一份
        mailService.sendSchedulerException(allExceptionMsgs);
        
        // 也可以撰寫其他可幫助收集除錯所需訊息的工具
    }

    // 資料收集
    private String getAllExceptionMsgs(Throwable exception) {
        StringWriter writer = new StringWriter();
        PrintWriter printWriter = new PrintWriter(writer);
        exception.printStackTrace(printWriter);
        printWriter.flush();
        return writer.toString();
    }

}
```


__config.xml: 設定 Point Cut 與處理動作間的關聯__

```xml
    <!-- ScheduleAspect  -->
    <bean id="scheduleAspect" class="totem.scheduler.util.ScheduleAspect" />
    
    <aop:config>
        <aop:aspect id="scheduleAspect" ref="scheduleAspect">
            <aop:after-throwing method="afterThrowingAdvice"
                throwing="exception" pointcut="execution(* totem.scheduler.TotemScheduleService.*(..))" />
        </aop:aspect>
    </aop:config>
```


### AOP config 設定筆記 <span id="AOP_config">&nbsp;</span>

__Advice 物件 and Point Cuts 處理函式__

```javascript

public class ScheduleAspect {

   public void beforeTest(JoinPoint joinPoint, Throwable exception) {}
   public void afterTest(JoinPoint joinPoint, Throwable exception) {}
   public void afterReturningTest(JoinPoint joinPoint, Throwable exception) {}
   public void aroundTest(JoinPoint joinPoint, Throwable exception) {}
   public void throwingTest(JoinPoint joinPoint, Throwable exception) {}

}
```

__Spring Aspect Config 設定__

```xml
    <aop:config>
    
        <!-- Point cut: 定義 point cut pattern, 自動執行指定動作的前提條件 -->
    　　<aop:pointcut expression="execution(public * insect.totem.aop.service.*.*(..))" id="myPointCut"/>

        <!-- Aspect: 統一管理指定動作的類別 -->
    　　<bean name="myAspect" class="totem.scheduler.util.ScheduleAspect"></bean>
    　　
    　　<!-- 將 Point Cuts 與 處理動作建立關聯 -->
    　　<aop:aspect id="aspect" ref="myAspect">

    　　　　<aop:before method="beforeTest" pointcut-ref="myPointCut"/>
    
    　　　　<aop:after method="afterTest" pointcut-ref="myPointCut"/>
    
    　　　　<!-- 正常結束才執行，異常時不動作 -->
    　　　　<aop:after-returning method="afterReturningTest" pointcut-ref="myPointCut"/>
    
    　　　　<!-- 指定動作之前與之後 -->
    　　　　<aop:around method="aroundTest" pointcut-ref="myPointCut"/>
    
    　　　　<!-- 異常發生時執行 -->
    　　　　<aop:after-throwing method="throwingTest" pointcut-ref="myPointCut"/>
    
    　　</aop:aspect>
    </aop:config>
```

### AspectJ Point Cut Expression <span id="AspectJ_Expression">&nbsp;</span>
* Point Cut Expression 與 Java Method 定義方式類似。依序是: 
    * modifier
    * return 
    * method name 或 package
    * throws 
* Expression 中的省略符號    
    * 省略符包含 星 wildcard 點 加: 星 \(*\) 代表任意，點 \(.\) 代表階層，加 \(+\) 通常是佔位符無意義。
    * 省略符用在 qualified name 的末段，前方為完整 package。  
    * 點: qualified name 的前段部分。
        * 即原先 package 中的階層符號。
    * qualified name 後半部分
        * 點: 連續兩個點，代表槽串階層。子資料夾下，與孫資料夾以及更下層結構。
        * 星號 : 在 package 與 method name  __外__ 一律代表任意型別。
        * 單一星號 : 用在 package 與 method name 代表所有類別名、方法名。 \(所以會看到 package.\*)。
        * 點加星: 用在 package 上代表資料夾內的類別。
        * 雙點加星: 用在 package 上代表 __槽串資料夾結構__ 內的類別皆含括。
        * 點加星: 用在 method name 上代表指定 class 下所有 methods。

__syntax__

```
    execution(modifiers-pattern ret-type-pattern declaring-type-pattern name-pattern(param-pattern) throws-pattern)
```


__範例__

* insect.totem.shedule 所有 class 的所有 methods

```
    execution(public * insect.totem.schedule.*.*(..))
```

* insect.totem.shedule.DailyScheduler 類別的所有方法

```
    execution(public * insect.totem.schedule.DailyScheduler.*(..))
```


* insect.totem.schedule 結構下與 insect.totem.schedule槽串結構下所有的 class 與其方法
    * 紀錄 schedule 執行過程
    * ex: 
        * insect.totem.schedule.SystemScheduler.do(); 
        * insect.totem.schedule.daily.DailyScheduler.doEveryDay(); 
        * insect.totem.schedule.monthly.MonthlyScheduler.doEveryMonth(); 
    
```
    execution(public * insect.totem.schedule..*.*(..))

    execution(public * insect.totem.schedule..*(..)) -> 再省略指定 method 部分
```

* insect.totem.rmi 槽串結構下限定以 RMI 結尾類別的 update 方法
    * 紀錄遠端服務呼叫紀錄
    * ex: 
        * insect.totem.rmi.InvokerRMI.update(); 
        * insect.totem.rmi.serverOne.ServerOneRMI.update(); 
        * insect.totem.rmi.serverTwo.ServerTwoRMI.update(); 
    
```
    execution(public * insect.totem.rmi...*RMI.update(..))
```

* 列舉
    * 用 or 串接
    
```
    execution(* insect.totem.PhotoService.*(..)) || execution(* insect.totem.ArticleService.*(..))
```