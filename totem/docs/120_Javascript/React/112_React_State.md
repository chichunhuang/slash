---
title: React 狀態件
description: React State
keywords: [javascript,React,State]
---

## React 狀態

## State 更新
* React 不建議直接更改狀態中儲存的物件和陣列。而是建議建立新的物件或陣列，

### 單一變數 state 更新

```javascript
export default function Counter() {
  const [score, setScore] = useState(0);

  function increment_failed() {
    setScore(score + 1);
    //直接異動 React 狀態中儲存的物件和陣列
    //const [score, setScore] = useState(0);
    // 在第一次 Render 時，score 已被設為 0，且不再變動(不會更改已執行的程式碼)。
  }
  
  function increment_pass() {
    setScore(score => score + 1);
    // 取出舊值，並加以變動
  }
}
```

### 物件陣列 state 更新
* ... spread syntax: 可用來複製物件或陣列。
    * 類似解構 spread operator 用來代表未被列出的物件屬性。

__更新物件 state__

```javascript
  // 起始建立的物件
  const [person, setPerson] = useState({
    name: 'Insect-Totem',
    artwork: {
      title: 'Blog',
      city: 'Taipei',
      image: 'https://insect-totem.net/img/70_70.jpg',
    }
  });
  
  // onEvent 時，複製新物件並更換舊物件
  function onNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }
  // 若未補上 ...person
  // 則視為清空其他資料
  
  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={onNameChange}
        />
      </label>
    </>
  );
```


__更新陣列 state__

```javascript

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {

  // 起始時以 initialList 建立 state
  const [list, setList] = useState(
    initialList
  );

  function handleToggle(artworkId, nextSeen) {
    // js 的 map 不用像 java 需要 collect ??
    setList(list.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen };
      } else {
        return artwork;
      }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={list}
        onToggle={handleToggle} />
    </>
  );
}

function ItemList({ artworks, handleToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              
              
              onChange={e => {
                handleToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
              
              
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
 // example from: https://react.dev/learn/adding-interactivity
```

## 狀態快照: State as a Snapshot
* React 的運作方式: 
* 設定狀態變數並不會改變已有的狀態值，而是會觸發頁面重新渲染。所以所想重新渲染畫面，須對狀態做更動。


https://react.dev/learn/state-as-a-snapshot
https://react.dev/learn/queueing-a-series-of-state-updates


```javascript
```

```javascript
```