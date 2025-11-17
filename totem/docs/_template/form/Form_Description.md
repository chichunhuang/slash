---
title: Docusaurus Form 範例說明
description: Docusaurus Form Example
keywords: [Insect-totem]
---

## 注意事項: 關於路由路徑
* 下列兩個檔案內容相同，但是副檔名不同，放置位置需不同
    * 位置不同兩者的路由路徑也不相同
    * A1:docs/template/form/widget.md
        * http://localhost:3000/docs/template/form/widget
        * return jsx component: 會內嵌整個頁面包含 menu、title、footer 等
        * 移除 Layout tag 可一並移除 menu、title、footer 等
    * A2:src/pages/form/widget.js
        * http://localhost:3000/form/widget


## 採用架構
* Page 檔
    * Page 的 form 與 input 橋接 src/hooks/useForm.js 進行 payload 資料接收與回傳
    * 每一個 form 的 business flow 封裝在一個指定的 service.js 之中
    * Page import service and useForm 使用自訂 Hook + Service
    


### useForm.js
* 用途: 
    * 處理 POJO editing 並串接 submitCallback
    * 執行泛型的 POJO payload setter getter 動作
    * submitCallback: 僅需專注在 busuness flow

```javascript
// src/hooks/useForm.js
import { useState } from 'react';

export function useForm(initialValues, submitCallback) {
  const [form, setForm] = useState(initialValues);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('🔄 計算中...');
    const result = await submitCallback(form);
    if (result.ok) {
      setStatus(result.message);
      setForm(initialValues);
    } else {
      setStatus('⚠️ ' + result.message);
    }
  };

  return { form, setForm, status, handleChange, handleSubmit };
}

```

### service.js
___service example 1___

```javascript
	// src/services/bmiService.js
	export async function calculateBMI({ height, weight }) {
	  // 這裡可以加上資料驗證或 API 呼叫
	  height = parseFloat(height);
	  weight = parseFloat(weight);
	
	  if (!height || !weight) {
	    return { ok: false, message: '請輸入有效數字' };
	  }
	
	  const bmi = weight / ((height / 100) ** 2);
	  return { ok: true, message: `BMI: ${bmi.toFixed(2)}` };
	}

```

___service example 2___

```javascript
	// src/services/temperatureService.js
	export async function convertTemperature({ value, fromUnit, toUnit }) {
	  value = parseFloat(value);
	  if (isNaN(value)) {
	    return { ok: false, message: '請輸入數字' };
	  }
	
	  let result;
	  if (fromUnit === 'C' && toUnit === 'F') {
	    result = (value * 9) / 5 + 32;
	  } else if (fromUnit === 'F' && toUnit === 'C') {
	    result = ((value - 32) * 5) / 9;
	  } else {
	    result = value; // 同單位
	  }
	
	  return { ok: true, message: `${value}${fromUnit} = ${result.toFixed(2)}${toUnit}` };
	}

```


### Page 使用自訂 Hook + Service
```
	// src/docs/bmi.md
	import React from 'react';
	import Layout from '@theme/Layout';
	import { useForm } from '../hooks/useForm';
	import { calculateBMI } from '../services/bmiService';
	//import {xx} from "@site/src/service/TemplateService";

//注意 Jsx function: export 關鍵字,前方不可以有 space=> 不然
//Error: MDX compilation failed for file
//[webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item...

export default function BMI() {
  const { form, handleChange, handleSubmit, status } = useForm(
    { height: '', weight: '' },  // 初始值
    calculateBMI                 // 傳入 service
  );
	
	  return (
	    <div>
	    <h1>BMI 計算</h1>
	      <form onSubmit={handleSubmit}>
	        <div>
	          <label>身高(cm)：</label>
	          <input name="height" value={form.height} onChange={handleChange} />
	        </div>
	        <div>
	          <label>體重(kg)：</label>
	          <input name="weight" value={form.weight} onChange={handleChange} />
	        </div>
	        <button type="submit">計算</button>
	      </form>
	      <p>{status}</p>
	    </div>
	  );
	}
```

### 採用架構A docs-md
* 這邊可以用自行撰寫的工具產生 docs-map.md
* A1:docs/template/form/widget.md
    * http://localhost:3000/docs/template/form/widget
    * return jsx component: 會內嵌整個頁面包含 menu、title、footer 等
    * 移除 Layout tag 可一並移除 menu、title、footer 等


### 採用架構B src-js
* 這邊無法用自行撰寫的工具產生 docs-map.md
* A2:src/pages/form/widget.js
    * http://localhost:3000/form/widget 
    *不須移除 Layout tag


## Layout Tag
* Layout Tag 會承接 main page，所以若以 docs/md 檔實作時，應改成 div 包覆範圍。不然 HomePage 在家自行實作下，連續包兩層會出現 menu 槽串頁面情形。
* 若以 src/js 實作，則需要 Layout Tag。因為外層未包覆過。
