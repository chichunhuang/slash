---
title: React State 陣列物件操作
description: React Array State Operation
keywords: [javascript,React,State]
---

## React State 陣列物件操作
* https://react.dev/learn/updating-arrays-in-state
* 應將 React state 中的 array 視為唯讀的，因 Array 也是另一種物件。每次異動時應提供新物件給 state setter
* 注意: 小心誤用 array 原生 mutable 的功能


## 比較 Mutable Immutable 操作
* mutable : 直接改既有 instance。
* immutable : 回傳新建立的物件

|    | Mutable Style<br/>回傳成功數?非 Array | Immutable Style |
|----|---------|-----------|
| 新增 | <span style={{color: '#DDC3C3'}}>__push, unshift__</span><br/>回傳陣列長度 |  [concat, \[...arr\] spread syntax](#adding)  |
| 移除 | <span style={{color: '#DDC3C3'}}>__pop, shift, splice__</span><br/>回傳陣列最後,第一,被刪除的元素陣列 | [filter, slice](#removing) |
| 取代 | <span style={{color: '#DDC3C3'}}>__splice, arr[i] = ... assignment__</span> | [map](#replacing) |
| 排序 | <span style={{color: '#DDC3C3'}}>__reverse, sort__</span> | 將既有 Array [先行複製](#sorting) |

* push : 陣列 __末尾__ 添加一個或多個元素
* pop : 移除並回傳陣列的 __最後__ 一個元素
* unshift : 陣列的 __開頭__ 添加一個或多個元素。
* shift : 移除並回傳陣列中的 __第一__ 個元素
* splice : 元素移除，並回傳 __被刪除__ 元素的新陣列
* reverse : in-place，原陣列反轉後的參考
* sort : in-place，原陣列排序後的參考

## Array 新增 Items <span id="adding"></span>
* spread syntax 取代 push/unshift 的功能

```javascript
import { useState } from 'react';

export default function List() {
  let nextId = 0;
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

```

## 移除 <span id="removing"></span>
* filter 取代刪除概念

```javascript
import { useState } from 'react';

  const [name, setName] = useState('');
  const [nextId, setNextId] = useState(3);

  let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];

  const [artists, setArtists] = useState(initialArtists);

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
     <h1>Remove:</h1>
      
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br/> 
      filter 直接 return new array，所以不像 spread operator 有外加一個 []
      <button onClick={() => {
        setArtists(
          artists.filter(a =>
                  a.name !== name
                )
        );
      }}>Remove</button> 
      
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Remove: filter
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
```

## 元素修改 <span id="replacing"></span>
```javascript
```

## 取代 <span id="replacing"></span>
```javascript
```


## 排序 <span id="sorting"></span>
```javascript
```