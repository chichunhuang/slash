---
title: PosgreSQL 自 CSV 檔匯入資料
description: PosgreSQL copy from CSV
keywords: [postgresql,copy,CSV]
---

# 自 CSV 檔匯入資料
* 以 SQL Shell / psql 搭配 \i -f 指令執行下列 *.sql 範例
* path_of_source_file.csv 中須具備與 totem_user 中同名欄位

* example 複製 path_of_source_file.csv 內容到 totem_user 資料表
    * step1: import.sql 指令檔準備
    * step2: SQL Shell(psql) 執行 import.sql 內容方式
  
  
  
## import.sql 內容範例
   
```sql
\encoding UTF8
\timing on
\copy totem_user(username, expired_date, email) FROM 'path_of_source_file.csv' DELIMITER ',' CSV HEADER ENCODING 'UTF8';
\timing off
```

## SQL Shell(psql) 登入後執行方式
  
```shell
totem=# \i 'D:/tmp/import.sql'
```

## psql 執行方式

```sql
psql -U postgres -d totem -p xxxx -h xxx.xxx.xxx.xxx -f import.sql
```

# 參考
* [PosgreSQL 資料匯出成 CSV](./PosgreSQL_copy_CSV_to_table)
* [PosgreSQL:直接於 SQL Shell (psql) 執行 sql 檔](./SqlShell_psql_Basic)