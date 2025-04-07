---
title: Notion Gallery View
description: Notion DB 畫廊檢視模式
keywords: [Notion,Gallery View]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

## Notion Gallery View
> 基本上與 Board View 幾乎相同，只不過是 Gallery View 強調應用在作品的呈現上。  
> 以 Grid 網格來排列作品。類似 You Tube 的排列方式。
    
* Gallery : Gallery View Cards 與 [Board View Crard](./Notion_View_Boards) 比較 <span id="Gallery_View"> </span>
    * Gallery View 以 Cards 來摘要顯示 row 的 **<span style={{color: '#0044FF'}}> 多媒體欄位 </span>** /page cover/page content。簡單說就是以 <span style={{color: '#0044FF'}}> **Card 加 Snapshot** </span> 呈現 subpage 的預覽。    
    * 另外 Gallery 以 Grid 來排列內容，所以沒有依類別多維度分組功能。
    * 預覽設定: <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Card preview&nbsp;</code> 🢂 <code>&nbsp; column &nbsp;</code>。    
    * 其他: card/database 右上角的 <code>&nbsp; ... &nbsp;</code> 可更改縮圖顯示/Card size/顯示 Properties 等常規操作。

<div>
 {GoogleImage( '1Tuem5B5RW8byxqKRwO5s3mlzcGn0q-ae',  '11_Notion_Views_Gallery_01.png' , {width:'652px', height:'378px', hidden:true, degree:0})}
</div>

## Gallery 與 [Board](./Notion_View_Boards) 比較 <span id="Compare">&nbsp;</span>

| &nbsp; | **Boards View** | **Gallery View** |
|--------------|-------------------------|-------------------------|
| **適合用途** | 任務管理、團隊協作 | 適合 **視覺化**內容展示<br/><span style={{color: '#FF1100'}}>**作品集、相簿、產品目錄、概念展示**</span> |
| **呈現方式** | 以 <span style={{color: '#0044FF'}}> **欄位(Columns)** </span> 排列顯示卡片，每欄代表某個分類 | 以 <span style={{color: '#0044FF'}}> **網格(Grid)** </span> 排列顯示卡片 |
| **資料組織方式** | 依據某個 <span style={{color: '#0044FF'}}> **屬性(如狀態、類別)** </span> 來分欄排列卡片 | 每張卡片獨立存在，<span style={{color: '#0044FF'}}> **沒有欄位分類**</span> |
| **卡片顯示內容** | 主要顯示 <span style={{color: '#0044FF'}}> **標題/其他屬性資訊** </span><br/>可自訂哪些資訊可見 | 主要顯示 <span style={{color: '#0044FF'}}> **封面圖片/標題** </span><br/>適合有視覺重點的內容 |
| **篩選與排序** | 可根據不同 **屬性分類** 自動調整與欄位分組 | 只能按特定屬性篩選或排序，但不會自動分組 |