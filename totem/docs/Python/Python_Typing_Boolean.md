---
title: Python 布林值
description: Python Boolen
keywords: [Python,Boolean]
---

# Python Boolean 
> 寫在前面:  
> Python 中的<span style={{color: '#0044FF'}}> __ 不等於 __ </span>，  
> 新版為 <span style={{color: '#0044FF'}}> __!=__ </span>。  
>> 舊版的不等於(&lt;&gt;)已棄用。  
> Python 與 Javascript 一樣空值/零/空集合等部分情境也可直接視為布林使用。

## True False (大寫)
注意: Python 中的 boolean 值皆是用 <span style={{backgroundColor: '#ffd1b3'}}>大寫</span>  <br/>
ex: <span style={{color: '#0044FF', backgroundColor: '#ffd1b3'} }> __True, False__ </span> <br/>
(JavaMan : __大寫, 大寫, 大寫 講三次!__)

_boolean example_

```python
def say_hi():
    print('Hi~')
    return 'HI'

def say_hello():
    print('Hello~')
    return 'HELLO'

cond = False # 大寫 True / False
a = say_hi() if cond else say_hello()
print(a)
```


## 也是 Boolean
_簡單紀錄:_ 

|     | False          |True      |
|-----|----------------|----------|
| 集合 | 空集合 |  非空集合        |
| 字串 | 空字串 |  非空字串        |
| 數值 |   零  | 非零數值          |
|  x  | None |   |

_False 範例:_
* '' 空字串
* [] 空集合
* {} 空集合
* 0 零
* 0.0 零
* None




## Condition 條件判斷
> 這邊跟 Java operator 完全不同  
> 可以搭配上方的語法糖使用，個人是不喜歡。因為會造成團隊合作時維護困難。  
> 但下方還是給予範例  

* and / or (Java : && / ||)
* not (同樣可以用小括號圈起多個條件, Java !)

```python 
#Condition

con_int_zero = 0
con_int_not_zero = -1
con_string_empty = ''
con_string_not_empty = 'content'
con_none = None
jp_cars = ['Honda', 'Toyota', 'Suzuki']

# and
if con_int_zero and con_string_not_empty :
    print("and")

# not with ()
if not (con_int_zero and con_string_empty) :
    print("not")

# or
if con_none or con_int_zero or con_string_not_empty:
    print("or")
```

* in,  not in (這個特別且獨有的語法糖)

```python 
jp_cars = ['Honda', 'Toyota', 'Suzuki']

# not in 
if 'Ford' not in jp_cars:
    print ("yes, Ford is not JP Company")
if not 'Ford' in jp_cars:
    print ("yes, Ford is not JP Company")
```

* id elif else

```python
# if elif else
age = 10.1
if age > 10:
    print('age > 10')
elif age == 10:
    print("age == 10")
else:
    print("else")
```


## 迴圈與條件判斷範例
* [Python 迴圈與條件](./Python_Loop_Condition)