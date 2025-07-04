---
title: IntelliJ IDEA 安裝 Scala plugins 
description: Scala IDE 相關 IntelliJ
keywords: [Scala,IntelliJ]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage";

> 這裡僅是紀錄學習與安裝過程，  
> 當作下次環境安裝時的提示。  
> 隨版本異動關步驟可能或有所變動， 
> 必要時在上官網找找吧。畢竟 Scala2 到 Scala3 似乎有大異動，相關 Plugins 也跟著調整    
  
## IntelliJ IDEA 安裝 Scala plugins
* SDK 安裝
    * Scala SDK 安裝: https://www.scala-lang.org/download/
    * JDK 安裝
* IntelliJ Community Edition 安裝
    * https://www.jetbrains.com/idea/download/
* Scala Plugins 安裝  

<div>
 {GoogleImage( 'google_file_id',  'IntelliJ_Scala_install.png')}
</div>

* Project Setting
    * https://www.jianshu.com/p/ecc6eb298b8f
  
## Create Scala Project\(IntelliJ Community Edition)
* File 🢂 New 🢂 Project

<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj.png')}
</div>
<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj2.png')}
</div>
<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj3.png')}
</div>
<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj4.png')}
</div>

```scala
    object Hello extends App {
      println("Hello, World!")
    }
```

<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj5.png')}
</div>
  
## Scala Worksheet 簡易測試 \(REPL)  
1. Right click src and select New 🢂 Scala Worksheet.
1. Scala Worksheet 命名
1. coding
1. run Scala Worksheet
  
## Scala 的 Maven : SBT simple build tool 來建立專案
* https://docs.scala-lang.org/getting-started-intellij-track/building-a-scala-project-with-intellij-and-sbt.html

<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj_SBT.png')}
</div>
<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj_SBT2.png')}
</div>
  
* 專案結構
<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj_SBT3.png')}
</div>

```
    - .idea (IntelliJ files)
    - project (plugins and additional settings for sbt)
    - src (source files)
        - main (application code)
            - java (Java source files)
            - scala (Scala source files) <-- This is all we need for now
            - scala-2.12 (Scala 2.12 specific files)
        - test (unit tests)
    - target (generated files)
    - build.sbt (build definition file for sbt)
```
  
* 範例程式撰寫  
1. On the Project panel on the left, expand SBTExampleProject 🢂 src 🢂 main
2. Right-click scala and select New 🢂 Package
3. Name the package example and click OK.
4. Right-click the package example and select New 🢂 Scala class.
5. Name the class Main and change the Kind to object.
6. Change the code in the class as the following:

```
    object Main extends App {
      val ages = Seq(42, 75, 29, 64)
      println(s"The oldest person is ${ages.max}")
    }
```

* Run   
1. From the Run menu, select Edit configurations
2. Click the + button and select SBT Task.
3. Name it Run the program.
4. In the Tasks field, type \~run. The \~ causes SBT to rebuild and rerun the project when you save changes to a file in the project.
5. Click OK.
6. On the Run menu. Click Run ‘Run the program’.
7. In the code, change 75 to 61 and look at the updated output in the console. 
<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj_SBT4.png')}
</div>
<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj_SBT5.png')}
</div>
<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj_SBT6.png')}
</div>
<div>
 {GoogleImage( 'google_file_id',  'IDEA_Create_Scala_Prj_SBT7.png')}
</div>

## Scala 的測試: ScalaTest#
* 要使用 SBT 專案
* https://docs.scala-lang.org/getting-started-intellij-track/testing-scala-in-intellij-with-scalatest.html
  
* [https://www.jetbrains.com/help/idea/get-started-with-scala.html](https://www.jetbrains.com/help/idea/get-started-with-scala.html)