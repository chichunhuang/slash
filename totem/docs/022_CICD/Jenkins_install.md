---
title: Jenkins 安裝及設定
description: Jenkins 安裝及設定
keywords: [Jenkins]
---

# Jenkins 安裝與設定

## 安裝 fontconfig
* 運行 Jenkins 需要與字型有關的函式庫。需以 root 權限執行

```
    apt install fontconfig
```

## 設定 JENKINS_HOME 環境變數

__建立 jenkins 工作目錄__

```
    mkdir ~/jenkins
```

__修改~/.profile__
* 加入 JENKINS_HOME

```
    export JENKINS_HOME=~/jenkins
```

## 安裝與啟動 Jenkins
* 下載 [jenkins.war](https://www.jenkins.io/download/)
* 將 jenkins.war  放置於 ~/tomcat/webapps 後啟動 tomcat 
* Windows 則有 jenkins.msi

```
    ~/tomcat/bin/startup.sh
```

## Git Repository 安裝與設定
    這邊因為 ISMS 需權責分離，帳號不共用   
    又不想把 Git 搞得太複雜  
    所以，直接以 OS 帳號綁定 Git 帳號  
    每位開發人員一個受限的主機帳號    
    因而建立相關群組  
    Account Policy 則藉由 OS 既有功能來直接控管\(簡化組態設定)  
    
__建立 gitgroup 群組__

```
    $sudo groupadd gitgroup
```

__開發人員的帳號加入 gitgroup__

```
    $sudo /usr/sbin/usermod -aG gitgroup insect
    
    $sudo /usr/sbin/usermod -aG gitgroup totem

    $sudo /usr/sbin/usermod -aG gitgroup developerX
    
```


## git repository
* 建立 git repository 或利用原先的備份重建 repo

__建立__

* 在/opt/GitRemote/trunk 裡建立需要的專案目錄，以 InsectTotem 為例:

```

    $mkdir /opt/GitRemote/trunk/InsectTotem
    
    $cd /opt/GitRemote/trunk/InsectTotem
    
    $git --bare init --shared=group
```

__重建__

* 將專案的 repository 複製到 /opt/GitRemote/trunk下

```
    $cp -r backup/InsectTotem.git /opt/GitRemote/trunk
```

## 修改 git repository 的權限

```    
    $ cd /opt/GitRemote/InsectTotem.git
    $ git config core.sharedRepository group
    $ chgrp -R gitgroup . 
    $ chmod -R g+w . 
    $ chmod g-w objects/pack/* 
    $ find -type d -exec chmod g+s {} +
```