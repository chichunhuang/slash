在postgresql要使用sql查詢/寫入lob物件的話,分為server side和client side.

server side可以直接在sql中下達lo_export或lo_import,前提是在server本機上執行這樣的命令.

```
justitia=> \lo_import '/home/server/webapp-list.txt';

lo_import 150695
```

cliend side就必須透過psql執行:

查詢:

```
\lo_export 查出的OID 輸出檔案路徑
```

例如查出的OID為12345,輸出路徑為/var/tmp/output.pdf,則命令為:

```
\lo_export 12345 /var/tmp/output.pdf
```

寫入:

```
\lo_import client端檔案名
```

會傳回一個OID,用以更新資料即可.