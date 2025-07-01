---
title: PostgreSQL Jsonb 雜項紀錄
description: Jsonb 相關雜七雜八都記這
keywords: [postgresql,Jsonb]
---

## Jsonb CRUD 會這幾個基本就夠了 <span id="Jsonb_fundamental">&nbsp;</span>
* 寫在最前面: 基本上每個操作都有一個 ___operator___ 與一個相對應的 ___內建函數___ 可使用，但會下面這兩個已經可以大殺四方了。     
* [<code>__->__</code> + <code>__->>__</code> operator: 查詢內容](./Postgresql_find_value_by_Attr_of_JSONB_column)
* <code>__jsonb_set()__</code> 函數: [新增](./PostgreSQL_Update_JSONB_Column)、[修改](./PostgreSQL_Update_JSONB_Column)、與 [刪除](./PostgreSQL_Delete_attr) 萬用，且多版本支援
* 其他的就先當作是 PostgreSQL 提供的語法糖。

### <span style={{color: '#FF1100'}}>___Jsonb column 必學內容操作___</span>

|  CRUD       |  操作   |  範例  |
|----------| :---------:|--------|
| **insert** | <code>__jsonb_set()__</code> | update table SET jasonb_col = <br/>jsonb_set( jasonb_col, Array['path_element'], '\{  "k1": "v1"'\}'::jsonb );  |
| **update** | <code>__jsonb_set()__</code> | 同上範例 |
| **delete** | <code>__jsonb_set()__</code> | 同上範例但 value 改為 null, <code>__'null'::jsonb__</code> <br/>update table SET jasonb_col = <br/>jsonb_set( jasonb_col, Array['path_element'], 'null'::jsonb ); |
| **select** | <code>__->__</code>, <code>__->>__</code> | select jasonb_col -> 'attribute' ->> 'attribute' from table |


## PostgreSQL Json/Jsonb 差異
> PostgreSQL 內建 JSON/JSONB 型態的 Columns。  
> ___JSON___ :  
> 以文字儲存的 JSON 格式資料。
>  
> ___JSONB___ :  
> PostgreSQL 中的一種特殊欄位，儲存的是 JSON 型態但是 Compiled 過的 binary 資料。  
> 特性是，可以讓 PostgreSQL 經由 mata data __加速查詢__ 的速度。  
> 但反過來說，在 __儲存時較花時間__ ，因為要先轉 mata data 所以相對上會比較耗時。  
> 因此主要用在，少編輯但卻需要經常查詢的請境下。

## PostgreSQL Jsonb 雜項紀錄 <span id="jsonb_scenario">&nbsp;</span>
* 範例情境

> 假設有一個紀錄標本資訊 table ，其中以 json_data 用來記錄分類樹資料 \(界門綱目科屬種)。

```sql
    --table: insect_specimen
    create table insect_specimen (
      id serial primary key, 
      sample_id text, 
      collect_date timestamp without time zone, 
      commom_name character varying(100),
      classification jsonb -- 測試用的 jsonb column  
    );
    
    INSERT INTO public.insect_specimen(
                id, sample_id, collect_date, commom_name, classification)
        VALUES (nextVal('insect_specimen_id_seq'), 'A0000000001', '2025-11-20', '蟑螂',
                '{"Kingdom" : "Animalia", "Phylum" : "Arthropoda", "Class" : "Insecta","Superorder" : "Dictyoptera","Order" : "Blattodea"}');
                
    
    INSERT INTO public.insect_specimen(
                id, sample_id, collect_date, commom_name, classification)
        VALUES (nextVal('insect_specimen_id_seq'), 'A0000000002', '2025-11-22', '白線斑蚊',
                '{"Kingdom" : "Animalia","Phylum" : "Arthropoda","Class" : "Insecta","Order" : "Diptera","Family" : "Culicidae" }');  
    -- "Genus" : "Aedes"
    -- "Subgenus": "Stegomyia"
    -- "Species' : "albopictus"
```

## 關於 append 新值
* JSONB column 要先有 <code>__空 JSON 物件__</code>,如 '\{ &nbsp;\}'  才能 set 值
   * 若商業邏輯上 jsonb 欄位非初始便有資料則可先給予空值 <code>__'\{ &nbsp;\}'__</code>
   
```sql
    INSERT INTO public.insect_specimen(
                id, sample_id, collect_date, commom_name, 
                classification)
        VALUES (nextVal('insect_specimen_id_seq'), 'A0000000001', '2025-11-20', '蟑螂',
                '{}');
```

## 自動縮排 Jsonb 查詢結果 <code>__jsonb_pretty__</code>
* 以 <code>__jsonb_pretty(jsonb)__</code> 進行自動縮排，方便 ___人工閱讀___ 

```sql
    select jsonb_pretty(insect.classification) classification from insect_specimen insect where id = 1;
    
    ==== 查詢結果是無序的
    "{
        "Class": "Insecta",
        "Order": "Blattodea",
        "Phylum": "Arthropoda",
        "Kingdom": "Animalia",
        "Superorder": "Dictyoptera"
    }"    
```
 
## 取代既有資料 insert/update: <code>__jsonb_set__</code> <span id="jsonb_set">&nbsp;</span>
* PostgreSQL 10+ 可使用 <code>__jsonb_insert__</code> : 插入新值，不覆蓋。
* 置入並取代物件, Replacement\(取代既有資料)
    * arguments
        * 1st: jsob 欄位
        * 2nd: Array Path 路徑, <code>__Array['hierarchy', 'nested']__</code>。 <span style={{color: '#0044FF'}}> __找得到路徑才會 update__ </span>  
        * 3rd: Jsonb Content 新內容，<code>__需轉成 jsonb__</code> 格式。quote 用來告知是 String, <code>__::jsonb__</code> 用來告知轉成 jsonb 格式

