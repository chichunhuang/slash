---
title: Notion 與 Google Drive 整合
description: Notion 與 Google Drive 整合
keywords: [Notion,Google Drive]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage";

## Google Drive 相關匯入/同步功能
> 目前試用下，  
> 功能會隨檔案種類以及呈現方式而在介面上有些許差異，  
> 不知是否因為免費版，  
> 所以部分功能發生無法 import 僅能同步預覽。   
> 部分指令功能受限制: 出現 系統已封鎖這個應用程式，不然就回應 403。    
> 另外，左側欄的 Settings 下 menu 中也出現兩個 Connections 。

* 帳號連結: <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Import &nbsp;</code> 🢂 <code>&nbsp; Google Docs &nbsp;</code> 🢂 <code>&nbsp; Connect Google Account &nbsp;</code> 🢂 <code>&nbsp; 選擇帳號 </code>

## Google Account 連結設定
<div>
 {GoogleImage( '1Ptt6QwZcd6tCgDD5L2fYfRT_l_KkQ66T',  '17_Notion_ImportExport_08-1.png' , {width:'652px', height:'249px', hidden:true, degree:0})}
</div>

* 插入 Google Drive 方式 (會要求連結 google 帳號)
    * 複製 Google doc link，直接貼在 Notion 🢂 可再細選[呈現種類](#GDrive_Display)
    * Block 填入 <code>&nbsp; /Google Drive &nbsp;</code> 指令，會開啟已連結帳號檔清單。
    
## Googel 線上文件網址
<div>
 {GoogleImage( '1BRusRhHZWdkmeIgsZd9FOdZDJcNya5rk',  '17_Notion_ImportExport_09.png' , {width:'652px', height:'236px', hidden:true, degree:0})}
</div>

## Googel Drive 咒語
<div>
 {GoogleImage( '1eZ1f7fyRRfAkAx73CAYo_jBd6t2SFFYB',  '17_Notion_ImportExport_10.png' , {width:'473px', height:'171px', hidden:true, degree:0})}
</div>
<div>
 {GoogleImage( '1aKm7V17HOt-y1QdmW9PR3LoWGCQMUXFo',  '17_Notion_ImportExport_11.png' , {width:'652px', height:'285px', hidden:true, degree:0})}
</div>

<br/>

* 插入 Google 文件呈現種類 <span id="GDrive_Display">&nbsp;</span>
    * URL: 單純的 URL link 指向 google doc.
    * Preview: 文件__首頁縮圖__，點縮圖下方可進入 google 文件.
    * Mention: 與 URL link 類似，但 mouse over 時，會出現原文件的縮圖。與 Notion 的 Mentioned Page 不同.
    * Block 右側的 __ … __ 有提供呈現方式轉換。
    * Embedded: 將只份文件嵌入，但不可編輯，僅可瀏覽以及切換在文件頁面，同樣點預覽下方可進入轉導到原始檔案.     