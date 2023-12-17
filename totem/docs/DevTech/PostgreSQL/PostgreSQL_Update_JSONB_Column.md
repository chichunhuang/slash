---
title: PostgreSQL Update JSONB Column
description: 更改 PostgreSQL JSONB 欄位資料值
keywords: [JSONB,PostgreSQL]
---

# 更改 PostgreSQL JSONB 欄位資料值
* 情境: Table 入學考試資料表(Entrance_Examination)

|  id(bigint)  |  Admission_Ticket(character)  |             raw_data(jsonb)        |
|      1       |           AAA001              |  {"City":"TPE", "School":"NTU" , "Score":"60"  }  |
|      2       |           BBB001              |  {"City":"TYN", "School":"NCHU", "Score":"70" }   |
|      3       |           CCC001              |  {"City":"HSZ", "School":"NITK", "Score":"80" }   |



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

```sql
   update Entrance_Examination set raw_data = jsonb_set( raw_data, '{School}', '"NCHU"'::jsonb )
           where Admission_Ticket = 'AAA001';
```


# 補齊 JSONB 屬性值長度

```
--補零，轉換為 jsonb 做 update
update Entrance_Examination 
     set raw_data = jsonb_set( raw_data, '{Score}', quote_ident(lpad(raw_data ->> 'Score', 4, '0'))::jsonb )
     where Admission_Ticket = 'AAA001';
```


# Reference
* [批次更改 Jsonb 的內容: 使用 "||"](https://stackoverflow.com/questions/40583639/update-multiple-values-in-a-jsonb-data-in-postgresql)


