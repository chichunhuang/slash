---
title: 合併 JSONB 資料
description: PostgreSQL JSONB 資料合併
keywords: [JSONB,Concatenate]
---

> PostgreSQL JSONB 操作中允許將兩個 Json 物件合併，  
> 預設是取得 keys 的聯集。  
> 合併時須注意:  
> &emsp; 1. 不會遞迴檢查，只檢查並合併頂層 keys。  
> &emsp; 2. 若遇到相同 keys 時，則採用最後方的內容。  
> &emsp; 3. 若被合併的 Json Objects 其中有任一頂層是 Array 的話，則會依序轉成 Array Elements，並合併成 Array。因為 Array 是有序資料，所以不會去重複。  


## 運算元 <code>__||__</code>
* 將多個 Jsonb Object 合併成一個。

### 語法
* 直接將多個 jsonb 以 <code>__||__</code> 連接。
* 遇到 Json Array, 則所有 Json Objects 一律轉成 Array Element，且不去重複。

```sql
    -- Concatenate Example
    select 
    '{ "name": "Totem", "email": "totem@example.com", "settings": { "theme": "dark" } }'::jsonb || 
    '{"nickname": "Insect Totem", "settings": {"theme": "light", "notifications": true}}'::jsonb
    
--> return 
    "{"name": "Totem", "email": "totem@example.com", "nickname": "Insect Totem", "settings": {"theme": "light", "notifications": true}}"

    -- Array Example
    select 
        '["0921-111-111","0922-222-222" ]'::jsonb ||  -- Array
        '"0955-555-555"'::jsonb ||  -- String 
        '{"phone":"0966-666-666"}'::jsonb || -- json object
        '"0955-555-555"'::jsonb   -- Duplicated
        
--> return 
     "["0921-111-111", "0922-222-222", "0955-555-555", {"phone": "0966-666-666"}, "0955-555-555"]"   
```

### 範例
* [範例情境](./PostgreSQL_Jsonb_misc#jsonb_scenario)

___example with update___

```sql
    update insect_specimen SET classification = jsonb_set( classification, Array['Locations'], 
        ((select  classification -> 'Locations'  from insect_specimen where id = 1) || 
        '["Taipei", "Taoyuan"]'::jsonb )
    ) where id = 1;  
```

__update 既有資料__
* 此範例優點 <code>__|| 運算子__</code> 來合併新的資料，而不需要先讀取整個 JSON。

```sql
{
  "name": "Totem",
  "email": "toem@example.com",
  "settings": {
    "theme": "dark"
  }
}

    UPDATE users
        SET profile = profile || '{"nickname": "Insect Totem", "settings": {"theme": "light", "notifications": true}}'::jsonb
        WHERE username = 'Totem';
```

