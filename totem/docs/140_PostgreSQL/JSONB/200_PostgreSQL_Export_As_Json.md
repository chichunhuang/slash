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

## json_agg vs string_agg  <span id="json_agg">&nbsp;</span>
* [PostgreSQL string_agg 函式](./PostgreSQL_string_agg_function)




## json_agg\()<span id="json_agg">&nbsp;</span>
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

 
* <span style={{backgroundColor: '#ffffb3'}}>__json_agg function 傳入 table_name__</span>

```sql
```    
   特殊情境:
   select json_agg(product) from product
  上方 A, 單一 row 回傳的是 tuple，而 json_agg 會將結果 elements 組成 json array。
  ==> 每一個 element 會是 一個 tuple?
  轉匯過程會再將  tuple 小括弧 先轉成 json object 大括弧，再組成 json array。
   
3. 傳入 table name=> 這邊是特殊語法。

一維查詢, 只取單一 column 資料。並組合成 Array。

__情境A: Json Object__
將查詢結果收集成 Array。=> 與原先結果 i 轉置, ii 收到 Array
select json_agg(product_name) from product => horizontal
vs
select product_name from product => vertical

__情境B: group by__
group by 本身結果便是一個 elements set，=> set 裡面的 elements直接轉成 Json OBject 後收集成 Array. 

SELECT   category, json_agg(product_name) AS all_product_names
FROM product GROUP BY
    category
ORDER BY
    category;


將 sql 相關查詢結果，組合成一個 Array。查詢結果可以是二維的。
ex: 
以傳入 table name，則 row 的 all colunms 會先鋒裝成一個 Json object,
所有 rows 的結果再封裝成一個 Array
```
SELECT
    category,
    json_agg(product) AS products_in_category
FROM
    product
GROUP BY
    category
ORDER BY
    category;
``` 



## 將單一個 row 轉 Json: row_to_json
* 以 column 為 key, 把整個 row 轉成 json object
* 將一筆資料列 (row) 轉換成一個 JSON 物件 (object)。



SELECT
  json_agg(row_to_json(products))
FROM
  products;
### json_agg(column_name)
  
-- 列出指定 table 的 column names  
SELECT
  column_name
FROM
  information_schema.columns
WHERE
  table_name = 'your_table_name';  

    select
      column_name,
      data_type,
      ordinal_position
    from
      information_schema.columns
    where
      table_schema = 'public'
      and table_name = 'table_name'
    order by
      ordinal_position;  
  


table_schema = 'public': 明確指定綱要，避免混淆。請將 'public' 換成您的綱要名稱。

data_type: 同時查詢出每個欄位的資料類型。

ordinal_position: 欄位在資料表中的原始順序。

ORDER BY ordinal_position: 確保列出的欄位順序與資料表定義的順序一致。



## json_build_object 
* syntax: 將傳入的 args 依序轉成 key, value pairs, 並整到同一個 Json Object 之中。
* 奇數位會轉成 key, 必須是 string 格式。
* 與 row_to_json 類似, 但自訂 JSON 結構 並 自訂鍵名

使用場景，


```
    select
      column_name,
      data_type,
      ordinal_position
    from
      information_schema.columns
    where
      table_schema = 'public'
      and table_name = 'table_name'
    order by
      ordinal_position;
```

```
SELECT
  json_agg(
    json_build_object(
      'id', product_id,
      'name', product_name,
      'price', price
    )
  )
FROM
  product
WHERE
  category = 'Electronics';
  ```


## 查詢並將 RMDB 關聯結果轉成 巢狀 JSON (Nested JSON)




```
SELECT
  json_agg(
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
  )
FROM
  product AS p
LEFT JOIN
  users AS u ON p.owner_id = u.id;
  ```
  
  
## 關於自訂 key 與 json_build_object 給予預設直
* 採用 COALESCE(column_name, 'default') 進行處理


select json_build_object( product_name, category, price, COALESCE(owner_id, 0)) from product
 
 
 
## Java  Google Gson 搭配

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