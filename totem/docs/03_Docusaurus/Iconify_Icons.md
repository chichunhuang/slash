---
title: 嵌入 Iconify 圖片
description: Iconify Icons in Mdx and Jsx
keywords: [Docusaurus,Iconify] 
---
import {GoogleImage} from "@site/src/components/google/GoogleImage";
import { Gi3dGlasses } from "react-icons/gi";

[Iconify design](https://icon-sets.iconify.design/) 官網說:  
Iconify is an open source project. Almost all parts of the project use MIT license.   
MIT 加 open source  
所以若想要找 SVG 小圖標，Iconify design 會是個好選擇  
下面範例紀錄如何在 Docusaurus 中使用 Iconify icons  

另外，加映介紹 react-icons 使用方式  
為 React 官方提供的 icons

*[Iconify Icons](#Iconify_Icons)
*[React Icons](#React_Icons_)


## Iconify 安裝整合套件 <span id="Iconify_Icons">&nbsp;</span>

```bash
    npm install @iconify/react
```

## Iconify Mdx theme 設定

### 1.MDXComponents.js

__檔案路徑: src.theme.MDXComponents.js__

```Javascript
    import React from 'react';
    // Import the original mapper
    import MDXComponents from '@theme-original/MDXComponents';
    import { Icon } from '@iconify/react'; // Import the entire Iconify library.
    
    export default {
      ...MDXComponents,
      
      IconifyIcon: Icon, // Make the iconify Icon component available in MDX as <icon />.
    };
```

### 2.Mdx 使用範例
* 使用自訂的 MDXComponents 來繪製 IconifyIcon 
* icon 屬性後方接的是 [iconify icon path](#iconify-icon-path)，所需圖片可至 [Iconify design](#iconify-icon-path)  查找

```javascript
// import React from 'react'; // 這行似乎可以省略

<IconifyIcon icon="mdi:github" height="48" /> GitHub icon.

<IconifyIcon icon="logos:figma" height="48" /> Figma icon.

```

<IconifyIcon icon="mdi:github" height="48" /> GitHub icon.

<IconifyIcon icon="flag:tw-4x3" height="48" /> Flag of Taiwan.

<IconifyIcon icon="logos:figma" height="48" /> Figma icon.

## Iconify JSX 使用範例
* 直接 react 用官方語法使用 Icon 元件

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
|className |   | 

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


## 加映 react-icons 使用  <span id="React_Icons_">&nbsp;</span>

* [react-icons 清單](https://react-icons.github.io/react-icons/)

### 安裝 react-icons 

```bash
npm install react-icons
```

### react-icons 線上選取圖標
* [react-icons 清單](https://react-icons.github.io/react-icons/) 選取 icon sets 再點選圖標
* 點選圖標後彈出方塊會提示 import 與使用方式

```javascript
import { Gi3dGlasses } from "react-icons/gi";

<Gi3dGlasses  style={{ color: 'blue', fontSize: '50px' }} />
```

<div>
 {GoogleImage( 'google_file_id',  'react_icons_01.png', {width:'392px', height:'493px', hidden:true, degree:0})}
</div>


### react-icons 使用範例

__jsx__

```javascript
import React from 'react';
import { Icon } from "@iconify/react";
import { Gi3dGlasses } from "react-icons/gi";

export default function IconifyJsxDemo() {
    const style = { color: "green", fontSize: "1.5em" }
    
  return (
    <div className="container">
    <h1>Insect Totem: React Icons Exercise</h1>
    <Gi3dGlasses size={30} color="#FB2576" />  
    <Gi3dGlasses style={{ color: 'blue', fontSize: '500px' }} />  
    <Gi3dGlasses style={style} />  
    </div>
  );
}
```

__mdx__

```javascript

    <Gi3dGlasses style={{ color: 'blue', fontSize: '50px' }} />  
```

<Gi3dGlasses  style={{ color: 'blue', fontSize: '50px' }} />