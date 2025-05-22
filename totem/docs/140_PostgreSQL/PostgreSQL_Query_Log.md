---
title: PostgreSQL SQL 日誌紀錄
description: PostgreSQL Query Log
keywords: [postgresql,Query Log]
---

## 開啟 PostgreSQL SQL 執行紀錄
> PostgreSQL 預設只會紀錄 Error Logs，搭配資安認證時可能會想知道有哪些資料被查詢過。<br/>
> 下面方式記錄啟動資料庫執行紀錄日誌功能方式。  <br/>
> 調整前記得先停機備份 postgresql.conf 檔  
* [postgresql.conf 完整範例](https://github.com/postgres/postgres/blob/master/src/backend/utils/misc/postgresql.conf.sample)

## 開啟 logging_collector 

* 需編輯 postgresql.conf 檔，可能所在位置
    * windows :\Program\Files\PostgreSQL\<version\>\data\postgresql.conf
    * linux: /var/lib/postgresql/data/postgresql.conf
    
    
```properties

# This is used when logging to stderr:

logging_collector = on        

                    # Enable capturing of stderr and csvlog
                    # into log files. Required to be on for csvlogs.
                    # (change requires restart)
```

## 指定要監視的指令種類

```properties

log_statement = 'all' 
                    # none, ddl, mod, all
                    
```

## 指定 log 輸出位置

```properties

log_directory = 'log'
            
                    # directory where log files are written,
                    # can be absolute or relative to PGDATA
```

## 指定 log 輸出檔案名稱

```properties

log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log'    
                    # log file name pattern,
                    # can include strftime() escapes
                    
```

## 其他關於 log rotation 相關設定
```properties

log_duration = on 
                 # Logs the duration of each completed SQL statement
                 # 記錄每個完成的 SQL 語句的持續時間，毫秒
                 
log_min_duration_statement = 0
                 # 超過指定時間閾值的 Statement 會被記錄


log_file_mode = 0600            
                    # creation mode for log files,
                    # begin with 0 to use octal notation
                    # 0600: 伺服器擁有者可以讀取或寫入日誌檔案
                    # 0640: 允許所有者群組的成員讀取檔案
                    
                    
#log_rotation_age = 1d            
                    # Automatic rotation of logfiles will
                    # happen after that time.  0 disables.
                    # 使用單一日誌檔案的最長時間，超過此時間後將建立新的日誌檔案。
                    
#log_rotation_size = 10MB        
                    # Automatic rotation of logfiles will
                    # happen after that much log output.
                    # 0 disables.
                    # 單一日誌檔案的最大大小。
                    
```


## 更改設定後須重啟資料庫

```property

sudo systemctl restart postgresql

or 

sudo service postgresql restart

```


## 日誌查看範例指令
* 使用 grep command

```bash
# 逐行查詢
less pg_log/postgresql-2025-02-27_120000.log

# 關鍵字查詢
grep "SELECT" pg_log/postgresql-2025-02-27_120000.log

grep "duration" pg_log/postgresql-2025-02-27_120000.log

```        