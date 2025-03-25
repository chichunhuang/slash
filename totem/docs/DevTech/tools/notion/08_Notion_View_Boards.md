---
title: Notion Board View 
description: Notion Board View
keywords: [Notion,Board View,Card View]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

## Notion Boards/Cards View 簡介
> 類似 Kanban 的檢視功能。  
> 適用於專案管理、任務追蹤和工作流程視覺化。  

_Board View 主要功能_
* 卡片式視覺化呈現工作流程：
    * Board View 是一種以看板形式呈現資料的方式，類似於 Kanban 板。
    * 它將資料組織成欄位（例如「待辦事項」、「進行中」、「已完成」），讓您能夠清楚地看到每個項目的狀態。
    * 資料內容會以卡片摘要呈現，需要時再展開。
* 拖曳操作：
    * 可以直接在欄位之間拖放項目，以更新其狀態。
    * 這種直觀的操作方式使任務管理變得非常靈活和高效。
* 自訂欄位和屬性：
    * 可以根據需求自訂欄位名稱和新增各種屬性（例如日期、負責人、標籤等）。
    * 可以根據不同專案的需求，依據屬性來將資料分組並靈活調整看板的結構。
* 過濾和排序：
    * Notion Board View 提供強大的過濾和排序功能，讓您可以輕鬆地找到所需的資訊。
    * 您可以根據屬性、日期、負責人或指定條件等方式來篩選和排序項目。

## Board View 建立

__建立 Board View__
* 在 database 右側的 <code>&nbsp; + &nbsp;</code> 🢂 <code>&nbsp; New View &nbsp;</code> 🢂 <code>&nbsp; Board &nbsp;</code>
<div>
 {GoogleImage( 'google_file_id',  '08_Notion_Views_Boards_01.png')}
</div>

__指定分類方式__
* 在 database 右側的 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Group by &nbsp;</code> 
* Board View Layout 其他調整
    * Card Preview: 卡片上的預覽內容 Page Cover/Content 
    * Card Size: 卡片大小 
    * Color Columns: 為分組上色 
    
<div>
 {GoogleImage( 'google_file_id',  '08_Notion_Views_Boards_02.png')}
</div>

    
__拖曳 Card 進行資料異動__
* 拖曳
<div>
 {GoogleImage( 'google_file_id',  '08_Notion_Views_Boards_03.png')}
</div>


## 多維 Boards: 
* Cards 二維呈現 與 [Gallery](./Notion_View_Gallery) 比較 <span id="Border_View"> </span>
* database <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Group/Sub-group &nbsp;</code> 🢂 可以<span style={{color: '#0044FF'}}> **自行設定分組與次群組** </span>方式，達到二維呈現。橫排與直排各一種分組方式

<div>
 {GoogleImage( 'google_file_id',  '08_Notion_Views_Boards_04.png')}
</div>

## Card 大小設定
* database 右側 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Card Size &nbsp;</code> 
* 設定 board layout 時可調整 card 大小。Large/Medium/Small。

## Card 快照    
* database 右側 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Card Preview &nbsp;</code> 🢂 <code>&nbsp; cover/content... &nbsp;</code> 
* snapshot: 每張 Card 代表著一個 Row，故 Board 在顯示內容縮圖時，Card 可以選擇顯示 cover/content/或 row 中多媒體 column。
    * Preview: 
    * img: 縮圖裁切: Layout 🢂 Fit Image or 滑鼠移至縮圖 🢂 Reposition
    * content: __ … __ 🢂 Properties 決定要顯示的欄位
    
## 加總與計數    
* calculations: 與 Table view 相同，一個 Column 下的 Cards 可以進行 Calculate。 
    * board column header 邊的數值即是 calculation。操作方法同 Table View。
    
## 隱藏 Cards    
* Visibility: 
    * __ … __ 🢂 Properties 🢂 Show/Hide
    * __ … __ 🢂 Group 🢂 Show/Hide
        
        
## Board View 適用場景摘要
* 專案管理（Project Management）：
    * 追蹤專案進度、分配任務、管理截止日期。
* 任務管理（To-Do List）：
    * 組織個人或團隊的待辦事項、追蹤任務狀態。
* 工作流程管理：
    * 視覺化工作流程、識別瓶頸、優化流程。
* 內容規劃（Content Planning）：
    * 管理內容日曆、追蹤文章進度、協作編輯。
* 產品開發：
    * 追蹤產品功能、管理 Bug、規劃迭代。
  