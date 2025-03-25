---
title: Notion Timeline View
description: Timeline View
keywords: [Notion,Timeline View]
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
        
* Timeline View 
    * 時間軸: ... > Layout > Show Timeline by 指定時間軸。           
    * 顯示區段調整: Timeline 右側的時間單位夏拉快捷與 today，用來管理 Timeline view 的<b>橫向呈現</b> by week/month/quater/year。而 Calendar view 則是經由 __ … __ 。
    * 資料數: 
        * row:  __ … __ > Load limit: 可限制 view 的<b>縱向呈現</b>，限制起始時一次可顯示的 rows 筆數。
        * column: Timeline 左上的 >> \(show table)，可調出 Table 的其他 toggled 欄位。 Database 的 __ … __ > Layout > Properties 則控制那些 columns 可顯示。
  