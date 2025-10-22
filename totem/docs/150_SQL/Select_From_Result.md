---
title: 派生表使用情境 由查詢結果再次過濾
description: select from derived table 
keywords: [SQL,select from select]
---

> 先說明使用 Derived table \(派生表) 的優點與好處  
> 首先:  
> &nbsp;&nbsp;&nbsp; Derived table 讓我們可以在單一查詢中 <span style={{color: '#0044FF'}}>__重塑資料結構__</span>  
> &nbsp;&nbsp;&nbsp; 換句話說可建立出一個 暫時 的 table 或 view 供此次使用    
> &nbsp;&nbsp;&nbsp; 讓 <span style={{color: '#0044FF'}}>__思考邏輯分階段__</span>，每次處理一部分動作 ➢ 先整理資料、再篩選、運算。  
> 第二: 
> &nbsp;&nbsp;&nbsp; <span style={{color: '#0044FF'}}>__與 join 或 union 等複雜結構搭配使用__</span>    
> &nbsp;&nbsp;&nbsp; 有時候我們想 join 的不是 table，而是 某個計算結果  
> &nbsp;&nbsp;&nbsp; 此時 derived table 讓我們無需額外定義 view 或進行多段查詢


## 語法概念 
* 在單一查詢中建立暫存表 temporary table，或是進行資料整理後。再供後續使用。 
* Derived table <span style={{color: '#0044FF'}}>__alias__</span> 不可省略，不然可能會出錯。

```sql
    SELECT * 
        FROM (TEMPORARY_TABLE) AS derived;
        
    SELECT * FROM (
        SELECT column1, column2
            FROM some_table
            WHERE condition
    ) AS derived;
```

## 重塑資料結構
* 範例: 一\(學生)對多\(考試成績)的情形下，想取出多方的群體特性\(平均分、最高分、總分)時。
    1. 例如: 欲取得每位同學平均考試成績。
    1. 將學生姓名與考試關聯在一起，

```sql

    -- 邏輯拆解: Derived 先進行資料重組，事後再做過濾
    SELECT derived.department
        FROM (
            SELECT department, COUNT(*) AS dept_count
            FROM employees
            GROUP BY department
        ) AS derived
    WHERE dept_count.dept_count > 5;

    -- 邏輯拆解: Derived 先進行資料重組，事後再做過濾
    select s.FULLNAME, e.avg from (
        select STUDENT_ID , avg(SCORE) from  EXAM 
           group by STUDENT_ID 
        ) e
    left join STUDENT s on s.STUDENT_ID = e.STUDENT_ID 
        where e.avg < 60;
    
    -- 比較: 未將邏輯拆解，同時思考分組與過濾語法
    select s.FULLNAME, avg(e.score) from 
        STUDENT s join EXAM p on s.STUDENT_ID = e.STUDENT_ID 
        group by c.FULLNAME 
        having avg(e.score) < 60;    
```

## 內嵌於 JOIN 或 UNION 等複雜結構中
* JOIN 或 UNION 一個整理過的資料集

```sql
    SELECT e.name, s.avg_salary
        FROM employees e
            JOIN (
                SELECT department, AVG(salary) AS avg_salary
                FROM employees
                GROUP BY department
           ) AS s
        ON e.department = s.department;
```


## 逐步確認資料狀態
* 逐步增加過濾條件

```sql
SELECT d.height, d.weight, d.BMI
  FROM (SELECT height, wieght, (weight / SQUARE(height)) AS BMI
          FROM Students WHERE BMI > 23) d
WHERE d.height > (SELECT AVG(d.height)
                   FROM Students);
```

## derived table 常見使用情境
* 多表格合併後進行二次篩選或查詢
* 先將複雜資料分組整理後再做細節篩選
* 一對多情形下，搭配聚合函數將資料分組後，再合併呈現。
* 逐步確認資料狀態，由查詢結果再次過濾