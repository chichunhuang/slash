---
title: Python 常數
description: Python 常數設計方法
keywords: [Python,Constant]
---

# Python 常數設計方法


## Python Class 的取值與賦值
> 
> Python 中屬性取值與賦值各有兩種語法:  
>  
>> dot style :  也就是藉由 classA.attrA 來與值與賦值  
>> dict style:  則是 classA['attrA'] 來與值與賦值  
>
> 無論採用哪一種方法，instance 的屬性值都會放在 self.__dict__ 之內。 


## Python 屬性值存取

_ 屬性值存取 _

```python
class Auditor():

    # via dot to get
    def __getattr__(self, item):
        return self.__dict__[item]

    def __setattr__(self, key, value):
        self.__dict__[key] = value

    # via [] to get
    def __getitem__(self, item):
        return self.__dict__[item]

    def __setitem__(self, key, value):
        self.__dict__[key] = value


s = Auditor()
s.age = 10  # __setattr__ via set
print(s.age) # __getattr__
# 10

s['age'] = 20 # __setitem__ via []
print(s['age'])  # __getitem__

print(s.name) # __getattr__
# KeyError: 'name'
# 尚未賦值變取值會拋出 KeyError
```


## 常數類別設計方法 

> 在了解 Python 屬性值存取方式後，可以藉由關閉屬性編輯的方式來達到建立常數的目的。  
> 也就是建立一個僅有 getter 卻沒有 setter 的屬性。
>
> Python 基本上並沒有 const 之類的關鍵字供使用者建立常數。   
> 但我們可以將相關的常數整理在一個類別中，僅允許存取但限制修改。  
> 來達到常數的建立與管理。  
 
_常數類別設計方法_ 

 ```python
 class Constant(object):
    def __setattr__(self, key, value):
        raise Exception(key + ": Constants should not be changed")
    #  constant.PI/constant.EULER 會拋出 Exception

    def __init__(self):
        pass

    PI = 3.1415926535
    EULER = 0.5772156649

const = Constant()
print(const.PI)
# 3.1415926535

const.PI = "another"
# Exception: PI : Constants should not be changed

# const['X'] =123
# __setitem__ 未定義所以拋出
# TypeError: 'constant' object does not support item assignment

 ```
 
 