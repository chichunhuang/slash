---
title: PostgreSQL 資料庫 index
description: PostgreSQL index
keywords: [postgresql,index]
---

> 簡單列出查詢與建立 index 的方法


## 查詢所有 index

__postgres__

```sql
    select a.schemaname, a.tablename, a.indexname, b.column_name
          from pg_catalog.pg_indexes a,
               information_schema.columns b
          where a.tablename  = b.table_name
           and a.schemaname = b.table_schema and a.schemaname = 'public'
           and (    a.indexdef like '%(' || b.column_name || '%'
                 or a.indexdef like '%, ' || b.column_name || '%'
                 or a.indexdef like '%("' || b.column_name || '%'
                 or a.indexdef like '%, "' || b.column_name || '%' )
         order by a.tablename, length(b.column_name);
```

__oracle__
* table_owner 依實際情況更

```sql
    select * from sys.all_ind_columns
     where table_owner = 'InsectTotem'
     order by index_name;
```


## 查詢沒 index 的 FK
* foreign key 沒做 index 時，通常 join 會變慢
* 但實際仍要看效能狀況決定是否須建立

__postgres__

```sql
    select fkeys.table_name,
           fkeys.constraint_name,
           fkeys.column_name,
           ind_cols.indexname
      from (
             select a.constraint_schema,
                    a.table_name,
                    a.constraint_name,
                    a.column_name
               from information_schema.key_column_usage a,
                    information_schema.referential_constraints b
              where a.constraint_name   = b.constraint_name
                and a.constraint_schema = b.constraint_schema
                and a.constraint_schema = 'public'
           ) fkeys
           left join
           ( select a.schemaname, a.tablename, a.indexname, b.column_name
               from pg_catalog.pg_indexes a,
                    information_schema.columns b
              where a.tablename  = b.table_name
                and a.schemaname = b.table_schema and a.schemaname = 'public'
                and (    a.indexdef like '%(' || b.column_name || '%'
                      or a.indexdef like '%, ' || b.column_name || '%'
                      or a.indexdef like '%("' || b.column_name || '%'
                      or a.indexdef like '%, "' || b.column_name || '%' )
           ) ind_cols on (     fkeys.constraint_schema = ind_cols.schemaname
                           and fkeys.table_name        = ind_cols.tablename
                           and fkeys.column_name       = ind_cols.column_name )
     
     -- 如果只想看未加上 index 的 FK，移除掉下面的 comment
     -- where ind_cols.indexname is null
```

__oracle__
* owner name 依實際情況更改

```sql
    select a.table_name,
           a.constraint_name,
           a.column_name,
           c.index_name
      from all_cons_columns a,
           all_constraints b,
           all_ind_columns c
     where a.owner           = 'InsectTotem'
       and b.constraint_type = 'R'
       and a.owner           = b.owner
       and a.table_name      = b.table_name
       and a.constraint_name = b.constraint_name
       and a.owner           = c.table_owner (+)
       and a.table_name      = c.table_name  (+)
       and a.column_name     = c.column_name (+)
     
     --如果只想看未加上 index 的 FK，移除掉下面的 comment
     --and c.index_name      is null
```

## 建立與刪除 index 語法
* index_mytable_mycol : index 名稱一般通用的格式，自行更換

```sql
-- 建立
    create index index_mytable_mycol on mytable(mycol);
    
-- 刪除
    drop index index_mytable_mycol;    
```