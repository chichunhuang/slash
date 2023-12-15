---
title: Using subqueries outside of WHERE
description: 在 sql from 中使用子查詢 
keywords: [Nested select,subquery]
---

# Using Subqueries outside of Where

> 相信很多人已經在 where 條件中中使用過子查詢。  
> 例如: 在 in clause 中使用一個查詢句子來提供限制條件。  
> 這邊要演示的是在 from 中使用子查詢。  
> 並且回復一個新的表格結構給前方的 select 使用。  

> 此種情境在使用 subquery 時，subquery 通常會搭配 group by 之類的句子。  
> 並回傳一個 meta table。也就是一個結構與分群與簡單查詢不同的資料結構。  

* 舉例情境:
    * 查出不同年齡層每日平均使用手機的平均時間。
    * 查出每班級個科目考試的最高分數。

* 注意下列範例中: from clause 必須給個別名，下方例子為 tmp

```sql
SELECT  max_score, class , subject
  FROM 
 (
   select max(score) max_score, class , subject from annual_exam group by class , subject
 ) tmp
   ;
 ```


# 若子查詢中未造成資料結構改變
 無意義的動作。脫褲子放屁，子查詢本身就能達到目的了。可以算是一種誤用。

```sql
select * from (
    select 
       a.column_01, a.column_02, a.column_03,
       b.column_01, b.column_02, b.column_03 
       from table_a as a 
            left join table_b as b on 
            a.ref_b_fk = b.pk 
  ) t
```