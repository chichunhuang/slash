---
title: Python 變數指派
description: Python Variable Assignment
keywords: [Python,Assignment]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 中變數指派的特殊方式
> 除了基本的一個變數對應一個值之外，Python 還提供了其他特殊的變數指派方式。  
> 可簡單分為:  
>> Positional unpacking  
>> Sequence unpacking   
>> Augment Assignment  

## Positional Unpacking: 依位置解包  
* 原則上就是一組變數依序對應同等數量的一組參數值。 

<CodeBlock text={`
[firstName, lastName] = ['Michael', 'Jackson']
[firstName, lastName] = ('Michael', 'Jackson')
firstName, lastName = 'Michael', 'Jackson'
print(firstName)
# Michael
print(lastName)
# Jackson
    `} 
      language='python'
      showLineNumbers='true'
      /> 
 
## Sequence unpacking: 依順序解包  
_Generalized Sequence Unpacking_ 

<CodeBlock text={`
x, y, z = 'CAT'
print(x)
# C
print(y)
# A
print(z)
# T
    `} 
      language='python'
      showLineNumbers='true'
      />

_Extended Sequence Unpacking_

<CodeBlock text={`
a,*b = 'pluck'
print(a)
# p
print(b)
# luck
    `} 
      language='python'
      showLineNumbers='true'
      />
      
## Augmented Assignment: 增強賦值
> +=, -=, *=, >>=, /=, ^=...  

* 注意: 若使用 Augmented Assignment 的物件  
    * 為不可變型別(ummutable)，例如 String, 則 unpack 後會回傳一個新的物件。
    * 若為可變型別，例如 List，則會發生 __原處修改__ ，也就是 reference 共享。操作時會改動到原始物件。
    * ex: list 的 += 運算等同於 extend()
    
    
