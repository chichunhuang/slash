---
title: 【Jenkins Ubuntu 安裝設定】
description: Jenkins CI Server 於 Ubuntu 12.04 LTS 安裝設定紀錄
keywords: [Jenkins，Ubuntu，CI，config]
---

# 說故事
> CI server是開發團隊建置所提交的程式碼，並且自動進行單元測試的伺服器，是確保開發團隊進行持續整合的重要元件.
>　
> Ubuntu 12.04LTS 此版本預設包含了部分伺服器不須使用的軟體， 如GIMP或OpenOffice等等，
> 而單 server 版本本身又不包含視窗環境，不方便使用。
> 所以本文件說明如何利用 Ubuntu 12.04LTS 加上所需的套件，來建立一個具有簡易視窗環境的 CI 伺服器.

# 事前準備

* 主機必須有 10GB 以上的硬碟空間。當然越大越好，這會影響到每次建置紀錄的保留次數。
* 主機必須可以連線至網際網路。
* 取得 Ubuntu 12.04LTS - 由Ubuntu正體中文站下載ISO檔。


# 製作開機光碟或是USB開機碟

* 開機光碟:直接利用燒錄軟體將 ISO 檔燒錄到光碟片上.
* USB 開機碟: Ubuntu 有提供工具(UNetbootin)，可以將 ISO 檔寫成具有開機功能的 USB 隨身碟。


## 安裝　Ubuntu 12.04LTS　作業系統
### 安裝　Ubuntu 12.04LTS　作業系統
* 藉由光碟或　USB　碟開機: 
    * <span style={{color: '#0044FF'}}>Install Ubuntu Server</span>
* 語系: 
    * <span style={{color: '#0044FF'}}>繁體中文</span>
* 所選定的語言其安裝程式的翻譯尚未全數完成:
    * <span style={{color: '#0044FF'}}>是</span>
* 國家、領地或區域
    * <span style={{color: '#0044FF'}}>台灣</span>
* 設定鍵盤選擇:
    * <span style={{color: '#0044FF'}}>否</span>
    * <span style={{color: '#0044FF'}}>English(US)</span>
* 主機名稱:
    * <span style={{color: '#0044FF'}}>Inscet-Totem CI</span>
* 設定使用者與密碼:
* 家目錄加密:
    * <span style={{color: '#0044FF'}}>否</span>
* 設定時鐘:
    * <span style={{color: '#0044FF'}}>Asia/Taipei</span>
* 磁碟分割
   1. 硬碟交給安裝程式處理:
    * <span style={{color: '#0044FF'}}>導引 - 使用整個磁碟</span>
   1. 自行規劃:
   * <span style={{color: '#0044FF'}}>建議至少要有一個 "/" 磁區與"swap"磁區。"/" 需要 10GB 以上，"swap" 則是需要主記憶體大小的兩倍。</span>
* 設定套件管理程式:，直接按下.
    * <span style={{color: '#0044FF'}}>繼續</span>
* 設定 tasksel:
    * <span style={{color: '#0044FF'}}>自動安裝安全更新</span>
* 選擇軟體:
    * <span style={{color: '#0044FF'}}>OpenSSH Server</span>
* 將GRUB開機程式安裝至硬碟上:
    * <span style={{color: '#0044FF'}}>是</span>
* 系統時鐘
    * <span style={{color: '#0044FF'}}>UTC</span>
* 更新系統與套件庫

```
sudo apt-get update
sudo apt-get upgrade
```

> Server版的套件庫可能遇到 tw.archive.ubuntu.tw 查無伺服器
> 可以將 /etc/apt/sources.list 裡的 tw.archive.ubuntu.tw 換成 mirror.nttu.edu.tw。

```
vi:

:%s/tw.archive.ubuntu.com/mirror.nttu.edu.tw/g
```

### 安裝簡易的視窗環境
* 在 /etc/apt/sources.list 裡加上:

```
deb http://packages.mate-desktop.org/repo/ubuntu precise main
deb http://repo.mate-desktop.org/ubuntu precise main
deb http://mirror1.mate-desktop.org/ubuntu precise main
```

* 安裝 mate-core mdm (基本視窗環境)套件:

```
sudo apt-get update
sudo apt-get --yes --quiet --allow-unauthenticated install mate-archive-keyring
sudo apt-get update
sudo apt-get install mate-core mdm
```

