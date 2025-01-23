---
title: Notion 學習紀錄
description: Notion Notes
keywords: [Notion]
---

## 寫在前面
> 因為在 Survey 作筆記相關的軟體，所以注意到這軟體。  
> 在 筆記軟體 選擇上，在現今的選擇中基本上我考量的是採用哪種語言，以及是否能方便移植。  
> 最早我是用 JspWiki Portable 版，他幫我免除了內容移植的問題，我熟悉 Java，所以也能自行開發所需功能。    
> 但在 JDK 與 Tomcat 版本的演進過程中，版本與套件相容問題讓我覺得，  
>> 螞的! 我是要記錄筆記耶!又不是在開發。   
>> 然後，很不幸的是 Wiki 語言競賽中，markdown 又贏了。  
> 想一想，還是 markup 活得最久，坊間又一大堆可以將 markdown 轉 markup 的工具。  
> markdown 好寫，markup 萬年不敗。這應該是最佳組合。  
> 那這一切關 Notion 何事?  
> 隨手試了一下，Notion 就是所見及所得的 markdown 編輯軟體啊。  
> 不信你試試直接 key markdown 語法，例如連續兩個 sharps 看看發生甚麼事。  
> OK，工具有了，編寫語言有了，剩下的就是移植的問題。  
> 目前看來，Notion 上編輯的內容可以匯出成 markdown 格式或是其他格式。  
> 有了匯出功能，而且是主流方式。資料被綁架的的問題解決了。  
> 

