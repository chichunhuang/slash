---
title: Scala Option
description: Scala Option
keywords: [Scala,option]
---


## Scala Option: ch6,ch7
* 避免 NullPointerException
* Some vs. None 子類
    * <code>__Some__</code>: 具型別\(Type)單元素集合
    * <code>__None__</code>: 不具型別\(Type)單元素集合
* 集合中有需多操作利用 Option 來避免 NullPointerException
    * headOption
    * find
    * filter

___Scala Option 範例___

```javascript

    ex1: 有指定型別
    var optionContent : String ="content"
    var toOption = Option(optionContent)
    //Option[String] = Some(content)
    
    
    ex2: 未有型別
    var optionContent = null
    var toOption = Option(optionContent)
    //Option[Null] = None
    
    
    headOption : ex3: 集合中內建的 Option 操作
    val odds = List(1,3,5)
    odds.headOption
    // Option[Int] = Some(1)
    val even = odds filter( _ %2 == 0)
    even.headOption
    // Option[Int] =None
    
    
    
    find : ex3: 集合中內建的 Option 操作
    val words = List("UPPER_CASE", "LOWER_CASE")
    val upper = words find (w => w==w.toUpperCase)
    //upper: Option[String] = Some(UPPER_CASE)
    val lower = words find (w => w==w.toLowerCase)
    //lower: Option[String] = None
    
    
    
    map: 集合中內建的 Option 操作
    ex4: 
    val filter = words filter( _.endsWith("CASE") ) map (_.toLowerCase)
    //List[String] = List(upper_case, lower_case)
    
    
    
    //取值 orElse : return Option
    如果 Option 為None, 則自動換為指定Option
    
    var optionContent = "default"
    var toOption = Option(optionContent)
    var result = toOption orElse Option("Replacement")
    //Some(Replacement)
    var optionContent = null
    var toOption = Option(optionContent)
    var result = toOption orElse Option("Replacement")
    //Some(default)
    
    
    //取值 getOrElse : return content
    如果 Option 為None, 則回傳指定值, 
    不然取出Option的content
    
    var optionContent = null
    var toOption = Option(optionContent)
    var result = toOption getOrElse "Replacement"
    //result: String = Replacement
    var optionContent = "default"
    var toOption = Option(optionContent)
    var result = toOption getOrElse "Replacement"
    //result: String = default
    
    
    //取值 fold
    將元素累進進行指定動作
    (?? example 中回傳的不是 Option??)
    
    collection.fold("init")(_ operon _)
    1st _ : init 與 第一個 element 進行 operon 操作 的 return 值
    2nd _ : next element
    ex:
    var words = List("LARGE", "MIDDLE",  "SMALL")
    val fold1 = words.fold("Size:")(_ + " " + _.toLowerCase)
    //res: String = Size: large middle small
    
    
    //取值 match
    ex1: 用來當作 switch case 使用
    var content = "content"
    var selection = Option(content)
    
    var result1 = selection match {
      case Some("content1") => "Found 1";
      case Some("content2") => "Found 2";
      case None => "Null";
      case _ => "Not Found" ;
    }
    
    ex: 針對有值的Option , 進一步更改Content
    var selection = Option("content")
    var result1 = selection match {
      case Some(x) => x*2;
      case None => "Null";
    }
```