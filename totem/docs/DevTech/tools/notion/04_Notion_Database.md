---
title: Notion 資料庫
description: Notion 資料庫
keywords: [Notion,Database]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

# Notion DB
    Notion 中的 DB 並非關聯式資料庫。  
    而是一個包含特殊資料格式的 SubPage (DB Page)。  
    SubPage 中的資料可以以不同 View/Layout 的方式在多處同時呈現。    
    與資料庫相似的是 Notion DB 同樣具有欄位屬性、瀏覽模式、篩選和排序等功能。    
    
* DB Page 可以設定為:  
    * Full Page Database: 主頁以 Link 方式連接。  
    * Inline Database: 主頁可直接同步顯示 DB Page 內容。
* __<span style={{color: '#FF1100'}}>主頁中 DB Page icon 無 Arrow，故所有 DB 操作皆同步，包含刪除</span>__。  
* 建立指令: &nbsp; <code> &nbsp;/ + Database </code> &nbsp;&nbsp; (非/ + table)。  


## Table Database <span id="notion_Database"> </span>
* [Notion 官方參考文件](https://www.notion.com/zh-tw/help/category/databases) 

### 建立方式
* 基本: <code>&nbsp; / + database &nbsp;</code>
* Main Page 建立 inline DB，導向既有DB。 <code>&nbsp; / + Table view &nbsp;</code>。   
* 點 Table Sheet 名稱可複製 view url。後可貼在其他頁面中。    
* Table vs Database 轉換: 六點工具 <code> __ ⁝⁝__</code> turn into database vs turn into simple table。  
    
_Create Notion Database_

<span>
 {GoogleImage( '1t6XSUWgantKE5VwGtnUzjmqLWvSSViM6',  'insect_totem_logo_70x70.jpg', {width:'509px', height:'394px', hidden:true, degree:0})}
</span>

_Notion Database Converts from Table_
<span>
 {GoogleImage( '1wSfZPPTWkUFzB3mf_lm9WEyqfeCW_Ga5',  'insect_totem_logo_70x70.jpg', {width:'664px', height:'348px', hidden:true, degree:0})}
</span>

### 額外功能特性擴充
* 部分額外功能預設為關閉，需自行開啟。 __ … __ > Customize My Database > Suggested > 選取特性。  
    * [Sub-Items](#notion_subitems)
    * [Dependencies](#notion_dependencies)  
    * [Tasks](#notion_tasks)  
    * AI Summary  
    * AI translation 
     
<span>
 {GoogleImage( '1zPfwINiHtmc1rjTMoOwWJkT4xbVrqFKg',  'insect_totem_logo_70x70.jpg', {width:'664px', height:'285px', hidden:true, degree:0})}
</span>

## [Notion DB View 種類](Notion_View)
* [Notion DB View 介紹](Notion_View) 
* Table、Border、Chart、List、Calendar、Gallery、Timeline 甘特圖等。  
* DB Page 建立時預設會採用 Table View \(Layout)，類似 Excel 表格。  
* 建立新 Sheet \(+) 時可自行指定 View\(瀏覽模式)。  
* Table 右側 __ … __ 可切換 Layout 或其他 Sheet 相關屬性。  
* 同一份資料可以經由 'name > copy link to view' 貼到多處。並為分身客製化成不同長相。 
    * 等同於 / + linked view of database  

## Notion DB Row 
* Notion Database 中的 Row 都隱含代表著一個 SubPage。可展開並做相關 Page 設定。但是並不像一般 SubPage 會在 MainPage 或 Sidebar 上顯示 Links，僅能由 database row 橋接過去。
* 所以，新增 DB Row 時換面上的按鈕寫的是 New Page。
     
<span>
 {GoogleImage( '1pTblovdobiMwhDatWcr5ipDW8Y_toNg-',  'insect_totem_logo_70x70.jpg', {width:'684px', height:'258px', hidden:true, degree:0})}
</span>

## Notion DB Column 屬性設定
> Notion DB 的 Column 官方稱為 Property。  
> 因為不同的入口或是不同類型的 Property ，可修改的屬性不完全一致。此處列出可做 CRUD 異動的相關入口。

* Database: 直接點 Table Name > Edit view 可修改 Table/column 相關屬性與設定。
* Database and Property: 點 Table 右上的 __ … __ 可更改屬性。
* Property: __點 Column Name 可跳出 Property 屬性泊塢視窗__。
* 點 Property 圖示可更換。

_Edit View_
<span>
 {GoogleImage( '1a_53fp8YXDizLt_thzTFQn2sM10JNPsl',  'insect_totem_logo_70x70.jpg', {width:'208px', height:'278px', hidden:true, degree:0})}
</span><br/>

_Database Properties Settings_
<span>
 {GoogleImage( '1oZs-PxBGdhyR2Q1G0_rY2zWMb3etVWjv',  'insect_totem_logo_70x70.jpg', {width:'866px', height:'225px', hidden:true, degree:0})}
</span><br/>

_Column Property Settings_
<span>
 {GoogleImage( '1NH4wvTMVH_uniE7iFMJOqM6eVJcbZ0Qu',  'insect_totem_logo_70x70.jpg', {width:'301px', height:'442px', hidden:true, degree:0})}
</span><br/>

## 表格關聯欄位 Relation Property
> Notion DB 的特殊特性: <span style={{color: '#0044FF'}}> <b>Database Relation, Rollup, Calculation</b></span> 

### ___Relation___:
* 新增 Main DB Property \(+) 時選擇<span style={{color: '#0044FF'}}> <b>Relation Type</b></span> 可建立<span style={{color: '#0044FF'}}> <b>表格間的關聯</b></span>。  
* PK 是 Main DB 的 Relation 欄位，雙向時 FK 則可以是 Sub 任意欄位。  
* 允許一對多。__填寫 Relation 欄位時，會自動帶出 Sub DB Rows 的內容__  
* 發布後，點 Main 上 FK link 可以檢視相關 row 的內容。  

_建立 Relation Property_
<span>
 {GoogleImage( '19gV04pW2VX5i9LRlVQznzYDbw9rUXd_d',  'insect_totem_logo_70x70.jpg', {width:'729px', height:'348px', hidden:true, degree:0})}
</span><br/>

_Relation 指向指定 Sub DB_ 
<span>
 {GoogleImage( '1qcu9ptqna5sYVzR_2N8v0Nm3TlkZOaPt',  'insect_totem_logo_70x70.jpg', {width:'747px', height:'504px', hidden:true, degree:0})}
</span><br/>

_填寫 Relation 時自動帶入 Sub DB Rows_
<span>
 {GoogleImage( '1erCbwAjJLyFoM43AmRMcGdlt_5NC11tG',  'insect_totem_logo_70x70.jpg', {width:'650px', height:'499px', hidden:true, degree:0})}
</span><br/>

### ___Rollup\(彙總)___ : 
* 當 Database 具一對多 Relation 關係時，可以建立 [Rollup Type Property](./Notion_View/#notion_Chart_View)。  
* 功能類似 Java 的 Stream。可以整合多個資料以指定的方式呈現，例如:sum, max, joining。   
* 不同 Type 的 Relation 可以有不同的處理工具。  
* __ … __ 🢂 Properties 🢂 選擇 Sub's column 🢂 Calculate 🢂 決定處理動作 🢂 show as 🢂 決定呈現方式\(%、圓餅)  
* 如: 在 backlog 顯示相關 tasks 的完成度。
* 與 [Chart View](./Notion_View/#notion_Chart_View) 比較
    * rollup: 為單一 row 下的子單元做計算。統計 subitems 數量/完成度。
    * chart: 為整份 database 做數量/完成度統計。  
        
### ___Calculations___:  
* Rollup 與 column 最下方的 [Calculations](https://www.notion.com/help/tables) 比較。
* Calculations(縱向計算): 依 column 屬性特性為該欄位進行計算處理。
* Rollup\(關聯資料計算): rollup 則是整合有 relation 的資料。
* [Formula](#notion_Formula) \(row 本身資料處理): 比較 Formula column，允許 row 將自身欄位進行運算進而提供整理資料。

### Column Filter 
* 同一份 DB 資料，可以用在不同地方。Filter 則可以為此客製不同呈現方式。  
* 建立 filters: 
    * column name 🢂 Filter 可建立基本 Filters。  
    * 已建立的 Filters 會在表格左上方呈現，點下拉選單的 __ … __ 可進入 'Add to Advanced Filters'。    
* 移除 filters: 
    * Filter Docker 右上 __ … __ 可叫出移除選項。  
* 操做: 
    * 建立 Filter 時， Docker 會依 column type 不同而顯示不同屬性。  
    * Filter Docker: 在 name 旁邊有 <span style={{color: '#0044FF'}}> **Operator 下拉選單** </span> 可供客製過濾條件。  
    * <b>Advanced Filter: 類似 SQL/DSL 操作語法</b>。   

### Calendar Property
* 當 Table/Database 至少有一個 Date Column 時便可轉成 Calendar Layout。
* 操作: 使用六點工具 __ ⁝⁝ __  
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
* 功能入口: table 右上 __ … __ > Customize My Database > Suggested > add  
* Sub-Items <span id="notion_subitems"> </span>
    * 添加 Subitems 特性後，在 Row Name 會出現 🠟 符號可用來設定 subitems。 
    * Database Table 下的 <span style={{color: '#0044FF'}}> **Row 可再拆分成 Sub-items \(closable, 子單元, tasks)** </span>。 
    * Table 最下方的 <span style={{color: '#0044FF'}}> **rollup 計算數量或加總時會以 main row 為準** </span>。\(忽略 subitems)
    * __ … __ > Customize > Sub-items 可以移除階層顯示獲設定 sub-items 顯示方式。 
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
    * create database > __ … __ > Customize > 查詢 Tasks > 轉換成 Task Database   
    * create database > __ … __ > Customize > 查詢 Sprints > 添加 Sprint Board 功能    
    * Task Database: 必須具有至少下列三種類型的 Properties status\(Status), assignee\(Person), and due date\(Date)，轉換時可一併建立。
* Sprint board : Sprint Task 規劃區 
    * Current : 顯示當前 working 中的 Sprint。  
    * Spring planning : 列出所有已建立的 Sprints，包含已完成的部分。  
    * Backlog : 未排入 Sprint 的 Backlogs
    * Spring name > __ … __ > Hide Group 可將指定 Sprint 移至 hidden group 區塊\(已完成)。
* Sprint Sidebar: Sprints 時程規劃區
    * Sprints All: 列出 Sprint 狀態完成度等摘要資訊    
    * Sprints Timeline: 用拖拉的方式行時程規劃，可以與 Google Calendar 搭配整合。      
    
### 編輯技巧
* 批次修改: 滑鼠點 Row 前方，或勾選前方 checkboxes。被選取部分會出現底色。可出現 Docker 用來批次編輯指定 column。
* Rollup and Calculations

