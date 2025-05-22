---
title: Notion 共編
description: Notion 共編
keywords: [Notion,Sharing]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage";

## 關於共編必需知道的事
> 寫在最前面，共編前須先搞清楚 <br/>
> 共編種類: <code>工作區共編\(Teamspace)</code>，<code>單頁共編\(Page Sharing)</code> <br/>
> [共編角色分為: Member，Guest](https://www.notion.com/help/whos-who-in-a-workspace) <br/>

* 註: edu plus 是開放給個人使用，所以有共編限制。免費版反倒是限制較小。 

### [Members](https://www.notion.com/help/add-members-admins-guests-and-groups#add-a-member) 與 [Guests](https://www.notion.com/help/add-members-admins-guests-and-groups#add-a-guest) 差別。 
* <code>Member</code> 權限較大，可檢視整個 Workspace。    
* <code>Guests</code> 權限小，僅能共編被指定頁面。Notion edu plus 版本下單一 Teamspace 可設 100 Guests。  
* Member 與 Guest 都屬於 Notion Database 中的 Person Property，可自動成為 Database 選擇清單項目。    

### Member<span id="Notion_Team_Member"></span>
> Member 依授權不同最高可得到整個 Workspace/Teamspace 所有權。
> 非個人 edu plus 版直接共用 Teamspace 即可。

* 左側<code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; People &nbsp;</code> 🢂 <code>&nbsp; Add members &nbsp;</code><br/>

<div>
 {GoogleImage( '15aF1aULY_pUnRYhCsWQSFElziDdKl48Q',  '16_Notion_Collaboration_02.png' , {width:'652px', height:'191px', hidden:true, degree:0})}
</div>

### Guest <span id="Notion_Team_Guest"></span>

* Guest 僅能編輯受分享 Pages。
* Guest 不須有 Notion Account，但需 email 驗證以取得登入密碼，並依相關指示設驗證與認證方式。
* 需要用到 Guest 可能情境:  
    * 想共編 Workspace 的 Private Page 時使用。
    * Edu plus 無法建立 Teamspace 時使用。


* Page Owner 經由 <code>&nbsp; Page 右上 Share &nbsp;</code> 🢂 <code>&nbsp; email &nbsp;</code> 🢂 <code>&nbsp; Invite &nbsp;</code>。

<div>
 {GoogleImage( '1-t35cBZ0qeH6sTFkfY-_FOlreb6R3L8-',  '16_Notion_Collaboration_03.png' , {width:'412px', height:'290px', hidden:true, degree:0})}
</div>


## 開始共編 <span id="Collaboration">&nbsp;</span>
> L-Sidebar <code> Settings &nbsp;</code> 🢂 <code>&nbsp; workspace &nbsp;</code> 🢂 <code>&nbsp; People &nbsp;</code> 可管理共編成員與設定共編成員權限  
> Page Sharing: <code> Page upper-right &nbsp;</code> 🢂 <code>&nbsp; share &nbsp;</code> 可以設定頁面共編與否   
> Teamspace 建立: 左側 <code> Sidebar &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; workspace &nbsp;</code> 🢂 <code>&nbsp; teamspaces &nbsp;</code> 🢂 <code>&nbsp; Teamspace setting &nbsp;</code> 🢂 <code>&nbsp; Manage Teamspaces &nbsp;</code> 下可建立。

__共編權限設定__ <span id="Collaboration_Auth">&nbsp;</span>
<div>
 {GoogleImage( '15aF1aULY_pUnRYhCsWQSFElziDdKl48Q',  '16_Notion_Collaboration_02.png' , {width:'652px', height:'191px', hidden:true, degree:0})}
</div>

* B[Inbox and Page Notification](https://www.notion.com/help/updates-and-notifications)
- Inbox: 成員異動通知會統一收集在 workspace 左上的 inbox 區塊。
* C[Comments,mentions and reminders](https://www.notion.com/help/comments-mentions-and-reminders)
* D[Suggested edits](https://www.notion.com/help/suggested-edits)
* E[Page analytics](https://www.notion.com/help/page-analytics)
* F[Intro to teamspace](https://www.notion.com/help/intro-to-teamspaces)

### [Workspace 共編方式](https://www.notion.com/help/collaborate-within-a-workspace)
- 共編類似 Jira confluence/Google sheet 編輯，可即時看到線上成員所做的異動。
- 點右上成員圖像可快速跳到成員現在編輯處。
- 查授權成員: 左側<code>Sidebar Settings</code> 🢂 <code>Workspace</code> 🢂 <code>People</code> 可看到 [<code>已授權共編成員</code>](#Collaboration_Auth)
- **<span style={{color: '#0044FF'}}> 暫停共編 </span>** \(授權仍在，僅***暫時***停用):
    - 頁面鎖定\(全頁鎖定): 頁面右上<code> ... </code> 🢂 <code>&nbsp; Lock Page &nbsp;</code>。 __所有人__ 包含 Wwner 都無法編輯。但Full Access 成員可重新開啟。
    - Database 鎖定\(部分鎖定): Database <code> 左側 __ ⁝⁝ __ </code> 🢂 <code> lock database </code>。 限定指定 Database 所有成員皆無法編輯。但相關連 [Form Responses](./Notion_Form) 仍可進行回應。 

__線上成員及時狀態__
<div>
 {GoogleImage( '1xYDEm36p7zPdPqVNkPY50ULBJtmzXrze',  '16_Notion_Collaboration_04.png' , {width:'652px', height:'321px', hidden:true, degree:0})}
</div>

__頁面鎖定__
<div>
 {GoogleImage( '10xcg0hxO_8xEqrO4TJR3SDISeiTGWI9C',  '16_Notion_Collaboration_05.png' , {width:'235px', height:'267px', hidden:true, degree:0})}
</div>

__Database 鎖定__
<div>
 {GoogleImage( '1HM6ygMRQTVUj-g_AZCeYeH2uj9h6xlip',  '16_Notion_Collaboration_06.png' , {width:'625px', height:'249px', hidden:true, degree:0})}
</div>


### Comments and Reminders
> Comments / Mentions / Reminders 這些功能用來輔助異地辦公的合作成員於系統上進行溝通。

__Comments__ 
- 可對 __整頁__ 留言或是 __指定區塊__ 留言。
- 頁面右上方對話泡泡 icon ，檢視整頁面上所有的留言。
- 對話泡泡 icon，進去後可以在頁面上留言。或針對他人留言進行回覆(Reaction)與標記解決(Resolve)。
- 編輯頁面時，在任意處 highlight 內容時，會自動出現 tool bar 來針對內容留言。
    - 有附言區塊會被黃色標註。解決後顏色消失。
    
___&emsp;&emsp;全頁註記___
<div>
 {GoogleImage( '1Ey99UOcoGbb-TmyIQIymIUClJJr-kfiu',  '16_Notion_Collaboration_08.png' , {width:'513px', height:'198px', hidden:true, degree:0})}
</div>

___&emsp;&emsp;區塊註記___
<div>
 {GoogleImage( '1dfj6_RpkwzfmNY22R853NzIj-T_rl8P9',  '16_Notion_Collaboration_07.png' , {width:'652px', height:'205px', hidden:true, degree:0})}
</div>

___&emsp;&emsp;回復或編輯留言___
<div>
 {GoogleImage( '1hMeR4qqhuV1ded2LIOjh1lGCz9SzxXpZ',  '16_Notion_Collaboration_09.png' , {width:'348px', height:'313px', hidden:true, degree:0})}
</div>

___&emsp;&emsp;針對任一內容留言___
<div>
 {GoogleImage( '1tsDpl5yd50-JXZAOrJoHGqfQCS2EVOXw',  '16_Notion_Collaboration_10.png' , {width:'627px', height:'128px', hidden:true, degree:0})}
</div>
    

___&emsp;&emsp;Mentions___
- Comment 時可以加註 @ 來提及其他人/頁面/時間等事項。
<div>
 {GoogleImage( '1w6i6VCbw5A3eJuE4UW1yEop3RCEvWAEm',  '16_Notion_Collaboration_11.png' , {width:'328px', height:'482px', hidden:true, degree:0})}
</div>

__Reminders__
- Reminder 則是用來設定事件提醒。
- 編輯者可以在頁面建立標籤並指定預告時間，畫面上會出現帶時間點藍色/紅色時鐘標籤。當提醒時間到達時，成員的 inbox/email/手機 會收到活動的預告通知。
- 咒語: 
    - 直接在指定位置輸入 <code>@remind</code> 後接一個時間。
    - 可針對已建立 reminder 更改活動時間或預告通知時間。
    
__建立 Reminder__
___&emsp;&emsp;@remind 咒語___
<div>
 {GoogleImage( '17G7NC0_qwj1OsRwgTH5Wu7oORCZkMAPc',  '16_Notion_Collaboration_12.png' , {width:'407px', height:'312px', hidden:true, degree:0})}
</div>

___&emsp;&emsp;修改預告時間，提醒時間___
* 直接滑鼠點 Reminder 可進入編輯視窗
<div>
 {GoogleImage( '1gszN3igWAYRa7Edvm6bkE8KCCh_uZcRT',  '16_Notion_Collaboration_13.png' , {width:'550px', height:'601px', hidden:true, degree:0})}
</div>

___&emsp;&emsp;Inbox 通知___  
<div>
 {GoogleImage( '1mo0U_UNrQh7-1Wdwlyuo_fY9YoH7gRlr',  '16_Notion_Collaboration_14.png' , {width:'600px', height:'167px', hidden:true, degree:0})}
</div>

___&emsp;&emsp;已逾時 Reminder___
* 標籤會由藍轉紅
<div>
 {GoogleImage( '1f1fljVUtZh_hY8JZJoovoH9YmYG0zOXT',  '16_Notion_Collaboration_15.png' , {width:'285px', height:'41px', hidden:true, degree:0})}
</div>


### 修改建議
- 這邊類似批閱作業概念，合作成員可以進入 __Suggesting 模式，先行批改調整內容__ 但內容並未正式生效。後再由其他成員決定是否直接採納。
- 頁面右上 <code>&nbsp; … &nbsp;</code> 🢂 <code>&nbsp; Suggest edits </code> 進入或離開 <code> Suggesting mode</code>。 
- 建議的調整內容會被藍色標註。接收方點藍色區塊會跳出回應面版。選擇<code>接受</code>後顏色消失，若<code>拒絕</code>則內容退回建議前狀態。 
- 留言方與接收方可在文本旁直接對話。

__進入 Suggesting Mode__
<div>
 {GoogleImage( '1qF8cIl22R_TobwOD2gI8DACWbgKTGqkw',  '16_Notion_Collaboration_18.png' , {width:'316px', height:'291px', hidden:true, degree:0})}
</div>

__訊息接收方__
<div>
 {GoogleImage( '1gPMbH_Gx1nxaMfv5m6GG3rbhjJ63kk5Z',  '16_Notion_Collaboration_16.png' , {width:'494px', height:'189px', hidden:true, degree:0})}
</div>

### Notion Analytics
- 跟 Google 類似 Notion 有提供成員瀏覽與編輯狀況簡易分析。
- Page owner 可以在右上 <code>&nbsp; … &nbsp;</code> 🢂 <code>&nbsp; updates & analytics &nbsp;</code> 🢂  檢視 Page 瀏覽狀態。 
- Analytics 預設開啟。關閉分析方式 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Preferences &nbsp;</code> 🢂 <code>&nbsp; Privacy &nbsp;</code> 🢂  <code>&nbsp; Show my view history &nbsp;</code> 🢂 <code>&nbsp; Record/Don't Record &nbsp;</code>

__頁面異動與檢視分析__ 
<div>
 {GoogleImage( '1RKbDHKR1FwmIXfCEV62TFxyZ7RK0lYHU',  '16_Notion_Collaboration_17.png' , {width:'564px', height:'598px', hidden:true, degree:0})}
</div>

__關閉頁面分析__
<div>
 {GoogleImage( '1ln-UuY9wAxI4H8MQRj5kHKB5LzJjGv8e',  '16_Notion_Collaboration_19.png' , {width:'652px', height:'398px', hidden:true, degree:0})}
</div>

##  Teamspace  
> Teamspace 可以簡單想成是，分享與共用 Workspace 的編輯權，  
> 也可想成是將 Workspace 割一塊出去共用。簡單的說就是子工作空間。    
> 有別於 Workspace Page 的分享，限縮於單一頁面或頁面部分區塊。  
> 這邊須留意 <strong>版權</strong> 與 <strong>Member和Guest</strong> 在功能上差異問題  
> 
> 版權上:  
> 免費版 Free Plan 以上有提供 Teamspace 功能。  
> 但一般教育版僅供個人使用，所以無此功能但可以以 Guest 分享解決此問題，而 Guests 人數上限為 100。  
> 角色上:  
> [Member](#Notion_Team_Member) 依權限最高可編輯整份 Teamspace。  
> [Guest](#Notion_Team_Guest) 則只能見到與編輯 Owner 分享出來的特定頁面。 

- [Teamspace 相關 Roles](#Notion_Teamspace_Roles)定義摘要參考。  

### Teamspace 建立
__Teamspace 建立__
左側 <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp;&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Teamspaces &nbsp;</code> 🢂 <code>&nbsp; Teamspace setting &nbsp;</code> 🢂 <code>&nbsp; Manage Teamspaces </code>下可建立。

<div>
 {GoogleImage( '1efSDdTTaLWv_yySei-eEQNeGboWLt2bW',  '16_Notion_Collaboration_20.png' , {width:'652px', height:'315px', hidden:true, degree:0})}
</div>

<div>
 {GoogleImage( '11B8ycubXAxqva5mSKhFve1sRSwKj6Sy1',  '16_Notion_Collaboration_21.png' , {width:'385px', height:'423px', hidden:true, degree:0})}
</div>


__Teamspace 頁面建立__
- 由 Teamspace 建立頁面: <code>&nbsp; Teamspace &nbsp;</code> 🢂 <code>&nbsp; + &nbsp;</code> 🢂 <code>&nbsp; Empty Page/Database </code>
<div>
 {GoogleImage( '1-uq8QufZUg63V3fdNsXxYypeXbVl6ttp',  '16_Notion_Collaboration_22.png' , {width:'283px', height:'98px', hidden:true, degree:0})}
</div>
<div>
 {GoogleImage( '11urR06fvJffmU5_Po3SJjGlvE7oN_Afv',  '16_Notion_Collaboration_23.png' , {width:'629px', height:'485px', hidden:true, degree:0})}
</div>

- Workspace 搬移頁面: 頁面右上<code>&nbsp; … &nbsp;</code> 🢂 <code>&nbsp; move to &nbsp; </code> 🢂 <code>&nbsp; 指定 Teamspace &nbsp; </code>
<div>
 {GoogleImage( '1oQDYxzW5eYBXD4x7SroKQIPJaMoqfnzS',  '16_Notion_Collaboration_24.png' , {width:'458px', height:'548px', hidden:true, degree:0})}
</div>


### 新增 Teamspace 成員
> Workspace Member / Workspace  Guest / Teamspace Member / Teamspace Owner 可各自獨立邀請，  
> 但在 free plan 下 Workspace Member 會自動升級為 Teamspace Member。

__新增 Teamspace Member__
- Teamspace <code>&nbsp; … &nbsp;</code> 🢂 <code>&nbsp; Add (Team) Members &nbsp; </code>  
    - 可填入 email 邀請非 notion account 夥伴
    - 也可填入關鍵字自動由 People Property 中選取既有 Workspace Member/Guest。
    - 另外也可直接將 workspace member 增加 teamspace role。 

<span>
 {GoogleImage( '1pgMBFfs1oJCesN78BisW5AUbKX_PlgfQ',  '16_Notion_Collaboration_25.png' , {width:'415px', height:'204px', hidden:true, degree:0})}
</span>
<span>
 {GoogleImage( '1zOtx3g3TTRbRszSo194BfKAnihVvCehI',  '16_Notion_Collaboration_26.png' , {width:'400px', height:'165px', hidden:true, degree:0})}
</span>

__建立 People 下拉選單__
- 若想由 Workspace 中已存在 People 中選取，則須先 invite Workspace Members 或 share with Workspace Guest
- Workspace Member: 
    - 左上 Workspace 🢂 Invite Members 
    - Sidebar 🢂 Settings 🢂 People 🢂 Invite \(workspace) Members 
- Workspace Guest: 右上 share by email account

___Invite___
<span>
 {GoogleImage( '1dAais51dcfHRYnw5SHa_uJNdihMVHG-r',  '16_Notion_Collaboration_27.png' , {width:'250px', height:'218px', hidden:true, degree:0})}
</span>
<span>
 {GoogleImage( '1-L3pNCkNYuKe8pptaSxp5mzRFQpxvuKb',  '16_Notion_Collaboration_30.png' , {width:'292px', height:'238px', hidden:true, degree:0})}
</span>
<div>
 {GoogleImage( '1S9HQxC_rJW70vl6rJDUwG1TDORu1WwGJ',  '16_Notion_Collaboration_28.png' , {width:'652px', height:'193px', hidden:true, degree:0})}
</div>

___Share___
<div>
 {GoogleImage( '1qga2U0auWuyMQ_k0BlGJJuGg-w3dd_Pd',  '16_Notion_Collaboration_29.png' , {width:'365px', height:'227px', hidden:true, degree:0})}
</div>

### TeamSpace 相關 Roles / Groups <span id="Notion_Teamspace_Roles">&nbsp;</span>
__Roles__
* [官方 Roles 概念摘要](https://www.notion.com/help/whos-who-in-a-workspace)

|       Role        |                          |
|----------|-----------------|
| **Workspace Owner**| 對整個工作空間具有***完全控制權***的角色 |
| **Workspace Member**| Workspace Owner 可允許頁面與其他 Notion 成員共編。<br/>這類被分享的成員為 Workspace Member |
| **Workspace Guest**<br/>(無 Notion account)| Workspace Owner 可經由 __email__ 允許頁面與其他  __非Notion 成員__ 共編。<br/>這類被分享的成員為 Workspace Guest<br/>免費版上限為100人 |
| **TeamSpace Owner**| 子工作空間的擁有人。<br/>Workspace 可以拆出一塊多人共管。這塊拆出空間的管理人稱為 TeamSpace Owner<br/>edu plus ***個人版***無此功能 |
| **TeamSpace Member**| TeamSpace Owner 可允許頁面與其他成員共編。<br/>這類被分享的成員為 Teamspace Member。<br/>(Workspace Member 預設賦予 TeamSpace Member 權限) |

 
__Groups__
* 在管理 Members / Guests 的右側是 Groups 管理頁簽。
    * <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; People &nbsp;</code> 🢂 <code>&nbsp; Groups &nbsp;</code>
* 可自行建立 Group 並新增移除成員。
* Group 可簡化共編流程: 
    * 群組分享: Page sharing 時可以直接與 Group 分享
    * 由 Group 建立群組空間: Manage Group 頁簽的 <code>&nbsp; __ … __ &nbsp;</code> 🢂 <code>&nbsp; create teamspace from group &nbsp;</code>
    * Group 成員僅能由 members / guests 中挑選。

### Teamspace 打包與退出群組
- 功能入口: <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Teamspace &nbsp;</code> 🢂 <code>&nbsp; __ … __ &nbsp;</code> 🢂 <code>&nbsp; Leave/Archive Teamspace &nbsp;</code>
- 這邊功能應該有受限於版本種類，部份情形下無法使用。
  
<span>
 {GoogleImage( '1pgMBFfs1oJCesN78BisW5AUbKX_PlgfQ',  '16_Notion_Collaboration_25.png' , {width:'415px', height:'204px', hidden:true, degree:0})}
</span>
<span>
 {GoogleImage( '1ItP_1N4M6kCbSNvOo5QGLrUMhp90FERY',  '16_Notion_Collaboration_31.png' , {width:'343px', height:'247px', hidden:true, degree:0})}
</span>


## Trigger
* 付費版才能用，教育版無法使用。
* 當指定事件發生時，自動 trigger 其他事件動作。  
    * 例如: 當電話號碼欄位輸入後，自動驅動地址的縣市欄位。  
    * Page added trigger 
    * Property edited trigger: 由 Property 驅動 
    
## 共編技巧
* 付費版直接共用 Teamspace 即可。
* 機構型 edu plus 版也是直接共用 Teamspace 即可。
* 需共編 Workspace 下的 Private Page 時，可將 Page 搬移至 Teamspace 或是將 Page 逐頁分享。
* 個人版 edu plus 無 Teamspace 則需以 Share 進行單一頁面分享。
* 團隊成員可以採用 [Email Domain](Notion_Setting#notion_Email_Domain) 相關設定自動加入。
* [Git Pull Request 經由 Notion 管理](./Notion_GitHub#notion_Git_PR)