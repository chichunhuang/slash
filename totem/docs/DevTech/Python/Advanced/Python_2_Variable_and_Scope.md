---
title: Python 變數與變數存取範圍
description: Python 變數與變數存取範圍
keywords: [Python ,Var Scope]
---


# Python 變數與變數存取範圍: 
_Variables and Scopes_
> 
> Python 世界的邏輯是 <span style={{backgroundColor: '#ffd1b3'}}> __We are all consenting adults!__ </span>。  
> 所以，小標題寫的是 Naming Rules 而不是 Conventions。  
>> 我沒要求你，但你應該這樣做。  
>> 若做不到，我會在心裡笑你沒長大。  
>
> class name 以大寫字母開頭(same as Java)  
> module name (package name) 以小寫字母開頭(Java)  
> function name 以小寫字母開頭，以 Underscore 連接單詞
> 


## 命名規則: Variable Naming Rules 

|                |說明                          |
|----------------|-------------------------------|
|varName|public|
|_varName|module /package, 無法 from x import x|
|__varName|local variable 類別內|
|__varName__|系統變數 system variables|

 與 Java 不同:  
> underscore _ (物件封裝) : 當不希望 caller 直接使用時的規則  
 
### \_x 單一底線變數
__單一底線變數: weak internal use indicator,隱含的 import 語法:  __
> 告知這個變數或方法應該限制在 class 之內使用，  
> 不應該被任意 import。  
> 但需注意的是 <span style={{backgroundColor: '#ffd1b3'}}>single underscore 並非一種限制，只是告知</span>。    
> 所以還是可以經由 classInstance._x 取得內容。  
>
> 且在 Object Oriented 結構下，單一底線變數 \_x 他還隱含著: 這個<span style={{backgroundColor: '#ffd1b3'}}>變數將被子類別複寫的意思</span>。  
> 所以要變免直接使用單一底線變數。  
> 
> test.py 中的單一底線變數 _x   
> 無法經由  
> from test import * 被匯入  
> 
> 但是可以明確的  
> from test import _x 被匯入  


### \_\_x 雙底線變數
__雙底線變數:類似私有變數__  
> 會被 Python 的 name managling 機制改名為， _className__x。  
> 因此無法經由 classInstance.__x 取得，而<span style={{backgroundColor: '#ffd1b3'}}>避免資訊被誤用</span>。  
> 進而產生出 __類似私有變數__ (private variable)的結果。  
> 但設計(改名機制)本意是，避免資料被誤用，或是方法被子類覆寫等情境。  

### \_\_x\_\_ 前後雙底線
__前後雙底線:Python 系統所使用與定義的變數__  
> 用來提醒該變數是 Python 系統內建使用的變數。   
> 特殊長相，一方面可用作提醒，另一方面也可避免與使用者自訂變數相衝突。  
> 簡單的來說就是



## 求值策略: Argument Evaluation Binding
與大多數程式語言相同，易理解。
* Primitive type(Immutable Arguments) : Call by Value
    * 數值, 字串
* Object type(Mutable Arguments) : Call by reference
    * list, map, object...

> 注意:  
> 匯入模組中的 _值變數_ value variable  
> 
> from x import y &nbsp;:&nbsp; call by value  
> import y &nbsp;:&nbsp; call by reference  

## 變數存取範圍: Variable Scope


### Shadow Effect : LEGB Rule 
* Python 中變數查找的順序(由內而外)
    * 注意 \_x 無法經由 import * 取得
    * 注意 \_\_x 會被改名  

> Local&nbsp;&nbsp;=>&nbsp;&nbsp;Enclosing&nbsp;&nbsp;=>&nbsp;&nbsp;Global&nbsp;&nbsp;=>&nbsp;&nbsp;Built-in  


### 嵌套作用域 Enclosing Scope
* enclosing scope(嵌套作用域) 又稱 statically nested scope(靜態嵌套作用域)

> 這邊指的是槽串內部的 function 可以取得外部 host 的資訊。  
> 下方範例 labmda 可取得外面 host_var。   

_範例: 嵌套作用域 Enclosing Scope_

```python
def host_fun(a, b):
    host_var = 100
    sum = lambda i, j: i + j + host_var
    return sum(a, b)

print(host_fun(1, 3))
#104
```


