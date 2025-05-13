---
title: PostgreSQL FDW Setting
description: PostgreSQL DB link 設定
keywords: [dblink,FDW,PostgreSQL]
---

# PostgreSQL DB link (FDW) 
* Foreign Data Wrappers (FDW)
* 可用以進行跨資料庫 query, insert, delete 指定資料表等操作。
* 非預設功能，需手動安裝 PostgreSQL Extension
* 可連結多種資料源:
    * SQL Databases: Oracle, MySQL, ODBC, JDBC
    * NoSQL Databases: CouchDB, Mongo, Redis
    * Files: CSV, Text, even JSON
    * Hadoop, Hive, Elastic Search 

## FDW 參考資料
* [Foreign_data_wrappers ](https://wiki.postgresql.org/wiki/Foreign_data_wrappers)
* [postgres-fdw](https://www.postgresql.org/docs/10/postgres-fdw.html)

## Foreign Data Wrappers 設定步驟
* 以 PostgreSQL 10 為例
* role totem 自 totem DB 連線到 insect DB 為例

1. 需安裝 __postgresql10-contrib__ 套件。  
2. 設定連線驗証方式 pg_hba.conf
3. 安裝 postgres_fdw Extension 擴充功能
4. 設定 Foreign Server
5. 設定 User Mapping: 當前 Role 與遠端 DB role 建立關聯。
6. Local 設定 Foreign Table 代理人
7. Grant Authority of Foreign Table to Role
8. 查詢 Foreign Server / Foreign Fable
9. Local 查詢遠端資料使用範例  
10. 其他


## 安裝 __postgresql10-contrib__ 套件。  

```shellscript
# 列出已安裝的 postgresql 套件
$ yum list installed | grep postgresql
 
# 安裝 contrib 套件
$ yum install postgresql10-contrib
```


## pg_hba.conf 設定連線驗証方式
* 預設驗証方式為 trust (只能讓 role postgres 使用 FDW)
* trust 改 md5 做為連線驗証方式

pg_hba.conf 設定範例:

```bash
# TYPE  DATABASE        USER            ADDRESS                 METHOD
 
# IPv4 local connections:
host     all             all             127.0.0.1/32             md5
# IPv6 local connections:
#host    all             all             ::1/128                  md5
host     all             all         192.168.X.0 255.255.255.0    md5
```

## 安裝 postgres_fdw Extension
* 以 postgres 權限 在 totem DB 進行 extension 安裝
* 並授權給指定 Role totem 使用

```sql
--login
psql -U postgres
 
--connection to totem
\c totem
 
--install fdw
CREATE EXTENSION postgres_fdw;
 
--讓 role totem 可以執行 FDW
GRANT USAGE ON FOREIGN DATA WRAPPER postgres_fdw to totem;
```

## 設定 Foreign Server
* 在 totem DB 建立遠端 DB 代理 server (此處命名為 foreign_insect_server)
* 可依需要設為 read only / use_remote_estimate(統計)

```sql
--by role totem on database totem
CREATE SERVER foreign_insect_server
        FOREIGN DATA WRAPPER postgres_fdw
        OPTIONS (host '192.168.XX.XXX', port '5432', dbname 'insect');
 
--on database totem set read only
ALTER SERVER foreign_insect_server OPTIONS (ADD updatable 'false');
 
--在 local 端紀錄 remote table 的統計值, 大型 query 會需要
ALTER SERVER foreign_insect_server OPTIONS (ADD use_remote_estimate 'true');
```


## 設定 User Mapping
* 當前 Role 與遠端 DB role 建立關聯。
  * => local role totem 與 remote role insect 建關聯

``` sql
--user mapping
CREATE USER MAPPING FOR totem
        SERVER foreign_insect_server
        OPTIONS (user 'insect', password 'pwOfInsect');
```


## Local 設定 Foreign Table
* 在本地端(totem DB)建立與遠端(insect DB) table / view 相襯的資料表
* 欄位的 data type 應配合遠端設定
* 可依需要為欄位單獨設為唯讀
    * local table name insect_category_substitute:  
    * remote table name : insect_classicfication_category

```sql
    --create insect_category_substitute
    --constraints are not supported
    CREATE FOREIGN TABLE insect_category_substitute (
        "class_name" text,
        "order_name" text,
        "family_name" text,
        "genus_name" text
    )
            SERVER foreign_insect_server
            OPTIONS (schema_name 'public', table_name 'insect_classicfication_category',
                updatable 'false', use_remote_estimate 'true'); 
                --設定為 read only / use_remote_estimate
```

## Grant Authority of Foreign Table to Role
* 將 select insect_category_substitute 的權限給予 totem

```sql
 grant select on insect_category_substitute to totem;
```

## 查詢 foreign server / foreign table
* pgAdmin 下只會顯示 foreign server，table / view 細節要下 sql 得知

```sql
--foreign server / table
select * from pg_foreign_data_wrapper;
 
SELECT * FROM pg_foreign_server;
 
SELECT * FROM pg_foreign_table;
```


## Local 查詢遠端資料使用範例 

```sql
select * from species sp 
       left join insect_category_substitute cat
       on sp.genus_name = cat.genus_name;
```


## 其他
* 持續整合測試時重建資料庫 vs FDW 權限設定問題

     * 讓 totem 有 superuser 權限
     
```sql
alter role totem superuser;
```


    * template1 安裝 postgres_fdw
    
```sql
psql -U postgres -d template1

CREATE EXTENSION postgres_fdw;

--讓 role totem 可以執行
GRANT USAGE ON FOREIGN DATA WRAPPER postgres_fdw to totem;

--CI 重建 database 時, 預設就是 template1, 不需指定
CREATE DATABASE totem WITH ENCODING='UTF8' OWNER=totem

--TEMPLATE=template0 
TABLESPACE=totem;

```