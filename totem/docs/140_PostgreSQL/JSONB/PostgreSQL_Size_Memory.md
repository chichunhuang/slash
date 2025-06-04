---
title: PostgreSQL Jsonb 硬碟占用空間
description: Jsonb 資料比數與記憶體占用計算
keywords: [postgresql,Jsonb,memory]
---

> PostgreSQL 9.4 版之後加入 jsonb 資料格式  
> 他的缺點是 <span style={{color: '#0044FF'}}> __所佔的空間較大__ </span>  
> 但是查詢比較有效率且也可建立 index 加速查詢  
> 另外，因為 jsonb 欄位本身特性是 <span style={{color: '#0044FF'}}> __不會限定 table 欄位個數__ </span>  
> 所以無法直接看出 jsonb 中欄位總數，  
> 須以指定語法查詢。 下面紀錄相關查詢方式


## 練習情境
* 假設有一個具 jsonb 欄位的 table 如下
* table 紀錄標本資訊，json_data 用來記錄分類樹資料。

```sql
    --table: insect_specimen
    create table insect_specimen (
      id serial primary key, sample_id text, json_data jsonb   
    );
```

## 查詢資料所站硬碟空間語法

### 資料表佔用空間
* <code>__pg_table_size__</code> 函式: 這個方法會回傳 table 所佔的硬碟空間，單位為 <code>__bytes__</code>
* pg_size_pretty : 轉換成人類可讀的格式。 KB/MB/GM 等 

```sql
    --query table size
    SELECT pg_size_pretty(pg_table_size('insect_specimen'));
```

__上述查詢也可在 psql 下查詢__

* <code>__\dt+__</code> 指令除佔用空間外也能查出其他 table 屬性 
    * <code>__\dt+__ tableName</code> 指令的意思
    * <code>__\d__</code> : describe
    * <code>__t__</code> : table，僅列出 table 層級的資訊。
    * <code>__+__</code> : 顯示額外資訊
    * [\df 指令參考](../PostgreSQL_psql_misc#psql_dt_fun)
* 註:
    * <code>__\d+__</code>: 省略 t 參數，則可顯示 columns 相關資訊。    
     
```sql
    totem=> \dt+ insect_specimen
```

__Result__
* 註: 架構模式 = schema 

```
 架構模式  |       名稱       | 型別   | 擁有者  |  大小   | 描述
----------+-----------------+-------+--------+---------+------
 public   | insect_specimen | table | totem  | 5659 MB |
 
```

### Jsonb 欄位佔用空間
* <code>__pg_column_size__</code> 函式 : 這個方法會回傳 Jsonb Column 所佔的硬碟空間
* 搭配 <code>__sum__</code>、<code>__avg__</code> 函式，可計算指定 Jsonb Column 所佔的總/平均硬碟空間 

```sql
    --query jsonb column total size / average size
    select
      pg_size_pretty( sum(pg_column_size(json_data)) ) as json_total_size, 
      pg_size_pretty( avg(pg_column_size(json_data)) ) as json_average_size
    from insect_specimen;
```

## 檢視 jsonb 資料內容 

### 取 json 物件格式
```sql
    select jsonb_pretty(json_data) from insect_specimen where id = 1;
--
{
   "kingdom":	"v1",
   "phylum":	"v2", 
   "class":	"v3", 
   "order":	"v4", 
   "family":	"v5", 
   "genus":	"v6", 
   "species":	"v7"
   ...
}
```

### table column 格式

```sql
    select t.key as Taxonomic_Ranks, t.value as Rank_Name
        from insect_specimen q, jsonb_each_text(json_data) t 
        where q.id = 1;
    
--

 Taxonomic_Ranks | Rank_Name
-----------------+--------
              k1 | "v1"
              k2 | "v2"
```

### 查詢 jsonb 欄位內的資料筆數
* 以 jsonb_object_keys() 列出 jsonb 內所有的 json key，然後去加總數量

```sql
    select a.sample_id, count(t)
        from insect_specimen a, jsonb_object_keys(a.json_data) t
            group by a.sample_id
            order by a.sample_id;
```

## Jsonb 取值: String or Object
* 注意
    * 運算符的差異。
    * 此處運算符是用在 <code>__select value__</code> 上。
* 查詢 Jsonb value 時，Postgres 回傳的種類。依據語法不同可能會是 <code>__String__</code> 或 <code>__Jsonb Object__</code>
    * <code>__#>__</code>、<code>__#>>__</code> : 是語法糖，後面接的 argument 是 ___階層路徑___
    * 基本上: 雙箭頭 <code>__>>__</code> 取的是內容值，單箭頭 <code>__>__</code> 取的是 jsonb object

```sql
    -- -> return jsonb 
    select json_data -> 'kingdom' as kingdom
        from insect_specimen where id = 1;
     
    -- #> return jsonb 
    select json_data #> '{"kingdom", "phylum"}' as phylum
        from insect_specimen where id = 1;
        
    -- ->> return text 
    select json_data ->> 'kingdom' as kingdom
        from insect_specimen where id = 1;

    -- #>> return text
    select json_data #>> '{"kingdom", "phylum"}' as phylum
        from insect_specimen where id = 1;
 
```


## index 與 Json Key 條件查詢關聯
* 注意
    * 運算符的差異。
    * 此處運算符是用在 <code>__where clause__</code> 上。
    * 不同種類運算符與 index 也有不同程度配合
    
```sql
    -- 用 '->' 查詢, 
    -- -> 效能: json key 分別產生常用的 b-tree index
    select * from insect_specimen
        where json_data -> 'kingdom' is not null
     
    -- 用 '?' 查詢, 選出 json_data 內容有 kingdom 這個 key 的資料列
    -- ? 效能:支援 gin index
    select * from insect_specimen
        where json_data ? 'kingdom'
     
    -- 用 '@>' 查詢, 
    -- @> 效能: 可以用 gin index
    select count(*) from insect_specimen
        where json_data @> '{"kingdom":"v1"}'
     
    --測試: 建立 gin index, 可用在 '?' 或 '@>' 查詢
    --CREATE INDEX indexName ON tableName USING GIN (columnName);
    CREATE INDEX idx_insect_specimen_gin ON insect_specimen USING GIN (json_data);
   
    --drop index idx_insect_specimen_gin;
    analyze insect_specimen;
    select * from pg_indexes where tablename = 'insect_specimen';
     
    select pg_size_pretty(pg_indexes_size('insect_specimen'));
```