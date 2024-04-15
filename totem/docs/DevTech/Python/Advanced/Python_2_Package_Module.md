---
title: Python Package and Module
description: Python Package and Module
keywords: [Python ,Package, Module]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python Package and Module

[ ___Package___ ](#using_package)
> 
> 指的是放 Python 相關檔案的資料夾。資料夾中預期會有 <span style={{color: '#0044FF'}}> __\_\_init\_\_.py__ </span> 檔案。  
>> __\_\_init\_\_.py__ 內容可為空，python3+ 中可省略(若考慮向下相容，建議可以保留此慣例)。  
> 
> Package 資料夾可以槽串，同樣預期每個資料夾中都該有 __\_\_init\_\_.py__ 檔案。  
> 在 import 句子中使用時，須由 root package 依序寫清路徑全名(full path)。  

[ ___Module___ ](#using_module)

> 就是 package 資料夾內的 \*.py 檔。  
> 使用上需注意 module name 也是一種變量，所以使用時(命名時)須注意 shadow effect。  

## <span id="using_module">Module 的使用</span>

## Import 路徑
__絕對路徑(Absolute Path)__
> 由整個 Python Environment 來看的路徑。每個路徑都是唯一的。  

__相對路徑(Relative Path)__
> 指的是 <span style={{backgroundColor: '#ffd1b3'}}>由 main process 角度來看</span> 的路徑。並非當前使用中的 module 的角度來看。  


## Module Importing 的概述
> 
> 與其他程使語言一樣，Python 執行環境中也會有一些基礎的 libs 可使用，  
> 也就是所謂的 [系統預設載入的 Modules](#default_modules)，類似一般 SDK 中的相關 api。  
> 當我們在進行開發時除了原生的 api 外，也可[載入自行開發的工具或第三方所提供的工具](#importing_syntax)來使用。  
> 當載入不同 modules 或工具時則須注意[載入的順序](#loading_shadow)以及[是否出現命名衝突](#module_pitfall)的情形，  
> 以避免載入錯誤或是無法成功在入所需 api 的情形發生。  
> 

* [Import 相關語法](#importing_syntax)
* [From Import 相關語法](#from_import_syntax)
* [Module Reload 相關語法](#reload_syntax)
* [系統預設載入的 Modules](#default_modules)
* [模組查詢順序](#loading_shadow)
* [Module 使用陷阱](#module_pitfall)
* [Module 與封裝](#module_envelop)
* [Package 的使用](#using_package)

## <span id="importing_syntax">Import 相關語法</span>
> import statement, by reference 來導入整個 module，須以完整路徑(full path with namespace) 指到模組 (\*.py)。  
> 同 package 可用 shortcut path。 

___import 語法___

```python
import [namespace.module]
```

__hello.py__

```python
def sayHelloWorld():
    msg = 'Hello World'
    print(msg)
    return msg;


def say(msg: str):
    print(msg)
    return msg;
```

__totem.math.py__

```python

pi = 3.14159

def add(a: int, b: int):
    return a + b
```

__run.py__

```python
import hello   #same package
import totem.math # diff package

hello.sayHelloWorld() # Hello World

hello.say("Good Day") # Good Day

sum = totem.math.add(10, 20)
print(sum) # 30
```


註: import 可導入的不單是 Python 檔，下列也在允許範圍
* \*.py
* \*.pyc
* \*.zip
* \*.dll
* \*.pyd
* \*.java 


## <span id="from_import_syntax">From Import 相關語法</span>
> from...import... statement 用來導入模組中的特定成員。如變數(variable)、函數(function)、類別(class)、模組(module)等。  
> from import statement: by reference 導入物件類成員，  
> by value 來複製 primitive 類成員，  


___from\.\.\. import 語法___

__run2.py__

```python
from [module with namespace] import [name1, name2, ...]
```

```python
from hello import say as talk
from totem.math import pi as CONST_PI

talk("Yahoo~") # Yahoo~

print(CONST_PI) # 3.14159
```


___from\.\.\. import \* 語法___

> <span style={{backgroundColor: '#ffd1b3'}}>不建議使用，相對上來講風險較高。容易發生命名衝突與成員覆寫。</span>

```python
from [module with namespace] import *
```

__run3.py__

* 使用 asterisk 隨然可以方便一次匯入所有成員，但有可能不小心發生命名衝突。甚至覆蓋既有成員內容。

```python
from hello import *
from totem.math import *

say("implicitly import by asterisk")

print(pi) #3.14159

pi = 3.14
print(pi) # 3.14, variable conflict
```



## <span id='reload_syntax'>Module Reload(重新載入模組)</span>
> reload 指的是在不中止 Python 程序的前提下，  
> 重新載入相關模組(重新讀取文件的 source code)。  
> 是 Python3+ 後出現的新功能。  
> 
> reload 會重新執行頂層的 statement。  
> 物件的部分需要等到重新使用重載變量時才會使用新載入的模組。  
 

___reload 語法___

* reload 函數在 imp 模組

```python
from imp import reload
reload(module)
```


__totem.helloworld.py__

```python
import time
print('Hello World')

current_timestamp = time.time()

def hello(name: str):
    print(f'Hell, {name}', current_timestamp)

```


__run4.py__

```python
from imp import reload
import totem.hellowrold

totem.hellowrold.hello("Totem")
totem.hellowrold.hello("Tim")
# Hello World
# Hell, Totem 1713194539.5623431
# Hell, Tim 1713194539.5623431 # 未 reload 時，先前取出的 timestamp 不變。

reload(totem.hellowrold)
totem.hellowrold.hello("Winnie")
totem.hellowrold.hello("Wendy")
# Hello World
# Hell, Winnie 1713194539.5633183 # reload 後，整個 source 重讀，也一併更新了 timestamp 。
# Hell, Wendy 1713194539.5633183
```


## <span id='default_modules'>系統預設載入的 Modules</span>
__sys.modules 變數__

> sys.modules: 可用來查詢 <span style={{color: '#0044FF'}}> __已載入的模組__ </span>資訊。
> 回傳結果為一個 dict，內容包含已導入模組名稱與 api 實際檔案位置。

```python
import sys
print(sys.modules) # <class 'dict'>, 實際匯入檔清單
```

___ sys.path 變數___
> sys.modules 可以列出已載入 modules __檔案位置__，   
> 而 sys.path 則是列出上述檔案所在的 __資料夾__ 位置。  

```python
import sys
print(sys.path) # <class 'list'>, 實際匯入檔案所在資料夾
```

___ \_\_pycache\_\_ 資料夾___ 
> Python 在導入 modules 時，會先將欲 <span style={{color: '#0044FF'}}> __導入的 modules 先執行一次__ </span>。  
> 而過程中所產生的 byte code (\*.pyc 檔)則會統一放在 \_\_pycache\_\_ 資料夾下。  
> 也就是說 \_\_pycache\_\_: 可用來查詢已 Compiled 的程式碼(byte code)儲存位置相關資訊。  
> 另外，執行時若原始 \*.py 未做異動則不會重新 compile \*.py 而是直接取用 \*.pyc 檔，以提高效能。  



## <span id='loading_shadow'>Python Env(VM) 模組載入順序: Shadow effect</span>

___Python 載入 Modules 時的查詢路徑___

* 有可能會依平台與 Python 版本而有所差異
* Python 的 home directory: 程式碼所在位置
* PYTHONPATH: class path 位置
* Standard Library Directories: Python 安裝位置
* \*.py 檔案位置，特別指名資料夾中的 Python 檔。


## <span id='module_pitfall'>Module(\*.py) 使用陷阱</span>
22
___Shadow Effect___

___by reference___

___by value___




## <span id="module_envelop">Module 與封裝</span>
24

## <span id="using_package">Package 的使用</span>


## import v\.s\. from import
* 數值變數: by value / by reference 使用
* 物件一律 by reference 
* import 一律 by reference 
* <span style={{color: '#0044FF'}}> __different of value__ </span>: 
    * import => by reference
    * from  => by value


## ___ \_\_main\_\_ ___

    
## 雜七雜八注意事項
* module name 也是一種變量，所以須注意命名衝突
* Python Env 在載入 libs 時會先執行一次
* 以 import 指令載入的程式碼是 by reference 使用
* 以 from import 指令載入的程式碼物件類的是 by reference 使用，純值類的則時 by value。