---
title: Jsonb 內容的 where 查詢
description: Key value 是否存在於 Jsonb
keywords: [postgresql,Jsonb,condition]
---

> 紀錄能與 GIN index \(Generalized Inverted Index) 相互搭配使用的 查詢類 Operators。  
> 這幾個 operators 主要 <code>__用在 WHERE 子句__</code> 中，回傳結果都是 boolean。    
> 在 index 搭配下能達到更高的查詢效率。 

* 詞彙註解:
    * <span style={{backgroundColor: 'yellow'}}>頂層鍵\(top-level key)</span>: <span style={{color: '#0044FF'}}> __指的是 Json 物件中未槽串 \(nested) 的屬性鍵值。也就是第一層的 keys__ </span>。
<br/>

* Jsonb 查詢類 Operators: <span style={{color: '#0044FF'}}> **可以想成是 Jsonb 中的 where conditions** </span> 
    * <code>&nbsp;__@>__ </code>: 左側 Jsonb \(資料)是否包含右側 Jsonb \(條件)內容。
    * <code>&nbsp;__?|__ </code>: Jsonb Object 是否包含指定的 任一 keys \(String Array)。
    * <code>&nbsp;__?&__ </code>: Jsonb Object 是否包含指定的 全部 keys \(String Array)。
    * <span style={{color: '#996633'}}>___?___</span> : Jsonb Object 是否包含指定的 key \(單一條件, String)。直接使用 <code>__?&__</code> 替代即可。   
    * <span style={{color: '#996633'}}>___\<\@___</span> : 右側 Jsonb \(條件)是否包含左側 Jsonb \(資料)內容。與 <code>__@>__</code> 差異只是條件左右對調。


___Jsonb Where extensions___
    
|   operator                |   條件參數 \(右式)   |  說明 | 使用情境 |
|----------                 |  -------    | ---- |------- |
|  __\@\>__ | Json Object <br/>key-value pair <br/> '\{"k1": "v1", "k2": "v2"\}' | 右式資料是否存在於左式 | Jsonb 中的 where 子句 |
| __\?\|__ | Text Array <br/>TEXT\[\] <br/> '\["k1","k2"\]' | 右式鍵值是否 ___任一___ 存在於左式頂層鍵 | web form filter 缺值不考慮  |
| __\?\&__ | Text Array <br/>TEXT\[\] <br/> '\["k1","k2"\]' | 右式鍵值是否 ___全部___ 存在於左式頂層鍵 | DAO 考量傳入參數空值時必須為空 |

    
<br/>
    
    
* 範例情境: 四支手機的商品規格

```sql

    CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        attributes JSONB
    );
    
    -- 新增一些範例資料
    INSERT INTO products (name, attributes) VALUES
        ('iPhone 15 Pro', '{"brand": "Apple", "color": "天然鈦金屬", "storage": "256GB", "features": ["A17 Pro Chip", "USB-C"], "dimensions": {"height": 146.6, "width": 70.6}}'),
        ('Samsung Galaxy S24', '{"brand": "Samsung", "color": "紫色", "storage": "512GB", "features": ["Galaxy AI", "Snapdragon 8 Gen 3"], "has_sd_card_slot": false}'),
        ('Google Pixel 8', '{"brand": "Google", "color": "曜石黑", "storage": "128GB", "features": ["Google Tensor G3", "Magic Eraser"]}'),
        ('二手 iPhone 13', '{"brand": "Apple", "color": "藍色", "storage": "256GB", "condition": "used"}'),
        ('Sony Xperia 1 VII', '{"brand": "Sony",  "color": null}'),
        ('Asus Zenfone 11 ultra', '{"brand": "Asus",  "storage": "512GB"}');
```

## Jsonb k/v Pair 為條件進行 Row 查詢: <code>&nbsp;__@>__ </code>
* <code>&nbsp;__@>__ </code>: Contains KV pair，\(emoticon : look at right side)
* 概念就是用在 Jsonb 中的 where 子句。
* 若條件\(右式)出現重複的 keys，意即 field 重複給予。則後令修前令，只會以較晚指定為準。

```sql
    -- 查詢 Apple 256G 的手機 
    select name, attributes
        from products
        where attributes @> '{"brand": "Apple", "storage": "256GB"}';
    
    --> iPhone 15 Pro, 二手 iPhone 13    
```

## Jsonb 是否同時存在頂層鍵: <code>&nbsp;__?&__ </code>
* <code>&nbsp;__?&__ </code>: Contains All keys，\(emoticon : exists + and)
* 條件以 String Array 傳遞
* 概念就是用在 Jsonb 中的 exists、not exists 判斷。
* 使用情境: Service/DAO 參數，null 不忽略。。

```sql
    select name, attributes
        from products   
        where attributes ?& ARRAY['brand', 'color', 'storage'];
        
    -- 概念同上，在考量 Jsonb GIN index 最佳化調整，建議用 ?&
    select name, attributes
        from products
        where attributes ? 'brand' and attributes ? 'color' and attributes ? 'storage' ;      
```

## Jsonb 是否存在任一頂層鍵: <code>&nbsp;__?|__ </code>
* <code>&nbsp;__?|__ </code>: Contains Any keys，\(emoticon : exists + or)
* 條件也是以 String Array 傳遞
* 使用情境: 串接 Web Form 的查詢條件，null 視為忽略。

```sql
    select name, attributes
        from products   
        where attributes ?| ARRAY['dimensions', 'condition'];
        
    -- 概念同上，在考量 Jsonb GIN index 最佳化調整，建議用 ?|
    select name, attributes
        from products
        where attributes ? 'dimensions' or attributes ? 'condition' ;      
```

## Jsonb 是否存在頂層鍵: <code>&nbsp;__?__ </code>
* <code>&nbsp;__?__ </code>: 指定 <span style={{color: '#0044FF'}}> __top-level key__ </span> 是否存在。不考慮 value 狀態。
* 概念就是用在 Jsonb 中的 exists、not exists 判斷。
* 可用 <code>__?&__</code> 取代: 判斷同時存在多個 top-level keys。

```sql
    -- 逐筆(row) 檢查，將有指定 key 的 row 選出。
    -- Sony 有 color key，但未賦值會被選出。
    select name, attributes
        from products
        where attributes ? 'color'; 
    
    -- 等同於    
    select name, attributes
        from products
        where attributes ->> 'color' is not  null ; 
    
    -- 反向選擇需加 Not  
    select name, attributes
        from products
        where NOT (attributes ? 'color');
    -- 註: 檢查的是 key 
    -- 所以: Sony Xperia:  "color": null  有 key 所以不會被選出      
```




