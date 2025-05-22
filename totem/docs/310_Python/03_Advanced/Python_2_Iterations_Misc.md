---
title: Python 迭代相關三兩事
description: Loop、Iteration、Comprehension
keywords: [Python,Iterations]
---

# Python 迭代相關三兩事

## Built-ins: 內建類別本身即可進行迭代

> Python's Iterations : 這邊指的是類別本身即具有迭代的特性。
> 
> 需注意的是 : <span style={{backgroundColor: '#ffd1b3'}}>iterator instance 是否共用</span>這個超大陷阱。 
>> 參考 [iter() 陷阱: iterator instance 共享](#iter_tricky)   
>> x = iter(object)  
>> y = iter(object)  
>> 當 object 底層是一個  generator，則 x==y。  
>> 當 object 底層不是一個  generator，則 x!=y。  
>> 這會影響到 next(y) 是否延續先前呼叫的 next(x) 的 index  


* for/while loop: 自行產生 iterator，並且呼叫 next()。  
* comprehension: <span style={{color: '#0044FF'}}> __效率優於 for/while loop，底層由 C 實作__ </span>。  
* range()/dict/{}/[]/(): iterable types。
* map()/zip()/filter()/enumerate(): 會__<span style={{color: '#0044FF'}}>每次</span>__建立 <span style={{color: '#0044FF'}}> __新的__ </span> generator 依序給值。  
* in : 檢查物件中是否有指定元素。  

## Manual Iterations(Generator): 手動藉由 iter() 與 next() 來達成依次走訪。
* Manual Iterations : 這邊指的是經由 iter() 把集合、序列、資料流轉成 iterable object，再利用 next()來依序取值。
* 這類型的迭代通常是將資料手動轉成 generator 後使用。
    * 可自行以 list() 封裝。一次全取且可重複取值。
* 可依需要依次取一個結果。
* 當讀取超出範圍實則拋出 StopIteration Error。

```python

# by next function
with open(r'D:\tmp\AB.txt', 'r', encoding='UTF-8') as file2:
    print(next(file2)) # 僅取一行
    print(next(file2))
    # print(next(file2)) # 超出範圍時: StopIteration


# wrapped
with open(r'D:\tmp\ABCs.txt', 'r', encoding='UTF-8') as file2:
    x = list(file2) # <class 'list'>
    for i in x:
        print(i)
    print(i[0]) # 重複取值
        

#  by iter function
content = 'AB'
it = iter(content) # <class 'str_iterator'>
print(next(it))) 
print(next(it))
print(next(it))  # 超出範圍時: StopIteration    

```

## <span id="iter_tricky">iter() 陷阱: iterator instance 共享</span>
> 需注意的是 : <span style={{backgroundColor: '#ffd1b3'}}>iterator 是否共用</span>這個超大陷阱。 
>> x = iter(object)  
>> y = iter(object)  
>> 當 object 底層是一個 generator，則 x==y。  
>> 當 object 底層不是一個 generator，則 x!=y。
>> 這會影響到 next(y) 是否延續先前呼叫的 next(x) 的 index  
> 
> 

_檢驗是否為 generator fun 的工具_ &emsp; <span style={{backgroundColor: '#b3ffb3'}}>from inspect import isgeneratorfunction</span>

```python

from inspect import isgeneratorfunction

def generator_function(n=3, flag=True):
    out = []
    for i in range(n):
        if flag:
            yield i
        else:
            out.append(i)
    return out

print(isgeneratorfunction(generator_function))
# True

result = generator_function(10)

iterA = iter(result)
iter_same_instance = iter(result)

print(next(iterA))
# 0
print(next(iter_same_instance))
# 1
print(next(iterA))
# 2
print(next(iter_same_instance))
# 3

```

_generator 共用 iterator instance_

```python
# zip return 結果底層是一個 generator
x = zip([1, 2, 3], ["A", 'B', "C"])
it = iter(x)
print(next(it))
# (1, 'A')

it2 = iter(x)
print(next(it2))
# (2, 'B')
# 注意這邊延續前一個動作的指標，所以由第二個開始

print(it == it2)
# True, 兩次 iter() 回傳的竟是同一個 instance

y = zip([1, 2, 3], ["A", 'B', "C"])
# y 是一個新的 generator
it3 = iter(y)
print(next(it3))
print(it == it3)
# False
```


_sequence  不會共用 iterator instance_

```python
listX = [1, 2, 3, 4]
listX = range(1, 5)

it_fromList = iter(listX)
print(next(it_fromList))
# 1

it_fromList2 = iter(listX)
print(next(it_fromList2))
# 1, 從新由第一個開始

print(it_fromList == it_fromList2)
# False, 未共用

```