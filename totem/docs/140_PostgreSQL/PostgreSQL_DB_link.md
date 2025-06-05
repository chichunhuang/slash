---
title: pgAdmin 使用 dblink
description: PostgreSQL DB link
keywords: [postgresql,dblink]
---

## 安裝 DB link
* 開啟 pgAdmin PSQL Console 執行下列語法：
* 若出現訊息：Use "CREATE EXTENSION dblink" to load this file. 表示安裝完成

```sql
    postgres=# \i 'C:\\Program Files\\PostgreSQL\\9.2\\share\\extension\\dblink--1.0.sql'
```

## 開啟 Query 功能
* dbname 指定此連線以外的資料庫
* 每次開啟 Query 時都要執 CREATE EXTENSION dblink

```sql
    CREATE EXTENSION dblink;
    select * from dblink('dbname=remoteDB user=totem password=myPassword','select email from account_table') as t1(email varchar);
```
