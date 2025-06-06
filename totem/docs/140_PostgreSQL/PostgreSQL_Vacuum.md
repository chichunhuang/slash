---
title: PostgreSQL Vacuum 操作
description: PostgreSQL Vacuum
keywords: [postgresql,vacuum]
---

> PostgreSQL 在更新或刪除資料時會產生 dead tuples。  
> VACUUM 主要負責回收 dead tuples 所佔用的磁碟空間，並更新查詢策略 \(Query Planner) 所需的統計資訊。  
> 以提升資料庫效能，並降低磁碟佔用空間。   

* PostgreSQL 在 8.1 版後開始提供自動執行空間清理與回收機制 \(autovacuum)。 

## Dead Tuples \(死亡元組)
> 可想成是 windows 用久了之後，會造成磁區髒亂。而 PostgreSQL Vacuum 就是 Windows 的磁碟重整。  
> dead tuples 可簡單說成是暫時被 PostgreSQL 這清潔人員標記 '已退房，待清潔' 的旅館房間。  
> Vacuum 就是清潔人員打掃動作。    
> 打掃完回報櫃台，櫃台重新統計空房數與位置便是 VACUUM ANALYZE。  

## 手動 Vacuum 時機
* ___資料庫統計資訊嚴重失真___ : 
    * Rows \(counted)與 Rows \(estimated) 差異太大。影響資料庫的查詢策略 \(Query Planner) 與效能。 
    * 使用 <code>__VACUUM ANALYZE__</code> 指令更新統計值
* ___大量資料變動後___ : 
    * 當資料表經歷了大量的 <code>__UPDATE__</code> 或 <code>__DELETE__</code> 操作後，會產生許多 dead tuples。
* ___大量資料載入後___ : 
    * 載入後應馬上執行 <code>__VACUUM ANALYZE__</code> 立即更新統計資訊。 
* ___Temp Tables___ : 
    * autovacuum 通常無法存取和清理 Temp Tables 而造成磁碟混亂。
* ___autovacuum 無法及時處理___ : 離峰時增加人工觸發。
    * 資料庫交易頻繁時 autovacuum 被延後觸發。  
* ___排程或空間衝突___ : 
    * 空間不足: 指的是將被標記可重用的空間還給作業系統。這是硬碟空間不足時的緊急應變措施。與 DB 效能較無關。
    * 時間衝突: autovacuum 與使用者使用高峰期相衝突，而被暫緩觸發或終止。
    
