---
title: Notion 資料集的集合性質
description: Notion Emergent Property
keywords: [Notion,Rollup,SubItem,Calculation]
---

## Notion 資料表的突現性質
> 資料表的突現性質 Database Emergent Property 這個名詞是我自創的......  
> 借用生物學的 Emergent Property 概念。  
> 我指的是，當多筆資料收納成資料集時所先出現的一些特性。  
> 例如: 總和、平均值、最大/最小值等特性。  
> Notion 在功能實作上，表現在 Rollup、Relation、Calculations、Subitem、Chart 等相關實作之中。  
> Formula vs Filter

## 一句話解釋: <span id="Notion_Example">&nbsp;</span>
> 情境

<div>
 {GoogleImage( 'google_file_id',  '13_Notion_Emergent_Prop_01.png')}
</div>

<div>
 {GoogleImage( 'google_file_id',  '13_Notion_Emergent_Prop_02.png')}
</div>



* Relation: 指的是 Notion Database 中的 PK/FK 對應關係。主表中列出子表 PK 清單的欄位。     
* Rollup: 將一對多關聯式資料表中，多方(FK)的資料彙總成單一數值。
* Chart: 將 Database 資料分組後，以圖表顯示各組的數量或百分比。 
* Calculation: 將 Database 指定 Column 進行加總。
* Formula: 將 Database 的單一 Record Row 進行 columns 間的計算。  


    個人總稅金 
    sum(prop("個別房屋稅金"))
    
    含子女總稅金
    sum(  prop("Sub-item").flat().map(current.prop("個人總稅金")) ,   sum(prop("個別房屋稅金")))


> 相關設定
Houses Relation Property:

Rollup 

----- 



* [SubItems](./Notion_Database#notion_database_Subitem) 只是 Database __Row 可拆分成多個 SubRows__。  
* Formula



* [Rollup column](./Notion_Database#notion_database_rollup) 則會計算 __Row 的關聯子 database__ 的總和、平均值、最大/最小值等特性。   
Formula
* Chart View 會依指定 Column 計算 <span style={{color: '#0044FF'}}> Database 資料的加總</span> 結果。  
* [Rollup column](./Notion_Database#notion_database_rollup) 則會計算 __Row 的關聯子 database__ 的總和、平均值、最大/最小值等特性。   
* [SubItems](./Notion_Database#notion_database_Subitem) 只是 Database __Row 可拆分成多個 SubRows__。  

| **功能名稱** | **資料來源** | **資料標的** | **運作方式** | **主要功能與目的** |
| ---- | ---- | ---- | ---- | ---- |
| Relation | Notion Database | 連結不同資料庫中的項目 | 透過關聯欄位建立連結 | 建立資料庫間的關聯性，使不同資料庫的項目相互參照 |
| Rollup | Relation 欄位 | 被關聯的數據 | 透過 | Relation | 取得的數據進行匯總計算 | 將關聯資料進行計算，例如計數、平均、最小/最大值等 |
| Calculations | Database 欄位 | 數值或日期欄位 | 直接在資料庫內的屬性欄位進行計算 | 提供基本統計，如總和、平均值、計數等 |
| Subitem | Notion | Database | 隸屬於父項目的子項目 | 透過層級關係建立階層式結構 | 管理子任務、子內容，使資料層次更清晰 |
| Chart View | Database | 數據欄位 | 以視覺化圖表呈現數據 | 讓使用者透過圖表方式分析和比較資料 |
| Formula | Notion Database | 文字、數字、日期等欄位 | 透過函數運算欄位值 | 進行自動計算，如條件判斷、數值運算、字串處理等 |
| Filter | Database Database | 內的項目 | 設定條件篩選出符合條件的項目 | 控制資料庫顯示內容，以利於管理與查找 |