---
title: PostgreSQL varchar 長度
description: PostgreSQL varchar 欄位長度
keywords: [postgresql,vacuum]
---

## 查欄位定義的最大長度
* 利用 information_schema.columns 查詢藉 <span style={{color: '#0044FF'}}>__character_maximum_length__</span> 得知
欄位長度
    * 若 column 為 varchar 則顯示長度數值
    * 若為 text 或未指定長度的 varchar 則顯示 null

```sql
SELECT 
    column_name,
    data_type,
    character_maximum_length
    FROM information_schema.columns
    WHERE table_name = <TABLE_NAME> AND column_name = <COLUMN_NAME>;
```


## 查欄資料所使用的長度
* LENGTH\(): 可查詢 varchar 欄位使用的字元數
* OCTET_LENGTH\(): varchar 欄位使用的 byte 數
* 下面範例會分別列出所有 record 的結果

```sql
    SELECT 
        LENGTH(<COLUMN_NAME>),
        OCTET_LENGTH(<COLUMN_NAME>)
    FROM <TABLE_NAME>;
```

## 使用 psql 查詢

```sql
    \d <TABLE_NAME>
```
