---
title: 全域可用 cdn js範例
description: 全域可用 cdn js範例
---

# 全域可用 cdn js範例

## 注意事項
* ⚠️ 「全域可用」是否代表只有用到的頁面才下載 ?<br/>
* <span style={{color: '#FF1100'}}>__不! 不! 不!__</span>  
* script 會被注入所有頁面，即使你沒有在某頁面使用，CDN JS 仍會下載，因為它被插入在 HTML 模板裡 (SSR: Server Side Rendering)。
    * 因為 Docusaurus 是 React SSR (Server Side Rendering)，不能直接在 .mdx 或 jsx 裡寫 script tag。

## 設定方式: docusaurus.config.js 

___docusaurus.config.js___

```javascript
    module.exports = {
      // ...
      scripts: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",
          async: true,
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
          async: true,
        },
        
        { src: 'https://cdn.../xxx.js', async: true }
      ],
    };
```


## docs/*.mdx 引用範例

```javascript
import React, {useState, useEffect, useRef} from 'react';
import Head from '@docusaurus/Head';

# QRCode 產生練習（docs 範例）

<QRCodeForm />

---

## 📌 下方為互動元件範例

export function QRCodeForm() {
  const [text, setText] = useState('');
  const containerRef = useRef(null);
  const qrcodeRef = useRef(null);

  useEffect(() => {
    if (window.QRCode && containerRef.current) {
      qrcodeRef.current = new window.QRCode(containerRef.current, {
        text: "",
        width: 200,
        height: 200,
      });
    }
  }, []);

  const generate = () => {
    if (qrcodeRef.current) {
      qrcodeRef.current.clear();
      qrcodeRef.current.makeCode(text);
    }
  };

  return (
    <div style={{padding: "16px", border: "1px solid #ccc"}}>
      <input
        type="text"
        placeholder="輸入要轉 QRCode 的文字或網址"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{width:"80%", padding:"8px"}}
      />

      <button onClick={generate} style={{marginLeft:"8px", padding:"8px"}}>
        產生 QRCode
      </button>

      <div ref={containerRef} style={{marginTop:"16px"}} />
    </div>
  );
}

```


## 在 src/pages/*.jsx 引用範例

```javascript
import React, { useEffect, useRef, useState } from "react";

export default function QRCodePage() {
  const [text, setText] = useState("");
  const containerRef = useRef(null);
  const qrcodeRef = useRef(null);

  // 初始化 QRCode 物件
  useEffect(() => {
    if (window.QRCode && containerRef.current) {
      qrcodeRef.current = new window.QRCode(containerRef.current, {
        text: "",
        width: 200,
        height: 200,
      });
    }
  }, []);

  const generate = () => {
    if (qrcodeRef.current) {
      qrcodeRef.current.clear();
      qrcodeRef.current.makeCode(text);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>QRCode 產生器（src/pages 範例）</h1>

      <input
        type="text"
        placeholder="輸入文字或網址"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "300px", padding: "8px" }}
      />

      <button onClick={generate} style={{ marginLeft: "8px", padding: "8px" }}>
        產生 QRCode
      </button>

      <div ref={containerRef} style={{ marginTop: "20px" }} />
    </div>
  );
}

```


## 設定方式2: @theme/Html 裡自訂 script reference
* path: src/theme/Html/index.js

```javascript
import React from 'react';
import Html from '@docusaurus/theme-classic/lib/theme/Html';

export default function CustomHtml(props) {
  return (
    <Html {...props}>
      {props.headTags}
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <body>{props.bodyTags}</body>
    </Html>
  );
}

```