---
title: Docusaurus 隱藏目錄
description: Menu Toggle
keywords: [Docusaurus,toggle] 
---

Docusaurus 目錄隱藏分兩塊  
其一是 Docs 左側 Sidebar 隱藏  
其二是 Docs 右側 TOC \(Table of Content\) Menu 隱藏  

## 左側 Sidebar 隱藏
* 直接採用 Docusaurus 官方預設功能即可，修改 docusaurus.config.js docs hidden 屬性即可。

__docusaurus.config.js__

```javascript

themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        
        
        //讓 url/docs/xx 下的主題左側的 menu 預設為 hidden, 可自行決定何時彈出 
        docs: {
              sidebar: {
                hideable: true,
              },
         },

  // when page scroll down, the menu banner will be displayed or not
  hideOnScroll: true,

}),

```

## TOC \(Table of Content\) 隱藏  
* 無法經由 Docusaurus 設定修改，需自行開發
    * 為 Toggle button 設定 CSS: src/css/custom.css
    * 覆寫 Docusaurus Layout: src/theme/Layout/index.js
    
__實作步驟__    
1. 先取得 TOC block 的 CSS selector 
1. CSS 設定預設顯示狀態
1. Layout 覆寫
1. 重啟


__CSS__

* 假設 TOC 選用的 class, 名為 toc-block-class
* 設 Toggle Button 的 class 名為 toc-toggle-button

```css

.toc-block-class {
    display: none;
}

/* Button Style */
.toc-toggle-button {
  cursor: pointer;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

```


__Layout 覆寫__
* 這邊看你想用哪種預設 Layout，下面範例覆寫 @theme-original/Layout

```javascript

import React, { useEffect, useState } from 'react';
import OriginalLayout from '@theme-original/Layout';

export default function Layout(props) {

    const [isTocVisible, setIsTocVisible] = useState(true);
    const tocSelector = '.toc-block-class'; // 更改為實際找到的 TOC block selector
    const toggleToc = () => {
        setIsTocVisible(!isTocVisible);
    };

    useEffect(() => {
        const tocElement = document.querySelector(tocSelector);
        if (tocElement) {
            tocElement.style.display = isTocVisible ? 'block' : 'none';
        }
    }, [isTocVisible, tocSelector]);

    return (<div>
                <OriginalLayout {...props} />
                <button className="toc-toggle-button" onClick={toggleToc}>
                    {isTocVisible ? 'show' : 'hide'}
                </button>
            </div>);
}

```

__重啟__

```bash
npm run start
```