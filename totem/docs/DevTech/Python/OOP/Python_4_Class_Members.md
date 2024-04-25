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
> Class 結構下的 Methods 可分為:  
> &nbsp;&nbsp;&nbsp;&nbsp; simple method : instance bound method/實體方法  
> &nbsp;&nbsp;&nbsp;&nbsp; static method:  
> &nbsp;&nbsp;&nbsp;&nbsp; class method: 繼承結構下使用  


## <span id="Funs_Instance">Simple Method 實體方法</span>

<span style={{backgroundColor: '#b3c4ff'}}>使用情境: 每個 Instance 處理各自行為時使用</span>

* 使用時需先建立 instance，又稱為 instance bound method，實體方法  
* 定義在 class 中，且第一個 argument 為 self 的方法
* 指經由 self (即 instance) 取資料的方法

__Simple Method 範例__
* 參考上方 calc.Circle.py 中的 methods


## <span id="Funs_Static">Static Method 靜態方法</span>

<span style={{backgroundColor: '#b3c4ff'}}>使用情境: 創建工具套件時使用</span>

* 需以 @staticmethod 為方法標註 
* 類似 Java 中的靜態函數
* 不需創建 instance 便可經由 class name 來呼叫使用，
* 且<span style={{backgroundColor: '#ffd1b3'}}>static method 也只能使用類別的 static variable</span>或傳入的 variables(無法使用 instance variables)。
* Python 允許同名變數遮蔽的情境，因此 __子類別可以覆寫父類別的 static method__ 

__static method/variable example__

cala.Math.py<br/>

```python
class Math:
    PI = 3.14 # static variable

    def __init__(self):
        pass
   
    @staticmethod  #static method
    def circle_area(radius):
        return Math.PI * radius ** 2
```

run.py

```python
from calc.Math import Math

print(Math.circle_area(10)) # static method

print(Math.PI) # static variable
```

## <span id="Funs_Class">Class Method 類別方法</span>

<span style={{backgroundColor: '#b3c4ff'}}>使用情境: 繼承結構下，創建分支
工具套件時使用</span>

* 需以 @classmethod 為方法標註 
* class method 與 static method 幾乎相同，但 <span style={{backgroundColor: '#ffd1b3'}}> class method 通常用在繼承結構</span>下。
* class method 因為帶有 class type 資訊，所以可以取得 type 專屬的 static variable，或是不同繼承層級下的同名 static 變數。
* class method 的 __第一個 argument cls__ ，代表的是當前 <span style={{backgroundColor: '#ffd1b3'}}>動態</span> 的 type(子類別的 Type)。
* 注意重點: 
    * <span style={{backgroundColor: '#ffd1b3'}}>class method 通常用在繼承結構</span>
    * <span style={{backgroundColor: '#ffd1b3'}}>Python 允許繼承結構各自擁有同名變數</span>
    * 因此可以說 <span style={{backgroundColor: '#ffd1b3'}}> class method 實現了繼承結構下，辨別同名 __靜態__ 變數</span> 的可能性
* 另外，[class method 也可以用來設計 Factory Method](#cls_method_Factory)    
    * class method 除了可以藉由 cls 來取得實例的方法與屬性外，也可以使用 cls 來呼叫建構子。
    * 此時 cls 等同於當下的 ClassName，也可想成作用類似 Java 中的 this()。

__class method example:gravitational constant__<br/>

galaxy.planet.py <span style={{backgroundColor: '#ecd9c6'}}>Java Style: 子類別覆寫父類別方法內容</span>

```python

class Planet:
    GRAVITY_CONSTANT = None

    def __init__(self, name='Not Define'):
        self.name = name

    @classmethod
    def gravity(cls, mass=0.0) -> float:
        return None

class Earth(Planet):
    GRAVITY_CONSTANT = 9.81

    @classmethod
    def gravity(cls, mass: float):
        return mass * cls.GRAVITY_CONSTANT

class Moon(Planet):
    GRAVITY_CONSTANT = 1.62

    @classmethod
    def gravity(cls, mass: float):
        return mass * cls.GRAVITY_CONSTANT

    # def unresolved_reference (self):
    #     return GRAVITY_CONSTANT # unresolved_reference, 必須指名類別 Moon.GRAVITY_CONSTANT


print(Planet.gravity())  # None
print(Earth.gravity(100))  # 981.0, 以自己 Type (cls) 的引力常數計算重力
print(Moon.gravity(100))  # 162.0, 以自己 Type (cls) 的引力常數計算重力

print(Planet.GRAVITY_CONSTANT)  # None
print(Earth.GRAVITY_CONSTANT)  # 9.81
print(Moon.GRAVITY_CONSTANT)  # 1.62
```

__class method example 2:gravitational constant__<br/>
* planet2.py 範例等同於上方 planet1.py，注意 <span style={{backgroundColor: '#ffd1b3'}}>這邊允許父類別存與子類別的靜態變數</span>。
* class method 定義在父類別身上，而父類別所需的子類別 __靜態成員則必須事先定義__。

galaxy.planet2.py <span style={{backgroundColor: '#ecd9c6'}}>Pythonic Style: 父類別可存取子類別成員內容</span>

```python
class Planet:
    GRAVITY_CONSTANT = None

    def __init__(self, name='Not Define'):
        self.name = name

    @classmethod
    def gravity(cls, mass=None) -> float:
        if mass is None:
            return None
        return mass * cls.GRAVITY_CONSTANT
        # 所有子類別必須有 GRAVITY_CONSTANT 這個靜態變數

class Earth(Planet):
    GRAVITY_CONSTANT = 9.81

class Moon(Planet):
    GRAVITY_CONSTANT = 1.62
```
__class method example 3: Factory Method__ <span id="cls_method_Factory">&nbsp;</span> <br/>

> 在 Python 中並沒有 Multiple Constructors 的語法，  
> 但 Python 的[建構子本身提供 VarArgs 與 KwArgs](./Python_4_Class#cls_constructor) 的擴充功能，可以來補足這個問題。  
> 然而 Multiple Constructors 雖可達到以不同方式建構物件的目的，  
> 但卻無法表達每個建構子所代表的商業意義，因此 Design Pattern 中有了 Factory Method Pattern。  
> Python 中 Factory Method Pattern 可以經由 @classmethod 的特性來實作。  
> 請看下面範例:  

* 注意: 這邊使用 @classmethod 中的 type 來呼叫建構子
    * 範例中的 User 是以 ClassName 來建構 instance
    * PM 是以 cls argument 來建構 instance

role.role.py

```python

class Role:
    def __init__(self, is_pm=False, is_pg=False, is_user=False):
        self.isPM = is_pm
        self.isPG = is_pg
        self.isUser = is_user

    # 以 cls 建構 instance
    @classmethod
    def PM(cls):
        return cls(True, False, False)

    @classmethod
    def PG(cls):
        return cls(False, True, False)

    # 也可以用 ClassName 建構 instance
    @classmethod
    def User(cls):
        return Role(False, False, True)

# 使用工廠方法
manager = Role.PM()
programer = Role.PG()
user = Role.User()

print(manager.isPM)  # true
print(manager.isPG)  # false

print(user.isPM)  # false
print(user.isPG)  # false
print(user.isUser)  # false
```

## Summary

| Method Types  |  Syntax  | Argument  |
|----------|------------------------|-----------------------|
| Instance Method | &nbsp;&nbsp; | self |
| Static Method | @staticmethod | &nbsp;&nbsp; |
| Class Method | @classmethod | cls |
