---
title: Scala 隱式類
description: Scala Implicit Class
keywords: [Scala,ImplicitClass]
---

## 隱式類: Implicit Class
* 關鍵字 implicit 宣告在關鍵字 class 之前
* 有作用域的限制
* 一個 implicit class 可以有多個 Util methods
* 不一定要 return 與輸入相同的型別

## 使用限制條件
* 只能使用在其他 trait/class/objcet/package object 內部 \(限定作用域範圍)
* 需要 <code>__import implicit class__</code> 所屬的上層結構\(container)
* 作用域內不能出現與隱式類 <code>__同名變數__</code> \(方法,成員,Object, case class)
* constructor 中只有一個 <code>__非隱式的參數__</code>, \(但可以與 curry 並用)
* method 則可以有多個 參數

## 使用情境
* 讓 class 可以自動型別轉換. 看起來類似原 class 的能力\(behavior)增強.
* 範例中 DoubleUtil 讓 double 多了一個 <code>__~=__</code> 方法.

```javascript

    // 感覺上, implicit class 就是 Scala 背後幫你生出 UtilClass, 所以需要 import
    // 使用限制: 作用域 (object) 
    package com.alvinalexander.utils
    object StringUtils {
       implicit class StringImprovements(val s: String) {
          def increment: String = s.map(c => (c + 1).toChar)
          def decrement: String = s.map(c => (c - 1).toChar)
          def hideAll: String = s.replaceAll(".", "*")
          def plusOne: Int = s.toInt + 1
       }
    }
    
    // import 後可使用
    import com.alvinalexander.utils.StringUtils._
    object Main extends App {
       println("HAL".increment)
    }
 
    // 使用限制: 作用域 (package object) 
    package com.alvinalexander
    package object utils {
       implicit class StringImprovements(val s: String) {
          def increment = s.map(c => (c + 1).toChar)
       }
    }
    
    //使用
    import com.alvinalexander.utils._
    object Main extends App {
       println("HAL".increment)
    }
 
    
    implicit class RichDouble(x: Double) //  JVM global 是不允許的
 
    // 使用限制: 單一非隱式類建構參數
    implicit class RichDate(date: java.util.Date) // OK
    implicit class Indexer[T](collecton: Seq[T], index: Int) // Error, 兩個參數
    implicit class Indexer[T](collecton: Seq[T])(implicit index: Index) // OK, 一次一個
 
 
    // 自創一個新的浮點數比較子
       object DoubleUtil {
         implicit class DoubleImprovements(val lead: Double) {
           def ~=(another: Double) = {
             val precision: Double = 0.000000000000000001
             if ((lead - another).abs < precision) true else false
           }
         }
       }
       
       import DoubleUtil._
       val a = 0.3
       val b = 0.1 + 0.2
       
       if (a ~= b) {
         print("Equals")
       } else {
         print("Not Equals")
       }     
```