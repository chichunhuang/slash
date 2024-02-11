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

## Loop
* PyCharm 中 Code Assistant / Live Template 的 key 是 __iter__ 
* 我習慣會把他改成 __for__ (#code-template)  

* for __<span style={{color: '#0044FF'}}>list or tuple</span>__ 

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

## Condition

* in 
* not in 
* if else
* type checking


## Comprehension

  

## PyCharm 客製化 Code Template <span id="code-template"></span>
> 我通常匯依據自己需求異動預設的 code assistant 
* [Official Tutorial](https://docs.python.org/3.12/reference/datamodel.html#objects-values-and-types)
* [PyCharm_Snippet_Template](./PyCharm_Snippet_Template) 





 