---
title: Python Package and Module
description: Python Package and Module
keywords: [Python ,Package, Module]
---

# Python Package and Module

[ ___Package___ ](#using_package)
> 
> 指的是放 Python 相關檔案的資料夾。  
> 可簡單想成是一個存放 modules 與 packages 的資料夾。  
> 資料夾中預期會有 <span style={{color: '#0044FF'}}> __\_\_init\_\_.py__ </span> 檔案。  
>> __\_\_init\_\_.py__ 內容可為空，python3+ 中可省略(若考慮向下相容，建議可以保留此慣例)。  
> 
> Package 資料夾可以槽串，同樣預期每個資料夾中都該有 __\_\_init\_\_.py__ 檔案。  
> 在 import 句子中使用時，須由 root package 依序寫清路徑全名(full path)。  

[ ___Module___ ](#using_module)

> 就是 package 資料夾內的 \*.py 檔。  
> 使用上需注意 module name 也是一種變量，所以使用時(命名時)須注意 shadow effect。  

## <span id="using_module">Module 的使用</span>


## Module Importing 的概述
> 
> 與其他程使語言一樣，Python 執行環境中也會有一些基礎的 libs 可使用，  
> 也就是所謂的 [系統預設載入的 Modules](#default_modules)，類似一般 SDK 中的相關 api。  
> 當我們在進行開發時除了原生的 api 外，也可[載入自行開發的工具或第三方所提供的工具](#importing_syntax)來使用。  
> 當載入不同 modules 或工具時則須注意[載入的順序](#loading_shadow)以及[是否出現命名衝突](#module_pitfall)的情形，  
> 以避免載入錯誤或是無法成功在入所需 api 的情形發生。  
> 

* [Module Namespace 與路徑](#module_path)
* [Import 相關語法](#importing_syntax)
* [From Import 相關語法](#from_import_syntax)
* [Module Reload 相關語法](#reload_syntax)
* [系統預設載入的 Modules](#default_modules)
* [模組查詢順序](#loading_shadow)
* [Module 與封裝](#module_envelop)
* [Package 的使用](#using_package)
* [Module 使用陷阱與注意事項](#module_pitfall)


## <span id="module_path">Module Namespace 與路徑</span>
* namespace 指的是模組所在的資料夾階層結構。  
* 路徑則是 Python Env 查找模組時的 namespace 描述方式。  

__絕對路徑(Absolute Path)__
> 個人建議採用的方法，可以規避許多隱藏的風險。  
> 由整個 Python Environment 來看的路徑。每個路徑都是唯一的。  

__相對路徑(Relative Path)__
> 指的是 <span style={{backgroundColor: '#ffd1b3'}}>由 main process 角度來看</span> 的路徑。並非當前使用中的 module 的角度來看。  
> 個人不建議使用。  

## Import 語法使用建議
* 在考量 interpreter 工作方式下，建議<span style={{backgroundColor: '#ffd1b3'}}>優先採用 import [module] as [alias] </span>


__Priority of Importing Syntax__

```python
# 優先建議，by reference import (copy reference)
# import [module] as [alias]
import datetime as dt

# 下面可以當作沒看到

# 次要, 當載入成員是 物件類則 by reference, 是 primitive 則 by value (copy value)
# from [module] import [member] as [alias]
from datetime import date as dt

# 少用, 易發生變數名遮蔽. 搭配 __all__ 使用
# from [module] import *
from datetime import *

# 避用, 相對路徑會增加維護成本
# from [relative_path] import [module] as [alias]
from .. import datetime as dt

```

## <span id="importing_syntax">Import 相關語法</span>
> import statement, by reference 來導入整個 module，   
> 須以完整路徑(full path with namespace) 指到模組 (\*.py)。  
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
* PYTHONPATH: class path 位置，也就是 OS 中的環境變數的設定。
* Standard Library Directories: Python 安裝位置
* \*.py 檔案位置，特別指名資料夾中的 Python 檔。

* 前三項設定預載入的 modules 資訊可以經由 sys.path 查詢。


## <span id="module_envelop">Module 與封裝</span>
> Python 沒有強制資料隱藏機制，但可利用語法慣例，不自動匯入特定模組。  
> 這邊介紹 <span style={{color: '#0044FF'}}> [__from\.\.\. import \* 語法__](#from_import_syntax) </span> (Implicit importing) 時 module 的匯入規則。  

* \_\_init\_\_.py 中 [\_\_all\_\_](#using_package) 列表中的模組一律選取
* 若未定義 \_\_all\_\_，則反向選取。只限制 [single underscore](../Python_Convention#variable_naming_rules) 成員不導入。
* [\_\_all\_\_](#using_package) : 正向列舉
* [single underscore](../Python_Convention#variable_naming_rules) : 反向排除

## <span id="using_package">Package 的使用</span>
> 
> Package 指的是放 Python 相關檔案的資料夾。  
> 可簡單想成是存放 modules 與 packages 的資料夾。 
> 且資料夾中預期(建議)會有 <span style={{color: '#0044FF'}}> __\_\_init\_\_.py__ </span> 檔案。  
> __\_\_init\_\_.py__ 內容可為空，python3+ 中可省略(若考慮向下相容，建議可以保留此慣例)。  

> Package 資料夾可以槽串，同樣預期每個資料夾中都該有 __\_\_init\_\_.py__ 檔案。  
> 在 import 句子中使用時，須由 root package 依序寫清路徑全名(full path)。 

__\_\_init\_\_.py__
> \_\_init\_\_.py 內容空的，或是撰寫下列相關資訊。  

> \_\_all\_\_: 是一個 array，所列的清單是 from m import * (implicitly)時允許被匯入的子模組清單，
> 換言之，__implicitly import__ 時被列出的才能經由 import 匯入。是一種程式碼封裝技巧。  
> 但仍需注意命名衝突與遮蔽問題，  
> 遇到與 Local 變量(local defined var)重名時則不會匯入，改採用 local 變量。  

> 此套件初始化時所需的準備工作(例如資料庫連線)，以利後續使用。
 
> 註: \_\init\_\_.py 在首次匯入時會執行一次相關內容。  

```python
# __init__.py example

__all__ = ["echo", "surround", "reverse"]
```


## ___ \_\_name\_\_ 與 \_\_main\_\_  ___

> \_\_name\_\_ == '\_\_main\_\_'  
> \_\_name\_\_ == 'module_name'

> 當 module (\*.py) 被直接執行時(如經過命令列執行)，該 module 會變成主要執行緒，  
> 此時，模組內建的 \_\_name\_\_ 變數會由預設的模組名稱改為 \_\_main\_\_ 字串。   
> 
> 而如果 module 是被引用(import)，那麼\_\_name\_\_ 會是模組名稱。  
>
> 因此部分的人在寫 __臨時測試碼__ 時會利用此一特性，  
> 也就是說當 module 直接執行時才會呼叫測試碼。  
> 不過，我本身倒是認為，測試碼應該另闢資料夾管理才是。  

___ \_\_name\_\_ 範例___

* 當執行的是 Exam.py (包含 __name__, __main__)

```python
print('Hello: This is Exam class')

class Exam:
    # Python 的型別(冒號後面)僅只是 [提示]。所以應該自行檢查。
    def __init__(self, name: str, score: int, penalty: int):
        if not isinstance(name, str):
            raise TypeError('name should be str')
        self.score = score
        self.penalty = penalty
        self.name = name

    def win(self):
        self.score += 1

    def lose(self):
        self.penalty += 1

    def get_points(self):
        return self.score - self.penalty

    def display(self):
        return self.name + "-" + str(self.get_points())

if __name__ =='__main__':
    print('Testers of Exam class')
    exe1 = Exam("Tom", 80, 10)
    exe2 = Exam("Jack", 95, 30)
    exe3 = Exam("May", 60, 20)
    exe1.win()
    exe2.lose()

    exams = [exe1.display(), exe2.display(), exe3.display()]
    print(exams)
    
# Hello: This is Exam class
# Testers of Exam class
# ['Tom-71', 'Jack-64', 'May-40']    
```


* run.py

```python
import Exam as ex

print(type(ex))
# <class 'module'>

# console:
# Hello: This is Exam class (這邊是載入時所執行)
# <class 'module'>

```


* 當執行的是 Exam2.py (不包含 __name__, __main__)

```python
print('Hello: This is Exam class')

class Exam:
    # Python 的型別(冒號後面)僅只是 [提示]。所以應該自行檢查。
    def __init__(self, name: str, score: int, penalty: int):
        if not isinstance(name, str):
            raise TypeError('name should be str')
        self.score = score
        self.penalty = penalty
        self.name = name

    def win(self):
        self.score += 1

    def lose(self):
        self.penalty += 1

    def get_points(self):
        return self.score - self.penalty

    def display(self):
        return self.name + "-" + str(self.get_points())

print('Testers of Exam class')
exe1 = Exam("Tom", 80, 10)
exe2 = Exam("Jack", 95, 30)
exe3 = Exam("May", 60, 20)
exe1.win()
exe2.lose()

exams = [exe1.display(), exe2.display(), exe3.display()]
print(exams)
```

* run.py

```python
import Exam as ex2

print(type(ex2))
# <class 'module'>

# console:
# Hello: This is Exam class 
# Testers of Exam class 
# ['Tom-71', 'Jack-64', 'May-40'] (# 所有測試碼都會被執行)
# <class 'module'>

```
    
## <span id='module_pitfall'>Module(\*.py) 使用陷阱與注意事項</span>

__雜七雜八注意事項__
* module name 也是一種變量，所以須注意命名衝突
* Python Env 在載入 libs 時會先執行一次
* 以 import 指令載入的程式碼是 by reference 使用
* 以 from import 指令載入的程式碼物件類的是 by reference 使用，純值類的則時 by value。
* implicitly import 需注意是否發生成員遮蔽情形
* <span style={{backgroundColor: '#ffd1b3'}}>forward reference</span>: 向前引用，Python interpreter 是依句子順序匯入與編譯。因此，無法使用後方定義變數，也無法理解後方匯入的模組。
* 遞迴導入: 相互 import 的 modules 應避免使用，可能會造成死循環。