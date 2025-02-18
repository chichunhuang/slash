---
title: Notion Calendar
description: Notion Calendar
keywords: [Notion, Calendar]
---

# Notion 筆記之外
> Notion 除了大家熟知的的點子筆記本之外，還有一些官方提供的其他產品。這些產品也可以與 Notion Workspace 相整合。   
> 相關產品可參考 Notion 官網下的 Products 清單。  
> Notion workspace / Calendar / Wikis / Mail / Docs / AI / Projects / Sites / Forms  
> https://www.notion.com/zh-tw/product  


## Notion Calendar 
![Notion Calendar](https://play-lh.googleusercontent.com/ZpieHVHj503tx4YoFlsHOtjQ3edA9FE_yLocxpEecO0TQq0VcKbcsZ4fvjA9LzcRdmg=w240-h480-rw "Notion Calendar: 官網 log 會隨時間變換")
> 目前理解: Notion Calendar 是一個可整合多方來源的日曆工具。  
> 例如:   
> Notion Calendar 可整合 5  個以內 Google Calendar / Microsoft Outlook Calendar / App Calendar 的資料，  
> 也可以自動將 Notion database 中出現的時間資訊附加到 calendar 之中。  
> 編輯時 app 也可與指定平台間自動同步。  
> 簡單的說，這個 app 是日曆的整合平台。     


* 注意事項摘要:      
    * Notion Calendar 是與 Notion Workspace 相互連結，所以不同 workspaces 各自獨立不相依。
    * Workspace 的相依 Notion Calendar 可以與多個 google calendars 相連結。
    * one workspace multi-notion calendars. one notion calendar multi-linked calendars.
    * Notion Calendar 可同步 workspace 中日期資訊。  
    * Mobile 版部分功能有受限，此處以 Browser 為主。
* [Notion 日曆參考資料](https://www.notion.com/zh-tw/help/category/notion-calendar)

## Notion Calendar 帳號設定
* 前提需求: __ <span style={{backgroundColor: '#c3c4ff'}}>有 Google 帳戶才能使用 Notion 日曆</span>__
* 設定可粗分為兩類動作:
    * Notion Calendar 與 Google Calendar
    * Notion Calendar 與 Notion Workspace/Notion Database with date property

## Calendar 連結設定
__帳號與 Google Calendar 建立與連結:__ 
* Notion Calendar 功能需事先建立 Notion Calendar 帳號。
* Workspace 左側 Sidebar > Calendars Connect > 依據指示建立與並與 Google Account 建立連結即可。

__Calendar 中新增其他次要 Google 帳號__ 
* 一個 Notion Calendar 可以連結多個 Google 帳號，並連接帳號下多個 Google Calendars。 
* 新增次要 Google ccounts 方式: 
    1. 進入 Notion Calendar App
    1. 左側 Dock Panel 的 email 帳號 > ... > 管理日曆帳號 > 整合 > 日曆 > 新增日曆帳號
    2. 移除或更改 primary account 皆位於管理日曆帳號功能下

__Calendar 與 workspace 連接異動:__ 
* 這邊用來設定可自動加入 Calendar 活動的主要/次要 Workspace。
* Workspace 中與時間相關的 View 如 Timeline/Calendar/Sprint 會自動加入 Notion Calendar。  
1. 登入 Notion Account > 
1. 切換至 Calendar > 
1. Notion Calendar 右側 Sidebar > 
1. Notion 工作空間 > 
1. 連接 > \(設定>整合> 
1. Notion>Notion 工作空間) > 
1. 新增工作空間 > 
1. 右上可切換帳號下的 Notion workspace > 
1. grant authorities 

__Calendar 與 workspace database 連接異動:__ 
* 這邊用來設定可自動加入 Calendar 活動的 Database 下的 Date Property 內容。  
* 左側 Sidebar 會出現 Notion Account > ... > 新增 \(Notion)資料庫: 指與 Notion database 連接。 
* 須以移除 workspace 方式移除 Date Property 內容: 左側 Sidebar 會出現 Notion Account > ... > 管理工作空間 > 此處可移除工空間

## 設定 Default Calendar
* 這邊指的是新增事件預設放入的位置設定
* Settings > Calendars > Default Calendar > 選取
* Calendar 旁的眼睛福好可用來暫時隱藏不想顯示的 Calendar  

## Calendar 移除設定
* 包含 a.移除 workspace 同步關聯, b.移除 Google calendar 同步關聯, c.Notion Calendar 帳號移除.

__移除 Workspace 與 Notion Calendar 同步關聯__
* 移除與 workspace 連結: Calendar linked by workspace，所以在 notion workspace settings 中處理。 
    * from workspace: Settings > Connections > All Connections > target > ... > Disconnect account
    * from calendar: 左側 Sidebar > Notion workspace > ... > 設定 > 整合 > 工作空間 > 此處可移除工空間


## Calendar 時區
進入 Calendar 後，日曆畫面的左側為時間軸，最上方可以進行時區設定與增刪與設定別名。畫面上允許同時呈現多個時區時間，方便跨國工作者使用。
   
__移除 Notion Calendar 帳號__
* Notion Calendar 帳號 移除: 直接刪帳號，則 workspace 下既有已連結 Notion Calendar 會失效，但 workspace 中 connection 設定仍在，需手動移除
   * 先進入 Notion Calendar > Sidebar > mouse-over Account 旁的 ... > 管理日曆帳號 > Settings > Account > Profile > 刪除 Notion 日曆帳號
   
## 疑難雜症
* 工作用 email 可能會受到管理員限制而無法使用 Notion Calendar，解決方式:
    1. 管理員憑證登入admin.google.com
    1. Security → Access and data control → API controls → Manage Google services
    1. Configured apps → View list → Add app → OAuth app Name or Client ID
    1. Notion Calendar → Trusted


## Database 中多個 Date Properties
* <b>預設一個 Database 僅有一個 Date Property 會在 Notion Calendar 上呈現</b>。當有多個欄位時需自行指定要顯示的欄位。
    * database > 右側 ... > Layout > Show calendar by > 選擇 Property 
    
## Notion Calendar 應用技巧
* [官方 Notion Calendar 應用技巧](https://www.notion.com/help/guides/getting-started-with-notion-calendar?_gl=1*ia50g3*_gcl_au*MTkyODI4NjE5Ny4xNzM5NDM3Njkx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczOTc4MDE2OC40MS4xLjE3Mzk3ODQxMTQuNTguMC4w&cookie_sync_completed=true) 






[可用性、封鎖和時區] (https://notion.so/help/availability-blocking-and-time-zones?_gl=1*uiqcq0*_gcl_au*MTkyODI4NjE5Ny4xNzM5NDM3Njkx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczOTg0MTQ1NC40Mi4xLjE3Mzk4NDIyMTcuNTAuMC4w)


[團隊用 Notion 日曆] (https://notion.so/help/notion-calendar-for-teams?_gl=1*46x4yv*_gcl_au*MTkyODI4NjE5Ny4xNzM5NDM3Njkx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczOTg0MTQ1NC40Mi4xLjE3Mzk4NDIyMTcuNTAuMC4w)


 [Notion 日曆會議整合和 API](https://notion.so/help/notion-calendar-integrations?_gl=1*huynat*_gcl_au*MTkyODI4NjE5Ny4xNzM5NDM3Njkx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczOTg0OTU2OC40NC4xLjE3Mzk4NTA3NjYuNjAuMC4w)
 
 [將 Notion 日曆與 Notion 結合使用](https://notion.so/help/use-notion-calendar-with-notion?_gl=1*huynat*_gcl_au*MTkyODI4NjE5Ny4xNzM5NDM3Njkx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczOTg0OTU2OC40NC4xLjE3Mzk4NTA3NjYuNjAuMC4w)