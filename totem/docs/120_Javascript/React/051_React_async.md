---
title: React useEffect
description: React useEffect
keywords: [javascript,useEffect,async]
---

* [JavaScript async 基本](./../async)  

> async 的目的，是為了讓你可以在函式內 <span style={{color: '#0044FF'}}>__以同步的寫法處理非同步\(平行執行)流程__</span>  
> 
> React 中使用 async 語法時，因為 await 回傳的是 Promise，而非 JSX。  
> 但是 React Component 必須回傳 JSX，於是 React 便以 <span style={{color: '#FF1100'}}>__useEffect Hook__</span> 來封裝與管理回傳的 Promise 並適當地轉換成 JSX。  

## React 中使用 async 情境
* 處理 API Request。等待遠端伺服器回應時使用。

```javascript
    async function fetchData() {
      const res = await fetch("/api/data")
      const data = await res.json()
      setData(data)
    }
```

* 事件處理器中使用非同步，等待實際平行動作結束後才往後走。

```javascript
    function Button() {
      const handleClick = async () => {
        await saveData()
        alert("儲存完成")
      }
    
      return <button onClick={handleClick}>Save</button>
    }
```

* 搭配 try catch 處理錯誤，以同步語法方式處理非同步錯誤，以方便閱讀

```javascript
    async function loadUser() {
      try {
        const res = await fetch("/api/user")
        const user = await res.json()
        setUser(user)
      } catch (err) {
        setError(err)
      }
    }
```

## React 中的 UI Component
* React 在實作 Component 時也常以 function 作為結構定義。而此時 js function 回傳的必須是 JSX。
* 當 Component 的 state 須由其他 API Server 取得時，則不可直接在 function 前加上 async，因為 UI Component 回傳的必須是 JSX 而不是 Promise。
* React 提供 useEffect Hook 來處理非同步動作行為。
* React 架構下將 async 動作傳給 useEffect，由 React 來管理異步操作。

```javascript
    function MyComponent() {
      useEffect(() => {
        async function fetchData() {
          const res = await fetch(...)
          setData(res)
        }
        fetchData()
      }, [])
    }
```