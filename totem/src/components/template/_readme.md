
## 慣例 註A/2: 
    這邊是練習,自製一個 React Component JS 檔 (可以 render 出一段 html), 並用於 md 中
    ==> ref src/components/SayHelloComponent.js
    ==> ref src/components/Add.js


    這邊是練習,自製一個 React Component JS 檔 (可以 render 出一段 html)
    並用於某一個 React Component/Page JS 之中。
    ==> 這個範例沒有參數傳入 React Comp
    
    例如: 
    在 HomePage.js 中 
    匯入自訂 footer.js 中的 <Footer />。
    
    完整例子
    src/components/Breaknews
    src/components/Breaknews/index.js
    src/components/Breaknews/styles.module.css
    src/pages/index.js
    src/pages/totem.module.css

## 慣例 註B/2: 
這邊個編輯慣例
A: 比較適用於 Component 類的，例如上方 Breaknews 範例
必要結構
- 一個資料夾: foldername 為 使用端 import 時所用的名稱
    - ex: import Breaknews from '@site/src/components/Breaknews';
    - ex: import tConfig from '@site/src/components/totem.config';
- index.js: 裡面就是 js 的完整內容
    - ex: src/components/components/Breaknews/index.js
    - ex: src/components/totem.config.js
- css file: 搭配 component 使用

B: 單純的 Util JS，可沿用上方結構
- 無須資料夾, A 中資料夾名直接給 JS 使用
    - ex: src/components/totem.config.js
- js filename 為 使用端 import 時所用的名稱      
    - ex: import tConfig from '@site/src/components/totem.config';
    - 對使用端來說是相同的

## 相關範例

### 元件端: src/Breaknews/index.js implement 注意事項
- src/Breaknews 資夾內所有內容 (畫出 最新更新文章 list)
    - 裡面有 index.js (慣例名稱, 不可改) 
        - 必備匯入 package : clsx ,  react
        - 注意 class 給定方式: ex className={clsx( totemStyles.rightPanel)}
        - React Component return 區塊可以用小括號再包一層, return (<span> ...impl content... </span>);
        
    - 裡面有 styles.module.css (慣例名稱, xxx.module.css)
        - css 中 classname 必須用 camel 中間不可出現 -
        - homepage.js import 可用相對對或絕對路徑
        - React component: <ul className={clsx( importAliasTotemStyles.templateClassName)}>

___src/Breaknews/index.js  import css 方式___
``` javascript

必要 import
import React from 'react';
import clsx from 'clsx';

li 有用到 Link
import Link from '@docusaurus/Link';

絕對路徑
import totemStyles from "@site/src/pages/totem.module.css";

相對路徑
import styles from './styles.module.css';

function Breaknews(props){
 return (<div className={clsx( totemStyles.rightPanel)} >
    <h2> {props.h2} 左邊會出現 -最新異動- 參考 homepage 傳入內容 </h2>
      <ul className={clsx( totemStyles.objectList)}>
        <li className={clsx( totemStyles.objectItem)}><Link to="/docs/docs-map">ccccJava SHA 雜湊 - 以 Java SHA 進行資料雜湊</Link></li>
        <li className={clsx( totemStyles.objectItem)}>PosgreSQL copy from CSV - 自 CSV 檔匯入資料</li>
        <li className={clsx( totemStyles.objectItem)}>Log4j EmailAppender Configuration - 當log4j looger紀錄指定等級的訊息時，發信通知特定人員</li>
        <li className={clsx( totemStyles.objectItem)}>Notion Sprint - Notion Sprint and Task 工作管理</li>
      </ul>
      
      ref : https://react.dev/learn/passing-props-to-a-component <br/>
      
      
    </div>
    );
}

export default Breaknews;

```








### 元件端2: src/Breaknews2/index.js implement 注意事項

___src/Breaknews2/index.js : 物件傳入資訊 + Array 訊息印出___
``` javascript

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import totemStyles from "@site/src/pages/totem.module.css";

function Breaknews2({h2, items}){
    let itemList = items.c;
 return (<div className={clsx( totemStyles.rightPanel)} >
    <h2>{h2}</h2>
      <ul className={clsx( totemStyles.objectList)}>
        <li className={clsx( totemStyles.objectItem)}><Link to="/docs/docs-map"> Links examples</Link></li>
        <li className={clsx( totemStyles.objectItem)}>{items.a} 獨立資訊.a</li>
        <li className={clsx( totemStyles.objectItem)}>{items.b} 獨立資訊.b</li>
      </ul>
    
     <ul>
      {
        itemList.map((msg) =>
        <li className={clsx( totemStyles.objectItem)} key={msg.toString()}>這邊是 Array Example {msg} </li>
      )}
    </ul>
    
    
    
    </div>
    );
}

export default Breaknews2;

```










### 使用端: src/pages/index.js implement 注意事項
- 搭配 src/pages/index.js (這是 website 首頁)
- 搭配 src/Breaknews/index.js (這是 react component)
    - 注意客製化元件匯入方式/由 site 變數的絕對路徑到資料夾: import Breaknews from '@site/src/components/Breaknews';




___Homepage.js import css 方式___
``` javascript




必要 import
import React from 'react';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Breaknews from '@site/src/components/Breaknews';
import Breaknews2 from '@site/src/components/Breaknews2';

絕對路徑
import totemStyles2 from "@site/src/pages/totem.module.css";

相對路徑
import totemStyles from './totem.module.css';
import styles from './styles.module.css';

import logo from "@site/static/img/insect_totem_800_374.jpg";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
        <div  className={clsx( totemStyles.totemContainer)}>
          <div className={clsx(totemStyles.leftPanel)} >
              <div class="imageCaption">
                  <img src={logo} /><br />
                  <span className={clsx(totemStyles.h1InsecTotem)}>{siteConfig.title}</span> &nbsp;
                  <span className="hero__subtitle">{siteConfig.tagline} / &nbsp;<Link to="/docs/docs-map"> 請由此參觀 &gt;&gt;&gt;  </Link></span>
              </div>
          </div>
          <Breaknews h2='最新異動'/>
          <Breaknews2 h2={"最新異動"} items={{a:'100', b:200, c:['PosgreSQL copy from CSV','ccccJava SHA 雜湊','Log4j EmailAppender']}}/>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Insect Totem">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}



```


