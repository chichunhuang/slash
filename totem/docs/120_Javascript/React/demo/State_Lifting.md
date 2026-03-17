---
title: State Lifting
description: State Lifting
---
import { useState } from 'react';

export default function Parent() {
   const [activeIndex, setActiveIndex] = useState(0);
  
   function Image(){
      return (
         <img src="https://insect-totem.net/img/70_70.jpg" />
       );
   }
   
    function Container({      
        title,
        children,
        show=true }) {
     return (
        <section className="panel">
         <h1>{title}</h1>
            {children}
        </section>
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
     
     <hr/> 
      <p>
        children 隱含 props 語法糖
      </p>
     
      <p>
        標準實作方式
      </p>
      <Container
        title="Inline"
        children="___Inline___"
      >
      </Container>
      
      <p>
          <ol>
          <li>
            推薦實作方式，較易閱讀。
          </li>
          <li>
            隱式的 children 變數會嵌在 tag 之間
          </li>
          </ol>
      </p>
      <Container
        title="Aoto"
      >
        自動在 HTML tag 間插入 children 變數 
      </Container>
    </>
  );
}

