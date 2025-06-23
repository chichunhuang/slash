---
title: JSONB 查詢 key 值
description: PostgreSQL 由 key 查 JSONB 欄位值
keywords: [JSONB,PostgreSQL]
---

> JSONB :  
> PostgreSQL 中的一種特殊欄位，儲存的是 JSON 型態但是 Compiled 過的 binary 資料。  
> 特性是，可以讓 PostgreSQL 經由 mata data __加速查詢__ 的速度。  
> 但反過來說，在 __儲存時較花時間__ ，因為要先轉 mata data 所以相對上會比較耗時。  
> 因此主要用在，少編輯但卻需要經常查詢的請境下。

# 查詢 JSONB 資料內容方式範例
* <code>__->>__</code>: 這語法回傳的是 value。已轉換為值，如 formatted String，回傳結果已經是 String，無法使用 jsonb 工具語法再往下探。  
* <code>__->__</code>: 此語法回傳的是 jsonb object，可以再往下查詢。
  
  Syntax:  
  
```sql
select column_a, 
       JSONB_COLUMN ->> 'ATTRIBUTE' as alias
       from TABLE_WITH_JSONB_COLUMN
       where clause;
```

  Example:  JSON 結構僅單一層
   
```sql
select student_id, 
       grade_no, class_no, 
       PERSONAL_DATA->>'DOB' as BIRTHDAY 
       from student  where grade_no = 1 and class_no in( 'A','B' );
```

   Example:  查出1年A班學生，歷次數學成績
   
```sql
select student_id, 
       string_agg(exam_score->>'MATH', ',') as Math_Scores  
       from student  where grade_no = 1 and class_no in('A')
       group by student_id;
```