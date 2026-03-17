---
title: React 核心運作概念
description: React 核心運作概念
keywords: [React]
---

> React 本質上是一個 __UI 函式庫__ ，核心思想就是  
> UI = f\(state)   
> <span style={{color: '#0044FF'}}>__UI 由函式所構成__</span>  

## 核心運作概念
* UI 由函式所構成
* 開發者宣告 state/props 用來描述資料狀態
* React 計算出畫面長相
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
* 簡單的比較兩者差異: 
    * state 指的是 React 管理生命週期的變數，通常經由 useState 取得，異動會造成重新渲染。
    * props 指的是 UI 間傳遞的變數，React 並未掌握 props 的生命週期。
    
## useEffect 向後端取值流程概念
* 經由 useEffect hook 非同步向後端取資料
* 將所得的資料餵給 useState 的 setter 變數
* JSX 自 state 取值並渲染 


__useEffect 實作概念__ <span id="useEffect"></span>
* 註: 可以把 API 呼叫抽出去到獨立 api.js 中方便管理

```javascript
    import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";

export default function RealtimeTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      try {
        const response = await fetch("/api/realtime-data");

        if (!response.ok) {
          throw new Error("資料取得失敗");
        }

        const result = await response.json();
        setTableData(result); // useEffect 拿到的資料存進 state
        setError("");
      } catch (err) {
        setError(err.message || "發生未知錯誤");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const columns = [
    {
      key: "id",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "name",
      title: "名稱",
      dataIndex: "name",
    },
    {
      key: "value",
      title: "數值",
      dataIndex: "value",
    },
    {
      key: "updatedAt",
      title: "更新時間",
      dataIndex: "updatedAt",
      render: (value) => new Date(value).toLocaleString(),
    },
  ];

  if (loading) {
    return <p>載入中...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>錯誤：{error}</p>;
  }

  return (
    <div>
      <h2>即時資料表格</h2>
      <DataTable columns={columns} data={tableData} />
    </div>
  );
}

```

__DataTable.jsx__
* 通用 Table Container
* 注: columns 也可一併封裝在 data 之內

```javascript
import React from "react";

export default function DataTable({ columns, data, emptyText = "無資料" }) {
  return (
    <table
      border="1"
      cellPadding="8"
      style={{
        borderCollapse: "collapse",
        width: "100%",
      }}
    >
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr key={row.id ?? rowIndex}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.render
                    ? column.render(row[column.dataIndex], row)
                    : row[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} style={{ textAlign: "center" }}>
              {emptyText}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
```

__MVC__

* services/api.js

```
export async function getRealtimeData() {
  const response = await fetch("/api/realtime-data");

  if (!response.ok) {
    throw new Error("資料取得失敗");
  }

  return response.json();
}
```

```
import { getRealtimeData } from "../services/api";

const fetchData = async () => {
  setLoading(true);

  try {
    const result = await getRealtimeData();
    setTableData(result);
  } finally {
    setLoading(false);
  }
};
```