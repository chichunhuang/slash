---
title: Tomcat 當前 Clients 連線數
description: Tomcat App online connections
keywords: [Tomcat,Client Connections]
---

> 系統更版時必須確認線上無使用者並關閉 Ap 與外部連線。
> 習慣上會開發一個 WebApp UI 供管理人員登入後查詢線上人數、帳號、連線 IP、連線時間等等資料。
> 今天遇到客戶買走 WebApp 自行管理 server。MIS 功能被閹割時的替代方案。   
> 好處是，方便。
> 缺點是閹割後的 UI 無停機維護動態即時公告，MIS 也無簡易畫面查詢當前線上人數。 
> App 管理員，也無法直接聯絡/通知指定 User 先行離線。


## Tomcat Container 當前 Clients 連線數
有下列幾種方式可用:

| 方法  | 額外設定 | 即時監控 |
| ---- | ---- | ---- |
| <span style={{color: '#0044FF'}}> __netstat__ </span> | 不需要 | Y |
| lsof | 不需要 | Y |
| Tomcat Manager | 需要開啟 manager-gui | Y  |
| JMX (JConsole/jmxterm) | 要開啟 JMX | Y |
| Access Log  | 開啟 access_log | 適用於___歷史紀錄___查詢 |

## netstat
> 透過 netstat 命令查看 Tomcat 當前的 TCP 連線狀態  
> netstat 僅適用於 Linux

```bash
netstat -atn | grep :8080 | grep ESTABLISHED | wc -l
```
* :8080  🢂  Tomcat listening port，改成 App 所使用的 Port Number。
* ESTABLISHED  🢂  直接查詢當前活躍連線狀態
* wc -l  🢂  計算目前的連線數量
* -a  🢂  all
* -t  🢂  僅查詢 TCP 連線。 -u 查詢 UDP 連線
* -n  🢂  自動解析 DNS

* 註關於狀態:
    * ESTABLISHED 已建立連線
    * CLOSE_WAIT 等待關閉連線
    * FIN_WAIT_1 遠端電腦已關閉連接，但其連接的本機應用程式仍未確認。
    * FIN_WAIT_2 本機已關閉連接，但遠端電腦尚未確認。或是兩個系統之間的連線中斷。
    * TIME_WAIT 表示 socket 已關閉，處於停留狀態，等待作業系統清理它。
    
    

## lsof
> lsof 的 -i 參數可以用來查詢所有的網路連線  
> 也可以用來監控 Tomcat 目前的開放連線

```shell
lsof -i :8080 | grep ESTABLISHED | wc -l

lsof -i tcp | grep ESTABLISHED | wc -l

lsof -i udp | grep ESTABLISHED | wc -l
```


## Tomcat Manager
> Tomcat 的 Manager App 提供了監控 HTTP 連線的功能，可以透過它來查看當前的 Active Sessions

___conf/tomcat-users.xml___

```xml
<tomcat-users>
    <user username="admin" password="password" roles="manager-gui"/>
</tomcat-users>
```

1. 先開啟 Tomcat Manager 功能，並設定管理者帳號。如上範例。
1. 進入 Tomcat Manager: ex  🢂 http://&lt;server IP&gt;:&lt;TomcatPort&gt;/manager/html
1. 找到 ___Active Sessions___，即可查看當前的客戶端連線數。

## JMX (JConsole)
> Tomcat 支援 JMX (Java Management Extensions)，可以透過 JConsole 或 jmxterm 來監控目前的 HTTP 連線數。

1. 啟動 Tomcat 時加入 JMX 選項

```shell
JAVA_OPTS="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=8080 -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false"
```

2. 使用 JConsole 連線至 Tomcat

```shell
jconsole localhost:8080
```

3. 在 MBeans 標籤下，查找 Catalina  🢂  GlobalRequestProcessor，其中 currentThreadCount 表示目前的 HTTP 連線數。


## JMX (jmxterm)
> jmxterm 同 JConsole 為 JMX Extensions

1. 啟動 Tomcat 時加入 JMX 選項

```shell
JAVA_OPTS="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=8080 -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false"
```

2. 安裝 jmxterm，然後連接 Tomcat

```shell
java -jar jmxterm-1.0.2-uber.jar -l localhost:8080
```

3. 查詢目前的 HTTP 連線數

```shell
get Catalina:type=ThreadPool,name="http-nio-8080" currentThreadCount
```


## Tomcat Access Log
> 利用 Tomcat Access Log 查詢歷史紀錄  
> 這邊只是記錄一下查詢方式，對系統更版沒多大幫助。  

```shell
tail -n 10000 catalina.out | grep 'GET\|POST' | wc -l
```