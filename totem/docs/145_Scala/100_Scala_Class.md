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


## Scala 的 Class 結構 <span id="scala_class_structure">&nbsp;</span>

### <code>__Scala 的 Companion Object__</code> <span id="scala_Companion_Object">&nbsp;</span>
* 是一個 Singleton
* 一定會有一個同名的 Companion Class
* Companion Class 與 Companion Object 的 private fields 可以互通
* Companion Class 與 Companion Object 間 __推測應該是被 Compile 成一個 class 與 inner static class 間的關係__
* Scala 中沒有靜態修飾符, 但是 Companion Object 下的成員都是 static

### Scala Default Constructor <span id="scala_Default_Constructor">&nbsp;</span>
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

## Scala 子類的建構子 <span id="scala_sub_constructor">&nbsp;</span>
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

## Scala private Constructor/Fields <span id="scala_private_constructor">&nbsp;</span>
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

## Scala Object-Private Fields <span id="scala_object_private_fields">&nbsp;</span>
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

## Scala this and super <span id="scala_this_super">&nbsp;</span>
* this
    * 在輔助建構子 [Scala Auxiliary Constructor] 用法同 Java this, delegate to 其他建構子
    * 另外用在 [Object-Private Fields]
* super

## Scala Auxiliary Constructor \(輔助建構子\) <span id="scala_Auxiliary_Constructor">&nbsp;</span>
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

## 複寫預設的 Scala Getter/Setter 技巧 <span id="scala_get_set">&nbsp;</span>
* 可達到利用點運算取直與設值的功能
    * a.name / a.name="new name"
    * Scala style 的語法, 但是 name 只能定義一次的限制
* Conventions
    * 先定義 Accessor
    * Mutator 需命名為 Accessor Name 加一個底線
    * Mutator 需要以 函數變數型態定義. ([參考上方 Scala function 章節])
* 函數變數: 因為是變數, 所以等號移到變數之後, 而非實作區塊前

```javascript
      // 這邊以 private 封裝原始的名稱, 若未封裝則可以用 person._original 存取
      class Person(private var _original: String) {
          def name = _name                                //accessor
          def name_= (input: String) { _original= input } // mutator
      }  
      
      var person = new Person(_original= "totem")
      person.name 
      
      person.name ="Totem"
```

## Scala Lazy Fields \(Performance) <span id="scala_lazy_field">&nbsp;</span>
* 如果一個變數值需要大量運算, 可採用 lazy field 的技巧
* 需使用 lazy 關鍵字
* 將 Code Block or Function 指定給一個變數
* 範例中的 text 是檔案的暫存區
* 可以與 function 比較\(fun: 回傳值是每次呼叫重新計算一次)

```javascript
    // lazy field example
    class Foo {
    
        import scala.xml.XML
        // 這裡有有 lazy 關鍵字
        lazy val text =
            io.Source.fromFile("/etc/passwd").getLines.foreach(println)
    }
    
    // 這邊沒加 lazy 關鍵字, 在 Foo 建構時, 便會讀取 file 中的資料
    class Foo {
        val text = {
            var lines = ""
            try {
                lines = io.Source.fromFile("/etc/passwd").getLines.mkString
            } catch {
                case e: Exception => lines = "Error happened"
            }
            lines
        }
        println(text)
    }
```

## Scala 沒初始值 fields 定義 <span id="scala_field_init">&nbsp;</span>
* 改用 \[Option\] 來處理 None / Some
* 範例中的 Person.address 預設是 None

```javascript
   case class Person(var username: String, var password: String) {
        var age = 0
        var firstName = ""
        var lastName = ""
        var address = None: Option[Address]
   }
    
   case class Address(city: String, state: String, zip: String)
   
   //給值
    val p = Person("alvinalexander", "secret")
    p.address = Some(Address("Talkeetna", "AK", "99676"))
```

## Abstract class/Abstract Fields/Trait 下如何建立屬性\(Properties) <span id="scala_abstract">&nbsp;</span>
* 只有 abstract class 可以建立 abstract fields \(greeting/age)
* abstract fields 在 <code>__concrete class 中實作時要再 需告 var/val__</code>
    * abstract fields(限定子類要實作), Scala compiler 只會幫忙建立 get/set methods.
    * Java 中沒有 Abstract Field 概念
    
