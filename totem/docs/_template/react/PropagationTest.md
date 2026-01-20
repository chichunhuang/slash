---
title: Propagation Exercise
description: Propagation Exercise
---


import React, { useState } from "react";
import { useForm } from '@site/src/hooks/useForm';
  
export default function run() {
     function Button({ onClick, children }) {
      return (
        <button onClick={e => {
         e.stopPropagation();
          onClick();
        }}>
          {children}
        </button>
      );
    }
    
     function Button2({ onClick, children }) {
      return (
        <button onClick={e => {
         //e.stopPropagation();
          onClick();
        }}>
          {children}
        </button>
      );
    }


      return (
<div onClick={() => {
          alert('You clicked on the Pink Area!');
        }} style={{backgroundColor: 'pink'}}>
    <h2>Event 向外傳導</h2>
    <br/>
    <br/>
    
    <Button onClick={() => alert('e.stopPropagation()!')}>
        Stop Propagation
    </Button>
    
    <br/>
    <br/>
    
    <Button2 onClick={() => alert('Propagation!')}>
      Propagation
    </Button2>
          
</div>
      );

}


    
    
