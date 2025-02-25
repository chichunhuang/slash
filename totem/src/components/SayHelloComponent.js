import React from 'react';

// 完整範例需搭配: docs/template/customized_JSX_component.md 

function Talk(children, color){
 return     <span
        style={{
          backgroundColor: color,
          borderRadius: '20px',
          color: '#fff',
          padding: '10px',
          cursor: 'pointer',
        }}
        onClick={() => {
          alert(`You clicked the color ${color} with label ${children}`);
        }}>
        
    {children}
  </span>
}

export {Talk};




// At *.md file
// import {Talk} from "@site/src/components/SayHelloComponent";
// 
// 
// 注意: md 範例中的 <span> 不能省
// 
//<span>
//{Talk('Hello World')}
//</span>



