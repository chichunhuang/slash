---
title: Notion Chart View
description: Notion DB 圖表檢視模式
keywords: [Notion,Chart View]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

> Chart 可以用來計算 Database 的完成度。  
> 但，Chart View 這邊部分功能要收費......  


## Notion Chart View 使用場景與限制
* Notion 的 Chart View 提供以下圖表類型:
    * 直條圖 Vertical Bar Chart
    * 橫條圖 Horizontal Bar Chart
    * 折線圖 Line Chart
    * 圓餅圖 Donut Chart
* 功能特點:
    * 自訂軸線: 可設定 [X 軸和 Y 軸所對應的 Database Property](#Notion_Chart_XY)，以控制圖表的資料來源和呈現方式。​
    * 排序與篩選: 可依指定屬性對資料進行排序，並選擇性地顯示或隱藏特定類別。​
    * [樣式調整與資料標籤](#Notion_Chart_Style): 可調整圖表的顏色主題、樣式、高度、網格線、軸名稱等元素。​
    * 可自行組合成專案 [Dashboard](#Notion_Dashboard) 觀看專案全局
* 限制: 
    * 免費版 Chart 整理的資料上限是 200 Groups，50 SubGroups/SubTasks/SubItems。
    * __ <span style={{color: '#0044FF'}}> 非付費版一個 Workspace 僅能建立一個 Chart 使用 </span> __。
    * Chart View 不像其他 Notion Views，可以在圖表上拖曳編輯。

## Chart View 基本概念<span id="notion_Chart_View"> </span>
* 下列概念類似且易混淆: 
    * Chart View 會依指定 Column 計算 <span style={{color: '#0044FF'}}> Database 資料的加總</span> 結果。  
    * [Rollup column](./Notion_Database#notion_database_rollup) 則會計算 __Row 的關聯子 database__ 的總和、平均值、最大/最小值等特性。   
    * [SubItems](./Notion_Database#notion_database_Subitem) 指是 Database __Row 可拆分成多個 SubRows__。   
    * 參考 [Notion 資料表的突現性質 Emergent Property](./Notion_Emergent_Property)

## Notion Chart 建立: 
* Chart View: 
    * 建立 <code>&nbsp; + &nbsp;</code> 🢂 <code>&nbsp; Chart+ &nbsp;</code>
    * 選定 Chart Type
    * 選定 X/Y 軸: <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; What to show &nbsp;</code> 
    *  🢂 X axix / Y axis 設定要進行 Cart 製圖的軸資訊。   
* 註: [Sub-Items](./Notion_Database#notion_subitems): SubItem 指的是一筆任務(Database Row)，可再細分為多個相關聯子任務。
    * 在計算完成度時，可細分子任務是否是否合併或獨立計算。
    * 添加 [SubItem](./Notion_Database#notion_subitems) 功能: 
        1. 回到 Database 的 Table View 右上 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Customize My Database &nbsp;</code> 🢂 <code>&nbsp; Suggested &nbsp;</code> 🢂 <code>&nbsp; add  Sub-Items &nbsp;</code>。
        1. Row Name 🠟 符號可用來展開並增加 subitems。  
        1. 添加 subitems 後 <code>&nbsp; ... &nbsp;</code> 🢂 會出現 <code>&nbsp; Include sub-items &nbsp;</code> 選項  🢂 SubItem 是否獨立出現於 X 軸，進行計算時也視為完整的 row ，不與 parent 相依，各自獨立計算。  

<div>
 {GoogleImage( '1wkHKebSASMTwNhz1WyRJKGzpDQubIebl',  '12_Notion_Views_Chart_01.png' , {width:'652px', height:'390px', hidden:true, degree:0})}
</div>

## Bar Chart X/Y 軸調整: <span id="Notion_Chart_XY">&nbsp;</span>
> 當選擇 line/bar chart 時功能選項才會出現 X/Y 軸相關調校設定  
> 注意的是:  
> 1. Notion 允許使用者自行決定 **軸** 的單位，  
> 當以類別指定軸單位時，Noation 會重新將 Database 資料分組，並做資料轉換。  
> 例如: 以狀態為軸的單位，則資料會先依狀態分組再做渲染。  
> 2. **X/Y 軸間的邏輯相關性是由使用者決定，Notion 只負責渲染**。

* X 軸: 橫軸可以選擇區大分類\(X axis : what to show )。
    * 常見是以 Date、Status(Group, 重新分組呈現) 或 Row Name (Task Name/Unique/Distinct) 為橫軸。
    * 當 X Axis 分群條件(如: 選擇 status) 符合的 Rows 會被視為一體。
    * 這邊比較怪異的是，當有設定 Sub-Items (Sub-Rows) 時，是否要於 X 軸獨立顯示 Sub-Items 的設定介面位於 Y axis 設定處。
    
* Y 軸: 大分區下可再選定 bar 上的呈現方式\(bar 可再以顏色細分group)。通常 <span style={{color: '#0044FF'}}> **縱軸會呈現數量** </span> \(count)，若需要可再為各子類的做顏色標註(Group by Sub-Items)。
    * Y 軸: 目前想到的使用情境的都是採用計數，只是可以指定類別去重複，並分別顯示類別總數。<br/>其他非預設標示則需 <code>&nbsp; Style &nbsp;</code> 🢂 <code>&nbsp; More Options &nbsp;</code> 自行開啟。  
    * What to show: 要計算**總數**的項目。除了 count 外都是 distinct。
    * Group by: 當 X 軸是如 status 類的集合資料時，bar 上可再依據子項目細分區段的變色條件。<br/>例如 Group by Row 指定 SubItems Column，則每個 SubItem 可以分別標註不同色。
    * line chart 下會多出 Cumulative 設定，可依次累加數量。
    
* 顯示 Axis Name / Data Labels: 
    *  <code>&nbsp; Chart View &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Style &nbsp;</code> 🢂 <code>&nbsp; More Options &nbsp;</code> 🢂 <code>&nbsp; Axis name &nbsp;</code>
    *  <code>&nbsp; Chart View &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Style &nbsp;</code> 🢂 <code>&nbsp; More Options &nbsp;</code> 🢂 <code>&nbsp; Data Labels &nbsp;</code>

<div>
 {GoogleImage( '1vXOXAw4vmnOIpuqyEXslhVqOPbgM8UEy',  '12_Notion_Views_Chart_02.png' , {width:'238px', height:'745px', hidden:true, degree:0})}
</div>

## 圓餅圖 Slice 調整: 
* <code>&nbsp; Chart View &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Chart Type &nbsp;</code> 🢂 <code>&nbsp; Donut &nbsp;</code>
* 圓餅圖特有的設定
    * chart: <code>what to show</code> 資料大分組的種類。例如 Status。
    * slice: 類似 bar chart 的 Y 軸設定，指定每個片段代表的意義與數值。

<div>
 {GoogleImage( '10IEOHrWW5hpnm6si12jIVWErYgAi5T78',  '12_Notion_Views_Chart_03.png' , {width:'635px', height:'462px', hidden:true, degree:0})}
</div>

## UI 客製化: 
* 依 View 種類有不同設定 <span id="Notion_Chart_Style">&nbsp;</span>
* <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Style &nbsp;</code> 🢂 <code>&nbsp; More Style Options &nbsp;</code> 建議開啟
    * Data Label: 資料上的說明、數值標示
    * Axis name: 顯示 XY 軸名稱與資訊
    * Legend: 顯示圖例  

## Dashboard: <span id="Notion_Dashboard">&nbsp;</span>
> 將多個圖表與資料統合成 Dashboard。以更高的角度觀看全局，以方便監控專案進度、發現趨勢並做出決策。

* [OKR Dashboard Notion 範例](https://www.notion.com/templates/category/free-okr-tracker-templates) 將多張圖表整合模板。
* OKR objectives and key results-目標與關鍵結果    
* Database 轉 Chart 摘要: Database 右方的 <code>&nbsp; + &nbsp;</code> 🢂 建立新的 View 🢂 最右側 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; View &nbsp;</code> 類型選擇 Chart 🢂 回上一層依據 Chart Type 設定相關參數。
* 可搭配 [Block 並排](./NotionBasic#notion_Notion_Column_Side_By_Side)自行設計 Dashboard 畫面。
    
## Notion Chart 與 Rollup 比較 <span id="Notion_Rollup_Chart">&nbsp;</span>   
> [Notion Rollup](./Notion_Database#notion_database_rollup) 與 Chart 都可以用來得到統計結果  
> [Notion Rollup](./Notion_Database#notion_database_rollup) : 用來計算 Database Tables 一對多關係間，**多** 部分的數值特性。  
> Chart : 主要是得到單一個 Database 內資料的分群計算結果。因為 Row 可以拆分為 SubItems，讓資料結構似乎變成一對多關係。但實則為單一筆資料。   
> 為增加記憶，所以製表比較  
> 其他因集合資料所產生的集合特性可參考 [Notion 資料表的突現性質 Emergent Property](./Notion_Emergent_Property)  

| **功能**   |   **[Notion Rollup](./Notion_Database#notion_database_rollup)**   |    **Notion Chart** |
| --------  |  ------   |  ------   |  
| **主要用途**  |  從 Database 中彙總資料<br/>例如計算總和、平均值、最大/最小值等   |  以圖表視覺化 Notion Database 中的資料<br/>例如總數、百分比   |  
| **資料來源**  |  必須來自 關聯屬性(Relation) 的 Database  |  直接從當前 Database 讀取資料  |  
| **支援的資料類型**  |  數字、日期、文字(部分計算適用)  |  數字類型資料  |  
| **視覺化方式**   |  僅以單一數值顯示(如總和、平均值)  |  支援直條圖、折線圖、圓餅圖等多種視覺化方式  |  
| **互動性**  |  無法點擊展開查看詳細資料  |  可以點擊查看資料點的細節  |  
| **編輯資料**  |  需要在 Relation Database 內修改原始資料   |  需要切換到其他 View 修改資料  |  
| **限制**  |  必須要有 Relation Property 才能使用，無法直接應用於單一資料庫  |  免費版一個 Workspace 只能建立一個 Chart，過多資料可能影響載入速度  |  
| **使用案例**  |  需要從 Relation Database 提取和計算資料，<br/>例如:某客戶的總訂單金額、計算某專案的總成本、任務數量   |  視覺化方式呈現資料，例如:銷售趨勢折線圖、 KPI 追蹤、趨勢變化、比例比較   |  