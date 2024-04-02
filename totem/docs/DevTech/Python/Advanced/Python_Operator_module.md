---
title: Python 運算子進階-operator
description: 關於 operator
keywords: [Python,operator]
---
import { CodeBlock, dracula  } from "react-code-blocks";


# Python operators
> 介紹 Python 內建 operators，與 operator module。  

* 參考 : 
   * [operator — Standard operators as functions](https://docs.python.org/3/library/operator.html)
   * [Python operators](https://www.runoob.com/python/python-operators.html)  


## 內建的 operators 分類
> https://www.runoob.com/python/python-operators.html#ysf7  
> 注意:  
>> 次方的 operator 為兩個 asterisk。  
>> ^ 是位元的異或運算。  
>> 連續兩個 slash //, 除法且向下取整數。  
>
> 部分算術運算元有 overloaded，可用於非數值類資料結構。    
> overloaded 部分使用需小心。  
> 

* 算術運算元 (+-/*)
* 比較運算元(Comparison, ==, !=, &gt;, &lt;)
* 賦值運算元(Augmented Assignment, =, +=, -=, /=, %=, **=, //=) 
* 邏輯運算元 (and, or, not)
* 位元運算元 (&, |, ^, ~, &lt;&lt;, &gt;&gt;)
* 成員運算元 (in, not in)
* 實體運算元 (is, is not)

## 特殊的 operators:

* 這邊紀錄常用且個人比較容易忘記部分:  
   * 連續兩個 asterisk \*, 取次方的意思。 a\*\*b 指 a 的 b 次方。  
   * 連續兩個 slash //, 除法但是向下取整數(負值有差異 -9//2 得到 -5)。  


## operator module
>
> operator module 簡單的來說變是將原本的 operators 以函數的方式來呈現。 
> 因函數有名稱，可用作功能的描述。  
> 可想成類似 Java 的 Math 工具類，提供額外的功能。 
> 細節可參考 [operator — Standard operators as functions](https://docs.python.org/3/library/operator.html)  
> 類似功能也可見於 numpy module  

