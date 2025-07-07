---
title: Scala 把 Function 當參數的 Function
description: Scala High Order Function Example
keywords: [Scala,Function]
---

## High Order Function
* <code>__High Order Function__</code> : __把 Function 當參數的 function__
* 當參數的 function 可以是
    * lambda function 的名稱
    * def function 的名稱
    
```javascript

    //High Order Function
    def addition(a: Int, b: Int, f: (Int, Int) => Int): Int = f(a, b)
    
    // 以 lambda 的形式定義 function
    val squareSum = (x: Int, y: Int) => (x * x + y * y)
    
    // 這是個  function
    def tripleSum(x: Int, y: Int) = {
      x * x + x + y * y * y
    }
    
    // lambda
    addition(1, 3, squareSum)
    
    //function
    addition(1, 3, tripleSum)
   
```