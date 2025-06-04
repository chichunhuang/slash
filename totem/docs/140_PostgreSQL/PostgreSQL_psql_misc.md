---
title: PostgresSQL psql 雜項指令
description: PostgresSQL psql misc
keywords: [PostgreSQL,psql]
---

> 與 psql 相關雜七雜八指令  
> 下述 postgres psql 指定，都有相似的 postgres sql 指令可達到。 
> 不確定其他 DB 是否有相似功能... 

## 列出指定 Table 的詳細資訊:<code>__\dt+__</code> 
* <code>__\dt+__</code> <span id="psql_dt_fun">&nbsp;</span>
    * <code>__\d__</code> : describe, display
    * <code>__t__</code> : table，僅列出 table 層級的資訊。
    * <code>__+__</code> : 顯示額外資訊，如 size、Description 等
* 可得到: Schema、Table Name、Type、Owner、Size、Description、Persistence 等。可能因版本而有差異。
    * Persistence: permanent / temporary / unlogged

__查單一 table 資訊__
* <code>__\dt+__</code>

```sql
    totem=> \dt+ tablename
```

## 列出指定 table 下 columns 的詳細資訊:<code>__\d+__</code> 
__查 table 下 columns 資訊__
* <code>__\d+__</code>: 省略 t 參數，則可顯示 columns 相關資訊。
    * 會列出所有 columns 型別屬性等
    * FK、index 等

```sql
    totem=> \d+ tablename
```

## 列出 schema 詳細資訊:<code>__\dt+__</code> 
__查整個 schema 中 table 層級資訊__

```sql
    totem=> \dt+ public.*
```

__查整個 schema 中所有資訊__
* 同樣略 t 參數，則會列出更詳細到 columns 的細節。
    * 包含: PK、FK、sequence、index 與 index 種類、Table relations 、

```sql
    totem=> \d+ public.*
```


## 列出 database 下所有 functions:<code>__\df__</code> 
* 指令與列出 table 資訊相似，將 t \(tables) 參數改成 f\(functions) 變成查 functions
* <code>__\df__</code>: 查詢 databas 下的自訂 functions
* ___\\df___ 相關指令與參數變化
    * 指令
        * <code>\df</code>: 列出自訂函式的基本資訊。
        * <code>\dfS</code>: 限定列出 ___系統___ 函式的基本資訊。
        * <code>\df+</code>: 列出自訂函式的詳細資訊。會列出 ___function 原始碼___。
        * <code>\df[a|n|t|w]</code>: 列出特定 types 類型且符合模式的函式。
        * <code>\ef [function_name]</code>: 顯示 function 原始碼，並允許編輯。
    * 參數
        * Pattern: <code>\df [pattern]</code>: 列出相似名稱的 functions。
        * Schema: <code>\df [schema_name].*</code>: 限定指定 schema 下 functions。
    * Types: 函式的類型
        * a: Aggregate functions
        * t: Trigger functions
        * w: Window functions
        * n: Normal functions (排除 atw 類)