---
title: Notion 共編
description: Notion 共編
keywords: [Notion,Sharing]
---

## 關於共編必需知道的事
> 寫在最前面，共編前須先搞清楚 [Notion Members](https://www.notion.so/help/add-members-admins-guests-and-groups?_gl=1*1o0koff*_gcl_au*MTY5Njc4Mzk3NS4xNzMxNTY1MTIx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczNzYyMDA5My4yMi4xLjE3Mzc2MjAwOTguNTUuMC4w#members) 與 [Notion Guests](https://www.notion.so/help/add-members-admins-guests-and-groups?_gl=1*1o0koff*_gcl_au*MTY5Njc4Mzk3NS4xNzMxNTY1MTIx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczNzYyMDA5My4yMi4xLjE3Mzc2MjAwOTguNTUuMC4w#guests) 差別。 
>> Member 權限較大，可檢視整個 workspace。Notion edu plus 下一個 teamspace 僅能有一個 member 就是 creator。    
>> Guests 權限小，僅能共編被指定頁面。Notion edu plus 版本下單一 teamspace 可設 100 guests。  
>> Member 與 Guest 都屬於 Notion Database 中的 Person Property。  

### Guest
> Page Owner 經由 Top-Right > Share > email，受邀者不須有 Notion Account。需要 email 驗證以取得登入密碼。<br/>  
> Guest 僅能編輯單一 Page。

### Member
> owner > Sidebar > Settings > People > Add members<br/>
> Member 依授權不同最高可得到整個 workspace 所有權。



## Collaboration
> L-Sidebar Settings > workspace > People 可管理共編成員與設共編程成員權限  
> Page upper-right > share 可以設定頁面共編與否   
> 

* A[Workspace 共編方式](https://www.notion.com/help/collaborate-within-a-workspace)
* B[Inbox and Page Notification](https://www.notion.com/help/updates-and-notifications)
- Inbox: 成員異動通知會統一收集在 workspace 左上的 inbox 區塊。
* C[Comments,mentions and reminders](https://www.notion.com/help/comments-mentions-and-reminders)
* D[Suggested edits](https://www.notion.com/help/suggested-edits)
* E[Page analytics](https://www.notion.com/help/page-analytics)
* F[Intro to teamspace](https://www.notion.com/help/intro-to-teamspaces)

A: 
- 共編類似 Jira confluence/Google sheet 編輯，可即時看到線上成員所做的異動。
- 點右上成員圖像可快速跳到其編輯處。
- 查可共編成員: L-Sidebar Settings > workspace > People 可看到可共編成員
- 鎖定頁面\(全頁鎖定): __Page upper-right__ > ... > Lock Page。 __所有人__ 包含 owner 都無法編輯。但full access成員可重新開啟。
- Database 鎖定\(部分鎖定): database  upper-right / 六點 > lock database, 限定指定 database 所有成員皆無法編輯。但相關連 form\(responses) 仍可進行回應。 


C: Notion 提供 Comments and reminders 功能，來輔助異地辦公的合作成員於系統上進行溝通。
comments: 
- 可對 __整頁__ 留言或是 __指定區塊__ 留言。
- 頁面右上方對話泡泡 icon ，檢視整頁面上所有的留言。
- 對話泡泡 icon，進去後可以在頁面上留言。或針對他人留言進行回覆與標記解決。
- 編輯頁面時，在任意處 hightlight 內容時，會自動出現 tool bar 來針對內容留言。
    - 有附言區塊會被黃色標註。解決後顏色消失。 

mentions: 以 @ 來提及其他人或頁面等。  
reminders: 則是可以提醒成員與時間相關 TODO 事項。  

D: Suggested edits
- 這邊類似批閱作業概念，合作成員可以進入 __Suggesting 模式，先行批改調整內容__ 但內容並未正式生效。後再由其他成員決定是否直接採納。
- 建議的調整內容會被藍色標註。被採納後顏色消失，若拒絕則內容直接 reset 回建議前狀態。 
- page top-right ... > Suggest edits 進入或離開 Suggesting mode。 

E: Analytics: 
- 跟 Google 類似 Notion 也提供瀏覽次數簡易分析。
- Page owner 可以在 page top-right ... > updates & analytics 檢視 Page 瀏覽狀態。 
- Analytics 預設開啟。關閉分析方式 Settings > My Settings > Privacy > Show my view history > Record/Don't Record
 
F: Teamspace
 
  

from here


F: teamspace
- 說是會預設有 teamspace，不過似乎部分情境下左側 Sidebar 並未出現 Teamspaces 區塊。
- L-Sidebar Settings > workspace > teamspaces > Teamspace setting > Manage Teamspaces 下可建立。(部分情境似乎,無此區塊)
- 是否有 teamspace 似乎與建立 workspace 時所選的工作方式相關  










## Trigger
* 付費版才能用，教育版無法使用。
* 當指定事件發生時，自動 trigger 其他事件動作。  
    * 例如: 當電話號碼欄位輸入後，自動驅動地址的縣市欄位。  
    * Page added trigger 
    * Property edited trigger: 由 Property 驅動 