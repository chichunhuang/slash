---
title: TableA 的內容修改 TableB
description: SQL Update from One Table to Another
keywords: [SQL,update]
---

> 將 Table A 的欄位資料 Set 到Table B  
> 因為 SQL 的 update 語法是不允許用 Alias  
> 所以註記批次更改時的重點  

* 重點摘要: 
    * 被改的 <span style={{color: '#0044FF'}}> __table 不可用別名__ </span>
    * 兩 table 資料筆數不同時，<span style={{color: '#FF1100'}}>__要注意資料被清空的情形__</span>  

## 情境
* 假設我們有以下兩個 Tables：
    * TARGET_TABLE:  
    * SOURCE_TABLE:  
    * __各有一筆資料無法 mapping__  

```sql

     -- target_table: 我們要更新的資料表
     CREATE TABLE TARGET_TABLE (
         id INT PRIMARY KEY,
         value_to_update VARCHAR(255),
         other_data VARCHAR(255)
     );
    
     -- source_table: 包含新資料的資料表
     CREATE TABLE SOURCE_TABLE (
         id INT PRIMARY KEY,
         new_value VARCHAR(255),
         some_other_info VARCHAR(255)
     );
    
     -- 範例資料
     INSERT INTO TARGET_TABLE (id, value_to_update, other_data) VALUES
         (1, 'Old Value 1', 'Target Data A'),
         (2, 'Old Value 2', 'Target Data B'),
         (3, 'Old Value 3', 'Target Data C'); -- Source 缺此資料
    
     INSERT INTO SOURCE_TABLE (id, new_value, some_other_info) VALUES
         (1, 'New Value for ID 1', 'Source Info X'),
         (2, 'New Value for ID 2', 'Source Info Y'),
         (4, 'New Value for ID 4', 'Source Info Z'); -- Target 無此資料

```

## update 批次更新指令: 有新值才 update
* 注意事項: 
    * 目的: <span style={{color: '#FF1100'}}>__只__</span> 將 Source 列出的內容更新到 Target Table。<code>__Target 查無對應新值則不動作__</code>。
    * <span style={{color: '#0044FF'}}> __TARGET_TABLE 被改的 table 不可用別名__ </span>，值接以 TableName 當 identifier  
    * Source 取值的片段不可出現 select 字眼
        * [<span style={{color: '#0044FF'}}> __set value 片段不可以加 select 關鍵字__ </span>](#update_to_null)
        * 若加上 select ，看似結果正常，實則當 Source vs Target 筆數不同時，會造成非預期的 Upldate \(資料 update 為  null)。

<pre>
-- Target 不可使用 alias/ Source 可用可不用
&nbsp;&nbsp;&nbsp;&nbsp;UPDATE <span style={{color: '#0044FF'}}> __TARGET_TABLE__ </span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SET value_to_update = <span style={{color: '#FF1100'}}>__SOURCE_TABLE__</span>.new_value
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FROM <span style={{color: '#FF1100'}}>__SOURCE_TABLE__</span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WHERE <span style={{color: '#0044FF'}}> __TARGET_TABLE__ </span>.id = <span style={{color: '#FF1100'}}>__SOURCE_TABLE__</span>.id;
<br/>
<br/>
    
-- Source 可採用 alias
&nbsp;&nbsp;&nbsp;&nbsp;UPDATE <span style={{color: '#0044FF'}}> __TARGET_TABLE__ </span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SET value_to_update = <span style={{color: '#FF1100'}}>__src__</span>.new_value
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FROM SOURCE_TABLE <span style={{color: '#FF1100'}}>__src__</span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WHERE <span style={{color: '#0044FF'}}> __TARGET_TABLE__ </span>.id = <span style={{color: '#FF1100'}}>__src__</span>.id;
<br/>
<br/>

-- 驗證更新結果
&nbsp;&nbsp;&nbsp;&nbsp;SELECT * FROM TARGET_TABLE;  
</pre>


##  <span style={{color: '#FF1100'}}>__小心相似語法__</span>: : 無新值清空 <span id="update_to_null">&nbsp;</span>
* 下面的範例 <code>__set value__</code> 片段多加 <code>__select__</code> 關鍵字，與上方範例作用完全不同。
* 此語法是，___Target 逐一查找 Source，若查無 Source 則當缺值更新 Target___。
    * 當 Source 中查無 Target 所要的 mapping record 後，仍會進行資料更新。也就是清除。

```sql 
-- 下面的 SQL --> 查無資料則以 null 更新
-- UPDATE target_table 
--      SET value_to_update = 
--          (select s.new_value FROM source_table s WHERE target_table.id = s.id) ; -- 查無資料則以 null 更新
```