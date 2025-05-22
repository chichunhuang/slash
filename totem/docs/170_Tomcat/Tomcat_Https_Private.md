---
title: Tomcat https 設定
description: Tomcat Https Setting
keywords: [Tomcat,Https]
---

這邊範例是以 JDK 的 keytool 來產生 KeyStore  
視需要向第三方申請

## JDK 生成 keystore
* Linux 下 key 存放位置
    * /home/\[USER_NAME\]/.keystore
* Windows 下 key 存放位置
    * C:\\Users\\\[UserName\]
* 若須重新建立時，刪除舊 key 重建即可
* 註: 
    * 下面範例中以 tomcatssl 作為 key 的別名
    * validity 36500 指 keysore 有效期限 100 年t

```bash

    $ keytool -genkey -alias tomcatssl -keyalg RSA -validity 36500
    輸入 keystore 密碼：  
    您的名字與姓氏為何？
      [Unknown]：  insecttotem
    您的編制單位名稱為何？
      [Unknown]：  insecttotem
    您的組織名稱為何？
      [Unknown]：  insecttotem
    您所在的城市或地區名稱為何？
      [Unknown]：  tw   
    您所在的州及省份名稱為何？
      [Unknown]：  tw
    該單位的二字國碼為何
      [Unknown]：  tw
    CN=insecttotem, OU=insecttotem, O=insecttotem, L=tw, ST=tw, C=tw 正確嗎？
      [否]：  Y
    
    輸入 <tomcatssl> 的主密碼
        （RETURN 如果和 keystore 密碼相同）：  

```

## Tomcat Https connector 設定
* 設定 443 或 8443 port 的 connector，依實際需要調整   
* keystore 密碼必須和 keystorePass相同  


__Linux 下__
* ~/tomcat/conf/server.xml

```xml
    <Connector port="8443" 
        protocol="HTTP/1.1" 
        SSLEnabled="true"
        maxThreads="150" 
        scheme="https" 
        secure="true" 
        keystorePass="tomcatsslpw" 
        keystoreFile="/home/username/.keystore"
        clientAuth="false" sslProtocol="TLS" />

```

__Windows 下__

```xml
    <Connector port="8443" 
        protocol="org.apache.coyote.http11.Http11NioProtocol" 
        SSLEnabled="true"
        maxThreads="150" 
        scheme="https" 
        secure="true" 
        keystorePass="tomcatsslpw" 
        keystoreFile="e:\.keystore"
        clientAuth="false" sslProtocol="TLS" />
     
     
    <!-- Tomcat8.5, 9 的寫法 -->
    <Connector port="8443" 
        protocol="org.apache.coyote.http11.Http11NioProtocol" 
        maxThreads="150" 
        SSLEnabled="true">
        
        <SSLHostConfig>
            <Certificate certificateKeystoreFile="/home/server/.keystore" certificateKeystorePassword="tomcatssl" type="RSA" />
        </SSLHostConfig>
    </Connector>

```

## 部屬測試
* 在 tomcat 中佈署應用程式後，以 8443 連線即可

```
    https://localhost:8443/myproject
```


## Tomcat security constraint 設定

    在 tomcat/conf/web.xml 加上安全限定 (security constraint)，  
    如果要求試圖透過 HTTP(不安全連線) 存取 transport guarantee 為 CONFIDENTIAL 的 URL，  
    將被自動重新導向使用 HTTPS 的相同 URL。
    
    註: 這可以設定在 Tomcat 全域下，或個別專案自行設定 

```xml
    <security-constraint>
          <web-resource-collection>
                 <web-resource-name>Entire Web App</web-resource-name>
                 <url-pattern>/*</url-pattern>
         </web-resource-collection>
         <user-data-constraint>
                 <transport-guarantee>CONFIDENTIAL</transport-guarantee>
         </user-data-constraint>
    </security-constraint>
```


## 摘要 keystore 相關指令

__產生金錀對(RSA為非對稱加密的演算法)__

```bash
    # generate keystore
    keytool -genkey -alias xxxx -keyalg RSA -validity 36500
```

__匯出__

```bash
    # export cert
    keytool -export -alias xxxx -file ody_tomcatssl.crt
```

__刪除__

```bash
    # delete  cert
    keytool -delete -alias xxxx -keystore .keystore
```

__匯入__

```bash
    # import new insecttotem cert
    keytool -import -alias insecttotem -file insecttotem_from.crt
```

__查詢__

```bash
    keytool -list -v -keystore .keystore
```

__產生憑證申請檔__

```bash
    keytool -certreq -alias xxx -file certreq.txt -keystore .keystore
```

__查詢 PKCS12 類型 keystore 的內容__

```bash
    keytool -list -v -keystore .keystore -storetype pkcs12
```

__建立一個含有私鑰的 keystore__

```bash
    keytool -genkey -alias keyAlias -keyalg RSA -keystore keystore.jks
```

__修改 keystore 的密碼__

```bash
    keytool -storepasswd -new newPassword -keystore keystore.jks
```