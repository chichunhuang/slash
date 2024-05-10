---
title: Insert from Select
description: Insert from select result
keywords: [SQL,copy,insert from select]
---

# 串接查詢結果與新增資料
* 資料處理時或是匯入外部資料並與內部資料整合成一個 Table 時常會用到。通常會使用在 psql 之中。
* insert into 是用來 <span style={{color: '#FF1100'}}>copy data + insert</span> 到另一個 table。與 Select into 並不相同。

> insert  into  背後是每筆 record 依次 insert  
> 所以 nextval('seq_name') 可執行多次  
>
> select into 則僅會 select 一次，因此句子中出現的 function 僅會執行一次  
> 以上方例子說明 :   
> 當使用 select into 拷貝 table 時，若使用 nextval('seq_name') 則所有 record 的 seq 欄位值會相同。  


# SQL 將查詢結果餵給另一個 Table
```
INSERT INTO table2 (column1, column2, column3, ...)
    SELECT column1, column2, column3, ...
    FROM table1
WHERE condition;
```

# 將整個 Table 內容複製
* 注意需比較 insert into v.s. select into 差異 

```
INSERT INTO table2
    SELECT * FROM table1
WHERE condition;
```
