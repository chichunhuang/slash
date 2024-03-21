---
title: Python Typing(比較)
description: Python 型別
keywords: [Python ,Tutorial]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 型別觀念摘要
* 與 Java 比較，列出不同處方便記憶。

# Python Variables and Reference (變數與參用)
* object type : call by reference
* built-in type : call by value
    * built-in type: 建立後會存在於記憶體中供往後變數重複使用
* 與 Java 觀念類似

# Python Primitive Type
* 小括號: tuple, immutable list
* 中括號: list, mutable list
* 大號: dict, key-value map

# Python vs Java Opertors (運算子符號比較)    
* Python vs Java 同符號但用於不同概念
* Python operator:
    * same value: ==
    * same object: is

|                |  Python | Java |
|:---------------|:--------|:-----|
|相同物件比較(reference)| is   | == |
|同內容           值比較| ==   | equals |


# Python Operator overload (為運算子增加其他運算)
* Python 乘法運算子(asterisk, \*)有為 sequence 增加 overload 運算方法
* 註: 可與 Pandas 的 Brocasting 運算進行差異比較

* asterisk : String 直接將內容複製 N 次

```python

name = 'John'
tripleName = name * 3
print(tripleName)

# 'JohnJohnJohn'

```

* asterisk : Array 直接將內容複製 N 次

```python

scores =[10,20,30]
tripleScors = scores * 3
print(tripleScors)

# [10, 20, 30, 10, 20, 30, 10, 20, 30]

```