---
title: Title for search engines; can be different from the actual heading
description: A short description of this page
image: a thumbnail image to be shown in social media cards
keywords: [keywords, describing, the main topics]
---
## ref 
https://jira.ncgm.sinica.edu.tw/confluence/pages/viewpage.action?pageId=319665148


Foreign Data Wrappers (FDW)
PostgreSQL Extension, 需手動安裝
可以連結不同來源的資料
SQL Databases: Oracle, MySQL, ODBC, JDBC
NoSQL Databases: CouchDB, Mongo, Redis
Files: CSV, Text, even JSON
Hadoop, Hive, Elastic Search 
可進行 insert, delete 等操作, 也可設定為唯讀

* [Foreign_data_wrappers ](https://wiki.postgresql.org/wiki/Foreign_data_wrappers)

* [postgres-fdw](https://www.postgresql.org/docs/10/postgres-fdw.html)

## 設定步驟
* 檢查套件(Linux 平台 CentOS, Windows 平台預設已內建)
* 以 PostgreSQL 10 為例, 需安裝 postgresql10-contrib 套件
<code>
#列出已安裝的 postgresql 套件
yum list installed | grep postgresql
 
#安裝 contrib 套件
yum install postgresql10-contrib

</code>


* 檢查連線設定檔 pg_hba.conf 

  * 預設驗証方式為 "trust", 只能讓 role postgres 使用 fdw
  * 改以 "md5" 做為連線驗証方式

<code>
--pg_hba.conf

# TYPE  DATABASE        USER            ADDRESS                 METHOD
 
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
# IPv6 local connections:
#host    all             all             ::1/128                 md5
host    all             all         192.168.6.0 255.255.255.0    md5
</code>

## 安裝 extension
這次要連線的同樣是 PostgreSQL, 需要的 extension 已內建 (Linux 平台要記得安裝 package: postgresql10-contrib)
這裡以 postgres 權限進行安裝
<code>
--login
psql -U postgres
 
--connection to thor
\c thor
 
--install fdw
CREATE EXTENSION postgres_fdw;
 
--讓 role thor 可以執行
GRANT USAGE ON FOREIGN DATA WRAPPER postgres_fdw to thor;

</code>


## 設定 foreign server
這裡取名為 foreign_koopa_server, 可依需要設為 read only / use_remote_estimate
<code>

--by role thor on database thor(以開發機的DB為例)
CREATE SERVER foreign_koopa_server
        FOREIGN DATA WRAPPER postgres_fdw
        OPTIONS (host '192.168.6.129', port '5432', dbname 'koopa');
 
--set read only
ALTER SERVER foreign_koopa_server OPTIONS (ADD updatable 'false');
 
--在 local 端紀錄 remote table 的統計值, 大型 query 會需要
ALTER SERVER foreign_koopa_server OPTIONS (ADD use_remote_estimate 'true');

</code>


## 設定 user mapping
這裡設定給 role thor, 需要 koopa 的帳號/密碼
<code>
--user mapping

CREATE USER MAPPING FOR thor
        SERVER foreign_koopa_server
        OPTIONS (user 'koopa', password 'pwkoopa');

</code>


##設定 foreign table

這裡取名為 koopa_cgmh_checklist
對應到問卷系統的 cgmh_checklist  長庚對帳單 view 
欄位的 data type 配合遠端設定
可依需要單獨設為 read only
<code>
--koopa_cgmh_checklist

--constraints are not supported
CREATE FOREIGN TABLE koopa_cgmh_checklist (
    "sds_id" text,
    "WBC" text,
    "RBC" text,
    "Hemoglobin" text,
    "Hematocrit" text,
    "Platelets" text,
    "AFP" text,
    "HBsAg" text,
    "Anti-HBsAb" text,
    "Anti-HBcAb" text,
    "HBeAg" text,
    "MicroALB(U)" text,
    "Albumin" text,
    "T-Cholesterol" text,
    "BUN" text,
    "Triglyceride" text,
    "Glucose(AC)" text,
    "Hb-A1c" text,
    "Uric Acid" text,
    "Creatinine" text,
    "AST/GOT" text,
    "ALT/GPT" text,
    "Total Bilirubin" text,
    "γ-GT" text,
    "LDL-C" text,
    "HDL-C" text,
    "HCV Ab" text,
    "Anti-TPO" text,
    "T4" text,
    "Free-T4" text,
    "T3" text,
    "TSH" text
)
        SERVER foreign_koopa_server
        OPTIONS (schema_name 'public', table_name 'cgmh_checklist',
            updatable 'false', use_remote_estimate 'true'); --設定為 read only / use_remote_estimate

</code>


## 將select koopa_cgmh_checklist的權限給予thor

grant select on koopa_cgmh_checklist to thor;

<code>


</code>


## 查詢 foreign server / foreign table

在 pgAdmin 只會顯示 foreign server, table / view 要下 sql 查詢

<code>
--foreign server / table
select * from pg_foreign_data_wrapper;
 
SELECT * FROM pg_foreign_server;
 
SELECT * FROM pg_foreign_table;
</code>


## 使用範例 

<code>
select * from
(
select b.acquisition_no, a.upload_date, a.uplaod_user_fullname, a.status,
b.sds_create_date
from lab_data_confirm_record a
left join sample_data_sheet b on a.sample_data_sheet_id = b.id
where a.upload_date is not null
) q
left join koopa_cgmh_checklist c --foreign table(view)
on q.acquisition_no = c.sds_id

</code>




<code>
在 CI 每次重建資料庫, 需重新安裝 FDW 會遇到權限問題的解法:

--第1種解法 在 template1 安裝 postgres_fdw, 每次重建 database 自動安裝
psql -U postgres -d template1

CREATE EXTENSION postgres_fdw;

--讓 role thor 可以執行
GRANT USAGE ON FOREIGN DATA WRAPPER postgres_fdw to thor;

--CI 重建 database 時, 預設就是 template1, 不需指定

CREATE DATABASE thor WITH ENCODING='UTF8' OWNER=thor
--TEMPLATE=template0 
TABLESPACE=thor;



--第2種解法 讓 thor 有 superuser 權限
alter role thor superuser;



</code>




<code>


</code>



<code>


</code>



<code>


</code>



<code>


</code>



<code>


</code>

