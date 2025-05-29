---
title: Git 建立新專案 eclipse
description: Git create new reop by Eclipse
keywords: [Git,repo] 
---

    Git server + eclipse 下建立新的專案步驟  
    
    我不確定是否能先在 local 建立，  
    之後再送至 Git server 並同時建立遠端 repo
    
    
## Git建立新專案
* 假設
    * Project code:  Totem
    * Git server: totem@totem.xp.git
    
## Remote Side 建立新專案 git Repositories 

```bash
    $ ssh totem@totem.xp.git
    
    $ cd ~/GitRemote/trunk/
    $ mkdir Totem.git
    $ cd Totem.git
    $ git init --bare
```


## 同步新專案並將本機 Repository 送交到遠端 Repository
* eclipse 同步
    * eclipse中，<code>import</code> → <code>Git\(projects from Git)</code> → <code>Clone URI</code> 建立新的專案 git Repository __Totem__
        * URI: totem@totem.xp.git:\~/GitRemote/trunk/Totem.git
        * HOST: totem.xp.git
        * Repository Path: \~/GitRemote/trunk/Totem.git
        * 指定 Local Directory: D:\Doc\GitLocal\trunk\Totem
        * .git 隱藏資料夾已建立完成 \(已在本機端執行完 git clone)
* 放入資料並送交遠端
    * 將 eclipse workspace 的 Totem 專案 複製一份到 Totem 資料夾中
    * 在 eclipse 中，<code>import</code> → <code>projects from Git</code> → <code>Existing local repository</code> –> 選擇 Totem 專案
    * push master → create develop branch