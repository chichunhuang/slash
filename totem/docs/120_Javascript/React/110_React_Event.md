---
title: React 狀態與事件
description: React State and Event
keywords: [javascript,React,Event_Handller]
---

## React 狀態與事件處理程序
* State and Event Handler
    * State: 指隨著時間變化資料
    * Event Handlers: 指使用者 clicking、hovering、focusing on form 等互動操作時觸發的函數

## Convention 
* Event Handlers 通常會以 __handleEventName__ 形式來命名，即 handle 起始並以 event 動作結尾。  
* handler 通常會與 UI component 綁定並在 UI 元件內實作。  
* 注意: 
    * snapshot，event handler 預期應該是一個 js function。  
    * 使用時是傳遞註冊 event function 還是呼叫，別不小心加上小括號。
    
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
    * __e.stopPropagation\()__: 阻止附加到標籤的 <span style={{color: '#0044FF'}}>__事件處理程序觸發__</span> 。
    * __e.preventDefault\()__: 阻止特定事件 \(ex: form submit) 的 <span style={{color: '#0044FF'}}>__預設瀏覽器行為__</span>。
* [Propagation_Demo](./demo/Propagation)

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

    
## 客製化元件事件設計技巧
* 封裝一個 Presentation UI 元件，UI 元件利用 Browser 中 button 或 link 等預設的 event 來進行觸發，觸發後的動作則可自行客製。

__Concept 演示__
* Toolbar 表面看似乎出現特殊的 onPlayMovie、onUploadImage 事件。實際上則是借用 EveneMarkupContainer 的 onClick 事件。
* EveneMarkupContainer 則利用 React 元件父子關係，可自行更換外觀長相。
* [Container_Demo](./demo/Container)

```javascript
export default function App() {
    function Msg({ message }) {
      return (
        <span>
          {message}: customize your view 
        </span>
      );
    }
    
    function EveneMarkupContainer({ onClick, children }) {
      return (
        <div onClick={onClick}>
          {children}
        </div>
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

  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}



//example from https://react.dev/learn/adding-interactivity
```