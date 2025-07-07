---
title: Scala Switch Case
description: Scala Pattern Matching
keywords: [Scala,switch]
---

## Scala Pattern Matching \(Switch Case) 

* 以 function 來回傳 matching 結果
* 將 matching 結果直接餵給 variable
* 可 <code>__混用不同型別__</code>的 matching key 
* 可同時 matching + desctruciotn
* 其他 :
    * 不須 break
    * default 使用 <code>_</code>
    * 可搭配 <code>__|__</code> \(or)使用, 同時 match 多個 conditions
* switch 本身是一種 expression
* 可以與 option 搭配使用
* @switch:
    * scala switch 在 JVM 中有可能被轉換成 tableswitch, lookupswitch 甚至是 a series of conditional expressions
    * 使用 @switch 可以在 compile 過程中提供 warning, 若 switch 被轉換成一系列的 conditions 時.
* Pattern Matching 過程中可以 destruct input.
    * List: 利用 ::, 或 List\(first, _*)
    * Class: Typed pattern
    * Tuple
    * Sequence
    * Variable

___Switch Syntax___

```javascript
   //match syntax
   
   varName match {
   
       case value               => do()
       case type: TypeClass     => do()
       case condition           => do()
       case choices | C2        => do()
       case varInst @ TypeClass => do()
       case Constructor(a,b)    => do()
   }
   
   
```

___使用方式___

```javascript

    //function 來回傳 matching 結果
    def getNumber(num:Int) : String = { num match {
          case 1 | 3 | 5 => "odd"
          case 2 | 4 | 6 => "evens"
          case _ => "null"
          }
    } 
    
    //matching 結果直接餵給 variable
    var x = 1;
    val month : String = x match {
      case 1 => "Jan."
      case 2 => "Feb."
      case 3 => "Mar."
      case _ => "Not Spring"
    }
    
    //混用 matching key 的型別
    def getMultiType(x: Any) = x match {
      case true => "truth"
      case 'a' | 'A' => "this is a"
      case x :: xs => "List"
      case Nil => "empty List"
      case _ => "null"
    }     
    
    // Any matching + destruction
    def getMultiMatchType(x: Any): String = x match {
        // sequence patterns, 注意 這邊使用小括號. Scala 中括號是泛型
        case List(0, _, _) => "List has three element first is 0 "
        case List(1, _*) => "List element size is dynamic, 第一個值是 1 "
        
        //variable patterns: 可以取得傳入的 key
        case x @ List(1, _*) => s"$x" //可以取得第一個值為 1 的 list instance x
        
        //tuples
        case (a, b) => s"Tuple2 $a and $b"
        case (a, b, c) => s"Tuple2 $a, $b, and $c"
        
        // typed patterns
        case s: String => s"this is string: $s"
        case i: Int => s"this is int: $i"
        case f: Float => s"this is float: $f"
        case a: Array[Int] => s"an array of int: ${a.mkString(",")}"
        case as: Array[String] => s"an array of strings: ${as.mkString(",")}"
        case list: List[_] => s"this the List: $list"
        case m: Map[_, _] => m.toString
        
        // constructor patterns
        case Person(first, "Alexander") => s"found an Alexander, first name = $first"
        
        // the default wildcard pattern
        case _ => ""
    }
    
    //@switch: 增加效能
    var x = 1;
    val month : String = x: @switch match {
      case 1 => "Jan."
      case 2 => "Feb."
      case 3 => "Mar."
      case _ => "Not Spring"
    }
   
```

* Scala Variable Patterns
    * 可以取得傳入的 instance
    * case 後的語法為 variableName @ pattern

