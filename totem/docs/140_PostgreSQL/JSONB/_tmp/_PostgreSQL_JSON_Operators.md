---
title: PostgreSQL JSON 相關操作
description: PostgreSQL JSON  Operators 
keywords: [JSON Operators,PostgreSQL]
---


# PostgreSQL JSON 相關操作

## 基本取值運算子
> 用來取出指定 element 的值  
> 箭頭符號 : 以連續箭頭指向目標 element  
> Sharp 符號: 以路徑表達式 指定 element  
> 若遇到 value 為 Array 時，則以 zero-based index 指定

* ->
* ->>
* #>
* #>>


## 布林運算子
> 通常用在 Where clause  
> 運算結果為布林值  

* @> 左側 JSON 資料是否包含右側內容 (左側是raw data, 右側是條件)(右是左的子集合)
* <@ 右側 JSON 資料是否包含左側內容(左是右的子集合, join 多個 json tables 時使用?)
* ? JSON 資料中是否有 key 或 value 同於指定值 (單一查詢條件)
* ?| JSON 資料中是否有 key 或 value 同於指任一定值 (提供 array of values: array['0955-555-555'])
* ?& JSON 資料中是否有 key 或 value 同於指定 [全部]條件值 (提供 array of values: array['0955-555-555'])


* || 將多個 JSON 資訊合併。 
   * 左右同型別(同為JSON obj/ 同為 array) 則將兩者內容 element 合併。回傳原形別  
   * 左右不同型別 則合併為一個 Array
   * 若左右同型別，但卻想合併為 多維度 array 則需搭配使用  jsonb_build_array  函數
   
* - : remove elements
   * remove element by key or value
   * remove element index
* #- : remove elements by path (# 都是用 path)



搭配 regex?? jsonpath ?? 
* &> 
* @? 
* @@

# reference 
[PostgreSQL JSON Operators](https://docs.postgresql.tw/the-sql-language/functions-and-operators/json-functions-and-operators)