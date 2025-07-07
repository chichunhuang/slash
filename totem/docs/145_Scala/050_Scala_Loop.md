---
title: Scala 迴圈
description: Scala 迴圈
keywords: [Scala,loop]
---

## Scala Loop 基礎
* 筆記: [Learning_Scala_Ch6Ch7_Oreilly Collection.xmind](https://drive.google.com/file/d/1IJ8ade1Hgd0cnvSUOVy8nCVAlSmn-S89/view?usp=drive_link)


___Scala Loop 範例___ 
* 注意下方 loop 中的 index 可以 ___不可宣告, var___

```javascript

    //Scala Loop
    val names = Array("Andy", "Jack", "Sam", "Daniel")
     // for
    for (name <- names) {
      println(name.toUpperCase())
    }
    
    // for each
    names.foreach(println)
    names.foreach( (e: String) => println(e.toUpperCase()) )
    names.withFilter(_ != "Sam").foreach(println)
    
    // for indexing, until 不含 last index
    for (i <- 0 until names.length) {
      println(s"$i is ${names(i)}")
    }
    
    for (i <- 0 until names.length if names(i) !="Sam") {
      println(s"$i is ${names(i)}")
    }
    
    // nested loops, to 含 last index
    for (i <- 1 to 9; j <- 1 to 9) {
      println(s" $i X $j  = $j*$j")
    }
    
    //collect all items
    val newNames = for(name <- names) yield name.toUpperCase

```

## Scala break and continue 基本語法 syntax

```javascript
    //迴圈外 => break
    breakable {
        for (x <- xs) {
            if (cond)
            break
        }
    }


    //回圈內 => continue
    for (x <- xs) {
        breakable {
            if (cond)
                break
        }
    }
    
```

## Scala Break Loop: <code>__與 Java 完全不同__</code>
* Scala 中沒有 break 與 continue
* Scala 中的 Loop Break 改採用 Break Block
* 需 import breakable 及 break
    * break: 以 breakable block 包住loop
    * continue: breakable 在 loop block 之內
    * breakable 可想成是 goto 的 flag
* 另外, function programming style 的 break/continue 是使用 recursive algorithms
    * 也許須了解 tail recursion

```javascript
    import scala.util.control.Breaks.breakable
    import scala.util.control.Breaks.breakable
  
    //Example A : Break
    breakable {
         while(i < 5) {
          if(i == 3) {
           break
          }
          println(i)
          i = i + 1
         }
     }
     // 0,1,2 (由 break 跳到 breakable 處)
     
     
     //Example B : Continue (Brealable 在 loop 之中)
     while(i<5){
         breakable{
             if(i == 3){
                break;
             }
             println(i)
         }
         i = i + 1;
     }
     //0,1,2,4,
     
     
   //Example C : 混和 break/continue  
   val breakobj = new Breaks  
   val continuobj = new Breaks  
      
    var j: Int = 0;  
    breakobj.breakable {  
        while (i < 10) {  
           continuobj.breakable {  
              if (i % 2 == 0) {  
                 continuobj.break  
                } else if(i == 7) {  
                 breakobj.break  
                }  
              println(i)  
             }  
           i = i + 1  
          }  
       } 
```

### Scala nested loops with break

* Scala nested loops and labeled break \(上方的 example c)
    * 要多個 Breaks variables, 且自定要使用哪一個 Breaks
    
```javascript
    import scala.util.control._
    
    val Inner = new Breaks
    val Outer = new Breaks
    for (i <- 1 to 5) {
      Inner.breakable {
        for (j <- 'a' to 'e') {
          if (i == 1 && j == 'c') Inner.break else println(s"i: $i, j: $j")
          if (i == 2 && j == 'b') Outer.break
        }
      }
    }
```


### Scala 中 Breakable 的設計原理
    * brealable 是一個 high order function
    * op 是一個 function type parameter

```javascript
     // op 是一個 function, 會回傳 Unit 
     def breakable(op: => Unit) {
        try {
            op
        } catch {
            case ex: BreakControl =>
            if (ex ne breakException) throw ex
            }
        }
```

## Scala 的特殊迴圈結構
* 多重迴圈: 看來 Java 最囉嗦
    * <code>\<\-</code>
    * <code>\{ \}</code>
* yield: Scala looping 過程可以 for 與 yield 結合成 Comprehension.以收集資料.
* index: foreach 也可取 index. zipWithIndex
* guard: 迴圈過程中可以曾加判斷條件 if
* destruction map:
* break and continue: Scala 沒有 break and continue
    * import util.control.Breaks.\_
    
```javascript
   //多重迴圈在 for 之後是接大括弧(多行的寫法).
   for {i <- 0 to 10
        j <- 10 to 15 by 2} {
     println(s"${i}  * ${j}")
   }
   
   //多重迴圈在 for 之後是接小括弧, 需加;
   for (i <- 0 to 10; j <- 10 to 15 by 2) {
     println(s"${i}  * ${j}")
   }
   
   //index
    val a = Array("apple", "banana", "orange")
    for ((e, count) <- a.zipWithIndex) {
      println(s"$count is $e")
    }
    
    // Guard
    for (i <- 1 to 10 if i < 4) { println(i) }

    //Destruction
    val names = Map( "fname" -> "Robert",
                     "lname" -> "Goren")
    for ((k, v) <- names) println(s"key: $k, value: $v")   
```    