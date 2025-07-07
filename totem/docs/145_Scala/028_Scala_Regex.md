---
title: Scala 中的正則表達式
description: 正規表示式 Regular expression in Scala
keywords: [Scala,regex]
---


> Scala 因為 implicit conversion 自動轉換特性. 語法比 Java 更簡化

___Scala Regex 結構___

```javascript
   //r 與 s f raw 類似都是一個 function
   //此處自動轉成, Regex 物件
   scala> val numPattern = "[0-9]+".r
   numPattern: scala.util.matching.Regex = [0-9]+
   // or 明確自訂
   scala> val numPattern = new Regex("[0-9]+")
   numPattern: scala.util.matching.Regex = [0-9]+

   scala> val address = "123 Main Street Suite 101"
   address: java.lang.String = 123 Main Street Suite 101

   //單一結果回傳 Option 的使用, 避免 NPE
   scala> val match1 = numPattern.findFirstIn(address)
   match1: Option[String] = Some(123)
   
   //多結果, 回傳 iterable 物件(可以 foreach  囉)
   scala> val matches = numPattern.findAllIn(address)
   matches: scala.util.matching.Regex.MatchIterator = non-empty iterator
   
   //
   scala> val matches = numPattern.findAllIn(address).toArray
   matches: Array[String] = Array(123, 101)
```


### Scala Regex Examples

```javascript
   //Replacing
   // 由 String 的方法來驅動
   val address = "123 Main Street".replaceAll("[0-9]", "x")
   val result = "123 Main Street".replaceFirst("[0-9]", "x")
   //=> java.lang.String = xxx Main Street, x23Main Street
   
   // 由 Regex Util 來處理
   val regex = "[0-9]".r
   val newAddress = regex.replaceAllIn("123 Main Street", "x")
   val newAddress = regex.replaceFirstIn("123 Main Street", "x")
   //=> String = xxx Main Street, x213 Main Street
   
   
   //Extracting (Group)
   // 這邊的語法就特別了, Pattern Matching + Destruction 可以一起來
   val pattern = "([0-9]+) ([A-Za-z]+)".r
   val pattern(count, fruit) = "100 Bananas"   
   //count: String = 100, fruit: String = Bananas
```