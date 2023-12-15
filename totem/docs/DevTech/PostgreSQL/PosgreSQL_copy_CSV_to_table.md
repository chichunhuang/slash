---
title: PosgreSQL copy CSV to table
description: PosgreSQL 資料匯出成 CSV
keywords: [postgresql,copy,CSV]
---

# PosgreSQL 資料匯出成 CSV
* example: totem_user 資料表內容輸出到 /tmp/result.csv。
    * step1: export.sql 指令檔準備
    * step2: SQL Shell(psql) 執行 export.sql 內容方式

## export.sql 內容範例
* 註: 下面範例將 copy 指令拆成多行方便閱讀，實際使用時建議避免出現斷行。

```sql
\encoding UTF8
\timing on
\COPY  
  ( 
      select username, expired_date, email from totem_user
   ) 
   to '/tmp/result.csv' DELIMITER ',' CSV HEADER FORCE QUOTE * ;
\timing off
```

## SQL Shell(psql) 登入後執行方式
  
```shell
totem=# \i 'D:/tmp/export.sql'
```

## psql 執行方式

```sql
psql -U postgres -d totem -p xxxx -h xxx.xxx.xxx.xxx -f export.sql
```



# 參考
* [PostgreSQL 自 CSV 檔匯入資料](./PosgreSQL_copy_from_CSV)
* [PosgreSQL:直接於 SQL Shell (psql) 執行 sql 檔](./SqlShell_psql_Basic)

