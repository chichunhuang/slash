---
title: Jenkins Debian 安裝設定紀錄
description: Jenkins Debian 安裝設定紀錄
keywords: [Jenkins,CI,Debian]
---

# 原由
因為可能要被 layoff，從目前的團隊離開到出資的團隊。  
兩邊都有取得 
也因為幾份 ISMS ISO27001 相關認證，相互牽扯。  





# 預計安裝項目
因只有一台舊 PC 可以先練功所以所有東西都安裝在同一台機器上

* Debian 12
* Postgresql 9
* maven ver?
* git
* ant  ver?
* openjdk8 / jdk8 (遷就於既有AP)
* tomcat8(遷就於既有AP)
* SSH
* Jenkins (plugins...... code coverage......)

設定
* pg config
* hosts

* 建立 tomcat 工作目錄 > 安裝 tomcat
* 建立帳號
* 建立user群族 sudo groupadd tomcat... 新的 user group / user 