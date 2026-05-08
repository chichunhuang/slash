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


## 建議組合
* 原始圖：依次執行 EXIF + 半透明浮水印 + 隱藏式浮水印
* 網站展示圖：縮圖 + 半透明浮水印\(另存新檔)
* 備份：保留原始嵌入版，以便日後權利主張


## 其他浮水印: AI 生成檢查相關浮水印
###  Google SynthID: 
    * Google 會為自身提供的生成工具所創建的資料內容加上 SynthID，以判別內容是否由 AI 創建。SynthID 除影片圖像外，純文字內容也藉由 __詞彙選擇機率分佈__ 藏 SynthID。
    
### C2PA/Content Credentials
ChatGPT and DALL-E
    * C2PA: Coalition for Content Provenance and Authenticity
    * 可用以證明檔案的來源與修改歷程
    * 將 meta data 藏在檔案 header: 例如 __數位簽章__ \(Digital Signature) 與 __雜湊值__ \(Hash) 藏在 JPEG 的 APP11
    * C2PA 資訊大約造成檔案體積增加 3%: 主要是 __完整的數位憑證鏈__ 與 ___原始___ __圖檔的 Thumbnail__ 及其他少量結構化資料所造成。
    * ref: https://help.openai.com/zh-hant/articles/8912793-c2pa-in-chatgpt-images
    * Tools: 
        * 線上檢查 OpenAI 相關工具 或 DALL-E 模型生成所建立的圖片: [Content Authenticity](https://verify.contentauthenticity.org/)
        * CLI 工具: c2patool
        * Python C2PA SDK: pip install c2pa-python
        * Nodejs C2PA Tools: c2pa-js / c2pa-node

```bash
    //詳細的 JSON 報告
    c2patool image.jpg --detailed
    
    //取出原始圖檔的縮圖
    c2patool image.jpg --output-dir ./extracted_info
```

```python
    import c2pa
    # 讀取並驗證檔案
    try:
        manifest_json = c2pa.verify_from_file_json("example.jpg", "./output_data")
        print(manifest_json)
    except Exception as e:
        print(f"驗證失敗: {e}")
```