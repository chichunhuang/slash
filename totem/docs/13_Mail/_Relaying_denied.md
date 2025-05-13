---
title: Email Relaying denied
description: 寄信時出現SMTPAddressFailedException,Relaying denied
keywords: [Relay denied, email]
---

最近有些客戶回報發現安裝在自家的 Web App 發出

```Javascript
javax.mail.SendFailedException: Invalid Addresses;
  nested exception is:
        class com.sun.mail.smtp.SMTPAddressFailedException: 550 5.7.1 <user1@dummy.com>... Relaying denied. IP name lookup failed [***.***.***.***]
```

## Mail Relay (信件傳送中繼)
* 先說明 Mail Relay Service 種類與意思:
  * A Mail server 會將信件先傳送給 B Mail server，再由 B 轉發給收件者資料夾。
  * 多段式(多中繼 mail servers)的 eMail 轉接傳送方式。
  * 單作為其他 mail server 的中繼服務站角色。

## 【Email Relaying denied, Unable to relay】 中繼被拒絕
* 顧名思義中繼過程中的 Mail Server 拒絕幫忙傳送。
* 發生原因:
  * 身分驗證過程發出異常(是否需要先登入 Relaying mail server/SMTP server 才允許寄信，如 gmail)
  * Relaying mail server 因為資安議題不允許 relay 到其他  Domain。
  * 收件者的 email 不在中繼者的白名單中，或是被列為黑名單。
  * 無效的收件者 email address
  * 寄群組信件時

## Open Mail Relay
* 以前大部分的 mail server 都採開放方式中繼以加速 Mail 傳送效率，但後來卻被廣告商或駭客作為轉發信件的免費跳板。所以後來的 mail server 開始有不同的政策，列出黑白名單等或直接拒絕中繼以降低資安風險。

* Reference
 * [SMTPAddressFailedException](https://stackoverflow.com/questions/47154643/smtp-mail-sending-issue-com-sun-mail-smtp-smtpaddressfailedexception-550-5-7)
 * DoS/DDoS