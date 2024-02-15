---
title: Python Conventions
description: Python 變數命名慣例
keywords: [Python,Convention]
---

# Python 快速上手
> 久違了，Python!  
> 幾年沒用 Python 時，快速上手筆記。  



## Python 變數命名慣例

|                |說明                          |
|----------------|-------------------------------|
|varName|public|
|_varName|module /package, 無法 from x import x|
|__varName|local variable 類別內|
|__varName__|系統變數 system variables|


## Python vs Java Opertors (運算子符號比較)    
* Python vs Java 同符號但用於不同概念
* Python operator:
    * same value: ==
    * same object: is

|                |  Python | Java |
|:---------------|:--------|:-----|
|相同物件比較(reference)| is   | == |
|同內容值比較| ==, !=   | equals |


## Python Types

|     Type       |                         |                         |
|----------------|-------------------------|-----------------------------|
|     tuple       | (), t.[index]  |        immutable           |
|     list       | [], l.[index], l.slice[0:n],  l.append(e)  |        mutable  |
|     dict Map   | dict1 = {'k1':'v1','k2':'v2'},  dict3 = {}, dict3['k1']='v1',  dict2 = dict( zip( [k1, k2], [v1, v2]) )   |   for key,values in  dict1.items():    |
|     set/frozenset | \{\}, s = set( [iterable] ), s = set([e1,e2,e3]) , s = {e1, e2, e3}    | mutable/immutable |


## Loop

* for list or dictionary (map)

```python
for k,v in dict1.items():
    print('key=%s value=%s' % (k, v))
    
for tuple_item in dict1.items():
    print(tuple_item[0])

# 若 key 有多種 types，則會拋出 TypeError
for key in sorted(dict1):
    print(dict1[key])   
```

* for list with index

```python
listA = [7,8,9,10]

for idx, v in enumerate(listA):
    print(idx, v)
```

## Condition

* if elif else 

```python
age = 10.1
if age > 10:
    print('age > 10')
elif age == 10:
    print("age == 10")
else:
    print("else") 
```


## Type checking
* [Type checking](./Python_Loop_Condition)

```python
string_a = 'string'
if isinstance(string_a, str):
    print('str')

if type(string_a) is str:
    print('str2')
    
```

## Python Boolean 語法糖

|     | False                         |True                         |
|-----|-------------------------------|-----------------------------|
| 集合 | 空集合 |  非空集合        |
| 字串 | 空字串 |  非空字串        |
| 數值 |   零  | 非零數值          |
|  x  | None |   |
