---
title: Scala 基本型態 Symbol
description: Scala 基本型態 Symbol
keywords: [Scala,Symbol]
---

## Scala 基本型態 Symbol

* 相同 name 屬性 \(內容) 的Symbol會指向同一個 instance
    * Symbol 有一個 field 稱作 name, 用來接 content
* 相同內容 \(s.name) 的Symbol有相同的Hash 🢂 方便快速比較, 節省效能
    * 所以可以用 == 來進來快速比較
    * 使用情境, 例如 Map\<String, Data\> 可以改為 Map\<Symbol, Data\> 加速 map keys 的比對
* Symbols are used where you have a closed set of identifiers that you want to be able to compare quickly.
* 封閉的有限數量符號, 是字串的再次封裝, 方便比較用
* 類似 static string, 或是 String type 的 enum

```scala
    // # 1
    // Same content => JVM 自動處理校正成 Same instance
        val var1 = Symbol("Same Same")
        val var2 = Symbol("Same Same")
        print(var1.hashCode())
        print(var2.hashCode())
        println(var1 == var2) //true
        println(var1 eq var2) //true
        
    // 非 Symbol, JVM 部會自動校正成相同 instance 
        val str1 = new String("Different")
        val str2 = new String("Different")
        print(str1.hashCode())
        print(str2.hashCode())
        println(str1 == str2) //true
        println(str1 eq str2) //false
```