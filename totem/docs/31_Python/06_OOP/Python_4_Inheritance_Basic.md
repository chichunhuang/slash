---
title: Python 繼承介紹
description: Python Inheritance
keywords: [Python ,Inheritance]
---

# <span id="inheritance">Python 繼承介紹</span>
## Python 繼承
__Inheritance Syntax__

```python
class Child (ParentA, ParentB):
    pass
```

> Python 允許 <span style={{backgroundColor: '#ffd1b3'}}>多重繼承</span>。  
> 上方範例為 Child 同時繼承 ParentA, ParentB。  
> 若父類別們同時具有相同的變數時，  
> 子類別只取定義在左側的實作。  

__Inheritance Syntax to Linear Inheritabce__ <span id='Linear_Inheritabce'>&nbsp;</span>

<pre>
 object<br/>  
 &nbsp;&nbsp;^<br/>
 &nbsp;&nbsp;|<br/>
 ParentB<br/>  
 &nbsp;&nbsp;^<br/>
 &nbsp;&nbsp;|<br/>
 ParentA<br/>
 &nbsp;&nbsp;^<br/>
 &nbsp;&nbsp;|<br/>
 Child
</pre>

* 註:上方轉換後的結構資訊可以由 <span style={{backgroundColor: '#ffd1b3'}}> Child.mro() </span> 取得