## Notion
* 官方網站: [Notion Reference Docs](https://www.notion.com/help)  
* 官方網站: [Notion Reference Docs zh-tw](https://www.notion.com/zh-tw/help)  
* Notion Widgets:  
    * [indify](https://indify.co/)  
    * [widgetbox](https://widgetbox.app/)  

## 關於帳號
> 摘要:  
>> 先使用教育版，授權被收回時資料移轉至一般帳號。   
>> 若需要共編情形請直接使用 free 或付費版，以開啟 add member 功能。   
> <span style={{backgroundColor: '#b3ffb3'}}>注意教育版的種類</span>:<br/>   
> 1. Plus Plan for <strong>individual</strong> students and teachers (由 email 認證)<br/>
> 2. Plus Plan for student <strong>organizations</strong> (未列於 Notion 指定清單中的教育機構需額外申請)，此版本才開啟 add members 功能。   

* free version 一經 add member，便無法升級為 edu plus,反之 edu plus 會封鎖 add member 功能  

* [教育版 individual edu plus 限制](https://www.notion.com/help/notion-for-education)  
    * 目前教育加強版的認證方式是依 email，<b>教育單位的 email 可申請教育加強版</b>。\(這邊單指的是版本，有教育 email 是否授權是另一回事\)  
* 以 email 註冊帳號 vs 以 email 登入
    * email 註冊帳號 : 也就是 email 當帳號，即使你畢業了，email 被回收了。只要不忘記賬密仍能使用。  
    * email/FB 登入 : 就是以第三方服務當 AD server。  
* 基本上 Notion 中的資料跟著帳號跑，因此必須了解 [更改 email 方式] (#notion_change_mail) 。反過來說 Notion 中搬移全部資料的方式便是更改 email。        

### 教育加強版開通
> 這邊指的是 Plus Plan for individual students and teachers  
> 1. <span style={{color: '#0044FF'}}> 教育版 </span>: Sidebar 🢂 Settings 🢂 升級方案 🢂 學生vs教育版 升級方案  
> 2. 升級: Sidebar 🢂 Settings 🢂 帳單 🢂 方案 🢂 變更方案 (更改為付費版)  
>> 註: edu plus 雖無法 add member 但可 add guests   
 

## Notion 版面介紹
* Sidebar: 左側有側欄工作列，點選後會出現 Docker Panel or Modal Window，以進行相關功能作業。
    * 語系調整: Sidebar 🢂 Settings 🢂 Language & Region  
     
* Workspace: 工作區基本操作  
    * 切換: 帳號 __🢃__ 🢂 可切換不同 workspace(不同筆記本)  
    * 建立: 帳號 __🢃__ 🢂 右側 __...__ 🢂 可加入或建立新的 workspace  
    * 移除: 進入 Workspace 🢂 Settings 🢂 reneme/remove 🢂 workspace 移除或更名  
    * 鎖定: 由右上方的隱藏功能 __...__ 按鈕進入後 🢂 Lock Page (頁面鎖定，防止誤操作)  
    * wrokspace 下可再細分: [Page](#notion_page_type) / Block   


## Notion Page 種類<span id="notion_page_type"> </span>  
* Page 基本操作: 
    * 每個工作的最小單元是 Block。Block 是一個容器用來乘載文字或圖表等。
    * (main page)建立: Docker Panel 🢂 __private__ 🢂 __+__ 按鈕 🢂 Create Page
    * 註: private 區域放的是<b>未發佈</b>的 Pages
    * (sub page)建立: Docker Panel 🢂 特定 Page 🢂 __+__ 按鈕 🢂 Create SubPage
    * Pages 間可以直接拖拉更改階層結構。 
    * 注意: 發佈時以 Pages tree 為單位，頁面中 linked pages 不會自動發佈。  
* Page 結構:
    * 封面 \(Banner\): 可以自行插入一張圖片，或由相關聯圖庫網站直接定取用圖片。   
    * 圖示 \(Page Icon\): 這張圖也可 reference 到網路上的其他 icons。用在 a.Browser 的 Tab icon。b.Notion Docker 上的辨識圖樣。  
* Page 轉換: 
    * Notion 可以將 Block 轉成 Page，或是其他程式區塊。
* Block: 
    * 操作技巧: 有時會使用複雜的 Block，例如 [Database](#notion_Database) 或是 [Form](#notion_Form) 等結構，此類結構下方似乎有 padding 區塊。若欲在下方附加 Block 時，常會發現無法直接 enter 新增，此時可將鼠標移置 Block 下方一段距離\(約4-5個rows)並注意鼠標變化，若由箭頭變成 I 型時便是WYSIWYG下可插入下一 Block 位置。

* Pages 種類:注意不同種類的 Page 由不同的 icons 呈現    
    * Private Page: 這邊指的是未 Publish 的 Pages。    
    * Public Page: 這邊泛指已 Publish 的 Pages。     
    * DB Page: Notion 中指的 DB 類似 Graph DB。以表格呈現可直接編輯並建立相關關聯。   
        * Page icon 有 __↗__ 符號的是，__Mentioned Page__。是單純的 Page Link。  
        * <span style={{color: 'blue'}}>Page icon 僅單純頁面符號的是，Page 的分支。Link 與 Page 同存亡</span>。  
        * icon 有橫線的是已填內容的 Page。 


## __發佈 publish__  

_發佈步驟:_  
* 由右上方的 __Share__ 進入後 🢂 Publish  
* 若勾選 Duplicate as template 則允許知道網站的帳號複製網站。  
* 可搭配[短網址服務](https://tinyurl.com/app)。  

_注意事項:_  
* Notion 是依據 Page hierarchy 結構來進行發佈。  
* 自動發佈次階層。  
* 注意 Page 中的 links，不同 hierarchy tree 結構不自動發佈，所以會有<b>無效 Links </b>現象需自行注意。   
* 手動拖拉 區塊 或 Page 可以直接在 UI 上調整 hierarchy 結構。\(操作同於 turn into 指令\)
  


## Links 
> 重點摘要:  
> 經由 Mention a Page 相關指令建立的，為 inline links。  
> Page icon 若有 Arrow ↗ ，則該 Link 僅是單純指標。移動或刪除不影響原 Page。  
> Page icon 若__無 Arrow__ ，則 __代表 Page 實體，與 Page 同存亡__ 。   
>> <code>需特別注意沒有 Arrow 的 Links，不可任意刪除。</code>

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
    * 在 Block 的六點 🢂 Copy Link to Block 可取得 block 的 URL。  
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
    * / + embed 語法可將指定來源利用 ifreame 插入, 參考 [Notion_Integration](#Notion_Integration)


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
> workspace 共編 \(Member 分享)<br/> 
> Settings > workspace > People > Add Members<br/>
> 左上 account > invite members

## Notion DB
> Notion DB: Notion 中的 DB 並非關聯式資料庫。  
> 而是一個包含特殊資料格式的 SubPage \(DB Page)。SubPage 中的資料可以以不同 View/Layout 的方式在多處同時呈現。    
> 與資料庫相似的是 Notion DB 同樣具有欄位屬性、瀏覽模式、篩選和排序等功能。    
> DB Page 可以設定為:  
> Full Page Database: 主頁以 Link 方式連接。  
> Inline Database: 主頁可直接同步顯示 DB Page 內容。
> <code>主頁中 DB Page icon 無 Arrow，故所有 DB 操作皆同步，包含刪除</code>。<br/>  
> 建立指令:  <br/>
> <code>/ + 以 Database </code> &nbsp;&nbsp; (非/ + table)。  


## Table Database <span id="notion_Database"> </span>
* [Reference](https://www.notion.com/zh-tw/help/category/databases) 

### 建立方式
* 基本: / + database  
* Main Page 建立 inline DB，導向既有DB。 / + Table view。   
* 點 Table Sheet 名稱可複製 view url。後可貼在其他頁面中。    
* Table vs Database 轉換: 六點工具 turn into database vs turn into simple table。  

### 額外功能特性擴充
* 部分額外功能預設為關閉，需自行開啟。 ... > Customize My Database > Suggested > 選取特性。  
     * [Sub-Items](#notion_subitems)
     * [Dependencies](#notion_dependencies)  
     * [Tasks](#notion_tasks)  
     * AI Summary  
     * AI translation 

### Notion DB View 種類
* Table、Border、Chart、List、Calendar、Gallery、Timeline 甘特圖等。  
* DB Page 建立時預設會採用 Table View \(Layout)，類似 Excel 表格。  
* 建立新 Sheet \(+) 時可自行指定 View\(瀏覽模式)。  
* Table 右側 ... 可切換 Layout 或其他 Sheet 相關屬性。  
* 同一份資料可以經由 'name > copy link to view' 貼到多處。並為分身客製化成不同長相。 
    * 等同於 / + linked view of database  

### Database Row 
* Notion Database 中的 Row 都隱含代表著一個 SubPage。可展開並做相關 Page 設定。但是並不向一般 SubPage 會在 MainPage 或 Sidebar 上顯示 Links，僅能由 database row 橋接過去。

### Database Column 屬性設定
=> 因為不同的入口，可修改的屬性不完全一致。列出可做 CRUD 異動的相關入口。
* Database: 直接點 Table Name > Edit view 可修改 Table/column 相關屬性與設定。
* Database and Property: 點 Table 右上的 ... 可更改屬性。
* Property: 點 Column Name 可跳出 Property 屬性泊塢視窗。
* 點 Property 圖示可更換。

### 表格關聯欄位 Relation Property
* <span style={{color: '#0044FF'}}> <b>Database Relation, Rollup</b> </span>   
* Relation
    * 新增 Main Table Property 時選擇 __Relation Type__ 可建立表格間的關聯。  
    * PK 是 Main Table 的 Name 欄位，雙向時 FK 則可以是 Sub 任意欄位。  
    * 允許一對多。  
    * 發布後，點 Main 上 FK link 可以檢視相關 row 的內容。  
* Rollup\(彙總) : 當 Database 具一對多 Relation 關係時，可以建立 [Rollup Type Property](#notion_Chart_View)。  
    * 功能類似 Java 的 Stream。可以整合多個資料以指定的方式呈現，例如:sum, max, joining。   
    * 不同 Type 的 Relation 可以有不同的處理工具。  
    * ... 🢂 Properties 🢂 選擇 Sub's column 🢂 Calculate 🢂 決定處理動作 🢂 show as 🢂 決定呈現方式\(%、圓餅)  
    * 如: 在 backlog 顯示相關 tasks 的完成度。
    * 與 [Chart View](#notion_Chart_View) 比較
        * rollup: 為單一 row 下的子單元做計算。統計 subitems 數量/完成度。
        * chart: 為整份 database 做數量/完成度統計。  
        
* Calculations
    * Rollup 與 column 最下方的 [Calculations](https://www.notion.com/help/tables) 比較。
    * Calculations(縱向計算): 依 column 屬性特性為該欄位進行計算處理。
    * Rollup\(關聯資料計算): rollup 則是整合有 relation 的資料。
    * [Formula](#notion_Formula) \(row 本身資料處理): 比較 Formula column，允許 row 將自身欄位進行運算進而提供整理資料。

### Column Filter 
* 同一份 DB 資料，可以用在不同地方。Filter 則可以為此客製不同呈現方式。  
* 建立 filters: 
    * column name 🢂 Filter 可建立基本 Filters。  
    * 已建立的 Filters 會在表格左上方呈現，點下拉選單的 ... 可進入 'Add to Advanced Filters'。    
* 移除 filters: 
    * Filter Docker 右上 ... 可叫出移除選項。  
* 操做: 
    * 建立 Filter 時， Docker 會依 column type 不同而顯示不同屬性。  
    * Filter Docker: 在 name 旁邊有 <span style={{color: '#0044FF'}}> **Operator 下拉選單** </span> 可供客製過濾條件。  
    * <b>Advanced Filter: 類似 SQL/DSL 操作語法</b>。   

### Calendar Property
* 當 Table/Database 至少有一個 Date Column 時便可轉成 Calendar Layout。
* 操作: 使用六點工具   
    * 多個 date 欄位時可以: 更改 layout 時指定 'show calendar by' 指定使用的日期。  
    * 日曆上的記事:  Properties，可設定日曆上要顯示的資訊欄位。 
    * 週曆日曆: Layout > Show Calendar as > Week/month。  


## DB 共編 Person Property <span id="notion_database_coedit"> </span>
* Person Property 自動帶入的限 Notion Member 與 Notion Guest。參考 Notion 共編章節
* Person Type 的 Column 是用來設定夥伴的授權。  
* 可搭配 filter 限制夥伴可看見的 rows。  
* 操作: 
    * Owner 先為 Database 增加 Person Property，並決定 Row 與夥伴的對應關係\(cell 填寫夥伴帳號)。  
    * 為 Person Column 增加 Filter。利用 Filter operator 與 Advanced Filter 進行限制。
    * 設定 Filter 時<span style={{color: '#0044FF'}}> 須以<b>夥伴視角</b>來進行設定 </span>。 例如: Person contains ME \(ME 指的是夥伴視角)。   

## Unique ID Property
* 這邊指的是 batabase 中可以為 row 設定一個 __唯一識別碼 Unique ID__ 欄位，來代表該資料列。
* 可自行為 Unique ID Property 設定 prefix。  
* database 中每個 row 都有一個 detail page\(滑鼠移置 Name column 會出現 open 提示)，用以展示 Row 所有相關資訊。當 Unique ID 串接 BaseURL 可組合出 detail page 所需快速路徑。
    * https://www.notion.so/UniqueID-9999

## Formula Property <span id="notion_Formula"> </span>
* Formula: 依據其他欄位進行運算處理後的整合欄位。
    * 如:計算 start date 與 end date 間的差異，而呈現 data span。    
    * 分數高於 60 顯示及格，反之顯示不及格。
* [Notion Formula Basic](https://www.notion.com/help/formulas)
* [Formula 2.0 Reference](https://www.notion.com/help/guides/new-formulas-whats-changed?_gl=1*90t2qe*_gcl_au*MTY5Njc4Mzk3NS4xNzMxNTY1MTIx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczMzE4NzQ1MC4xMi4xLjE3MzMxODg0OTMuNTcuMC4w&cookie_sync_completed=true)
* 操作:  
    * Edit Property > Edit Formula > Property 當 Argument > 決定 Formula  
    * Docker Panel 上會出現基本使用說明。  
    * Notion 有為 Formula 提供 [built-in functions](https://www.notion.com/help/formula-syntax)，ex: if, round, hour, repeat 等   

## Sub-Items and Dependencies
* 功能入口: table 右上 ... > Customize My Database > Suggested > add  
* Sub-Items <span id="notion_subitems"> </span>
    * 添加 Subitems 特性後，在 Row Name 會出現 🠟 符號可用來設定 subitems。 
    * Database Table 下的 <span style={{color: '#0044FF'}}> **Row 可再拆分成 Sub-items \(closable, 子單元, tasks)** </span>。 
    * Table 最下方的 <span style={{color: '#0044FF'}}> **rollup 計算數量或加總時會以 main row 為準** </span>。\(忽略 subitems)
    * ... > Customize > Sub-items 可以移除階層顯示獲設定 sub-items 顯示方式。 
* Dependency<span id="notion_dependencies"> </span>
    * <b>Dependency</b> 用在<span style={{color: '#0044FF'}}> **連續事件的時間規劃** </span>，Column Property 須為日期區間類別。
    * 前提條件: 用在 Timeline layout 且 Database 必須有日期欄位\(開啟 end date)。
    * 作用: 當在 UI 拖拉時間區段時，可自動維持 shift 其他時間區段。或是融合成為子時間區段\(轉成 sub-item)。
    
    
## Sprints and Tasks<span id="notion_tasks"> </span>
* Scrum 基本該有的都有了，如果能加上 issue tracking 那就更完美了。  
* <span style={{color: '#0044FF'}}><b>XP team Sprint board</b></span>
* Sprint Dashboard 與其他添加功能呈現上有些差異。
    * database 轉換成 Sprint Dashboard 後，Sidebar 會多出 Sprint board / Sprints / Timeline submenus。  
    * database 會多出 Current / Spring planning / Backlog 三張 Sheets。  
* 建立 Task Database: 
    * create database > ... > Customize > 查詢 Tasks > 轉換成 Task Database   
    * create database > ... > Customize > 查詢 Sprints > 添加 Sprint Board 功能    
    * Task Database: 必須具有至少下列三種類型的 Properties status\(Status), assignee\(Person), and due date\(Date)，轉換時可一併建立。
* Sprint board : Sprint Task 規劃區 
    * Current : 顯示當前 working 中的 Sprint。  
    * Spring planning : 列出所有已建立的 Sprints，包含已完成的部分。  
    * Backlog : 未排入 Sprint 的 Backlogs
    * Spring name > ... > Hide Group 可將指定 Sprint 移至 hidden group 區塊\(已完成)。
* Sprint Sidebar: Sprints 時程規劃區
    * Sprints All: 列出 Sprint 狀態完成度等摘要資訊    
    * Sprints Timeline: 用拖拉的方式行時程規劃，可以與 Google Calendar 搭配整合。      
    
### 編輯技巧
* 批次修改: 滑鼠點 Row 前方，或勾選前方 checkboxes。被選取部分會出現底色。可出現 Docker 用來批次編輯指定 column。
* Rollup and Calculations

### Views
> 新建立 Inline Database 時會在主頁下自動建立 sub-page。page 預設會以 View of database 命名。建議即刻依 view + db 改名。  
> 整體而言: 
>> database layout 與 columns 的顯示隱藏，相關設定在 <b>右上的 ...</b>   
>> 與 view 相關的 specific 設定會放在 view <b>右上的相關快捷</b>   
>> Card 的相關設定或 peak 會在 card <b>右上方</b>   
>
> Layout/Peak: Row 的 Detail Page  
>> 資料庫頁面可以自行設定 Detail 呈現資訊\(一般頁面似乎無此功能)，因部分的 View 在呈顯時僅顯示指定摘要資訊，故提供 row detail 功能。    
>> Layout 指的是，滑鼠移至 name column 時所開啟的 Detail Page。這個 Page 是 Row 的一部分，不是 SubPage。  
>> 設定入口:  
>>  * 🖱hover > 移至標題上方 > Customize Layout  
>>  * 或是開啟 peak page > 右上 ... > Customize Layout  

* Tables View
    * 基本的 table 呈現。 
* Boards View\(三維呈現): Cards 三維呈現 與 [Gallery](#Gallery_View) 比較 <span id="Border_View"> </span>
    * database ... > Group/Sub-group > 可以<span style={{color: '#0044FF'}}> **自行設定分組與次群組** </span>方式，達到三維呈現。
    * 設定 board layout 時可挑整 card 大小。Large/Medium/Small。
    * snapshot: 每張 Card 代表著一個 Row，故 Board 在顯示內容縮圖時，Card 可以選擇顯示 cover/content/或 row 中多媒體 column。
        * Layout > Card Preview > cover/content...   
        * img: 縮圖裁切: Layout > Fi Image or 滑鼠移至縮圖 > Reposition
        * content: ... > Properties 決定要顯示的欄位
    * calculations: 與 Table view 相同，一個 Column 下的 Cards 可以進行 Calculate。 
        * board column header 邊的數值即是 calculation。操作方法同 Table View。
    * Visibility: 
        * ... > Properties > Show/Hide
        * ... > Group > Show/Hide
        
* Timeline View 
    * 時間軸: ... > Layout > Show Timeline by 指定時間軸。           
    * 顯示區段調整: Timeline 右側的時間單位夏拉快捷與 today，用來管理 Timeline view 的<b>橫向呈現</b> by week/month/quater/year。而 Calendar view 則是經由 ... 。
    * 資料數: 
        * row:  ... > Load limit: 可限制 view 的<b>縱向呈現</b>，限制起始時一次可顯示的 rows 筆數。
        * column: Timeline 左上的 >> \(show table)，可調出 Table 的其他 toggled 欄位。 Database 的 ... > Layout > Properties 則控制那些 columns 可顯示。
   
* Calendar View
    * 時間軸: ... > Layout > Show Timeline <b>by column</b> 指定時間軸。           
    * 顯示時間區間: 與 Timeline 的右上快捷下拉不同，Calendar 須經由 ... > Layout > Show calendar <b>as month/week</b> 調整。    
    * 資料數: 
         * card(row): 每一 database row 會對應一張 card。同一時間相關 cards 會塞在同一個 cell，目前沒找到 toggle 功能。
         * column:  ... > layout > properties，可設定 card 中的資訊欄位。 
    * 註: 語系決定每周第一天是周一或周日，無法客製。
    
* Gallery : 摘要與縮圖 cards 與 [Boards View](#Border_View) 比較 <span id="Gallery_View"> </span>
    * Gallery View 以 Cards 來摘要顯示 row 的 media column/page cover/page content。簡單說就是以 <span style={{color: '#0044FF'}}> **card 加 snapshot** </span> 呈現 subpage 的 snapshot。    
    * snapshot 選取: ... > Layout > Card preview > column。    
    * 其他: card/database 右上角的 ... 可更改縮圖顯示/Card size/顯示properties等常規操作。

* Chart View <span id="notion_Chart_View"> </span>
    * Chart View 會依指定 Column 計算 All Rows 的完成度。非付費版僅能建立一個 chart 使用。  
    * [Rollup column](#notion_rollup) 則會計算 Row 的子單位 \(Subitems/subtasks) 完成度，但 [Subitems 預設是關閉需自行添加相關功能。](#notion_subitems)
    * 注意: 免費版 chart 整理的資料上限是 200 groups，50 subgroups/subtasks/subitems。
    * 功能入口: 
        * chart: ... > What to show 選取要進行 chart 統計用的欄位。   
        * subitems: table 右上 ... > Customize My Database > Suggested > add  Sub-Items。  
        * Row Name 🠟 符號可用來設定 subitems。  
        * 添加 subitems 後 ... > 會出現 What to show/include sub-items 選項。  
        * include sub-items: 是否忽略 sub-items 計算。<b>included</b> 時 subitem 視為完整的 row 進行計算，不與 parent 相依，各自獨立計算。  
    * X/Y 軸調整: 當選擇 line/bar chart 時畫 docker 才會出現 X/Y 軸相關調校設定
        * X 軸: 橫軸可以選擇區大分類\(X axis : what to show )。常見是以時間或狀態為橫軸。
        * Y 軸: 大分區下可再選定 bar 上的呈現方式\(bar 可再以顏色細分group)。通常 <span style={{color: '#0044FF'}}> **縱軸會呈現數量** </span> \(count)，若需要可再細分各子類的數量。
        * Y 軸: 目前測試顯示的都是數量，只是可以指定類別去重複，並分別顯示類別總數。其他非預設標示則需 Style > More Options 自行開啟。  
        * Y <u>What to show</u>: 要計算總數的項目。除了 count 外都是 distinct。
        * Y <u>Group by</u>: bar 上再細分區段的條件。
        * line chart 下會多出 Cumulative 設定，可依次累加數量。
    * slice 調整: 圓餅圖特有的設定
        * chart: what to show,資料大分組的種類,例如 Person。
        * slice: 類似 line chart 的 Y 軸設定，指定要計算加總的條件。
    * UI 客製化: 依 View 種類有不同設定
        * ... > Style > More Options 建議開啟
        * Data Label: 資料上的說明,數值標示
        * Axis name: 顯示 XY 軸名稱與資訊,
        * Legend: 顯示圖例  
    * Dashboard: 將多個圖表與資料統合成 Dashboard。以更高的角度觀看全局，以方便監控專案進度、發現趨勢並做出決策。
        * [OKR Dashboard Notion 範例](https://www.notion.com/templates/category/free-okr-tracker-templates) 將多張圖表整合模板。
        * OKR objectives and key results-目標與關鍵結果    
        * Database 轉 Chart 摘要: Database 右方的 + > 建立新的 View > 最右側 ... > Layout > View 類型選擇 Chart > 回上一層依據 Chart Type 設定相關參數。
        * 可搭配 [Block 並排](#notion_Notion_Column_Side_By_Side)自行設計 Dashboard 畫面。


### <span style={{backgroundColor: '#ffffb3'}} id="notion_Notion_Column_Side_By_Side">Notion Block 並排</span>
 * 拖曳六點工具 > 將 Block 拖至指定 Block 最右端 > 等待出現插入指示符號  
 * 註: 
     * 滑鼠移至六點工具左側，可出現調整欄寬工具。操作方式如 excel。  
     * 部分情境可能出現並排錯誤


## Notion Forms 表單<span id="notion_Form"> </span>
* https://www.notion.com/help/forms
* Form 表單設計功能僅限 PC 端可使用。  
* Notion Form 目前 *__無法更新既有送交資料__*，每次送交都是獨立事件。殘念......  
* 資料收集對象不限於 [Notion 的使用者](#notion_database_coedit_setting)。
    * Form builder > 右側 share form > who can fill out? > 可選取 public
    * 若 database 有 __Last edited by__ 欄位則，可自動指向 Notion co-editor \(採用 Anyone at Notion DB) 或自動填入 Anonymous\(採用 Anyone on the web link)   
* Form 建立方式: 
    * 由 database 建立 > + > view 選 form > 會出現 Create Questions 確認項。  
    * /form 指令: 建立 Form 並一併建立 database。  
    
* 關於 input fields: 
    * 隱藏資訊欄位: Last edited time, Last edited by(隱含欄位)
    * 欄位於 database 或 form builder 建立的都可在相對應 view 擴充\(須手動擴充)。  
    * is required: form builder > block 右側隱藏的 ... > required 用來設定必填與否。
    * text 轉 area: form builder > block 右側隱藏的 ... > long answer 可將輸入欄位改成 TextArea。\(註: Notion 限制文字類最長 2000 char)
    * 送交時提示訊息: form builder > block 右側隱藏的 ... > Customize form > CUstomiz，可調整表單送交時的訊息與 button 呈現。

* 開放表單: 
    * form builder > 右側的 Share form > who can fill out? > 
    * 不收集填表人資訊: __Anyone at Notion DB__ 選項預設收集填表人帳號資訊，可藉由 Share form > Anonymous responses 關閉。  

* 匯出已收集資料: 
    * Notion Form 與 database 相依故直接使用 database 匯出功能即可。    
    * Page > 做外層右上的 ... > Export 

## Advanced Notion Forms  
* https://www.notion.com/help/guides/use-forms-to-collect-organize-and-act-on-responses-in-notion?_gl=1*qs5hi7*_gcl_au*MTY5Njc4Mzk3NS4xNzMxNTY1MTIx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczNTg4OTk5MC45LjAuMTczNTg5MDAwNC40Ni4wLjA.

> Form 與 Database 結合後的應用技巧:  
> 以 form 來收集資料，  
> 利用 database 的各種 view 來分析已收集資料。  
> 如: 
>> 蒐集日期時，可轉成 calendar view，來呈現完成日期/啟動日期等資訊
>> 蒐集時間區段時，可轉成 timeline view，來看專案時程等。 
>> Chart 來看完成率等。

* [搭配 email 欄位進行工作通知](13546798): \(似乎教育 plus 以上授權才可執行所有功能)
    * form builder 右側 __閃電__ 符號  
    * when: 建立指定事項發生時的 trigger 
    * do: 指定 Slack 或電子郵件更新

* 整合多張表單至單一 database: <span id="notion_MultiForm_2_SingleDatabase"> </span>
    * Notion Form 目前 *__無法更新既有送交資料__*，每次送交都是獨立事件。  
    * 此處指的是，一個 Database 可以設計出多個表單，資料可收集至相同 database，但同參與者送交資料無法自動合併。
    * 建立多張 forms: database 左側 + > form > 自行決定要採用的欄位\(properties)。

* Notion form 與 Google form 整合 \(要外掛)
    * https://www.youtube.com/watch?v=XEwOtlsF_oY
    * https://www.youtube.com/watch?v=oAxg4MZ4Jv8
    
* Notion database 與 Google Sheets 同步 \(要外掛)
    * https://workspace.google.com/marketplace/app/sync2sheets_notion_in_sync_with_google_s/887187948180
    * https://nuit0815.medium.com/notion-%E4%BD%BF%E7%94%A8%E8%A8%A3%E7%AB%85-%E9%80%A3%E7%B5%90-google-%E8%A1%A8%E5%96%AE%E8%88%87-notion-database-27a44a6c0ee1
    




    
    
    