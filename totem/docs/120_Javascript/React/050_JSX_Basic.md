---
title: JSX 基礎介紹
description: JSX 基礎介紹
keywords: [javascript,JSX]
---

## JSX
* JSX : Javascript 的一種 Extension，可簡單想成是 JS VM 下可執行的另一套語言。

## JSX 撰寫限制與注意事項:
* 用來編寫 UI 元件。並將邏輯與 HTML 結構封裝在一個 js 組件之內。
* JSX 僅能返回單一結構。通常是 \<div> 或是簡單的定義一個 Fragment \<>，或是回傳 <span style={{color: '#0044FF'}}>__null__</span> 來呈現空的狀態。
* 所有 Tags 必須有完整的關閉結構。 
* JSX 變數命名: 通常採 camelCase。因 JSX 會轉換成 JavaScript 物件，所以變數命名上也受 JavaScript 語法限制。
    * 不接受連字符號。
    * 採駝峰命名法 (camelCase)。
    * class 為保留字。

    
## JSX 變數與參數使用方式
* JSX 中可以藉由大括號直接存取 JavaScript 中的參數，變數或表達式回傳值。
    * attribute 等號後的參數
    * JSX tag 的內容部分

___JSX 中一般使用大括號情境___

```javascript
export default function TodoList() {
    const name = 'Insect-Totem';
      
    const today = new Date();

    function formatDate(date) {
      return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
      ).format(date);
    }

  return (
    <h1>Nice to meet you, {name}. It's {formatDate(today)}.</h1>
  );
}
```
 
___JSX 中使用雙大括號情境___
* JSX 下也允許你以物件方式傳遞資料，因物件結構本身有一層大括號，因而看起來像是有兩層大括號。
* 常見情形是傳遞 CSS style
* 此處須注意: JSX 變數命名與轉換規則，backgroundColor 採用 camelCase。
    * 以 javascript 物件結構傳遞多項資訊

```javascript
    export default function TodoList() {
    const author = {
      name: 'Insect Totem',
      theme: {
        backgroundColor: 'black',
        color: 'white'
      }
    };

      return (
      <div style={author.theme}>
            <h1>{author.name}'s Notebook </h1>
            <ul style={{
              backgroundColor: 'black',
              color: 'pink'
            }}>
              <li>Python</li>
              <li>Rust</li>
              <li>Notion</li>
            </ul>
      </div>
      );
    }
```