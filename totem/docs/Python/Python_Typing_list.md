---
title: Python List
description: Python List 資料結構與操作
keywords: [Python,List]
---

# Python List 介紹
> 
> 注意 Python List 部分操作是 in-place。  
> 也就是說: 沒回傳值，直接作用在 invoker reference 所指定的 instance 身上。  
>
> 另外就是 Python 提供原生的工具方法可以使用，例如: sorted, reversed。  
> 原生的工具方法通常都會複製出新的回傳值，不影響既有 instance。
> 
> 再來就是 Python 中有<span style={{color: '#0044FF'}}> __operator module__ </span>，  
> operator module 也提供了些 list 的比對操作。
> 
> 最特殊的是，Python 中 operator 的 overloading，  
> 讓你用數學的觀念來處理 list。
>
> 嗯. 如果能有一個整合好的 module 會更好，  
> 分散太多地方反倒是造成學習與使用上的困難。  
  

## Python List 建構方式
> 就中括號包起來便是，  
> 允許放入不同型別的元素，  
> 但，若不同型別在迴圈與 Comprehension 走訪時需注意可能出錯。   

```python
list = [1,2,3, 'A', 'B', 'C']
```

## Python List 操作
> 
> 我把操作分三類  
> A: instance operation: list 資料結構本身提供的方法。  
>> 這類操作通常 __沒有 return__ 值, 如 append  
>
> B: Python built-in utility: 類似 Util 類別，相關操作不影響 instance 本身  
>> 這類操作通常 <span style={{color: '#0044FF'}}>__會有 return__ 值, 如 slice, reversed fun, sorted fun</span>  
>
> C: 額外獨立的特殊 operators  
>> 例如: in, del, *, + 等 operators  
>


```python
from operator import eq
import operator

listA = [1,2,3]
print(listA)
# [1, 2, 3]


list_int = [13, 12, 11]
print(lint_int)
# [13, 12, 11]
```

<span style={{color: '#0044FF'}}> ____ </span>

| Operation | Return | in-place |  Example | Description | Type |
|-----------|-----   |---------|-------------|------|----|
|  append  | None | in-place | listA.append([4,5,6])<br/># [1, 2, 3, [4, 5, 6]]<br/>  | 附加 <span style={{color: '#0044FF'}}> __單一__ </span>元素 | instance |
| insert | None | in-place | listA.insert(0, ['X','Y'])<br/># [['X', 'Y'], 1, 2, 3, [4, 5, 6]] | 插入單一元素至指定位置<br/>zero-based | instance |
| extend | None | in-place | listA.extend('unpack')<br/># [['X', 'Y'], 1, 2, 3, [4, 5, 6], 'u', 'n', 'p', 'a', 'c', 'k'] | 將指定 sequence <br/>unpack 成 items 後 append | instance |
| <span style={{color: '#0044FF'}}>__compose__<br/> __+__</span>  | __Y__ | N | listB = ['item1', 'item2']<br/>composed = listA + listB<br/># [['X', 'Y'], 1, 2, 3, [4, 5, 6], 'u', 'n', 'p', 'a', 'c', 'k', 'item1', 'item2'] | 合併兩個 list 的元素<br/>成為單一個 list | Operator Overload |
|  <span style={{color: '#0044FF'}}>__duplicate__<br/> __*__</span> | __Y__ | N | listB*2<br/># ['item1', 'item2', 'item1', 'item2'] |複製元素指定次數| Operator Overload |
|  remove | None | in-place | composed.remove(['X','Y'])<br/>#[1, 2, 3, [4, 5, 6], 'u', 'n', 'p', 'a', 'c', 'k', 'item1', 'item2'] | 移除指定元素 | instance |
|  del  | N | in-place | <span style={{color: '#0044FF'}}> __del__ </span> composed[0:3]<br/>#[[4, 5, 6], 'u', 'n', 'p', 'a', 'c', 'k', 'item1', 'item2']<br/>del composed[-2:]<br/>#[[4, 5, 6], 'u', 'n', 'p', 'a', 'c', 'k'] | 依據 index 刪除指定元素 | Special Operator |
|  <span style={{color: '#0044FF'}}>__slice__</span>  | __Y__ | N | s = composed[1:]<br/># ['u', 'n', 'p', 'a', 'c', 'k'] | 複製區段元素 | Operator/Syntax |
|  sort  | None | in-place | list_int.sort()<br/># [11, 12, 13]<br/> s.sort()<br/># ['a', 'c', 'k', 'n', 'p', 'u'] | 排序 | instance |
|  reverse  | None | in-place | s.reverse()<br/># ['u', 'p', 'n', 'k', 'c', 'a'] | 反向排序 | instance |
|  <span style={{color: '#0044FF'}}>__sorted__</span>  | __Y__ | N | s2 = sorted(s)<br/># ['a', 'c', 'k', 'n', 'p', 'u'] | 複製出一個排過序的副本 | Utility<br/>with return |
|  <span style={{color: '#0044FF'}}>__reversed__</span>  | __Y__<br/>list_reverseiterator | N | r2 = reversed(s2)<br/>for x in r2:<br/>&nbsp;&nbsp;print(x) | 複製出一個 iterable 類別 | Utility<br/>with return |
|  <span style={{color: '#0044FF'}}>__in__</span>  | __Y__ | N | print( 11 in list_int)<br/># True | 檢驗是否有指定元素 | Operator Overload |