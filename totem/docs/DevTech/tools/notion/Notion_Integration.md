---
title: Notion 學習紀錄 整合其他軟體
description: Notion 整合其他軟體
keywords: [Notion, Integration]
---

[Data & integrations](https://www.notion.com/help/category/import-export-and-integrate)


## Notion Doc Import <span id="notion_Doc_Imported">&nbsp;</span>
* 這邊用的字眼是 import / insert，指的是有副本或是截圖。因此不是及時完整內容。
* google
    * /google docs 
    * /google drive 指令可以 link / embed google drive 上其他類型文件。image / pdf 等。
    * /google map     
* 其他類型文件: 經由 Setting > import > 種類選取。
    * word 
    * excel, csv
    * html
    * markdown
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
    * block 右側的 ... 有提供呈現方式轉換。turn into given_type
    

## Notion Doc embed <span id="notion_Doc_embedded">&nbsp;</span>
* Notion embeds 指的是以 Iframe 插入，故為即時資訊且受 Iframe 相關限制，若來源方禁止則出現 'Failed to Load'
* [Notion Doc Import](#notion_Doc_Imported)，則是另存資料副本。
* HTML files / PDF files / Audio / Video / Images / [相關可接受的來源方清單](https://www.notion.com/help/embed-and-connect-other-apps)
* 咒語 : /embed > 貼入指定來源
    * 拖拉可 resize / ... 可 view original 或 replace embedded content






## Notion 資料匯出
https://www.notion.com/zh-tw/help/export-your-content

## Notion 資料備份
https://www.notion.com/zh-tw/help/back-up-your-data

## 與 Slack 整合