---
title: React 渲染
description: React Rendering
keywords: [React,Conditional_Rendering]
---

> 基本上 UI Component 可以與邏輯耦合  
> 也就是說可以經由 JS 語法與運算方式來定 Component 的呈現與長相  
> 下面列出幾個非單純藉由 JS 進行處理，而是 React 中的特殊用法。  
> 注意 三元運算 與 && 相關運算子的特殊用法   

## 渲染發生時機
* 渲染指的是 React 呼叫元件 \(Component 本身就是一段 JavaScript 程式片段) 的過程。
* 初始渲染，元件首次被 React 呼叫並畫出相關外觀。
* 元件狀態更新之後，因 set 函數引起 state 改變進而觸發後續渲染。

## 渲染與元件設計
> 在相同的輸入前提下，渲染應該得到相同的呈現結果。  
> 這意味著元件設計時也須變與不變分離，這意味著元件內部不該維護跨元件共用資訊，或元件本身維護會造成異動的變數值。  
> 也就是說元件應該是一個純函數，純函數才不會修改函數作用域以外的變量。


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