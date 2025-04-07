---
title: Notion Calendar View 
description: Notion DB 日曆檢視模式
keywords: [Notion,Calendar View]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

## Notion Database Calendar View
> 這個主題是 Notion Database 以日曆來呈現記事資訊。  
> 簡單的說，就是把資料放到相對應的日曆日期之內。
> 依據 database 中的 Date Property 來安排事件，類似<b>傳統行事曆的介面</b>。
> 
> 若想了解 [Notion 與其他日曆軟體整合，如與 Google Calendar 整合](./Notion_Calendar) 請參考 [Notion Calendar](./Notion_Calendar) 章節。  

<div>
 {GoogleImage( '1wkzj3powUgGHnU-qVqbAImSb-SibTCyn',  '09_Notion_Views_Calendar_01.png' , {width:'525px', height:'645px', hidden:true, degree:0})}
</div>


## 日曆檢視模式特色
* 依日期顯示：依據日期屬性自動將事件對應到日曆日期
* 月/週視圖：可切換為 Monthly / Weekly View 精簡畫面。
* 可 <span style={{color: '#0044FF'}}> __直接拖曳事件來變更事件時間__ </span>。
* 可自行決定要顯示在日曆上的 Database Row Properties。
* 底層仍是 Notion Database 故如同 Table View 可將資料進行型篩選與排序。
* 付費版有提供整合提醒與通知，主動會發送通知提醒即將到來的事件。


## 日曆檢視模式相關設定
* 時間點: 指定事件放置到特定日期。<code>&nbsp; … &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 Show Calendar <b>by column</b> 指定 Date Property。
* 視景調整: 與 Timeline 的右上快捷下拉不同，Calendar 須經由 <code>&nbsp; … &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 Show Calendar <b>as month/week</b> 調整視景。 

__指定事件放置到特定日期__

<div>
 {GoogleImage( '1GqjkqPdptLopEoYVW-UILYdzBYbS6elQ',  '09_Notion_Views_Calendar_02.png' , {width:'652px', height:'369px', hidden:true, degree:0})}
</div>
<br/>

__定顯示資訊__

<div>
 {GoogleImage( '1q7PTFLI5-HiIwKNA_H7EIcmsa4U3FmN8',  '09_Notion_Views_Calendar_03.png' , {width:'652px', height:'421px', hidden:true, degree:0})}
</div>
<br/>

__視景切換__

<div>
 {GoogleImage( '1uqp1zZsGa4imDSwLeuJl79AW4TLn9LiR',  '09_Notion_Views_Calendar_04.png' , {width:'652px', height:'338px', hidden:true, degree:0})}
</div>
<br/>