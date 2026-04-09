---
title: Tomcat 佈署多 Apps
description: Tomcat 同時佈署多個 Apps 所需設定
keywords: [Tomcat,SSL]
---

> 測試環境下常因為金費限制無法購買多組機器，且只能將多個 apps 放在同一實體 server 之上  
> 有時又因為測試環境下 port 的管制  
> 最終變成只能將相關的多個子系統放在同一個 tomcat 之內  
> 因為有多個子系統，也就有子系統相互溝通的議題出現  
> 再加上基本資安相關認證必須採用 https 時可能會需要下面經驗   

## 情境與環境限制
* 測試環境採用自訂的 https 認證  
* 扮演 client side / server side 的 apps 都被綁在同一 tomcat 之內  
* apps 間可以 IP 或 hostname 連接  


## 主要指令
* -genkey：舊版指令
* -genkeypair：新版標準指令
* 功能上兩者都是：產生一組 <span style={{color: '#0044FF'}}>__私鑰 + 自簽憑證__</span>

```
 -genkey vs -genkeypair
```

## keystore 建立
* keystore 是憑證儲存位置，常見有 JKS、PKCS12 等
* 相關參數: 
    * 指定格式:  -storetype TYPE
        * JKS、PKCS12
    * 指定加密演算法:  -keyalg ALG
        * RSA、EC
    * HTTPS 驗證 hostname: SAN

| 格式 | 說明 |
|-----|-----|
| JKS | Java 專用 |
| PKCS12 | 跨平台的新標準 |


```
keytool -genkeypair 
  -alias myALias 
  -keyalg RSA 
  -keystore keystore.p12 
  -storetype PKCS12
```

```
keytool -genkeypair 
    -alias myAlias
    -keyalg RSA 
    -keysize 2048 
    -validity 36500 
    -keystore /home/username/.my_keystore2
    -storepass mypass 
    -dname "CN=totem, OU=Unit, O=tw, L=tw, ST=tw, C=tw" 
    -ext SAN=DNS:my.host.name,IP:192.168.1.1
```


## Truststore 建立
* Truststore: 受 Client 端信任的 servers 的 CA 憑證倉庫
* 當扮演 Client Side App 要向 Server Side App 進行連線時，要先取得 Server Side 的 CA 憑證。
* 先拿到 server side 匯出的憑證 \(cert)，回到 client side 匯入並建立 Truststore

__server side 匯出 cert file from key store__
* 單一憑證匯出檔命名規則通常是: \*.crt, \*.cer
* 整個 keystore 匯出則附檔名為: \*.jks, \*.p12

```
    keytool -export -alias <ALIAS_OF_APP_CERT> -keystore <PATH_TO_KeyStore> -file <CERT_FILENAME>.crt -storepass <KEYSTORE_PASS>
```

__web app client side 匯入 cert 並一併建立 truststore__

* keytool -import 是 keytool -importcert 的別名。可以相互取代。
* import 是舊式用法，未來可能被移除
* keytool -importkeystore: 匯入整個 keystore 檔。 

```
   keytool -import -alias <ALIAS> -file <CERT_FROM_SERVER>.crt -keystore <PATH_TO_TrustStore>/truststore.jks -storepass <TRUSTSTORE_PASS>
```

__JVM 中指明位置__

```
    -Djavax.net.ssl.trustStore=keystore.jks
    -Djavax.net.ssl.keyStore=keystore.jks
```

__匯入整個金鑰庫__

```
keytool -importkeystore -srckeystore source.jks -destkeystore dest.p12 -deststoretype PKCS12
```


## Keystore vs Truststore
* 不建議共用，雖然技術上可行

| 類型 |  用途 |
|-----|-----|
| Keystore: server side  | 自己的憑證 + 私鑰 放置處 | 
| Truststore: client side |  信任的憑證 CA 放置處 | 

* 部分情境下會在測試環境簡化將兩著共用同一容器但可能發生
    * 邏輯混亂: 不易分辨私鑰與信任憑證
    * 安全性下降: private key 被共用並暴露
    * <span style={{color: '#0044FF'}}>__PKIX 驗證錯誤__</span>: trust chain 不完整

__Client 不信任 Server 憑證__
    
```
   PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```

## 副檔名慣例

| 類型 |  命名慣例 | 
|-----|-----|
| Keystore  | keystore.jks<br/>keystore.p12<br/>.keystore | 
| Truststore |  truststore.jks | 


## Https 設定
1. server side 建立 keystore
1. server side 匯出憑證
1. client side 匯入憑證
1. client side 設定 truststore 環境變數
1. app server.xml Connector 設定


### __server side 重建一個 keystore__
```
keytool -genkeypair 
    -alias myAlias
    -keyalg RSA 
    -keysize 2048 
    -validity 36500 
    -keystore /home/username/.my_keystore2
    -storepass mypass 
    -dname "CN=totem, OU=Unit, O=tw, L=tw, ST=tw, C=tw" 
    -ext SAN=DNS:my.host.name,IP:192.168.1.1
```

### __server side 匯出 crt file__

```
    keytool -export -alias <ALIAS_OF_APP_CERT> -keystore <PATH_TO_KeyStore> -file <CERT_FILENAME>.crt -storepass <KEYSTORE_PASS>
```

### __web app client side 匯入 server crt file__

```
   keytool -importcert -alias <ALIAS> -file <CERT_FROM_SERVER>.crt -keystore <PATH_TO_TrustStore>/truststore.jks -storepass <TRUSTSTORE_PASS>
```

### __client catalina.sh 新增變數__

```
    JAVA_OPTS="$JAVA_OPTS 
        -Djavax.net.ssl.trustStore=<PATH_TO_TrustStore>/truststore.jks 
        -Djavax.net.ssl.trustStorePassword=<TRUSTSTORE_PASS>"
```

### __server 修改 server.xml__

```xml
<Connector port="8441"
    protocol="org.apache.coyote.http11.Http11NioProtocol"
    maxThreads="150"
    scheme="https"
    secure="true"
    SSLEnabled="true"
    URIEncoding="UTF-8">

    <SSLHostConfig>
        <Certificate 
            certificateKeystoreFile="/home/server/.keystore"
            certificateKeystorePassword="pwd"
        type="RSA" />
    </SSLHostConfig>

<Connector/>
```