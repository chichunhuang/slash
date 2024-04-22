---
title: Python 類別成員
description: Python 類別成員 Vars and Funs
keywords: [Python,Class Members]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python Class 類別成員
> 這個主題是要介紹 Python Class 下的相關成員，  
> 包含 [Variables](./#Vars) 與 [Functions](./#Funs)。  

> Class 結構下的 variables 可分為:  
> &nbsp;&nbsp;&nbsp;&nbsp; class variable: 類別加變數名來取值  
> &nbsp;&nbsp;&nbsp;&nbsp; instance variable(self): 類別所產生的 instance 專屬  

> Class 結構下的 methods 可分為:  
> &nbsp;&nbsp;&nbsp;&nbsp; simple method:  
> &nbsp;&nbsp;&nbsp;&nbsp; static method:  
> &nbsp;&nbsp;&nbsp;&nbsp; class method:  


## <span id="Vars">Variables</span>
> Class 結構下的 variables 可分為:  
>> class variable: 類別加變數名來取值，此類變數為所有 class 產生的 instance 共用。    
>> instance variable: 類別所產生的 instance 專屬，需在建構子中先定義，資料需經由 self 來取得。  

___calc.Circle.py___

* class variable/static variable : PI
    * Circle.PI
* instance variable(帶 self 修飾) : radius, code
    * self.radius

```python
class Circle:
    PI = 3.14  # class variable

    def __init__(self, radius):
        self.radius = radius # instance variable
        self.code = None  # 應先定義，並初始化為 None。不然會造成未初始化變數便使用的錯誤出現。

    def assign_code(self, code):
        self.code = code

    def area(self):
        return Circle.PI * self.radius ** 2 # 注意:變數存取方式

    def display(self):
        return ' %s\'s area is %d' % (self.code, self.area())
```

___run.py___

```python
from calc.Circle import Circle

c1 = Circle(10)
c2 = Circle(20)

print(Circle.PI)  # 3.14
print(c1.PI)  # 3.14
print(c2.PI)  # 3.14

c1.PI = 3.14159
print(c1.PI)  # 3.14159, 發生同名變數遮蔽
print(c2.PI)  # 3.14
```


## <span id="Funs">Functions</span>
> Class 結構下的 functionss 可分為:  
> &nbsp;&nbsp;&nbsp;&nbsp; simple method : instance bound method/實體方法  
> &nbsp;&nbsp;&nbsp;&nbsp; static method:  
> &nbsp;&nbsp;&nbsp;&nbsp; class method: 繼承結構下使用  


## Simple Method 實體方法
* 又稱為 instance bound method，實體方法  
* 定義在 class 中，且第一個 argument 為 self 的方法
* 使用時需先建立 instance。
* 指經由 self (即 instance) 取資料的方法

## Static Method 靜態方法
* 需以 @staticmethod 為方法標註 
* 類似 Java 中的靜態函數
* 需經由 class name 來呼叫使用，且<span style={{backgroundColor: '#ffd1b3'}}>static method 也只能使用類別的 static variable</span>或傳入的 variables(無法使用 instance variables)。
* Python 允許同名變數遮蔽的情境，因此 __子類別可以覆寫父類別的 static method__ 

## Class Method 類別方法
* 需以 @classmethod 為方法標註 
* class method 與 static method 幾乎相同，但 <span style={{backgroundColor: '#ffd1b3'}}> class method 通常用在繼承結構</span>下。
* class method 因為帶有 class type 資訊，所以可以取得 type 專屬的 static variable，或是不同繼承層級下的同名 static 變數。
* 注意重點: 
    * <span style={{backgroundColor: '#ffd1b3'}}>class method 通常用在繼承結構</span>
    * <span style={{backgroundColor: '#ffd1b3'}}>Python 允許繼承結構各自擁有同名變數</span>
    * 因此可以說 <span style={{backgroundColor: '#ffd1b3'}}> class method 實現了繼承結構下，辨別同名 __靜態__ 變數</span> 的可能性


ex : gravitational constant

earth 9.81
moon 1.62
