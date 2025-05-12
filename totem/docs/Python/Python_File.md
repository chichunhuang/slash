---
title: Python 檔案操作
description: Python 中操作 File 相關
keywords: [Python,File]
---

# Python File 操作

> 通常檔案會牽涉到字串處理，斷行處理  
> 參考資訊:  
>
> [Python String 處理](./Python_Typing_String)  
>> strip(), replace(), eval(), pickle module      
>
> [Python String 格式化](./Python_Typing_StringFormatting)  
>> str.format(), mod formatting expression  

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



## 檔案關閉 <span id="Closable_FileStream">&nbsp;</span>

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
    * file.readlines() : 回傳 String list
    * file.readline() : 回傳結果<span style={{color: '#0044FF'}}> __包含換行符號__ </span>  
* closable : 可混搭上方 closable 語法由 VM 自動關閉資料流。  
* Python <span style={{color: '#0044FF'}}> __文末__ </span> 與 <span style={{color: '#0044FF'}}> __文中__ </span> <span style={{backgroundColor: '#ffffb3'}}>空行</span> 在讀取時的差異。  
    * 文中空行: readline 回傳換行符號 (\\n) 
    * 文末空行: readline 回傳空字串  

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


# 一次讀一行 line
file = open("statements.txt", "r")
while True:
    content=file.readline()
    if not content:
        break
    print(content)
file.close()

# 一次讀一行 line
with open ('note.txt', 'r') as f:
    for line in f:
        doSomething()
f.close()        

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

## with as: 定義一個__臨時的 codeblock__ <span id="with_as_codeblock">&nbsp;</span>

* with as 用在檔案開啟的__暫時__資料流區塊範例
* 注意: 這邊需要一個冒號 : 做 Multi-line Block 範圍限定 
* 臨時區塊使用情境(臨時與收尾動作)
    * 本章節出現多次的 [Closable File Stream](#Closable_FileStream)
    * [例外處理: with as context management](./Advanced/Python_2_Exception_Error#with_as_codeblock)
    * [臨時的精確度限制區塊](#accurracy)
    * Web 的 socket connection 處理
    * DAO 的 DataSource 的 connection/disconnection 處理


__with as syntax__ <br/>
* expression 得到的物件又被稱為: 環境管理器(context manager)、或環境管理協議(context management protocol)
* open function 所得到的 file 物件，為可自動關閉 IO 的 file Object 稱為 context manager。此時的物件非一般的 file。

```python
with <expression> as <variable_alias>:
    doAction()
```


__Closable File Stream Example__ <br/>

```python
    
with open(file_path) as file_alias:
    # do....


# 一次讀一行 line
with open ('note.txt', 'r') as f:
    for line in f:
        doSomething()
f.close()   


# 一次讀全部行 lines
with open ('note.txt', 'r') as f:
    content=f.readlines() # list of strings
f.close()


# 一次讀多個檔案
with open('info.log', 'r') as info, open('error.log', 'r') as error:
    do_something()       

# python 3.10+ 
with (
    open('info.log', 'r') as info, 
    open('error.log', 'r') as error
):
    do_something()     
```


__with as 用在定義一個__臨時__的精確度限制區塊範例__ <span id="accurracy">&nbsp;</span><br/>

```python
import decimal
with decimal.localcontext() as ctx:
    ctx.prec = 5
    #do something
```


## pandas
* 使用 pandas 讀取資料

```python
import pandas as pd

data1 = pd.read_csv(r'C:\temp\filea.csv')
data2 = pd.read_table("filepath", dep='\t')
# ...可讀取多種格式

data1.to_csv()

```


## Text File Parsing 完整範例

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

## Text File Writing 完整範例

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


## eval(_str) 程式片段字串轉成 Python script
* 
> 這裡指的是例如 parse 一個 *.py。  
> 所得到的字串內容是可以直接轉成可執行的 python script 內容。  
> 結果類似 import 一段程式碼。  

```python
# Python eval() : from string to python script
strA = '[1,2,3]'
print(type(strA))
# <class 'str'>

listA = eval(strA)
print(type(listA))
print(listA)
# <class 'list'>
# [1, 2, 3]

```

## Python 資料夾走訪

* [Python 資料夾走訪](./Misc/Python_3_File_and_Dir)



## misc 相關 modules(未整理...)
* pandas
* sys.stdout, sys.stderr
* os
    * https://docs.python.org/zh-tw/3/library/os.html



```
# print() 的預設
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
#
#下兩者相同(差在換行)
import sys
print('hello world!')
## hello world!
sys.stdout.write('hello world!\n')
## hello world!
#
#
# 輸出至 file, console 不再顯示
with open('test.log', 'a') as f:
    print('hello world!', file=f)
##
import sys
print('hello world!', file=sys.stderr)
```