_範例: 嵌套作用域 Enclosing Scope 遇到迴圈_
* 下面範例釋疑: 
    * 第一範例: 確實以迴圈建立多個 lambdas，每個 lambda 也確實可以拿到 host 的引數，但只拿到 reference，所以當迴圈不斷改變引數值時，真正使用的是最後的元素值。  
    * 第二範例: 利用 python 未 function arguments 可指定預設值的特性來暫存迴圈的  index。  
    
      

```python
def magazine(bullet: int):
    shoots = []
    for i in range(bullet):
        shoots.append(lambda : 'Got %d Points' % (i + 1))
        # 此處因為 labmda 尚未執行，而 looping 過程中 i 值不斷改變。
        # 最終造成每個 lambda 的 i 值都相同
    return shoots

shooting = magazine(3)
for s in shooting:
    print(s())
# Got 3 Points
# Got 3 Points
# Got 3 Points

def magazine(bullet: int):
    shoots = []
    for i in range(bullet):
        shoots.append(lambda s=i: 'Got %d Points' % (s + 1))
        # 此處因為 labmda 有將 i 值另存保留(指定單一 lambda 的預設)，所以得到不同結果
    return shoots

shooting = magazine(3)
for s in shooting:
    print(s())
# Got 1 Points
# Got 2 Points
# Got 3 Points
```


### 工廠函數 Factory Function 
> Factory Function 又稱 closure  
> 指的是 nested function 在 runtime 時可以記住 host 所屬變數值的特性。  
> 而 host 函式因為具備建立內層函式所需要的環境，故被稱為 factory function。  

_範例: shoot function 可以記住 bullet 的總數 _

```python
def magazine(bullet):
    def shoot(fire):
        return '%d bullets left' % (bullet - fire)
    return shoot

shooting = magazine(10) # 返回內層的 shoot()
print(shooting(2)) # shoot() 保留了 bullets 總數,即使外層 scope 已消失 
# 8 bullets left
# magazine(10)(2)
```




### global 關鍵字
> global 關鍵字只會出現在 _<span style={{backgroundColor: '#ffd1b3'}}> 非頂層 </span>_ 的結構中。
> 用來指像頂層的全域變數用(與 nonlocal 比較)。  
> 
> 使用情境略分為下列三項:  
>
> 1. 解決區域變數與全域變數命名衝突  
> 用來宣告將 <span style={{backgroundColor: '#ffd1b3'}}> __同名的區域變數指向全域變數__ </span>。  
> Enclosing Scope(嵌套作用域)的運作下，  
> 函數或是一般的程式區塊預設是  __可直接存取，但不能改變__ 全域變數的內容。  
> 因此若想在區塊內更改全域變數內容的話，  
> 會需要在區域區塊內將變數補上 global 修飾詞。  
> 
> 2. 在程式區域區塊中聲明一個全域變數。  
> 按照 Python 經常出現的省略語法，可以直接想成:  
> 加 global 修飾詞的區域變數，等同於 __也__ 在全域宣告了一個同名的全域變數。
> 
> 3. 若想在區塊內修改全域變數，則必須以 gloabl 關鍵告知 VM，此變數是全域變數。  
> 不然區塊內的變數預設視為區域變數。 


<div style={{backgroundColor: '#b3ffb3'}}>
<pre>
關於 global 的語法面就如同上面敘述。

$ hidden 
$ insect-totem.net
$ TODO: 

回歸到程式語言的設計面，
到底 Python 什麼時候會用到 global/nonlocal?  

1. 為什麼會有工程師想要或是必要設計出命名衝突的變數或方法?  
LEGB Rule 變數查找過程預設會由內往外找。  
所以即使命名衝突那通常想要的也是 local 的那一個啊?  
若發生，我認為是誤用。  
  
2. 全域變數晉升。為什麼要在函數中定義一個不是自己能管轄的全域變數?   
蘋果應該長在蘋果樹上。全域的就應該放在全域吧?  
這對我來說，完全不合理。  
這情形就像是公司的獎逞制度定義在清潔人員身上一樣難以理解。  
  
