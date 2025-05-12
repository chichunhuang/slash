---
title: Set 資料結構
description: Python Set 資料結構
keywords: [Python,Set]
---

# Python 無序資料結構 
* 分為 set (#custom-id-set) 
* 分為 immutable frozenset (#custom-id-frozenset)  

## Python set 無序的資料結構 : set<span id="custom-id-set"></span>
* 建構方式
    * s = set( [iterable] )  
    * s = set((e1,e2,e3)) : built-in method, 傳入 tuple  
    * s = set([e1,e2,e3]) : built-in method, 傳入 list  
    * s = set('string') : string 也是 iterable  
    * s = \{e1, e2, e3\} : 原生非物件的建立方式
    
* set 中的 element 必須是 immutable  
    * tuple: 小括號 (), 所建立的物件才是 immutable  
    * list : 中括號 \[\], 所建立的物件是 mutable, 不可為 set element。拋出 TypeError: unhashable type  

* set 是可變的，可呼叫 set.add(el) 增加 element

```python
# set constructor
s1 = {7,8,9,10}
for s in s1:
    print(s)
print(s1)
# {8, 9, 10, 7}

# built-in method 來建立
s2 = set((7,8,9,10,11))
for s in s2:
    print(s)
print(s2)
# {7, 8, 9, 10, 11}

# built-in method 來建立 : iterable String
s3= set('Hello World')
for s in s3:
    print(s)
print(s3)
# {'d', 'r', 'H', 'e', ' ', 'W', 'o', 'l'}


# set 中的 element 必須是 immutable
l1 = (1,2,3) # tuple 是 immutable
l2 = (4,5,6)
l3 = [11,22,33] # list 是 mutable, 不可做為 set 的 neated element
s3 = {l1,l2, l3}
print(s3)
# TypeError: unhashable type

```

* 建立 Empty Set: 建議使用 set() function

```python

s_dic = {} # 注意,這邊建立的是 dic 
s5 = {()} # 這邊是放進去一個空的colection object reference, 所以 set 本身非空 

s6 = set() # OK, Empty
s7 = set([]) # OK, Empty
s8 = set({}) # OK, Empty

print('************')
print(type(s_dic))
print(len(s_dic))
# <class 'dict'>
# 0

print(type(s5))
print(len(s5))
# <class 'set'>
# 1

print(type(s6))
print(len(s6))
# <class 'set'>
# 0

print(type(s7))
print(len(s7))
# <class 'set'>
# 0

print(type(s8))
print(len(s8))
# <class 'set'>
# 0

print('************')
s5.add(1)
s5.add("A")
for x in s5:
    print(x)
# 1
# A

```


## Python immutable frozenset 無序的資料結構 : frozenset  <span id="custom-id-frozenset"></span>
* 基本上與 set 的操作一致，僅差異在於建立後不可修改這件事。  
* 若不慎給予內容異動，注意 __動作會被忽略__ 且系統並 ==<span style={{color: '#FF1100'}}>不會報錯</span>==  。  

```python
fs9 = frozenset(([1,2],3))  # list 是 mutable, 不可做為 set 的 neated element
print(fs9)
for x in fs9:
    print(x)
# Process finished with exit code 1



fs10 = frozenset((1,2,3))
fs10.add(4) # 不可做異動
print(fs10)
 # Process finished with exit code 1   
```