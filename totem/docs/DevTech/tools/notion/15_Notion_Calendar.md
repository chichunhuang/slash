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
    * __整合後的日曆資料可以在 __ Notion Workspace 的 Home 以 Dashboard 自動整理呈現。 
        * (左側 sidebar 🢂 Home) 

## Notion Calendar UI

### Calendar 左側欄
* 小月曆
* 帳號與workspace 管理

### Calendar 右側 Sidebar
* 搜尋列
* 事件/會議提醒
* 功能提示

    

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
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_01.png')}
</div>

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_02.png')}
</div>

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_03.png')}
</div>


## Calendar 次要帳號設定
__Calendar 中新增其他次要 Google 帳號__ 
* 一個 Notion Calendar 可以連結多個 Google 帳號，並連接帳號下多個 Google Calendars。使用時除了預設主帳號外都稱為次要帳號。 
* 新增次要 Google Accounts 方式: 
    1. 左下 Logo 進入 Notion Calendar App (會切換到 Notion Calendar App)
    1. Calendar 左側 Dock Panel 的 <code>&nbsp; email 帳號 &nbsp;</code> 🢂 <code>&nbsp; … &nbsp;</code> 🢂 <code>&nbsp; 管理日曆帳號 &nbsp;</code> 🢂 <code>&nbsp; 整合 &nbsp;</code> 🢂 <code>&nbsp; 日曆 &nbsp;</code> 🢂 <code>&nbsp; 新增日曆帳號 &nbsp;</code> 
    2. 移除或更改 Primary account 皆位於管理日曆帳號功能下

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_04.png')}
</div>

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_05.png')}
</div>

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_06.png')}
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
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_07.png')}
</div>

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_08.png')}
</div>
<span style={{color: '#CECECE'}}> 於 Notion 自行上傳的 Workspace Logo 在此處會出現顯示錯誤。</span> 

### __Calendar 與 Database 連接:__ 
* Calendar 左側 Sidebar 🢂 <code>&nbsp; Notion Account &nbsp;</code> 🢂 <code>&nbsp;  … &nbsp;</code> 🢂 <code>&nbsp; Add Notion Database &nbsp;</code>: 指與 Notion database 連接。 
* 移除: 須以移除 workspace 方式移除 Date Property 內容: 左側 Sidebar 會出現 <code>&nbsp; Notion Account &nbsp;</code> 🢂 <code>&nbsp;  …  &nbsp;</code> 🢂 <code>&nbsp; 管理工作空間 &nbsp;</code> 🢂 此處可 <code>&nbsp; 解除連結 &nbsp;</code>

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_07.png')}
</div>

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_10.png')}
</div>

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_09.png')}
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
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_11.png')}
</div>    

### 為 Calendar 活動建立 Detail Page
> 可為 Notion 日曆上的事件增加一些附加說明或文件，
> 例如活動細節與會議的投影片資料等等，將相關文件統一管理。  
> Detail Page 細分為 Notion 相關活動與 3rd Party Calendar 活動兩類，建立畫面有些許差異。

___Notion Activity 建立 Detail Page:___
* Notion 中的 Database/Sprint Records 都自帶一個 Detail Page。可自動帶入原資料細節並允許同步編輯附加內容。
* 點取 Calendar 關聯的 <code>&nbsp; 活動 &nbsp;</code> 🢂 <code>&nbsp; 右方側邊欄 &nbsp;</code> 🢂 <code>&nbsp; 在 Notion 打開 &nbsp;</code> 可直接開啟 Notion 預設 Detail Page。

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_14.png')}
</div>    

___Google Calendar Activity 建立 Detail Page:___
* 非 Notion Record 未自帶 Detail Page。此時，Calendar 提供活動與 <code>&nbsp;URL&nbsp;</code>/<code>&nbsp;Notion Page&nbsp;</code>/<code>&nbsp;Database&nbsp;</code>建立連結的功能。可將細節紀錄在 Notion Page，活動再與之關聯。
* 點取 Calendar 關聯的 <code>&nbsp; 活動 &nbsp;</code> 🢂 <code>&nbsp; 右方側邊欄 &nbsp;</code> 🢂 <code>&nbsp; 新增文件或連結 &nbsp;</code> 🢂 <code>&nbsp; 選取或建立要建立關聯的標的 &nbsp;</code> 
<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_15.png')}
</div>    

