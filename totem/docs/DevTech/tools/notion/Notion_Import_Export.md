---
title: Notion 資料匯入匯出
description: Notion 資料匯入匯出
keywords: [Notion,Import,Export]
---

## Notion Doc Import <span id="notion_Doc_Imported">&nbsp;</span>
* 這邊用的字眼是 import / insert，指的是有副本或是截圖。因此不是及時完整內容。
* google
    * /google docs 
    * /google drive 指令可以 link / embed google drive 上其他類型文件。image / pdf 等。
    * /google map     
* 其他類型文件: 經由 Setting > import > 種類選取。
    * word 
    * excel, 
    * html
    * markdown: 僅限不含 databasse 的 Notion Page 可以 md format 匯出 
    * csv: 單頁的 Notion Database 可以以 CSV 匯出。
    * PDF: 匯入文字說明與圖片。轉換成為已上傳檔為名的 Notion Page。
 * 其他軟體資料匯入或是同步:\(未全試過)
    * confluence / Jira / Dropbox / evernote ....
    
* 其他可以 [embedded](#notion_Doc_embedded) 的檔案類型 
    * 這邊指的是以 Iframe 插入，故受 Iframe 相關限制，若來源方禁止則出現 'Failed to Load'
    * HTML files / PDF files / Audio / Video / Images    

### Google Docs 匯入的特殊功能
* 插入 Gooogle Doc 方式 (會要求登入 google 帳號)
    * 複製 google doc url link，直接貼在 Notion Block > 可再細選呈現種類
    * Block 填入 /Google Docs 指令，會開啟 google drives 中的 word 或 gdoc 檔清單。
    * Settings > Import > Google Docs，同樣會開啟文件清單。
    
* 插入 Gooogle Doc 呈現種類
    * URL: 單純的 URL link 指向 google doc.
    * Preview: 文件__首頁縮圖__，點縮圖下方可進入 google doc.
    * Mention: 與 URL link 類似，但 mouse over 時，會出現原文件的縮圖。與 Notion 的 Mentioned Page 應該不同.
    * embedded: 將只份文件嵌入，但僅可瀏覽不可編輯，同樣點縮圖下方可進入 google doc.
    * import from Google Drive: 會在 Notion 建立 __文件內容副本__ \(Notion Page).
    * block 右側的 __ … __ 有提供呈現方式轉換。turn into given_type
    

## Notion Doc embed <span id="notion_Doc_embedded">&nbsp;</span>
* Notion embeds 指的是以 Iframe 插入，故為即時資訊且受 Iframe 相關限制，若來源方禁止則出現 'Failed to Load'
* [Notion Doc Import](#notion_Doc_Imported)，則是另存資料副本。
* HTML files / PDF files / Audio / Video / Images / [相關可接受的來源方清單](https://www.notion.com/help/embed-and-connect-other-apps)
* 咒語 : /embed > 貼入指定來源
    * 拖拉可 resize / __ … __ 可 view original 或 replace embedded content


## Notion 資料匯出與備份
> 
> 資料匯出會因為 Browser/ Mobile App / Desktop / 匯出格式 不同而略有差異  
> 這邊主要紀錄的是 Browser 下的使用方式
> 在共編與團隊合作下，商業版 owner 可以關閉資料匯出功能。  


__匯出方式__ 
* upper right > __ … __ > Export 可叫出匯出功能，並自訂匯出格式。
    * 可選擇格式、內容、紙張大小。
    * 以及 __是否打包並匯出子頁面__
    
__特殊內容匯__    
* HTML 格式可額外匯出 comments 與 mentions 
* Notion Database 僅能以 CSV format 格式匯出 

__workspace 備份__
* Sidebar > settings > setting > Export content > Export all workspace content  
    * Notion 會保留下載檔 7 天，並將 download link 寄到指定信箱。  

__關閉備份功能__
* Workspace Sidebar > settings > Security and data > General > Disable export
* Teamspace > __ … __ > Teamspace settings > Security > Disable export 


## Notion 資料遷移至其他帳號 <span id="Notion_migrate_workspace">&nbsp;</span>
1. 以 Owner 登入工作區。
1. 將您的所有頁面整合到一個頂級頁面下。
1. 將 workspace 完全存取權分享給指定 email。
1. 以接收者帳號登入，並至共享頂層頁面。
1. 選擇所有子頁面，點擊 ⋮⋮ 圖示 > Move To 新的工作區。
* [reference](https://www.notion.com/help/back-up-your-data)
