---
title: Session Fixation
description: Session Fixation
keywords: [Session Fixation,ISMS]
---

> Session Fixation 有人翻譯成 '固定 Session'，  
> 指的是 Session Fixation Attack，指的是一種網路攻擊方式。  

> 這邊探討的問題，通常會是在想取得資案認證時，會被提醒或要求的項目之一。  
> 通常，顧問/驗證公司只會依據掃描的結果要求補上。  
> 實際上該如何處理通常還是會丟回給開發或供應商。  
> 因為程式語言與架構不同大家的實作方式都會不同，  
> 這邊只能將收集到的資訊做整理  


* Session ID 通常是 Server 端用來辨識會話過程中當下使用者的 token，可能會存於 Browser 的 Cookies 之中。  
* 其他與 Session Attack 相關的攻擊方式
    * Session Prediction: 程式語言中沒有絕對完美的隨機碼或唯一碼。背後都有一個演算法來演算出唯一碼。這邊就是用某個方式來猜當下可用的 Session ID，然後偽裝成某個使用者。  
    * Session Hijacking: 這邊指的是去偷 Session ID。
    * Session Fixation: 誘導受害者使用預先準備好的 Session ID。  

## Session Fixation
* 攻擊邏輯:  
    1. 攻擊者先取得一個合法的 Session ID 
    1. 誘騙受害者使用該 Session ID
    1. 攻擊者取得受害者身分

## Session 相關攻擊

|               | 攻擊方式 |   避免方式   |
|----------|----|-------------|
| Session Prediction | 以工具分析 Session ID 規則 | 兩難，<br/>自行實作 Session ID 怕複雜度不足。<br/>採用常用工具又怕零時差攻擊。<b/>一般還是建議採用工具，畢竟有專人維護。 |
| Session Hijacking | XSS, Referer, 網路竊聽, ARP Spoofing\(網址解析誘騙) | Cookies 設定 HttpOnly 與 Https Secure，重要功能限制須重新驗證身分  | 
| Session Fixation | 攻擊者先取得 Session ID，<br/>再誘騙受害者使用該 ID \(社交工程連結誘使登入已取得 Session ID 網站) | 登入後系統立即更換 Session ID,<br/>Session ID 不顯示於 URL，限制 GET 傳遞 Session ID | 


* ARP Spoofing: 同常是將大量偽造真實封包的假封包傳到網路閘道器上，讓部分伺服器登錄成偽造發訊者，最終導致 App Server 將 response 回傳給偽造者。偽造者取得所需資訊後，再將 response 回傳給真實發訊者。讓 client 端無從發現異常。


## 避免 Session 攻擊
* 參考 [Tomcat Cookie 安全性設定](../Tomcat/Tomcat_Httponly)

* Cookie 設定 Https Secure 應設為 true
* Cookie 設定 HTTP Only 應設為 true
* Cookie 設定 SameSite strict
* 成功登入後立即變更 Session ID
* 留意 Session ID 建立演算法漏洞
* Session ID 時效縮短，主動清除，無回應使用者系統應自動登出。



