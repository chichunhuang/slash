---
title:PostgreSQL Blob 備份與回存
description: Backup and Restore BLOB in PostgreSQL
keywords: [postgres,lob,restore,backup]
---

# PostgreSQL Blob 備份與回存基本範例
## 匯出單一 lob 檔案至指定位置範例<span id="single-clause-export"></span>

```
by select clause
SELECT lo_export(index_file, '/tmp/download_file.csv') FROM table_with_lob_column

by LOID
psql -U doraemon -d doraemon -c '\lo_export given_oid /tmp/download_file.csv '

```

## 匯入單一檔案並取得 loid 範例<span id="single-clause-import"></span>
* 後續須再將 OID 指到對應 table column
```
psql -U doraemon -d doraemon -c '\lo_import /tmp/import_file.txt'

----
lo_import 123456
```


# PostgreSQL Blob 備份與回存(批次)

緣由: 
> Doraemon 專案的 Application_Form table 中有使用到 blob 欄位來存放上傳檔案。
> 在例行的資料庫備份過程中會執行 pg_dump -t 指定 table 備份
> 此時 blob 會被略過，因此需特別對該 table 與 blob 特別處理
> 相關步驟如下:

1. 備份 application_form table
    * 在 pg_dump 命令中加入 `-t application_form`
1. 匯出 application_form 使用到的 blob 的 lob object ID
1. 回存 application_form
1. 導入事先備份的 blob 並更新 application_form 的 loid (stands for: lob object id)


## 含 BLOB column 的 table 備份
```sql
pg_dump -t application_form
```


## 查詢 schema 專案下的 lob 範例
```
psql -U postgres -d doraemon -c 'select loid from pg_largeobject'
```


## 查詢 Doraemon 專案的 application_form table
```
psql -U postgres -d doraemon -c 'select id,file, file_name from application_form where file is not null order by id'

 id |   file   | file_name                

----+----------+----------------------------------------

  1 | 29990876 | application1.csv

  2 | 29990875 | application2.csv

  4 | 29990873 | application3.csv

```

## 匯出 table 的 lob object ID 範例
* 註(bash shell): eval is a built-in shell command used to evaluate and execute strings as a shell command.
* 將 pk, oid, filenmae 串接後組成[單一 BLOB 檔匯出句子](#single-clause-export)
* 組成 lo_export 句子以供匯出檔案用
* 將檔案匯出到 lob 資料夾之下(pk_filename.lob)

```bash shell
for i in `psql -U doraemon -t -S -c "select format('%s*%s*%s', id, file_name, file) from application_form where file is not null"`;

do

    eval $(echo $i | python3 -c "import sys; id,filename,lobid=sys.stdin.read().split('*'); print('psql -U doraemon -c \'\\lo_export %s /home/doraemon/download/lob/%s_%s.lob\''%(lobid.strip(), id.strip(), filename.strip()))");

done
```


## 匯入 table 的 lob object ID 範例
* 依序將檔案匯入並依序取得檔案的 LOID (lo_import 函數)
* 參考[單一 BLOB 檔匯入句子](#single-clause-import)
* 將 LOID 餵回新的 table record 之中

```bash shell
for f in `ls /home/doraemon/download/lob`;

do

    psql -U doraemon -d doraemon -c "\lo_import /home/doraemon/download/lob/$f" | python3 -c 'import sys;uid, _ = sys.argv[1].split("_", 1);print("update application_form set file = %s where id = %s" % (sys.stdin.read().replace("lo_import ", "").strip(), uid))' $f | psql -U doraemon ;

done
```


## 清除 doraemon 未使用的 lob 範例
* 使用 vacuumlo 指令

```
vacuumlo -U doraemon -v doraemon
```
