---
title: React 渲染
description: React Rendering
keywords: [React,Conditional_Rendering]
---

> 基本上 UI Component 可以與邏輯耦合  
> 也就是說可以經由 JS 語法與運算方式來定 Component 的呈現與長相  
> 下面列出幾個非單純藉由 JS 進行處理，而是 React 中的特殊用法。  
> 注意 三元運算 與 && 相關運算子的特殊用法   

## Conditional Rendering Operators: 條件渲染運算子

### && \(<span style={{color: '#FF1100'}}>__Logical AND operator__</span>)
* 若滿足 && 前方條件，則執行後方指令；否則，不做任何動作
    * 註: <span style={{color: '#0044FF'}}>__注意這種語法，其他地方比較少見__</span>
    * 注意左式的內容。判斷的依據是 JS 的 boolean 規則。
 
```javascript
    function Item({ name, isChecked}) {
          return (
              <li className="item">
                {name} {isChecked && '✅'}
              </li>
          );
    }
```

### ?:

```javascript
    function Item({ name, isChecked}) {
      return  <li className="item">
                {isChecked ? name + ' ✅' : name}
              </li>
    }
```

### if 
* 基本 JS 方式

```javascript
    function Item({ name, isChecked}) {
      if (isChecked) {
        return <li className="item">{name} ✅</li>;
      }
      return <li className="item">{name}</li>;
    }
```