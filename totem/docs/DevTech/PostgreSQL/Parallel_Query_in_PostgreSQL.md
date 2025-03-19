---
title: Parallel Query in PostgreSQL
description: Parallel_Query_in_PostgreSQL
keywords: [postgresql,Parallel Query]
---

# Parallel Query in PostgreSQL
* Postgres9.6+ 後開始提供 CPU 平行處理功能。
* 系統自行決定何時採用 CPU 平行運算。
* 在自資料庫中過濾出少量資料時效能會有所提升。

# Postgres Parallel Query 設定方式
* 更改 postgresql.conf max_parallel_workers_per_gather 參數後重啟 postgres。

* postgresql.conf
> max_parallel_workers_per_gather: 大於 0 即可, 一般為 2 ~ 8。依實際  CPU 狀況調整。  
> force_parallel_mode (optional): 設定為 on 可強制系統使用 parallel query。  

# 使用限制 
* 目前 Postgres9.6 / Postgres10 無法在下列狀況使用 Parallel Query

  * writes any data or locks any database rows, CTE  
  * PL/pgSQL cursor, for loop  
  * user-defined functions are marked PARALLEL UNSAFE by default (can be modified to SAFE)  
  * The transaction isolation level is serializable (也就是連query都會被lock)  
  * query is running inside of another query  

# 參考資料: 
* [官網 parallel-query 說明](https://www.postgresql.org/docs/10/static/parallel-query.html)
* [PostgreSQL 10 Parallel Queries and Performance](https://blog.rustprooflabs.com/2018/02/pg10_parallel_queries)
* https://www.postgresql.org/docs/current/when-can-parallel-query-be-used.html