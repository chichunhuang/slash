---
title: PosrgreSQL -> ->> 運算子差異
description: PosrgreSQL JSON Single Double Arrow Operators 
keywords: [JSONB,PostgreSQL]
---









這篇部署時會出錯

>  when yarn deploying, change locale to en  
>  
>  /docs/DevTech/PostgreSQL/JSONB/PosrgreSQL_JSON_Single_Double_Arrow  
>    
>  [ERROR] Unable to build website for locale zh-tw.  

















# PosrgreSQL -> ->> 運算子差異


## Double Arrows Operator <span style={{backgroundColor: '#b3c4ff'}}>->></span> 查詢用語法
* __<span style={{backgroundColor: '#b3c4ff'}}>->></span>__ 用來查出 JSON/JSONB 物件 field 內容，並以 __<span style={{backgroundColor: '#b3c4ff'}}>String 格式</span>__ 回傳結果。
* 注意 PostgreSQL ->> 的查詢結果 __沒有__ 用 Double Quotes 包住。

```sql
  select address->>'country' as COUNTRY FROM profile;
  
COUNTRY
--------
TAIWAN
KOREA
JAPAN
CHINA
```


## Single Arrow Operator <span style={{backgroundColor: '#b3ffb3'}}>-></span> 查詢用語法
* __<span style={{backgroundColor: '#b3ffb3'}}>-></span>__ 用來查出 JSON/JSONB 物件內容，並以 __<span style={{backgroundColor: '#b3ffb3'}}>JSON/JSONB 物件格式</span>__ 回傳結果。
* ->JSON 查詢，所得為 postgreSQL JSON 物件，所以可以 -> 繼續往內槽串查。最終再以 ->> 取值。
* 注意 PostgreSQL -> 的查詢結果 __有__ 用 Double Quotes (為 JSON 物件)包住。


```sql
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

* ->> return __String__

```sql
select Student_column->'student'->'class'->'grade'->'school'->> 'school_name' as SCHOOL from Profile;

SCHOOL
text
-------
Entomology

```

* -> return __jsonb__

```sql
select Student_column->'student'->'class'->'grade'->'school'-> 'school_name' as SCHOOL from Profile;


SCHOOL
jsonb
-------
"Entomology"
```

* -> return __jsonb__

```sql
select Student_column->'student'->'class'->'grade'->'school'  as SCHOOL from Profile;


SCHOOL
jsonb
-------
"{"school_name": "Entomology"}"
```

## 使用基本查詢運算子查詢 JSON Array 元素
* zero-based index
* Query String : <span style={{color: '#0044FF'}}>'profile'->'phones'-> 0 </span>

* 範例情境

```sql
{
    "profile": {
                "first_name": "insect",
                "last_name": "totem",
                "phones": ["0922-222-222","0955-555-555"]
            }
}        
```

```sql
SELECT last_name, raw_data #> 'profile'->'phones'->0  as phone_1 FROM Student
  
LAST_NAMR               PHONE_1  
character varying       jsonb    
----------------------------------------
totem                   "0922-222-222"  

```
