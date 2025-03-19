---
title: Python 慣例
description: Python 變數命名慣例
keywords: [Python,Convention]
---

# Python 快速上手
> 久違了，Python!  
> 幾年沒用 Python 時，快速上手筆記。  



## Python 變數命名慣例
>
> 與 Java 相同，變數需以底線、字母、數字命名。  
> 同樣可以數字起始。  
>

### _Variable Scope_
* [Python 變數與變數存取範圍](./Advanced/Python_2_Variable_and_Scope)

|                |說明                          |
|----------------|-------------------------------|
|varName|public|
|_varName|module /package, 無法 from x import x|
|__varName|local variable 類別內|
|__varName__|系統變數 system variables|
| \_ | 變數佔位符(placeholder)<br/>interpreter 暫存最後 expression 內容用<br/>懶得取變數時使用 |

### <span id='variable_naming_rules'>_Variable Naming Rules_ 說明</span>
> 
> class name 以大寫字母開頭(Camel Case, same as Java)  
> module name (package name) 以小寫字母開頭(J)  
> function name (lowercase with underscores)
> 
> 與 Java 不同處:  
>> underscore _ (物件封裝) : 當不希望 caller 直接使用時的規則  
> 
> \_x (單一底線變數: weak internal use indicator,隱含的 import 語法):  
>> 告知這個變數或方法應該限制在 class 之內使用，  
>> 不應該被任意 import。  
>> 但需注意的是 <span style={{backgroundColor: '#ffd1b3'}}>single underscore 並非一種限制，只是告知</span>。    
>
> \_\_x (雙底線變數:類似私有變數)  
>> 會被 Python 的 name managling 機制改名為， _className__x。 
>> 因此無法經由 class.__x 取得，而<span style={{backgroundColor: '#ffd1b3'}}>避免資訊被誤用</span>。  
>> 進而產生出 __類似私有變數__ (private variable)的結果。  
>> 但設計本意是，避免資料被誤用，或是方法被子類覆寫等情境。  
>
> \_\_x\_\_ (前後雙底線:Python 系統所使用與定義的變數)  
>> 用來提醒該變數是 Python 系統內建使用的變數。   
>> 特殊長相，一方面可用作提醒，另一方面也可避免與使用者自訂變數相衝突。  
>


 

## Python vs Java Opertors (運算子符號比較)    
* Python vs Java 同符號但用於不同概念
* Python operator:
    * same value: == (內容相等 <span style={{color: '#0044FF'}}> __會遞迴比較集合物件內容__ </span>)  
    * same object: is (是否為相同 reference)  

|                |  Python | Java |
|:---------------|:--------|:-----|
|相同物件比較(reference)| is   | == |
|同內容值比較| ==, !=   | equals |

## Python 物件比較
* 數值: 依字面常量大小比較  
* String: 依序轉 ASCII 比對。  
* Dict: 不比大小，只比 item value (by ==)，會先將 keys 排序後型進行比較。  
* python3 不接受 __內容型別混合__ 的集合物件比較。

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