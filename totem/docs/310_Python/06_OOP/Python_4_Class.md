---
title: Python Class 介紹
description: Python Class 介紹
keywords: [Python,Class Structure]
---

# Python Class 介紹
> Pythonic way 針對物件與類別上的 terminology，與 Java 有些差異。  
> 因為 Python 是直譯是語音，所有的腳本(Script) 都會被 interpreter 直譯。  
> 所以，在 Python 的世界中 class script 被直譯後也會被稱為 object (class object)。  
> 由 class object 因調用而產生出的物件稱為 instance object。  
> 在 Python Environment 中似乎也沒有 Java heap 的結構。


## <span id="cls_structure">Python Class 結構</span>

<pre>
*.py<br/>
Python Script --> Class Object --> Instance Object <br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\> Instance Object   
</pre>


## <span id="cls_constructor">建構子</span>
> 
> Python 中 Class 建構子為 \_\_init\_\_ 函數  
> 另外，因為 Python 的函數(包含建構子)都支援 varArgs, kwArgs，
> Python 建構子本身即具有多載特性。    
> 因此，Python 沒有如 Java 般以 this 呼叫 overloaded 建構子的語法。 

* 參考 [繼承結構下的建構子: super](./Python_4_Inheritance_Basic#inheritance_constructor)
* 參考 [Factory Method: 使用 Class Method 語法](./Python_4_Class_Members#cls_method_Factory)

```python
class Profile:
    def __init__(self, name, gender, *args, **kwargs):
        self.name = name
        self.gender = gender
        self.infoList = args
        self.infoMap = kwargs

# Fundamental constructor
p2 = Profile('Totem', 'Male')       

# Chimera Style
p = Profile('Winnie', 'Female', 
            'Shopping', 'Reading', # varArgs
            height='160', addr='TW', tel='0955-555-555') #kwargs

print(p.name) # Winnie
print(p.infoList) # ('Shopping', 'Reading')
print(p.infoMap) # {'height': '160', 'addr': 'TW', 'tel': '0955-555-555'}
```

## <span id="cls_nameing_rules">命名慣例:</span>

>
> __package name__: lowercase  
> __class name__: CamelCase  
> __member name__: lower_case with under_scores  
> __exception name__: CamelCase  
> __constant name__: UPPERCASE  
> 

> Java 中的 this => Python 中的 self

> 建構子為 \_\_init\_\_ 函數


__biologe.animal.py__
 
```python
class Animal:
    alive = True
    def __init__(self, gender: bool, voice: str):
        self.voice = voice
        self.gender = gender
        self.age = None

    def get_voice(self):
        return self.voice

    def get_gender(self):
        if self.gender:
            return "Male"
        else:
            return "Female"

    def get_display(self):
        return f'sex:{self.gender}, voice={self.voice}, age={self.age} '
```

__run.py__

```python

from biology.animal import Animal

dog = Animal(True, voice="bark")
print(dog.getVoice())
print(dog.getGender())

```


## <span id="cls_members">方法與屬性</span>

> Python 
> 允許 __instance object__ <span style={{backgroundColor: '#ffd1b3'}}>在 class 定義區塊外</span> 自行添加新的屬性與函數。  
> 而相關新增成員僅生效於 instance object 身上。

> 允許 __class object__ <span style={{backgroundColor: '#ffd1b3'}}>在 class 定義區塊外</span> 自行添加新的屬性與函數。  
> 但相關新增成員會生效在除了 class instance 外也會在 instance object 身上生效。

> 同時新增同名變數，各自擁有一個私有變數。  
> 這情境也可說成 instance object 遮蔽了 class object 成員  

> 大部分書籍會討論到這項功能。
> 沒錯，語法上來說這是一個功能，但很明顯的他會造成管理與維護上的成本。  
> 所以應該避開。
> 可以從 class object 身上來防呆。  
> 如下:  
> Pythonic Way 變數命名規則:  
> 基本上不該建立同名變數  
> [變數命名規則](../Python_Convention): 例如 class object 追加的成員以 single underscore 為前綴，宣告是 class level。    
> [常數設計方式](../Advanced/Python_2_Constant): 也許可以用常數或雙底線告知，這是 class level 用的成員。   
> 

* 這段落僅是個人記憶與理解用，並未深層研究 Python Interpreter 實際運方式作方式。  
* 由 Python class 建立 instance object 過程比較類似 POM 或 XML 的繼承。
* 可以想成是，<span style={{backgroundColor: '#ffd1b3'}}>composite 結構。 Instance Object 吃了一份 Class Object 結構在身上</span>。 
* 所以 Object Instance 擁有 Class Object 的 reference。
* Python 允許物件 instacne 建立後，再追加成員變數。
* 由此推導，
* 當 Class Object 事後追加成員時，Instance Object 因為擁有 Class reference，所以也能讀取追加成員。
* 反之當 Instance Object 事後追加成員時，Class Object 因無法得知 Instance reference，所以無從得知。
* 但當 Class / Instance Object 都追加同名成員時，因為 Shadow effect 造成的影響。Instance 換改用私有成員。

## <span id="cls_anonymous">___Variable 追加___</span>

```python
from biology.animal import Animal

dog = Animal(True, voice="bark!")
cat = Animal(False, voice="mew~")
print(dog.get_voice())
print(dog.get_gender())

# 遮蔽發生, 避免使用
dog.alive = False # alive 遮蔽,變成 dog scope 的成員.
print(Animal.alive)  # True, 自作孽該死, class 變數名應該給予警示。
print(dog.alive)  # False

dog.eat = 'bone' # 正常追加的 instance variable

Animal._action = 'Run'
print(dog._action) # Run

# IDE 也會出現警示: Access to a protected member _action of a class
dog._action = "Swim" # 見到 underscore prefix/suffix 應該要警覺!! We are all consenting adults!
print(dog._action)  # shadow effect, 變數遮蔽, 自作孽該死, 注意命名慣例 _X. 

```


## ___Instance Object 追加 Method___ <span id='instance-object-append-method'>&nbsp;</span>
> 以 Java 作比喻，我的理解是:  
> Instance Object 類似 Class 的子類別，當想生出一個 anonymous 子類並擴充功能時使用。  

步驟: <br/>
1. 先建立一個新 method
1. instance object 再以新成員變數與 method 建立關聯
1. instance object 以新成員觸發新行為

```python
import functools

class Student:
    def __init__(self, name: str, grade: int, scores=[]):
        self.name = name
        self.grade = grade
        self.scores = scores

def mean(scores: list = []) -> float:
    if len(scores) == 0:
        return 0
    sum = functools.reduce(lambda a, b: a + b, scores)
    return sum / len(scores)

totem = Student('Tom', 7)

totem.scores.append(60)
totem.scores.append(70)
print(totem.scores)

totem.average = mean  # append new function

print(totem.average(totem.scores))  # 65.0

```


## ___Class Object 追加 Function___
> 我的理解是，為第三方提供的工具再追加其他功能函數時使用。  

步驟: <br/>
1. 先建立一個帶 self 參數 function (self 指向 instance object)
1. function 可以藉由 self 取得 class 的其他成員
1. class object 再以新成員變數與 function 建立關聯
1. class object 以新成員觸發新行為

___man.persion.py___

```python
class Person:
    def __init__(self, first_name: str, last_name: str):
        self.first_name = first_name
        self.last_name = last_name
```

___run.py___

* 注意: 欲附加給 class 的 Function 需帶 self 參數

```python
# append method to class
from man.person import Person

def full_name(self, separator: str): # 註意此處第一個參數是 self
    return self.first_name + separator + self.last_name

Person.full_name = full_name
totem = Person("Totem", "Insect")
print(totem.full_name('_')) # Totem_Insect
```


## \_\_str\_\_() 方法

> \_\_str\_\_() 可以用來為 class 實作可讀的內容訊息。  
> 通常這個訊息會與商業邏輯相關，這邊指的是有別於 \_\_repr\_\_() 會產生供程式\(interpreter\)使用的訊息內容。  
> \_\_str\_\_() 可以在回應使用者時使用。  
> 
>> 預設的 \_\_str\_\_() 會直接呼叫 \_\_repr\_\_()  
>> 使用時可以:   
>> 由 instance: x.\_\_str\_\_() 或  
>> 由 built-in: str(x)  

```python
class Student:
    def __init__(self, name):
        self.name = name

# default: equals to __repr__()
    # 商業邏輯用
    def __str__(self):
        return self.name

s = Student('Totoem')     
print(s) # Totoem
print(s.__str__()) # Totoem
print(str(s)) # Totoem
```


## \_\_repr\_\_() 方法 <span id="repr_fun">&nbsp;</span>
> \_\_repr\_\_() 可以將 instance 轉成 Python interpreter 可以辨認的文字內容。  
> 因為，\_\_repr\_\_() 是供 interpreter 使用，所以通長不該像 \_\_str\_\_() 被覆寫改變，以確保 interpreter 作用正常。    
> 部分情形下 \_\_repr\_\_() 與 eval() 可互相轉換。   
>> 這邊指的通常是 Python 內建的類別間可互相轉換   
> \_\_repr\_\_(): 將 instance 轉成 string  
> [eval() 則可以將 string 轉回 instance](../Python_Typing_String#eval_fun)  
>  
>> 同樣可以由 instance/built-in fun 來呼叫:   
>> 由 instance: x.\_\_repr\_\_() 或  
>> 由 built-in: str(x)  
>  
> reference: [Python Built-in Functions: repr()](https://docs.python.org/3/library/functions.html#repr)  

```
strA = '[1,2,3]'

listA = eval(strA)
print(type(listA))
print(listA)
# <class 'list'>
# [1, 2, 3]
```