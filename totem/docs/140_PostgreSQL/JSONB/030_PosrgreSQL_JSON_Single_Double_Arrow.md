---
title: -> 與 ->> 查詢差異
description: PosrgreSQL -> 與 ->> 運算子差異
keywords: [JSONB,PostgreSQL]
---

> PostgreSQL 查詢 field 內容時有兩大 operators，主要差別在於回傳的資料型別  
> <code>__->>__</code>: 回傳的是 Json 的字面量    
> <code>__->__</code>: 回傳的是 Jsonb 物件       


## 內容查詢語法: <code>__->>__</code> Operator
* __<span style={{backgroundColor: '#b3c4ff'}}>->></span>__ 用來查出 JSON/JSONB 物件 field 內容，並以 __<span style={{backgroundColor: '#b3c4ff'}}>String 格式</span>__ 回傳結果。
* 注意 PostgreSQL ->> 的查詢結果顯示時 __沒有__ 用 Double Quotes 包住。

```sql
  select address->>'country' as COUNTRY FROM profile;
  
COUNTRY
--------
TAIWAN
KOREA
JAPAN
CHINA
```


## Jsonb 物件查詢語法: <code>__->__</code> Operator
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

## 當查詢結果是 Array Element
* 當查詢結果是 Array Element 時，PostgreSQL 可以再向內以 index 查找指定位置元素。  
    * 註: <span style={{color: '#0044FF'}}>__zero-based index__</span>
    * <code>__->>__</code>、<code>__->__</code> 若指向的結果是 Array，則允許再串一個 <code>__zero-based index__</code>，以取出單一元素。
* 例如: 'profile'->'phones'<span style={{color: '#0044FF'}}> -> 0 </span>

___範例情境___

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