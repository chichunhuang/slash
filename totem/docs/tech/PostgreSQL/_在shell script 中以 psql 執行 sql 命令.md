

執行psql時,通常需要提供密碼,psql預設由stdin讀取密碼, 但在shell script中就無法輸入,所以必須透過.pgpass檔案提供密碼.作法

在psql命令後加上'--no-password'
在 home directory 下新增 .pgpass檔案,內容為各DB連線的密碼,格式為:
host:port:database:user:password
再將.pgpass 的權限改成 600