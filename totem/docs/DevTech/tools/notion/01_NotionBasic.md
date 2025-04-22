---
title: Notion 學習紀錄
description: Notion Notes
keywords: [Notion]
---

## 寫在前面
     因為在 Survey 作筆記相關的軟體，所以注意到這軟體。  
     在 筆記軟體 選擇上，在現今的選擇中基本上我考量的是採用哪種語言，以及是否能方便移植。  
     最早我是用 JspWiki Portable 版，他幫我免除了內容移植的問題，我熟悉 Java，所以也能自行開發所需功能。    
     但在 JDK 與 Tomcat 版本的演進過程中，版本與套件相容問題讓我覺得，  
     
     螞的! 我是要記錄筆記耶!又不是在開發。   
     然後，很不幸的是 Wiki 語言競賽中，markdown 又贏了。  
     想一想，還是 markup 活得最久，坊間又一大堆可以將 markdown 轉 markup 的工具。  
     markdown 好寫，markup 萬年不敗。這應該是最佳組合。  
     那這一切關 Notion 何事?  
     隨手試了一下，Notion 就是所見及所得的 markdown 編輯軟體啊。  
     不信你試試直接 key markdown 語法，例如連續兩個 sharps 看看發生甚麼事。  
     OK，工具有了，編寫語言有了，剩下的就是移植的問題。  
     目前看來，Notion 上編輯的內容可以匯出成 markdown 格式或是其他格式。  
     有了匯出功能，而且是主流方式。資料被綁架的的問題解決了。  

