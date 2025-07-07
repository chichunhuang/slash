---
title: Scala yield
description: Scala yield
keywords: [Scala,yield]
---

> 與 Python 的 yield ___完全不同___<br/>
> Scala yield 與 for loop 一起工作,   
> 接收 iteration 過程中的每個結果, 並收集到來源型態別的集合中  

```javascript

  //scala 的 for 是 expression 有 return 
  val collect = for (c <- "hello") yield {
     c.toUpper
  }
  //String = HELLO
  
  val twice = for (c <- List(1,2,3,4)) yield {
     c*2
  }
  //List[Int] = List(2, 4, 6, 8)

```