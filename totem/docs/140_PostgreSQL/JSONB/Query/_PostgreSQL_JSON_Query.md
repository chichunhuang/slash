---
title: PostgreSQL find value in JSON Column
description: PostgreSQL JSON 內容查詢
keywords: [JSONB,Query,PostgreSQL]
---

# PostgreSQL JSON 內容查詢

* 此單元主要介紹 PostgreSQL 中查詢 JSON/JSONB 內容的方式。  

> PostgreSQL 內建 JSON/JSONB 型態的 Columns。  
> JSON :  
> 以文字儲存的 JSON 格式資料。
>  
> JSONB :  
> PostgreSQL 中的一種特殊欄位，儲存的是 JSON 型態但是 Compiled 過的 binary 資料。  
> 特性是，可以讓 PostgreSQL 經由 mata data __加速查詢__ 的速度。  
> 但反過來說，在 __儲存時較花時間__ ，因為要先轉 mata data 所以相對上會比較耗時。  
> 因此主要用在，少編輯但卻需要經常查詢的請境下。

# PostgreSQL 查詢 JSON 內容相關操作子
* -> 
* ->>    
* #>  
* #>>  

> 單箭頭: 回傳的是 JSON 物件。所以可再串接其他操作子。
> 雙箭頭: 回傳的基本上是 value，型態則依據字面量自動轉換。
> - : 以 key 一層一層串接要查詢的路徑。
> # : 以 Path expression 表示要查詢的路徑。
