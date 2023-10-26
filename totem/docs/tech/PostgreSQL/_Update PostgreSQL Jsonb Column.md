---
title: Update PostgreSQL Jsonb
description: A short description of this page
keywords: [PostgreSQL,Jsonb]
---


# 更新 PostgreSQL Jsonb 欄位資料
* 情境: Table 入學考試資料表

|  id(bigint)  |  Admission_Ticket(character)  |             raw_data(jsonb)        |
|      1       |           AAA001              |  {"City":"TPE", "School":"NTU" , "Score":"60"  }  |
|      2       |           BBB001              |  {"City":"TYN", "School":"NCHU", "Score":"70" }   |
|      3       |           CCC001              |  {"City":"HSZ", "School":"NITK", "Score":"80" }   |


## 更改 Jsonb 方式:
* 可以用 jsonb_set(), jsonb_insert() 做屬性值修改

### 查詢 Jsonb 屬性資料

<code>
select raw_data ->> 'School' as "School" from Entrance_Examination where Admission_Ticket = 'AAA001';
</code>


### 更改 Jsonb 屬性值藉由 jsonb_set()
<code>
update Entrance_Examination set raw_data = jsonb_set( raw_data, '{School}', '"NCHU"'::jsonb )
        where Admission_Ticket = 'AAA001';
</code>


### 補齊 Jsonb 屬性值長度
<code>
--補零, 轉換為 jsonb 做 update
update Entrance_Examination set raw_data = jsonb_set( raw_data, '{Score}', quote_ident(lpad(raw_data ->> 'Score', 4, '0'))::jsonb )
     where Admission_Ticket = 'AAA001';
</code>


### 批次更改 Jsonb 的內容
* [使用 "||", 可參考 ](https://stackoverflow.com/questions/40583639/update-multiple-values-in-a-jsonb-data-in-postgresql)


