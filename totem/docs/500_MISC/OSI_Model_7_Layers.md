---
title: OSI 模型 7 層網路架構模型
description: OSI-Open System Interconnection Reference Model 模型 7 層模型
keywords: [OSI]
---

> OSI 僅是一個分層概念，市面上商品種類繁多，技術也相互相依。因此，一個商品或技術有可能同時牽涉到 OSI 多個層次。  
> 例如: Https : 瀏覽器和伺服器溝通時用的協定，既要傳輸資料，又要確保安全。  
> 可以說他是應用層，因為它是 HTTP + TLS/SSL 的協定，屬於應用程式直接使用的協定。  
> 但 Https 包含 TLS/SSL 等加密機制又間接牽涉到會話層與傳輸層的概念。  


* 參考[網路架構模型: TCP/IP 4 層模型](./TCPIP_4_Layers) 
    * OSI: 由 ISO 提出
    * TCP/IP: 由資訊圖靈獎得主提出

## OSI 定義
* Open System Interconnection Reference Model / Open Systems Interconnection Model
* 開放式通訊系統互連參考模型 / 開放式系統互連模型
* 電腦系統互相通訊\(資料流連接\)的標準，目的在 <span style={{color: '#0044FF'}}>__不同廠牌、不同系統的網路設備，可以遵循共同的標準來溝通。__</span> 非限制標準，僅是網路標準的概念架構
* 7 層: OSI 模型就是把 <span style={{color: '#0044FF'}}>__資料傳遞__</span> 分成 7 個小任務。
    * 實體層 Physical Layer: 數位訊號與硬體規格
    * 資料連結層 Data Link Layer: 邏輯訊號傳輸控制與主機辨識
    * 網路層\(IP 層\) Network Layer: 跨網 IP 辨識與路由傳送
    * 傳輸層 Transport Layer: 確保資料完整傳輸的相關協定與其運作
    * 交談層\(會議層\) Session Layer: 確保傳輸過程中機器間連線不中斷
    * 表達層\(展示層\) Presentation Layer: 針對資料，來源與接收雙方能有相同的理解方式。
    * 應用層 Application Layer: 使用者與應用程式的介面、提供服務
* OSI 7 層記憶口訣    
    * Please Deliver Nice Tasty Spicy Pizza ASAP
    * Please Do Not Throw Sausage Pizza Away
    * All People Seem To Need Domino's Pizza
* OSI 模型中，每一層在處理資料時，都會加上自己的一個標頭 (header)


## OSI 7 層
* __資料流__ 連接與傳遞的七個層次
* 第一至四層規範網路與通訊技術
* 第五至七層則主要針對用程式相關

### 1 實體層 Physical Layer
* 資料單元: bit 位元，0 與 1 的電子訊號
* 規範內容: 確保電子資料可以在各種硬體上傳輸。包含硬體介面、傳遞訊號格式與資料本身格式。
* 範例: 
    * 硬體相容: 針腳規格、網路線規格、集線器、網卡、主機介面卡等硬體介面規格等。
    * 訊號相容相關協定: 電壓、Wi-Fi 無線電波等資料傳送規格。
    * 資料的編碼方式: RS-232 的資料編碼規則。

### 2 資料連結層 Data Link Layer
這邊通常指向同區域網路內設備間資料傳輸  
* 資料單元: Data Frame，實體層的資料單位是 0 與 1 的電子訊號，使用時須將多個位元的資料組合以呈現有邏輯意義的單元。這個單元稱作 Data Frame。
* 規範內容: 實體層建立了硬體連接規格與訊號協定，資料連結層則是在這個硬碟網路架構下用來處理 <span style={{color: '#0044FF'}}>__裝置辨識__</span> 與 <span style={{color: '#0044FF'}}>__資料傳遞控制__</span> 。其下細分為 __媒體存取控制__ \(Media access control，MAC\)子層、 __邏輯連結控制__ \(logical link control，LLC\)子層
    * 媒體存取控制\(MAC\): 資料在傳輸時，用以辨別端點設備使用。
        * 如主機辨識，實作上的範例如 乙太網路利用 MAC address 來辨別不同裝置。
    * 邏輯連結控制\(LLC\): 負責管理資料的傳送與錯誤控制。
        * 例如 IEEE 802.2 規範用來管理傳輸速度、資料完整性、以及傳輸對象確認。
* 範例: 乙太網卡、Switch、ARP 協定

### 3 網路層 Network Layer
相較於資料連結層探討單一網路內設備的資訊傳輸，網路層則著重在多個網路間資訊的傳輸規範
* 資料單元: 封包 \(packet、data chunk\)，網路資料傳輸時所切割出的小區塊，包含控制資訊表頭與實際資料\(payload)。
* 規範內容: 負責跨網路的資料傳輸，利用封包附加 IP 方式讓設備辨識資料的來源與目的地。並為資料尋找達到目的地的最佳實體路徑\(路由)。
* 範例: 路由器、IP分享器、IP、Router、ICMP\(ping\)

### 4 傳輸層 Transport Layer
* 資料單元: segment \(區段\)，將來自應用層的大筆資料切割成區段。
* 規範內容: 確保兩個裝置之間的點對點通訊時資料能完整傳輸，在資料傳輸時進行 __分段、重組、錯誤修正__ 等控制。
* 範例: 
    * 傳輸控制通訊協定\(TCP，網頁\)
    * 使用者資料包通訊協定\(UDP，串流影音\)
    * SCTP \(Stream Control Transmission Protocol，多資料流\)
    * DCCP \(Datagram Congestion Control Protocol，即時通訊\)

### 5 交談層 Session Layer
* 資料形式: 資料 
* 規範內容: 在兩設備建立網路連線時，確保有足夠長的連線時間以傳輸交換的資料。
* 範例: Database Connection、RDP、SIP

### 6 表達層 Presentation Layer
* 資料單元: 資料 \(data\)
* 規範內容: 確保來源端與接收端對同組 __資料__ 能夠相同且正確理解，這邊牽涉到的議題是 __資料的__ 格式轉換、壓縮、加密解密方式、檔案的解析或編碼解碼方式等。
* 範例: 影片壓縮 \(MP4\)、圖片格式 \(JPEG\)、資料加密、字元編碼、資料格式轉換、應用層加密 \(AES 加密檔案、PGP 郵件\)

### 7 應用層 Application Layer
* 資料單元: 
* 規範內容: 與使用者直接互動的應用程式本身，以及應用程式服務所採用的相關協定與規範。
* 範例: HTTP、POP3、FTP、SMTP、DNS

## 範例
* 用手機滑 IG
    * 實體層：4G/5G 無線訊號
    * 資料連結層：手機 SIM 卡通訊
    * 網路層：IP 位址找 Instagram 伺服器
    * 傳輸層：TCP 保證圖片完整傳送
    * 交談層：維持登入 session，不會一直掉線
    * 表達層：JPEG 圖片、H.264 影片壓縮、TLS 加密
    * 應用層：Instagram App
