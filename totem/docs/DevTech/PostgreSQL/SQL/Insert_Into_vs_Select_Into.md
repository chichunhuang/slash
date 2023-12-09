---
title: INSERT INTO VS SELECT INTO
description: Insert-Into 與 Select-Into 使用上差異
keywords: [SQL,copy,insert into,select into]
---

# INSERT-INTO 與 SELECT-INTO 使用上差異

> INSERT-INTO 與 SELECT-INTO 猛一看似乎都可以用來將資料表對考 <br/>
> 但實務上，卻有些差異。 <br/>
>  若要 __完整__ 複製還是選擇 select into 為佳。 <br/>

# INSERT INTO

>　insert into 是用來 __copy then insert__ 到另一個 table <br/>
> => 背後是每筆 record 依次 insert <br/>
> 所以 nextval('seq') 會執行多次  <br/>

```sql
INSERT INTO table2 (column1, column2, column3, ...)
	SELECT column1, column2, column3, ...
		FROM table1
		WHERE condition;
```

* 這邊在 insert 時可以使用 function 在 select 句子中，而相關 function 會 __依次__ 執行。
例如:

```sql
INSERT INTO APPLICATION_FORM (ID, APPLIER, ISSUE_DATE, TYPE) 
	SELECT nextval('seq_APPLICATION_FORM'), APPLIER, ISSUE_DATE, TYPE FROM tmp_APPLICATION_FORM
	WHERE 0=0;
```



# SELECT INTO

> Select into 可用來 copy table  <br/>
> => 背後是整個 table __單次性轉移__  <br/>
> 若 select 中使用 nextval('seq') 僅會執行一次  <br/>

``sql
SELECT column1, column2, column3, ...
	INTO newtable [IN externaldb]
	FROM oldtable
	WHERE condition;
```


* 須注意 select 出的是 column value, 不可使用 function (ex: nexval('seq_of_table_X'))，因為是單次執行，所以 function 只會執行一次。而造成所有 records 的值都相同。
