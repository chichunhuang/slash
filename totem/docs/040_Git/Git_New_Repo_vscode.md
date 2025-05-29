---
title: Git 建立新專案 vscode
description: Git create new reop by vscode
keywords: [Git,repo] 
---

>    Git server + vscode 下建立新的專案步驟   
>    
>    假設  
>        專案名為: Totem  
>        Server 為: totem@git.xp.totem  

## Git Server 建立 remote Repo

```bash
    $ mkdir Totem.git
    $ git init --bare
```

## vscode 執行 clone repo 指令
* 使用 vscode 的工作命令列 \(ctrl+shift+p)
    * step 1. 輸入 <code> git clone </code>，選擇 Git:Clone
    * step 2. 輸入 <code> url </code>: totem@git.xp.totem:~/GitRemote/trunk/Totem.git
    * step 3. 選擇本地端資料夾 clone 到本地端

## Troubleshooting
### pull-push 時發生 Unable to negotiate

>    Unable to negotiate with xxx.xxx.xxx.xxx port 22: no matching host key type found. Their offer: ssh-rsa,ssh-dss

* 需配置 SSH 密鑰
    * step 1. 在本地端先生成密鑰
    * step 2. 此時會在本地端的 <code> ~/.ssh </code>下產生一組公私鑰 <code> id_rsah </code>, <code> id_rsa.pub </code>
    * step 2. 手動將 <code> ~/.ssh/id_rsa.pub </code> 的內容複製到遠端的 <code> ~/.ssh/authorized_keys </code> 文件內容中

__keygen__

```
    $ ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa
```

*  設定 local ~/.ssh/config

```
    Host git.xp.totem
    Hostname git.xp.totem
    User totem
    IdentityFile ~/.ssh/id_rsa
    IdentitiesOnly yes
    HostkeyAlgorithms +ssh-rsa
    PubkeyAcceptedKeyTypes +ssh-rsa    
```


* vscode 設定 git ssh 金鑰

__setting.json__

```
    "terminal.integrated.env.windows": {
        "GIT_SSH_COMMAND": "ssh -i ~/.ssh/id_rsa"
    },
    "terminal.integrated.env.linux": {
        "GIT_SSH_COMMAND": "ssh -i ~/.ssh/id_rsa"
    },
    "terminal.integrated.env.osx": {
        "GIT_SSH_COMMAND": "ssh -i ~/.ssh/id_rsa"
    }
```

* 重啟 vscode