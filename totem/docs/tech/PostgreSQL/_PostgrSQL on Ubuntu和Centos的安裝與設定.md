
## 1.安裝
```
ubuntu:
sudo apt-get install postgresql
 
centos:
sudo yum install postgrsql
```

## 2.修改/etc/postgresql/8.4/main/postgresql.conf(ubuntu)或/var/lib/pgsql/data/postgresql.conf:

```
lc_messages = 'en_US.UTF-8'
listen_address = '*'#這個值如果是localhost,會無法由外部連線
```

##
3.修改/etc/postgresql/8.4/main/pg_hba.conf

```
#所有來自本機的連線都不需驗證,這樣psql -U postgres才能夠使用
# TYPE  DATABASE    USER        CIDR-ADDRESS          METHOD
# Database administrative login by UNIX sockets
#local   all         postgres                          ident
 
# TYPE  DATABASE    USER        CIDR-ADDRESS          METHOD
 
# "local" is for Unix domain socket connections only
local   all         all                              trust
# IPv4 local connections:
host    all         all         127.0.0.1/32          md5
# IPv6 local connections:
host    all         all         ::1/128               md5
host all all 192.168.6.0 255.255.255.0 md5
```

## 4.修改完2,3設定檔後,要重新啟動postgresql服務
```
sudo /etc/init.d/postgresql restart

```

## 5.PostgreSQL預設的用戶名為postgres.伺服器剛安裝完成,此帳號不具備密碼,必須以psql登入並指定帳號:

```
$psql -U postgres
postgres=#alter user postgres password 'postgres';
```

密碼設定完成後,才能以TCP/IP連線.
若psql無法連線,就把(3)所有驗證方式先改成trust後重啟,連線改完密碼再把驗證方式改回來.

## 6.建立tablespace
在/var/lib/postgresql/8.4/下,以postgre帳號建立接下來資料庫所需的tablespace所在目錄.確認此新目錄的擁有人和群組都是postgres.
```
sudo mkdir /var/lib/postgresql/8.4/truecrypt
chown postgres.postgres /var/lib/postgresql/8.4/truecrypt
```

## 7.建立PostgreSQL服務使用者,tablespace與database:
```
$psql -U postgres template1

#建立使用者,名為truecrypt
create user truecrypt password 'truecrypt' NOINHERIT VALID UNTIL 'infinity';
 
#建立tablespace,名為truecrypt
create tablespace truecrypt  OWNER truecrypt  LOCATION '/var/lib/postgresql/8.4/truecrypt';
 
#建立database,名為truecrypt
create database truecrypt encoding='utf8' owner=truecrypt template=template0 tablespace=truecrypt;
 
#切換到truecrypt database
\c truecrypt;
alter schema public owner to truecrypt;
revoke create on schema public from public;
revoke usage on schema public from public;
#如果要將資料庫的使用權限開放給另一個非擁有人的帳號:
grant usage on chema public to SOMEONE;
```
## 8.防火牆要開放port 5432 tcp連線

## 9.CentOS如果有開啟selinux,在建立tablespace時要先改為Permissive模式:

```
查看:
 
#getenforce
 
Enforceing
 
設置:
setenforce 0
 
Permissive
```