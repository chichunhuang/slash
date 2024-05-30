---
title: 關於 Python 檔案編碼
description: Python Encoding
keywords: [Python,Encoding]
---

# 關於 Python 檔案編碼
* 在擋案檔頭第一行加上編碼宣告。(若未標註檔案類型下)

## 編碼宣告

__編碼宣告 範例__

```python 
# -*- coding: UTF-8 -*-
or
# -*- coding: Big5 -*-
```

__Linux 下標註為 Python script 檔__
* windows 可由副檔名得知
* linux 下則可以經由 __python 安裝路徑__ 宣告，告知檔案類型。
* 範例為: python 安裝在 /usr/bin/python

```python
#!/usr/bin/python
```

__完整範例__

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-
```



## Python 轉碼
* sys.getdefaultencoding() 可以得知預設編碼
* 注意 
    * UTF-8 v.s. Big5 間字數的差異，可能會造成 UTF-8 無法完全降轉到 Big5。
    * str.encode() 等同於將 str 以系統預設編碼 encode:  str.encode(sys.getdefaultencoding())
    * encode : 將資料依據指定的編碼格式編碼成 bytes, 所以使用 bytes 時需搭配 encoding 才能正確解析內容。 
    * decode : 將 bytes 資料依據指定的編碼格式轉至不同的 **字符集** ，以便接下來在不同編碼環境下能正確顯示。
* Python 3.12.1 下 轉換流程: 檔案依原始編碼解為String > String 再依新編碼編為 byes > bytes 再編碼回 String


```python

# myString = '許功蓋'
#
# encoded = myString.encode() # 等同於 myString.encode('系統預設編碼')
# encoded2 = myString.encode(sys.getdefaultencoding())

print("System: ", sys.getdefaultencoding())
# System:  utf-8

raw_str = 'ABC123中文許功蓋'; # 依系統預設編碼建立的字串
sysEncoded = raw_str.encode()
print(sysEncoded)
# b'ABC123\xe4\xb8\xad\xe6\x96\x87\xe8\xa8\xb1\xe5\x8a\x9f\xe8\x93\x8b'

str_utf8 = raw_str.encode("UTF-8")
print("UTF-8：", type(str_utf8))
print("UTF-8：", str_utf8)
# UTF-8： b'ABC123\xe4\xb8\xad\xe6\x96\x87\xe8\xa8\xb1\xe5\x8a\x9f\xe8\x93\x8b'
print("UTF-8：", str_utf8.decode('UTF-8', 'strict'))

str_B5 = raw_str.encode("Big5")
print("B5：", type(str_B5))
print("B5：", str_B5)
# B5： b'ABC123\xa4\xa4\xa4\xe5\xb3\\\xa5\\\xbb\\'
print("B5：", str_B5.decode('Big5', 'strict'))
```

__Python 3.12.1 下的測試過程__

```python 
import sys

# 系統預設編碼
print(sys.getdefaultencoding())

with open(r'D:\tmp\B5.txt', 'r', encoding='Big5') as fromFile, open(r'D:\tmp\B5_U8.txt', 'w', encoding='UTF-8') as toFile:
    content_B5 = fromFile.read()                    # fromFile 讀取時已用 Big5 decoded
    print(content_B5)                               # <class 'str'>, 許功蓋
    bytes = content_B5.encode('UTF-8')              # big5 string 轉 utf-8 bytes
    print(bytes)                                    # <class 'bytes'>, b'\xe8\xa8\xb1\xe5\x8a\x9f\xe8\x93\x8b'
    result_U8 = bytes.decode('UTF-8')               # utf-8 bytes 轉成 utf-8 string
    print(result_U8)                                # <class 'str'>, 許功蓋
    toFile.write(result_U8)

with (
    open(r'D:\tmp\U8.txt', 'r', encoding='UTF-8') as fromFile,
    open(r'D:\tmp\U8_B5.txt', 'w', encoding='Big5') as toFile
):
    content_U8 = fromFile.read()  # fromFile 讀取時已用 UTF-8 解碼
    print(content_U8)
    bytes = content_U8.encode('Big5')
    print(bytes)
    result_B5 = bytes.decode('Big5')
    print(result_B5)                               # 這邊在 IDE 環境下仍能正確顯示的原因是，IDE 有做額外顯示處理。
    toFile.write(result_B5)

```