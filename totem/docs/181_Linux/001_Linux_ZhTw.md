---
title: Linux Java 中文字型設定
description: Linux Java 中文字型設定
keywords: [Linux,Font]
---

## 在 Linux 環境下安裝中文字型
* Ubuntu/Debian
* 例如安裝: Google Noto Sans CJK

### 安裝到個人用戶目錄
    * 在家目錄下建立一個 <code>__.fonts__</code> 目錄\(注意最前面有一個 ' . ',代表它是一個隱藏目錄)
    * 將要使用到的字型檔案複製到 <span style={{color: '#0044FF'}}> __~/.fonts__ </span> 目錄下
    * 執行 <code>__fc-cache__</code> 更新字型快取
    * 執行 <code>__fc-list__</code> 確認安裝狀況
    
```
    mkdir -p ~/.fonts
    cp *.otf ~/.fonts/
    
    fc-cache -fv
    fc-list | grep "Noto Sans CJK"
```

### 安裝到全系統字型路徑
* 讓 Linux 中所有的使用者都能夠使用新增的字型
    * 以 root 權限執行   
    * 在 <span style={{color: '#0044FF'}}> __/usr/share/fonts/truetype__ </span> 下，建立一個目錄
    * 將要使用到的字型檔複製到 <span style={{color: '#0044FF'}}> __/usr/share/fonts/truetype__ </span> 下剛建立的目錄中
    * 執行 <code>__fc-cache__</code> 更新字型快取
    * 執行 <code>__fc-list__</code> 確認安裝狀況
    
```
    sudo mkdir -p /usr/share/fonts/truetype/noto
    sudo cp *.otf /usr/share/fonts/truetype/noto/
    
    fc-cache -fv
    fc-list | grep "Noto Sans CJK"
```
 
    
## Linux 下為 Java 設定中文字型 <span id="Java_Font_install">&nbsp;</span>
> Java 使用自己的字型設定檔。所以讓 Java 直接識別系統字型，也可以修改 Java 字型對應設定。

* 為了讓 Swing, AWT, PDF 輸出, JFreeChart 等能正確顯示中文

### 建立目錄: fonts.fallback

```bash
    mkdir $JAVA_HOME/jre/lib/fonts/fallback 
```

### 複製字型檔到 fallback 中
* 以儷黑體字型檔 lihei.ttf 為例:

```bash
    cp lihei.ttf $JAVA_HOME/jre/lib/fonts/fallback 
    
    sudo chmod 644 lihei.ttf
```

### 安裝 xfonts-utils 套件
* 安裝 <code>__xfonts-utils__</code> 套件
* 在 fallback 目錄下建立 fonts.dir 與 fonts.scale 檔
    * 相關指令:
    * <code>__mkfontscale__</code>
    * <code>__mkfontdir__</code>

```bash
    sudo apt install xfonts-utils

-- 下列指令包含在 xfonts-utils 套件之內
    sudo mkfontscale

    sudo mkfontdir
```

### 將 fonts.scale 的內容附加到父目錄的 fonts.dir
    * 完成後須重啟 Java Process
    
```bash
    cat fonts.dir >> ../fonts.dir
```


