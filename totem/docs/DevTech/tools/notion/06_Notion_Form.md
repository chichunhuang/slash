---
title: Notion 表單
description: Notion 標單製作與規劃
keywords: [Notion,Form]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"


## Notion Forms 表單<span id="notion_Form"> </span>
* Form 表單設計功能 <span style={{color: '#FF1100'}}>僅限 PC 端</span> 可使用。  
* Notion Form 目前 *__無法更新既有送交資料__*，每次送交都是獨立事件。殘念......  
* 資料收集對象不限於 [Notion 的使用者](#notion_database_coedit_setting)。
    * <code>Form builder</code> 🢂 右側 <code>share form</code> 🢂 <code>who can fill out?</code> 🢂 可選取 <code>public</code>
    * 若 database 有 __Last edited by__ 欄位則，<br/>可自動指向 Notion co-editors (採用 Anyone at Notion DB) <br/>或自動填入 Anonymous\(採用 Anyone on the web link)   
* 官方參考文件位置: https://www.notion.com/help/forms


## Form 建立方式: 
* 由 database 建立 🢂<code> + </code>🢂 <code>view 選 form</code> 🢂 會出現 <code>Create Questions</code> 確認項。  
* <code>/form </code>指令: 建立 Form 並一併建立 database。  


  
## 關於 input fields: 
    * 隱藏資訊欄位: Last edited time, Last edited by(隱含欄位)
    * 欄位於 database 或 form builder 建立的都可在相對應 view 擴充\(須手動擴充)。  
    * is required: form builder 🢂 block 右側隱藏的 __ … __ 🢂 required 用來設定必填與否。
    * text 轉 area: form builder 🢂 block 右側隱藏的 __ … __ 🢂 long answer 可將輸入欄位改成 TextArea。\(註: Notion 限制文字類最長 2000 char)
    * 送交時提示訊息: form builder 🢂 block 右側隱藏的 __ … __ 🢂 Customize form 🢂 Customiz，可調整表單送交時的訊息與 button 呈現。

* 開放表單: 
    * form builder 🢂 右側的 Share form 🢂 who can fill out? 🢂 
    * 不收集填表人資訊: __Anyone at Notion DB__ 選項預設收集填表人帳號資訊，可藉由 Share form 🢂 Anonymous responses 關閉。  

* 匯出已收集資料: 
    * Notion Form 與 database 相依故直接使用 database 匯出功能即可。    
    * Page 🢂 做外層右上的 __ … __ 🢂 Export 

## Advanced Notion Forms  
* https://www.notion.com/help/guides/use-forms-to-collect-organize-and-act-on-responses-in-notion?_gl=1*qs5hi7*_gcl_au*MTY5Njc4Mzk3NS4xNzMxNTY1MTIx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczNTg4OTk5MC45LjAuMTczNTg5MDAwNC40Ni4wLjA.

> Form 與 Database 結合後的應用技巧:  
> 以 form 來收集資料，  
> 利用 database 的各種 view 來分析已收集資料。  
> 如: 
>> 蒐集日期時，可轉成 calendar view，來呈現完成日期/啟動日期等資訊
>> 蒐集時間區段時，可轉成 timeline view，來看專案時程等。 
>> Chart 來看完成率等。

* 搭配 email 欄位進行工作通知: \(似乎教育 plus 以上授權才可執行所有功能)
    * form builder 右側 __閃電__ 符號  
    * when: 建立指定事項發生時的 trigger 
    * do: 指定 Slack 或電子郵件更新

* 整合多張表單至單一 database: <span id="notion_MultiForm_2_SingleDatabase"> </span>
    * Notion Form 目前 *__無法更新既有送交資料__*，每次送交都是獨立事件。  
    * 此處指的是，一個 Database 可以設計出多個表單，資料可收集至相同 database，但同參與者送交資料無法自動合併。
    * 建立多張 forms: database 左側<code> + </code>🢂 form 🢂 自行決定要採用的欄位\(properties)。

* Notion form 與 Google form 整合 \(要外掛)
    * https://www.youtube.com/watch?v=XEwOtlsF_oY
    * https://www.youtube.com/watch?v=oAxg4MZ4Jv8
    
* Notion database 與 Google Sheets 同步 \(要外掛)
    * https://workspace.google.com/marketplace/app/sync2sheets_notion_in_sync_with_google_s/887187948180
    * https://nuit0815.medium.com/notion-%E4%BD%BF%E7%94%A8%E8%A8%A3%E7%AB%85-%E9%80%A3%E7%B5%90-google-%E8%A1%A8%E5%96%AE%E8%88%87-notion-database-27a44a6c0ee1