__Syntax: jsonb_set__

```sql
    jsonb_set(
          target JSONB, path TEXT[], new_value JSONB[, create_if_missing BOOLEAN]
        ) -> JSONB
```

* 注意事項: 
    * Array Path : 
        * 語法: <code>__Array['hierarchy', 'nested']__</code>
        * 若 Path 查無標的 element，則不動作。但會有成功回應。
        * element 下全部結構，都會被新值 \(新 Jsonb Content 取代)
    * Jsonb Content : 
        * 格式須為 Jsonb format，內容後方需加 <code>__::jsonb__</code> 宣告。
        * Jsonb ___String format___ content 表示法: "new_value"::jsonb
        * Jsonb ___Object format___ content 表示法: " '\{  "key1": "value1", "key2": \{ "key2-2": "value2-2" \} \}'::jsonb

__範例__

```sql
    -- 指定路徑內容改為簡單字串 : String
    update insect_specimen 
        SET classification = jsonb_set( classification, Array['Genus'], '"Aedes"'::jsonb ) where id = 2; 

    -- 指定路徑內容改為 nested ccontent: Json object
    update insect_specimen SET classification = jsonb_set( 
        classification, 
        Array['Genus'], 
        '{  "name":"Aedes", 
            "Subgenus": { "name": "Stegomyia" }
         }'::jsonb 
        
        ) where id = 2; 
        
    -- 指定 nested 路徑: Array['parent', 'child', 'descendent'] 
    update insect_specimen 
        SET classification = 
            jsonb_set( 
              classification, 
              Array['Genus', 'Subgenus', 'name'], 
              '{ "value": "Stegomyia"}'::jsonb ) 
        where id = 2;  
        
    ====
    "{
        "Class": "Insecta",
        "Genus": {
            "name": "Aedes",
            "Subgenus": {
                "name": "Stegomyia"
            }
        },
        "Order": "Diptera",
        "Family": "Culicidae",
        "Phylum": "Arthropoda",
        "Kingdom": "Animalia",
        "Species": "albopictus"
    }"        
        
```

__變體: 路徑直接用 object 代替__
* Array Path 以物件轉換

__syntax__

```sql
-- 下列兩種 路徑寫法意思相同
    Array['parent', 'child', 'descendent'] 
    
    '{parent, child, descendent}'
```


__example__

```sql
   -- 單一階層
    update insect_specimen 
        SET classification = jsonb_set( classification, 
        '{Genus}', -- 等同於 Array['Genus']
        '"Aedes-2"'::jsonb ) where id = 2; 

   -- 三階階層
    update insect_specimen 
         SET classification = jsonb_set( classification, 
         '{Genus, Subgenus, name}', -- 等同於 Array['Genus', 'Subgenus', 'name']
         '{ "value": "Stegomyia-2" }'::jsonb ) where id = 2;  
```

## 列出所有頂層鍵: <code>__jsonb_object_keys()__</code> 
* 使用 <code>__jsonb_object_keys()__</code> 進行查詢
* 加上 DISTINCT 去重複

```sql
    --列出所有頂層鍵，單一 row
    select jsonb_object_keys(classification) as keys
        from insect_specimen where id = 1;

    --列出 Table 下 Jsonb 所有頂層鍵: 依 Row 查詢，不自動去重複
    select DISTINCT jsonb_object_keys(classification) as keys
        from insect_specimen;
```


## PostgreSQL Jsonb 相關 operators <span id="syntax_sugar">&nbsp;</span>
* [官方參考](https://www.postgresql.org/docs/9.5/functions-json.html)

| Operator | 功用 | Path Style/R Operand Type |
| :--: | :-- | :--|
| <code>__->__</code>  | Jsonb 槽串 <span style={{color: '#0044FF'}}> __路徑連接符號__ </span> | 練續符號串接 Style Path |
| <code>__->>__</code>  | Jsonb 解析成 String | 練續符號串接 Style Path |
| <code>__#>__</code>  | Jsonb 槽串 <span style={{color: '#0044FF'}}> __路徑連接符號__ </span> | Json Object Style path  |
| <code>__#>>__</code>  | Jsonb 解析成 String | Json Object Style path |
| <code>__-__</code>  | 指定頂層結構進行刪除<br/>不可串接 | String |
| <code>__#-__</code>  | 指定路徑進行刪除 | Json Object Style path<br/> Text\[\] |
| <code>__?__</code>  | 指定字串是否存在於頂層鍵\(top-level key) | text   |
| ?\| | Text Array 中清單是否至少一個存在於頂層鍵  | Json Object Style path<br/> Text\[\] |
| <code>__?&__</code>  | Text Array 中所有清單是否都存在於頂層鍵 | Json Object Style path<br/> Text\[\] |
| \|\| | 串接 jsonb 在一起  | 回傳 jsonb  |

* 註: sharp operators 或 jsonb_set() function 在使用 <code>__Json Object Style path__</code> 時，下列兩種風格皆可採用

```json
    -- 標準寫法: 依據 key 的型別做相應字面量修飾
    '{"Genus", "Subgenus", "name", "value"}'
    '{"profile", "phones", 0}'
 
    --簡化版: 省略 key 型別修飾 
    '{Genus, Subgenus, name, value}'
    '{profile, phones, 0}'
    
```