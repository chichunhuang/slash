---
title: SQL Shell psql 基本使用
description: SQL Shell psql Basic
keywords: [psql,SQL Shell,PostgreSQL]
---

# SQL Shell (psql) 基本使用
* 作業環境: windows 
* 已設定 ~\PostgreSQL\x.x.x\bin 於環境變數(才能找到 psql.exe)
* 方法1: 使用 cmd 直接下 psql 指令。
  * 可直接在 command line 指令中給予 username/port/host 等參數
* 方法2: 使用 SQL Shell(psql) 下令。
  * 須先進行登入後才可動作
  
# psql cmd 下 login 方式
* wondows 下記得先加入 postgreSQL/bin 到環境變數。

```bash
    psql -U postgres -d cable -p 5432 -h 192.168.x.xxx
    
    psql# select * from totem_user;
```


#  SQL Shell (psql) 下 login 方式

```bash
    Database [postgres]: totem
    Port [5432]: 5432
    Username [postgres]: totem
    psql (9.5.25，伺服器 9.5.18)
    輸入 "help" 顯示說明。
    
    totem=# select * from totem_user;
    ....
    註: 
    A: q 可以跳出查詢結果檢視
    B: Ctrl+C 結束
```

# 直接於 SQL Shell (psql) 執行 sql 檔
  通常 DevOps 下，為了方便 DBA 處理與權責分離。  
  這邊習慣提供 DBA 包好的 sql 檔或 stored procedure 方便執行。  
  也避免出錯時分不清 DBA 手動程序失誤或是 sql 本身問題。

## psql -f
* psql -f 可用來指向 local 端準備好的 *.sql 檔  
* -U : role  
* -d : database  
* -f : sql 檔  
* -p : port  
* -h : hostname  

```sql
psql -U postgres -d totem -f export_all_user.sql
```


## SQL Shell(psql) 進入後， \i 指令
* SQL Shell(psql) \i 可用來指向 local 端準備好的 *.sql 檔  
* 注意事項: 
  * 即使是在 windows 下，路徑也是使用 __斜線__ 非反斜線。  
  * 路徑應使用 single quote 包覆。  

```sql
totem=# \i '這邊是 local 所在的位置, 不是登入目標遠端機器的位置'

totem=# \i 'D:/tmp/export_all_user.sql'

注意事項
1: single quote
2. 資料夾使用的是 [斜線] / (windows 中用的是反斜線)
```


## Linux Shell Script 中提供密碼方式

> 執行 psql 時，通常需要提供密碼，psql 預設由 stdin 讀取密碼。  
> 但在 shell script 中無法輸入密碼，解套方式透過 .pgpass 檔案提供密碼。  


* 在 psql 命令後加上  __'--no-password'__
* home directory 下新增 __.pgpass__ 檔案，內容為各 DB 連線的密碼
  * 格式為:
  
```bash  
host:port:database:user:password
```

* 再將 .pgpass 的權限改成 600