---
title: Notion 表單
description: Notion 標單製作與規劃
keywords: [Notion,Form]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"


## Notion Forms 表單<span id="notion_Form"> </span>
> Form 表單設計功能 <span style={{color: '#FF1100'}}>僅限 PC 端</span> 可使用。  
> Notion Form 目前 *__無法更新既有送交資料__*，每次送交都是獨立事件，似乎無法修改已送交內容，殘念......  


## Form 建立方式: 
* 由 database 建立 🢂<code> + </code>🢂 <code>New view 選 form</code> 🢂 會出現 <code>Create Questions</code> 確認項。  
* <code>/form </code>指令: 建立 Form 並一併建立 database。  
* 預設情形下 Notion Form 會主動建立必要欄位且無法將之刪除 \(僅能 UI 隱藏)。

__由 Database 轉換__
* 需手動建立或勾選顯示建立時間或最後編輯時間預設欄位
<div>
 {GoogleImage( '1LT--_mkSc9yr_hwI7OqoSK6zZOI0E5Uc',  '06_Notion_Form_01.png' , {width:'344px', height:'424px', hidden:true, degree:0})}
</div>

__由 form 指令建立__
* 預設自動建立建立時間或最後編輯時間預設欄位
<div>
 {GoogleImage( '1qt5JIeO2MFRgtQHrDnsUQWqJrixSCZCp',  '06_Notion_Form_02.png' , {width:'322px', height:'305px', hidden:true, degree:0})}
</div>
<div>
 {GoogleImage( '1-phA--CaSx28jxQK0fC8_6vuRxM7tv-2',  '06_Notion_Form_03.png' , {width:'652px', height:'222px', hidden:true, degree:0})}
</div>

  
## 關於 Input Fields: 
* Databaase 端
    * 隱藏資訊欄位: Last edited time, Last edited by 等預設收集資訊可自行決定是否在 view 顯示。 
    * 欄位於 database 或 form builder 建立的都可在相對應 view 新增擴充 (須手動擴充)。  
* Form 端:
    * Form 下方的 <code> + </code>，可用來增加題目並對應到 Database 欄位。 
    * 必填設定 Required: form builder 🢂 題目 block 右側隱藏的 <code>&nbsp;__ … __</code> 🢂 <code>&nbsp;Required&nbsp;</code> 用來設定必填與否。
    * 附加說明: Description 🢂 題目 block 右側隱藏的 <code>&nbsp;__ … __</code> 🢂 <code>&nbsp;description&nbsp;</code> 用來開啟題目附加說明區塊。
    * Text 轉 Area: form builder 🢂 題目 block 右側隱藏的 <code>&nbsp;__ … __</code> 🢂 <code>&nbsp;long answer&nbsp;</code> 可將輸入欄位改成 TextArea。\(註: Notion 限制文字類最長 2000 char)
    * 送交時提示訊息\(edu plus): form builder 🢂 右側 <code>&nbsp;__ … __</code> 🢂 <code>&nbsp;Customize form&nbsp;</code> 🢂 <code>&nbsp;Customize</code>，可調整表單送交時的訊息與 button 呈現。
    * 依 database property 欄位種類不同，form 填寫時也會自動轉換 input 類型。例如 check box / radio choice/ Auto-complete 等。

__引出特殊欄位__
* Notion Form 預設收集操作 log 資訊
<div>
 {GoogleImage( '1EPUotXQioo239Tl0c9WtlSRbGUm0hnp7',  '06_Notion_Form_04.png' , {width:'652px', height:'223px', hidden:true, degree:0})}
</div>

__Form 製作__
* 增加填寫欄位
<div>
 {GoogleImage( '1NUviBMqetjZDxfuxn0y0vIg21TR7v6QK',  '06_Notion_Form_05.png' , {width:'588px', height:'341px', hidden:true, degree:0})}
</div>
<div>
 {GoogleImage( '1MIMovkH7YjVrx5r60hKMg0lfjrPTqmZh',  '06_Notion_Form_06.png' , {width:'652px', height:'310px', hidden:true, degree:0})}
</div>
* 必填與附加明
<div>
 {GoogleImage( '1G_V0IZYHKsrm6G3wMhDx9KgLcGMozJLB',  '06_Notion_Form_07.png' , {width:'652px', height:'232px', hidden:true, degree:0})}
</div>

