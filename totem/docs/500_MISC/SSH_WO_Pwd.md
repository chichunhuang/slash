---
title: SSH 無密碼登入
description: SSH 無密碼登入相關設定
keywords: [SSH]
---

    因為專案中會需要由 Jenkins 透過 shell script 指令將檔案佈署到練習與測試機  
    此時，CI server 要能夠無密碼登入各練習機  
    
    因而想藉由 ssh 的架構來達到不需密碼輸入的目的  
    ssh 架構下， server 端以 public key 加密資料後  
    透過網路傳到 client 端  
    client 端再以 private key 解密  
    
## SSH 無密碼登入步驟
* client 以無密碼 ssh 連線到 server 主要步驟
    1. client 端以 <code>ssh-keygen</code> 產生 ___private key___ \(<code>id_rsa_key</code>) 與 ___public key___ \(<code>id_rsa_key.pub</code>)
    1. 將 id_rsa_key 放在 client 登入帳號 /home/username/.ssh/id_rsa
    1. 將 public key 加入到 server 登入帳號 /home/username/.ssh/authorized_keys ( 或是 authorized_keys2 )

```
    ssh-keygen
    Generating public/private rsa key pair.
    Enter file in which to save the key (/home/username/.ssh/id_rsa):
    
    Your identification has been saved in /home/username/.ssh/id_rsa_key.
    Your public key has been saved in /home/username/.ssh/id_rsa_key.pub.
```


* 註: ___server 端記得用 attach 而非寫入___
    * 可以先將 public key 複製到 server 上，再以將 public key 附加到 authorized_keys 的尾端    
       因為檔案中可以包含多個 client 的 public key，故以 attach 的方式\(>>)加入，不可直接覆蓋\(>)
       
```bash
    cat id_rsa_key.pub >> ~/.ssh/authorized_keys
```

## 檔案權限
* client 端 private key 檔案的存取權限必須是 600 
* client 端 public key 的存取權限必須是 644
* server 端 public key 所在的 .ssh 目錄存取權限必須是 700
* 註\(ssh 會因為安全性不足而無法進行無密碼登入\):
    * server 端的檔案或目錄權限設定不夠安全 ▶ 仍需輸入密碼
    * client 端的檔案權限設定不夠安全 ▶ 拒絕連線
    * client 端存放 private key 的目錄\(\$HOME/.ssh) ▶ 不需特別的權限設定

```
     -rw------- (600)    僅擁有者有讀寫權限
     -rw-r--r-- (644)    僅擁有者有讀寫權限；組群和其他人只有讀的權限。
     -rwx------ (700)    僅擁有者有讀、寫、執行權限。
```

## 設定別名
* 可自行建立 config 檔案於.ssh 目錄下，方便未來操作

__ssh/config__

```
    Host HOST_NAME
    User USER
    Port 22
    HostName HOST_ADDRESS
```

__指令簡化__ 
* 下列指令因上方設定意思相同

```
    ssh HOST_NAME 
    ssh USER@HOST_ADDRESS
```

## Troubleshooting
### public key 異動  

```
    .ssh/known_hosts 裡,  
    存放的是已知的 server 的 public key.  
    第一次連線到該 server 時, public key 會被記錄在此檔案中.  
    當 server 上的 public key 被改變了,  
    會造成連線失敗.  
    可以進入該檔案中,  
    將失效的 public key 刪除即可.  
```
    
### Agent admitted failure to sign using the key
* 金鑰組重新產生之後可能會出現此訊息

__client 端執行__

```
    ssh-add ~/.ssh/id_rsa
```

### 登入等候時間過長
* 當使用 SSH 連接某台主機時，會檢查並確保能連接到你想連接的主機。  
    其中 __reverse lookup on the IP address__ 用來檢查機器名稱和你要連接的主機名稱一致。  
    當使用 publickey 認證，而認證時間非常久，  
    則可取消 GSSAPIAuthentication 認證。