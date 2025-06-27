---
title: 刪除 JSONB 資料
description: PostgreSQL JSONB 欄位鍵值刪除
keywords: [JSONB,PostgreSQL]
---

<div style={{backgroundColor: '#ffffb3'}}>
__[jsonb_set()](./PostgreSQL_Jsonb_misc#Jsonb_fundamental) 可用在，新增、修改、刪除__   
最簡單的資料移除方式為，直接將資料設為 null 或空字串。
</div>

<br/>
> 同樣的 PostgreSQL Jsonb 操作都可有兩種以上選擇，  
> &emsp; 1.使用操作子: <code>__#-__</code>   
> &emsp; 2.使用函數處理: <code>__jsonb_set\()__</code>     
> <code>__#-__</code> 操作子可用來移除 Json 屬性值或移除整個 key-value pair  
> 若僅要移除 value 不移除 key 也可使用 [jsonb_set](./PostgreSQL_Update_JSONB_Column) function  

* 建議選用 <code>__jsonb_set\()__</code>，[因為較通用](./PostgreSQL_Jsonb_misc#Jsonb_fundamental)減少腦子負擔。  

## Jsonb 屬性刪除操作子 <code>__#-__</code>

* [範例資料預設情境](./PostgreSQL_Jsonb_misc)
    * 假設有一個紀錄標本資訊 table ，其中以 json_data 用來記錄分類樹資料 \(界門綱目科屬種)

### 語法

* SET data = data <code>__#-__</code> ___Array\[ 'path_parent', 'child', 'descendent' \]___

```sql
-- Path 需使用 Array 創建 array 物件
    UPDATE your_table
        SET data = data #- Array['path_parent', 'child', 'descendent']
        WHERE condition;

-- 與 jsonb_set() 一樣，path 可以以大括號物件方式列出
    UPDATE your_table
        SET data = data #- '{path_parent, child, descendent}'
        WHERE condition;
```

### example : <code>__#-__</code>

```sql
    select (insect.classification) classification from insect_specimen insect where id = 2
    ===original
    "{"Class": "Insecta", "Genus": {"name": "Aedes", "Subgenus": {"name": {"value": "Stegomyia-2"}}}, "Order": "Diptera", "Family": "Culicidae", "Phylum": "Arthropoda", "Kingdom": "Animalia", "Species": "albopictus"}"
    
    update insect_specimen SET classification = classification #- array['Order'] where id = 2; 
    -- update insect_specimen SET classification = classification #- '{Order}' where id = 2; 
    ===
    "{"Class": "Insecta", "Genus": {"name": "Aedes", "Subgenus": {"name": {"value": "Stegomyia-2"}}}, "Family": "Culicidae", "Phylum": "Arthropoda", "Kingdom": "Animalia", "Species": "albopictus"}"
    
    -- 資料補回
    -- update insect_specimen SET classification = jsonb_set( classification, Array['Order'], '"Diptera"'::jsonb ) where id = 2;  
```

### example : <code>__jsonb_set__</code>
* [jsonb_set(raw, path, new_value)](./PostgreSQL_Update_JSONB_Column) function 
    * <code>__'null'::jsonb__</code>，null 外包的 single quote 代表的是語法中 arg 必須是字串。此例是 ___清除___ 內容。
    * <code>__'""'::jsonb__</code>，這個範例指的是將舊值以  ___空字串___ 取代。
    * <code>__'123'::jsonb__</code>，帶入數值

```sql
    update insect_specimen SET classification = jsonb_set(classification, array['Order'], 'null'::jsonb) where id = 2; 
```

### Jsonb 刪除資料語法變體: <code>__-__</code> 
* 看得懂就好，再多來記個同功能語法變體腦子就要炸了...
* <code>__#-__</code> 可以採用 path TEXT[], 但 <code>__-__</code> 只能指向單一層。
    * 官方文件說這兩個差別，一個 delete key/value pair, 另一個 delete field! 意思不是相同嗎? 
    * 測試結果: <code>__-__</code> 只能移除 <span style={{color: '#0044FF'}}> __頂層 jsonb 物件的次一層__ </span> 資料，所以此符號不像 <code>__->>__</code> 可串接前方路徑。

```sql
    -- '-' 只能用於頂層 jsonb 結構
    update insect_specimen SET classification = classification - 'Order' where id = 2; 
    
    -- '->>' 前方串接 '->'
    select  classification -> 'Genus' -> 'Subgenus' -> 'name' ->> 'value'  from insect_specimen where id = 3
```