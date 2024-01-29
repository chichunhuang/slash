---
title: Python File Operation
description: Python 中操作 File 相關
keywords: [Python,File]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python File 操作

# 基本操作
## 檔案開啟
* Syntax
    * filename: 絕對或相對路徑: raw text
        * ex: r'D:\tmp\tyemplate_utf8.txt'
    * mode: default 'rt'
        * r: read
        * b: binary
        * t: text
        * w: write
        * a: append
    * encoding: utf-8, big5, 錯誤時拋出 UnicodeDecodeError
        * ex:  encoding='UTF-8'

```python
fp=open(<filename>,<mode>,<encoding>)

with open(r'D:\template_utf8.txt', 'r', encoding='UTF-8') as file:
    # pass
```



## 檔案關閉

* 手動
    * 手動關閉時自行呼叫 f.close()

```python
fp.close()
```


* closable 
    * 自動關閉時採用 closable 語法
    * 離開 with scope 時 python 代為關閉

```python
with open(<filename>) as f:
    # do something
```


## 檔案讀取
* Syntax
    * file.read() 
    * file.read([size]) : 依指定 size 決定回傳內容
    * file.readline() : 回傳結果包含換行符號
    * file.readlines() : 回傳 String list
* closable : 可混搭上方 closable 語法由 VM 自動關閉資料流。

```python
dataFile=fp.read()

dataByte=fp.read([size])


file = open("compress.zip", "rb")
data = file.read(10)
while data:
    print(data)
    data = file.read(10)
file.close()

file = open("note.txt", "r")
content = file.read(20)
print(content)
file.close()


file = open("statements.txt", "r")
while True:
    content=file.readline()
    if not content:
        break
    print(content)
file.close()


file = open("statements.txt", "r")
content=file.readlines()
print(content)
file.close()
```
* 若是 'b' mode(binary mode): size 代表 byte 長度，回傳的 data 是位元組串列 (sequence of byte) 
* 若是 't' mode(text mode): size 代表字元長度，回傳的 data 是 String  

## 檔案寫入
* Syntax
    * fp.write(data)
    * fp.writelines(data_list)


```python
fp.write(data_String)
# 把字串 data 寫入 file

fp.writelines(data_list)
# 斷行需自行處理，自行加入斷行符號於指定位置。

```

## Exception 處理
* try except finally

```python
try:
    with open(r'D:\tmp\file_not_found.txt', 'r', encoding='UTF-8') as file2:
        for line in file2.readlines():
            print(line)
except: 
    print('file not FOUND')
finally:
    print('send error mail')

```

# with as: 定義一個__臨時的 codeblock__

* with as 用在檔案開啟的__暫時__資料流區塊範例
* 注意: 這邊需要一個冒號 : 做 Multi-line Block 範圍限定 

```python
with open(file_path) as file_alias:
    # do....
```


* with as 用在定義一個__臨時__的精確度限制區塊範例

```python
import decimal
with with decimal.localcontext() as ctx:
    ctx.prec = 5
    #do something
```


# pandas
* 使用 pandas 讀取資料

```python
import pandas as pd

data1 = pd.read_csv(r'C:\temp\filea.csv')
data2 = pd.read_table("filepath", dep='\t')
# ...可讀取多種格式

data1.to_csv()

```


# Text File Parsing 完整範例

```python
from datetime import datetime

try:
    with open(r'D:\tmp\Explain_utf8_2.txt', 'r', encoding='UTF-8') as file2:
        for line in file2.readlines():
            print(line)
except: 
    print('error')
finally:
    print("Finished: ", datetime.now().strftime("%H:%M:%S")) 
```

# Text File Writing 完整範例

```python
from datetime import datetime

try:
    with open(r'D:\tmp\ABCs.txt', 'w', encoding='UTF-8') as file2:
        # file2.writelines(['a','b','c','d'])
        for line in ['a','b','c','d']:
            file2.write(line + "\n")
except: 
    print('error')
finally:
    print("Finished: ", datetime.now().strftime("%H:%M:%S")) 
```