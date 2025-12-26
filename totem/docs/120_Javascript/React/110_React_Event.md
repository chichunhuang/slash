---
title: React 狀態與事件
description: React State and Event
keywords: [javascript,React,Event_Handller]
---

## React 狀態與事件處理程序
* State and Event Handler
    * State: 指隨著時間變化資料
    * Event Handlers: 指使用者 clicking、hovering、focusing on form 等互動操作時觸發的函數
    
## Event
* 指使用者 clicking、hovering、focusing on form 等互動操作時觸發的函數

## State
* 元件因互動會需要暫存輸入資料，元件記住輸入資料的術語在 React 中稱為 State。
* state 是 React hook IOC 結構的一種，state 內容的保留與管理時機由 React 管理。
* React 提供兩個介面，讓開發者取值與送交資料異動。
* 注意: State as a Snapshot
    * <span style={{color: '#FF1100'}}>__設定狀態會要求重新 Render，但不會更改已執行的程式碼__</span>。
    * 所以，若是直接更改 state 中的數值，僅會出發 Render。然而因未實際 set 到 React 中所以畫面重畫但數值不變。

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
    setScore(score + 1);
    // 直接異動 React 狀態中儲存的物件和陣列
    // const [score, setScore] = useState(0);
    // 在第一次 Render 時，score 已被設為 0，
    // 且 increment_failed 不再變動，因已被 transpile 內容已被當下計算結果鎖死。
  }
  
  function increment_pass() {
    setScore(score => score + 1);
    // 這邊餵進去的是 labmda 表達式 (狀態更新函數)
    // transpile 後給的是執行方式，不是計算結果。
  }
}
 
```
    
## 客製化元件事件設計技巧
* 封裝一個 Presentation UI 元件，UI 元件利用 Browser 中 button 或 link 等預設的 event 來進行觸發，觸發後的動作則可自行客製。

__Concept 演示__
* Toolbar 表面看似乎出現特殊的 onPlayMovie、onUploadImage 事件。實際上則是借用 EveneMarkupContainer 的 onClick 事件。
* EveneMarkupContainer 則利用 React 元件父子關係，可自行更換外觀長相。

```javascript
export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <EveneMarkupContainer onClick={onPlayMovie} >
        <Msg message={'Play Movie!'}></Msg>
      </EveneMarkupContainer>
      <EveneMarkupContainer onClick={onUploadImage}>
        Upload Image
      </EveneMarkupContainer>
    </div>
  );
}

function EveneMarkupContainer({ onClick, children }) {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  );
}

function Msg({ message }) {
  return (
    <span>
      {message}: customize your view 
    </span>
  );
}

//example from https://react.dev/learn/adding-interactivity
```