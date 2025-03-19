---
title: PosgreSQL Backup and Restore
description: PosgreSQL 備份與還原範例
keywords: [backup,restore,postgresql]
---

# PosgreSQL 備份與還原範例
* pg_dump 指令備份
* pg_restore 指令回存
* Database 重建範例


# pg_dump 指令備份

```sql
pg_dump -U totem -F t -b -v -f totem1.tar totem
```


# pg_restore 指令回存

```
pg_restore -U totem -F t -d totem -i -v totem.tar
```

# Database 重建指令
* 準備指令檔 rebuild.sql
* 執行 rebuild.sql 方式

  將下列指令放入 rebuild.sql 中
  
```sql
drop database totem;

CREATE DATABASE totem
  WITH ENCODING='UNICODE'
       OWNER=totem
       TEMPLATE=template0
       TABLESPACE=totem;
\c totem;
       
ALTER SCHEMA public OWNER TO totem;
```


   psql 執行 sql script 檔範例

```shell
psql -U postgres -f rebuild.sql

```