---
title: Python 抽象方法
description: Python Abstract Method
keywords: [Python,abstractmethod]
---
import { CodeBlock, dracula  } from "react-code-blocks";


# Python 抽象方法 (Abstract Method)

> 參考: 
>> [Python 函數](../Advanced/Python_2_Function)  
>> [Instance Object 追加 Method](../OOP/Python_4_Class#instance-object-append-method): <span style={{color: '#0044FF'}}> __abstract method 不可以以追加的方式實作__ </span>  


## Abstract Method

* 需使用 abc 套件
    * ABCMeta Class
    * @abstractmethod annotation
* 子類別若未實作 Abstract Method 回拋出: 
    * __<span style={{color: '#0044FF'}}> TypeError: Can't instantiate abstract class ClassName with abstract method MethodName</span> __
* metaclass : Python interpreter 用來管理建構 type 時使用


```python

from abc import ABCMeta
from abc import abstractmethod

# 注意: metaclass
class Html_Form(metaclass=ABCMeta):
    def __init__(self):
        pass

    @abstractmethod
    def submit(self, forward_to, **kwargs):
        print('Submit Abstract Html_Form')


class LoginForm(Html_Form):

    def submit(self, forward_to, **kwargs):
        print('Submit LoginForm')
        print(kwargs)


f = LoginForm()
f.submit(forward_to='roadmap', username='username', pwd='password')
    
```