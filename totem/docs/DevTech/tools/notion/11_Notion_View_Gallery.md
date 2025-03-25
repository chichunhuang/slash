---
title: Notion Gallery View
description: Gallery View
keywords: [Notion,Gallery View]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

## Notion View
    Notion Database 功能的延伸，
    允許 Notion Database 依不同的目的改變視覺呈現。
    Database 預設以 Table View 呈現。

## Views
> 新建立 Inline Database 時會在主頁下自動建立 sub-page。page 預設會以 View of database 命名。建議即刻依 view + db 改名。  
> 整體而言: 
>> database layout 與 columns 的顯示隱藏，相關設定在 <b>右上的 __ … __</b>   
>> 與 view 相關的 specific 設定會放在 view <b>右上的相關快捷</b>   
>> Card 的相關設定或 peak 會在 card <b>右上方</b>   
>
> Layout/Peak: Row 的 Detail Page  
>> 資料庫頁面可以自行設定 Detail 呈現資訊\(一般頁面似乎無此功能)，因部分的 View 在呈顯時僅顯示指定摘要資訊，故提供 row detail 功能。    
>> Layout 指的是，滑鼠移至 name column 時所開啟的 Detail Page。這個 Page 是 Row 的一部分，不是 SubPage。  
>> 設定入口:  
>>  * 🖱hover > 移至標題上方 > Customize Layout  
>>  * 或是開啟 peak page > 右上 __ … __ > Customize Layout  

* Boards View\(三維呈現): Cards 三維呈現 與 [Gallery](#Gallery_View) 比較 <span id="Border_View"> </span>
    * database __ … __ > Group/Sub-group > 可以<span style={{color: '#0044FF'}}> **自行設定分組與次群組** </span>方式，達到三維呈現。
    * 設定 board layout 時可挑整 card 大小。Large/Medium/Small。
    * snapshot: 每張 Card 代表著一個 Row，故 Board 在顯示內容縮圖時，Card 可以選擇顯示 cover/content/或 row 中多媒體 column。
        * Layout > Card Preview > cover/content...   
        * img: 縮圖裁切: Layout > Fi Image or 滑鼠移至縮圖 > Reposition
        * content: __ … __ > Properties 決定要顯示的欄位
    * calculations: 與 Table view 相同，一個 Column 下的 Cards 可以進行 Calculate。 
        * board column header 邊的數值即是 calculation。操作方法同 Table View。
    * Visibility: 
        * __ … __ > Properties > Show/Hide
        * __ … __ > Group > Show/Hide
        
* Timeline View 
    * 時間軸: ... > Layout > Show Timeline by 指定時間軸。           
    * 顯示區段調整: Timeline 右側的時間單位夏拉快捷與 today，用來管理 Timeline view 的<b>橫向呈現</b> by week/month/quater/year。而 Calendar view 則是經由 __ … __ 。
    * 資料數: 
        * row:  __ … __ > Load limit: 可限制 view 的<b>縱向呈現</b>，限制起始時一次可顯示的 rows 筆數。
        * column: Timeline 左上的 >> \(show table)，可調出 Table 的其他 toggled 欄位。 Database 的 __ … __ > Layout > Properties 則控制那些 columns 可顯示。
   
* Calendar View
    * 時間軸: __ … __ > Layout > Show Timeline <b>by column</b> 指定時間軸。           
    * 顯示時間區間: 與 Timeline 的右上快捷下拉不同，Calendar 須經由 __ … __ > Layout > Show calendar <b>as month/week</b> 調整。    
    * 資料數: 
         * card(row): 每一 database row 會對應一張 card。同一時間相關 cards 會塞在同一個 cell，目前沒找到 toggle 功能。
         * column:  __ … __ > layout > properties，可設定 card 中的資訊欄位。 
    * 註: 語系決定每周第一天是周一或周日，無法客製。
    
* Gallery : 摘要與縮圖 cards 與 [Boards View](#Border_View) 比較 <span id="Gallery_View"> </span>
    * Gallery View 以 Cards 來摘要顯示 row 的 media column/page cover/page content。簡單說就是以 <span style={{color: '#0044FF'}}> **card 加 snapshot** </span> 呈現 subpage 的 snapshot。    
    * snapshot 選取: __ … __ > Layout > Card preview > column。    
    * 其他: card/database 右上角的 __ … __ 可更改縮圖顯示/Card size/顯示properties等常規操作。

* Chart View <span id="notion_Chart_View"> </span>
    * Chart View 會依指定 Column 計算 All Rows 的完成度。非付費版僅能建立一個 chart 使用。  
    * [Rollup column](#notion_rollup) 則會計算 Row 的子單位 \(Subitems/subtasks) 完成度，但 [Subitems 預設是關閉需自行添加相關功能。](#notion_subitems)
    * 注意: 免費版 chart 整理的資料上限是 200 groups，50 subgroups/subtasks/subitems。
    * 功能入口: 
        * chart: __ … __ > What to show 選取要進行 chart 統計用的欄位。   
        * subitems: table 右上 __ … __ > Customize My Database > Suggested > add  Sub-Items。  
        * Row Name 🠟 符號可用來設定 subitems。  
        * 添加 subitems 後 __ … __ > 會出現 What to show/include sub-items 選項。  
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
        * __ … __ > Style > More Options 建議開啟
        * Data Label: 資料上的說明,數值標示
        * Axis name: 顯示 XY 軸名稱與資訊,
        * Legend: 顯示圖例  
    * Dashboard: 將多個圖表與資料統合成 Dashboard。以更高的角度觀看全局，以方便監控專案進度、發現趨勢並做出決策。
        * [OKR Dashboard Notion 範例](https://www.notion.com/templates/category/free-okr-tracker-templates) 將多張圖表整合模板。
        * OKR objectives and key results-目標與關鍵結果    
        * Database 轉 Chart 摘要: Database 右方的 + > 建立新的 View > 最右側 __ … __ > Layout > View 類型選擇 Chart > 回上一層依據 Chart Type 設定相關參數。
        * 可搭配 [Block 並排](#notion_Notion_Column_Side_By_Side)自行設計 Dashboard 畫面。