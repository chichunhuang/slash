---
title: Scala Curry
description: Scala Curry
keywords: [Scala,curry]
---

## Scala Curry
* Curry 應該是 Scala 的主要特色之一吧!
* 將多個參數的函數變成一個參數的函式再將它們 curry
* <span style={{color: '#0044FF'}}>__一個 function 把參數傳給 lambda expression, 並把 expression 當結果回傳__</span>

```javascript

   def sum(num1:Int)(num2:Int) = num1 + num2
   // 原始長相, 一個 function 回傳一個 lambda expression 當結果
   
   def original (num1 : Int) : Int => Int = {
      //return 一個 lambda exp
      (num2 : Int) => num1 + num2
   }
   
   val total = sum(1)(2)
   // val lambExp = sum(1)
   // val total = lambExp(2)
   
```