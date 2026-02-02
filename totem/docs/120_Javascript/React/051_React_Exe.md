---
title: React 核心運作概念
description: React 核心運作概念
keywords: [React]
---

> React 本質上是一個 UI 函式庫，核心思想就是  
> UI = f\(state)   
> UI 由函式所構成  

## 核心運作概念
* UI 由函式所構成
* 開發者宣告 state/props 用來描述資料狀態
* React 計算出畫面帳長相
* 運作流程：
 * 撰寫 Component\(元件)
 * Component 是 javascript 函式或 class
 * React 執行這些函式後建立 Virtual DOM
 * 不同次渲染時，React 比對前一次 vs 現在的 Virtual DOM 差異
 * React 只更新 __真的有變動__ 的 DOM
* 實際運作架構可分為三類
 * CSR : Client Side Rendering \(由 Browser 進行渲染)
 * SSR : Server Side Rendering \(由 server 進行首次渲染，後由 Browser 接續)
 * RSC : React Server Components

### CSR : Client Side Rendering
* 最原始的 React 用法，Server 只是 __檔案提供者__，所有 __執行與渲染__ 都在 client 發生。
* 運作流程：
 * 使用者打開網頁
 * Browser 下載 index.html 與 bundle.js
 * React 在 Browser 裡執行
 * React 產生畫面、綁定事件

### SSR : Server Side Rendering
* 運作流程：
 * 使用者請求
 * Server 端執行 React
 * 產生已經有內容的 HTML \(首次渲染)
 * Browser 收到 HTML 先顯示 server 傳來的渲染畫面
 * Browser 端待 JS 載入後，改由 React 接管 \(Hydration)
 
### RSC : React Server Components
* 與上方差異處在於，部分 Component 只在 Server 端跑，永遠不送到 Browser 端。
* 相關程式不會出現在 JS bundle，通常是用來存取 DB 或 FS 時使用，並將結果回傳給 Browser。

```javascript
// Server Component
    export default async function Page() {
      const data = await db.query()
      return <div>{data}</div>
    }
```

## state vs props