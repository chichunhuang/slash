---
title: Notion 其他設定
description: Notion 關於設定
keywords: [Notion,Settings]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage";

## 語系與日曆
* <code>&nbsp; 側邊欄 &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Preferences &nbsp;</code> 🢂 <code>&nbsp; Language and Time &nbsp;</code> 
* 設定
    * Language: 這邊設定的是 UI 呈現的語系
    * Start week on: 設定周的起始方式，這邊會影響到 Database 等相關 Calendar 呈現。 

<div>
 {GoogleImage( 'google_file_id',  '18_Notion_Settings_05.png')}
</div>   

## ISMS-MFA
* IOS27001 要求了 MFA (Multi-factor authentication) 的部分，Notion 也有相關的功能實作。

<div>
 {GoogleImage( 'google_file_id',  '18_Notion_Settings_07.png')}
</div>   

### 2FA \(Google authenticator)
1. <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Account &nbsp;</code> 🢂 <code>&nbsp; Account Security &nbsp;</code> 🢂 <code>&nbsp; 2-Step Verification &nbsp;</code> 🢂 <code>&nbsp;  Change Verification Methods &nbsp;</code> 🢂 
2. 可設定多種 MFA 驗證方式，選擇使用。
1. 例如: Google authenticator 掃 QRcode 建立關聯。
1. 下次登入時便會要求輸入驗證碼。
1. 取消時至原位點 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Delete &nbsp;</code> 即可。Google Authenticator App 部分則是左滑可進入移除關聯設定。 

<div>
 {GoogleImage( 'google_file_id',  '18_Notion_Settings_08.png')}
</div>   

<div>
 {GoogleImage( 'google_file_id',  '18_Notion_Settings_09.png')}
</div>   

### PassKeys
1. notion 可以設定五個密鑰，並串接 Face ID, 指紋等來進行登入。
<div>
 {GoogleImage( 'google_file_id',  '18_Notion_Settings_10.png')}
</div>   

## Notion 通知相關設定
* 包含 email 通知與 inbox 線上通知
* 通知常發生於
    * @-mention 事件時
    * Notion database 中的 Person Property 被加入新成員時
    * 自行設定的通知條件
* 通知設定位置: <code>&nbsp; 側邊欄 &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Notifications &nbsp;</code>

<span>
 {GoogleImage( 'google_file_id',  '18_Notion_Settings_06.png')}
</span>   
<span>
 {GoogleImage( 'google_file_id',  '18_Notion_Settings_06-2.png')}
</span>  

## 錦上添花
    
### Notion Portrait 頭像製作
* [Notion Portrait/Notion Faces 頭像製作](https://faces.notion.com/)也是 Notion App 免費提供功能之一。
* 更換頭像方式 <code>&nbsp; 側邊欄 &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Account &nbsp;</code> 🢂 <code>&nbsp; Add Photo/Create Your Portrait &nbsp;</code>

<div>
 {GoogleImage( 'google_file_id',  '18_Notion_Settings_04.png')}
</div>   

### Emoji
* Member 可以設計並分享 Emojis。
* <code>&nbsp; 側邊欄 &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Emoji &nbsp;</code> 🢂 <code>&nbsp; Add Emoji &nbsp;</code>
* 只可以用在部分區域。錦上添花似乎沒特別用處。  

<div>
 {GoogleImage( 'google_file_id',  '18_Notion_Settings_03.png')}
</div>   

<hr/>
使用下面功能前，請先準備好信用卡，<br/>
因為這邊調整與設定都至少需要 plus 版本以上。
<hr/>

## ISMS-成員匯出
* 若有 ISMS 需求，錢就花下去吧，會讓你省事不少。
* [Export workspace members](https://www.notion.com/help/workspace-settings?g-exp=marketing_localization_banner--banner%2Cmarketing_visit_aa_test--on#export-workspace-members)
* <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; General &nbsp;</code> 🢂 <code>&nbsp; Export members as CSV &nbsp;</code>

<div>
 {GoogleImage( 'google_file_id',  '18_Notion_Settings_02.png')}
</div>   
   
## Workspace 設定
* 設定位置: <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Public Settings &nbsp;</code> 🢂 <code>&nbsp; Allowed Email Domain &nbsp;</code> 
* Allowed Email Domain: <span id="notion_Email_Domain">&nbsp;</span>
   * 這是一個特殊的設定，可以讓同 email doamin \(電子郵件地址網域, Email @ 後半的部分) 的人，自動加入工作區。適用於同公司的成員自動加入 Workspace。
   * 條件: 該 email doamin 必須是 __既有成員__ 的 email domain。
   * 當該 email 擁有者建立 Notion Account 時會被詢問是否加入指定 workspace。
   * 部分情境若造成成員數量超出上限，將須支付費用。      

<div>
 {GoogleImage( 'google_file_id',  '18_Notion_Settings_01.png')}
</div>   