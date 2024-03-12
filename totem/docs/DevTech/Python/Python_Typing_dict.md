---
title: Python Dict
description: Python Dict 資料結構與操作
keywords: [Python,Dict]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python Dict 介紹
> 
> Dict 在 Python 語言中又稱為 associated array
> 
> 基本上 Dict instance 大括號包起來便是，
> 需注意的是，Set 資料結構也可以以大括號呈現。  
> 但中 <span style={{color: '#0044FF'}}> __空大括號型別預設為 Dict__ </span>  
> 允許放入不同型別的元素，  
> 但，若不同型別在迴圈與 Comprehension 走訪時需注意可能出錯。   
> 
> 另外，以中括號取值的操作:  
>> list 的 slice 操作，ex:  list[1:2]  
>> dict 的 get 操作，ex: dict['key']    

<CodeBlock text={`
dict1 = {}
print(type(dict1))                                                             
# <class 'dict'>
    `}
      language='python'
      showLineNumbers='true'
      /> 

    
## Dict 重點摘要

* 空大括號預設為創建 dict，ex: dict1 = {&emsp;&nbsp;}     
* put 以中括號賦值，ex: dict1['new_key']='new_value'    
* get 以中括號取值，ex: fetch = dict1['k']    
* values() 取全部值。
* keys() 取全部 keys。
* items() 取全部 key-value pairs。

## Python Dict 建構方式
> 因為是筆記所以紀錄下合語法的建構方式，  
> 別為難自己，記住最簡單的就好。  
> 看完下面範例，絕對讓你懷疑人生。  

* Dict 基本建立方式

<CodeBlock text={`
basic_dict1 = {}
print(type(basic_dict1))
# <class 'dict'>
basic_dict2 = {'k': 'v', 1: 30}
print(basic_dict2)
# {'k': 'v', 1: 30}
# then use square quotes to add/get item                                        
    `}
      language='python'
      showLineNumbers='true'
      />
<br/>      

      
* 懷疑人生的 dict function 建構法: 多個 __overloaded dict()__

_equal style，比較容易混亂_ ，我傾向忘了他
> 左側為 key，自動轉 String，不可加 single quote。  
> 右測為 value，採通用規矩。  

<CodeBlock text={`  
dict_equale = dict(k=1, k2=2)
# {'k': 1, 'k2': 2}
# 注意 k -> 'k'                                                                              
    `}
      language='python'
      showLineNumbers='true'
      /> 

<br/>

_tuple2 list style1，直接傳入 tuple2 的 sequence_ 

> dict function 接受 tuple2 sequence，所以衍生出後續其他變形

<CodeBlock text={`  
dict_tuples = dict([['key1', 'v1'], ['key2', 'v2']])
dict_tuples = dict([('key1', 'v1'), ('key2', 'v2')]) # 同於上方範例
# {'key1': 'v1', 'key2': 'v2'}                                                                              
    `}
      language='python'
      showLineNumbers='true'
      /> 

<br/>

_tuple2 list style2，變形A: <class 'dict_items'> _

> tuple list style，直接傳入 tuple2 的 sequence。  
> 所以這邊可以利用 dict.values 得到二元素的 list ie: <class 'dict_items'>。  
> 再利用此特性複製或建構一個新的 dict。  

<CodeBlock text={`  
print(type(basic_dict2.items()))                                                
#  <class 'dict_items'>
dict_unpack = dict(basic_dict2.items())
# {'k': 'v', 1: 30}
    `}
      language='python'
      showLineNumbers='true'
      />
<br/>

_tuple2 list style3，變形B: zip fucntion _

> zip style，zip 方式也是 tuple2 sequence 的變形。  
> zip function 可以將兩個 lists 依順序依次組合成 tuple2。  
> 所以 zip function 就是一個建構 tuple2 sequence 的工具。  

<CodeBlock text={`  
keys = ('a1', 'a2', 'a3')                                                         
values = ('v1', 'v2') # 故意給不同長度測試                                            
zip_seq = zip(keys, values)
print(type(zip_seq))
# <class 'zip'>
dict_zip = dict(zip_seq)
print(dict_zip)
# {'a1': 'v1', 'a2': 'v2'}
# zip 無法組合部分會被捨棄
    `}
      language='python'
      showLineNumbers='true'
      />

<br/>

_dict_fromKeys style 建立有預設值的 dict_

> 這邊是使用 class dict 的 fromkeys 類別方法  
> 依指定的 keys 來生出有預設的 dict  

<CodeBlock text={`  
deafult_value = 0                                                               
dict_fromKeys = dict.fromkeys(('k1','k2','k3','k4'), deafult_value)
# {'k1': 0, 'k2': 0, 'k3': 0, 'k4': 0}
    `}
      language='python'
      showLineNumbers='true'
      />



## Python Dict 操作
* dict 取 value
* dict 取全部 values
* dict 取全部 keys
* dict 取 items, <class 'dict_items'> : python 的特殊功能，取出 dict 中的 pairs。  
 


<CodeBlock text={`                                                
#                                                                               
map1 = dict(zip(('a','b','c'), ('A','B','C')))                                   
getValue = map1['a']
print(getValue)
# A
#
#
getValues = map1.values()
print(getValues)
# dict_values(['A', 'B', 'C'])
print(type(getValues))
# <class 'dict_values'>
for v in getValues:
    print(v)
getKeys = map1.keys()
print(getKeys)
#
#
# dict_keys(['a', 'b', 'c'])
print(type(getKeys))
# <class 'dict_keys'>
for k in getKeys:
    print(k)
getItems = map1.items()
print(getItems)
#
#
# dict_items([('a', 'A'), ('b', 'B'), ('c', 'C')])
print(type(getItems))
# <class 'dict_items'>
for k, v in getItems:
    print(k + ':' + v)
# a:A
# b:B
# c:C
`}
      language='python'
      showLineNumbers='true'
      />