## Vacuum 語法
* [參考來源](https://docs.postgresql.tw/reference/sql-commands/vacuum)    
* option 包含下列:
    * __FULL__ : 重謄資料，完全鎖定造成 DB 無法使用 
    * __ANALYZE__ : 更新 Query Planner 統計資訊 
    * __VERBOSE__ : 輸出詳細的清理活動報告
    * PARALLEL \(這個 opt 填數值)
    * FREEZE : 避免交易 ID 因溢位被重複使用。預設啟用。
    * 其他: DISABLE_PAGE_SKIPPING,SKIP_LOCKED,INDEX_CLEANUP,TRUNCATE  

```sql
-- syntax
    VACUUM [ ( option [, ...] ) ] [ table_and_columns [, ...] ]

-- example    
    VACUUM (VERBOSE, ANALYZE) table_insect_totem;
```

## 指令
* 在不造成資料庫鎖定前提下，一般常用的是: 
    * VACUUM : 回收 dead tuples
    * VACUUM (VERBOSE, ANALYZE) : 回收 dead tuples，並統計分析

| 指令  | 主要功能 | 鎖定層級 <br/>(Lock Level) | 歸還空間給 OS | 效能 | 使用時機 | 
| ---- |  ----  |  ----  |  ----  |  ----  |  ----  | 
| VACUUM | 回收 dead tuples 佔用的空間 | 無鎖定，不會阻擋 DML <br/>(SELECT/INSERT/UPDATE/DELETE) | 否 | 輕微 I/O | 日常手動維護、大量資料刪改後 | 
| VACUUM FULL | Table 重謄資料，徹底移除未使用空間 | 排他，會阻擋所有讀寫操作 | 是 | 大量 I/O+CPU | 必需縮小檔案大小時，應於離峰時維護用 | 
| ANALYZE | Query Planner 所需統計資訊更新 | 不影響 SELECT，<br/>但會阻擋 DDL 和其他 VACUUM | 否 | 少量讀取和 CPU 計算 | 查詢效能下降、執行計畫不佳時、大量資料載入後 | 
| VACUUM ANALYZE | VACUUM + ANALYZE | 無鎖定 | 否 | 少量 I/O | 日常手動維護指令 | 
| VACUUM (VERBOSE) | VACUUM + 附加輸出過程 |  NA | NA | NA | 用於了解 VACUUM 的過程 | 


## 預設 Auto Vacuum 時機
> auto 並非意味著定期值行，  
> 而是 ___autovacuum launcher___ 於背景檢查相關參數，  
> 當滿足 Vacuum 條件時才啟動另一個 worker 執行實際動作。   
> 條件指的是 __Table 發生變動的程度__，  
> 也就是過期或異動過的資料量達到設定時才滿足。  
> autovacuum 主要執行的動作是 <span style={{color: '#0044FF'}}>__VACUUM ANALYZE__</span>   
> 相關預設參數設置於 <span style={{color: '#0044FF'}}> __postgresql.conf__ </span> 檔案中

### VACUUM (空間回收) 動作相關參數
* Vacuum 主要是做 __回收無效資料佔用的空間__
    * <code>__autovacuum_vacuum_threshold__</code> : 預設 50，dead tuples 多於 50 就滿足基本條件。
    * <code>__autovacuum_vacuum_scale_factor__</code> : 預設 0.2 \(20%)，dead tuples 大於資料的百分之 20。所以 Table 內容越多，觸發週期可能越久。

__VACUUM 驅動條件__

```
    死亡元組數 (dead tuples) > autovacuum_vacuum_threshold + (autovacuum_vacuum_scale_factor × 資料表總行數)
```

### ANALYZE (統計資訊更新)動作關參數
* Analyze 主要是做 __統計資訊更新__ ，以供 Query Planner 做決策參考。  
    * <code>__autovacuum_analyze_threshold__</code> : 預設 50，資料異動的筆數多於 50 就滿足基本條件。
    * <code>__autovacuum_analyze_scale_factor__</code> : 預設 0.1 \(10%)，資料異動筆數大於資料的百分之 10。

__ANALYZE 驅動條件__

```
    被 Insert、Update 或 Delete 的 Tuples 總數 > autovacuum_analyze_threshold + (autovacuum_analyze_scale_factor × 資料表總行數)
```

### autovacuum 面臨的瓶頸
* autovacuum，目的在將對系統效能的影響降到最低。
* 對於資料量非常大的 Table，或是 update / delete 頻繁的 Table，採用百分比設定可能會導致 autovacuum 不夠頻繁，與空間佔用過多 \(bloat) 而使得查詢效能下降。
* 針對大型或高頻變動資料表，資料庫管理員\(DBA) 可調低 <code>__autovacuum_vacuum_scale_factor__</code> 和 <code>__autovacuum_analyze_scale_factor__</code> 的值，讓 autovacuum 提早發生。


## VACUUM ANALYZE 參數調整: <code>__Alter Table__</code>
* 下面介紹針對單一 Table 處理
* 若需調整全域設定之接改 <span style={{color: '#0044FF'}}> __postgresql.conf__ </span> 即可

__針對對單一 Table 調整參數__

```sql
-- syntax
    ALTER TABLE table_name SET (target_parameter = value, ...);

-- 回復全域預設值 (by Set or Reset)   
    ALTER TABLE table_name SET (target_parameter = NULL);
    ALTER TABLE table_name RESET (target_parameter, ...);
    
-- example 
    ALTER TABLE event_logs SET (
        autovacuum_vacuum_scale_factor = 0.02,
        autovacuum_analyze_scale_factor = 0.01
    );    
```

__查詢參數設定值__
* pg_class : 確認特定資料表的客製化設定
* relname : 填入 table name
* reloptions : 陣列形式呈現這些設定
* 若回傳 null 代表採用全域設定

```sql
    SELECT relname, reloptions FROM pg_class WHERE relname = 'event_logs';
```

__恢復預設值__

```sql
-- 使用 RESET，推薦
    ALTER TABLE event_logs RESET (autovacuum_vacuum_scale_factor, autovacuum_analyze_scale_factor);
    
-- 將值設為 null 也能達到相同效果
    ALTER TABLE event_logs SET (
        autovacuum_vacuum_scale_factor = NULL,
        autovacuum_analyze_scale_factor = NULL
    );   
```