---
title: Notion 共編
description: Notion 共編
keywords: [Notion,Sharing]
---

## 關於共編必需知道的事
> 寫在最前面，共編前須先搞清楚 <br/>
> 共編種類: 工作區共編\(Teamspace)，單頁共編\(Page Sharing) <br/>
> [共編角色: Member/Guest](https://www.notion.com/help/whos-who-in-a-workspace) <br/>
> [Notion Members](https://www.notion.so/help/add-members-admins-guests-and-groups?_gl=1*1o0koff*_gcl_au*MTY5Njc4Mzk3NS4xNzMxNTY1MTIx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczNzYyMDA5My4yMi4xLjE3Mzc2MjAwOTguNTUuMC4w#members) 與 [Notion Guests](https://www.notion.so/help/add-members-admins-guests-and-groups?_gl=1*1o0koff*_gcl_au*MTY5Njc4Mzk3NS4xNzMxNTY1MTIx*_ga*MjAwNDk0ODY3Ny4xNzMxNTY1MTIx*_ga_9ZJ8CB186L*MTczNzYyMDA5My4yMi4xLjE3Mzc2MjAwOTguNTUuMC4w#guests) 差別。 
>> Member 權限較大，可檢視整個 workspace。Notion edu plus 下一個 teamspace 僅能有一個 member 就是 creator。    
>> Guests 權限小，僅能共編被指定頁面。Notion edu plus 版本下單一 teamspace 可設 100 guests。  
>> Member 與 Guest 都屬於 Notion Database 中的 Person Property，可自動成為選擇清單項目。    

### Guest <span id="Notion_Team_Guest"></span>
> Page Owner 經由 Top-Right > Share > email，受邀者不須有 Notion Account。需要 email 驗證以取得登入密碼。<br/>  
> Guest 僅能編輯單一 Page。

### Member<span id="Notion_Team_Member"></span>
> owner > Sidebar > Settings > People > Add members<br/>
> Member 依授權不同最高可得到整個 workspace/teamspace 所有權。

## Collaboration
> L-Sidebar Settings > workspace > People 可管理共編成員與設定共編成員權限  
> Page Sharing: Page upper-right > share 可以設定頁面共編與否   
> Teamspace 建立: 左側 Sidebar > Settings > workspace > teamspaces > Teamspace setting > Manage Teamspaces 下可建立。

* A[Workspace 共編方式](https://www.notion.com/help/collaborate-within-a-workspace)
* B[Inbox and Page Notification](https://www.notion.com/help/updates-and-notifications)
- Inbox: 成員異動通知會統一收集在 workspace 左上的 inbox 區塊。
* C[Comments,mentions and reminders](https://www.notion.com/help/comments-mentions-and-reminders)
* D[Suggested edits](https://www.notion.com/help/suggested-edits)
* E[Page analytics](https://www.notion.com/help/page-analytics)
* F[Intro to teamspace](https://www.notion.com/help/intro-to-teamspaces)

A: 
- 共編類似 Jira confluence/Google sheet 編輯，可即時看到線上成員所做的異動。
- 點右上成員圖像可快速跳到成員現在編輯處。
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
 

##  Teamspace  
F: Teamspace
> Teamspace 可以簡單想成是，分享與共用 Workspace 的編輯權，也可想成是將 Workspace 割一塊出去共用。簡單的說就是子工作空間。    
> 有別於 Workspace Page 的分享，限縮於單一頁面或頁面部分區塊。
- [Teamspace 相關 Roles](#Notion_Teamspace_Roles)定義。

> 這邊須留意 <strong>版權</strong>與<strong>Member與Guest差異</strong>問題:<br/>  
> edu plus 版是提供給個人 individual，所以無提供 Teamspace 相關功能。<br/>  
> 反倒是 free 版提供 Teamspace 功能。但有限制 Members 人數最多 100。<br/>  
> [Member 依權限](#Notion_Team_Member)最高可編輯整份 Teamspace。<br/>
> [Guest 則只能見到與編輯](#Notion_Team_Guest) Owner 分享出來的特定頁面。 

- Teamspace 建立: 左側 Sidebar > Settings > workspace > teamspaces > Teamspace setting > Manage Teamspaces 下可建立。
    - Teamspace Page 建立: Teamspace > ... > + > Page
    - Workspace Page 轉 Teamspace Page > Page upright ... > move to 

- 新增 Teamspace 成員:
> Workspace member/ w-guest/ Teamspace member / Teamspace owner 可各自獨立邀請，但 workspace member 在 free version 下會自動升級為 teamspace member。

    - 只能由 Workspace 中已存在 People 中選取，故須先 invite workspace members(w-member) 或 share page(w-guest):
        - W-member: 左上 Workspace > Invite Members 
            - Sidebar > Settings > People> Invite \(workspace) Members 
            - free version workspace member 會自動成為 teamspace member，且無法移除 teamspace 的 role。
        - W-guest: 右上 share by email account
    - hover teamspace > Add (Team) Members 
        - 可填入 email 邀請非 notion account 夥伴
        - 也可直接將 workspace member 增加 teamspace role。 

### TeamSpace 相關 Roles / Groups <span id="Notion_Teamspace_Roles">&nbsp;</span>
__Roles__
* [官方 Roles 概念摘要](https://www.notion.com/help/whos-who-in-a-workspace)
- Workspace Owner: 對整個工作空間具有完全控制權的角色。  
- Workspace Member: W-owner 可允許頁面與其他 Notion 成員共編。這類被分享的成員為 Workspace Member。
- Workspace Guest (無 Notion account): W-owner 可經由 __email__ 允許頁面與其他  __非Notion 成員__ 共編。這類被分享的成員為 Workspace Guest。
- TeamSpace Owner: 子工作空間的擁有人。Workspace 可以拆出一塊多人共管。這塊拆出空間的管理人稱為 T-Owner。
- TeamSpace Member: T-owner 可允許頁面與其他成員共編。這類被分享的成員為 Teamspace Member。(W-member 預設賦予 T-member 權限)
 
__Groups__
* 在管理 Members / Guests 的右側是 Groups 管理頁簽。
    * Sidebar > settings > people > Groups
* 可自行建立 Group 並新增移除成員。
* Group 可簡化共編流程: 
    * 群組分享: Page sharing 時可以直接與 Group 分享
    * 由 Group 建立群組空間: Manage Group 頁簽的 ... > create teamspace from group
    * Group 成員僅能由 members / guests 中挑選。
### Teamspace 打包與退出群組
- 功能入口: Sidebar > Teamspace > ... > Leave/Archive Teamspace。
- 這邊功能應該有受限於版本種類，部份情形下無法使用。
  











## Trigger
* 付費版才能用，教育版無法使用。
* 當指定事件發生時，自動 trigger 其他事件動作。  
    * 例如: 當電話號碼欄位輸入後，自動驅動地址的縣市欄位。  
    * Page added trigger 
    * Property edited trigger: 由 Property 驅動 