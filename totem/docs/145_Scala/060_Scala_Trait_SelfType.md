---
title: Scala Traits and Self Type
description: Scala Traits and Self Type
keywords: [Scala,Traits,Self Type]
---

### Trait vs. self type : ch9
* Trait vs. self type
    * <code>__trait__</code> __定義共同的行為__
    * <code>__self type__</code> 確保, __trait 所需參數能夠取得__
    * 例如: 有一個 Trait Fly, 使用時可以搭配一個 FlyingParameter 這個 Self Type 來使用(Java 中可能會定義一個 Base Class 限制動作與資料取得)
    * trait 的 constructor 不可以有 constructor parameters
    * [trait 下如何建立 properties]
* Scala 底層概念是
    * Self Type 類 是 trait 類的父類別
    * __為父類別添加行為的概念__
    * 使用時合約與資料分開取得
* self type 可以想成是規格, 沒有 self type 的 trait, 就是單純的 Java Interface
* trait 是 SAM interface, 可想成是訂 contract 的地方, trait 除了 contract, 也可以是合約實作的地方 \(Single Abstract Method class)
* self type 是 資料來源 \(trait 不能有類參數, 因沒建構子), 合約所需要的 input,
    * 可以借由 self type \(父類)來要求, 子類必須準備好
    * 子類專一的input可以定義在 trait 的 method 中
* Scala 底層概念是 Self Type 類 是 trait 類的父類別 => 父類別添加行為的概念

```javascript

    //self type (規格)
    class Animal(var weight: Int, var height: Int) {
      def getWeight() : Int = { weight }
      def getHeight() : Int = { height }
    }
    
    
    //trait (合約)
    trait Mammal { // 沒 default constructor
      self: Animal =>
    
       // trait 利用 self type 取得所需的 input
       def getSize() = {
          self.getHeight() + self.getWeight()
       }
       
       //額外的 input
       def getScale(legs : Int) = {
            self.getHeight() + self.getWeight() + legs
      }
    }
    
    
    //使用方式
    class Elephant(weight: Int, height: Int) 
           extends Animal(weight, height) 
           with Mammal {
    }
    
    //test run
    object Elephant {
      def main(args: Array[String]) {
        var elephant = new Elephant(10, 20)
        print(elephant.getSize())
        print(elephant.getScale(5))
      }
    }
```