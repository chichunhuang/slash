---
title: Python Basic
description: Python 學習所需基本操作
keywords: [Python,Tutorial]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 基本

## Encoding

> python script file Encoding 宣告方式，  
> 於首行加上如下宣告  


<CodeBlock
      text={`
   # -*- coding: UTF-8 -*-  
    />
    

# Indentation
> 使用等量的 Space 或是 tab。建議 4 個 spaces。  

# 總是選取工作中檔案
> PyCharm 中的 Project 頁簽  
> 滑鼠右鍵  
> Always Select Opened File  
> 可快速 highlight 作用中檔案

# 顯示物件資訊訊
* help()

```
    help()
    
    a=123
    help(a)
```

# 列出物件屬性與方法
* dir()


# 列出資訊在 console
* print()

```
    print('message')
```

# 返回物件類型
* type()

```
    b = 'another string'
    print(dir(type(b)))
    
    ----
    <class 'int'>
```

# 取得類別說明
* __doc__

```
    a ='it is a string'
    print(a.__doc__)  
    
    ----
    str(object='') -> str
    str(bytes_or_buffer[, encoding[, errors]]) -> str 
```

# 返回物件的內建屬性
* __dict__ 可列出 instance 的所有 field/values

```
    import hashlib
    print(hashlib.__dict__)
    
    ----
    {'__name__': 'hashlib', '__doc__': 'hashlib module - A common interface to many hash functions.\n\nnew(name, data=b\'\', **kwargs) ...
```


# Multi-line String
* 斷行處加上反斜線 \

```
print(
'this \
is \
a \
book.'
      )
      
      ----
      this is a book.
```


# __main__ 用途
> runtime 時用來辨別 main module 或是 imported modules 時使用

```

if __name__ == '__main__':
    doSomething()
```

>  __name__ => 模組名稱，由 interpreter 自動設定的內建變數  
>  在 import modules 時，python 會先把模組相關 *.py 走一輪  
>  程式入口的 py 檔，interpretor 會自動帶入 '__main__'  

功用:
* 辨別 main module 或是 imported modules
* 可用來隱藏 debug 區塊
  
