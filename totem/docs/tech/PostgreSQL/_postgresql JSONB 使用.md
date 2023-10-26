




官方介紹:
https://www.postgresql.org/docs/9.5/static/functions-json.html

 

Functions : 
JSONB column 要先有空JSON物件( '{}' ) 才能 set 值

INSERT INTO cdls_data (subject_code, date, clean_data)
                VALUES ('XYZ', '20170327', '{}');
 

jsonb_pretty(data)
查詢出的結果會自動縮排

 

jsonb_set( template, path, value )
置入物件(取代既有資料), Replacement
-- B 下面無論內容為何，以指定物件取代
UPDATE test SET data = jsonb_set( data, '{B}', '{"C":"ccc"}' );
物件中插入新 field
     -- B 物件下增加 D field
    UPDATE test SET data = jsonb_set( data, '{B, D}', '"ddd"' );


查詢用語法(JSON, JSONB)
->> : 以 String 方式查出 JSON 物件 field 內容
select address->>'country' FROM profile;
 

-> : JSON 查詢，所得為 postgresql JSON 物件，可以 -> 繼續往內查。最終再以 ->> 取值。
-- 列出 order 以下的學名資料
select s_name->'kingdom'->'phylum'->'class'->>'order' from animal
 

#>> : -> 的語法糖
可指定 path
若 JSON object 是 array 物件，可以嵌入 array 的 index (zero-based)
     -- 列出 order 以下的學名資料
    select s_name#> '{kingdom,phylum,class,order}' from animal
#> : 與 #>> 類似，但僅限於使用 path, 無法使用 array 的 index
  


查詢用語法(JSONB only)
@> : 左值的 JSON objects 中第一層是否有右值為條件的 查詢結果
列舉 and 所有條件
可以想成是 JSONB colum 的 where 條件。@> 左側放 json cloumn，右側放查詢條件(也是一個 JSON 物件)。
可以是 and 條件 : 但必須是不同 fields
同一個 field 不可以重複給予，後令修前令。只會以較晚指定為準。
 

select * from animal where s_name @> '{ "kingdom": { "phylumn":"chordata" } }';
 
//可以 and 多個查詢條件
select * from person where profile @> '{ "gender": "male", "age": "20"}';
 

<@ : 與 @> 類似，但 <@ 是查詢左側是否為右側的子集(查詢)
若有條件 filed，則必須符合。若無，則忽略此條件。
 

? : 指定 key 是否存在，一次只能給予一個條件。
select '{"a":[1,2,3],"b":[4,5,6]}'::jsonb ? 'b'
-- result : t
 

?| : 指定 keys 是否則一存在，條件則一符合。
-- 左側 jsonb object，是否有 b or x field.
select '{"a":1, "b":2, "c":3}'::jsonb ?| array['b', 'x']
--  , b x 則一符合, result : t
 

?& : 指定 keys 是否全部存在，條件需全部符合。
select '{"a":1, "b":2, "c":3}'::jsonb ?& array['b', 'c']
-- b, c 都有
 



|| : 
- : 
#- : 
&> :






JSONB 欄位中 field 的  Index
JSONB index 種類

json_ops (default): 每個 key-value 都建立 index，較耗空間
jsonb_path_ops (hash table index)
GIN index

JSONB 接受 GIN index :  https://www.postgresql.org/docs/9.4/static/gin-intro.html