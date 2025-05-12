---
title: PostgreSQL Format JSONB Object
description: PostgreSQL Format JSONB Object
keywords: [JSONB,jsonb_pretty,PostgreSQL]
---

# Format PostgreSQL JSONB Object
基本上 PostgreSQL JSONB 的回傳結果是無序的，且未有換行或縮排。因此不意閱讀。  
若要暫時將查詢結果進行換行與縮排則可使用: jsonb_pretty 來自動縮排查詢結果。  


語法:  

```sql
	jsonb_pretty(json_value JSONB) -> TEXT
```

example: 

* 情境: Table 入學考試資料表(Entrance_Examination)

|  id(bigint)  |  Admission_Ticket(character)  |             raw_data(jsonb)        |
|  ----  | ----  | ---- | 
|      1       |           AAA001              |  \{"City":"TPE", "School":"NTU" , "Score":"60"  \}  |
|      2       |           BBB001              |  \{"City":"TYN", "School":"NCHU", "Score":"70" \}   |
|      3       |           CCC001              |  \{"City":"HSZ", "School":"NITK", "Score":"80" \}   |


```sql
 	select jsonb_pretty(raw_data) from Entrance_Examination where Admission_Ticket = 'AAA001';


--> result
{
	"City":"TPE", 
	"School":"NTU" , 
	"Score":"60" 
}

```


# reference
* [https://www.sqliz.com/postgresql-ref/jsonb_pretty/](https://www.sqliz.com/postgresql-ref/jsonb_pretty/)