---
title: 嵌入 Iconify 圖片
description: Iconify Icons in Mdx and Jsx
keywords: [Docusaurus,Iconify] 
---
import {GoogleImage} from "@site/src/components/google/GoogleImage";

[Iconify design](https://icon-sets.iconify.design/) 官網說:  
Iconify is an open source project. Almost all parts of the project use MIT license.   
MIT 加 open source  
所以若想要找 SVG 小圖標，Iconify design 會是個好選擇  
下面範例紀錄如何在 Docusaurus 中使用 Iconify icons  

## 安裝整合套件

```bash
    npm install @iconify/react
```

## Mdx theme 設定

### 1.MDXComponents.js

__檔案路徑: src.theme.MDXComponents.js__

```Javascript
    import React from 'react';
    // Import the original mapper
    import MDXComponents from '@theme-original/MDXComponents';
    import { Icon } from '@iconify/react'; // Import the entire Iconify library.
    
    export default {
      MDXComponents,
      
      IIcon: Icon, // Make the iconify Icon component available in MDX as <icon />.
    };
```

### 2.Mdx 使用範例
* icon 屬性後方接的是 [iconify icon path](#iconify-icon-path)，所需圖片可至 [Iconify design](#iconify-icon-path)  查找

```javascript

<IconifyIcon icon="mdi:github" height="48" /> GitHub icon.

<IconifyIcon icon="logos:figma" height="48" /> Figma icon.

```

<IconifyIcon icon="mdi:github" height="48" /> GitHub icon.

<IconifyIcon icon="flag:tw-4x3" height="48" /> Flag of Taiwan.

<IconifyIcon icon="logos:figma" height="48" /> Figma icon.

## JSX 使用範例

### 1.IconifyJsxDemo.js

__檔案路徑: [src.pages.iconify.IconifyJsxDemo.js](../../../iconify/IconifyJsxDemo/)__

* icon 屬性後方接的是 [iconify icon path](#iconify-icon-path)，所需圖片可至 [Iconify design](#iconify-icon-path) 查找
* [Demo Link](../../../iconify/IconifyJsxDemo/)

```javascript

    import React from 'react';
    import { Icon } from "@iconify/react";
    
    export default function IconifyJsxDemo() {
        
      return (
        <div className="container">
        
        <Icon icon="mdi:github" height="55" />
        <Icon icon="logos:figma" height="55" />
        <Icon icon="mdi-light:home" height="55" />    
    
        </div>
      );
    }

```


## Iconify 路經說明 <span id="iconify-icon-path">&nbsp;</span>
* [Iconify design Official](https://icon-sets.iconify.design/) 官網位置
* 選取所要的圖示之後點右下角 __⋮__  會出現屬性框。第一行資料即為 Iconify Icon Path

<div>
  {GoogleImage( '1-QIvE4oCZBXQaR7uwGXSLs1CL1QMFMyv',  '10_Notion_Views_Timeline_02.png' , {width:'255px', height:'264px', hidden:true, degree:0})}
</div>

## Iconify 其他參數

* [更多請參考](https://iconify.design/docs/icon-components/react/)

| attr |   desc     |
| ----   | ----            |
|inline | boolean  改變垂直對齊 |
|width | 字串數字 圖示寬度 |
|height | 字串數字 圖示高度 |
|hFlip | boolean  水平翻轉圖示 |
|vFlip | boolean  垂直翻轉圖示 |
|flip | hFlip和vFlip的字串替代 |
|rotate | 數字字串 旋轉圖示 |
|color | 字串 改變圖示顏色 |
|onLoad | 資料載入完成後的 callback |

* 註: color 屬性，僅限用於單色圖示，部分圖示不適用。且可以採下列兩種設定方式

```javascript
<IconifyIcon icon="mdi:github" /> 

<IconifyIcon icon="mdi:github" style={{ color: "red" }} /> 
```

<IconifyIcon icon="mdi:github" /> 

<IconifyIcon icon="mdi:github" style={{ color: "red" }} /> 

<IconifyIcon icon="flag:tw-4x3" color= "blue"  /> 

<br/>
<br/>

* 註: width and height 也可以 fontSize 進行設定。
    * 預設 1em


```
<IconifyIcon icon="flag:tw-4x3" height="48" /> 

<IconifyIcon icon="flag:tw-4x3" style={{ fontSize: "70px" }} /> 
```

<IconifyIcon icon="flag:tw-4x3" height="48" /> 

<IconifyIcon icon="flag:tw-4x3" style={{ fontSize: "70px" }} /> 