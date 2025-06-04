---
title: PostgresSQL 雜項指令
description: PostgresSQL misc
keywords: [PostgreSQL]
---

> 雜七雜八指令  

* [Table 欄位長度](#character_maximum_length)
* [Postgresql 連線數查詢](#online_connection)
* [Postgresql function 是否存在語法](#functions)
* [更改 varchar 欄位長度限制](#mod_col_length)


### Table 欄位長度 <span id="character_maximum_length">&nbsp;</span>

```sql
    select column_name, data_type, character_maximum_length from information_schema.columns where table_name = 'my_table';
```


### Postgresql 連線數查詢 <span id="online_connection">&nbsp;</span>

```sql
    select datname, count(*) from pg_stat_activity group by datname;
```


### Postgresql function 是否存在語法 <span id="functions">&nbsp;</span>
* 執行下列 sql 語法，當結果回傳「1」時，表示存在。
* 自行撰寫的 functions 也可用此方法查詢。

```sql
    SELECT count(*) FROM pg_proc WHERE proname = 'array_agg';
    
    SELECT count(*) FROM pg_proc WHERE proname = 'function_name'
```


### 更改 varchar 欄位長度限制 <span id="mod_col_length">&nbsp;</span>

```sql
    ALTER TABLE table_name ALTER COLUMN column_name TYPE varchar(2500);
```

###
```sql
```