```javascript
     def getMultiMatchType(x: Any): String = x match {
                   
            //variable patterns: 可以取得傳入的 key
            case x @ List(1, _*) => s"$x" //可以取得第一個值為 1 的 list instance x
            case x @ Some(_) => s"$x" // works, returns "Some(foo)"
            case p @ Person(first, "Doe") => s"$p" // works, returns "Person(John,Doe)"
            
            // sequence patterns, 注意 這邊沒辦法取得傳入值 (非 @ syntax)
            case List(0, _, _) => "List has three element first is 0 "
            case List(1, _*) => "List element size is dynamic, 第一個值是 1 "
            
            case _ => ""
     }   
   
```

* Scala Destruction Patterns
    * Variable pattern 可以直接取得傳入的 instance , 最佳最通用解法
    * Constructors/Tuples/Type patterns. 可以解構並取得特定的資料 (有變數承接), 可以用來取代 isInstanceOf
    * Sequence/Constant patterns 只能 matching
 
* Scala Switch Patterns: 基本上可分為:
    * Constant patterns
    * Constructor patterns
    * Sequence patterns\(可以進行 destruction)
    * Tuple patterns
    * Type patterns\(可以取得傳入的 key)
    * Variable patterns\(可以取得傳入的 key, @)
* Scala Switch 與 if expressions\(Guards) 合併使用
    * case 的 identifier \(a,b,c) 只是用來區分是哪一個 case.可以任意命名.
    * case 的 identifier 是一個變數, 指向傳入的　input 變數

```javascript
   // 條件式判斷,區間判斷, 利用 Range 的 contains 回傳 boolean
     def guard (input: Int) : Unit = input match {
      case a if 0 to 9 contains a   => println("0-9 range: " + a)
      case b if 10 to 19 contains b => println("10-19 range: " + b)
      case c if 20 to 29 contains c => println("20-29 range: " + c)
      case _ => println("Hmmm...")
    }
   
   // 利用 class fields 與 guard 合作
    class Stock(val symbol: String, val price: Int)
    def guard3(stock: Stock): String = stock match {
      case a if stock.price < 100 => stock.price + " between 0 to 100"
      case b if     b.price < 200 => b.price + " between 100 to 200"
      case _ => "more than 200"
    }

    guard3(new Stock("A", 10))
```


### Scala try/catch Matching
* Scala 語法中, try/catch 可以與 matching 合併使用
    * 也就是 Java 就語法中的 multiple catches 語法的簡化版
* 與 Typed pattern 的語法相同, 需要加冒號
    * syntax: case ex: Type => do\()
    
```javascript
    try {
      openAndReadAFile(filename)
    } catch {
      case e: FileNotFoundException => println("Couldn't find that file.")
      case e: IOException => println("Had an IOException trying to read that file")
    }
```

### Scala Case Classes \(<code>__Case Classes__</code>  例類, ch9)
* 特性
    * 可以用在 pattern matching 的類別
    * 類似 Java enum 的功用, 利用 factory method 建構, 不需 new
    * 類似 Java bean 的功用, 可用於儲存數據
    * 有多個用來自動生成的 apply 方法, 建構子\(apply)的 <code>__class params 預設為 val__</code>, 可以省略 "val", 若要 setter var 則需自行加上
    * Scala Class 的 constructor params 預設也為 val.
    * 可有 companion object 伴生對象\(參閱 Scala Auxiliary Constructor)
    * 預設自動幫忙建立 toString, hashCode, equals, copy 等方法
    * 注意 Case 因為是一種特殊的 Class, 所以語法上有加 class
* 用途
    * 當快速生成 java bean 用\(基本 equals, hash 都有了)
    * Pattern matching 時使用,\(同樣 equals, hash 都有了)
    
```javascript
    //Scala Case Class
    //default val
    case class  Student2 (val code: String, name: String) {
    }
    
    val mary = Student2("A","Mary")
    val john = Student2("A","Mary")
    
    //default equals
    println(mary.equals(john))
    
    //用在 Matching
    def checkStudent(s: Student2) =  s match {
      case Student2("A","Mary") => "Mary"
      case Student2("B","John") => "John"
      case _ => "Who are you?"
    }
    println( checkStudent(mary))  
```