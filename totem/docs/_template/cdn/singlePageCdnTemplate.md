---
title: 單一頁面cdn指定js範例
description: 單一頁面cdn指定js範例
---

import React, { useEffect, useState } from 'react';
import Head from '@docusaurus/Head';

# DayJS 測試頁面（mdx）

## 注意事項
* 不能直接在 md/jsx 寫 script tag
    * Docusaurus 預設採用 React server rendering，直接寫 \<script\> 會被跳過或造成 hydration mismatch。
    * Docusaurus 動作流程: mdx → React component → 在 server 先跑一遍， cdn js 此時尚未載入，因而會發出 sever side 錯誤；如 xxjs is not defined。
* 下方方式引入的 JS 會是 <span style={{color: '#FF1100'}}>__global variable__</span>，非 ES module。
    * CDN script 會把函式或物件掛到 <span style={{color: '#0044FF'}}>__window__</span>
    * 所以範例中會寫成 window.dayjs
    * 另外，採用 useEffect \( client-side 呼叫\)，確保 CDN js 不是在 server side 執行。

## 單一頁面cdn指定js範例。


```
<Head>
  <script src="https://cdn.jsdelivr.net/npm/dayjs/dayjs.min.js"></script>
</Head>

<TodayTime />

export function TodayTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    if (window.dayjs) {
      setTime(window.dayjs().format("YYYY-MM-DD HH:mm:ss"));
    } else {
      console.error("dayjs 尚未載入！");
    }
  }, []);

  return (
    <div style={{padding: "16px", border: "1px solid #ccc"}}>
      現在時間：{time || "載入中..."}
    </div>
  );
}
```

<Head>
  <script src="https://cdn.jsdelivr.net/npm/dayjs/dayjs.min.js"></script>
</Head>

<TodayTime />

export function TodayTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    if (window.dayjs) {
      setTime(window.dayjs().format("YYYY-MM-DD HH:mm:ss"));
    } else {
      console.error("dayjs 尚未載入！");
    }
  }, []);

  return (
    <div style={{padding: "16px", border: "1px solid #ccc"}}>
      現在時間：{time || "載入中..."}
    </div>
  );
}