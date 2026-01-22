---
title: JavaScript async 使用
description: JavaScript async
keywords: [javascript,async]
---

> 在 function 前面加上 <span style={{fontWeight: 'bold'}}>__async__</span> 的目的，是為了讓你可以在函式內 <span style={{color: '#0044FF'}}>__使用非同步\(平行執行)流程，並用同步的寫法處理它__</span>  
> 是 JavaScript JavaScript __非同步控制__ 語法的一種   
>  
> sync 同步指的是: tasks 依序執行  
> async 非同步指的是: tasks 平行執行，所以最終會須要將 tasks 合併與排序，程式撰寫時就會出現類似等待回應等相關片段。  

## async await Promise
* 語法結構\(語法糖):
    * 以 async 需告指定函數允許採用 async 非同步操作
    * 流程中需等待的動作呼叫前加上 await，讓 JS 進行等待。
    * JS 遇到 await 回傳結果一律鋒裝成 Promise

```javascript
//結構
async function service() {
    await Promise
}

//釋例
async function fetchData() {
  try{
      const res = await fetch("/api/data")
      const data = await res.json()
      setData(data)
  } catch (err) {
        setError(err)
  }
}
```

## Promise
* async function 總是回傳 Promise 封裝結果
* 即使 return 的不是 Promise，React 或 JS 都會自動將結果以 Promise 封裝 

```javascript
    async function foo() {
      return Promise.resolve(123)
    }
    
    // 會自動被重新封裝成 Promise
    async function foo() {
      return 123
    }
```