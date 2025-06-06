---
title: PostgreSQL 備份與還原範例
description: PostgreSQL Backup and Restore
keywords: [backup,restore,postgresql]
---

## PostgreSQL 備份與還原範例
* pg_dump 指令備份
* pg_restore 指令回存
* Database 重建範例


## pg_dump 指令備份
* -U:user name
* -F c:dump檔格式為 custom, 可以連在一起 -Fc
* -F t:dump檔格式為 tar
* -b: 連 blob table 一起 dump
* -v: verbose
* -f: file
* 最後面接的 option 是 db name

```sql
    pg_dump -U totem -F t -b -v -f totem1.tar totem
```


## Database 重建指令
* 準備指令檔 rebuild.sql
* 執行 rebuild.sql 方式

  將下列指令放入 rebuild.sql 中
  
```sql
    drop database totem;
    
    CREATE DATABASE totem
      WITH ENCODING='UTF8'
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

## pg_restore 指令回存
* -i: 可不管版本強制回存
* -h: host
* -p: port

```bash
    pg_restore -U totem -F t -d totem -i -v totem.tar
```