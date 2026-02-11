---
title: React 狀態
description: React State
keywords: [javascript,React,State]
---

## React 中出現的變數

### Local Variable
* 指相對於由 React 託管的 State 變數，不經由 React 管理存在 function 中的 <code>&nbsp;自訂變數 </code>。
* 這邊的 Local Variable 如經由 let 所宣告的變數。
* 每一次重新渲染 Local Variables 都會被 <code>&nbsp; 重新賦值 &nbsp;</code>，也就是說 __局部變數在渲染之間不會保留先前狀態__\(Transient)。
* Local Variables 改變也 __不會觸發 Rendering__ 。

### React State
* state 指的是 UI component 所暫存的資料內容，由 React 經由 Hook 管理生命週期的資料。受 React 管理才會觸發渲染。   
* state 被異動或設定時會觸發 Browser 進行重新渲染。渲染時則會讀取 state 某個時間點的快照值。  
* <span style={{color: '#0044FF'}}>__state 與 component instance 相依，每個 instance 採用自己獨立副本__</span> 。
* State 變數指的是，經由 useState 所宣告的變數。
* useState 會回傳變數的 getter 與 setter。
* 為確保 React 能正確管理 State 與正確進行渲染，<span style={{color: '#FF1100'}}>__React 要求 state Hooks 必須在元件 Top Level 呼叫__</span>。也就是模組或元件的頂層，不可出現在 function 或其他會變動內嵌結構中。   

```javascript
import { useState } from 'react';

const [index, setIndex] = useState(0);
// 陣列解構(Array Destructuring), 
// useState 會回傳包含兩元素的 Array，
// React 慣例會以 getter/setter 來做命名。
```


## State 摘要
> State 必須在 Top Level 宣告。  
> 在 Render 前，React 會將這一輪所發生的 state 異動作佇列進行等待。  
> 在完成 Render 後，會更新畫面與對 state 進行快照。  
> 所以，state 中的 props variable 在渲染周期間所發生的連續或多次變動。因為快照的關係，實際上可能僅會成功執行最後一次送交。  
> 這現象類似，資料庫未做 isolation 所發生的狀況。
> 設定狀態變數並不會即刻改變已有的狀態值，但是會觸發頁面重新渲染。所以若想重新渲染畫面，可直接對狀態做更動。
> 另，若同時渲染同元件多次，React 也能依據 instance 不同獨立維護各自的 state \(Component Private)。 

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

* Snapshot vs Expression

```javascript
export default function Counter() {
  const [score, setScore] = useState(0);

  function increment_failed() {
    setScore(score + 1); // score 快照 0 + 1
    setScore(score + 1); // 第二次呼叫依然是取出快照值 0 + 1
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
* React 的哲學，<span style={{color: '#FF1100'}}>__State 並非是真正的被更新，而是被取代與替換__</span>。

## 單一變數 state 更新
* Primitive Type: 本身即是 immutable

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

## 物件陣列 state 更新
### 更新物件 state: spread syntax
* ... spread syntax: 可用來複製物件或陣列。
    * 類似解構 spread operator 用來代表未被列出的物件屬性。
    * 注意 ... 操作子只會複製第一層的內容。
* 注意 setter 會需要將舊值重新賦予新回傳物件。這就是先前提到的<span style={{color: '#FF1100'}}>__State 並非是真正的被更新，而是被取代與替換__</span>。

### 更新槽串物件 state
* 因為要視 state 為不可變的，僅能被取代。所以必須遞迴地複製內容。
* 每一層複製都借用 ... spread syntax

### 更新物件 state: \[ \] 操作子
* \[e.target.name\]: e.target.value  
* 在更新物件 State 時，React 提供了 <code>&nbsp; [e.target.name] &nbsp;</code> 簡化語法，利用中括號來動態指向特定屬性。讓物件屬性更新時無須一對一撰寫更新方法。
* 以 \[e.target.name\] 隱式取代顯式屬性名稱指定，來達到共用目的。


### 更新陣列 state
* JavaScript 中，陣列是 mutable，但若使用在 State，仍然應該視為 immutable 與 read-only。所以 state 設值時須進行適當資料複製。
* 相關回傳新 array api: concat, filter, slice, map, spread syntax。
    * filtet: 過濾 Array 並回傳符合條件的元素
    * map: 將 Array 元素變形並重新回傳。以 map 解構 Array 時，會得到 item 與 index。 
    * slice: 
* React 在使用 html list tag 時會需要有 <span style={{color: '#FF1100'}}>__key attribution__</span>。
    * key 是 React 架構所需，非 component 層級所需
    * key 是 React 用來辨識元素所用的 ID \(身分證號)
    * key 在同一層級中必須是 unique。
    * key 必須是定值，不可隨時間變動。
    * 避免以 Array, 集合物件的 index 當 key，除非確定 key value pair 不隨時間異動，因為 React state 使用資料時會需要複製或 clone 新的物件，插入/刪除/排序/input/狀態等改變會間接造成物件的排序變化。

__更新物件 state: spread syntax__

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

__更新槽串物件 state: spread syntax__

```javascript
    const [person, setPerson] = useState({
      name: 'Niki de Saint Phalle',
      artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
      }
    });
    
  function handleChange(e) {
    setPerson({
      ...person, // Copy other fields
      artwork: { // but replace the artwork
        ...person.artwork, // with the same one
        city: 'New Delhi' // but in New Delhi!
      }
    });
  }

