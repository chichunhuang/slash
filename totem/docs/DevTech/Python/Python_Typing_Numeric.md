---
title: Python 數值型別
description: Python 數值型別
keywords: [Python,Numeric]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python Numeric Literals(數值型別與常量)

## Integer and Floating-Point literals
* 整數: 10進位，無窮精度
* 浮點數: 小數點格式或加上 e 或 E (stands for exponent 指數)

## Hexdecimal Literals(16進制常量)
* 0==x== 或 0==X== 起始的常量 (x stands for he==X==decimal) 
* 0\~9, A\~F 或 0\~9, a\~f

## Octal Literals(8進制常量)
* 0==o== 或 0==O== 起始的常量 (o stands for ==O==ctal) 
* 0\~7

## Binary Literals(2進制常量)
* 0==b== 或 0==B== 起始的常量 (b stands for ==B==inary)
* 0 or 1

## Complex Literals(複數)
* R + Ij
* complex(Real, image)


## 進制轉換
> 電腦中浮點數本身並不精確，因故若不採用專用套件並無法十進位將浮點數轉成其他進制。  
> 是故，下方範例僅 __十進位整數__ 轉其他進制範例。  

### 整數轉換成其他進制的字串(Integer -> String)
* syntax
    * hex(int)
    * oct(int)
    * bin(int)

```python

num_integer = 9
print(hex(num_integer))
print(oct(num_integer))
print(bin(num_integer))

===
0x9
0o11
0b1001
```


### 其他進制文字轉十進位整數(String -> Number)
* syntax: int('literal', base)
    * [Python String 處理: String 與數值轉換](./Python_Typing_String)

```python
hex_string ='0x9'
print(int(hex_string, 16))
===
9

oct_string ='0o11'
print(int(oct_string, 8))
===
9

bin_string ='0b1001'
print(int(bin_string, 2))
===
9

# 預設為十進位
five = int('5')
print(five)
===
5
```

## Python 數值運算
* Python3 數值運算相關工具分三大類
    * Expression operators: +, -, *, /, >>, **, &, ...
    * Built-in Mathematical Functions: pow(), abs(), round(), ...
    * Utility modules: random, math, ....(需要 import)
    * Operators 也可被 overload
* 常用運算:
    * 同時取商與餘 : divmod(dividend,divisor)
    * 真除法 : /, 保留餘數, 結果有小數點
    * 向左取值 (注意負數) : //
    * 向原點取值 : math.trunc(num)
    * 取餘數 : %


### 同時取商與餘

```python
# function : divmod(dividend,divisor)

print(divmod(100,3))# tuple2
print(divmod(100,3)[0]) # 商
print(divmod(100,3)[1]) # 餘
===
(33, 1)
33
1
```

### 真除法(True Divisions)

```python
# operator : /
x = -100/3
print(x)
===
33.333333333333336
```

### 向左取值 (Floor division, 注意負數)

```python
# operator : //

x = -100//3
print(x)
===
-34

x = 100//3
print(x)
===
33
```

### 向原點取值

```python
# function: math.trunc(num)

import math
print(math.trunc(-33.3))
===
-33


import math
print(math.trunc(33.3))
===
33
```

### 取餘數

```python
# operator : %

print(100%3)
===
1

```


## Python Decimal(十進位)
* 用來修正 python 浮點數精確值不足問題

### 為 Decimal 設定精確值(Precision)
* Precision: 設定顯示的精確位數

* Global (全域設定)

```python
from decimal import *

getcontext().prec = 4
print(Decimal(1) / Decimal(3))
print(Decimal(1000) / Decimal(3))
print(Decimal(100000) / Decimal(3))
print(Decimal(1000000) / Decimal(3))
===
0.3333
333.3
3.333E+4
3.333E+5
```
* Temporary (臨時精確設定)

```python
from decimal import *
with localcontext() as ctx:
    ctx.prec= 4
    print(Decimal(1000000) / Decimal(3))
===
3.333E+5
```

## Python Fraction(浮點)
* 可將指定數值轉換成為 __分子__ 與 __分母__ 結構，且 Fractions 間可作數值操作。
* Fraction 建構方式
    * Fraction(numerator=0, denominator=1) : 分母為 0 時拋出 ZeroDivisionError
    * Fraction(int|float|str|Decimal|Fraction) 
    * Fraction(*tuple2) : 給予一個長度為二的 list / sequence，Asterisk(*)指的是 unpack。
    
* Fraction 建構範例

```python
from fractions import *
# from fractions import Fraction

f_str = Fraction('.2')
print(f_str)
#　1/5

f_float = Fraction(10.5)
print(f_float)
# 21/2

f = Fraction(3,5)
print(f)
# 3/5

f = Fraction( *(3,5) )
print(f)
# 3/5, unpack tuple2
```

* Fraction 操作範例

```python
from fractions import *

f1 = Fraction(4,3) # 4/3
f2 = Fraction(9, 8) # 9/8

print(f1+f2)
# 59/24

print(f1/f2)
# 32/27

print(f1//f2)
# 1

print(f1%f2)
# 5/24 通分後取餘數
```

* Fraction 轉換操作範例
    * float.as_integer_ratio() : 將浮點數轉成 tuple2
    
```python
from fractions import *
fp = 2.5
f = Fraction(fp)
print(f)
# 5/2 , 直接使用 Fraction(float 建構)

f_tuple = (4, 3)
f = Fraction(*f_tuple)
print(f)
# 4/3 , 使用 Fraction(*tuple2) 建構 


fp = 2.5
f = Fraction(*fp.as_integer_ratio())
print(f)
# 5/2 , fp 先經由 float.as_integer_ratio() 轉 tuple2, 再使用 Fraction(*tuple2) 建構

```

## 在 Python2 Compile Python3 程式碼會讓你出 Bug 的部分
* python3 vs python2 取商 (//)與模(%) operators 定義不同


