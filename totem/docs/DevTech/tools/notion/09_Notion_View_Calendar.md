---
title: Notion Calendar View 
description: Notion Calendar View
keywords: [Notion,Calendar View]
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
  
* Calendar View
    * 時間軸: __ … __ > Layout > Show Timeline <b>by column</b> 指定時間軸。           
    * 顯示時間區間: 與 Timeline 的右上快捷下拉不同，Calendar 須經由 __ … __ > Layout > Show calendar <b>as month/week</b> 調整。    
    * 資料數: 
         * card(row): 每一 database row 會對應一張 card。同一時間相關 cards 會塞在同一個 cell，目前沒找到 toggle 功能。
         * column:  __ … __ > layout > properties，可設定 card 中的資訊欄位。 
    * 註: 語系決定每周第一天是周一或周日，無法客製。
    