---
title: PostgreSQL DB 重建指令
description: PostgreSQL DB 重建指令
keywords: [postgresql]
---

## Postgres Database 重建順序
1. super user dumps database 先將既有資料庫備份 
1. 禁止新連線 allow connection = false
1. 中斷既有連線 pg_terminate_backend
1. 開始刪除 drop database
1. 重建資料庫
1. 權限指定給特定 Role
1. 匯入指定備份檔內容

## Postgres Database 備份

```sql

-- pg_dump -U <Role> -F p -b -v -f <Path_Of_Output_File_With_Extension> <Database>

pg_dump -U totem -F p -b -v -f database.sql TotemDB 

```
* 註: pg_dump 為安裝 Postgres 時內建的工具程式，需自行匯至 path 參數。
* [參數:](https://docs.postgresql.tw/reference/client-applications/pg_dump) 
    * -b, --blobs: 注意大小寫。小寫是將 Blobs 包含在 dump file 中。 <span style={{color: '#FF1100'}}>大寫 -B 是排除</span>，就是不匯出 Blobs。 
    * -F, --format=formatOption : 輸出檔格式
        * p, plain: 純文字 SQL 腳本
        * d, directory: pg_restore 所使用的壓縮格式。支援 parallel dumps 功能
        * t, tar: pg_restore 所使用的未壓縮格式。
    * -f,--file=filename: 輸出至指定檔
    * -v, --verbose
    


## 中斷指定 DB 的新連線許可

```SQL

-- psql -U <Role> -c "UPDATE pg_database SET datallowconn = 'false' WHERE datname = '<Database>';"

psql -U postgres -c "UPDATE pg_database SET datallowconn = 'false' WHERE datname = 'TotemDB';"

``` 
   
* 註: 
    * 這指令是中斷指定 DB 的 <span style={{color: '#FF1100'}}>__新連線__</span> 許可
    * 上述指令在 SQL Shell(psql) 下執行 <br/>
    * Database Name 以 Single Quotes 包覆。 <br/>
    * -c 後接的是 script，中間穿插有空白，所以以 double Quotes 包覆。 <br/>
* 參數: 
    * -U:
    * -c: connection，建立連線
    * datallowconn: allow connection，是否允許新連線
    * datname: DB 名稱


## 中斷指定 DB 的已有的連線


```sql

-- psql -U postgres -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE  pid <> pg_backend_pid() and datname = '<Database>';"

psql -U postgres -c "SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE  pid <> pg_backend_pid() and datname = 'TotemDB';"

```

* 註: 
    * 以 select 起始的指令，與 function 類似，實際上是執行 function 的內容動作，也就是中斷連線<br/>
    * 由 pg_stat_activity 查詢可中斷的 pid，轉交給 pg_terminate_backend 執行中斷
* 參數: 
    * pg_terminate_backend(pid): 中斷指定 pid 的連線
    * pg_backend_pid(): 當前正在查詢的 pid
    * 從 pg_stat_activity 查詢要中斷的 pid

    
## 執行指定 Database 刪除

```sql

-- psql -U postgres -c "drop database <Database>;"

psql -U postgres -c "drop database TotemDB;"

```


## 重新建立指定 Database Schema

```sql

-- psql -U postgres -c "CREATE DATABASE <Database> WITH ENCODING='UNICODE' OWNER=<Role> TEMPLATE=template0 TABLESPACE=<Tablespace>;";
-- psql -U postgres -d ecrf -c "ALTER SCHEMA public OWNER TO ecrf;"

psql -U postgres -c "CREATE DATABASE TotemDB WITH ENCODING='UNICODE' OWNER=totem TEMPLATE=template0 TABLESPACE=TotemDBSpace;"

psql -U postgres -d TotemDB -c "ALTER SCHEMA public OWNER TO totem;"

```
* 註: 
    * 沿用既有的資料夾位置所建立的 Tablespace 即可
    * 也可以更換資料儲存位置並建新的 tablespace
    * ISMS 權責分離，可以將指定 DB 交由指定帳號管理
* 參數: 
    * tablespace: db 資料放置的位置
    * template: 依序要決定是否要預設安裝相關 DB functions，可先選 template0，以後再擴充
    

## 匯入資料庫備份檔

```sql

-- cat <DumpFilePath> | psql -U <Role> 

cat database.sql | psql -U ecrf 

```