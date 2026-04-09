---
title: React State 共享
description: React State 共享
keywords: [javascript,React,State]
---

> React State Sharing Between Components

[State Lifting Example](./demo/State_Lifting)  

## state 被多個 components 共享
* 多個相依元件實例經由 __同一個 state 狀態變動進行同步渲染__ 
* React 中 state 共享的術語稱 lifting state up，包含下列概念。
    * 元件所管理的會變成類似 instance variable，各自獨立。
    * state 在元件外管理，元件被動受 state 狀態改變重新渲染。    
    * 元件可傳入指定 function 當 handler，以讓元件也有 state 控制權。
    * 關鍵: 參數是傳入的，每次重新渲染會重新取值重繪。__關鍵在於或外部傳入的 state 值動態變化造成重新渲染，元件也跟著變化__。


___範例中三個 Panel 的 children 共用 active flag___

``` javascript

export default function Parent() {
   const [activeIndex, setActiveIndex] = useState(0);
  
   function Image(){
      return (
         <img src="https://insect-totem.net/img/70_70.jpg" />
       );
   }

    function Panel({      
        title,     
        children,      
        isActive,      
        onShow    }) {
          return (
              <section className="panel">
          <h3>{title}</h3>
          {isActive ? (
            <p>{children}</p>
          ) : (
            <button onClick={onShow}>
              Show(Linked State )
            </button>
          )}
        </section>
      );
    } 
    
    function handleEvent(index){
        setActiveIndex(index);
    }

  return (
    <>
      <h2>State Lifting</h2>
      <Panel
        title="About"
        children="___about child___"
        isActive={activeIndex === 1}
        onShow={() => handleEvent(1)}
      >
       
      </Panel>
      <hr/>
      <Panel
        title="Detail"
        isActive={activeIndex === 1}
        onShow={() => handleEvent(1)}
      >
        ___detail child___
      </Panel>
      
      <hr/>

      <Panel
        title="Image children"
        isActive={activeIndex === 1}
        onShow={() => handleEvent(1)}
      >
      <Image></Image>image child
      </Panel>
     
     <hr/> 
      <button onClick={() => handleEvent(0)}>Hide All Children</button>
      <button onClick={() => handleEvent(1)}>Show All Children</button>
    </>
  );
}
```    


## Single Source of Truth
* 每一個 state 都會被某個特定元件所管理，稱作 Single Source of Truth。
* 但這並非意味著一個 state 僅能被一個元件使用，例如上方範例。