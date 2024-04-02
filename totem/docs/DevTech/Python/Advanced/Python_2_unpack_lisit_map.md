---
title: Python 打包與解包
description: Python Packing and Unpacking
keywords: [Python,Packing]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 打包與解包 

## Python 打包與解包解說
 
* [Arguments unpacking hints](#unpacking): 
    * 把 tuple/list instance 解包:
        * [iterable: var args \*](#iterable_unpacking): 集合元素個別指定變數。
    * 把 dict instance 解包:
        * [dict: named-params \*\*](#dict_unpacking): dict instance 中的 attr 與 function parameter mapping。

* [VarArgs function definition hints](#packing):
    * __可變數量參數函數定義__ 的一種，varargs 皆置於 signature 的最末端。
    * [var-arg params](#varArg_packing) 定義在 [key-word params](#kwArg_packing) 之前。    

    

___解包(開箱) Unpacking 定義___

> 指的是:  
> 將有序的可迭代資料集合拆解成一個一個的單一元素，並且將元素與變數作對應。   
> 或是將dict 拆解成多個單一元素的集合，可用來當 named-arguments。
>
> 這邊我會簡單稱解包的目的是: 快速地將變數賦值功能。  
> 所以，開箱同常會伴隨變數指定出現。  

___打包(裝箱) Packing 定義___

> 打包指的是:  
> 函數定義 VarArgument parameter 時，傳入的多個連續同型別引數可以自動裝載到一個有序集合之中。  
> 或是函數定義 VarArgument parameter 時，傳入的多個連續 key-variable pairs　可以自動裝載到一個 dict 之中。   
> 
> 我的理解中打包的目的是: 簡化資料(引數)傳遞給函數的功能。
> 所以，通常打包會需要函數定義，也會伴隨函數呼叫出現。

___進階: 搭配 Asterisk 的打包解包___

> Asterisk * 在打包解包過程中:  
> 單一個 asterisk 用於: 把不是重點的元素統一收集到帶單一星號的變數身上。  
> 連續兩個  asterisks 用於: 用於告知處理的是 dict 或是 key-value pairs。(區別 dict 與有序集合)    

<br/>
<br/>

# <span id="unpacking">解包開箱 Unpacking</span>
> 解包或稱為開箱 (Unpacking):  
> 這邊指的是將一個集合或 <span style={{color: '#ff6600'}}>可迭代物件的元素自動與變數建立關聯</span>。  
> 或是將一個 dict instance 當引數傳給 function 時，<span style={{color: '#ff6600'}}>Function 依 dict attribute name 與 function signature name 自動配對</span>功能。  

## <span id="iterable_unpacking">Tuple / List 解包範例:</span>

___Positional unpacking: 依位置解包___

```python
[firstName, lastName] = ['Michael', 'Jackson']
[firstName, lastName] = ('Michael', 'Jackson')
firstName, lastName = 'Michael', 'Jackson'
print(firstName)
# Michael
print(lastName)
# Jackson
```

___Sequence unpacking: 依順序解包 ___

```python
x, y, z = 'CAT'
print(x)
# C
print(y)
# A
print(z)
# T
```

___Asterisk Operator: List/Tuple 引數解包___ 

* 這邊可以將 Asterisk 視為一種 Arguments Unpacking 運算元。其運算為: 將 tuple/list 進行解包。  
* 將一個有序集合轉換成 var argument function 所需的引數清單
    * 第8行，中的 *terms，將原本的 tuple 轉成元素清單

```python
def string_join(separatpr: str, *args: str):
    ret = ""
    for item in args:
        ret += (item + separatpr)
    return ret

terms = ('How', 'are', 'you', 'Tom', '?')
sentence = string_join(' ', *terms) # 以 asterisk 標記將 terms 解包後傳入，
print(sentence)
# How are you Tom ? 

# 上方片段等同於下方範例
sentence2 = string_join(' ', 'How', 'are', 'you', 'Tom', '?')
print(sentence2)
# How are you Tom ? 

```


## <span id="dict_unpacking">Dict 解包範例:</span>

* 我把它分兩類: 
    * dict 轉成 iterable，那便擁有 list 的 unpacking 能力。
    * dict 轉成 named-parameters 所需 arguments。
    

_ Dict to tuples or dict_items_ 
* 基本上就是轉換成其他 iterable，然後走基本  list / tuple 解包流程。 

```python
profile = {"name": "Totem", "age":50, 'gender': 'Male'}

name,age,gender = profile.items()
print(age)
# ('age', 50)

for item in profile.items():
    print( type(item)) # <class 'tuple'>
# ('name', 'Totem')
# ('age', 50)
# ('gender', 'Male')

for k, v in profile.items(): # 搭配 tuple 解包
    print( k, '=', v)
# name = Totem
# age = 50
# gender = Male

show = [print(k, '+', v) for k, v in profile.items()]
```


_DiAsterisk Operator: Dict Unpacking to named-parameters _<span id="#double-asterisk-dict"></span>

* 經由將 dict 的 key-value 轉換成 <span style={{backgroundColor: '#ffd1b3'}}>named-parameters</span> 所需引數，因此可以是無序的。

```python
profile = {"name": "Totem", "age": 15, 'gender': 'Male'}

def print_profile(name, gender, age):
    print(f"{name} is {age} years old and he is {gender}")

print_profile(**profile)
# Totem is 15 years old and he is Male

```

_DiAsterisk Operator: Dict Unpacking to ?_

* 這類型 Dict 解包，目前找不到解釋。只能硬解釋成說是語法糖。目前只知道下方範例中的這種用法。

```python
boy_scores = {"Totem":60, "Robert":70, "Ade":10 }
girl_scores = {"Winnie":65, "May":75, "Anna":85 }

scores ={**boy_scores, **girl_scores}
print(scores)
# {'Totem': 60, 'Robert': 70, 'Ade': 10, 'Winnie': 65, 'May': 75, 'Anna': 85}

```


## 迴圈 / Comprehension 解包範例:

* 迴圈本身就是最常見的解包，不用多說吧。

_unpack tuples_

```python

couples = {("Totem","Winnie"), ("Robert","May"), ("Tony","Jina")}
for k, v in couples:
    print( k, '\u2665', v)
# Robert ♥ May
# Tony ♥ Jina
# Totem ♥ Winnie

```

<br/>
<hr/>
<br/>

# <span id="packing">打包裝箱 Packing</span>
> Packing   
> 用在定義函數處: 目的在 <span style={{color: '#ff6600'}}>自動將不定數的引數打包到一個 __list 或 dict__ 中後傳入方法中</span> 。  
> 用在變數賦值時(常伴隨解包一起發生):  解包時將非主要元素收集在一個集合中。此時會以 [asterisk 標示打包的變數](#partial_unpacking)。    
> 所以 Packing 通常用在函數定義上。 
> 
> 如果你得打包這個名稱不易理解，我換一個名詞來解釋。  
> Python 的 Packing 就是其他語言的 VarArgs (Variable Arguments)。  
> 意思就是函數或方法在定義傳入參數時，若想傳入的數量不固定時該如何處理。  
> 我們不可能無限制的 overload 函數。  
> 另一個解法是將同型別引數放到集合中再統一傳入。但是就需要多一個組成集合的動作。  
> 因此，各種語言便出現動態數量引數的傳入語法。  
> 在 Python 中稱為打包 (packing)，  
> 也就是自動將不定數的引數  __打包__ 到一個 list 或 dict 中後傳入。
>  


## <span id="varArg_packing">Tuple 打包範例: variable arguments </span>
> 通常打包伴隨函數定義與函數呼叫。  
> Iterable style: 其實可想成是 Java 中的 Variable Arguments 函數設計。  
> 在 function 的 signature __<span style={{color: '#0044FF'}}> 最後 </span>__ 部分可以定義一個 <span style={{color: '#0044FF'}}> __不定數參數__ </span>。  
> 不定數參數在接收引數時，會將單一個別的引數打包成一個 tuple 供函數使用。  
>   
> varArgs signature 定義方式為在參數前方加上 __單一個 Asterisk__ 。  
> (其實也可以把 Asterisk 想成是一種 operator: 把引數封裝成 tuple 的運算元)
> 
> 注意: packing 相關參數必須定義在最末端。   


_VarArgs 打包範例_

```python

# 函數定義, *args 標記為可變動數量參數
def string_join(separator: str, *args: str):
    print(type(args)) # <class 'tuple'>
    ret = ""
    for item in args:
        ret += (item + separator)
    return ret

# 函數呼叫時末端的剩餘參數會被打包成 tuple
print(string_join(" ", 'How', 'are', 'you', '?'))
# How are you ? 

```



## <span id="kwArg_packing">Dict 打包範例: key-vale pair arguments</span>
> 又稱為 key word arguments packing。  
> Python 中有所謂的 Keyword Arguments 語法，  
> 在引數 (argument) 指名參數 (parameter) 時可以不依參數定義順序 (signature) 來呼叫。  
> 也就是說允許 key-value pair 的方式指定每個參數的引數值。  
> key word arguments packing: 便是將要傳入的引數打包成一個 dict。  
> key word arguments packing 與一般 named-args 差別主要在於，dict packing 時可以把名稱未成功配對的引數統一放到一個 dict 引數中。  
>  
> key word arguments signature 定義方式為在參數前方加上 __兩個 Asterisks__ 。  
> (其實也可以把 DiAsterisk 想成是一種 operator: 把 named-args 封裝成 dict 的運算元)  
> 
> 注意: dict packing 時可以把名稱未成功配對的引數統一放到一個 dict 引數中。  
> dict packing 時是無序的，可與 named-args 交互穿插。 

_Key Word  Args 打包範例_

```python
# 除了 name 與 gender 外，其他引數統一打包到 kwargs 這個變數
def print_profile(name='nobody', gender='Male', **kwargs):
    print(f'I\'m {name}, {gender}')
    for fact in kwargs:
        print(fact, ':', kwargs[fact])

# 使用時，不需考慮 named-args 引數順序。
print_profile(gender='Female', height='160', 
              addr='TW', tel='0955-555-555', name='Winnie')
# I'm Winnie, Female
# height : 160
# addr : TW
# tel : 0955-555-555

```



## <span id='partial_unpacking'>搭配 Asterisk 的打包與解包: 不完全解包</span>

___VarArg 引數收集範例: asterisk variable 不完全解包___

解說: <br/>
有別於 Positional unpacking 或 Sequence unpacking，一個變數對應一個元素的完全解包， <br/>
Python 還支援不完全解包，除部分元素個別單一分離外，同時允許將部分元素收集成一個集合。 <br/>

下方範例: 5 個元素的 tuple，先進行解包為單一元素。前兩元素分別對應變數 a 與 b。<br/>
剩餘的 3 元素則以 asterisk 符號標記打包成 others 變數。<br/>

 
```python

 a, b , *others = (1,2,3,4,5)
 print(a)
 # 1
 
 print(b)
 # 2
 
 print(others)
 # (3,4,5)

```




## Packing / Unpacking 時 Asterisk 相關使用整理

用在變數身 上

引數傳第十

函數定義時


_單一個 Asterisk 使用註記:_
* 不完全解包: 不完全解包情境
* 有序集合引數解包: 傳遞引數時順便解包成為  var arguments
<span id="#singleAsterisk">77</span>