---
title: Scala 數值相關處理
description: Scala Numeric peration
keywords: [Scala,Numeric]
---

## Scala 的 <code>__++__</code> <code>__--__</code> 操作
* Scala 沒有上述操作,\(val 是 immutable)
    * 但 var 能用 +=, -=, *=, /=

## Scala 的隨機數 : scala.util.Random

```javascript

   val r = scala.util.Random
   
   //隨機整數, 浮點數, double, char...
   val x = r.nextInt (有可能是負數)
   val y = r.nextDouble
   
   //r.nextInt(10) : 0~10間的隨機數
   var range = 0 to r.nextInt(10)
   
```

## Scala Range, List, Array, Loop

```javascript

   val range = 1 to 10 by 3
   val array = 1 to 10 by 3 toArray
   val list  = 1 to 10 by 3 toList  
   
   // i<=5
   for (i <- 1 to 5) { println(i) }
   // i<5
   for (i <- 1 until 5) { println(i) }
   
```

## Scala 數值格式化 Formatting
* 利用 Scala 的 f function
    * f syntax 關鍵字是 %
    * 其他 Scala String 的 formatting function : f, s, raw
* 利用 Scala 的 Formatter
    * java.text.NumberFormat.getCurrencyInstance //錢幣 $123.45
    * java.text.NumberFormat.getInstance //浮點數 10,000.123
    * java.text.NumberFormat.getIntegerInstance\(locale) //整數 1.000.123

```javascript

    val pi = scala.math.Pi
    println(f"$pi%1.5f")  // 3.14159
    println(f"$pi%1.2f")  // 3.14
    println(f"$pi%06.2f") // 003.14, 左側補零(共6字元)
      
```