---
title: React 狀態件
description: React State
keywords: [javascript,React,State]
---

## React 狀態
* state 指的是 UI component 所暫存的資料內容。  
* state 被異動或設定時會觸發 Browser 進行重新渲染。渲染時則會讀取 state 某個時間點的快照值。  
* <span style={{color: '#0044FF'}}>__state 與 component instance 相依，每個 instance 採用自己獨立副本。  __</span>

## State 摘要

> 在 Render 前，React 會將這一輪所發生的 state 異動作佇列進行等待。  
> 在完成 Render 後，會更新畫面與對 state 進行快照。  
> 所以，state 中的 props variable 在渲染周期間所發生的連續或多次變動。因為快照的關係，實際上可能僅會成功執行作後一次送交。  
> 這現象類似，資料庫未做 isolation所發生的狀況。

* 元件因互動會需要暫存輸入資料，元件記住輸入資料的術語在 React 中稱為 State。
* state 是 React hook IOC 結構的一種，<span style={{color: '#0044FF'}}>__state 內容的保留與管理時機由 React 管理__</span>。
* React 則提供兩個介面 \(var 與 setVar)，讓開發者取值與送交資料異動。
* 注意: 環境架構
    * React 在所謂的前端 \(Browser) 執行。
    * Browser 有各自的 Javascript Engine (ex: V8, SpiderMonkey, JavaScriptCore, Chakra 等)
    * Browser 負責渲染 (Rendering) DOM.
    * 編譯過的 React 轉成 JavaScript code 在 Javascript Engine 上執行。而 state 則是留在 React 這邊，繼續由 React 管理。
    * 所以，開發時應注意程式碼的作用階段:
        * React 編譯後會變成 JS code 與 DOM，然後在 Browser 初次渲染。
        * 而後因 props 更新 \(如表單資料編輯)，最終某一時間觸發下一次渲染。
        * 在每次渲染階段間 \(一次完整渲染過程)，儲存在 props state \(由 React 管理的快照) 中的資料內容仍是 detached。重複對特定 props 變數做的動作僅最後一個會生效\(可想成資料庫未做 isolation)。
    
__state__

```javascript
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [message, setMessage] = useState('');
```

__Snapshot__

```javascript
export default function Counter() {
  const [score, setScore] = useState(0);

  function increment_failed() {
    setScore(score + 1); // score 快照 0 + 1
    setScore(score + 1); // 依然是快照 0 + 1
    // setScore(x + 1);  // 這邊會報錯, x 變數不存在
    // 直接異動 React 狀態中儲存的物件和陣列
    // const [score, setScore] = useState(0);
    // 在第一次 Render 時，score 已快照為 0，
    // 所以第二次呼叫也是進行 0+1
  }
  
  function increment_pass() {
    setScore(score => score + 1); // 這邊給個是表達式，只是用了與 state 同名變數方便閱讀。
    setScore(x => x + 1); //與上方 exporssion 相同。
    // 這邊餵進去的是 labmda 表達式 (狀態更新函數)
    // transpile 後給的是執行方式，不是計算結果。
    // 所以這邊 render 出來的是 i++
  }
}
 
```

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