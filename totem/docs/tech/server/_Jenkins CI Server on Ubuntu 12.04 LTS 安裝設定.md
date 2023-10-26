

## introduction
CI server是開發團隊建置所提交的程式碼,並且自動進行單元測試的伺服器,是確保開發團隊進行持續整合的重要元件.XP Team曾經使用過Anthill,目前(2012/11)所使用的是Hudson.Hudson是一個曾經由Sun支援的開源專案,直到Sun被Oracel所併購.之後Oracle註冊了Hudson這個名稱,使得原先Hudson的使用者與開發人員感到自由軟體的精神受到污染與破壞,於是又成立了Jenkins專案,以擺脫Oracle(可能的)控制.

XP Team使用的Hudson CI server使用的是Ubuntu 11.04版,目前已經停止更新支援,趁著更換作業系統為支援時間更長,且相對較為穩定的Ubuntu 12.04 LTS版,未來的CI server也更換為Jenkins.本文件說明CI server的安裝與設定方法.

在管理伺服器時,雖然絕大部份的任務可以從CLI(Command Line Interface)完成,但如果有GUI(Graphic User Interface),有時在設定伺服器或是故障排除時會比較方便.但是Ubuntu 12.04LTS的desktop版本包含了太多管理伺服器用不到的軟體,如GIMP或OpenOffice等等,而server版本本身又不包含視窗環境.所以本文件說明如何利用Ubuntu 12.04LTS加上所需的套件,建立一個具有簡易視窗環境的伺服器.

## 事前準備

* 主機必須有10GB以上的硬碟空間.
* 主機必須可以連線至網際網路.
* 取得Ubuntu 12.04LTS - 由Ubuntu正體中文站下載ISO檔.


## 製作開機光碟或是USB開機碟

* 開機光碟 - 利用燒錄軟體將ISO檔燒錄到光碟片上.
* 開機USB碟 -  利用Ubuntu所提供UNetbootin,可以將ISO寫至USB碟,使其成為可開機的裝置.


## 安裝作業系統
* 由光碟或USB碟開機,選擇"Install Ubuntu Server".
* 語系選擇"繁體中文".接下來安裝程式會提示"所選定的語言其安裝程式的翻譯尚未全數完成",選擇"是".
* 國家、領地或區域選擇"台灣".
* 設定鍵盤選擇"否".接下來設定鍵盤選擇"English(US)",排列方式一樣是"English(US)".
* 主機名稱輸入"ci2"(或其它適合的名稱,大小寫不拘)
* 設定使用者與密碼.使用者全名與登入名稱可以一樣.家目錄加密選擇"否".
* 設定時鐘.若時區偵測為Asia/Taipei,選擇"是".
* 磁碟分割
   * 如果是整個硬碟交給安裝程式規則,則選擇"導引 - 使用整個磁碟"
   * 如果要手動規劃,則至少要有一個"/"磁區與"swap"磁區."/"需要10GB以上,"swap"則是需要主記憶體大小的兩倍.
* 設定套件管理程式,直接按下繼續.
* 設定tasksel,管理系統上的更新,選擇"自動安裝安全更新".
* 選擇軟體,選擇"OpenSSH Server"即可.
* 將GRUB開機程式安裝至硬碟上,選擇"是".
* 結束安裝,系統時鐘是否被設定為UTC,選擇"是".到此安裝結束.


## 設定
* 更新整個系統.先更新套件庫,再升級全部套件.

```
sudo apt-get update
sudo apt-get upgrade
```

* Server版的套件庫"tw.archive.ubuntu.tw"常常會掛點,如果在上述2步驟等候太久或是回應找不到伺服器的話,可以將"/etc/apt/sources.list"裡的"tw.archive.ubuntu.tw"換成"mirror.nttu.edu.tw".以vi開啟該檔,然後下:

```
:%s/tw.archive.ubuntu.com/mirror.nttu.edu.tw/g

```

* 安裝簡易的視窗環境.在/etc/apt/sources.list裡加上:

```
deb http://packages.mate-desktop.org/repo/ubuntu precise main
deb http://repo.mate-desktop.org/ubuntu precise main
deb http://mirror1.mate-desktop.org/ubuntu precise main

```
* 然後執行下列命令以安裝基本視窗環境.安裝mate-core,mdm套件:

```

sudo apt-get update
sudo apt-get --yes --quiet --allow-unauthenticated install mate-archive-keyring
sudo apt-get update
sudo apt-get install mate-core mdm
```

