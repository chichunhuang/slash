---
title: imagemagick 基本使用
description: imagemagick
keywords: [imagemagick]
---

## FSCapture
* 免費版可加邊框與浮水印，但似乎沒能批次。
* Effect > Edge/Watermark

## imagemagick 
* 授權方式: [ImageMagick](https://imagemagick.org/script/license.php)特化 與 GPL v3, BSD 相容。細節查看官方資料。基本上允許商用。
* ApexOne 會攔截 dll 版









__安裝方式__
* 軟體直接至[官方網站下載](https://imagemagick.org/script/download.php)並參考設定方式

## Imagemagick 主要指令
magick：主要的指令，用於執行各種圖片處理任務。
convert：與 magick 功能相同。
mogrify：與 magick 功能相同，但會直接覆蓋原始圖片，需謹慎使用。
identify：顯示圖片的詳細資訊，如格式、尺寸、解析度等。
composite：將一張或多張圖片合併成新的圖片。

montage：將多張獨立圖片組合成一張拼貼圖。 
## 使用 ImageMagick 進行基本圖片處理
轉換圖片格式：
magick convert input.jpg output.png
調整圖片大小：
magick convert input.jpg -resize 800x600 output.jpg
裁切圖片：
magick convert input.jpg -crop 400x300+100+50 output.jpg
添加浮水印：
magick image.jpg -gravity SouthEast -pointsize 24 -fill white -annotate +10+10 "這是浮水印" image_watermarked.jpg
添加模糊效果：
magick tiger.jpg -blur 5x5 tiger2.jpg 
## 浮水印疊加範例

## 浮水印批次疊加範例