```javascript
    // 注意這是一個 abstract class
    // Cons_params 預設是 var
    abstract class Pet (name: String) {
      val greeting: String // greeting and age 都是 abstract fields
      var age: Int         
      def sayHello { println(greeting) }
      override def toString = s"I say $greeting, and I'm $age"
    }
    
    // 實作的 concrete class 的 field 仍需定義 val/var
    class Dog (name: String) extends Pet (name) {
      val greeting = "Woof"
      var age = 2
    }
    class Cat (name: String) extends Pet (name) {
      val greeting = "Meow"
      var age = 5
    }
```

## Scala 物件全等判斷 <span id="scala_obj_equality">&nbsp;</span>
* Object Equality \(Equals and Hashcode)，JVM 語言基本上 <span style={{color: '#0044FF'}}>__概念同 Java__</span>。
* <code>__==__</code>, <code>__equals__</code>, <code>__eq__</code>
* Scala 中 equals / hashcode methods

```javascript
    class Person (name: String, age: Int) {
      def canEqual(a: Any) = a.isInstanceOf[Person]
      override def equals(that: Any): Boolean =
        that match {
          case that: Person => that.canEqual(this) && this.hashCode == that.hashCode
          case _ => false
        }
      override def hashCode:Int = {
        val prime = 31
        var result = 1
        result = prime * result + age;
        result = prime * result + (if (name == null) 0 else name.hashCode)
        return result
      }
    } 
```

## Scala Inner Class <span id="scala_inner_class">&nbsp;</span>
* Scala 中實現 Inner class 的方式
    * 在 outer class scope 中定義一個 Case class
* 先定義 Inner class 的目的
    * 想建立一個被封裝在另一個 Class 之內的 Class
    * 因為想封裝特定的程式碼
    * 讓 Inner class 與 public API 去耦合
    * 與外層綁定的 Class
    
```javascript
    class PandorasBox {
    
      case class Thing(name: String)
    
      var things = new collection.mutable.ArrayBuffer[Thing]()
      things += Thing("Evil Thing #1")
      things += Thing("Evil Thing #2")
    
      def addThing(name: String) {
        things += new Thing(name)
      }
    }   
    
    
    //使用時看不出 things 的存在
    val p = new PandorasBox
    p.things.foreach(println)
```

## Scala 的 Methods  <span id="scala_method">&nbsp;</span>
* Scopes of Scala Methods

| Type | Scope | Syntax | Desc | 
| ---- | ---- | ---- | ---- | 
| object-private scope<br/> **companion object** | the current instance of the current object<br/>
只有當前這一個 instance 可以使用 | private[this] def isFoo = true | 可終止 Companion Class/Object 的 private fields 可以互通關係<br/>
甚至限制 equals 比對 | 
| private | 與 Java 同概念 | private def isFoo = true |  | 
| protected | 允許子類呼叫<br/>注意 ***不同於 Java*** <br/>Java 的 protected 可允許同 package 下其他 class 存取\(Java較寬鬆) | protected def breath \{ \} |   | 
| package-specific | 限定只能在特定 package 內使用\(包含 subpackages)<br/>指定 package 下的成員都可使用 | private packageName def isBar = true |   | 
| public |   | 不須加 access modifier |   | 


```javascript
    //Object private
    class Foo {
      // object private method 
      private[this] def isFoo = true
    
      def doFoo(other: Foo) {
        //  // isFoo 限定 this 才能呼叫, 所以 this line won't compile
        if (other.isFoo) {
        }
      }
    }   


    //package private
    package com.acme.coolapp.model {
      class Foo {
        
        //com.acme.coolapp.model._ 內都可以使用
        private[model] def doX {}
        //com.acme.coolapp._ 內都可以使用
        private[coolapp] def doY {}
        //com.acme._ 內都可以使用
        private[acme] def doZ {}
                
        //只有 Foo class 下能使用
        private def doY {}

      }
      class Bar {
        val f = new Foo
        f.doX // compiles
        f.doY // won't compile
      }
    }
```