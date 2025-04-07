---
title: Notion Board View 
description: Notion DB 卡片檢視模式
keywords: [Notion,Board View,Card View]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

## Notion Boards/Cards View 簡介
> 類似 <span style={{color: '#0044FF'}}> __Kanban__ </span> 的檢視功能。  
> 適用於專案管理、任務追蹤和工作流程視覺化。  
>   
> Notion 還有另一個也是以 Cards 來做資料呈現的 Layout，[Gallery View](./Notion_View_Gallery#Compare)。  
> 由名稱 [Gallery 畫廊](./Notion_View_Gallery#Compare) 可得知主要是用來放作品集的版面。  
> 由於目的不同所以能呈現的資訊也些差異。  
> 🢂 [Board v.s. Gallery 比較](./Notion_View_Gallery#Compare)

_Board View 主要功能_
* 卡片式視覺化呈現工作流程：
    * Board View 是一種以看板形式呈現資料的方式，類似於 Kanban 板。
    * 它將資料組織成欄位(例如 待辦事項/進行中/已完成)，讓您能夠清楚地看到每個項目的狀態。
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

## Board View 建立

__建立 Board View__
* 在 database 右側的 <code>&nbsp; + &nbsp;</code> 🢂 <code>&nbsp; New View &nbsp;</code> 🢂 <code>&nbsp; Board &nbsp;</code>
<div>
 {GoogleImage( '1cnBL_BFhOe2ySQQjP6uhbNZDammqoWWW',  '08_Notion_Views_Boards_01.png' , {width:'623px', height:'271px', hidden:true, degree:0})}
</div>

__指定分類方式__
* 在 database 右側的 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Group by &nbsp;</code> 
* Board View Layout 其他調整
    * Card Preview: 卡片上的預覽內容 Page Cover/Content 
    * Card Size: 卡片大小 
    * Color Columns: 為分組上色 
    
<div>
 {GoogleImage( '1tpTNN_Tzj0obCA2vfDQD3s4zB5dNVEQG',  '08_Notion_Views_Boards_02.png' , {width:'278px', height:'467px', hidden:true, degree:0})}
</div>

    
__拖曳 Card 進行資料異動__
* 拖曳
<div>
 {GoogleImage( '1QlvdQgpneo4wTVa84PDkD1jr0AtLiclK',  '08_Notion_Views_Boards_03.png' , {width:'652px', height:'319px', hidden:true, degree:0})}
</div>


## 多維 Boards: 
* Cards 二維呈現 與 [Gallery](./Notion_View_Gallery) 比較 <span id="Border_View"> </span>
* database <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Group/Sub-group &nbsp;</code> 🢂 可以<span style={{color: '#0044FF'}}> **自行設定分組與次群組** </span>方式，達到二維呈現。橫排與直排各一種分組方式

<div>
 {GoogleImage( '1PrUsEvsM33c_quUh3DB9T30-u7Pq0v-X',  '08_Notion_Views_Boards_04.png' , {width:'652px', height:'315px', hidden:true, degree:0})}
</div>

## Card 大小設定
* database 右側 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Card Size &nbsp;</code> 
* 設定 board layout 時可調整 card 大小。Large/Medium/Small。

## Card 預覽快照    
* Database 右側 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Card Preview &nbsp;</code> 🢂 <code>&nbsp; cover/content... &nbsp;</code> 
* Preview: 每張 Card 代表著一個 Row，故 Card 在顯示內容縮圖時，可以選擇顯示 Row 的 cover/content/或當中多媒體 column 來當作預覽。
    * Preview: 
        * Cover 圖片: 為統一畫面風格還可自行裁切縮圖: <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Fit Image &nbsp;</code> or 滑鼠移至<code>&nbsp; 縮圖 &nbsp;</code> 🢂 <code>&nbsp; Reposition &nbsp;</code> 顯示區域
        * Content: <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Properties &nbsp;</code> 決定 Card 上要顯示的欄位。
    
<div>
 {GoogleImage( '1X0x9HoEWMjvMtix82ILamvEHVNtixcnz',  '08_Notion_Views_Boards_05.png' , {width:'652px', height:'482px', hidden:true, degree:0})}
</div>
    
<div>
 {GoogleImage( '1iIn8lFCdkVNomrKIW1fPzT9l7bXdkld2',  '08_Notion_Views_Boards_06.png' , {width:'652px', height:'425px', hidden:true, degree:0})}
</div>


## 加總與計數    
* Calculations: 與 Table view 相同，一個 Column 下的 Cards 可以對資料進行 Calculate。 
    * Board Column Header 邊的數值即是 calculation 結果。操作方法同 [Table View](./Notion_Database#notion_database_Calculation)。

<div>
 {GoogleImage( '1Y0BEGVXDi8iRdudS_HhiikJDrNPd4HLE',  '08_Notion_Views_Boards_07.png' , {width:'579px', height:'268px', hidden:true, degree:0})}
</div>


## 隱藏 Cards 資訊
* 設定要顯示的 Row Property: <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Properties &nbsp;</code> 🢂 <code>&nbsp; Show/Hide &nbsp;</code>
* 設定隱藏 Board 中的指定類別: <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Group &nbsp;</code> 🢂 <code>&nbsp; Show/Hide &nbsp;</code>
        
<div>
 {GoogleImage( '1tqcLPEcXlmGHgc-ZvBgYZCJGaHKWNJr7',  '08_Notion_Views_Boards_08.png' , {width:'652px', height:'406px', hidden:true, degree:0})}
</div>