### 安裝中文字型
  * 先從下載教育部提字型檔
      * [宋體](http://www.edu.tw/files/site_content/MANDR/eduSong_Unicode.ttf)
  * 將字型檔放到:
      * /usr/share/fonts/truetypes/eduSung
  * 更新字型快取:
      * sudo fc-cache -f -v
  * 需重啟動系統才生效。

### 鐘訊同步 NTP 設定:
  * 使用ntpdate命令每12小時校時。
  * 自行選擇 NTP server, ex:國家時間與頻率標準實驗室
      * time.stdtime.gov.tw
      * tock.stdtime.gov.tw
      * clock.stdtime.gov.tw
  
```
$sudo crontab -e

0 */12 * * *     /usr/sbin/ntpdate time.stdtime.gov.tw > /dev/null 2>&1
```
或使用ntpd服務自動校時.安裝ntp服務即可，不需再加crontab排程.
  
```
$sudo apt-get install ntp

```

* 設定ssh server - 編輯'/etc/ssh/sshd_config'，修改:


```
GSSAPIAuthentication no
UseDNS no

```

* 佈署tar.gz檔案到練習機時，是使用scp指令，這時練習機的ip必須事先寫在~/.ssh/config裡.以下是現有的config內容:

```
host lims_ex
    hostname demo-lims.ncgm.sinica.edu.tw
    user server
 
host antar_ex
    hostname demo-samportal.ncgm.sinica.edu.tw
    user server
 
host ecrf_ex
    hostname demo-iquestion.ncgm.sinica.edu.tw
    user server
 
host ilab_ex
    hostname demo-ilab.ncgm.sinica.edu.tw
    user server
 
host tmc_ex
    hostname 192.168.25.17
    user server
 
host trc_ex
    hostname 192.168.9.72
    user server
 
host iirb_ex
    hostname 192.168.9.64
    user server

```

* 完成後還必須更新各練習機上"~/.ssh/authorized_hosts"裡ci的公鑰.
  * 如果ci上沒有'~/.ssh/id_rsa.pub'，執行'ssh-keygen'指令以產生公私鑰.
  * 執行下列指令，將公鑰匯到各練習機(將"EX_HOST"換成各練習機的IP或"~/.ssh/config"裡的別名):

```
server@CI:~/.ssh$ ssh-copy-id server@<EX_HOST>

```
* .ssh and file permission:
  * .ssh - 700
  * .ssh/id_rsa - 600
  * .ssh/config - 600

* 設定網路卡，將CI的IP設定為靜態IP.編輯"/etc/network/interfaces":
```

auto lo
iface lo inet loopback
 
auto eth0
 
iface eth0 inet static
        address 192.168.6.176
        netmask 255.255.255.0
        network 192.168.6.0
        broadcast 192.168.6.255
        gateway 192.168.6.253
        metric 100
        dns-nameservers 8.8.8.8 192.168.19.10 192.168.19.12 192.168.9.254

```
* 在家目錄"/home/server"下建一目錄"repository"，供BioinfoUtil.jar，Wicket*Util.jar存放.





## 安裝所需軟體
* JDK 7， ant 1.8， tomat 7安裝與設定.(參考<a href="http://jira.ncgm.sinica.edu.tw/confluence/display/XP/PinokioInstall">Pinokio練習機安裝</a>，"安裝Ant， "安裝 JDK6 64位元版本"， "安裝Apache Tomcat7"3個小節.
* Odyssey的整合測試(Odyssey-Integration)需要額外的jar檔"jsch-0.1.51.jar"，放置在"ANT_HOME/lib".
* 設定練習機的hostname
* Postgresql 8.4安裝與設定
  * 由套件庫安裝PostgreSQL 8.4
 
```  
sudo apt-get install postgresql-8.4
```

  * 修改/etc/postgresql/8.4/main/postgresql.conf，去除下列的註解符號:
```
listen_addresses='*'
```

  * 修改/etc/postgresql/8.4/main/pg_hba.conf為:
```  
local   all         postgres                          trust
        local   all         all                               trust
        host    all         all         127.0.0.1/32          trust
        host    all         all         ::1/128               trust
        host    all         all         192.168.6.0 255.255.255.0        trust

```
* 修改/etc/hosts，加入:
```
127.0.0.1    insect.totem
```

* 複製原CI上的PostgreSQL相關的目錄到相同的位置(如果是重建DB則直接進行下一步):
  * /var/lib/postgresql/8.4/main/
  * /home/server/hudson/postgres_db_data
  *將此2個目錄的擁有者與群組都設為postgres:
```
chown -R postgresql.postgresql /var/lib/postgresql/8.4/main/ /home/server/hudson/postgres_db_data
```

* 重建資料庫:
  * 在磁碟上建立tablespace.執行http://jira.ncgm.sinica.edu.tw/secure/attachment/23580/create_tablespaces.sh裡的命令
  * 建立postgresql的使用者、tablespace與schema.執行http://jira.ncgm.sinica.edu.tw/secure/attachment/23579/rebuild_db_2.sql
* 安裝svn套件

```
sudo apt-get install subversion
```

* 下載，安裝與設定Jenkins
  * 下載jenkins.war(http://mirrors.jenkins-ci.org/war/latest/jenkins.war)
  * 將jenkins.war複製到tomcat/webapps/
  * 在~/tools/下建立jenkins/
  * 在/etc/profile中加入一行
```  
export JENKINS_HOME=/home/server/tools/jenkins
```

  * 在tomcat/conf/server.xml中，找到port為8080的connector，加上URIEncoding屬性如下:

```
<Connector port="8080" protocol="HTTP/1.1"
   connectionTimeout="20000"
   redirectPort="8443" URIEncoding="utf8"/>

```

* 啟動tomcat7，連線到jenkins，到manage jenkins->configure system，修改
  * jdk路徑
  * ant路徑

* Jenkins URL
  * 加入plugin
  * Backup plugin
  * Cobertura plugin
  * Dashboard View
  * Deploy Plugin
  * Disk Usage plugin
  * Emotional Hudson plugin
  * FindBugs Plugin
  * Green Balls
  * JIRA plugin
  * Release Plugin
  * SSH Slaves plugin
  * Subversion Plugin
  * Subversion Tagging Plugin
  * eXtreme Feedback Panel Plugin
  * JIRA Plugin
  * Hudson Sounds plugin
  * ChuckNorris Plugin
  * Locks and Latches Plugin
  * Monitoring

* 關閉jenkins，將Hudson備份檔解壓縮到$JENKINS_HOME
```
jenkins$ tar vfxz hudson_backup.tar.gz

```

* 然後重新啟動


* 備份執行:
```
server@ci1:~/hudson$ tar czf jenkins.tgz jenkins --exclude=builds --exclude=workspace --exclude=monitoring --exclude=fingerprints --verbose
```