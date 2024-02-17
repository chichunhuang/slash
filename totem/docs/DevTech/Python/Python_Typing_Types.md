---
title: Python 基礎型別摘要
description: Python 型別:List Dict Set String
keywords: [Python ,Tutorial]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 型別摘要
* Tuple: 小括號, iterable, immutable
    * 操作基本上與 List 相同，但 tuple 是 immutable。
    * 不知為何要額為定義 immutable list?
    
* List: 中括號, iterable
   * l.slice[0:-1] # 與 String slicing 操作相同
   * l.append(e)
   * l.pop(index) : 取出並移除
   * l.[index] : 查出
   * l.sort()
   * l.reverse()
   * nested ok
   * comprehension ok [expression for item in listA]
   
```python
list2 = [1,2,3,4,5]
l_double =[]

# comprehension
[l_double.append(item*2) for item in list2]
print(l_double)
# [2, 4, 6, 8, 10]
```
   
* Dict: 大括號(Set, Dict 皆是用大括號), iterable 
    * dict1 = {'k1':'v1','k2':'v2'}
    * dict2 = dict( zip( [k1, k2], [v1, v2]) )
    * dict3 = {}, dict3['k1']='v1'
    * nested ok
    * 可混用不同型別的 values
    * 可混用不同型別的 keys
    * values1 = dict1.values(), return dict_values 
    * keyValue_dict_items = dict1.items(), return dict_items, collection of tuple2s
    
```python
dict1 = {'k1':100, 'k2':'abc', 100:'XYZ'}
for key,values in  dict1.items():
    print (key,values)
# k1 100
# k2 abc
# 100 XYZ

for x in dict1.items():
    print(x[0])
# key...   
```

```python
# 另一種內建的 dict 迴圈方式
# 但是，若 key 出現不同 type，上方範例 string/integer
# 則會拋出 TypeError

for key in sorted(dict1):
    print(dict1[key])   
```


* Set:  大括號, iterable, 分為 set/frozenset 兩類
    * Set : mutable
    * s = set( [iterable] )  
    * s = set((e1,e2,e3)) : build-in method, 傳入 tuple  
    * s = set([e1,e2,e3]) : build-in method, 傳入 list  
    * s = set('string') : string 也是 iterable  
    * s = {e1, e2, e3} : 原生非物件的建立方式
    * frozenset : immutable, 基本上與 set 的操作一致，僅差異在於建立後不可修改這件事。
    * [Set 資料結構](./Python_Typing_Set)


* String: iterable, zero-based index, sequence
    * lengthA = len('Hello World')
    * sliced = strA[0:-1] # 與 List slicing 操作相同
    * zero-based index
    * index backward,strA[-1]: 最後 char
    * formatting: SC style/tuple, string format function/variable, fString/variable

```python

strA ='Hello World'
print(strA[0:5])
# Hello

# String formatting A: C style, 以 tuple 提供內容
formatting = 'I\'m %s, I\'m %d-yaar-old.' % ('Rain', 10)
print(formatting)
#I'm Rain, I'm 10-yaar-old.


# String formatting B, String 的 format function
template = '{pg} is a kind of state{suffix} framework'
print(template.format(pg='microservice', suffix='less'))
print(template.format(pg='MVC', suffix='ful'))
# microservice is a kind of stateless framework
# MVC is a kind of stateful framework


# fString (Python 3.6+)
# variables
name = "Totem"
age = 40
# f-string
print( f"I\'m {name}, I\'m {age}-yaar-old.")
# I'm Totem, I'm 40-yaar-old.
```    
    
    
* Numeric: [Python 數值型別] [Link](./Python_Typing_Numeric)
    * Integer
    * float ponit
    * complex
    * Decimal
    * Fraction
    * math module
    
