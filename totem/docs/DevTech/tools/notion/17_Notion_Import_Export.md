---
title: Notion 資料匯入匯出
description: Notion 資料匯入匯出
keywords: [Notion,Import,Export]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage";

> 這主題說介紹 Notion 資料匯入的兩種概念，  
> 一個是 Import 另一個是 embed。   
> Imoprt: 將資料建立副本或是截圖，所以內容是 detached。通常是將電子文件讀入 Notion 軟體中。  
> Embed: 將資料或第三方軟體畫面嵌入 Notion，與來源資料同步。可想成是
> 
> 除了單純檔案匯入外，Notion 也與多種 Web 介面軟體整合。  
> 個人比較常用的是 GWS 相關所以僅記錄與 Google 相關第三方軟體整合。  
> 
> 所以實際使用上可先決定要如何呈現、資料來源以及使用目的，再選用資料匯入的放式。

* [Notion 資料匯入官方參考](https://www.notion.com/help/embed-and-connect-other-apps) 

## Notion 資料匯入種類 <span id="notion_Doc_Imported">&nbsp;</span>

__匯入種類摘要__

|    種類   |     說明     | 
|----------|-----------------| 
| [Import\(匯入)](#notion_Doc_Importing)<br/>File-Based| Notion 支援從多種來源匯入<code> 常見格式 </code>資料，包括 Markdown / HTML / CSV / Word / Excvel / CSV / PDF / Google Doc 檔案，以及 Evernote、Trello、Asana 等其他工具的內容 | 
| [Embed<br/>3rd-party](#notion_Doc_embedded)| 不支援 iframe 標籤，但允許 <code> Embed </code> 以區塊嵌入第三方軟體內容，例如 YouTube、Figma、Google Maps、Jira、Github 等等 |   
| Zip File| 批次將 File-Based 檔案壓縮後上傳 | 
| 3rd-party軟體同步<br/>Google Drive 同步| 透過 <code> Embed </code>，將 Google Docs、Sheets、Slides 等檔案嵌入 Notion 頁面中。並提供 <code>即時預覽 </code> | 



### 常見檔案匯入\(Imports) <span id="notion_Doc_Importing">&nbsp;</span>
- 單一檔案: 左側<code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Import &nbsp;</code> 🢂 <code>&nbsp; 種類選取 &nbsp;</code> 
- 批次匯入\(zip): 左側<code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Import &nbsp;</code> 🢂 最下方 <code>&nbsp; Convert Zip to Pages &nbsp;</code> 🢂 <code>&nbsp; 拖拉 zip 檔並上傳 &nbsp;</code>
- 註: 單一檔限制 25M 以內。
* 常見類型文件: 
    * word 
    * excel 
    * html
    * markdown: <span style={{color: '#0044FF'}}> __僅限不含 databasse 的 Notion Page__ </span> 可以 md format 匯出 
    * csv: 單頁的 Notion Database 可以以 CSV 匯出。
    * PDF: 匯入文字說明與圖片。轉換成為已上傳檔為名的 Notion Page。

<div>
 {GoogleImage( '106FWb9qjRIszMMsbBmyd0w6okEuKWeck',  '17_Notion_ImportExport_01.png' , {width:'652px', height:'550px', hidden:true, degree:0})}
</div>



### 檔案嵌入\(Embeds) <span id="notion_Doc_embedded">&nbsp;</span>
* Notion 嵌入\(Embeds) 指的類似以 Iframe 嵌入，為即時資訊且受來源方相關限制。若授權被取消則出現 'Failed to Load'
* 與[檔案匯入](#notion_Doc_Importing)另存資料副本不同。
* 接受多種格式: HTML files / PDF files / Audio / Video / Images / [相關可接受的來源方清單](https://www.notion.com/help/embed-and-connect-other-apps)
* 建立方式
    * 線上電子檔 : 直接貼上 <code>&nbsp; URL &nbsp;</code> 🢂 <code>&nbsp; 選取 Embed &nbsp;</code>
    * 咒語\(Prompt) : <code>&nbsp; /embed &nbsp;</code> 🢂 <code>&nbsp; 貼入指定來源 &nbsp;</code> 🢂 填入<code>&nbsp; Embed Link &nbsp;</code> \(若選擇 Upload 則變成匯入)
* 其他操作
    * <code>&nbsp; 拖拉 &nbsp;</code>下方直角符號可調整可視範圍 
    * 嵌入區塊右上 <code>&nbsp; … &nbsp;</code> 可 __View Ooriginal__ 或 __Replace Embedded Content__

__線上電子檔同步__
<div>
 {GoogleImage( '1IjFtmzBZpSoDwt-XMpj2ZVnZ2TfdYDTO',  '17_Notion_ImportExport_02.png' , {width:'627px', height:'211px', hidden:true, degree:0})}
</div>


__Notion Prompt__
<div>
 {GoogleImage( '1Wbe7rD0pLtwR5NxPnkr-cieHAwoiG3fw',  '17_Notion_ImportExport_03.png' , {width:'478px', height:'418px', hidden:true, degree:0})}
</div>

<div>
 {GoogleImage( '1igsXmkUuC1QJ9Z7n3mMSBSVofUnV0iol',  '17_Notion_ImportExport_04.png' , {width:'378px', height:'204px', hidden:true, degree:0})}
</div>

__調整可視範圍__
<div>
 {GoogleImage( '1IVCs0EZBmGsW1pBsN5476mgts3QztPXE',  '17_Notion_ImportExport_05.png' , {width:'562px', height:'394px', hidden:true, degree:0})}
</div>

__更換/下載檔案__
<div>
 {GoogleImage( '1nCPctFWQrxB-skAFDY3_MwD7d66ostyL',  '17_Notion_ImportExport_06.png' , {width:'652px', height:'327px', hidden:true, degree:0})}
</div>


### Google Drive 相關匯入/同步功能
> 目前試用下，  
> 功能會隨檔案種類以及呈現方式而在介面上有些許差異，  
> 不知是否因為免費版，  
> 所以部分功能發生無法 import 僅能同步預覽。   
> 部分指令功能受限制: 出現 系統已封鎖這個應用程式，不然就回應 403。    
> 另外，左側欄的 Settings 下 menu 中也出現兩個 Connections 。

* 帳號連結: <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Import &nbsp;</code> 🢂 <code>&nbsp; Google Docs &nbsp;</code> 🢂 <code>&nbsp; Connect Google Account &nbsp;</code> 🢂 <code>&nbsp; 選擇帳號 </code>

__Google Account 連結設定__
<div>
 {GoogleImage( '1IxUg11BmvURUcCd-Yl0ogy8WY2oyA0QJ',  '17_Notion_ImportExport_08-1.png' , {width:'652px', height:'249px', hidden:true, degree:0})}
</div>
* 插入 Google Drive 方式 (會要求連結 google 帳號)
    * 複製 Google doc link，直接貼在 Notion 🢂 可再細選[呈現種類](#GDrive_Display)
    * Block 填入 <code>&nbsp; /Google Drive &nbsp;</code> 指令，會開啟已連結帳號檔清單。
    
__Googel 線上文件網址__
<div>
 {GoogleImage( '1BRusRhHZWdkmeIgsZd9FOdZDJcNya5rk',  '17_Notion_ImportExport_09.png' , {width:'652px', height:'236px', hidden:true, degree:0})}
</div>

__Googel Drive 咒語__
<div>
 {GoogleImage( '1eZ1f7fyRRfAkAx73CAYo_jBd6t2SFFYB',  '17_Notion_ImportExport_10.png' , {width:'473px', height:'171px', hidden:true, degree:0})}
</div>
<div>
 {GoogleImage( '1aKm7V17HOt-y1QdmW9PR3LoWGCQMUXFo',  '17_Notion_ImportExport_11.png' , {width:'652px', height:'285px', hidden:true, degree:0})}
</div>

<br/>

* 插入 Google 文件呈現種類 <span id="GDrive_Display">&nbsp;</span>
    * URL: 單純的 URL link 指向 google doc.
    * Preview: 文件__首頁縮圖__，點縮圖下方可進入 google 文件.
    * Mention: 與 URL link 類似，但 mouse over 時，會出現原文件的縮圖。與 Notion 的 Mentioned Page 不同.
    * Block 右側的 __ … __ 有提供呈現方式轉換。
    * Embedded: 將只份文件嵌入，但不可編輯，僅可瀏覽以及切換在文件頁面，同樣點預覽下方可進入轉導到原始檔案.

__其他 3rd-Party 軟體__
* 其他軟體資料匯入或是同步:\(未全試過)
    * confluence / Jira / Dropbox / evernote ....
    
## Notion 資料匯出
> 資料匯出會因為 Browser/ Mobile App / Desktop / 匯出格式不同而略有差異  
> 這邊主要紀錄的是 Browser 下的使用方式  
> 在共編與團隊合作下，商業版 owner 可以關閉資料匯出功能。  

__匯出方式__ 
* 頁面右上 <code>&nbsp; … &nbsp;</code> 🢂 <code>&nbsp; Export &nbsp;</code> 可叫出匯出功能，並自訂匯出格式。
    * 可選擇格式、內容、紙張大小。
    * 以及 __是否打包並匯出子頁面__
    
__特殊內容匯__    
* HTML 格式可額外匯出 comments 與 mentions 
* Notion Database 僅能以 CSV format 格式匯出 

## Notion 資料備份

### Database 資料備份
* 直接由 Database Page 右上 <code>&nbsp; … &nbsp;</code> 🢂 <code>&nbsp; Export &nbsp;</code> 將資料匯出成 <code>&nbsp; CSV File &nbsp;</code>
<div>
 {GoogleImage( '1_EggZSs6zrR2jQ7EeZLw9IAjVtxofb6W',  '17_Notion_ImportExport_13.png' , {width:'431px', height:'546px', hidden:true, degree:0})}
</div>

### Workspace 備份 <span id="notion_export_workspace">&nbsp;</span>

* <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Workspace &nbsp;</code> 🢂 <code>&nbsp; General &nbsp;</code> 🢂 <code>&nbsp; Export content &nbsp;</code> 🢂 <code>&nbsp; Export all workspace content &nbsp;</code>
    * Notion 會保留下載檔 7 天，並將 download link 寄到指定信箱。  
    
<div>
 {GoogleImage( '1eWvf3Ix-s40BRM1Tnzqnj-uOck7K9qgO',  '17_Notion_ImportExport_12.png' , {width:'652px', height:'548px', hidden:true, degree:0})}
</div>

### 關閉備份功能
> 付費版功能

__Workspace __
* <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Security and Data &nbsp;</code> 🢂 <code>&nbsp; General &nbsp;</code> 🢂 <code>&nbsp; Disable Export &nbsp;</code>

<div>
 {GoogleImage( '1dCasKWPSijwWCwXWzluY6PAu1LZvkN0r',  '17_Notion_ImportExport_14.png' , {width:'652px', height:'295px', hidden:true, degree:0})}
</div>

__Teamspace__
* Teamspace 名稱旁 <code>&nbsp; …  &nbsp;</code> 🢂 <code>&nbsp; Teamspace Settings &nbsp;</code> 🢂 <code>&nbsp; Security &nbsp;</code> 🢂 <code>&nbsp; Disable Export &nbsp;</code>

<div>
 {GoogleImage( '172Vpjh53I_kB5PTKSQKs2LK3UwQJZlHh',  '17_Notion_ImportExport_15.png' , {width:'539px', height:'249px', hidden:true, degree:0})}
</div>

<div>
 {GoogleImage( '1hTFYXElhnlv6CPeLqxj8sOErAokr-mJn',  '17_Notion_ImportExport_16.png' , {width:'611px', height:'508px', hidden:true, degree:0})}
</div>

## Notion 資料遷移 <span id="Notion_migrate_workspace">&nbsp;</span>
-  Notion 資料遷移至其他帳號 <span id="Notion_migrate_workspace">&nbsp;</span>
1. 以 Owner 登入工作區。
1. 將您的所有頁面整合到一個頂級頁面下。
1. 將 Workspace 完全存取權分享給指定 email/account。
1. 以接收者帳號登入，並至<code>&nbsp; 共享 \(share) &nbsp;</code> 頂層頁面。
1. 由根頁面\(或逐次選擇所有子頁面)，點擊 <code>&nbsp; …  &nbsp;</code> 圖示 🢂 <code>&nbsp; Move To  &nbsp;</code> 🢂 <code>&nbsp; Private Pages  &nbsp;</code>。
* [reference](https://www.notion.com/help/back-up-your-data)

__Owner 分享__
<div>
 {GoogleImage( '1GQ5nWVqtGJzlY6YDevAWauguY5WgEujB',  '17_Notion_ImportExport_17.png' , {width:'467px', height:'418px', hidden:true, degree:0})}
</div>

__Receiver 接收__
<div>
 {GoogleImage( '1tFsdbetfi9ZyFSsNbs4wG868qRSUVEdn',  '17_Notion_ImportExport_18.png' , {width:'445px', height:'305px', hidden:true, degree:0})}
</div>