## 設定 Default Calendar
* 這邊指的是新增活動實預設放置位置設定\(新增時亦可手動指定位置)
* 左側 <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Calendar &nbsp;</code>帳號 🢂 <code>&nbsp; __ … __ Settings &nbsp;</code> 🢂 <code>&nbsp;管理日曆帳號 &nbsp;</code> 🢂 <code>&nbsp; Calendars &nbsp;</code> 🢂 <code>&nbsp; Make Calendar Default &nbsp;</code> 🢂 <code>&nbsp; 選取 &nbsp;</code>
* Workspace/Database 旁的眼睛符號可用來暫時隱藏不想顯示的活動  

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_16.png')}
</div>  

   
## 時間區間/資料庫中多個日期的日曆呈現
* 這邊指 Database 上有多個時間/時間區間欄位時 Calendar 會選何者在日曆上呈現?
    * 預設一個 Database <code>僅有一個 Date Property</code> 會在 Notion Calendar 上呈現。當有多個欄位時需自行指定要顯示的欄位。
    * **<span style={{color: '#0044FF'}}> Notion Calendar 與 Database Calendar View </span>** 呈現同步。所以須回到 Calendar View 進行設定。
    * 註: 設定時必須先建立 Calendar View，但 Calendar View 移除後 Notion Calendar 上的設定仍維持有效。
* __日期__選取:    
    * <code>&nbsp; Calendar View &nbsp;</code> 🢂 右側 <code>&nbsp;  … &nbsp;</code> 🢂 <code>&nbsp; Layout &nbsp;</code> 🢂 <code>&nbsp; Show calendar b &nbsp;</code>y 🢂 選擇 <code>&nbsp; Date Property &nbsp;</code>
    
<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_17.png')}
</div>  

* __時間區間__設定:
    * Notion Database 中 時間區間也是 Date Type。但是有做 Start/End Date 開啟。Calendar 上欲顯示時間區間需先開啟 End Date，後選取該欄位即可。
    * 須注意的是，<span style={{color: '#FF1100'}}>時間區間是依據資料設定</span>，也就是說需單筆設定。

___Date Span 設定___
* <code>&nbsp; Database &nbsp;</code> 🢂 <code>&nbsp; <span style={{color: '#FF1100'}}>資料上左鍵</span> L🖱️  &nbsp;</code> 🢂 開啟 <code>&nbsp; End Date &nbsp;</code> 
* 重複上方日期選取動作以指定 Calendar 上 UI 標的。

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_18.png')}
</div>

___Calendar 呈現___    

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_19.png')}
</div>

## Calendar 時區
* 僅有 Day Scene 會出現時間點，所以時區僅在 Day View 出現與設定。
進入 Calendar 後，日曆畫面的左側為時間軸，最上方可以進行時區設定與增刪與設定別名。畫面上允許同時呈現多個時區時間，方便跨國工作者使用。

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_20.png')}
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
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_21.png')}
</span>
<span>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_22.png')}
</span>

___&emsp; 由 Calendar 操作:___ <span id="rv_cal">&nbsp;</span>
* <code>&nbsp; 左側 Sidebar &nbsp;</code> 🢂 <code>&nbsp; Workspace &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; 管理工作空間 &nbsp;</code> 🢂 <code>&nbsp; 整合 &nbsp;</code> 🢂 <code>&nbsp; 工作空間 &nbsp;</code> 🢂 此處可<code>&nbsp; 移除 &nbsp;</code>空間

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_09.png')}
</div>

__移除 Google Calendar 關聯帳號__
* <code>&nbsp; 左側 Sidebar &nbsp;</code> 🢂 <code>&nbsp; Email &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; 管理日曆帳號 &nbsp;</code> 🢂 <code>&nbsp; 帳號 &nbsp;</code> 🢂 <code>&nbsp; 個人檔案 &nbsp;</code> 🢂 此處可<code>&nbsp; 移除 &nbsp;</code>Notion 日曆帳號

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_23.png')}
</div>

    
## Notion Calendar 應用技巧
### Dashboard
* __整合後的日曆資料可以在 __ Notion Workspace 的 Home 以 Dashboard 自動整理並提示將來臨的活動。 
     * 左側<code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Home &nbsp;</code> 🢂 <code>&nbsp; Upcoming events &nbsp;</code>
     * Dashboard 可客製化。區塊右上 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; 設定 &nbsp;</code>

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_24.png')}
</div>

