---
title: PostgreSQL Sequence 操作
description: PostgreSQL Sequence
keywords: [postgresql,sequence]
---

> 這邊的 Sequence 指令用於 PostgreSQL 

## 取得下一個 Sequence: <code>__nextval()__</code>
* <code>__nextval()__</code> : 取得下一個 Sequence，會造成指標向後順移

```sql
-- Syntax
    select nextval('seq_name');
    
-- Example
    insert into insect_specimen(id, ...) values( nextval('insect_specimen_id_seq'), ...);
```

## 重設 Sequence: <code>__select setval()__</code>
* <code>__select setval()__</code> : 可更改指標到指定序號
* init_value : 新的 Sequence 值
* is_called : init_value 是否被使用。預設為 true，即下次呼叫 nextval 時，由 init_value 的次一號碼開始提供。

```sql
-- Syntax
    select setval('seq_name' [, init_value[, is_called]]);
    
-- Example
    --default : is_called = true
    select setval('insect_specimen_id_seq', 0 ); 

    select setval('insect_specimen_id_seq', 10, false );
```

## 查當前 Sequence: <code>__select last_value from__</code>
* 取得當前 Sequence，指標不移動。有兩種方式:
    * 標準: <code>__select last_value from__</code>
        * seq_name 直接寫，不改成字串
    * <code>__select currval()__</code> 
        * 這邊僅取得當前 session 記錄中的 sequence。也就是此 session 曾查過或設定過的數值。
        * 若 session 中除無資料則拋出 ___currval of sequence 'seq_name' is not yet defined in this session___  


```sql
-- Syntax
    select last_value from seq_name;
    
    select currval('seq_name');

-- Example
    select last_value from insect_specimen_id_seq;
    
    select currval('insect_specimen_id_seq');
```

## Create Table 時順便建立 Sequence: <code>__serial__</code>
* 利用關鍵字 <code>__serial__</code> 可以在 DDL 中順便定義 sequence 欄位。Postgres 建立 Table 時也會一併建立 sequence。

```sql
    --table: insect_specimen
    create table insect_specimen (
      id serial primary key, sample_id text, location VARCHAR(255), taxonomic_rank jsonb   
    );
```