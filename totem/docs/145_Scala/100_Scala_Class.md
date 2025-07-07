---
title: Scala 中的類別
description: Scala Class
keywords: [Scala,Class]
---

## Scala 的 Class 種類

| Type | &nbsp; | Key word | Instantiation |
| :-- | -- |--| --|
|**Class** |就是 instance 的 template  |  class   new  |
|**Case Class** |類似 <code>__enum__</code> 的 instance   | case class  不須 new|
|**Companion Class** |當一般的 class 有 <code>__Companion Object__</code> 時,該類稱之    |  |      
|**Companion Object** |類似 Singleton, Static class  |  object class    |  搭配 apply methods|


## Scala 的 Class 結構

### <code>__Scala 的 Companion Object__</code>
* 是一個 Singleton
* 一定會有一個同名的 Companion Class
* Companion Class 與 Companion Object 的 private fields 可以互通
* Companion Class 與 Companion Object 間 __推測應該是被 Compile 成一個 class 與 inner static class 間的關係__
* Scala 中沒有靜態修飾符, 但是 Companion Object 下的成員都是 static

### Scala Default Constructor
* 點運算的同義 method _$eq\(\)
* constructor parameters 的存取限制
    * var/val 決定是否建立 getter/setter
    * var/val 可以搭配 private 使用, => 不建立 getter/setter
    * 若 constructor param 未加上 var/val 一律視為加上 <code>__private__</code>. Scala 不會生成 get/setters
* Auxiliary Constructor: 輔助建構子
    * 方法名為 this 的 method, 且以 this 呼叫其他建構子
    
```javascript
    class Person(var firstName: String, var lastName: String, nickname: String) {
          println("the constructor begins")
          // some class fields
          private val HOME = System.getProperty("user.home")
          var age = 0
    
          // some methods
          override def toString = s"$firstName $lastName is $age years old"
    
          def printHome {
            println(s"HOME = $HOME")
          }
    
          def printFullName {
            println(this)
          } // uses toString
    
          def anotherName {
            println(nickname)
          }
          printHome
          printFullName
          println("still in the constructor")
    
    }
```

* Scala mutator \(setter) 的同義方法 <code>\_$eq(value)</code>

```javascript
    var p = new Person("Michael", "Jackson")

    p.firstName ="John"
    p.firstName_$eq("Mary")   
```

## Scala 子類的建構子
* 子類建構子參數的存取
    * 子類新建的 parameters 仍需定義 var/val
    * Constructor parameter 的 var/val 關鍵字 以及他的型別宣告在第一次出現處
    * 子類新的 params 不可以與 父類 params 同名.\(不然 自動生成的 get/setter 不就錯亂了嗎)
    * 子類 extends 後方不須再定義型別, 因為父類已經定義過
* Auxiliary Constructor 繼承父類別

```javascript
    class Book(val title: String) {  }
                                                            //不需要 title: String
    class Magazine(val ISBN: String, title: String) extends Book(title) {  }
        
    val m = new Magazine("1234", "SPORTS")
```

## Scala private Constructor/Fields
* 注意 private 寫在 constructor code block 前
* ex: singleton example
* Object-private fields

```javascript
    // 注意 private 寫在 code block 前
    class Brain private {
      override def toString = "This is the brain."
      
      //public
      var think: Double = 0.0d;
      
      private var talk: Double = 0.0d;
      
      
    }
    object Brain {
      val brain = new Brain
      def getInstance = brain
    }

    val brain = Brain.getInstance
```

## Scala Object-Private Fields
* 關鍵字: 在變數定義前加上 private\[this\]
* 限制只能在 scala object 中使用變數
* 加上 private\[this\] 會變成類似 private static variable, 其他 instance 也無法存取
    * Companion Class/Object 中的 private fields 預設是可以相互存取的
* 但是初始化 static variable 須經由 companion Object

```javascript
   class Stock {
        // a private[this] var is object-private, and can only be seen
        // by the current instance
        private[this] var price: Double = _
        
        def setPrice(p: Double) { price = p }
                
        // error: this method won't compile because price is now object-private
        def isHigher(that: Stock): Boolean = this.price > that.price
    }
```

## Scala Auxiliary Constructor \(輔助建構子\)
* Scala 中有 named-param, default-param, 所以減少建構子的數量
* Auxiliary Constructors 指的是 Java 中,以 <code>__this__</code> 呼叫其他建構子的技巧
* 以 <code>__this__</code> 為 method name 的其他 methods 稱 Auxiliary Constructors.
    * example 1: default Constructor params 最多
    * example 2: default Constructor params 最簡化
    * Auxiliary Constructors 經由 this delegate default constructor

```javascript
       //default value: 加上 =
       def log(message: String, level: String = "INFO") = {
             println(s"$level: $message")
       }
       
       
        //example1: primary constructor 最複雜
        class Pizza(var crustSize: Int, var crustType: String) {
          // one-arg auxiliary constructor
          def this(crustSize: Int) {
            this(crustSize, Pizza.DEFAULT_CRUST_TYPE)
          }
    
          // one-arg auxiliary constructor
          def this(crustType: String) {
            this(Pizza.DEFAULT_CRUST_SIZE, crustType)
          }
    
          // zero-arg auxiliary constructor
          def this() {
            this(Pizza.DEFAULT_CRUST_SIZE, Pizza.DEFAULT_CRUST_TYPE)
          }
    
          override def toString = s"A $crustSize inch pizza with a $crustType crust"
        }
        
        
        //example2: default constructor 最簡化
        class Pizza2() {
          var crustSize = 0
          var crustType = ""
    
          def this(crustSize: Int) {
            this()
            this.crustSize = crustSize
          }
    
          def this(crustType: String) {
            this()
            this.crustType = crustType
          }
        }
```

* Auxiliary Constructor vs. Companion Apply (case class 的 multiple constructors)
    * AuxCon 簡化 invoker 使用, 減少所需傳入的參數
    * Case class 搭配 companion object 時不須 new 關鍵字
    * 一個 companion object 可有多個 apply methods
* Auxiliary Constructor 使用 <code>__this methods__</code>
* Companion Object 使用 <code>__apply methods__</code>

```javascript
    // Scala Companion apply methods (case class apply methods)
    // the case class
    case class PersonC (var name: String, var age: Int)
    
    // the companion object
    object PersonC {
      def apply() = new PersonC("<no name>", 0)
      def apply(name: String) = new PersonC(name, 0)
    }

    val a = PersonC() // corresponds to apply()
    val b = PersonC("Pam") // corresponds to apply(name: String)
    val c = PersonC("William Shatner", 82)
```

## 複寫預設的 Scala Getter/Setter 技巧
* 可達到利用點運算取直與設值的功能
    * a.name / a.name="new name"
    * Scala style 的語法, 但是 name 只能定義一次的限制
* Conventions
    * 先定義 Accessor
    * Mutator 需命名為 Accessor Name 加一個底線
    * Mutator 需要以 函數變數型態定義. ([參考上方 Scala function 章節])
* 函數變數: 因為是變數, 所以等號移到變數之後, 而非實作區塊前