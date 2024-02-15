---
title: Python 迴圈與條件 
description: Python Loop and Condition
keywords: [Python ,loop,condition]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 迴圈與條件判斷
> 真討厭，學過的程式語言中大家都有迴圈。  
> 可是大家的迴圈寫法都有差異，  
> 所以這一個章節似乎少不了...   
> 不過，還好 IDE 可以幫我解決這個問題。  
> 我會利用 IDE Code Assistant / Live Template 來解決這個問題。  
> 所有的IDE所有的程式語言都設定相同的 key。  
> 讓 IDE 幫我解決這個問題，當然你有錢的話訂閱 copilot 也行啦。  
> 我，窮啦!  

## Loop: for/while
* PyCharm 中 Code Assistant / Live Template 的 key 是 __iter__ 
* 我習慣會把他改成 __for__ (#code-template)  

* for <span style={{color: '#0044FF'}}> __ list or tuple __ </span> 

```python
listA = [7,8,9,10]
for e in listA:
    print(e)
```

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

* while loop

```python
n = 3
while n < 0:
    print('hello')
```

## Condition : if/elif/else

> 寫在前面 Python 中 Boolean 判斷的語法糖清參考: [Python Boolean](./Python_Typing_Boolean) 

> <span style={{backgroundColor: '#ffd1b3'}}>type checking</span>:     
> in, not in,  if else  


* if else, if elif else, in, not in,   and, or

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

# not in 
if 'Ford' not in jp_cars:
    print ("yes, Ford is not JP Company")
if not 'Ford' in jp_cars:
    print ("yes, Ford is not JP Company")
 
# if elif else
age = 10.1
if age > 10:
    print('age > 10')
elif age == 10:
    print("age == 10")
else:
    print("else")        
```

## Type checking
* <span style={{backgroundColor: '#ffd1b3'}}>type checking</span> : Java 中的 instance of

    * by isinstance function:   
    * by type function: 直接比對雙方 type() 的迴回傳結果  
    * by type name: 這邊的 name 似乎是指 type() 的回傳名稱  
    
> 註: python == (Python == 符號為 java 中的 equals)  
> python reference 用 is 比較  


* by isinstance function:

```python
string_a = 'string'
if isinstance(string_a, str):
    print('str')

if type(string_a) is str:
    print('str2')
    
```

* by type function : type(obj)

```python
list_x  = [11, 2, 3]

if type(list_x) == type([]):
    print ('[]')
```    


* by name: 

```python

list_x  = [11, 2, 3]
tuple_y =(2,3,4)

if type(list_x) == list:
    print ("list")

if type(tuple_y) == tuple:
    print ("tuple")

string_a = 'a'
if type(string_a) == str:
    print ("str")    
    
```    

## Comprehension
> Python 特有語法，跑迴圈時順便執行特定動作。  

* syntax : 以大/中括號封住要執行的迴圈範圍，並給定要執行的 expression  
    * epression : 有回傳值  
    * statement : 沒回傳值  
    * 以中括號包覆則回傳 list, 以大括號包覆則回傳 set。   

```python
# {}
result_set = {expression for variable in iterable if condition}

# []
result_list = [expression for variable in iterable if condition]
```

* Comprehension example: 

```python
def square(item):
    return item * item

list_x = [1,2,3]
result_set = [square(x) for x in list_x if x%2 != 0]
print(result_set)
# 1,4,9
```
  

## PyCharm 客製化 Code Template <span id="code-template"></span>
> 我通常會依據自己需求異動預設的 code assistant，畢竟每一種程式語言的迴圈或條件判斷在語法上都有些差異。   
* [PyCharm Official Tutorial](https://docs.python.org/3.12/reference/datamodel.html#objects-values-and-types)
* [PyCharm Snippet Template](./PyCharm_Snippet_Template) 


