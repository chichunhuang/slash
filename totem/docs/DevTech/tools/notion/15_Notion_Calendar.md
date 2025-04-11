---
title: Notion Calendar
description: Notion Calendar
keywords: [Notion, Calendar]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage";

# Notion 筆記之外
> Notion 除了大家熟知的的電子筆記本之外，還有一些官方提供的其他產品。  
> 這些產品也可以與 Notion Workspace 相整合。   
> 相關產品可參考 [Notion 官網下的 Products 清單](https://www.notion.com/zh-tw/product)。  
> Notion workspace / Calendar / Wikis / Mail / Docs / AI / Projects / Sites / [Forms](./Notion_Form)  


## Notion Calendar 
![Notion Calendar](https://play-lh.googleusercontent.com/ZpieHVHj503tx4YoFlsHOtjQ3edA9FE_yLocxpEecO0TQq0VcKbcsZ4fvjA9LzcRdmg=w90-h180-rw "Notion Calendar: 官網 log 會隨時間變換") <span style={{color: '#CECECE'}}>__ ⇦ Notion Calendar 專屬 Logo__ </span>
> 目前理解: Notion Calendar 是一個可整合多方來源的日曆工具。  
> 例如:   
> Notion Calendar 可整合 <code>5 個</code>以內 Google Calendar / Microsoft Outlook Calendar / App Calendar 的資料，  
> 也可以自動將 Notion database 中出現的時間資訊附加到 calendar 之中。  
> 編輯時 app 也可與指定平台間自動同步。  
> 簡單的說，這個 app 是<code>日曆的整合平台</code>。     

* 注意事項摘要:      
    * [Notion Calendar 官方參考資料](https://www.notion.com/help/category/notion-calendar)
    * Notion Calendar 是與 Workspace 相互連結，所以不同 workspaces 各自獨立不相依。
    * Workspace 的相依 Notion Calendar 可以與多個 google calendars 相連結。
    * <code>One workspace multi-notion calendars. One notion calendar multi-linked calendars</code>.
    * Notion Calendar 可同步 Workspace 中日期資訊。  
    * Mobile 版部分功能有受限，此處以 Browser 為主。
    * __整合後的日曆資料可以在__ Notion Workspace 的 Home 以 Dashboard 自動整理呈現。 
        * (左側 sidebar 🢂 Home) 

## Notion Calendar UI

__Calendar 左側欄__
* 分為四區塊
    * 小月曆供快速切換時間
    * 帳號區塊:列出所有相關的第三方日曆連結帳號
    * Workspace 管理區: 列出會進行資料同步的 Notion 工作區
    * Notion 官方的其他 App 快速連結

<div>
 {GoogleImage( '1dadg17fhEOZKh_Skh_BujTqvxz8gFouj',  '15_Notion_Calendar_12_left_sidebar.png' , {width:'211px', height:'638px', hidden:true, degree:0})}
</div>

__Calendar 右側欄__
* 分為三區塊
    * 搜尋列: 可直接以關鍵字搜尋活動
    * 活動/會議提醒: 即將起始的活動提醒
    * 功能提示與設定區 
    * 動態變換區塊:會隨著滑鼠選擇項目而跟著跳出相關訊息區

<div>
 {GoogleImage( '16KkAURZ1ULPVKa4MyopAeK4MxF0NR1t5',  '15_Notion_Calendar_13_right_sidebar.png' , {width:'256px', height:'690px', hidden:true, degree:0})}
</div>    

## Notion Calendar 帳號設定
* 因為支援的日曆中，我較常使用的是 Google Calendar。所以這邊只做 Google Calendar 關聯筆記。
* 前提需求: __ <span style={{backgroundColor: '#c3c4ff'}}>有 Google 帳戶才能使用 Notion 日曆</span>__
* 設定可粗分為兩類動作:
    * Notion Calendar 與 Google Calendar 設定
    * Notion Calendar 與 Notion Workspace/Notion Database with date property 設定
* [帳號移除設定](#Calendar_Acc_Remove)    

## Calendar 帳號連結設定
__Notion Calendar 帳號與 Google Calendar 建立與連結:__ 
* Notion Calendar 功能需事先建立 Notion Calendar 帳號。
* Workspace 左側 <code>Sidebar 下方動態 Logo</code> 🢂 <code>Explore/Open Notion Calendar</code> 🢂 依據指示建立與並與 Google Account 建立連結即可。

<div>
 {GoogleImage( '12nNk2w3cmn4NbK0dh5vhMIDJ9toN2DL4',  '15_Notion_Calendar_01.png' , {width:'405px', height:'135px', hidden:true, degree:0})}
</div>

<div>
 {GoogleImage( '1MrxklrSeXcddt4aAAvpCZRJnRWsZdDPg',  '15_Notion_Calendar_02.png' , {width:'438px', height:'175px', hidden:true, degree:0})}
</div>

<div>
 {GoogleImage( '1JHiAFBC2d0CuWvopX2sqM-0BkH3OdYUE',  '15_Notion_Calendar_03.png' , {width:'395px', height:'217px', hidden:true, degree:0})}
</div>


## Calendar 次要帳號設定
__Calendar 中新增其他次要 Google 帳號__ 
* 一個 Notion Calendar 可以連結多個 Google 帳號，並連接帳號下多個 Google Calendars。使用時除了預設主帳號外都稱為次要帳號。 
* 新增次要 Google Accounts 方式: 
    1. 左下 Logo 進入 Notion Calendar App (會切換到 Notion Calendar App)
    1. Calendar 左側 Dock Panel 的 <code>&nbsp; email 帳號 &nbsp;</code> 🢂 <code>&nbsp; … &nbsp;</code> 🢂 <code>&nbsp; 管理日曆帳號 &nbsp;</code> 🢂 <code>&nbsp; 整合 &nbsp;</code> 🢂 <code>&nbsp; 日曆 &nbsp;</code> 🢂 <code>&nbsp; 新增日曆帳號 &nbsp;</code> 
    2. 移除或更改 Primary account 皆位於管理日曆帳號功能下

<div>
 {GoogleImage( '1PbUJbDw6TEwJsj1HFNwigB95MNBcRA2G',  '15_Notion_Calendar_04.png' , {width:'326px', height:'104px', hidden:true, degree:0})}
</div>

<div>
 {GoogleImage( '1UfX7KTTolLjk5xN1a9g6elPnhy9BUQFD',  '15_Notion_Calendar_05.png' , {width:'459px', height:'119px', hidden:true, degree:0})}
</div>

<div>
 {GoogleImage( '1gLwUXHkUOcnvo0FKZ3l5Sl0kYggAREWh',  '15_Notion_Calendar_06.png' , {width:'652px', height:'426px', hidden:true, degree:0})}
</div>

## Calendar 與 Workspace 連接
> 當 Workspace 與 Calendar 連結後，Workspace 中與時間相關的資訊可自動同步到 Calendar 之中。

### __Calendar 與 Workspace 連接:__ 
* 這邊用來設定可自動加入 Calendar 活動的相關聯(主要/次要) Workspace。
* Workspace 中與時間相關的 View 中的事件如 Timeline/Calendar/Sprint 時間資訊會自動加入 Notion Calendar。  
1. 登入 Notion Account 🢂 
1. 切換至 Calendar (左下 Logo) 🢂 
1. Notion Calendar 左側 Sidebar 🢂 
1. Notion 工作空間 ... 🢂 
1. 管理工作空間 🢂 新增或異動

<div>
 {GoogleImage( '1n_wDOq4kHVXOwO6ZfVMQ0WVFmQH_oxxo',  '15_Notion_Calendar_07.png' , {width:'507px', height:'148px', hidden:true, degree:0})}
</div>

<div>
 {GoogleImage( '1IFFwaHuE-IyXZC6znHdsexJde2J5Hxe7',  '15_Notion_Calendar_08.png' , {width:'652px', height:'459px', hidden:true, degree:0})}
</div>
<span style={{color: '#CECECE'}}> 於 Notion 自行上傳的 Workspace Logo 在此處會出現顯示錯誤。</span> 

### __Calendar 與 Database 連接:__ 
* Calendar 左側 Sidebar 🢂 <code>&nbsp; Notion Account &nbsp;</code> 🢂 <code>&nbsp;  … &nbsp;</code> 🢂 <code>&nbsp; Add Notion Database &nbsp;</code>: 指與 Notion database 連接。 
* 移除: 須以移除 workspace 方式移除 Date Property 內容: 左側 Sidebar 會出現 <code>&nbsp; Notion Account &nbsp;</code> 🢂 <code>&nbsp;  …  &nbsp;</code> 🢂 <code>&nbsp; 管理工作空間 &nbsp;</code> 🢂 此處可 <code>&nbsp; 解除連結 &nbsp;</code>

<div>
 {GoogleImage( '1n_wDOq4kHVXOwO6ZfVMQ0WVFmQH_oxxo',  '15_Notion_Calendar_07.png' , {width:'507px', height:'148px', hidden:true, degree:0})}
</div>

<div>
 {GoogleImage( '12twAFVAF7rvies85BRcbmupbf4JaFn8O',  '15_Notion_Calendar_10.png' , {width:'543px', height:'267px', hidden:true, degree:0})}
</div>

<div>
 {GoogleImage( '1b0rrap-CIC2di3tBUc5eWtKnm0kgE8dR',  '15_Notion_Calendar_09.png' , {width:'652px', height:'544px', hidden:true, degree:0})}
</div>

## 連接後資料同步

### Databases 資料同步到 Calendar
* Database 下的 Date Property / Timeline 等時間資訊可自動加入 Calendar 活動。  
* 關聯 Google Calendar / Outlook 異動資料皆會自動同步。
* 注意: 
    * Notion DB <code>建立時自動帶入</code>的資訊，不會自動複製成為 Google Calendar Activities。<code> 僅新建立的 Event 可同步至 Google</code>。
    * 目前一個 Notion Calendar 只能關聯 <code>&nbsp; 10 個 database &nbsp;</code>。

### Calendar 編輯同步到 Database
* __一個 Notion Calendar 上建立的 Event 僅能同步到一個指定的關聯__ 資料庫或第三方 Calendar App，故須自行切換。
* __右側 Docker 下拉選單可切換 Event 所屬的 Calendar 或 Database。__
    * 新增的 event 若切換關聯至 database 時，Database 會自動新增一筆 database record。
    * 同樣若切換關聯至 calendar/sprint/Google Calendar 時，相關聯 app 也會自動新增資料。
    * 於 Notion Event 上的編輯異動也會自動同步。
* Calendar 建立新 Event: <code>&nbsp; 日曆時間點上 &nbsp;</code> 🢂 🖱R 🢂 <code>&nbsp; 建立活動 &nbsp;</code> 🢂 <code>&nbsp; 選取標的資料庫 &nbsp;</code>或第三方日曆 

<div>
 {GoogleImage( '1tH4kj1EROjR-dQ95MtajS9MyUBNXJksb',  '15_Notion_Calendar_11.png' , {width:'525px', height:'299px', hidden:true, degree:0})}
</div>    

### 為 Calendar 活動建立 Detail Page
> 可為 Notion 日曆上的事件增加一些附加說明或文件，
> 例如活動細節與會議的投影片資料等等，將相關文件統一管理。  
> Detail Page 細分為 Notion 相關活動與 3rd Party Calendar 活動兩類，建立畫面有些許差異。

___Notion Activity 建立 Detail Page:___
* Notion 中的 Database/Sprint Records 都自帶一個 Detail Page。可自動帶入原資料細節並允許同步編輯附加內容。
* 點取 Calendar 關聯的 <code>&nbsp; 活動 &nbsp;</code> 🢂 <code>&nbsp; 右方側邊欄 &nbsp;</code> 🢂 <code>&nbsp; 在 Notion 打開 &nbsp;</code> 可直接開啟 Notion 預設 Detail Page。

<div>
 {GoogleImage( '10S1jaRzMu1UtnHbiFy2SX0YKuHC5XOC9',  '15_Notion_Calendar_14.png' , {width:'595px', height:'344px', hidden:true, degree:0})}
</div>    

___Google Calendar Activity 建立 Detail Page:___
* 非 Notion Record 未自帶 Detail Page。此時，Calendar 提供活動與 <code>&nbsp;URL&nbsp;</code>/<code>&nbsp;Notion Page&nbsp;</code>/<code>&nbsp;Database&nbsp;</code>建立連結的功能。可將細節紀錄在 Notion Page，活動再與之關聯。
* 點取 Calendar 關聯的 <code>&nbsp; 活動 &nbsp;</code> 🢂 <code>&nbsp; 右方側邊欄 &nbsp;</code> 🢂 <code>&nbsp; 新增文件或連結 &nbsp;</code> 🢂 <code>&nbsp; 選取或建立要建立關聯的標的 &nbsp;</code> 
<div>
 {GoogleImage( '1XTqiqfyWm72MKVfpKfO1vGSnZDY_kDbb',  '15_Notion_Calendar_15.png' , {width:'594px', height:'696px', hidden:true, degree:0})}
</div>    

## 設定 Default Calendar
* 這邊指的是新增活動實預設放置位置設定\(新增時亦可手動指定位置)
* 左側 <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Calendar &nbsp;</code>帳號 🢂 <code>&nbsp; __ … __ Settings &nbsp;</code> 🢂 <code>&nbsp;管理日曆帳號 &nbsp;</code> 🢂 <code>&nbsp; Calendars &nbsp;</code> 🢂 <code>&nbsp; Make Calendar Default &nbsp;</code> 🢂 <code>&nbsp; 選取 &nbsp;</code>
* Workspace/Database 旁的眼睛符號可用來暫時隱藏不想顯示的活動  

<div>
 {GoogleImage( '1Xw-6mQx6oiREHHh73VbBQdsts8RVH1vm',  '15_Notion_Calendar_16.png' , {width:'644px', height:'328px', hidden:true, degree:0})}
</div>  

   
## 時間區間/資料庫中多個日期的日曆呈現
* 這邊指 Database 上有多個時間/時間區間欄位時 Calendar 會選何者在日曆上呈現?
    * 預設一個 Database <code>僅有一個 Date Property</code> 會在 Notion Calendar 上呈現。當有多個欄位時需自行指定要顯示的欄位。
    * **<span style={{color: '#0044FF'}}> Notion Calendar 與 Database Calendar View </span>** 呈現同步。所以須回到 Calendar View 進行設定。
    * 註: 設定時必須先建立 Calendar View，但 Calendar View 移除後 Notion Calendar 上的設定仍維持有效。
* __日期__選取:    
    * <code>&nbsp; Calendar View &nbsp;</code> 🢂 右側 <code>&nbsp;  … &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Show calendar b &nbsp;</code>y 🢂 選擇 <code>&nbsp; Date Property &nbsp;</code>
    
<div>
 {GoogleImage( '1OS0ZxSbHDkemec_t6u43XPEg1iyEf9NP',  '15_Notion_Calendar_17.png' , {width:'652px', height:'571px', hidden:true, degree:0})}
</div>  

* __時間區間__設定:
    * Notion Database 中 時間區間也是 Date Type。但是有做 Start/End Date 開啟。Calendar 上欲顯示時間區間需先開啟 End Date，後選取該欄位即可。
    * 須注意的是，<span style={{color: '#FF1100'}}>時間區間是依據資料設定</span>，也就是說需單筆設定。

___Date Span 設定___
* <code>&nbsp; Database &nbsp;</code> 🢂 <code>&nbsp; <span style={{color: '#FF1100'}}>資料上左鍵</span> L🖱️  &nbsp;</code> 🢂 開啟 <code>&nbsp; End Date &nbsp;</code> 
* 重複上方日期選取動作以指定 Calendar 上 UI 標的。

<div>
 {GoogleImage( '1K_AUME8w8-GK4iJ_dmcsiEu8y4EqxXjz',  '15_Notion_Calendar_18.png' , {width:'381px', height:'547px', hidden:true, degree:0})}
</div>

___Calendar 呈現___    

<div>
 {GoogleImage( '1UvB2OZRJ05hja0t5eP8oPyg0Yd5BcD7u',  '15_Notion_Calendar_19.png' , {width:'599px', height:'500px', hidden:true, degree:0})}
</div>

## Calendar 時區
* 僅有 Day Scene 會出現時間點，所以時區僅在 Day View 出現與設定。
進入 Calendar 後，日曆畫面的左側為時間軸，最上方可以進行時區設定與增刪與設定別名。畫面上允許同時呈現多個時區時間，方便跨國工作者使用。

<div>
 {GoogleImage( '1lKNu-IRIZSlZYMJYZWjIw0mU_zMyjbqX',  '15_Notion_Calendar_20.png' , {width:'652px', height:'247px', hidden:true, degree:0})}
</div>

## Calendar 移除設定 <span id="Calendar_Acc_Remove">&nbsp;</span>
* 包含 
    * 移除 Workspace 同步關聯  
    * 移除 Google Calendar 同步關聯

__移除 Workspace 與 Notion Calendar 同步關聯__
* [Calendar](#rv_cal) 與 [Workspace](#rv_wkspace)，在雙方都可進行關聯移除。

___&emsp; 由 Workspace 操作:___ <span id="rv_wkspace">&nbsp;</span>

* <code>&nbsp; 回到 Notion &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Connections &nbsp;</code> 🢂 <code>&nbsp; All Connections &nbsp;</code> 🢂 <code>&nbsp; target &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Disconnect account &nbsp;</code>

<span>
 {GoogleImage( '1LByn5B0N8v9APq7p4nNqdicZhfvPTlp6',  '15_Notion_Calendar_21.png' , {width:'273px', height:'246px', hidden:true, degree:0})}
</span>
<span>
 {GoogleImage( '1wgJtRG7pNW-WDI3B7zABYdbC3CHXKfx6',  '15_Notion_Calendar_22.png' , {width:'652px', height:'347px', hidden:true, degree:0})}
</span>

___&emsp; 由 Calendar 操作:___ <span id="rv_cal">&nbsp;</span>
* <code>&nbsp; 左側 Sidebar &nbsp;</code> 🢂 <code>&nbsp; Workspace &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; 管理工作空間 &nbsp;</code> 🢂 <code>&nbsp; 整合 &nbsp;</code> 🢂 <code>&nbsp; 工作空間 &nbsp;</code> 🢂 此處可<code>&nbsp; 移除 &nbsp;</code>空間

<div>
 {GoogleImage( '1b0rrap-CIC2di3tBUc5eWtKnm0kgE8dR',  '15_Notion_Calendar_09.png' , {width:'652px', height:'544px', hidden:true, degree:0})}
</div>

__移除 Google Calendar 關聯帳號__
* <code>&nbsp; 左側 Sidebar &nbsp;</code> 🢂 <code>&nbsp; Email &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; 管理日曆帳號 &nbsp;</code> 🢂 <code>&nbsp; 帳號 &nbsp;</code> 🢂 <code>&nbsp; 個人檔案 &nbsp;</code> 🢂 此處可<code>&nbsp; 移除 &nbsp;</code>Notion 日曆帳號

<div>
 {GoogleImage( '10wa5k6ebqY5aG1tM2sag4gzh0tU1gP7S',  '15_Notion_Calendar_23.png' , {width:'652px', height:'447px', hidden:true, degree:0})}
</div>

    
## Notion Calendar 應用技巧
### Dashboard
* __整合後的日曆資料可以在 __ Notion Workspace 的 Home 以 Dashboard 自動整理並提示將來臨的活動。 
     * 左側<code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Home &nbsp;</code> 🢂 <code>&nbsp; Upcoming events &nbsp;</code>
     * Dashboard 可客製化。區塊右上 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; 設定 &nbsp;</code>

<div>
 {GoogleImage( '1M25-faZWu3pNg5xw11QhOBNj6TYsNRj0',  '15_Notion_Calendar_24.png' , {width:'652px', height:'408px', hidden:true, degree:0})}
</div>

### 更改活動上的使用者別名
* 因為預設會暴露出編輯者帳號資訊，若想以別名呈現可自行調整
* Notion Calendar <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Email &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Manage Calendar Account &nbsp;</code> 🢂 <code>&nbsp; Profile &nbsp;</code> 🢂 <code>&nbsp; Username &nbsp;</code>

<div>
 {GoogleImage( '1IQwXstRKC8xOcG-Tw1PNa_uJMufgPso4',  '15_Notion_Calendar_25.png' , {width:'652px', height:'433px', hidden:true, degree:0})}
</div>

### Calendar 自動 Busy 標記 - Blocking
> 目前試用 <span style={{color: '#0044FF'}}> __Buay 標記僅能用在建立於第三方日曆軟體上(如 Google Calendar)的活動上__ </span>。  
> Notion Database 所建立的活動無法在 Notion Calendar 上標記為 Busy。
> 
> 情境概說:
> Totem 在 Notion Calendar 上彙整了，  
> 1. Notion Database 上的活動，  
> 2. Google Calendar 上私人行程日曆 (Personal Scheduler)，以及  
> 3. Google Calendar 上公司同事間分享的共用行事曆 (Team Scheduler)  
>  
> 當 Totem 在 Notion Calendar 上為 Personal Scheduler 註記 11 月要進行環島旅行。  
> 因 Notion Calendar 的同步編輯特性，  
> 此時 Notion Calendar 與 Personal Scheduler 都會出現環島旅行活動。  
> 然而此時 Team Scheduler 上 11 月不會出現任何活動訊息，所以同事間並不知道 Totem 是否有事。  
> 
> Notion 提供 Calendar Blocking 功能，  
> 指的便是在上述情形下，  
> 同步編輯時可順便在 Team Scheduler 上標記 Totem Busy。
> 

__使用限制__ 
* <span style={{color: '#FF1100'}}>Buay 標記僅能用在第三方日曆軟體所建立的活動上</span>
* 目前測試大約5秒鐘才會在第三方 App 中看到變化。
* 可選定標記單一活動或將所有活定都在標的 Calendar 上標示 Busy。    

__設定步驟__
* 私人行程日曆在 Notion Calendar 介面的<code>&nbsp; 活動 &nbsp;</code>上 🢂 <code>&nbsp; 右鍵 &nbsp;</code> 🢂 <code>&nbsp; Block on Calendar &nbsp;</code> 在日曆上封鎖 🢂 選定要出現 Busy <code>&nbsp; 標記目標 &nbsp;</code> Calendars或日曆帳號。

<div>
 {GoogleImage( '1-8q43berzF8ZMIqXoBannlOzAUYS9JfN',  '15_Notion_Calendar_26.png' , {width:'554px', height:'664px', hidden:true, degree:0})}
</div>

<div>
 {GoogleImage( '1u9bGSJlR0CnqXuh27CDUAqGZkqzW4yWG',  '15_Notion_Calendar_27.png' , {width:'652px', height:'210px', hidden:true, degree:0})}
</div>

__移除 Busy 標記__
* 若設定自動 Block Calendar 後，無論何時新增的 events 都會被自動標記 Busy，__下次新增事件時__ 可自行手動移除。
* 單筆活動標記移除: 只能直接刪掉活動，在重新建立。
* 移除自動標記: <code>&nbsp; 活動 &nbsp;</code> 🢂 <code>&nbsp; 右鍵 &nbsp;</code> 🢂 <code>&nbsp; Block on Calendar &nbsp;</code> 🢂 選取 <code>&nbsp; Calendar &nbsp;</code> 🢂 <code>&nbsp; 勾選取消封鎖活動 &nbsp;</code>

<div>
 {GoogleImage( '1NHVr6yeX51Cb0qG0G5giGSqiIJYLvIih',  '15_Notion_Calendar_28.png' , {width:'394px', height:'205px', hidden:true, degree:0})}
</div>


### Notion Calendar 與 線上會議整合
* 可在活動上加上會議 URL 與附加文件。
* 我少用這功能，所以僅留下參考連結: [Notion Calendar / Zoom / Google Meet 等整合方式參考位置](https://www.notion.com/zh-tw/help/notion-calendar-integrations)

### 與 Teamates 共享 Calendar
* 要收費的部分，暫時只留參考連結。
* 共享成員必須被 Google Workspace 管理。
* 參考文獻:
    * [Calendar for Teams](https://www.notion.com/help/notion-calendar-for-teams)
    * [Work with Teammates](https://www.templates4notion.com/blog/notion-calendar-app-tutorial#bonus-tip-revert-to-cron-logo)


## 疑難雜症
* 工作用 email 可能會受到管理員限制而無法使用 Notion Calendar，解決方式:
    1. 管理員憑證登入admin.google.com
    1. <code>&nbsp; Security &nbsp;</code> 🢂 <code>&nbsp; Access and data control &nbsp;</code> 🢂 <code>&nbsp; API controls &nbsp;</code> 🢂 <code>&nbsp; Manage Google services &nbsp;</code>
    1. <code>&nbsp; Configured apps &nbsp;</code> 🢂 <code>&nbsp; View list &nbsp;</code> 🢂 <code>&nbsp; Add app &nbsp;</code> 🢂 <code>&nbsp; OAuth app Name or Client ID &nbsp;</code>
    1. <code>&nbsp; Notion Calendar &nbsp;</code> 🢂 <code>&nbsp; Trusted &nbsp;</code>
* Notion Calendar 設定 
    * 所有設定入口: Notion Calendar Sidebar 🢂 Calendar Account 🢂 __ … __ 🢂 Manage Calendar Account 🢂 
    * 語系設定: Notion Workspace 與 Notion Calendar 各自管理自己 App 的語系設定, Manage Calendar Account 🢂 General 🢂 Language
    * 通知與提醒: Manage Calendar Account 🢂 Notifications 
* Notion Calendar 的資安管理
    * 資料 AES-256 加密
    * 網路 TLS 1.2
    * 使用 Google OAuth API 驗證
    * Server 由 AWS 託管
    * 搭配 Google Workspace 管理企業團隊 Calendar 帳號
    * 遵循 SOC2, GDPR 資安規範