// example from: https://react.dev/learn      
```

__更新物件 state: \[ ] 操作子__

```javascript
import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}

 // example from: https://react.dev/learn/updating-objects-in-state
```

__更新陣列 state__

```javascript
export default function BucketList() {
  let nextId = 0;
  
  const initialList = [
      { id: 0, title: 'Eggs', checked: false },
      { id: 1, title: 'Milk', checked: false },
      { id: 2, title: 'Bread flour', checked: true },
  ];

  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  const [list, setList] = useState(
    initialList
  );

  const [checkList, setCheckList] = useState(
    initialList
  );
  
  function handleCheck(itemId, nextCheck) {
    // js 的 map 不用像 java 需要 collect ??
    setCheckList(checkList.map((item, i) => {
      if (item.id === itemId) {
        return { ...item, checked: nextCheck };
      } else {
        return item;
      }
    }));
  }
  
 function ItemList({ items, onToggle }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.checked}
              
              
              onChange={e => {
                onToggle(
                  item.id,
                  e.target.checked
                );
              }}
              
              
            />
            {item.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

  return (
    <>
      <h2>Append to list:針對陣列,修改陣列元素數量</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={(e) => {
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
      
      <hr/>
      
      <h2>Check List: 一陣列的物件,修改物件內容</h2>
      * check list vs remove 使用相同資料集，但不同 state，所以能不連動各自運作
      <ItemList
        items={checkList}
        onToggle={handleCheck} />
      <hr/>
      
      <h2>Remove from list:針對陣列,修改陣列元素數量</h2>
        filter 會回傳新物件 
      <ul>
           {list.map(ingredient => (
              <li key={ingredient.id}>{ingredient.title} 
                  <button onClick={
                         (e) => {
                            setList(
                                list.filter(item =>
                                  item.id !== ingredient.id
                                )
                            );
                         }
                    } >
                     Delete
                  </button > 
              </li>
            ))}
      </ul>
    </>
  );
}
 // example from: https://react.dev/learn/adding-interactivity
```

## state props 差異
* props: 從外部傳進來的 __唯讀__ 資料
* state: 元件 __自己管理__ 、 __會變動__ 的資料
* props 是別人給的，state 是自己顧的

### props
* props 一定是從父元件來。React 的資料流是 __單向資料流 One-way data flow__ ，不允許子元件修改 props，避免發生資料異常。
* 不能被子元件修改
* 當父元件改動子元件將自動重 render
* 可是任何型別 值、物件、函式

### state
* state 指的是存在元件中的資料
* 當 state 改變會造成元件重新 render
* 須經由 useState hook 來修改，不能直接改值因為 react 需管理後續 render 所需相關動作。

```javascript
    import { useState } from "react"
    
    function Counter() {
      const [count, setCount] = useState(0)
    
      return (
        <button onClick={() => setCount(count + 1)}>
          點了 {count} 次
        </button>
      )
    }
```

### props 與 state 實際應用場景

* state 在 Parent
* Child 用 props 顯示
* Child 用 props \(onEvent ) 呼叫改 state 的方法 \(Lifting State Up 狀態提升技法)

```javascript
    function Parent() {
      const [count, setCount] = useState(0)
    
      return (
        <Child
          count={count}
          onAdd={() => setCount(count + 1)}
        />
      )
    }
    
    function Child({ count, onAdd }) {
      return (
        <>
          <p>{count}</p>
          <button onClick={onAdd}>+1</button>
        </>
      )
    }
```


## State 共用
* [React State Sharing Between Components](./React_State_Sharing)
* https://react.dev/learn/sharing-state-between-components