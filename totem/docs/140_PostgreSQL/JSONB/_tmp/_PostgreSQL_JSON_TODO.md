
TODO 
改成 
_PostgreSQL_JSON_Insert
_PostgreSQL_JSON_Update
_PostgreSQL_JSON_Delate
_PostgreSQL_JSON_Query
_PostgreSQL_JSON_format

_PostgreSQL_JSON_FUNCTIONS


<hr/>
postgresql 中
假設一個 table student裡面有 columns
varchar s_name
jsonb address

jsonb 裡面會記錄如下資訊
{
city: "city1",
zip: 123
}

  __? 判斷是否有某個 key__

```
-- 是否有任一個 key：city 或 zip
SELECT * FROM student
WHERE address ?| array['city', 'zip'];

-- 是否同時擁有 city 和 zip
SELECT * FROM student
WHERE address ?& array['city', 'zip'];
```
<hr/>















<hr/>
ref PostgreSQL_Size_Memory;

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
<hr/>