## Linux 下為 Java 設定中文字型: Java 的字型對應
* 參考: [http://docs.oracle.com/javase/6/docs/technotes/guides/intl/fontconfig.html](http://docs.oracle.com/javase/6/docs/technotes/guides/intl/fontconfig.html)

### 確認作業環境下是否有中文字型
* JVM 預設會由 jdk/jre/lib/fontconfig.bfc 載入 uming.ttf 
    * uming.ttf - 悠明
    * ukai.ttf - 文鼎
    * NotoSansCJKtc-Regular.otf - Noto Sans CJK 

__查看是否有其他字型__

```
    ls /usr/share/fonts/TrueType/chinese/*.ttf
    sudo find / -name *.ttf
```

### 更改 Java 字型對應檔 
* $JAVA_HOME/jre/lib/fontconfig.properties.*

__依實際情形加入相關設定__
* filename.google_font=NotoSansCJKtc-Regular.otf

```property
    sequence.allfonts=alphabetic,google_font
    
    filename.google_font=NotoSansCJKtc-Regular.otf
    
    alias.google_font=Noto Sans CJK TC
```

## fontconfig.properties 介紹 <span id="java_fontconfig">&nbsp;</span>
* <code>__fontconfig.properties__</code>: Java 用來管理字型映射與選擇的設定檔
* 預設設定檔位置:
    * <span style={{color: '#0044FF'}}>__$JAVA_HOME/lib/fontconfig.properties__</span>
    * <span style={{color: '#0044FF'}}>__$JAVA_HOME/lib/fontconfig.properties.\<locale\>__</span>
    
__設定檔範例__
* 三個關鍵字:
 * ___sequence___ : Java 在特定 Language Group 將選擇使用的字型順序。  
 * ___filename___ : 若有非預設的字型檔，可由 filename 指定設定時的別名，以縮短含路徑全名。
 * ___alias___ : 藉由字型檔別名，將字型檔與作業系統中的 Font Family 建立關聯。  

```property

    sequence.allfonts=alphabetic,google_font
    sequence.zh_tw=alphabetic,trc_font_1,trc_font_2
    
    filename.google_font=NotoSansCJKtc-Regular.otf
    filename.trc_font_1=xxx.ttf
    filename.trc_font_2=yyy.otf
    
    alias.google_font=Noto Sans CJK TC

```

### 搜索順序 Search Sequences 
__syntax__

``` 
    sequence.<group-name>=<fontFile1,fontFile2,...>
    
    範例
    sequence.allfonts=alphabetic,uming,lihei
```

* __sequence__ : 關鍵字 - Java 查找字型時的查找順序設定用
* group-name : 語言群組 Language Group，特定語言或文字系統所需字型的集合名稱。可以自行定義。
* fontlist : 語言代號集合。有內建的代號，也可自行定義代號。
    * 內建例如: alphabetic, japanese
    * 自定義語言代號需搭配 filename 指向特定字型檔: 如 filename.lihei=lihei.ttf
* 範例說明
    * allfonts : 語言群組
    * alphabetic,uming,lihei : 語言代號清單
    * 設定檔中可以有多個 sequence 設定，依序查找。
        * 上述範例意思為: 先以 alphabetic 顯示，弱無法顯示改找 uming，再找 lihei。

### 語言代號與字型檔關聯設定
* 非預設的字型檔，可以取一個別名。並附加至指定的 語言群組。

__syntax__

``` 
    filename.<alias>=<fontfile>
    
    範例
    filename.google_font=NotoSansCJKtc-Regular.otf
```

* __filename__ : 關鍵字 - 定義自訂語言代號
* fontfile : 字型檔路徑
* alias : 別名，設定語言群組時使用
* 範例說明 : 以 google_font 做為路徑\(字型檔) NotoSansCJKtc-Regular.otf 的別名


### alias.\<my_alias>=\<Font Family Name>
* __alias__ : 關鍵字 - 將自定的語言代號 my_alias 歸到 <span style={{color: '#0044FF'}}> __真實的字型分類__ </span> \(字型本身在作業系統中的名字)
* my_alias : 某個自行安裝的字型
* font_family_name : my_alias 在作業系統中的顯示名稱。實際名稱內嵌於字型檔案內、系統已定義，此處只是將自行安裝的字體歸類用。

__syntax__

``` 
    alias.<my_alias>=<font_family_name>
    
    範例
    alias.google_font=Noto Sans CJK TC
```

## Java 測試範例

```javascript
    import javax.swing.*;
    
    public class TestChineseFont {
        public static void main(String[] args) {
            JFrame frame = new JFrame("中文測試");
            JLabel label = new JLabel("顯示中文測試：你好 許功蓋 ！");
            label.setFont(new java.awt.Font("Noto Sans CJK TC", java.awt.Font.PLAIN, 18));
            
            //fallback process
            //label.setFont(new java.awt.Font("Serif", java.awt.Font.PLAIN, 18));
            frame.add(label);
            frame.setSize(400, 200);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setVisible(true);
        }
    }
```

## 關於 Font 類別的建構子

### Font 類別的建構子: family 
* 上方範例是直接填寫 Font Family 所以不經由 fontconfig.properties 處理。 直接找內建字型列表 \(fc-list) 

```
    Font font = new Font("Noto Sans CJK TC", Font.PLAIN, 14);
```

### Font 類別的建構子: generic name 
* 未指定字型或指定 generic name 情境
* 會進入 fallback mapping 流程。
    1. 檢查 fontconfig.properties 中的 sequence.allfonts 順序
    1. <span style={{color: '#0044FF'}}> __根據字元的 Unicode 分配語言群組__ </span>
    1. 對應該群組的字型檔案與字型家族
    1. 套用對應字型顯示

```
    Font font = new Font("Serif", Font.PLAIN, 14);
```

## 中文參考字型
* [Google Noto Sans CJK](https://fonts.google.com/noto#sans-hans)

```bash
    wget https://noto-website-2.storage.googleapis.com/pkgs/NotoSansCJKtc-hinted.zip
    
    unzip NotoSansCJKtc-hinted.zip
```

* [思源黑體](https://github.com/adobe-fonts/source-han-sans/releases)