3. 剩下 global 的用途便是想更改全域變數內容。  
我接受。
我願意接受在一個 module Scope 或 class Scope 中的全域變數，  
被一個明確指名異動該變數的方法中使用，不然會天下大亂。  

</pre>
</div>



_解決區域變數與全域變數命名衝突_ and _區塊內修改全域變數_

```python
address = 'Taipei, Taiwan'

# LEGB
def resetIp():
    address = '0.0.0.0'
    return address

# modify global var
def uproot(location:str):
    global address
    address = location
    return address

print(address)
# print host address variable
# 'Taipei, Taiwan'


# uproot should be invoked out of this module
# and host address sholud be renamed to __address
uproot("Taichun, Taiwan")
print(address)
# update and print host address variable
# 'Taichun, Taiwan'


print(resetIp())
# LEGB
# 0.0.0.0
```

_在程式區域區塊中聲明一個全域變數:全域變數晉升_

```python

def fun():
    global public_X
    public_X = 55
    print(public_X)
    # print(y)


def fun2():
    global public_X
    print(public_X)


fun() # 需告並初始化全域變數處
fun2() # 取用隱藏的全域變數
# 55
# 55
```


_模組內全域變數被其他模組匯入_

* 如果在程式區塊(如:函式中)將 global 指向 import 進來的 variable。會發生? 
    * 先記得一件事: primitive type 會 copy 進來。 object type 是傳進 reference。
    * imported  vars 本身被視為是模組內的全域變數。  
    * 所以，整個情境是跟 module 內全域變數的一樣。
    * 但 <span style={{backgroundColor: '#ffd1b3'}}>要注意 object type call by reference</span>，也就是說你會改到 __來源模組__ 的內容。也會 __影響到其他 import 同模組__ 的程式片段。    
    
> 這邊的重點在 ___封裝___
>
> 匯入的資料預設是整個 module 的全域變數。  
> 回歸前面說的 Pythonic Convention: underscore 變數名名規則，你應該先做 ___適當封裝___ 。  
> We are all consenting adults。變數放出來，就別怪其他使用者改變你的變數值。  
> 也就是使用 \_\_x 雙底線變數。

    
```python
# 小心 資料被誤改啊.
```




### nonlocal 關鍵字
* 在 <span style={{backgroundColor: '#ffd1b3'}}>槽串結構</span>中，例如 function 中又再定義 function 時，最內層(inner fun)可以藉由 nonlocal 取得外層(outer fun)中變數的 reference。
* 這設計的邏輯到底是...... 真方便使用...... 
* 避免命名衝突才是上策。 

> nonlocal 關鍵字只會出現在 _<span style={{backgroundColor: '#ffd1b3'}}> 槽串結構 </span>_ 的內層結構中。  
> 用來指像外層的同名變數用。所以這邊隱含著 全域/中間層s/內層 至少出現 __三次同名變數__ 的情境。    
> 真的是來亂的。
>
> 與 global 不同處在於。  
> 內層的區塊中的 global 指向全域同名變數(最外層)。  
> 
> 而 nonlacal 則是  
> 內層的區塊中的 nonlacal 指向由內向外依序發現的第一個同名變數(內向外第一個發現)。  

_nonlocal 範例_

```python

passenger = "PASSENGER"


# without nonlocal
def tom():
    passenger = "TOM"

    def tom_jr():
        passenger = "TOM JUNIOR"
        print('tom_jr: ', passenger)

    tom_jr()  # tom_jr() ececuting
    print('********** tom: ', passenger)


tom()  # executing
print("passenger: ", passenger)
# tom_jr:  TOM JUNIOR
# **********  tom:  TOM  **********
# passenger:  PASSENGER


# with nonlocal
def gary():
    passenger = "GARY" # modified by nonlocal var

    def gary_jr():
        nonlocal passenger # ref to var in gary()
        passenger = "GARY JUNIOR"
        print('gary_jr: ', passenger)

    gary_jr()  # tom_jr() ececuting
    print('********** gary: ', passenger)


gary()  # executing
print("passenger: ", passenger)
# gary_jr:  GARY JUNIOR
# **********  gary:  GARY JUNIOR  **********
# passenger:  PASSENGER
```



   