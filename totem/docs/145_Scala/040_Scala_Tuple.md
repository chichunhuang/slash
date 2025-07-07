---
title: Scala Tuple
description: Scala Tuple
keywords: [Scala,tuple]
---


## Scala Tuple
* 可存取 <code>__不同型態__</code> 的一種物件 Wrapper, immutable
* Scala Tuple 建構方式
    * var-args
    * nested tuple2, <code>__->__</code> 窄箭號
    * destruction way: 解構並給予變數名稱

```javascript
    //#1 var-args
    val items = (1, "a", 2D, 3L)
    
    //#2 nested tuple2
    val nestedTuple2 = 1 -> "Daniel" -> 2 -> "Mary"
    //  nestedTuple2: (((Int, String), Int), String) = (((1,Daniel),2),Mary)
    
    //#3 destruction
    val (id, name) = 1 -> "Daniel"
```