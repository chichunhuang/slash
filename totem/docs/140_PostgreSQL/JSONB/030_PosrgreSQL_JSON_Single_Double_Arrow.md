---
title: -> 與 ->> 查詢差異
description: PosrgreSQL -> 與 ->> 運算子差異
keywords: [JSONB,PostgreSQL]
---

> PostgreSQL 查詢 field 內容時有兩大 operators，主要差別在於回傳的資料型別  
> <code>__->>__</code>: 回傳的是 Json 的字面量    
> <code>__->__</code>: 回傳的是 Jsonb 物件       


## 內容查詢語法: <code>__->>__</code> Operator
* <code>__->>__</code> 用來查出 JSON/JSONB 物件 field 內容，並以 __<span style={{backgroundColor: '#b3c4ff'}}>String 格式</span>__ 回傳結果。
* 注意 PostgreSQL <code>__->>__</code> 的查詢結果顯示時 __沒有__ 用 Double Quotes 包住。

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
* <code>__->__</code> 用來查出 JSON/JSONB 物件內容，並以 __<span style={{backgroundColor: '#b3ffb3'}}>JSON/JSONB 物件格式</span>__ 回傳結果。
* <code>__->__</code> JSON 查詢，所得為 postgreSQL JSON 物件，所以可以 <code>__->__</code> 繼續往內槽串查。最終再以 <code>__->>__</code> 取值。
* 注意 PostgreSQL <code>__->__</code> 的查詢結果 __有__ 用 Double Quotes (為 JSON 物件)包住。


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

* -> return __jsonb__ object

```sql
select Student_column->'student'->'class'->'grade'->'school'-> 'school_name' as SCHOOL from Profile;


SCHOOL
jsonb
-------
"Entomology"
```

* -> return __jsonb__ object

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
---Profile
{
    "profile": {
                "first_name": "insect",
                "last_name": "totem",
                "phones": ["0922-222-222","0955-555-555"]
            }
}
```

```sql
    SELECT last_name, raw_data -> 'profile'->'phones'->0  as phone_1 FROM Student
      
    LAST_NAMR               PHONE_1  
    character varying       jsonb    
    ----------------------------------------
    totem                   "0922-222-222"  
```

## Json 查詢 Operators 變體
* 與 jsonb_set() 改資料指定路徑時類似，PostgreSQL Jsonb 內建其他路徑簡易寫法的[語法糖\(Syntactic sugar\)](./PostgreSQL_Jsonb_misc#syntax_sugar)。
* 註 function 可以經由 parse arg 來得知 Path Style，Operators 用在 SQL command 中需以其他方式辨別。

___查詢相關 operators 摘要___
* 在查詢相關 operators 中，
    * <code>__#__</code> 代表後方採用 <code>__Json Object Style path__</code>
    * <code>__>__</code> 單個代表 Jsonb 物件向下再探一層。
    * <code>__>>__</code> 兩個代表將 Jsonb 物件解析成 String。

| operator |  path style(語法糖) |
| :--: | :-- |
| <code>__->__</code> | 連續符號串接 Style Path |
| <code>__->>__</code> | 連續符號串接 Style Path |
| <code>__#>__</code> | Json Object Style path  |
| <code>__#>>__</code> | Json Object Style path |

___以 Json Object 取代路徑___

* 情境

```sql
---Specimen
{
        "Class": "Insecta",
        "Genus": {
            "name": "Aedes",
            "Subgenus": {
                "name": "Stegomyia"
            }
        },
        "Order": "Diptera",
        "Family": "Culicidae",
        "Phylum": "Arthropoda",
        "Kingdom": "Animalia",
        "Species": "albopictus"
}
```

* 範例

```sql
    
    -- original 
    select insect.classification -> 'Genus' -> 'Subgenus' -> 'name' sample_name  from insect_specimen insect;
    --Jsonb Object style
    select insect.classification #> '{"Genus","Subgenus","name" }' sample_name  from insect_specimen insect;

    === with index    
    select last_name, raw_data -> 'profile'->'phones'->0  as phone_1 FROM Student
    ===Jsonb Object style. index 為數值故沒 double quotes
    select last_name, raw_data #> '{"profile","phones",0}' as phone_1 FROM Student
```