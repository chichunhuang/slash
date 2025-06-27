---
title: PostgreSQL string_agg 函式
description: PostgreSQL 合併多筆 Records 的同欄位值
keywords: [postgresql,string_agg]
---

>  string_agg 函式的功用: 合併多個 records 的同一 column 值


# PostgreSQL string_agg() 合併多筆 Records 的同欄位值
* 批次合併 group by 後,每單一組內資料。
* 呈現 group by 結果的集合資訊。  

> 查詢時若有使用 group by 語法時會依指定條件將查出的資料做分組  
> 而同一組中分組條件外其他欄位，若想顯示時可以利用 string_agg (欄位名, 串接符號) 來取得 

> 使用情境:  
> 例如有一個 Book table，book FK 至 Author table  
> 今天想列出 每一位作者所著的書名時，可採用 string_agg 方法，來將不同 book records 的書名整在一起。    

Book table

|     Name    |ISBN     |Author_ID  |
|-------------|---------|-----------|
|  小金魚逃走了   |1234     |1          |
|  我的朋友      |2234     |1          |
|  瑪蒂達       |3234     |2          |
|鱷魚怕怕、牙醫怕怕 |4234     |1          |

Author table

|     ID    |Author   |  Pen_Name |
|-----------|---------|---------|
|     1     |五味太郎   | 太郎   |
|     2     |羅爾德·達爾 | 羅德達爾   |


# string_agg 相關參數
* string_agg():  
* expression : 被組合的 column。expression 所以可以給予進一步變化。
    * ex: a.author || '-' || a.pen_name
* separator : 
* order by : 這邊指的是 aggregated items 組合時的排序。下方例子便是依據書名排序後組合成一個欄位。

syntax: <span style={{color: '#0044FF'}}>注意!!</span> separator [order_by_clause] 之間 __沒有__ 逗號

> STRING_AGG ( expression, separator [order_by_clause] )


範例:   

```sql
select b.Author_ID, a.author, 
       string_agg(name, ',' order by name desc ) as book_names, 
       from Book b 
         left join Author a
           on b.Author_ID = a.id
       group by a.author, b.Author_ID;
```

| Author_ID |Author  |  book_names |
|-----------|--------|-------------|
|     1     |五味太郎   |鱷魚怕怕、牙醫怕怕,我的朋友,小金魚逃走了|
|     2     |羅爾德 達爾 |瑪蒂達        |




# string_agg expression 參數範例

* 包含取 JSONB values

```sql
  string_agg(jsonb_column->>'key_name', ',') as alias_name  
    
  select patient  
     string_agg(ecd->>'inpatient_date', ',') as ip_dates  
     from clinical_record
     group by patient;
```

* 欄位先合併再串接

```sql
    string_agg(a.first_name || ' ' || a.last_name, ',' ) as full_names, 
```