---
title: Postgres 允許 Client 連線設定
description: Postgres 允許 Client 連線相關設定
keywords: [postgresql]
---

> 允許 Client 連線相關設定

允許 local 以外連至 Postgres DB 需進行下列設定:  

* 請參考
    * [http://www.postgresql.org/docs/8.4/static/auth-pg-hba-conf.html](http://www.postgresql.org/docs/8.4/static/auth-pg-hba-conf.html)  
    

## 設定檔位置
* __Windows__ : C:\\Programs\\PostgresSQL\\x.x\\data\\
* __Linux__ : /etc/postgresSQL/x.x/main/
* 相關設定檔
    * pg_hba.config
    * postgressql.conf


## pg_hba.confi
* Postgres auth-method(trust,md5, ident....) 

__pg_hba.config__

```
    # TYPE    DATABASE    USER        CIDR-ADDRESS                          METHOD
 
    # IPv4    local connections:
    host      all         all         127.0.0.1/32                           trust
    # IPv6    local connections:
    #host     all         all         ::1/128                                md5
    host      all         all         192.168.6.0 255.255.255.0              trust
```

## postgressql.conf

__postgressql.conf__

開放postgresql對外連線，把

```
     # - Connection Settings -
     # listen_addresses = 'loaclhost'
```

改成

```
     # - Connection Settings -
     listen_addresses = '*'
```

## Firewall
* 開啟 TCP port 5432 for postgres