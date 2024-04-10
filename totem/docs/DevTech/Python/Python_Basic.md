---
title: Python 快速回憶
description: Python 學習所需基本操作
keywords: [Python,Tutorial]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 基本

## 參考資料
 * [Python Standard Library API Document](https://docs.python.org/3/library/index.html)
 * [Python Data Structure](https://docs.python.org/3/reference/datamodel.html#objects-values-and-types)
 * [Python Standard Type Hierarchy](https://zh.wikipedia.org/zh-tw/File:Python_3._The_standard_type_hierarchy-en.svg)
 * [Python Data Structure : devopedia](https://devopedia.org/python-data-structures)


## Encoding

> python script file Encoding 宣告方式，  
> 於首行加上如下宣告  


<CodeBlock
      text={`
   # -*- coding: UTF-8 -*-  
    `}
      language='python'
      showLineNumbers='true'
      /> 
    



## Indentation
> 使用等量的 Space 或是 tab。__建議 4 個 spaces__。  
> 注意: 整個檔案應該用同一種 indentation，避免混用。

## Python 註解方式
```python

# 井字號後面可以寫一行的註解

'''
single quote x 3 or double quote x 3
這裡是多行註解，
不影響程式執行的結果。
'''

"""
single quote x 3 or double quote x 3
這也是多行註解，
"""

```

## PyCharm 總是選取工作中檔案

>
> PyCharm 中的 Project 頁簽->  
> 滑鼠右鍵->  
> Always Select Opened File->  
> 可快速 highlight 作用中檔案
>

## 顯示物件資訊訊
* help(): 列出物件或函數模組的 API 文件內容。

```python
    help()
    
    a=123
    help(a)
```

## 列出物件屬性與方法
* dir(x): 列出物件 x 所有屬性與方法。回傳的是 list。



## 取得類別說明
* __doc__: 類別或方法最上方 triple quotes 包覆範圍的內容。  

```python
    a ='it is a string'
    print(a.__doc__)  
    
    ----
    str(object='') -> str
    str(bytes_or_buffer[, encoding[, errors]]) -> str 
```

## 取得函數說明
* __annotations__

```python

def area(w: 'width' = 10, l: 'length' = 10) -> int:
    return w * l
print(area.__annotations__)
# {'w': 'width', 'l': 'length', 'return': <class 'int'>}

# syntax
# 變數名:註解=預設值
def funcName(varName:'desc'+defaultValue) -> ret type:
    pass
    
```


## 返回物件的內建屬性
* __dict__ 可列出 instance 的所有 field/values

```python
    import hashlib
    print(hashlib.__dict__)
    
    ----
    {'__name__': 'hashlib', '__doc__': 'hashlib module - A common interface to many hash functions.\n\nnew(name, data=b\'\', **kwargs) ...
```



## 列出資訊在 console
* print()

```python
    print('message')
```

## 返回物件類型
* type()

```python
    b = 'another string'
    print(dir(type(b)))
    
    ----
    <class 'int'>
```

## Multi-line String
* 斷行處加上反斜線 \

```python
print(
'this \
is \
a \
book.'
      )
      
      ----
      this is a book.
```


## __main__ 用途
> runtime 時用來辨別 main module 或是 imported modules 時使用

```python
if __name__ == '__main__':
    doSomething()
```

>  __\_\_name\_\___ => 模組名稱，由 interpreter 自動設定的內建變數  
>  在 import modules 時，python 會先把模組相關 *.py 走一輪  
>  程式入口的 py 檔，interpretor 會自動帶入 '__main__'  

功用:
* 辨別 main module 或是 imported modules
* 可用來隱藏 debug 區塊
  

## pass 關鍵字
>
> Python 沒有明顯的 Block 符號，而是以換行與縮排來規範 block。  
> 因此，預期多行的程式區塊若暫時無實作，則需以 pass 關鍵字填補空行，  
> 不然會拋出例外。  
>

_pass example_

```python
for a in range(1, 5):
    pass
else:
    print('\'IndentationError: expected an indented block\' not throw')
```