---
title: Notion GitHub 整合
description: Notion-Integrate GitHub
keywords: [Notion,GitHub]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage";


> 利用 Notion 來管理 Sprint 與 Workflow 進度

## Notion 與 GitHub 整合

### Notion 與 GitHub 整合的先決條件與設定  
> 一個 GitHub Organization，一次只能連接一個 Notion Workspace。需 disconnect 後才可更換要連結的 Workspace。 

* [Integrate GitHub 官方參考資料](https://www.notion.com/help/github)
* 設定方式: <code>&nbsp; Sidebar &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Connections New(上) &nbsp;</code> 🢂 <code>&nbsp; see all &nbsp;</code> 🢂 <code>&nbsp; GitHub (Workspace) &nbsp;</code> 🢂 <code>&nbsp; 選取全部或單一 repo &nbsp;</code> 🢂 <code>&nbsp; connect &nbsp;</code> 🢂 <code>&nbsp; 帳密驗證 &nbsp;</code>

__Notion 端設定__
<div>
 {GoogleImage( 'google_file_id',  '21_Notion_GitHub_01.png')}
</div>

__GitHub 端設定__
<div>
 {GoogleImage( 'google_file_id',  '21_Notion_GitHub_02.png')}
</div>

### 在 Notion 中預覽程式碼
* 先到<code>&nbsp; GitHub &nbsp;</code> 🢂 進入<code>&nbsp; 程式碼頁 &nbsp;</code>(或是其他頁面切換至 code tab) 🢂 可以 <code>&nbsp; Shift &nbsp;</code> 選取多行 🢂 程式碼<code>&nbsp; 行號 &nbsp;</code>處 🢂 滑鼠<code>&nbsp; 右鍵 &nbsp;</code> 🢂 <code>&nbsp; __ … __ &nbsp;</code> 🢂 <code>&nbsp; Copy [Permalink](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet#linking-to-code) &nbsp;</code> 🢂 取得資源
    * 或使用 propmt <code>/github </code>在 Notion 彈出視窗中輸入 Permalink。
    * 註: 關於 [GitHub 的 Permalink 介紹參考](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet#linking-to-code)
* Notion <code>&nbsp; Page &nbsp;</code> 🢂 貼上 <code>&nbsp; Permalink &nbsp;</code> 🢂 <code>&nbsp; Paste as preview &nbsp;</code> 🢂 若未連接 GitHub 會出現<code>&nbsp; 驗證要求 &nbsp;</code> 🢂 畫面自動與指定程式碼同步 
    * 點預覽內容可直接跳轉到 GitHub 程式碼原始位置
    * 預覽區右上可 reload 

__Permalink__
<div>
 {GoogleImage( 'google_file_id',  '21_Notion_GitHub_04.png')}
</div>

__Paste as preview__
<div>
 {GoogleImage( 'google_file_id',  '21_Notion_GitHub_05.png')}
</div>

## 中斷 Notion 與 GitHub 連線設定
* <span style={{color: '#FF1100'}}>Notion 與 GitHub 兩端</span>皆需要進行中斷，才可重新設定
* 一個 Workspace 只能與一個 GitHub App 綁定

### Notion 端移除 GitHub Connection
* 兩處設定
    * <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Connections New(上) &nbsp;</code> 🢂 <code>&nbsp; My Connections &nbsp;</code> 🢂 <code>&nbsp; GitHub &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Disconnect Account &nbsp;</code>
    * <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; Connections (下) &nbsp;</code> 🢂 <code>&nbsp; All Connections &nbsp;</code> 🢂 <code>&nbsp; GitHub &nbsp;</code> 🢂 <code>&nbsp; ... &nbsp;</code> 🢂 <code>&nbsp; Disconnect All Users &nbsp;</code>

<div>
 {GoogleImage( 'google_file_id',  '21_Notion_GitHub_06.png')}
</div>

<div>
 {GoogleImage( 'google_file_id',  '21_Notion_GitHub_07.png')}
</div>


### GitHub 端移除 Notion Workspace 的 Permissions

* 移除設定: <code>&nbsp; GitHub Home &nbsp;</code> 🢂 <code>&nbsp; 右上 portrait &nbsp;</code> 🢂 <code>&nbsp; Settings &nbsp;</code> 🢂 <code>&nbsp; 左側欄 Applications &nbsp;</code> 🢂 <code>&nbsp; Authorized OAuth Apps &nbsp;</code> 🢂 <code>&nbsp; Revoke &nbsp;</code> 

<div>
 {GoogleImage( 'google_file_id',  '21_Notion_GitHub_G_08.png')}
</div>
<div>
 {GoogleImage( 'google_file_id',  '21_Notion_GitHub_G_09.png')}
</div>

### GitHub 端移除 Notion 的 GitHub App 綁定
* 與上方操作相同先進入 <code>&nbsp; 左側欄 Applications &nbsp;</code> 🢂 <code>&nbsp; Installed GitHub Apps &nbsp;</code> 🢂 <code>&nbsp; Configure &nbsp;</code>

__GitHub App 綁定移除__
<div>
 {GoogleImage( 'google_file_id',  '21_Notion_GitHub_12.png')}
</div>
<div>
 {GoogleImage( 'google_file_id',  '21_Notion_GitHub_11.png')}
</div>


## Pull Request \(PR) 管理:
> Developer 請求將 Client 端程式先上傳 Repo 但此時尚未與 Branch 合併，  
> 等管理者同意後才由管理者正式合併。  
> Notion 可以將 GitHub 上的 PR 進行同步，並做 UI 管理呈現。  

* [官方參考](https://www.notion.com/help/github)

* GitHub > 複製 PR or issue 的 Link > Notion Page > Paste as database 
* 此時 Notion database > + > 新增 property 下會出現 'GitHub Pull Requests' property
* 建立 'GitHub Pull Requests' property 時 Notion 會自動建立 Unique ID property。
* 往後在 Notion 中便可以以 Unique ID 來串接 Notion Task 與 GitHub PR。
* Task 的狀態也可以同步到 PR。

要將您的 GitHub 拉取請求連結到 Notion 資料庫中的項目+，
只需使用 右上角的按鈕 向資料庫新增一個新屬性 並選擇GitHub Pull Requests。整合將根據 GitHub 拉取請求狀態自動更新 Notion 中的任務狀態


## GitHub 儲存庫
[GitHub 儲存庫](https://www.notion.com/help/github#create-a-synced-database)
要將資料從 GitHub 儲存庫同步到 Notion 資料庫，
請複製 GitHub 鏈接，將其貼上到 Notion 中並選擇 Paste as database。將出現一個新的 Notion 資料庫，其中所有 GitHub 屬性均自動新增