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
* [查詢 Table 所占用硬碟空間](#table_size)
* [查詢 Index 所占用硬碟空間](#index_size)
* [列出指定 Table 下所有的 indexes 清單](#list_index)
* [查當前 sequence 號碼](#seq_currval)
* [textregexeq 格式檢查](#textregexeq)
* [以 vacuumlo function 移除不再使用的 lob 所占空間](#vacuumlo)
* [以 coalesce function 返回第一個非空的欄位](#coalesce)

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

### 查詢 Table 所占用硬碟空間 <span id="table_size">&nbsp;</span>
* <code>__pg_table_size__</code> : 文件上是說包含 index, toast, 與 forks。
    * 但似乎僅是估算，且應該先做 Vacuum Analysis，不然估算會差很大...... 
* <code>__pg_relation_size__</code> : 用來查資料表或索引的主資料區間。在資料補查詢部分可再以細分同 fork 所佔空間 \(內部儲存細節)
    * fork: main \(Main Fork), fsm \(Free Space Map), vm \(Visibility Map), init \(Initialization Fork)
    * main : 實際 row 資料部分。
    * fsm : 資料頁的剩餘空間部分，資料頁上可再插入新資料的部分。
    * vm : 
    * init : 儲存 crash 後還原初始狀態所需資訊。
* ☘ <code>__pg_total_relation_size__</code> : 這個應該是加總最多的，pg_table_size 還要加上 index 的 toast。 \(表 + toast + index + index 的 toast)

    
* 下面實測，若是很久未整理 Vacuum Analysis 的 Table，算出結果會很荒唐。

```sql
    -- 大滿貫, 都加進去了
    SELECT pg_size_pretty(pg_total_relation_size('table_name'));
    
    -- 資料表總空間(含索引、TOAST 等)
    SELECT pg_size_pretty(pg_table_size('table_name'));
    
    -- 資料本體空間(不含索引)
    SELECT pg_size_pretty(pg_relation_size('table_name'));
```

### 查詢 Index 所占用硬碟空間 <span id="index_size">&nbsp;</span>
* <code>__pg_indexes_size__</code> : 指定 table 下，所有 index 所占空間。
* <code>__pg_relation_size__</code> : 指定 index 所占空間。

```sql

    -- 資料表下所有 index 加總所佔總空間 \(包含預設建立的 pk index)
    SELECT pg_size_pretty(pg_indexes_size('table_name'));
    
    --列出 table 下個別 index 所佔總空間
    select 
        a.relname, 
        pg_size_pretty(pg_relation_size(a.oid)), 
        b.indexdef
            from pg_class a
            left join pg_indexes b on a.relname = b.indexname
        where b.tablename = 'table_name';
        
    --列出單一指定 index 所佔空間
    SELECT pg_size_pretty(pg_relation_size('index_name'));
```

### 列出指定 Table 下所有的 indice 清單 <span id="list_index">&nbsp;</span>
```sql
    select * from pg_indexes where tablename = 'my_table_name';
```

### 查當前 sequence 號碼 <span id="seq_currval">&nbsp;</span>
* 下列二方法皆可得到相同結果
    * <code>__currval__</code> function
    * select last_value
    
```sql

    SELECT currval('seq_my_sequence')
    
    SELECT last_value FROM seq_my_sequence;
    
    -- 包含其他資訊，increment,sequence_name, is_cycled....
    SELECT * FROM seq_my_sequence;
```

### textregexeq 格式檢查 <span id="textregexeq">&nbsp;</span>
* textregexeq 可用來檢查 String 內容格式，並回傳 boolean 結果。可放在 where caluse 使用。
* 可搭配 to_char(content, format) 將日期數值等先轉成 String 再比對。
    * [posgreSQL 型別轉換函式](https://docs.postgresql.tw/the-sql-language/functions-and-operators/data-type-formatting-functions)

```sql

    --檢查是否為數字 (t/f)
    select textregexeq('my_string_value','^[[:digit:]]+(\.[[:digit:]]+)?$')
     
    --檢查是否含有數字 括弧 大小於符號 (t/f)
    select textregexeq(trim(my_string_value), '[\d\.\(\)><＜＞]')
     
    --檢查只含有數字 (t/f)
    select textregexeq('my_string_value', '^[0-9]+$' )
    
    select id, textregexeq(to_char(phone_num,'9999999999'), '^[0-9]+$') from profile order by id desc limit 10

```


### 以 vacuumlo function 移除不再使用的 lob 所占空間 <span id="vacuumlo">&nbsp;</span>
* -U: user
* -v: verbose
    -V: Version, vacuumlo 的版本
* [PostgreSQL Vacuum 操作: 釋放 dead tuples 所占空間](./PostgreSQL_Vacuum) 

```sql

    -- syntax : vacuumlo  option... dbname
    vacuumlo -v -U db_user db_name;
```



### 以 coalesce function 返回第一個非空的欄位 <span id="coalesce">&nbsp;</span>

```sql
    -- syntax: select coalesce(value_1,value_2,value_3,........value_n)...
    
    select coalesce(to_char(phone_office,'9999999999'),to_char(phone_home,'9999999999')) from profile;
```

### 
```sql
```