---
title: Notion Sprint
description: Notion Sprint and Task 工作管理
keywords: [Notion,Scrum,XP]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

## Sprints and Tasks 工作管理<span id="notion_tasks"> </span>

    使用這個特性需先對 Agile Development / XP / Scrum 等有一些基本概念。  
    這個功能可以用來輔助建立類似 Sprint dashboard 等介面，  
    Scrum 所需基本功能該有的都整合了，只差 issue tracking 功能需自行設計表單等。 
    當 Task 建立後，僅需使用滑鼠拖拉或點擊便可完成剩餘的管理動作。  


## 建立 Sprint Dashboard

> 使用 Sprint 功能會需要一個 Notion Database 來記錄所有 Tasks。  
> 下方範例建立一個名為 All Tasks 的 Database。  
> Notion 可為此 Database 添加 Tasks/Sprints 相關功能與管理介面。  

* 建立 Task Database: 
    * create database 🢂 <code>&nbsp;__…__ </code> 🢂 <code>Customize</code> 🢂 <code>Tasks</code> 🢂 <code>轉換成 Task Database</code>   
    * create database 🢂 <code>&nbsp;__…__ </code> 🢂 <code>Customize</code> 🢂 <code>Sprints</code> 🢂 <code>添加 Sprint Board 功能</code>    
    * Task Database: 必須具有至少下列三種類型的 Properties status\(Status), assignee\(Person), and due date\(Date)，轉換時可一併建立，或指向同類型 Property/Column。
    
* Sprint Dashboard 與其他添加功能建立與呈現上有些差異。
    * database 轉換成 Sprint Dashboard 後，Sidebar 會多出 __Sprint board / Sprints__ 。  
    * database 會多出 __Current Sprint / Spring planning / Backlog__ 三張 Sheets。  
    * 註: 一般特殊功能添方式: table 右上 <code>&nbsp;__…__ </code> 🢂 <code> Customize My Database </code> 🢂 <code> Suggested </code> 🢂 <code> add </code> 🢂 相關功能

__Sprint Dashboard: 1. Customize Database__
<span>
 {GoogleImage( '1L8hgvlfnRKW45L-uK9RyppLZPDxa6aa9',  '05_Notion_Sprint_01.png' , {width:'652px', height:'372px', hidden:true, degree:0})}
</span>

__Sprint Dashboard: 2. Add Task Functions__
<span>
 {GoogleImage( '1Y885oAq_uBjR3eJU7Raxf550y3mGJt4B',  '05_Notion_Sprint_03.png' , {width:'652px', height:'296px', hidden:true, degree:0})}
</span>

__Sprint Dashboard: 3. Add Sprint Functions__
<span>
 {GoogleImage( '1AcNBgKWNEYFQxwxgx_QvEJG0zdQSKpVJ',  '05_Notion_Sprint_04.png' , {width:'652px', height:'354px', hidden:true, degree:0})}
</span>   

__Sprint Dashboard: 4. Complete__
<span>
 {GoogleImage( '1NqCk-aebjYBJroe1zZa0dFGFaIfFjYgP',  '05_Notion_Sprint_05.png' , {width:'264px', height:'379px', hidden:true, degree:0})}
</span>    


  
## Sprint board : Sprint Task 規劃區 
* Current : 顯示當前 working 中的 Sprint。  
* Spring planning : 列出所有已建立的 Sprints，包含已完成的部分。
    * 直接拖拉 Task 可將 Task 加入指定 Sprint。  
* Backlog : 未排入 Sprint 的 Backlogs。
* Spring name 🢂 <code>&nbsp;__…__ </code> 🢂 Hide Group 可將指定 Sprint 移至 hidden group 區塊\(暫時隱藏)。
* Spring name 🢂 <code>&nbsp;__…__ </code> 🢂 <code>Show Aggregation</code> 可在標題顯示下方 Tasks 加總數量。
  
__Dashboard: Current__
<span>
 {GoogleImage( '1BPJpqO2JeYumetrWla9iDg87amNTJ-2q',  '05_Notion_SprintBoard_07.png' , {width:'652px', height:'263px', hidden:true, degree:0})}
</span>

__Dashboard: Planning__
<span>
 {GoogleImage( '1IvWDKKLnNnyMASM9PytzrFs59SyGvPHA',  '05_Notion_SprintBoard_06.png' , {width:'652px', height:'519px', hidden:true, degree:0})}
</span>


## Sprint Sidebar: Sprints 時程規劃區
* Sprints All: 列出 Sprint 狀態完成度等摘要資訊    
* Sprints Timeline: 用拖拉的方式行時程規劃，可以與 Google Calendar 搭配整合。  

__Sprints: All__
<span>
 {GoogleImage( '1BPJpqO2JeYumetrWla9iDg87amNTJ-2q',  '05_Notion_SprintBoard_07.png' , {width:'652px', height:'263px', hidden:true, degree:0})}
</span>

__Sprints: Timeline__
<span>
 {GoogleImage( '1zUZvjzuV3emvvUWGZlFbWs23960hMAom',  '05_Notion_SprintTimeline_08.png' , {width:'652px', height:'234px', hidden:true, degree:0})}
</span>