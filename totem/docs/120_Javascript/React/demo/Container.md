---
title: Toolbar
description: Toolbar
---

import React, { useState } from "react";
import { useForm } from '@site/src/hooks/useForm';

export default function Run() {

    function Msg({ message, ...rest }) {
      return (
        <span {...rest}>
          {message}
        </span>
      );
    }
    
    function EventMarkupContainer({ onClick, children }) {
      return (
        <div onClick={onClick}>
          {children}
        </div>
      );
    }
    
    function Toolbar({ onPlayMovie, onUploadImage }) {
      return (
        <div>
          A:
          <EventMarkupContainer onClick={onPlayMovie} >
            <div   >
                <Msg message={'Click to Alert!'} style={{backgroundColor: 'pink'}}></Msg>
            </div>
          </EventMarkupContainer>
          <br/>
          B:
          <EventMarkupContainer onClick={onUploadImage}>
            <img src='http://localhost:3000/img/70_70.jpg' /> <Msg message={'>> click to Alert!'}></Msg>
          </EventMarkupContainer>
          <br/>
          A/B 由相同一個元件封裝，
        </div>
      );
    }

  return (
  <>
    <h1>以相同元件封裝</h1>
    註: children 是 React 隱式插入的
    <Toolbar
      onPlayMovie={() => alert('A!')}
      onUploadImage={() => alert('B!')}
    />
  </>
  );
  
}


    
    
