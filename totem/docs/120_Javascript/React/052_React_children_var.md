---
title: State children 變數
description: State children 變數
---

> children 是 React JSX 中隱含的一個 props 變數  
> Reaact 有為此 props 做特殊調整以增加程式可讀性


## children 隱含 props
* case sensitive  
* JSX 語法糖\(syntactic sugar)
* 若同時存在兩種實作方式，語法糖的實作方式會覆蓋標準寫法。
* 註: children 不一定要是範例中的字串，也可以是其他的 JSX。


[children example](./demo/State_Lifting)  

```javascript

export default function children() {

    function Panel({      
        title,
        children,
        show=true }) {
     return (
        <section className="panel">
         <h1>{title}</h1>
            {children}
        </section>
      );
    } 
    
  return (
    <>
      <p>
        標準實作方式
      </p>
      <h2>State Lifting</h2>
      <Panel
        title="Inline"
        children="___Inline___"
      >
      </Panel>
      
      <hr/>
      
      <p>
          <ol>
          <li>
            推薦實作方式，較易閱讀。
          </li>
          <li>
            隱式的 children 變數會嵌在 tag 之間
          </li>
          </ol>
      </p>
      <Panel
        title="Aoto"
      >
        自動在 HTML tag 間插入 children 變數 
      </Panel>
    </>
  );
}
```