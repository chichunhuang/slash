---
title: Kotlin 與 Java 混用記錄
description: 雜記兩者混用記錄
keywords: [javas,kotlin]
---

## Main method

```javascript
    //Java: 
    public static void main(String[] args) { }

   //Kotlin: 
   fun main(args: Array<String>)
```

## Import
* 混用: 
	* kotlin 中使用 <span style={{color: '#0044FF'}}>__import__</span> 關鍵字達成 import Java API
	* Java 中直接把 Kotlin <span style={{color: '#0044FF'}}>__當地三方 API 使用__</span>
	
|  Kotlin 引用 Java  | Java 引用 Kotlin  |
|----------|------------------------|
|類似 Java 中的 static import<br/>import java.util.Calendar;<br/>import 套件.函式<br/>import 套件.*|A: kt 中有 package 宣告<br/>java 中同一般 API 使用<br/>packagename.FileNameKt.method();<br/><br/>B: kt 中使用 Annotation, 定義FileNameKt, 或多個檔案用同一 Package 時,<br/>@file: JvmName("another")<br/>@file:JvmMultifileClass<br/>packagename.another.method();|

## Compile 順序

```mermaid
%%{init: {'theme':'forest'}}%%
graph LR;
K1:[*.kt]-->K2:[Kotlin Compiler];
K2:[Kotlin Compiler]-->M1:[*.class];
J1:[*.java]-->J2:[Java  Compiler];
J2:[Java  Compiler]-->M1:[*.class];
M1:[*.class]-->M2:[ *.jar]
MK3:[Kotlin Runtime]-->M3:[ Application]
M2:[ *.jar]-->M3:[ Application]
J3:[Java Runtime]-->M3:[ Application]
```