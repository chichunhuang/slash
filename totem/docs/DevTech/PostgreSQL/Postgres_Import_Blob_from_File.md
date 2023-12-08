---
title: PostgreSQL 上傳 Blob 檔案
description: Postgres Import Blob from File
keywords: [Postgres,Lob,Import]
---

# PostgreSQL 上傳 Blob 檔案
> 分為兩類執行方式
>> 在 DB server 端執行
>> 在 Client 端 psql 執行
* * [參考 PostgreSQL 匯出 Blob 欄位至檔案](/Postgres_Export_Blob_to_File)


# PostgreSQL server side 執行檔案上傳方式
* server side 可以 __直接在 sql 中__ 下達 lo_export 或 lo_import functions 指令
* 直接使用 lo_import function 上傳檔案
* postgres 會回傳 OID 

```sql
totem=> \lo_import '/home/server/uploading_file.txt';

ret:
lo_import 123456
```

# PostgreSQL Client side psql 執行檔案上傳方式

* 新檔上傳方式:

```sql
\lo_import '/home/server/uploading_file.txt'

ret:
lo_import 123456
```

* 檔案下載方式

```
\lo_export 123456 /var/tmp/output_file_to.txt


SELECT lo_export(file_content_column, '/tmp/Export_File_To.csv') FROM table_name where t_pk = 719;
```
