---
title: 輸出 JSON 格式資料
description: PostgreSQL 輸出 Json 格式資料
keywords: [postgresql,Jsonb,condition]
---

> 這邊的操作是練習將 sql 的查詢結果做轉換，方便後續資料使用  
> 下面說明將 sql 結果轉成 json 結構以供其他目的或資料傳輸時使用  
> 範例採用 Postgresql 原生內建函數  
> 將過濾出來的資料轉成 Json Array

* 下面介紹幾個函數
    * [json_agg\(expression)、jsonb_agg\(expression)](#json_agg): 
        * 將指定的 json objects 收容成 Json Array
    * [row_to_json\(records, isPretty)](#row_to_json): 
        * 把 DB row data 轉成 Json format
    * [json_build_object\(varArgs)](#json_build_object): 
        * 將不定數的 keys、values 轉成 key-vaule pairs，並整到一個 Json Object 之中

## 版本限制
* PostgresQL 9.2 開始引入 Json 格式欄位  
* 此處練習須採 9.4+ 版提供的 <code>__json_build_object()__</code>、<code>__json_agg()__</code> 函式  
* [官方參考](https://www.postgresql.org/docs/9.5/functions-json.html)

___情境範例準備___

```sql
    create table users (
        id int primary key,
        name varchar(50)
    );
    
    create table products (
        product_id int primary key,
        product_name varchar(100),
        category varchar(50),
        price numeric(10, 2),
        owner_id int references users(id) -- users FK
    );
    
    -- 插入資料
    insert into user (id, name) values
        (1, 'Totem'),(2, 'Samy'),(3, 'Wennie'),(4, 'Zaza');
    
    insert into product (product_id, product_name, category, price, owner_id) values
        (101, '筆記型電腦', '電子產品', 35000.00, 1),
        (102, '滑鼠', '電子產品', 700.00, 1),
        (103, '咖啡豆', '食品', 550.00, 2),
        (104, '鍵盤', '電子產品', 2100.00, 1),
        (105, '小說', '書籍', 450.00, 2),
        (106, '耳機', '電子產品', 4800.00, null); -- with null
```


## json_agg\()<span id="json_agg">&nbsp;</span>:將資料收到陣列
* 將多筆資料(在這裡是多個 JSON 物件) 收容成一個 JSON 陣列 (array)
* aggregates values, including nulls, as a JSON array 
* 使用場景: 
    * <span style={{color: '#0044FF'}}> **資料轉置** </span>，縱向的 rows，轉成橫向的 Array。  
    * <span style={{color: '#0044FF'}}> **收集資料並傳換格式** </span>，供其他協定資料交換時使用。例如產生前端用的 payload json。

___json_agg\() syntax___
* 注意: json_agg 遇到 null 也處理，不忽略。
* 兩種情境\(argument expression):
    * arg: column_name
    * arg: tale_name

```sql
    -- syntax
    json_agg(expression)
    
    --return Array of Json Objects
    select json_agg(table_name) from table_name;
    
    --return Array of Json Strings
    select json_agg(column_name) from table_name;
```

### json_agg\(column_name) 函數
* <span style={{backgroundColor: '#ffffb3'}}>__json_agg function 傳入 single column name__</span>
    * 因每一個 row 只會有一個回傳值\(指定column), 此處僅會將所有 rows 回傳值直接收容成 array。 <span style={{color: '#0044FF'}}>**結果類似 sql 的轉置**</span> 。
* __傳入 single column name + sql group by 的分群__
    * 因每個回傳 row 可能有多個同群同欄位的 grouped 回傳 elements。
    * 同上，將特定 group 回傳值直接收容成 array。 結果類似 sql 的轉置。

```sql
    -- syntax
    select table_name from table_name;
    
    select product_name from products;
```
* 結果: 縱向
    | product_name <br/>char var(100)|
    |----|
    |"筆記型電腦"|
    |"滑鼠"     |
    |"咖啡豆"   |
    |"鍵盤"     |
    |"小說"     |
    |"耳機"     |


<br/>

```sql
    select json_agg(product_name) from products;
```
* 結果: <span style={{color: '#0044FF'}}>__橫向__</span>
    | json_agg <br/>json|
    |----|
    |["筆記型電腦", "滑鼠", "咖啡豆", "鍵盤", "小說", "耳機"]|


<br/>
```sql
    select category, json_agg(product_name) as all_product_names from products 
        group by category order by category;
```

* group by 回傳結果本身便是一個 elements set，單一 set 裡面的 elements 直接轉成 String 後收集成 Array。
* 結果: 再分組
    |  category <br/>char var\(50)| all_product_names  <br/>json|
    |  ---- | ---- |
    | 食品| ["咖啡豆"] |
    | 書籍| ["小說"]|
    | 電子產品| ["筆記型電腦", "滑鼠", "鍵盤", "耳機"]|
    

### json_agg\(table_name) 函數
__PostgreSql 特殊語法__
* 先說 postgresql 允許下面特殊語法: 
    * 以從資料表中選取 <code>__每一列__</code>，並將其轉換為 <code>__單一的複合型別 (Composite Type)__</code>。
    * 需注意的是，這句法回傳的是 tuple，且 <code>__中間未包含 keys__</code>。 
    
```sql
    -- syntax: postgresql 特殊語法
    select table_name from table_name;
    
    -- select * from users;
    select users from users;
```
* 結果: 將每一個 <code>__row 轉成 tuple__</code>，有別於 * 回傳多 columns 的 table。

| users <br/>users |
|----|  
|(1,Totem)|
|(2,Samy)|
|(3,Wennie)|
|(4,Zaza)|


__json_agg 與 select table 語法整合__
* <span style={{backgroundColor: '#ffffb3'}}>__json_agg function 傳入 table_name__</span>
    * PostgreSql 專用語法中以 table_name 查詢複合型別\(Composite Type) 的特性搭配 json_agg\()，可得到 ___Json Object 的 Array___。
    * 傳入 column_name 得到的則是 ___String 的 Array___。  

```sql
   -- syntax 整合語法
   select json_agg(table_name) from table_name;
   
   select json_agg(users) from users;
```
* 結果: 
* json_agg\(table_name): 
   * 單一 row 回傳的是 tuple，而 json_agg 會將結果 tuples 組成 json array。
   * 轉換過程會再將 ___tuple\(小括弧) 先轉成 json object \(大括弧)，再組成 json array___。

| json_agg <br/>json |
|----|  
|[\{"id":1,"name":"Totem"\}, \{"id":2,"name":"Samy"\}, \{"id":3,"name":"Wennie"\},\{"id":4,"name":"Zaza"\}]|


* 也可將 sql 相關查詢結果，分組再合成一個 Array。查詢結果可以是二維的。

```sql
    select
        category,
        json_agg(products) as products_in_category
    from
        products
    group by
        category
    order by
        category;
```

## row_to_json\()<span id="row_to_json">&nbsp;</span>:將資料列轉成 Json
* 將單一個 row 轉 Json: <code>__row_to_json__</code>
    * 將一筆資料列 \(row) 以 <code>__column 為 key__</code>，轉換成一個 JSON 物件 \(object)。

```sql
    select row_to_json(products) from products;
```

* 結果: row_to_json\() 與 json_agg\(table_name) 類似，但不會將資料收容到 Array 之中。

| row_to_json |
| ---- |
|\{"product_id":101,"product_name":"筆記型電腦","category":"電子產品","price":35000.00,"owner_id":1\}|
|\{"product_id":102,"product_name":"滑鼠","category":"電子產品","price":700.00,"owner_id":1\} |
|\{"product_id":103,"product_name":"咖啡豆","category":"食品","price":550.00,"owner_id":2\} |
|\{"product_id":104,"product_name":"鍵盤","category":"電子產品","price":2100.00,"owner_id":1\} |
|\{"product_id":105,"product_name":"小說","category":"書籍","price":450.00,"owner_id":2\} |
|\{"product_id":106,"product_name":"耳機","category":"電子產品","price":4800.00,"owner_id":null\} |
  
 



## json_build_object\()<span id="json_build_object">&nbsp;</span>: 指定欄位轉成 Json
* row_to_json\() 轉換時無法指定要匯出的欄位。 <code>__json_build_object()__</code>可補足這個缺點。
* 優點: 可自選欄位
* 缺點: 須先知道欄位名
* syntax: 將傳入的 args 依序轉成 key, value pairs, 並整到同一個 Json Object 之中。
    * ___奇數位會轉成 key, 必須是 string 格式___。
    * 與 row_to_json 類似, 但自訂 JSON 結構並自訂鍵名。

```sql
    select
        json_build_object(
          'id', product_id,
          'name', product_name,
          'price', price
        )
    from products;
  ```

* 結果:

| json_build_object<br/>json |
| ------ |
| \{"id" : 101, "name" : "筆記型電腦", "price" : 35000.00\} |
| \{"id" : 102, "name" : "滑鼠", "price" : 700.00\} |
| \{"id" : 103, "name" : "咖啡豆", "price" : 550.00\} |
| \{"id" : 104, "name" : "鍵盤", "price" : 2100.00\} |
| \{"id" : 105, "name" : "小說", "price" : 450.00\} |
| \{"id" : 106, "name" : "耳機", "price" : 4800.00\} |


## RMDB 關聯結果轉成巢狀 Json (Nested Json)
* <code>__json_build_object()__</code>的進階使用，來建立 Nested Json。
* 技巧: left join Tables，並於 <code>__json_build_object()__</code> value 位置向下層連續使用 <code>__json_build_object()__</code>。 

```sql
    select
        json_build_object(
          'product_id', p.product_id,
          'product_name', p.product_name,
          'category', p.category,
          'price', p.price,
          'owner', json_build_object(
            'id', u.id,
            'name', u.name
          )
        )
    from
      products as p
    left join
      users as u on p.owner_id = u.id;
```
* 結果: Nested Json

| json_build_object<br/>json |
| ------ |
| \{"product_id" : 101, "product_name" : "筆記型電腦", "category" : "電子產品", "price" : 35000.00, "owner" : \{"id" : 1, "name" : "Totem"\}\} |
| \{"product_id" : 102, "product_name" : "滑鼠", "category" : "電子產品", "price" : 700.00, "owner" : \{"id" : 1, "name" : "Totem"\}\} |
| \{"product_id" : 103, "product_name" : "咖啡豆", "category" : "食品", "price" : 550.00, "owner" : \{"id" : 2, "name" : "Samy"\}\} |
| \{"product_id" : 104, "product_name" : "鍵盤", "category" : "電子產品", "price" : 2100.00, "owner" : \{"id" : 1, "name" : "Totem"\}\} |
| \{"product_id" : 105, "product_name" : "小說", "category" : "書籍", "price" : 450.00, "owner" : \{"id" : 2, "name" : "Samy"\}\} |
| \{"product_id" : 106, "product_name" : "耳機", "category" : "電子產品", "price" : 4800.00, "owner" : \{"id" : null, "name" : null\}\} |

## 關於自訂 key 與 json_build_object 給予預設直

* 採用 <code>__COALESCE(column_name, 'default')__</code> 函數轉換處理，若查無資料則依據指定值為 default value。
    * 範例:將 id/name 分別給予數值 0  與空字串為預設值。

```sql
     select
            json_build_object(
              'product_id', p.product_id,
              'product_name', p.product_name,
              'category', p.category,
              'price', p.price,
              'owner',  json_build_object(
                'id', COALESCE(u.id, 0),
                'name', COALESCE(u.name, '')
              )
            )
        from
          products as p
        left join
          users as u on p.owner_id = u.id;
```
 
 
 
## 以 Java Google Gson 解析
* 下免簡單示範 Gson 的 <code>__fromJson()__</code> 提取 Json Object 內容方式。

```javascript
     private class JsonObj{
            private String key;
             
            private String value;
             
            public String getKey() {
                return key;
            }
            public void setKey(String key) {
                this.key = key;
            }
            public String getValue() {
                return value;
            }
            public void setValue(String value) {
                this.value = value;
            }
        }      
      
        /* parse by Gson */
        Type type = new TypeToken<JsonObj[]>() {}.getType();
        JsonObj[] jsonList = new Gson().fromJson(strArray[2], type);
        for (JsonObj obj : jsonList) {
            System.err.println(obj.getKey());
            System.err.println(obj.getValue());
        }
```
 
## 列出所有 Column Names
* 當想指定欄位將資料轉成 Json 的情境下，可能會需要先知道欄位有哪些。下面方法可以列出指定 Table 下所有欄位的名稱。

```sql
-- 列出指定 table 的 column names  
    select
      column_name,
          data_type,
          ordinal_position
        from
          information_schema.columns
        where
          table_schema = 'schema_name'
          and table_name = 'table_name'
        order by
          ordinal_position;  
```

    * table_schema = ex 'public': 明確指定 schema，避免混淆。依實際名稱更換。
    * data_type: 欄位的資料類型。
    * ordinal_position: 定義 Table 時 column 定義的原始順序。
    * ORDER BY ordinal_position: 讓列出的欄位順序與資料表定義的順序相同。


## json_agg vs string_agg  <span id="json_agg">&nbsp;</span>
* 與 [PostgreSQL string_agg 函式](../PostgreSQL_string_agg_function) 比較: 
    * <code>__json_agg__</code>: 將指定的 json objects 收容成 Json Array。
    * <code>__string_agg__</code>: 將指定的資料串接在一起，類似 Collectors.joining\();