> 也可想成 Child 先繼承 ParentA，再繼承 ParentB。沒上游後再繼承 object。  
> 當將繼承語法拆解成上方線性結構後，  
> 我們可以清楚看出 [Method Resolution Order](#inheritance_mro)的原則:   
> 由下而上 (上方為抽象類)    
> 由左樹而右樹 (右側為抽象類)  
> 遇到同名成員時左側優先 (覆寫優先)   
> 
<div style={{backgroundColor: '#ffd1b3'}}>
 一切都導因於: <br/>
 接近塑模的類別優先<br/>   
 繼承的越下方越接近實體類別，所以先採用<br/>       
 而子類別可覆寫父類別成員，所以子類優先<br/>
</div>


__Multiple Inheritance__

<pre>
  [B1]  [B2]  [B3]   [B4]<br/>
&nbsp;^     ^     ^     ^<br/>
&nbsp;&nbsp;\   /       \   /<br/>
&nbsp;&nbsp;&nbsp;\ /         \ /<br/>
&nbsp;&nbsp;&nbsp;[A1]       [A2]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;^          ^<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\        /<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\      /<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\    /<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MyClass<br/>
</pre>

> 繼承語法中 :  
> <span style={{backgroundColor: '#ffd1b3'}}>多重繼承左側優先次序較高</span>  
> 尋找繼承成員時，<br/>  
> 由下而上， MyClass-> A -> B  <br/>  
> 由左而右。 A1 tree -> A2 tree   <br/> 
> 最終: MyClass > A1 > B1 > B2 > A2 > B3 > B4 > object

* hint: 重組成 [線性單一繼承結構](#Linear_Inheritabce)以便於理解 
> [\<class '__main__.MyClass'\>, \<class '__main__.A1'\>, \<class '__main__.B1'\>, \<class '__main__.B2'\>, \<class '__main__.A2'\>, \<class '__main__.B3'\>, \<class '__main__.B4'\>, \<class 'object'\>]

## <span id="DiamondPatternInheritance">Diamond Pattern Inheritance: 鑽石繼承</span>
* TODO insert Diamond_Pattern_Inheritance.svg
> Python3+ <span style={{backgroundColor: '#ffd1b3'}}>查詢順序 : 由下而上，由左而右</span> 與多重繼承相同  
> 但當遇到鑽石相交時，則會先載入反向有子類到父類的共祖 tree，再依序走回簡單多繼承路線。  
> Python2 規則不同(不敘述避免混淆)

___Diamond Pattern Inheritance example: oop.inheritance.diamond.py___

```python
class Eukaryote:  # 真核生物
    pass

class CoAncestor(Eukaryote):  # 共祖
    pass

class CellWall():  # 細胞壁
    pass

class Chloroplast(): # 葉綠體
    pass

class Centriole():  # 中心粒
    pass

class Cilium():  # 纖毛
    pass

class Animal(Centriole, CoAncestor, Cilium):  # 動物
    pass

class Plant(CellWall, CoAncestor, Chloroplast):  # 植物
    pass


class VegetativeState(Animal, Plant):  # 植物人
    pass
    
# Plant 的共祖 tree: plant > CoAncestor > Eukaryote
# 當 VegetativeState 走到上層， Animal.CoAncestor 時會先解析 (CoAncestor 共祖 tree, 包含項下的 Plant 子類)
# VegetativeState > Animal Tree >> CoAncestor 共祖 tree > Plant Tree


print(VegetativeState.mro())
# [<class '__main__.VegetativeState'>,
# <class '__main__.Animal'>,
# <class '__main__.Centriole'>,
#
# <class '__main__.Plant'>, ## CoAncestor Tree
# <class '__main__.CellWall'>,  ## 建構 Plant Tree 時 CellWall 優先於 CoAncestor Tree
# <class '__main__.CoAncestor'>,
# <class '__main__.Eukaryote'>,
#
# <class '__main__.Cilium'>,
### 建構 Animal Tree 剩餘部分 (Centriole > CoAncestor Tree > Cilium)
#
# <class '__main__.Chloroplast'>,
### 建構 Plant Tree 剩餘部分 
#
# <class 'object'>]

```


## <span id="inheritance_mro">MRO : Method Resolution Order</span>
> Python 中以 super() 呼叫上層時的查詢路徑稱為 MRO (Method Resolution Order)。  
* Python3+ 的查詢原則是
    * 廣度優先
    * 由左到右
    * C3 演算法，以確保一個 ___類___ 只能被查一次。
* <span style={{color: '#0044FF'}}> ClassName.mro()</span> 可用來查詢實際的 Method Resolution Path。


## <span id="Override_Methods">Override Methods</span>

> 方法覆寫 (Overriding): 指的是父類別與子類別各自具有同名方法實作。  
> 實際採用何者，則看建構時是以哪一個 Type 建構。  
> 不需像 Java 額外標註  

```python
class Animal:
    def voice(self):
        return '......'

class Dog(Animal):
    def voice(self):
        return 'Bark!'

class Cat(Animal):
    def voice(self):
        return 'Mew~'

animal = Animal()
dog = Dog()
cat = Cat()

print(animal.voice())  # ......
print(dog.voice())  # Bark!
print(cat.voice())  # Mew~
```


## <span id="Overload_Methods">Overload Methods</span>
> Python 中沒有 Overload methods。  
> Python 語言本身便預設提供  
> variable-arguments, key-word-arguments, default value 等語法  
> 可達到其他語言中的 overloading 功能。  
> 需注意的是，Python 允許繼承關係間同名變數存在，而 Method Name 也是一種變數名，    
> 依據 MRO 順序，最接近實例(子類別)的同名方法為顯性。  

* 參考 [Python 打包與解包](../Advanced/Python_2_unpack_lisit_map)


## <span id="inheritance_constructor">繼承結構下 Python 建構子 </span>
* 參考其他 instance 建構方式: 
    * [Python 基本建構子: varArgs 與 kwArgs 的擴充功能來達到 overloading ](./Python_4_Class#cls_constructor)
    * [Factory Method: 使用 Class Method 語法來建構物件](./Python_4_Class_Members#cls_method_Factory)
    * 呼叫父類別建構子

> [Variable Argument 與 key-word Argument](./Python_4_Class#cls_constructor) 的特性不多說，本身即是一種 Overloading 變形。  
>
> Python 語法中可以使用 @classmethod 特性，在類別方法中經由 cls argument 來呼叫 \_\_init\_\_() 建構子，  
> 這個方法類似 Java 語言中的 this() 來呼叫多載的建構子。  
> 使用這個 Pattern 可以讓程式碼具有商業意義。  
> 
> Java 語言中在子類別中以 super() 來呼叫父類別建構子的語法。  
> Python 語言也有相同的 super() 語法，但建議建議僅在 __單一繼承__ 情境下使用。  
> 多重繼承情境則建議依據 Type 來呼叫父類建構子。


__super.constructor.py: 單一繼承範例 __ <span id="inheritance_constructor_single">&nbsp;</span>
* 還是建議採用 ParentName.\_\_init\_\_(self) 這語法
* 注意: 須 slef argument

```python

class Person:
    def __init__(self, role_name):
        self.role_name = role_name
        print('-Person-')

    def print_role(self):
        print(self.role_name)


class Writer(Person):
    def __init__(self, role_name, expertise):
        Person.__init__(self, role_name) ## 建議使用
        # super().__init__(role_name) ## 限單一繼承時使用
        # super(Writer, self).__init__(role_name) ## 依據 MRO order ,建議單一繼承時使用。
        self.expertise = expertise
        print("-Writer-")

    def print_expertise(self):
        print(self.expertise)
        
class Cook(Person):
    def __init__(self, role_name, expertise):
        Person.__init__(self, role_name) ## 建議使用
        self.expertise = expertise
        print("-Cooking-")

jk_rowling = Writer("Novel Writer", 'Writing')

jk_rowling.print_role()
# Novel Writer
jk_rowling.print_expertise()
# Writing
```


__super.constructor.py: 多繼承範例 __
* 還是建議採用 ParentName.\_\_init\_\_(self) 這語法，因為可以自行決定使用順序。
* 注意: 須帶 slef argument

```python

### Multiple Parent Example
class Scissor:
    def __init__(self, action):
        print("-Scissors-", action)
class Screwdriver:
    def __init__(self, action):
        print("-Screwdriver-", action)

class Knife:
    def __init__(self, action):
        print("-Knife-", action)

class SwissKnife(Screwdriver, Scissor, Knife ):
    def __init__(self):
        # super(Knife, self).__init__() # 只抓 self 與 MRO 中 self 的次一個
        # super.__init__() # 多重繼承下無法辨別

        Scissor.__init__(self, 'snipping') ## 建議使用, 可自訂 super 的 order
        Knife.__init__(self, 'cutting')
        Screwdriver.__init__(self, 'drilling')

        print('-SwissKnife-')

tool = SwissKnife()
```

## <span id="inheritance_super">繼承下的 super() 功能</span>
* 用在單一繼承的情境下。  
* 可用來呼叫 
    * [父類別建構子](#inheritance_constructor_single) 在上方範例中已介紹。 
    * 父類別方法函數: ParentName.methodName(self)
* 單用 Super() 語法時，若為 Multiple Inheritance，會因不知道確切指向哪個父類別而拋出錯誤。


__super.method.py __

```python

class Scissor:
    def __init__(self):
        pass

    def do(self, message):
        print('Scissor ', message)


class Screwdriver:
    def __init__(self):
        pass

    def do(self, message):
        print('Screwdriver ', message)


class Knife:
    def __init__(self):
        pass

    def do(self, message):
        print('Knife ', message)


class SwissKnife(Screwdriver, Scissor, Knife):
    def __init__(self):
        pass

    def do(self):
        Screwdriver.do(self, "Drilling") # 建議方式
        # super(Screwdriver, self).do("go") # by MRO. next is Scissor，不建議使用


print(SwissKnife.mro())
# [<class '__main__.SwissKnife'>, <class '__main__.Screwdriver'>, <class '__main__.Scissor'>, <class '__main__.Knife'>, <class 'object'>]

tool = SwissKnife()
tool.do()
# Screwdriver  Drilling

```

## 查詢繼承與型別相關屬性
* 以上方 SwissKnife 為例:

__由 instance/class 來反查繼承相關屬性__
* 基本上 instance 可經由內建變數 \_\_class\_\_ 反查得到 instance 的 class type。繼承相關屬性便可由 Type 來取得。

|    Instance Attributes      |      Description        |
|----------|------------------------|
|instance.\_\_class\_\_|回傳 class|
|instance.\_\_class\_\_.\_\_name\_\_|回傳 class name |
|instance.\_\_class\_\_.\_\_bases\_\_|回傳 class 的上游繼承結構|
|instance.\_\_class\_\_.\_\_base\_\_|回傳 class 的上一層父類別 |
|instance.\_\_class\_\_.\_\_mro\_\_|回傳 class 的繼承查找/函數查找路徑|
|instance.\_\_class\_\_.mro()|等同於 instance.\_\_class\_\_.\_\_mro\_\_|
|instance.\_\_dict\_\_|列出 instance 的所有 field/values|
|instance.\_\_module\_\_| 顯示 module 資訊 |

```python
tool = SwissKnife()
tool.do()

print(tool.__class__) # <class '__main__.SwissKnife'>
print(tool.__class__.__name__) # SwissKnife
print(tool.__class__.__bases__) # (<class '__main__.Screwdriver'>, <class '__main__.Scissor'>, <class '__main__.Knife'>)
print(tool.__class__.__base__) # <class '__main__.Screwdriver'>
print(tool.__class__.__mro__) # (<class '__main__.SwissKnife'>, <class '__main__.Screwdriver'>, <class '__main__.Scissor'>, <class '__main__.Knife'>, <class 'object'>)

print(SwissKnife.mro()) # [<class '__main__.SwissKnife'>, <class '__main__.Screwdriver'>, <class '__main__.Scissor'>, <class '__main__.Knife'>, <class 'object'>]
print(Scissor.mro()) # [<class '__main__.Scissor'>, <class 'object'>]
print(SwissKnife.__dict__) # {'__module__': '__main__', '__init__': <function SwissKnife.__init__ at 0x0000014FCF402160>, 'do': <function SwissKnife.do at 0x0000014FCF4021F0>, '__doc__': None}

```

__繼承結構與實例類別檢驗函數__

* isinstance(instance, type_or_tuple): 檢驗 instance 的  class
* issubclass(Child, Parent_or_tuple): 檢驗繼承關係
    * 當給定的 Types 是 tuple 時，檢查的結果是任一符合變回傳 True。(if any match)

```python

swissKnife = SwissKnife()

print( isinstance(swissKnife, SwissKnife)) # True
print( isinstance(swissKnife, Scissor)) # True
print( isinstance(swissKnife, (Scissor, Person))) # True, if any match

print(issubclass(SwissKnife, Role)) # False
print(issubclass(SwissKnife, (Role,Scissor))) # True, if any match

```

## Composite Pattern 複合模式 <span id='Composite_Pattern'>&nbsp;</span>
> 若單純的看功能面的話，繼承主要是讓子類別具有父類的能力，而子類卻不需增加額外的程式開發。  
> 繼承之外 Composite Pattern(複合模式) 也具有相同能力，所以在這邊也介紹一下。  
> 原則上便是類別槽串，外層類別具有內層類別功能。就像是細胞與包器間的關係。    

```python

class Screwdriver:
    def __init__(self):
        pass

    def drill(self, message):
        print('Screwdriver drilling: ', message)

class Knife:
    def __init__(self):
        pass

    def cut(self, message):
        print('Knife cutting: ', message)

class SwissKnife():
    def __init__(self):
        self.knife = Knife()  # Composite
        self.screwdriver = Screwdriver()

    def cut(self, message): # Delegation 
        self.knife.cut(message)
        print('SwissKnife cutting: ', message)

    def drill(self, message):
        self.screwdriver.drill(message)
        print('SwissKnife drilling: ', message)

    def cut_then_drill(self, message): 
        self.knife.cut(message)
        self.screwdriver.drill(message)
        print('SwissKnife drilling: ', message)
```