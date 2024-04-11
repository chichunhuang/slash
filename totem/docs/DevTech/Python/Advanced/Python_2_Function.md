---
title: Python 函數
description: Python 函數介紹
keywords: [Python,function]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 函數

##　函數陷阱
> 
> 預設值是 function 創建後產生的一個物件，  
> 會存在於 function 所在的 scope，形成類似全域的一個變數。  
> 須小心 multable default value，會間接造成預設值不斷改變。  
> 


___function: multable default value ___

```python
# function multable default value: list
def string_builder(element: str, arr=[]):
    arr.append(element)
    print(arr) # 印出當前資料內容
    return arr


x = string_builder('A')
# ['A']
y = string_builder('B')
# ['A', 'B'], 資料出現異常累加
z = string_builder('C')
# ['A', 'B', 'C'], 資料再次出現異常累加


# ==> 發生 multable 內容累加情形
print(x)
# ['A', 'B', 'C']
print(y)
# ['A', 'B', 'C']
print(z)
# ['A', 'B', 'C']
```

## 函數註釋(Annotation)寫法
> 
> Python 雖被定義為直譯式語言且可動態型別綁定，但為了將來好維護，  
> 我還是期待能為函數與變數簡單定義目的預期待型別，並作為團隊慣例。  
> 如此，才能較放心的簡化函數的型別檢查，不然光檢查輸入資料格式就應接不暇。    

___Annotations Syntax___

* 目前測試變數註釋時發現:
    * 型別或變數敘述似乎只能二擇一
    * 回傳值似乎只能指定型別
    * 匿名函數(lambda 無法寫註釋)，冒號被用做定義函數區塊用了


```python

# 變數註解: 變數名:註解=預設值
# 回傳值: 直接填入型別或 None

# 變數敘述
def funcName(varName:'desc'=defaultValue) -> retType:
    pass

# 變數型別
def funcName2(varName:int=defaultValuue) -> retType:
    pass
    
```


___Annotations Example___

```python

def area(w: 'width' = 10, l: 'length' = 10) -> int:
    return w * l
print(area.__annotations__)
# {'w': 'width', 'l': 'length', 'return': <class 'int'>}


def area(w: 'width' = 10, l:int = 10) -> int:
    return w * l
print(area.__annotations__)
# {'w': 'width', 'l': <class 'int'>, 'return': <class 'int'>}    
```


## Python 函數的屬性(Attributes)
> 
> 類似"靜態本地"變數(static local)  
> 直接為函數指定一個靜態變數。  
> 必須先為桿變數初始化並賦值後才能使用。  
>
> 使用情境:  
> Python 中函數可以是一級成員(first-class object)，  
> 所以這邊應該是 Python 以函數抽象物件時的另種作法。  
> 

___Static Variable: 直接餵 static variable 給一級成員___

* 範例中的變數 count
* 注意 static 變數的命名方式: <span style={{backgroundColor: '#ffd1b3'}}>要冠上函數名稱: circleArea.pi</span>

```python
def circleArea(radius: int):
    pi = 3.14 # 宣告一個變數 pi
    circleArea.pi = pi # 將 pi 轉成 static 成員，且每次初始化時會 reset
    pass

circleArea.pi = 3.14159
# define count variable, and init
# or init by invoking foo(x) first
# otherwise: AttributeError: 'function' object has no attribute 'count'

print(circleArea.pi)
print(vars(circleArea))
# 3.14159
# {'radius': 3.14159}

y = circleArea
y.pi += 1 # 導向共用的靜態變數
print(circleArea.pi)
print(vars(circleArea))
# 4.14159
# {'radius': 4.14159}

z = circleArea(10) # reset
print(circleArea.pi)
print(vars(circleArea))
# 3.14
# {'radius': 3.14}

``` 

___Static functions: 函數一級成員下的 static function___

```python
def area():
    pi = 3.14

    def cricleArea(radius: int):
        print("Circle Area = ")
        return pi * radius * radius

    def squareArea(width: int):
        print("Square Area = ")
        return width * width

    # 此區將成員宣告為 static members
    area.cricle = cricleArea
    area.square = squareArea
    area.pi = pi
    return area


a = area()

print(a.square(10))
# Square Area =
# 100

print(a.cricle(10))
# Circle Area =
# 314.0

print(a.pi)
# 3.14
```

## 同樣是靜態成員: 常數
* [Python 常數實作方式](./Python_2_Constant)