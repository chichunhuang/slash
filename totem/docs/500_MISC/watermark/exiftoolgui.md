---
title: exiftool GUI 基本使用
description: exiftool GUI
keywords: [exiftool gui]
---

> 圖片於 EXIF 寫入版權資訊工具 exiftool GUI 介紹  
> 官方網站有提到: ExiftoolGUI should run on WinXP up to Win7-64bit.   
> 不過我是在 Win11 下練習測試，功能看起來還算正常。  
> 註: 
>  1. 不同版本操作 UI 上有些許差異，新版本有些功能也被移除。   
>  2. 雖說 5.16 有支援 UTF-8 且可切換語系。但似乎還是有些小問題，所以避免使用 ASCII 以外的字元。  
>  3. 整體來說比較適合不熟悉 cmd 介面或臨時修改少量資料時使用。

## exiftool 授權方式
* 授權方式: [GNU General Public License v3, GPLv3.0](https://github.com/FrankBijnen/ExifToolGui/?utm_source=chatgpt.com)
* 官方網站位置: [https://exiftool.org/gui/](https://exiftool.org/gui/)


## 操作方式
* 基本操作
    * 這邊應該無須多說，直接點開指定檔案。在最右側<code> Metadata </code>視窗直接修改相關數值即可。
* 批次操作
    * 功能入口: Modify
    * 主要是針對 __時間__ 類幫忙批次操作。

## 偏好設定
* 功能入口: Program > Preferences
* 在 4.27 版中可以設定預設的 Author \(Artist)，Copyright 內容，供編輯時直接引用。 \(5.16 版似乎已移除相關功能)

## 使用注意事項
* 雖說 5.16 有支援 UTF-8 且可切換語系。但似乎還是有些小問題，所以避免使用 ASCII 以外的字元。
* 在 Win11 下，似乎首次編輯時 <code> save </code> 按鈕會 disabled! 解決方式為編輯後直接按 <code> enter </code> 爾後 <code> save </code> 按鈕便會 enabled。注意當畫面欄位顯示鵝黃底色時，代表資料僅是站時預覽狀態尚未生效，需按<code> save </code>才正式寫入。若逕行離去則所編輯資料會消失。 

## 其他
* 批次修改時，若會寫 windows bat，可能還是會選擇使用 bat 吧。畢竟作者有提到，GUI 介面只是他將自己常用到的功能做成畫面，方便操作。不過還是很感謝。