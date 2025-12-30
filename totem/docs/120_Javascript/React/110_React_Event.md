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
* 注意編寫 Event Handler 的重要注意事項:
    * 事件處理程序的設定方式 \(設定與呼叫間的差異)
* 事件處理設計技巧:
    * 可以利用 React 元件封裝技巧自行定義新元件的 專屬 event。
    

__Handler 註冊方式: 註冊與呼叫__

```javascript
註冊一個函式
<button onClick={handleClick}>
<button onClick={() => alert('...')}>


錯誤方式，會直接執行doSomething
<button onClick={doSomething()}>
```

__自訂 Event: onSmash__
* 範例: 除了自定義的 onSmash event 外，也經由 children 演示客製化元件的外觀動態設定方式。
    * onSmash event: 事件
    * children component: 外觀

```javascript
function MyButton({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <MyButton onSmash={() => alert('Playing!')}>
        Play Movie
      </MyButton>
      <MyButton onSmash={() => alert('Uploading!')}>
        Upload Image
      </MyButton>
    </div>
  );
}

// from https://react.dev/
```
* line 1: props 解構。
* line 3: 封裝自訂 event。
* line 4: 可經由 children 或範例中的 Button 更改 UI component 的外觀。

## Propagation 事件傳遞
* 事件傳遞，React UI 元件封裝過程中，預設內部元件\(子元件)觸發的 event 活動會引發一連串向外\(父元件)脈衝。
* React 若要中斷 event 向外脈衝可採用 e.stopPropagation\()。
* 針對非事件類的瀏覽器行為，如 form 的 submit 送交資訊行為。
    * e.stopPropagation\(): 阻止附加到標籤的 __事件處理程序觸發__ 。
    * e.preventDefault\(): 阻止特定事件 \(ex: form submit) 的預設 __瀏覽器行為__。


```javascript
    function Button({ onClick, children }) {
      return (
        <button onClick={e => {
         // e.stopPropagation();
          onClick();
        }}>
          {children}
        </button>
      );
    }
    
    export default function Toolbar() {
      return (
        <div className="Toolbar" onClick={() => {
          alert('You clicked on the toolbar!');
        }}>
          <Button onClick={() => alert('Playing!')}>
            Play Movie
          </Button>
          <Button onClick={() => alert('Uploading!')}>
            Upload Image
          </Button>
        </div>
      );
    }    

// example from https://react.dev/    
```



## State

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
    * 所以，開發時應注意程式碼的作用階段，
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