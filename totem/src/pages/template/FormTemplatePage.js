import React from 'react';
import Link from '@docusaurus/Link';

import { useState } from 'react';

import {default as processInput} from "@site/src/service/FormTemplateService";

import ClipboardCopy from "@site/src/components/copy/ClipboardCopy";


//
//  搭配範例
//     Page: src/pages/template/form/FormTemplatePage.js 
//     Service/Util: src/service/FormTemplateService.js 
//                   src/components/copy/ClipboardCopy.js
//
//

export default function Home() {
  let a = 'good day'
  
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const numValue = parseInt(number, 10);

    if (isNaN(numValue) || numValue >= 50) {
      setError('請輸入小於 50 的數值');
      return;
    }

    if (text.length > 200) {
      setError('字串長度不能超過 200 個字元');
      return;
    }

    setError('');
    const processed = processInput(numValue, text);
    setResult(processed);
  };
  
  
    
  return (
    <div>
    <ClipboardCopy  message={a}/>
    
    
    <span>這個 src 下的 js page 的 url 為  http://localhost:3000/folderHierach/JsFileName</span>
    <span>http://localhost:3000/template/form/FormTemplatePage</span><br/>
    
    可以搭配 <Link to="/template/FormTemplatePage"> to  FormTemplatePage </Link>
    
    <ul>
    <ol>參考 home page 實作內容</ol>
    <ol> Page: src/pages/template/form/FormTemplatePage.js </ol>
    <ol> Service/Util: src/service/FormTemplateService.js </ol>
    <ol> Util Component(Text to clipboard): src/copy/ClipboardCopy.js  </ol>
    </ul>
    
    
    <hr/>
    <hr/>
    <hr/>
    
    <h2>輸入表單</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>數值 (小於 50)：</label><br />
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <label>文字 (不超過 200 字)：</label><br />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>送出</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div style={{ marginTop: '20px' }}>
          <h3>處理結果：</h3>
          <p>{result}</p>
        </div>
      )}
      
      <ClipboardCopy  message={result}/>
    </div>
  );
}
