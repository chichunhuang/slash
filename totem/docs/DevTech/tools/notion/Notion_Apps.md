---
title: Notion Apps
description: Notion Apps
keywords: [Notion, Calendar, Wikis, AI, Projects]
---

# Notion 筆記之外
> Notion 除了大家熟知的的點子筆記本之外，還有一些官方提供的其他產品。這些產品也可以與 Notion Workspace 相整合。   
> 相關產品可參考 Notion 官網下的 Products 清單。  
> Notion workspace / Calendar / Wikis / Mail / Docs / AI / Projects / Sites / Forms  
> https://www.notion.com/zh-tw/product  


## Notion Calendar 
![Notion Calendar](https://play-lh.googleusercontent.com/ZpieHVHj503tx4YoFlsHOtjQ3edA9FE_yLocxpEecO0TQq0VcKbcsZ4fvjA9LzcRdmg=w240-h480-rw "Notion Calendar: 官網 log 會隨時間變換")
> 目前理解: Notion Calendar 是一個可整合多方來源的日曆工具。  
> 例如  
> Notion Calendar 可整合多個 Google Calendar 的資料，  
> 也可以自動將 Notion database 中出現的時間資訊附加到 calendar 之中。  
> 編輯時 app 也可與指定平台間自動同步。  
> 簡單的說，這個 app 是日曆的整合平台。     


* 注意事項摘要:      
    * Notion Calendar 是與 Notion Workspace 相互連結，所以不同 workspaces 各自獨立不相依。
    * Workspace 的相依 N-Calendar 可以與多個 google calendars 相連結。(new workspace multi-notion calendars. one notion calendar multi-linked calendars )
    * N-Calendar 同步指定 workspace 中日期資訊。  
* [Notion 日曆參考資料](https://www.notion.com/zh-tw/help/category/notion-calendar)

### Notion Calendar 帳號設定
* 可粗分為兩類動作:
    * Notion Calendar 與 Google Calendar
    * Notion Calendar 與 Notion Workspace/Notion Database with date property

#### Calendar 連結設定
* 帳號與 Google Calendar 建立與連結:
    * Notion Calendar 功能需事先建立 Notion Calendar 帳號。點 Workspace 左側 Sidebar 下 Calendar 依據指示建立與並與 Google Account 建立連結即可。

* Calendar 與 workspace 連接異動:
    * 這邊用來設定可自動加入 Calendar 活動的主要/次要 Workspace。Workspace 中與時間相關的 View 如 Timeline/Calendar/Sprint 會自動加入 Notion Calendar。  
    * 登入 Notion Account > 切換至 Calendar > N-Calendar 右側 Sidebar > Notion 工作空間 > 連接 > \(設定>整合>Notion>Notion 工作空間) > 新增工作空間 > 右上可切換帳號下的 Notion workspace > grant authorities 

* Calendar 與 workspace database 連接異動:
    * 這邊用來設定可自動加入 Calendar 活動的 Database 下的 Date Property 內容。  
    * 左側 Sidebar 會出現 Notion Account > ... > 新增 \(Notion)資料庫: 指與 Notion database 連接。 
    * 須以移除 workspace 方式移除 Date Property 內容: 左側 Sidebar 會出現 Notion Account > ... > 管理工作空間 > 此處可移除工空間


#### Calendar 移除設定
* 包含 a.移除 workspace 同步關聯, b.移除 Google calendar 同步關聯, c.Notion Calendar 帳號移除.

__移除 Workspace 與 Notion Calendar 同步關聯__
* 移除與 workspace 連結: Calendar linked by workspace，所以在 notion workspace settings 中處理。 
    * from workspace: Settings > Connections > All Connections > target > ... > Disconnect account
    * from calendar: 左側 Sidebar > Notion workspace > ... > 設定 > 整合 > 工作空間 > 此處可移除工空間
   
__移除 Notion Calendar 帳號__
* Notion Calendar 帳號 移除: 直接刪帳號，則 workspace 下既有已連結 Notion Calendar 會失效，但 workspace 中 connection 設定仍在，需手動移除
   * 先進入 Notion Calendar > Sidebar > mouse-over Account 旁的 ... > 管理日曆帳號 > Settings > Account > Profile > 刪除 Notion 日曆帳號
   
### Database 中多個 Data Properties
* <b>預設一個 Database 僅有一個 Date Property 會在 Notion Calendar 上呈現</b>。當有多個欄位時需自行指定要顯示的欄位。
    * database > 右側 ... > Layout > Show calendar by > 選擇 Property 