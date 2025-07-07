---
title: Scala 檔案讀寫範例
description: Scala File Read/Write 
keywords: [Scala,curry]
---

## Scala Read File Example
* 使用 import scala.io.Source \(也可以用 JVM 原生套件)

```javascript
    import scala.io.Source
    
    val fileName = "/scala-read/from.txt"
    
       // 逐行讀取
       //ex1
       val bufferedSource = Source.fromFile(fileName);
       for(line <- bufferedSource .getLines) {
           println(line)
       }
       bufferedSource.close
       
       //ex2 結果放到集合裡
       val lines = bufferedSource .getLines.toList
       
       //ex3 兜成一個字串
       val lines = bufferedSource .getLines.mkString(",")
   
```

## Scala Write File Example
* 多使用 JVM 原生 API

```javascript

   import java.io._

    // ex1 PrintWriter
    val pw = new PrintWriter(new File("/scala-write/to.txt"))
    pw.write("Hello World")
    pw.close
         
         
    // ex2 FileWriter  
    val file = new File("/scala-write/to.txt")
    val bw = new BufferedWriter(new FileWriter(file))
    bw.write("Hello World")
    bw.close()
```