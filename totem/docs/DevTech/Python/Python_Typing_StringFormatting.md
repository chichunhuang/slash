---
title: Python 格式化字串
description: Python String Formatting
keywords: [Python,String Format]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 字串格式化介紹
> 這邊僅紀錄 Python3 中格式化字串時可用的方式，  
> 不討論 Python2 的部分。 

> 這邊先將格式化方式拆分為三類  
> A: [以 modulo % 為 operator 的方式](#modeStyle)  
> B: [str class 所提供的 format function](#functionStyle)  
> C: [f 為前綴的 f-String](#fStyle)

## <span style={{color: '#0044FF'}}>格式化 String (String Formatting) 基礎範例</span>
* <span style={{color: '#0044FF'}}>使用 % mode: formatting expression</span>   

```python
print('I\'m %s, and I\'m %d-year-old.' % ('Totem', 10))
```
* <span style={{color: '#0044FF'}}>使用 String 的 format function</span>    

```python
print('I\'m {1}, and I\'m {0}-year-old.'.format(10, 'Totem'))
```

* <span style={{color: '#0044FF'}}>f-String 格式化字串: 直接讀取先前定義的變數</span>  

```python
name = 'Totem'
age = 30

print(f'I\'m {name}, and I\'m {age}-year-old.')
```



## Mod Formatting Expression 語法規則<span id="modeStyle"></span>

> 'pattern' % (v1, v2...)  
> Formatting expression 指的是 pattern 中佔位符(placeholder)的部分。  
> 例如: 'I am %s' 中的 <span style={{color: '#0044FF'}}> __%s__ </span>部分   

* Syntax of Formatting expression
    * __<span style={{color: '#0044FF'}}>基本用法僅需 %typecode, ex: %s, %d </span>__即可  
    * 下方擴充用來針對不同的 argument values 或是浮點數做進一步格式調整  

```python
 %[(name)][flags][width].[precision]typecode
```

* typecode: (必要)定義資料的類型  
    * d: decimal  
    * s: string  
    * f: float  
    * o: 八進制  
    * x: 十六進制  
    * e: 指數  
* precision: (選用)精確位數，指小數點後的位數。  
* width: (選用)整個回傳字串的最大長度，包含小數點。   
* flag: (選用)整數位補齊符號  
    * 目前 python3 測試，符號僅接受 __0__ 與 __空白__  
    * width - precision - 小數點後，若還有剩餘長度則以指定符號於左側補齊。  
* name: (選用)需用 __小括號__ 包覆  
    * 通常 formatting expression 以 index(zero-based) 來為 placeholder 取值。若值的來源為 dict(map) 則可以 key 來取值。  


 _ flags / width / precision 整合範例 _

* 將 0.123進行格式化
    * 小數點下需五位
    * 總長度含小數點為十位
    * 以空白(ex1),零(ex2)於左側補齊
     
```python
# ex1: 以空白補齊
formatting = '% 10.5f' % 0.123
print(formatting)
#   0.12300

# ex2: 以0補齊
formatting = '%010.5f' % 0.123
print(formatting)
#0000.12300
```
    
 _ Dict(map) 取值範例 _ 
 
 ```python
# map 取值範例
data = {'nickname': 'Totem', 'age': 20}

formatting = 'I am %(nickname), I\'m %(age)d.' % data
print(formatting)
# I am Totem, I'm 20.
```
 

## String Format Function 語法規則<span id="functionStyle"></span>

> pattern.format(varArgs)
> 
> pattern 中以 __大括號__ 包覆要被取代的佔位符  
> 佔位符可分為三類:  
> A : by order, omit index  
> B : <span style={{backgroundColor: '#b3c4ff'}}> __by zero-based index__ </span>:推薦用法   
> C : by place-holders  


* Syntax of Pattern String

```python
  {fieldname!conversionFlag:formatSpec}
```
* fieldname: 參數的 zero-bserd index, placholder, name
* conversionFlag: 內文轉換
    * a: 取值的 ASCII code
    * r: 以 repr 呈現
    * s: 以 str 呈現
* formatSpec: 進階格式調整，冒號後面的部分     
    * 統一 長度/對齊方式/長度補齊/精確度 (參考 Formatting expression)  
    * syntax of formatSpec  
    * alignment: 左對齊(<), 右對齊(>), 居中對齊(^), 小數點居中(=)  
    * flag: 補齊符號(沒限制)  

```python
  # syntax of formatSpec
 [[flag]aligment][sign][width].[precision][typecode]    
```

_  conversionFlag 範例  _

```python
# 印出 圖騰的 ASCII code
f = 'a = {0!a}'.format('圖騰')
print(f)
# a = '\u5716\u9a30'
```

_ formatSpec 範例 _

```python
# 浮點數2.2 格式化為: 長度10, 精度五位, 左側為足位數補空白
f = '{0: 10.5f}'.format(2.2)
print(f)
#   2.20000

f = 'I buy a brand new iPhone, It cost me ${0:->10.3f} dollars.'.format(10.12)
print(f)
#I buy a brand new iPhone, It cost me $----10.120 dollars.
```


_ by order, omit index 範例 _

```python
# by order, omit index
f = 'I am {}, I\'m {}.'.format('Totem', 10)
print(f)

```

_ __<span style={{color: '#0044FF'}}>推薦用法</span>__ : by zero-based index 範例_  

```python
# by zero-based index
# 個人推薦寫法
f = 'I am {0}, I\'m {1}!'.format('Totem', 10)
print(f)
```

_ by zero-based index 範例_  

```python
# by zero-based index
# 容易搞混，填 index 部分需寫在大括號內。
values = ['Totem', 10]
f = 'I am {0[0]}, I\'m {0[1]}!'.format(values)
print(f)
```


_ by place-holders 範例 _  

```python
# by place-holders
f = 'I am {name}, I\'m {age}.'.format(name='Totem', age=10)
print(f)
```

_ by place-holders 範例 _

```python
# by place-holders
placeholders = {'name':'Totem', 'age':10}
f = 'I am {name}, I\'m {age}.'.format(**placeholders)
print(f)
```

* 註: 連續兩個 asterisks 代表 unpack dictionary.
* 註: 單一個 asterisk 代表 unpack sequence (list or tuple 等).


## f-String 使用方式<span id="fStyle"></span>

> 可想像成是 format function 方式的語法糖，   
> f-String 可直接讀取先前已定義的變數內容，  
> 並直接將變數值帶入 template。  
> 變數的 place holder 與 string format function 採用相同的 Pattern String Syntax

* Syntax of f String

```python
newStr = f'{fieldname!conversionFlag:formatSpec}'
```

_ f-String 範例 _ 

```python
# f-string
phone = 'iPhone'
prize = 30.5

print(f'I buy a brand new {phone}, It cost me ${prize:->8.3f} dollars. ')
#I buy a brand new iPhone, It cost me $--30.500 dollars.  
```  

