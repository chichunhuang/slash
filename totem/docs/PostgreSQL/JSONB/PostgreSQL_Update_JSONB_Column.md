---
title: PostgreSQL Update JSONB Column
description: 更改 PostgreSQL JSONB 欄位資料值
keywords: [JSONB,PostgreSQL]
---

# 更改 PostgreSQL JSONB 欄位資料值
* 情境: Table 入學考試資料表(Entrance_Examination)

|  id(bigint)  |  Admission_Ticket(character)  |             raw_data(jsonb)        |
|----------------|-------------------------------|-----------------------------|
|      1       |           AAA001              |  {"City":"TPE", "School":"NTU" , "Score":"60"  }  |
|      2       |           BBB001              |  {"City":"TYN", "School":"NCHU", "Score":"70" }   |
|      3       |           CCC001              |  {"City":"HSZ", "School":"NCCU", "Score":"80" }   |



# 查詢 JSONB 屬性資料
* 使用 ->> 符號進行 JSONB 欄位下屬性值查詢

```sql
  select raw_data ->> 'School' as "School" from Entrance_Examination where Admission_Ticket = 'AAA001';
```

# 更改 JSONB 方式
* 可以使用下列方式來做屬性值修改。
* __jsonb_set()__
* __jsonb_insert()__ 


# 更改 JSONB 屬性值藉由 jsonb_set()
* jsonb_set 置入物件，取代既有資料, Replacement  
* 注意: jsonb column 至少要先有一個空物件(不能為 null)才能進行 set。  
* create_if_missing 預設為 true，當無此 attribute 時，update 變 insert。  


  語法:  
  
```
	jsonb_set(
	  target JSONB, path TEXT[], new_value JSONB[, create_if_missing BOOLEAN]
	) -> JSONB
```

* 下方 replacement 範例: school NTU 取代成 NCHU
  * 將學校改成 NCHU (JSON 結構未改變)
  
```sql
   update Entrance_Examination set raw_data = jsonb_set( raw_data, '{School}', '"NCHU"'::jsonb )
           where Admission_Ticket = 'AAA001';
           
-->
{
  "City":"TPE", 
  "School":"NCHU" , 
  "Score":"60"  
}
```


  * 將學校改成 NCHU，並設定分校為 Taipei (School 改一個 JSON 結構)
  
```sql
   update Entrance_Examination set raw_data = jsonb_set( raw_data, '{School}', '{"Campus":"NCHU", "Branch_Campus":"Taipei"}' )
           where Admission_Ticket = 'AAA001';
           
-->
"{
    "City": "TPE",
    "Score": "60",
    "School": {
        "Campus": "NCHU",
        "Bbranch_Ccampus": "Taipei"
    }
}"           
```


# 新增  JSONB 屬性值藉由 jsonb_insert() 
```sql
	jsonb_insert(
	  target JSONB, path TEXT[], new_value JSONB[, insert_after BOOLEAN]
	) -> JSONB
```

```sql
update Entrance_Examination set raw_data = jsonb_insert( raw_data, '{Country}', '"TW"'::jsonb )
           where Admission_Ticket = 'AAA001';
```



# 補齊 JSONB 屬性值長度
* 分數補0到四位

```
--補零，轉換為 jsonb 做 update
update Entrance_Examination 
     set raw_data = jsonb_set( raw_data, '{Score}', quote_ident(lpad(raw_data ->> 'Score', 4, '0'))::jsonb )
     where Admission_Ticket = 'AAA001';
```


# Reference
* [批次更改 Jsonb 的內容: 使用 "||"](https://stackoverflow.com/questions/40583639/update-multiple-values-in-a-jsonb-data-in-postgresql)
* [https://www.postgresql.org/docs/9.5/functions-json.html](https://www.postgresql.org/docs/9.5/functions-json.html)