* 安裝中文字型
  * 先從下載教育部提供的宋體字型檔:http://www.edu.tw/files/site_content/MANDR/eduSong_Unicode.ttf
  * 將字型檔放到/usr/share/fonts/truetypes/eduSung(必須先建立此目錄)
  * 更新字型快取:sudo fc-cache -f -v
  * 重新啟動系統,應該可以看到視窗登入畫面,且中文字型可以正常顯示.

* 設定系統自動進行校時:
  * 使用ntpdate命令每12小時校時:
```
$sudo crontab -e

```

加入:
  
```
0 */12 * * *     /usr/sbin/ntpdate time.stdtime.gov.tw > /dev/null 2>&1
```
或使用ntpd服務自動校時.安裝ntp服務即可,不需再加crontab排程.
  
```
$sudo apt-get install ntp

```

* 設定ssh server - 編輯'/etc/ssh/sshd_config',修改:


```
GSSAPIAuthentication no
UseDNS no

```

* 佈署tar.gz檔案到練習機時,是使用scp指令,這時練習機的ip必須事先寫在~/.ssh/config裡.以下是現有的config內容:

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
  * 如果ci上沒有'~/.ssh/id_rsa.pub',執行'ssh-keygen'指令以產生公私鑰.
  * 執行下列指令,將公鑰匯到各練習機(將"EX_HOST"換成各練習機的IP或"~/.ssh/config"裡的別名):

```
server@CI:~/.ssh$ ssh-copy-id server@<EX_HOST>

```
* .ssh and file permission:
  * .ssh - 700
  * .ssh/id_rsa - 600
  * .ssh/config - 600

* 設定網路卡,將CI的IP設定為靜態IP.編輯"/etc/network/interfaces":
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
* 在家目錄"/home/server"下建一目錄"repository",供BioinfoUtil.jar,Wicket*Util.jar存放.





## 安裝所需軟體
* JDK 7, ant 1.8, tomat 7安裝與設定.(參考<a href="http://jira.ncgm.sinica.edu.tw/confluence/display/XP/PinokioInstall">Pinokio練習機安裝</a>,"安裝Ant, "安裝 JDK6 64位元版本", "安裝Apache Tomcat7"3個小節.
* Odyssey的整合測試(Odyssey-Integration)需要額外的jar檔"jsch-0.1.51.jar",放置在"ANT_HOME/lib".
* 設定練習機的hostname
* Postgresql 8.4安裝與設定
  * 由套件庫安裝PostgreSQL 8.4
 
```  
sudo apt-get install postgresql-8.4
```

  * 修改/etc/postgresql/8.4/main/postgresql.conf,去除下列的註解符號:
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
* 修改/etc/hosts,加入:
```
192.168.6.175   develop-server.bioinfo
127.0.0.1       samportal.bioinfo       samportal
127.0.0.1       limsdb.bioinfo  limsdb
127.0.0.1       strpdb.bioinfo  strpdb
127.0.0.1       salvia.bioinfo
127.0.0.1       wombat.bioinfo
127.0.0.1       ecrf.bioinfo    ecrf
127.0.0.1       iquestion.bioinfo
127.0.0.1       qtnf.post.bioinfo
127.0.0.1       isample.bioinfo
127.0.0.1       storage.bioinfo
127.0.0.1       qtnf.limsPost.bioinfo
127.0.0.1       mentholatum.bioinfo
127.0.0.1       pinokio.bioinfo
127.0.0.1       hippo.bioinfo
127.0.0.1       genzo.bioinfo
127.0.0.1       spiderlily.bioinfo
127.0.0.1       justitia.bioinfo
192.168.6.55    svn.bioinfo
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

* 下載,安裝與設定Jenkins
  * 下載jenkins.war(http://mirrors.jenkins-ci.org/war/latest/jenkins.war)
  * 將jenkins.war複製到tomcat/webapps/
  * 在~/tools/下建立jenkins/
  * 在/etc/profile中加入一行
```  
export JENKINS_HOME=/home/server/tools/jenkins
```

  * 在tomcat/conf/server.xml中,找到port為8080的connector,加上URIEncoding屬性如下:

```
<Connector port="8080" protocol="HTTP/1.1"
   connectionTimeout="20000"
   redirectPort="8443" URIEncoding="utf8"/>

```

* 啟動tomcat7,連線到jenkins,到manage jenkins->configure system,修改
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

* 關閉jenkins,將Hudson備份檔解壓縮到$JENKINS_HOME
```
jenkins$ tar vfxz hudson_backup.tar.gz

```

* 然後重新啟動


* 備份執行:
```
server@ci1:~/hudson$ tar czf jenkins.tgz jenkins --exclude=builds --exclude=workspace --exclude=monitoring --exclude=fingerprints --verbose
```