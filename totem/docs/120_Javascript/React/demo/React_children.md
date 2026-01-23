---
title: State children
description: State children
---

import { useState } from 'react';


export default function children() {

    function Panel({      
        title,
        children}) {
     return (
        <section className="panel">
         <h1>{title}</h1>
            {children}
        </section>
      );
    } 
    
  return (
    <>
      <p>
        標準實作方式
      </p>
      <h2>State Lifting</h2>
      <Panel
        title="Inline"
        children="___Inline___"
      >
      </Panel>
      
      <hr/>
      
      <p>
          <ol>
          <li>
            ✨ ❄ 推薦實作方式❄，較易閱讀。
          </li>
          <li>
            隱式的 children 變數會嵌在 tag 之間
          </li>
          </ol>
      </p>
      <Panel
        title="Aoto"
      >
        自動在 HTML tag 間插入 children 變數 
      </Panel>
    </>
  );
}