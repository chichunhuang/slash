---
title: Python Utils
description: 雜七雜八的工具
keywords: [Python]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python Utils
> 
> Python 原生的工具類似乎很多很雜。  
> 也似乎沒做模組歸類加上本身語言的特性。  
> 若沒付費版的 IDE，且像我不是 Python 的重度使用者的話。  
> 想找特定工具時真的很麻煩，所以放在這列表囉。  
> 以後再做歸類...  

<div hidden> https://www.geeksforgeeks.org/python-map-function/ 
</div>


> 這一區: 類似 Java 的 stream. Java 的 lambda api. DSL style.


|         |   工具簡述    |  metaphor |  注意 |
|---------|-------------|-----|-----|
| builtins.py <br/>[map()](#map_function) | 迭代執行特定動作 |  Java stream 的 foreach | generator(資料只能讀一次,next()取值) |
| builtins.py <br/>[filter()](#filter_function) | 與 map() 使用方法一樣，只差在 function 須回傳 boolean |  Java stream 的 filter | generator(資料只能讀一次,next()取值) |
| builtins.py  <br/>[zip()](#zip_function) | 把多個 iterable objects 依序組合成 tuples | Java stream 的 map | generator(資料只能讀一次,next()取值) |
| [enumerate()](#enumerate_function) | 把 iterable object 轉成 index, element tuples | placeholder_metaphor | generator(資料只能讀一次,next()取值) |


## <span id="map_function">map() : 迭代執行特定動作</span>

> map function 接受一個 function，  
> 並將後方傳入的 argumants (iterable objects) 成對傳入該 function 並執行，  
> 而後回傳一個 map class (generator)。  
> 注意: <span style={{color: '#ff6600'}}>map class 的資料僅能讀一次</span>，  
> 可用(generator 特性)   
>> next() 走訪。  
>> list() copy 全部結果。  
>> 可搭配迴圈或 comprehension 使用。   
> 
> 功能類似 Java lambda 的 foreach 功能。簡化一系列資料的迭代處理。
>

_Syntax of map function_

```python
result_map = map(fun, agumentN_list... )
```

_map function : Basic_

```python
def multiple(input, repeat):
    return input * repeat

arg1 = 'hello'
arg2 = [1, 2, 3, 4]
x = map(multiple, arg1, arg2)
# 未成對的，一率被 skipped
for i in x:
    print(i)
print(type(x))
print(type(list((x))))
# h
# ee
# lll
# llll
# <class 'map'> : 是 map 不是 dict
# 轉成 list 方便使用
```


_map function : labmda_

> 若只是一個臨時用的 function，也可用匿名方法 lambda 來代替。
> 上方範例等同於:

```python
x = map(lambda input, times: input*times, 'hello', [1, 2, 3, 4])
# 未成對的，一率被 skipped
for i in x:
    print(i)
print(type(x))
```

_map function : Back to Basics_
> 這邊再演示在不知道 map function 時一般人的處理方式

```python
size = len(arg1) if (len(arg2) > len(arg1)) else len(arg2)
for i in range(0, size):
    print(multiple(arg1[i], arg2[i]))
```








## <span id="filter_function">filter() : 利用制定方法過濾 iterable object</span>

_Syntax of filter function_

```python
result = filter(funReturnBool, iterable)

```


_filter function_

```python

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

exe1 = Exam("Tom", 80, 10)
exe2 = Exam("Jack", 95, 30)
exe3 = Exam("May", 60, 20)
exe1.win()
exe2.lose()

exams = [exe1, exe2, exe3]

def is_pass(exam: Exam):
    return exam.get_points() > 60

result = filter(is_pass, exams)

for r in result:
    print(type(r), r.display())
# <class '__main__.Exam'> Tom-71
# <class '__main__.Exam'> Jack-64
```

## <span id="zip_function">zip() : 把多個 iterable objects 依序組合成 tuples</span>

> zip function 如同名字，  
> 並將後方傳入的 argumants (iterable objects) 成對組合成 tuples，  
> 而後回傳一個 zip class (generator)。
> 同樣的，未成組的不處理。  
> 注意: <span style={{color: '#ff6600'}}>generator 的資料僅能讀一次</span>，可用 list() 做 copy。  
> 
> 功能類似 Java stream 的 map 功能。簡化一系列資料的迭代處理。
>

_Syntax of zip function_

```python
result_zip = zip(agumentN_list... )
```

_zip function : Basic_

```python
result_of_zip = list(zip('hello', [1, 2, 3, 4], {"!", "@", "#", "$", "%", "^"}))

for item in result_of_zip:
    print(type(item), '-', item)
# <class 'tuple'> - ('h', 1, '$')
# <class 'tuple'> - ('e', 2, '@')
# <class 'tuple'> - ('l', 3, '^')
# <class 'tuple'> - ('l', 4, '!')

for item in result_of_zip:
    print(type(item), '-', item)

print(result_of_zip)
# <zip object>
print(type(result_of_zip))
# <class 'zip'>
```


## <span id="enumerate_function">enumerate() : 把 iterable object 轉成 index, element tuples</span>

>
> enumerate() 可以將指定的 iterable object 轉成 index, element tuples。  
> 另外，enumerate() 可以指定起始的 index，預設起始為零。  
> 走訪時可用 next() 來進行。   
>
> 注意: <span style={{color: '#ff6600'}}>enumerate() 得到的是 enumerate class generator</span>。可用 list() 做 copy。  
> 


_Syntax of enumerate function_

```python
result = enumerate(iterable, init_index)
```

_enumerate() Baic_

```python

chars = 'ABCDE'
enum_chars = enumerate(chars, 0)
print(type(enum_chars))
# <class 'enumerate'>
    
print(next(enum_chars))
# (0, 'A')
print(next(enum_chars))
# (1, 'B')
print(next(enum_chars))
# (2, 'C')

# 剩兩個
for e in enum_chars:
    print(type(e), '-', e)
# <class 'tuple'> - (3, 'D')
# <class 'tuple'> - (4, 'E')

```