### 更改活動上的使用者別名
* 因為預設會暴露出編輯者帳號資訊，若想以別名呈現可自行調整
* Notion Calendar <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Email &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Manage Calendar Account &nbsp;</code> 🢂 <code>&nbsp; Profile &nbsp;</code> 🢂 <code>&nbsp; Username &nbsp;</code>

<div>
 {GoogleImage( 'google_file_id',  '15_Notion_Calendar_25.png')}
</div>

### Notion Calendar 與 線上會議整合
* 我少用這功能，所以僅留下參考連結: [Notion Calendar / Zoom / Google Meet 等整合方式參考位置](https://www.notion.com/zh-tw/help/notion-calendar-integrations)









### Calendar 自動 Busy 標記
> 這邊指的是，多人的共用 Notion Calendar 上可以為私人 Google Calendar 上有活動日期主動標記 Busy。  
>  
> 例如: Insect 與 Totem 共用 Notion Calendar (設別名為: Team-Calendar)，  
> 則 Totem 的 Google Calendar 上註記日本旅行期間的時間區段，  
> Insect 在 Team-Calendar 上會看到 __Totem Busy__ 的標記。  
> Totem 在 Team-Calendar 上則會看到 __日本旅行__ 的註記。  

* Notion 上的共用工作群組的 <span style={{color: '#0044FF'}}> __其他人只會看見自己該時段為 Busy__ </span>。
    * 註: 工作群 Calendar 以原 App \(ex: 回 Google calendar) 查看時會多出以個人行程名義的建立複製事件。
* 步驟: 個人行程<code>&nbsp; 日曆的活動上 &nbsp;</code> 🢂 <code>&nbsp; 右鍵 &nbsp;</code> 🢂 <code>&nbsp; Block on Calendar &nbsp;</code> 自日曆上封鎖 🢂 選定要出現 Busy <code>&nbsp; 標記目標 &nbsp;</code> Calendars。
    * 可選定標記單一活定或將所有活定都在標的 Calendar 上標示 Busy。    
* 註: 目前測試大約5秒鐘才會在原 App 中看到變化。
* 若 Auto Block Calendar 設定後，無論何時新增的 events 都會被自動 block， __下次新增事件時__ 需自行手動移除。
    * 活動 🢂 右鍵 🢂 Block on Calendar 🢂 選取 calendar 🢂 __勾選取消自動__ block target calendar 

### 與 Teamates 共享 Calendar
* 共享成員必須被 Google Workspace 管理。
* 參考文獻:
    * [Calendar for Teams](https://www.notion.com/help/notion-calendar-for-teams)
    * [Work with Teammates](https://www.templates4notion.com/blog/notion-calendar-app-tutorial#bonus-tip-revert-to-cron-logo)


## Notion Calendar 的資安管理
* 資料 AES-256 加密
* 網路 TLS 1.2
* 使用 Google OAuth API 驗證
* Server 由 AWS 託管
* 搭配 Google Workspace 管理企業團隊 Calendar 帳號
* 遵循 SOC2, GDPR 資安規範


## 疑難雜症
* 工作用 email 可能會受到管理員限制而無法使用 Notion Calendar，解決方式:
    1. 管理員憑證登入admin.google.com
    1. Security → Access and data control → API controls → Manage Google services
    1. Configured apps → View list → Add app → OAuth app Name or Client ID
    1. Notion Calendar → Trusted
* Notion Calendar 設定 
    * 所有設定入口: Notion Calendar Sidebar 🢂 Calendar Account 🢂 __ … __ 🢂 Manage Calendar Account 🢂 
    * 語系設定: Notion Workspace 與 Notion Calendar 各自管理自己 App 的語系設定, Manage Calendar Account 🢂 General 🢂 Language
    * 通知與提醒: Manage Calendar Account 🢂 Notifications 