---
title: Python Lambda 匿名函式
description: Python Anonymous Function
keywords: [Python ,Lambda]
---

# Python Labmda

> Lambda expression 在程式語言中通常代表的是 <span style={{color: '#0044FF'}}> __匿名函式__ </span>。  
> 顧名思義是一種沒有名稱只有內容的函式。  
>
> 主要是用在當作內嵌的方法，也就是穿插在呼叫方的程式片段中。  
> 所以實際上使用時通常 _不會像許多範例中示範的情境額外給 lambda 一個變數名稱_ 。  
> 沒錯吧，他是匿名的你還想給他一個變數名?  
  


## Labmda Syntax
> 
> 因為在我的觀念中，lambda 是為了讓程式寫起來比較簡潔。  
> 
> 我這邊將整個 labmda 結構拆分為兩大塊。
> 一個是 __定義區塊__ ，   
> 另一個是 __引數區塊(Arguments)__ 。  
> 使用時兩者分別以小括號隔開。
> 
> 需注意的是:  
> lambda 是一種 expression(表達式)。  
> expression 必須有為傳值。  
> 所以，也許是為了精簡。 __最末行的內容預設為回傳值__ ，就是說可以省略 return 這個關鍵字啦。  
> 那如果最末行是 statement 呢?   
> 那回傳的會是 <span style={{color: '#0044FF'}}> __None__ </span> 。   
> 


_Syntax Python Lambda_

```python

(definition statement)(argument block)

(lambda parameters: expression)(argument block)

three_X_seven = (lambda multiplicand, multiplier : multiplier*multiplicand) (3,7)
```

* lamdda 關鍵字  
* definition statement 函式的內容 
    * part1(parameters): 參數清單 parameter
    * part2(expression): 運算式與回傳內容
* 引數區塊(optional: 不一定要寫在一起)
* 另外[引數區塊要以小括號包覆](#argument_block)
    

## 範例與使用方法

### _labmda example: anonymous style _
* 過濾奇數

```python

odds = filter(lambda x: x % 2==1, range(1,7))

for o in odds:
    print(o)

```

### _Back to Basics_
* 反璞歸真，沒 lambda 也是可以的

> 如果下方範例讓你覺得較容易理解與維護，那麼你該棄用 lambda。   
> 畢竟 lambda 只是希望能讓你的程式碼較簡潔。  
> 若造成反效果，那不如不要用。  


```python

def isOdd(input: int):
    return input % 2 == 1

for i in range(1, 7):
    if(isOdd(i)):
        print(i)

```
 
### _Use lambda with Arguments_ 
> 老實說，我不常用。  
> 寫一個匿名函式，然後立即使用他。  
> 
> 最簡單的想法或解釋就是:   
> 將一個函式與呼叫動作寫成一行。用完就丟。  
> 
> 這邊只示範給自己找麻煩的陽春版:
> 不可以省略 lambda 外面的小括號，也不可以省略 argument 區塊的小括號。  
> 下面範例基本上，不好寫，不好讀。別模仿。  
> 
>> lambda with args 其實是可以非常強大的~  
>> 在我理解中: 應該是用在一個工具的子類別，每個子類別有獨自的動作要執行。  
>> 例如如一個抽象的 HTML form 的底層工具模組，   
>> 每個繼承的實體 form instance 實作自己的 _submit 動作(lambda expression)_ 。  
>> 這個 submit 動作可以在子類別各自實作。  
>> 且 submit 動作可以運用底層 form 的 _封裝方法與from 的輸入資料(arguments block)_ 。  
>> 每個實體 form 都可以做自己專一的動作，而且接受動態的輸入。其他細節則完全封在上層物件中。  
> 
 
```python

(lambda x: print("even") if (x % 2 == 1) else print("odd"))(2)

# odd : 2是奇數或偶數?寫成一行。

```
### _Functional Programming Style_ <span id="argument_block"></span>
* 為什麼 __引數區塊要以小括號包覆__ ? 看看下方範例。
* 也想想在呼叫一個 function 時句子的長相。 

```python

# 給兩個數，幫我算加減乘除
# => 這次有給 lambda 一個變數名稱了 
arithmetic = lambda a, follow: [
    (lambda a, follow: a + follow)(a, follow),
    (lambda a, follow: a - follow)(a, follow),
    (lambda a, follow: a * follow)(a, follow),
    (lambda a, follow: a / follow)(a, follow),
]

# => 給 lambda 一個變數名後，後方接的引數列便是以小括號包覆。
print(arithmetic(10, 2))
# [12, 8, 20, 5.0]


name = lambda n: 'name=' + n + '\n'
age = lambda a, l: 'age=' + a + '\n' + l
print(age("50", name("Tom")))
# age=50
# name=Tom

square = lambda x: x ** 2
product = lambda f, n: lambda x: f(x) * n

ans = product(square, 2)(10)
print(ans)
# 200
``` 

 
 
 