__送交確認訊息__
<div>
 {GoogleImage( '1USM5Vp6v3KzHWRY25h8ZEQmGlRTD0J49',  '06_Notion_Form_08.png' , {width:'652px', height:'228px', hidden:true, degree:0})}
</div>

## 開放表單: 
> 資料收集對象不限於 [Notion 的使用者](./NotionBasic#notion_database_coedit_setting)。  
> 可選擇自動紀錄/不紀錄填寫人資料    
> 官方參考文件位置: https://www.notion.com/help/forms

* <code>Form builder</code> 🢂 右側 <code>share form</code> 🢂 <code>who can fill out?</code> 🢂 可選取 <code>public</code> 發布 🢂 <code>Anyone / 成員</code> 指定發布對象等
* 若 database 有 __Last edited by__ 欄位則，<br/>可自動指向 Notion co-editors (採用 Anyone at Notion DB) <br/>或自動填入 Anonymous\(採用 Anyone on the web link)   
* 不收集填表人資訊: __<code>Anyone at Notion DB (成員)</code>__ 選項預設會收集填表人帳號資訊，可藉由 Share form 🢂 <code>Anonymous responses</code> 關閉(一律隱藏填表人資訊)。  


## 匯出已收集資料: 
* Notion Form 與 database 相依故直接使用 database 匯出功能即可。    
* <code>Page</code> 🢂 最外層右上的 <code>&nbsp; … </code> 🢂 <code>Export</code> 🢂 選取匯出格式

## 使用技巧  
* [Notion Forms 進階使用參考](https://www.notion.com/help/guides/use-forms-to-collect-organize-and-act-on-responses-in-notion)

> Form 與 Database 結合後的應用技巧:  
> 以 form 來收集資料，  
> 利用 database 的各種 view 來分析已收集資料。  

* 蒐集日期時，可轉成 calendar view，來呈現完成日期/啟動日期等資訊
* 蒐集時間區段時，可轉成 timeline view，來看專案時程等。 
* Chart 來看完成率等。

## 以 email 進行工作通知: 
* <code>edu plus</code> 以上授權才可執行所有功能
* form builder 右側 __閃電__ 符號  
* when: 建立指定事項發生時的 trigger 
* do: 指定 Slack 或電子郵件更新

## 整合多張表單至單一 database: <span id="notion_MultiForm_2_SingleDatabase"> </span>
* Notion Form 目前 *__無法更新既有送交資料__*，每次送交都是獨立事件。  
* 此處指的是，一個 Database 可以設計出多個表單，資料可收集至相同 database，但 __同參與者送交資料無法自動合併__ 。
* 建立多張 forms: database 左側<code> + </code>🢂 form 🢂 自行決定要採用的欄位\(properties)。

## Notion form 與 Google form 整合 
* __要外掛__
* [參閱](https://www.youtube.com/watch?v=XEwOtlsF_oY)
* [參閱](https://www.youtube.com/watch?v=oAxg4MZ4Jv8)
    
## Notion database 與 Google Sheets 同步
* __要外掛__
* [參閱](https://workspace.google.com/marketplace/app/sync2sheets_notion_in_sync_with_google_s/887187948180)
* [參閱](https://nuit0815.medium.com/notion-%E4%BD%BF%E7%94%A8%E8%A8%A3%E7%AB%85-%E9%80%A3%E7%B5%90-google-%E8%A1%A8%E5%96%AE%E8%88%87-notion-database-27a44a6c0ee1)

## 小資使用 hints
> 單純資料收集與提供資料清單頁面 hints

1. <code>/database</code> 建立 database
1. <code> + </code>🢂 <code>view 選 form</code> 🢂 會出現 <code>Create Questions</code> 確認項。
1. form builder: 增加所需收集項目
1. database: Last edited time / Last edited by / Created time / Created by / status / Persion 等欄位建立或 set visible
1. 為 Database 建立 Linked 副本 \(Copy link ti view)，供 members 檢視資料使用。 (依實際情境增加 Filters 或是 Views)
1. 為 Database 建立 Linked 副本，供 admin members 管理資料使用。 (依實際情境增加 Filters / Timeline / 或與 Calendar 整合)
1. *form builder share form: 允許 members 編輯*
1. 為 form 建立短網址
1. *發布 Database mention page，供 anonymous member 檢視用。*
1. 依需要 export database