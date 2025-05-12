---
title: PostgreSQL 匯出 Blob 欄位
description: Postgres Export Blob to File
keywords: [postgresql,Lob,Export]
---

* 其他參考資料
* [PostgreSQL 上傳 Blob 檔案](./Postgres_Import_Blob_from_File)
* [PostgreSQL Blob 備份與回存](./Backup_Restore_BLOB_in_Postgres)

# PostgreSQL 匯出 Blob 欄位至檔案

> PostgreSQL 與  Oracle 在存 Lob 資料時方法迥異。 <br/>
> Postgres 是將資料存在 lob table 中，資料表僅是建立相關 reference ， <br/>
> 所以若要匯出 Lob Object 內容的話，則必須借助 Postgres 的原生方法 __lo_export__

* function name: lo_export
* file_content : column name
* Submission_Case : table with file_content column

```
SELECT lo_export(file_content, '/tmp/Export_File_To.csv') FROM Submission_Case where id = 719;
```
# PostgreSQL 匯入 Lob 檔案至資料表
* [參考 Postgres 自 console 匯入指定資檔案至資料表](./Postgres_Import_Blob_from_File)