## Notion 參考資料
* 官方網站: [Notion Reference Docs](https://www.notion.com/help)  
* 官方網站: [Notion Reference Docs zh-tw](https://www.notion.com/zh-tw/help)  
* Notion Widgets:  
    * [indify](https://indify.co/)  
    * [widgetbox](https://widgetbox.app/)  

## 關於帳號
> __摘要__:  

* 先使用教育版，授權被收回時資料移轉至一般帳號。   
* 若需要<code>共編</code>情形請直接使用 free 或付費版，以開啟 add member 功能。   

> __<span style={{backgroundColor: '#b3ffb3'}}>注意教育版的種類</span>   __:  

 1. Plus Plan for <strong>individual</strong> students and teachers (由 email 認證)<br/>
 2. Plus Plan for student <strong>organizations</strong> (未列於 Notion 指定清單中的教育機構需額外申請)，此版本才開啟 add members 功能。   

## 免費版
* Free Version 一經 add member，便無法升級為 edu plus，反之 edu plus 會封鎖 add member 功能。  
* 教育版是提供給 __個人使用__ ，所以不提供共編。但可 __增加訪客__。

## 教育版
* [教育版 individual edu plus 限制](https://www.notion.com/help/notion-for-education)  
    * 建立新 workspace 時必須選擇 <span style={{backgroundColor: '#b3ffb3'}}> __ For Personal Life __ </span> 才能升級為教育版。
    * 目前教育加強版的認證方式是依 email，<span style={{backgroundColor: '#b3ffb3'}}>教育單位的 email 可申請教育加強版</span>。\(這邊單指的是版本，有教育 email 是否授權是另一回事\)  
### 教育加強版開通
> Edu plus 開通指的是 Plus Plan for individual students and teachers 開通 

1. <span style={{color: '#0044FF'}}> 教育版 </span>: Sidebar 🢂 Settings 🢂 升級方案 🢂 學生vs教育版 升級方案  
2. 升級: Sidebar 🢂 Settings 🢂 帳單 🢂 方案 🢂 變更方案 (更改為付費版)  
註:   
a. edu plus 雖無法 add member 但可 add guests   
b. 建立 workspace 時必須選擇 Personal Use 才能升級為教育版。



## email 註冊 vs email 登入
* email 註冊帳號 : 也就是 email 當帳號，即使你畢業了，email 被回收了。只要不忘記賬密仍能使用。  
* email/FB 登入 : 就是以第三方服務當 AD server。這邊無法升級為 edu plus。  
* 基本上 Notion 中的資料跟著帳號跑，因此必須了解 [更改 email 方式](#notion_change_mail) 。反過來說 Notion 中搬移全部資料的方式便是更改 email。
    * [官方建議方式則是將頁面收集到單一結構樹下，分享整個 Tree](Notion_Import_Export#Notion_migrate_workspace)。        

 

## 發佈 Publish
> 這邊指的是將筆記公開於網路上

_發佈步驟:_  
* 由右上方的 __Share__ 進入後 🢂 Publish  
* 若勾選 Duplicate as template 則允許知道網站的帳號複製網站。  
* 可搭配[短網址服務](https://tinyurl.com/app)。  

_注意事項:_  
* Notion 是依據 Page Hierarchy 結構來進行發佈。  
* 自動發佈次階層。  
* 注意 Page 中的 links，不同 hierarchy tree 結構不自動發佈，所以會有<b>無效 Links </b>現象需自行注意。   
* 手動拖拉 區塊 或 Page 可以直接在 UI 上調整 hierarchy 結構。\(操作同於 turn into 指令\)
  


## Links 
> 重點摘要:  
> 經由 Mention a Page 相關指令建立的，為 inline links。  
> Page icon 若有 Arrow ↗ ，則該 Link 僅是單純指標。移動或刪除不影響原 Page。  
> Page icon 若__無 Arrow__ ，則 __代表 Page 實體，與 Page 同存亡__ 。   
> 
> <code>需特別注意沒有 Arrow 的 Links，不可任意刪除。</code>

* Page Links: 原生 links 區分為 inline link 與 page link
    * inline link(Mention A Page): 穿插在前後文中的 link。  
    * page link\(common link): 一行一個 link，不允許前後文穿插。  
    * web link\(Web Bookmark): 導向某個 URL。    
    * Anchor: 指向 block 的 link。   
* Inline link: 一般想像中的 HTML Link。      
* Page link: 這邊類似靜態網站生成工具自動幫你建立的 menu links。無法文繞圖。  
    * page links 導向其他 page tree 時的 icon 與 Mentioned page 的 icon 類似。
    * Page link to siblings: 同樣有 Arrow 但 Arrow 較大。無法文繞圖。  
    * Mentioned page link: 小 Arrow，可文繞圖。
* Web Bookmark:  
    * icon 是鍊子、直接出現 Page 縮圖或是以文字呈現。
* Anchor:  
    * 在 Block 的六點 __ ⁝⁝ __ 🢂 Copy Link to Block 可取得 block 的 URL。  
    * 在 Notion 中則可貼上後選擇  
        * Mention (inline link)，會自動以 Block 所在相對應階層呈現 Link Text。 ParentPage(BlockText)  
        * URL，以 URL link 的方式呈現無 icon。可再自行修改文字敘述。
        * __Synced Block__，mouse over 時會出現紅框，編輯時會與來源 Block 同步。
* Backlink: 
    * 滑鼠指向 Page Title 時會出現 backlinks 列表，指向所有 mention 此頁的 links。  

* Links 相關操作:
    * 快速建立 Page Links，@ 或 [[ 後接 Pagename  
    * URL : MD 語法中的 \[直接網址\]，圖示為 鍊條    
    * / + Mention a Page : (說明\)\[網址\]，導向已存在的 Notion Page。這邊的是 _inline link_ 。  
    * / + Link to Page : (說明\)\[網址\]，導向已存在的 Notion Page，後方無法加其他文字敘述。圖示為 icon 加上箭頭

* Notion Embed:
    * / + embed 語法可將指定來源利用 ifreame 插入


## Notion 使用技巧
### 圖片相關 
* workspace icon 動態日期: https://api.wolai.com/v1/icon?type=1&locale=cn&pro=0&color=red  
    * workspace 的 icon 🢂 L🖱️ 🢂 填入 Link 
    * <img src="https://api.wolai.com/v1/icon?type=1&locale=cn&pro=0&color=red" alt="drawing" width="100"/> 會隨時間變動的小日曆
* 插入圖片(三大類+怪咖): 
    1. / 🢂 image 🢂 upload
    1. / 🢂 image 🢂 embed link (這邊產生的是靜態 image link，內嵌靜態圖的 link)
    1. / 🢂 image 🢂 pic lib
    1. 怪咖: 想要與用如上方 widget 所生的外部 <span style={{color: '#0044FF'}}> **動態** </span> image 方法。

* 怪咖插入 html img tag (達到 Notion UI 無法插入外部 image 問題)     
1. 先在外部編寫包含 img tag 的 md file  
2. 右上 … 🢂 選 import 🢂 Text and Markdown 🢂 選取 MD file 🢂 將產生的 block 🢂 Move to (Ctrl+Shift +P) 到指定的 workspace。  

### 區塊相關
* 當頁面複雜時或是匯入大量資料不易閱讀時，可以將指定區塊拆分成新的 Subpage。
    * 點選區塊 🢂 🖱R 🢂 turn into 🢂 Page / Page in 
    * 到頁面 🢂 rename (預設會以內容當 link text/page name)
    * Sub-Page 會成為 Links 出現在 Parent-Page 最下方。
    * 須注意的是 <span style={{color: '#FF1100'}}>自動生成的 Links 若刪除，Sub-Page 會一併被刪除。</span>  

### <span>Notion Block 並排</span><span id="notion_Notion_Column_Side_By_Side"> </span>

**<span style={{backgroundColor: '#ffffb3'}}>__Notion Block 並排__</span>** 可以讓畫面更加 condense  

 * 拖曳六點工具 __ ⁝⁝ __ > 將 Block 拖至指定 Block 最右端 > 等待出現插入指示符號  
 * 註: 
     * 滑鼠移至六點工具 __ ⁝⁝ __ 左側，可出現調整欄寬工具。操作方式如 excel。  
     * 部分情境可能出現並排錯誤
     

## Notion 資料搬移 <span id="notion_change_mail"> </span>   
### email 更改 
* 將資料轉移至其他 Account  
* 新的 email 必須非已存在的 notion 帳號。 

> Sidebar 🢂 Settings 🢂 Account 🢂 My Account 🢂 變更電子郵件  
> Sidebar 🢂 Project(Dropdown) 🢂 Setting 🢂 Account 🢂 My Account 🢂 變更電子郵件  

### 共編、分享與複本
* 複本也是一種將資料移轉的方式，依 workspace 或 Page Tree 分享。  
* 雙方皆須有 notion 帳號。  
* 版本依據建立時授權狀態，非帳號當下授權。   
* [DB 共編](#notion_database_coedit)。在頁面已共編前提下，Database 可再額外設定資料 Rows 的存取與編輯權限。  

> 範本 Steps:  
> 1. 擁有者 Pages 發佈 : 指定頁面 🢂 右上 share 🢂 publish 🢂 勾選 "複製為範本"  
> 2. 共編方 : 到指定 URL 🢂 右上 "複製符號" 🢂 建立複本 🢂 加入專案 
> 3. 擁有者重新回到發佈設定，取消或禁止建立複本。   
> 
> 單一頁面共編\(Guest 分享) Steps: <span id="notion_database_coedit_setting"> </span> <br/>
> 擁有者 Pages 分享 : 指定頁面 🢂 右上 share 🢂 invite 邀請其他 Notion Account 共編指定 Page tree。<br/>   
> 
> Workspace 共編 \(Member 分享)<br/>   
> Settings > workspace > People > Add Members > 左上 account > invite members
> 
> Guest/Member 移除更改授權角色等功能同樣位於 Settings > workspace > People 