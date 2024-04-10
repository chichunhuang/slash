---
title: Python Comprehension
description: 迴圈與lambda的結合
keywords: [Python ,Comprehension]
---
import { CodeBlock, dracula  } from "react-code-blocks";


# Python Comprehension: 迴圈與 lambda 的結合

> 
> Comprehension 可簡單的想成是 __迴圈與 lambda 的結合__，  
> 也可想成是 Java 中的 streaming。  
> 基本上便是將一個集合的資料依序執行指定的動作，    
> 然後再回傳一個有序或無序的資料集。    
>
 
* Python 中其他相似功能
    * filter function
    * map function
    * zip function
    * reduce function

## Comprehension 語法
* [以 <span style={{backgroundColor: '#b3c4ff'}}>大</span> 括號撰寫則回傳無序結果](#list_comp)
* [以 <span style={{backgroundColor: '#b3c4ff'}}>中</span> 括號撰寫則回傳有序結果](#list_comp)
* [以 <span style={{backgroundColor: '#ffd1b3'}}>小</span> 括號撰寫則回傳的是 <span style={{backgroundColor: '#ffd1b3'}}>Generator</span>](#generator_comprehension)
 
 
```python
result = [ expression for x in collection if condition]
```

## <span id='list_comp'>List/Set Comprehension</span>

* 下面 Comprehension 範例有交雜著 tuple 解包。 
* couples 本身是無序的 set，所以即使以 list 接收結果，每次跑狀況都會不相同。

```python

couples = {("Totem","Winnie"), ("Robert","May"), ("Tony","Jina")}

ret = [ f'{boy} and {girl}' for boy, girl in couples ]

for couple in ret:
    print(couple)
    
# Robert and May
# Totem and Winnie
# Tony and Jina
    
```

## Dict Comprehension

* Dict  Comprehension 基本上是將 dict 先轉換成其他 list 再來做 Comprehension 操作。  
* 例如轉成 <class 'dict_items'> 後再來處理。  

```python
dicts = {'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd'}

ret = [f'{k}:{v}' for k, v in dicts.items()]
for d in ret:
    print(d)

# A a
# B b
# C c
# D d
```

## <span id='generator_comprehension'>Generator Comprehension</span>

* 這邊的名稱命名不是很一致， Generator Comprehension 指的是使用 Comprehension 的句型來建立 Generator。
* 註: 
    * range(n) 回傳的是一個 generator 
    * [Python Generator 說明](./Advanced/Python_2_Generator)

___Generator 範例: basic___

```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def filterEven(numbers: list):
    for num in numbers:
        if num % 2 == 0:
            yield num

evens = filterEven(nums)

print(next(evens)) # 2
print(next(evens)) # 4
print(next(evens)) # 6
```

___Generator Comprehension 範例 ___

* 這個範例完全等同於 basic generator 範例，但你看不到 yield 關鍵字

```python
# 小括號 comprehension 會建立 generator
evens_generator = (num for num in nums if num % 2 == 0)

print(next(evens_generator)) # 2
print(next(evens_generator)) # 4
print(next(evens_generator)) # 6
```


## Nested Comprehension
> 
> Nested Comprehension 指的是，槽狀 Comprehension，  
> 也就是多重迴圈的意思。  
> 寫在越後方的 comprehension 就是越內層的迴圈。  
> 

```python
# 45乘法表
for i in range(4):
    for j in range(5):
        print(f'{i} x {j} = '+ str(i * j))

table = [f'{i} x {j} = ' + str(i * j)
         for i in range(4)
         for j in range(5)
         ]

for t in table:
    print(t)
```