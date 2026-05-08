---
title: React State 操作概要
description: React State Operation
keywords: [javascript,React,State]
---

## React State 操作概要
* useState
    * 將狀態交給 React 的 Hook 管理。 \(類似讓 React 管理 Session)
* setState
    * 想更改 state 時須經由 Hook 來處理，也就是 useState 後解構回傳的 setter 
* updater function
    * render 繪製時會使用 state snapshot，若想針對同一 state value 重複編輯，則需使用 updater function
* spread syntax
    * state 是以 <span style={{color: '#0044FF'}}>__取代__</span> 方式更新，若 object state 想保留非目標屬性可使用 spread syntax    
    
```javascript

import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0); //將資料交給 React hook, 類似 Session 管理變數
  
  const [person, setPerson] = useState({   //同樣將物件資料交給 React hook
    firstname: 'Tom',
    lastname: 'White',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });
  
  function handleTitleChange(e) {
    setPerson({
      ...person,                     // 物件 mutation style 的資料複製方法, for 1st level (name)  
      artwork: {
        ...person.artwork,           // 物件 mutation style 的資料複製方法, for nested level (city, image)
        title: e.target.value
      }
    });
  }

  function handleChange(e) {         // 通用事件處理程序
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }
  
  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1); // setState 進行資料變更
        setNumber(n => n + 1); 
        setNumber(n => n + 1); // anonymous updater function 讓 state 可以取當下值後連續編輯。
      }}>+3</button>
      
      
      <hr/>
      <label>
        Name: <span> {person.firstname} </span> <span> {person.lastname} </span>
      </label>
      <label>
       Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      
       <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.firstname}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  )
}

```