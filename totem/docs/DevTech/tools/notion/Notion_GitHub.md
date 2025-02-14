---
title: Notion GitHub 整合
description: Notion-Integrate GitHub
keywords: [Notion,GitHub]
---

> 
## Goal 
利用 Notion 來管理 Sprint 與 workflow 進度


## Notion 與 GitHub 整合的先決條件與設定  
> 一個 GitHub Organization，一次只能連接一個 Notion workspace。需 disconnect 後才可更換藥連結的 workspace。 

* Sidebar > Settings > My Connections > show all > GitHub (Workspace) > 選取全部或單一 repo > connect > 帳密驗證

## 在 Notion 中預覽程式碼
* 先到 GitHub > 進入程式碼(或是其他頁面切換至 code tab) > 在程式碼行號處 > 又滑鼠右鍵 > ... > Copy [Permalink](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet#linking-to-code) 
* Notion Page > 貼上 link > Paste as preview > 若未連接 GitHub 會出現驗證要求 > 畫面自動與 指定程式碼同步 

## Pull Request \(PR) 管理:
Developer 請求將 Client 端程式先上傳 Repo 但未與 Branch 合併，等管理者同意後才由管理者正式合併。
Notion 可以將 GitHub 上的 PR 進行同步，並做 UI 管理呈現。
* GitHub > 複製 PR or issue 的 Link > Notion Page > Paste as database 
* 此時 Notion database > + > 新增 property 下會出現 'GitHub Pull Requests' property
* 建立 'GitHub Pull Requests' property 時 Notion 會自動建立 Unique ID property。
* 往後在 Notion 中便可以以 Unique ID 來串接 Notion Task 與 GitHub PR。
* Task 的狀態也可以同步到 PR。