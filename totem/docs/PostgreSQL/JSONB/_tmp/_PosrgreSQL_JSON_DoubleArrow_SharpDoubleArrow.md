
---
title: PosrgreSQL ->> #>> 運算子差異
description: PosrgreSQL JSON Single-Arrow and Sharp-Double-Arrow Operators 
keywords: [JSONB,PostgreSQL]
---

# PosrgreSQL ->> #>> 運算子差異

> 說明兩者相同處  
> 雙箭頭相關符號: 回傳的是 __<span style={{color: '#0044FF'}}>String</span> __ 格式  
 > ->> 將查詢結果轉為  __String__  
 > #>> 將查詢結果轉為  __String__  
 > 寫三次避免自己忘記 @@，多一個箭頭多轉一層。  

> 單箭頭相關符號: 回傳的是 __<span style={{color: '#0044FF'}}>JSON</span> __ 格式   
 > -> 回傳的則是 JSON 物件  
 > #> 回傳的則是 JSON 物件  
 > 再寫三次避免自己忘記  


## ->> #>> 語法差異
* 兩者都是查詢 PostgreSQL JSON column 中屬性值的 operators。
* 兩者功能相同查詢後都是回傳 JSON 物件。
* ->> : 用來串接 JSON 槽串的 Attributes。
* #>> : 相較於 ->> 運算子，必須一直串箭頭與單括號。#>> 則提供以 path 的方式來寫 JSON 階層關係。 
* 可以將 #>> 想成是 ->> 的語法糖，簡化 Attribute 指定路徑。


## 下列以 ->> #>> 查詢相同結果範例

* 範例情境

```
"student": {
    "first_name": "insect",
    "last_name": "totem",
    "class": {
        "class_name" : "A",
        "grade" : {
            "grade_name" : "3",
            "school" :{
                "school_name" : "Entomology"
            }
        }
    }
}
```


* ->> 查詢範例 (return Strring)
   * 以 ->> 串接不同層的 attributes
   * 使用 ->> 運算子 <span style={{color: '#0044FF'}}>'student'->'class'->'grade'->'school'->> 'school_name'</span>
   
```
select Student_column->'student'->'class'->'grade'->'school'->> 'school_name' as SCHOOL from Profile;

SCHOOL
jsonb
-------
Entomology



select Student_column->'student'->'class'->'grade'->'school'  as SCHOOL from Profile;

SCHOOL
jsonb
-------
{"school_name": "Entomology"}
```

* #>> 查詢範例 (return JSON object)
   * 以 String Path 表達所要探索下去的路徑
   * 使用 path <span style={{color: '#0044FF'}}>'{student,class,grade,school,school_name}'</span>

```
select Student_column #>> '{student,class,grade,school,school_name}' as SCHOOL

SCHOOL
jsonb
-------
"Entomology"



select Student_column #>> '{student,class,grade,school}' as SCHOOL

SCHOOL
jsonb
-------
"{"school_name": "Entomology"}"
```