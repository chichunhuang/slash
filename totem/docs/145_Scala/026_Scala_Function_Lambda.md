---
title: Scala Function 與 Lambda
description: 關於 Scala Function 與 Lambda
keywords: [Scala,function,lambda]
---

## 關於 Scala Function/Lambda

* 可以與 [Scala Lazy Fields](./Scala_Lazy_Fields) 相互比較

### 關於 Function 語法結構
* scala function 的參數都是 <code>__val__</code> 的 ___不可修改___
* 斯斯有三種, Scala function 也有三種
    * first-class method, 一級函數
    * lambda
    * <span style={{color: '#0044FF'}}>__函數變數__</span>
* 一個原始定義的 first-class function 結構, 用 <code>__等號 =__</code>
* 一個原始定義的 lambda expression 結構, 用 <code>__箭號 =>__</code>
* 一個 <code>__函數變數__</code> method variable, 變數後接 function 的整個結構. 因為是變數, 所以等號移到變數之後, 而非實作區塊前
    * 可以傳給他人的結構
    * 想複寫 Scala 預設 getter/setter 時使用. 下方 Class 相關章節範例

___宣告的結構的語法___    

```javascript
    //#1 一個 function
    def fun1(num1: Int, num2: Int) = { num1 + num2 } 
    
   //#3 一個函數變數  
    val mutator = (num1: Int, num2: Int) { println(num1 + num2) }      
  
   //#2 一個 lambda
    val lambFun = (num1: Int, num2: Int) => { num1 + num2 }
```

### function 與 lambda expression 的外觀差異
* lambda 是一個 expression, 由變數承接所以變數後加的是 <span style={{color: '#0044FF'}}>__等號__</span>
* Scala lambda 結構
    * 給 lambda 一個代號
    * 省略 labmda exp 中的變數名稱
    * 把 type 再移到 wildcard 上
* High order function : Signature 中有 fun\(函數型別) 的 function 
    * doThat
    * labmda 與 function type 差異
        * labmda 後面接實作
        * fun type 後面定義回傳型別    

___Scala Function and Lambda 基本結構範例___

```javascript
    /#1 一個 function
    def fun1(num1: Int, num2: Int) = { num1 + num2 }
    
    //#2 一個 lambda
    (num1: Int, num2: Int) => { num1 + num2 }
    
    //#31給 lambda 一個名子
    val lambFun = (num1: Int, num2: Int) => { num1 + num2 }
    
    //#32 省略 lambda exp 中的變數名稱
    //只能用 _
    val sum1: (Int, Int) => Int = _ + _
    
    //#33 省略 lambda expression 中的 signature
    //只能用 _
    val sum = (_:Int) + (_:Int)


    //#4 fun type : doThat
    def process2(num1: Int, num2: Int, doThat: (Int, Int) => Int) = {
      doThat(num1, num2)
    }
    
    
    //#5 lambda examples
    val sayHello1 = (name: String) => "Hello " + name
    val sayHello2 = "Hello " + (_: String)
    val sayHello3 = "Hello " + _
    def sayHello4 = "Hello " + _
    
    sayHelloN("Daniel")
    //String = Hello Daniel
    
    
    //#6
    def notImplYet(a: Int): Int = ???
    
    def notImplYet(a: Int): Int ={
      throw new NotImplementedError("an implementation is missing~~")
    }
    
```