---
title: Notion View 資料呈現方式
description: Notion Views
keywords: [Notion,Views]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

## Notion Views
    Notion Database 功能的延伸，
    允許 Notion Database 依不同的目的改變視覺呈現。
    Database 預設以 Table View 呈現。

## Views \(Layout)
> 新建立 Database 時會在主頁下自動建立 Database Page。  
> Page 預設會以 View of database 命名。建議即刻依 view + db 改名。  
> 若新增其他 Database View，則 Database Page 下會出現相關子分支。 

__Database Page Menu 相關結構__
<div>
 {GoogleImage( '157IWXKoY7-8I4NoB6HTO1ttwChSv_OnD',  '07_Notion_Views.png' , {width:'652px', height:'142px', hidden:true, degree:0})}
</div>

### 基本設定:   
Database Layout 與 Columns 的顯示隱藏，相關設定在 <b>右上的 <code> &nbsp;__ … __ &nbsp;</code></b>   
與 View 相關的 Specific 設定會放在 View <b>右上的相關快捷</b>或直接點 View Title   
Card 的相關設定或 peak 會在 card <b>右上方</b>   

__Database Views 相關設定入口__
* Layout 設定
<span>
 {GoogleImage( '1l6rcGUYQK9g6jAkT-a4VrU6GAErCMg4U',  '07_Notion_Views_02.png' , {width:'652px', height:'206px', hidden:true, degree:0})}
</span>
<span>
 {GoogleImage( '1IxBxbpxxWnR-Y1HDnDx1Wzq4l_Dm9sRJ',  '07_Notion_Views_03.png' , {width:'267px', height:'350px', hidden:true, degree:0})}
</span>

* 單一 View 專屬設定
<div>
 {GoogleImage( '1h_SHXBZ31C5-IdAc8XpdMzTAtaMGHAd-',  '07_Notion_Views_04.png' , {width:'372px', height:'272px', hidden:true, degree:0})}
</div>

### Peak 頁面:  
Peak 指的是 Row 的 Detail Page  
當滑鼠移至 Name Column 時所開啟的 Detail Page。  
這個 Page 是 Row 的一部分，不是 SubPage。  
此外，資料庫頁面可以自行設定 <b>Detail 頁呈現資訊與排版方式</b>，  
可能因部分的 View 在呈顯時僅顯示指定摘要資訊，故提供 Row Detail Page 功能。    

__Peak \(Detail Page)__
<div>
 {GoogleImage( '1vfxXgoDy8_nrZcqfoYmWJmTnpb071Ew9',  '07_Notion_Views_05.png' , {width:'652px', height:'257px', hidden:true, degree:0})}
</div>

### Detail Page UI 設定入口:  
 * 🖱hover > 移至標題上方 > Customize Layout  
 * 或是開啟 peak page > 右上 __ … __ > Customize Layout  
 * 拖拉 Panel 即可進行版面編排
 * 完成後記得右上角的 __Apply to all pages__ 進行儲存

__Peak \(Detail Page) 畫面調整__
<div>
 {GoogleImage( '1Ujj2BCVnDiX1X0hMtB2yHVuBTETF9snR',  '07_Notion_Views_06.png' , {width:'652px', height:'350px', hidden:true, degree:0})}
</div>

## Notion Views 類別
* [Boards View](./Notion_View_Boards)
* [Calendar View](./Notion_View_Calendar)
* [Timeline View](./Notion_View_Timeline)
* [Gallery View](./Notion_View_Gallery)
* [Chart View](./Notion_View_Chart)