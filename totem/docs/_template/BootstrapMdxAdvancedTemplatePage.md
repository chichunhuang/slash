---
title: BootstrapMdxTemplatePage title
description: BootstrapMdxTemplatePage desc
keywords: [BootstrapMdxTemplatePage]
---
//import 'bootstrap/dist/js/bootstrap.bundle.min';

import './bootstrapCustomizedCssTemplate.css';
import Link from '@docusaurus/Link'

<h1 className='customTitle'>這段文字使用客製樣式: MDX 相關設定與頁面</h1>

<span className='customTitle'>搭配 import  </span>
<span className='customTitle'>bootstrapCustomizedCssTemplate.css</span>
<span className='customTitle'>BootstrapMdxAdvancedTemplatePage.md</span>

```
<h1 className={styles.customTitle}>JSX 相關設定與頁面</h1>
<span className={styles.customTitle}>bootstrapCustomizedCssTemplate.module.css(注意命名規則 *.module.css)</span>
<span className={styles.customTitle}>BootstrapJsxAdvancedTemplatePage.js</span>
```


```
另外, 整頁套用時
方法二：使用 Layout 傳遞 className 或 pageContext
如果你要控制 整個頁面的外層樣式，例如要覆蓋主體底色或排版，也可以這樣做：

步驟：
在你的頁面中加 className 到某個頂層元素

在 custom.css 中寫針對該 className 的樣式覆寫


//jsx
// src/pages/dark-page.js
import React from 'react';
import Layout from '@theme/Layout';

export default function DarkPage() {
  return (
    <Layout title="Dark Mode Page" wrapperClassName="dark-page">
      <div className="container mt-4 text-white">
        <h1>深色客製頁面</h1>
        <p>這是使用 dark-page className 客製的樣式。</p>
      </div>
    </Layout>
  );
}


//然後在 src/css/custom.css 中加入：
// 這樣 dark-page 就只會影響這個頁面！
/* 客製化整頁背景 */
.dark-page {
  background-color: #1e1e1e;
  color: white;
  min-height: 100vh;
}


```


<hr/>
<hr/>
<hr/>
    <ul>
        <li>npm install bootstrap..</li>
        <li>src/css/custom.css</li>
        <li>docusaurus.config.js import custom.css</li>
        <li>Example JSX Page <Link to="/template/BootstrapJsxTemplatePage"> BootstrapJsxTemplatePage.js </Link>  </li>
        <li>Example JSX Page <Link to="/template/BootstrapJsxAdvancedTemplatePage"> BootstrapJsxAdvancedTemplatePage.js </Link>  </li>
        <li>Example mdx Page <Link to="/docs/BootstrapMdxTemplatePage"> BootstrapMdxTemplatePage.md </Link>  </li>
        <li>Example mdx Page <Link to="/docs/BootstrapMdxAdvancedTemplatePage"> BootstrapMdxAdvancedTemplatePage.md </Link>  </li>
        <li>為確保 Bootstrap JavaScript function 能正常運作 JSX, mdx 需複寫 src/theme/Layout/index.js  </li>
        <li>參考 https://docs.google.com/document/d/1S0UO6JYrNbFKqTsqLdQJgdZnvlvbB-PtKqvZzREr2pk/edit?usp=drive_link</li>        
     </ul> 
        
        
# <span className="text-info">MDX 頁面 - Bootstrap 進階元件</span>

## Grid Layout

<div className="row">
  <div className="col-md-6 bg-warning p-3">左側</div>
  <div className="col-md-6 bg-info text-white p-3">右側</div>
</div>

---

## Tabs（需要手動初始化）

⚠️ Bootstrap 的 Tabs 需要 JavaScript 行為，你需要自己透過 JS 初始化 `data-bs-toggle`。這在 MDX 中不一定穩定，建議用 React 實作 Tabs。

---

## Collapse 展開區塊

<button className="btn btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample">
  點我展開
</button>

<div className="collapse mt-2" id="collapseExample">
  <div className="card card-body">
    展開的內容區塊。
  </div>
</div>