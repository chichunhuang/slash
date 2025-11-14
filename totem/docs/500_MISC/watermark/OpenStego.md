---
title: OpenStego 基本使用
description: OpenStego
keywords: [OpenStego]
---

> 可以將檔案或文字或圖像資訊藏在圖檔中\(Data Hiding)，或是疊加不可見的浮水印(Digital Watermarking)。  
> 並且相關文字資訊可以加密保存。  
> 允許批次操作。  

## OpenStego 
* 授權方式: GPLv2
* 下載 https://www.openstego.com/
    * windows 有 exe 版本
* 注意事項: 
    * 圖片經壓縮、重新上傳或轉檔，隱藏資訊可能遺失。
    * 載體弱太小，可能無法用來藏太多資訊。
* 支援圖檔類型\(Cover file, 被藏資料的載體):
    * bmp
    * gif
    * jpeg
    * jpg
    * png
    * tif
    * tiff
    * wbmp


## 著作權資訊隱藏: 檔案隱寫 Data Hiding
> 將檔案藏在圖檔之中的方式

__隱藏資訊__
> 將資訊檔藏在 Cover File 中

* 先準備資訊文件，可以是 txt, pdf, image 等格式。當中可記錄要隱藏的資訊。
* 選用載體圖片\(Cover file)。檔案越大能藏的資訊量越多。
* 批次隱藏:
    * 可選取多個檔案用來放置隱藏資訊
    * 亦可採用 wildcard 符號批次選取
    * 指定輸出檔放置資料夾
* 設定密碼與輸出位置
* 執行隱藏

__還原資訊__
> 自 Cover File 中萃取資訊檔

* 選取單一個 Cover File
* 給予當初設定的密碼
* 還原 \(Extract)


## 隱藏圖層疊加: 圖片隱寫 Digital Watermarking
> 在圖檔上加一個不可見的圖層資訊，單向附加。  
> 而後驗證時，再比對圖片載體上是否出現隱藏塗層。  
> 因為是比對圖層，故圖片載體若經過編輯，仍可比對出部分未被覆蓋的隱藏資訊。
  