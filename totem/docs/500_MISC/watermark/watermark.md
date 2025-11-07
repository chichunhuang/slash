---
title: 浮水印三兩事
description: Watermark
keywords: [Watermark]
---

> 紀錄幾個浮水印製作方式  
> 期待達到:  
> &nbsp;&nbsp;1.能嵌入作者資訊、版權聲明或識別資訊，以便主張著作權   
> &nbsp;&nbsp;2.不嚴重影響畫面呈現  


## 三種可選方式
* EXIF
	* [ExifTool 介紹](./exiftool)
	* [ExifTool GUI](./exiftoolgui)
* 半透明浮水印 [ImageMagick 介紹](./imagemagick)
* 隱藏式浮水印 [OpenStego 介紹](./OpenStego)

## 關於 License

| 軟體 | 授權方式  | 資料來源  |
| ------- | ----- | ----------- |
| **[ExifTool](https://exiftool.org/)** | [Perl (可選 GPL 或 Artistic License)][1] | you can redistribute it and/or modify it under the same terms as [Perl][2] itself.| 
| **[ExifTool GUI](https://exiftool.org/gui/)** | GNU General Public License v3 | [GPLv3.0](https://github.com/FrankBijnen/ExifToolGui/?utm_source=chatgpt.com) | 
| **[ImageMagick](https://imagemagick.org/)** | [ImageMagick](https://imagemagick.org/script/license.php) 與 GPL v3 相容。 | [ImageMagick 特殊規格](https://imagemagick.org/script/license.php?utm_source=chatgpt.com)<br/>可自由下載、使用、修改、散布，且可包含在商業產品中。 | 
| **[OpenStego](https://www.openstego.com/)** | GNU General Public License 2.0 | [OpenStego GPL v2](https://www.openstego.com/about?utm_source=chatgpt.com) | 

## 
[1]: https://github.com/exiftool/exiftool/pull/177?utm_source=chatgpt.com "Add LICENSE by mrodus · Pull Request #177 · exiftool/exiftool"
[2]: https://exiftool.org/?utm_source=chatgpt.com "ExifTool by Phil Harvey"


## 👉 建議組合策略
* 原始圖：保留完整 EXIF + 隱藏式浮水印
* 網站展示圖：縮圖 + 半透明浮水印(另存新檔)
* 備份：保留原始嵌入版，以便日後權利主張