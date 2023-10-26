


* Groot的news table使用blob存放檔案,而執行pg_dump -t指定table備份時,blob會被忽略,所以正式機在每月的更新時都要特別對該table與blob特別處理.流程是



  * 備份news table,在pg_dump命令中加入 -t news.
  * 導出news使用到的blob
  * 回存news
  * 導入事先備份的blob並更新news的loid




查詢groot的lob
```
psql -U postgres -d groot -c 'select loid from pg_largeobject'
```


查詢groot的news table
```
psql -U postgres -d groot -c 'select id,file, file_name from news where file is not null order by id'

 id |   file   |               file_name                

----+----------+----------------------------------------

  1 | 29990876 | release_note_of_genodata_20210730.xlsx

  2 | 29990875 | 即將下架的GID清單.csv

  4 | 29990873 | tpmi015_invalid_sample.csv

  5 | 29990872 | 作廢的GID清單_148筆個案(tpmi015).csv

  6 | 29990871 | 個案基本資料異動清單(tpmi015).csv

  7 | 29990870 | 個案基本資料異動清單_tpmi016.csv

  9 | 29990877 | 個案基本資料異動清單_tpmi017.csv
```


導出
```
for i in `psql -U groot -t -S -c "select format('%s*%s*%s', id, file_name, file) from news where file is not null"`;

do

    eval $(echo $i | python3 -c "import sys;id,filename,lobid=sys.stdin.read().split('*');print('psql -U groot -c \'\\lo_export %s /home/ickxlin/download/lob/%s_%s.lob\''%(lobid.strip(), id.strip(), filename.strip()))");

done
```


導入
```
for f in `ls /home/ickxlin/download/lob`;

do

    psql -U groot -d groot -c "\lo_import /home/ickxlin/download/lob/$f" | python3 -c 'import sys;uid, _ = sys.argv[1].split("_", 1);print("update news set file = %s where id = %s" % (sys.stdin.read().replace("lo_import ", "").strip(), uid))' $f | psql -U groot ;

done
```


清除groot未使用的lob
```
vacuumlo -U groot -v groot
```


匯入單一檔案到groot
```
psql -U groot -d groot -c '\lo_import /home/ickxlin/download/replace_log4j.sh'

會傳回

lo_import 89032
```