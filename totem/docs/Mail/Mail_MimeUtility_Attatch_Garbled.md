---
title: 信件附件中文檔名亂碼
description: MimeUtility Attatch Garbled
keywords: [Mail,Garbled] 
---

## Java Mail 附件中文亂碼
* 部分情形下 Java Mail 信件中內文中的繁體中文顯示正常，但的附件檔名卻出現亂碼。此時可用 MimeUtility 提供的工具解決。
* 參考資料 [MimeUtility](http://docs.oracle.com/javaee/6/api/javax/mail/internet/MimeUtility.html#encodeText%28java.lang.String%29)

```
     MimeUtility.encodeText(attachementName);
```

## javax.mail.internet.MimeUtility
* 可利用 <code>javax.mail.internet.MimeUtility </code> 提供的 <code> encodeText </code> 方法來解決中文亂碼問題

__範例__
```java
import javax.mail.internet.MimeUtility;
 
class Example {
 
    public static void main(String[] args){
        String attachementName = "中文檔名";
        byte[] attachement = .......;
 
        ............
 
        mail.addAttachement(MimeUtility.encodeText(attachementName), attachement);
        mail.setSubject("subject");
        mail.setText("content");
        mailAgent.send(mail);
    }
 
}

```