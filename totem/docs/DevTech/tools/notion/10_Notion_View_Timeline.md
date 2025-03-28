---
title: Notion Timeline View
description: Notion DB 時間線檢視模式
keywords: [Notion,Timeline View]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

## Notion Timeline View
> Timeline View 上可自行選擇要呈現的 Properties。<br/>
> 時間軸上的 <span style={{color: '#0044FF'}}>點標記</span> 可對應到指定 Data Property。<br/>
> 時間軸上也可使用 <span style={{color: '#0044FF'}}>區間標記</span>，需自行選取起時始間與結束時間。   
        
* Timeline View 
    * 時間軸: <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Show Timeline by &nbsp;</code> 指定時間軸上顯示的資訊主題。           
    * 顯示區段調整: Timeline 右側的時間單位下拉快捷與 today 按鈕，用來管理 Timeline View 的<b>橫向呈現</b> by week/month/quater/year。
    * 註: [Calendar View](./Notion_View_Calendar) 則是經由 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Show Calendar as Month/Week &nbsp;</code> 。
    * 資料數: <span style={{color: '#0044FF'}}> __Timeline__ </span>可以自行設定版面上的資料豐度，隱藏 Row 數量或隱藏部分 Column 訊息。
        * Row:  <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Load limit &nbsp;</code> 可暫時限制 view 的<b>縱向呈現</b>，限制起始時一次可顯示的 rows 筆數。若需要可經由 <code>&nbsp; Load More &nbsp;</code> 展開。
        * Toggle: Timeline 左上的 <code>&nbsp; >> &nbsp;</code> \(show table)，可調出 toggled 資訊。 
        * Column: 與 Database 其他 Views 相同，可選擇隱藏或顯示 Row 部分欄位: <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Properties &nbsp;</code> 控制 column visibility。

__設定時間軸主題:單一事件時間__
<div>
 {GoogleImage( 'google_file_id',  '10_Notion_Views_Timeline_01.png')}
</div>  

__設定時間軸主題:時間區間__
<div>
 {GoogleImage( 'google_file_id',  '10_Notion_Views_Timeline_02.png')}
</div>  

__顯示區段調整__
<div>
 {GoogleImage( 'google_file_id',  '10_Notion_Views_Timeline_03.png')}
</div>  

__顯示資料筆數__
<div>
 {GoogleImage( 'google_file_id',  '10_Notion_Views_Timeline_04.png')}
</div>  

__Toggle__
<div>
 {GoogleImage( 'google_file_id',  '10_Notion_Views_Timeline_05.png')}
</div>