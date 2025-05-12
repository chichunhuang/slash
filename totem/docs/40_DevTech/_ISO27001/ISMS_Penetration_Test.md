---
title: 2025 PT 起始會議
description: 2025 Penetration Test 起始會議
keywords: [ISMS,27001,PT]
---

# S 2025 滲透測試起始會議

    滲透測試定義: 
    Penetration Test, 以駭客思維與手法，於約定期間內進行的入侵演練測試。使用不同手法儘可能確認測試標的的安全性。

## Stakeholders
* S資訊處
* S資服處
* 安基資訊 ACSI, Acer Cyber Security Inc.
* S各所


## S 資安執行現況
* 以下列指標進行評估: EOS / GCB / EDR / VANS / 網路分區 / 社交工程 / 防護基準 / HTTPS 
    * 果然大頭跟肥貓們都沒資安意識


<hr/>
下面是筆記整理，不是會議記錄。<br/>
查了 PT 相關資訊...
<hr/>


## Vocabulary

|               |                          |
|----------|-----------------|
| EOS | 服務終止 End of Service |
| GCB | 政府組態基準 Government Configuration Baseline |
| EDR | 端點防護 Endpoint Detection and Response |
| VANS | 資通安全弱點通報平台 Vulnerability Analysis and Notice System |
| 網路分區 | yyyyyyyyyyyy |
| 社交工程 | yyyyyyyyyyyy |
| 防護基準 | yyyyyyyyyyyy |
| HTTPS | 超本文傳輸安全協定 Hypertext Transfer Protocol Secure |

## 滲透測試定義
* <code>滲透測試定義</code>: Penetration Test, 以駭客思維與手法，於約定期間內進行的入侵演練測試。使用不同手法儘可能確認測試標的的安全性。

## 滲透測試檢測依據
* 依據 <code>OSSTMM</code>:Open-Source Security Testing Methodology Manual 建立測試架構
* 以 OWASP 弱點分類做為測試標準

## 常見滲透測試方法
* OSSTMM, Open-Source Security Testing Methodology Manual, 開源安全測試方法手冊
    * 網路滲透測試和漏洞評估的框架
* OWASP, Open Web Application Security Project
    * OWASP Web 測試框架
    * Web application 測試方法論
    * 報告建立
* PTES, Penetration Testing Execution Standard
    * 綜合滲透測試方法
    * 提供測試技術指南，測試流程的實踐方式
* NIST, National Institute of Standards and Technology
    * 網路安全框架，是美國聯邦政府和外部組織滲透測試最低要求標準
* ISSAF, Information System Security Assessment Framework
    * ISSAF 滲透測試框架 __已終止維護__

    
## 常見滲透測試階段

### 準備階段
* 設定 Scope，受測方宜提供完整掃描標的
* 注意事項
    * 提供 <code> IP </code> 與 <code> IP 相關的網站與服務</code> 
    * 網站檢測，必須提供可連線的完整網址
    * 提供測試用帳號，高權限與一般權限使用者。測試帳號應該與正式機權限一致
    * 工具登入後掃描有可能刪除或異動到資料，須落實備份並考量是否以其他備援設備方式替代。

### 進行測試 與產出報告
* 網路和漏洞掃描 / 黑箱測試 / 白箱測試 / 灰箱測試
* 主要是以工具先進行全面掃描。而後分析掃描結果並驗證是否無誤判所導致
* 另以人工手動進行邏輯相關的滲透測試
    * 人工檢測主要針對互動性較高的相關功能，因故需要測試帳號
    * 此類測試有可能會注入少量資料或上傳木馬等破壞性檢測，執行單位與受測單位須事先溝通是否能承受與事後處理方式以避免相關爭議或破壞資料完整性
* 檢測注意事項
    * 檢測對象若為老舊機器可能影響系統效能
* 檢測建議事項
    * 建議以測試環境進行檢測
    * 非尖峰時間執行檢測
    * 排除工具掃描，僅進行人工滲透測試
    
### 報告產出
* 報告應包含下列內容
    * 弱點風險等級
    * 弱點位置
    * 弱點說明
    * 弱點修復建議

### 顧問階段
* 基本上安基僅提供測試結果以及入侵方式的諮詢，不提供修補建議

### 複測階段
* 這邊僅會針對先前發生的弱點在次以相同方式檢測，看是否仍存在。檢測範圍不會擴大