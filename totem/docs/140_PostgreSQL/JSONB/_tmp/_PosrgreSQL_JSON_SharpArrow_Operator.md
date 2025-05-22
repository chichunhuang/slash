---
title: PosrgreSQL #> #>> 運算子使用方式
description: PosrgreSQL JSON Sharp-Single-Arrow Sharp-Double-Arrow Operators 
keywords: [JSONB,PostgreSQL]
---

# PosrgreSQL #> #>> 運算子使用方式 (Path Operator)

> 說明 #> #>> 兩者相同處  
 > 兩者都是語法糖，以 Path 路徑來簡化走訪 JSON 結構以得到目標資訊。  
 > 若 JSON 值為一個 Array 時，Path 在指定時內容採 __zero-based index__ 。   
 
> 說明 #> #>> 兩者異同處  
> 單箭頭 #> 符號: 回傳的是 __<span style={{color: '#0044FF'}}>JSON</span> __ 物件  
> 雙箭頭 #>> 符號: 回傳的是 __<span style={{color: '#0044FF'}}>String</span> __ 格式  
 > 記憶方式，多一個箭頭多轉一層  


## 以 #> #>> 查詢 Array 元素
* zero-based index

* 範例情境

```
{
    "profile": {
                "first_name": "insect",
                "last_name": "totem",
                "phones": ["0922-222-222","0955-555-555"]
            }
}        
```


* #> Array 查詢範例 (return<span style={{color: '#0044FF'}}> __JSON__ </span>object) 
   * 以 String Path 表達所要探索下去的路徑
   * 使用 path <span style={{color: '#0044FF'}}>'{profile, phones, 0}'</span>

```
SELECT last_name, raw_data #> '{profile, phones, 0}'  as phone_1, raw_data #> '{profile, phones, 1}'  as phone_2
  FROM Student

LAST_NAMR               PHONE_1          PHONE_2  
character varying       jsonb            jsonb  
------------------------------------------------------
totem                   "0922-222-222"  "0955-555-555"
```


* #>> Array 查詢範例 (return<span style={{color: '#0044FF'}}> __String__ </span>object)
   * 以 String Path 表達所要探索下去的路徑
   * 使用 path <span style={{color: '#0044FF'}}>'{profile, phones, 0}'</span>

```
SELECT last_name, raw_data #>> '{profile, phones, 0}'  as phone_1, raw_data #> '{profile, phones, 1}'  as phone_2
  FROM Student

LAST_NAMR               PHONE_1          PHONE_2  
character varying       text             text  
------------------------------------------------------
totem                   0922-222-222    0955-555-555
```


## 以 # operators 查詢 JSON Object

```
SELECT last_name, raw_data #>> '{profile, phones}' as phones FROM Student

PHONES
text  
------
["0922-222-222", "0955-555-555"]
  
```
