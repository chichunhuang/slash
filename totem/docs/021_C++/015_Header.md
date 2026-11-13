---
title: Header
description: C++ Header
keywords: [C++,Header]
---

## Header
* Header 標頭檔: C++ 中用來分離宣告與實作於不同檔案。
    * header file 撰寫外觀與介面: 函式、類別、常數與結構的檔案
    * cpp file 撰寫程式碼邏輯逾實作的檔案
    * Header File，副檔名通常分為 .h .hpp 或無副檔名如 \<iostream\> 
    * cpp File，副檔名為 .cpp
* 介面共享\(API\):讓不同的 .cpp 原始檔知道某個函式或類別外觀，而不需要重複貼上程式碼。
* 編譯器前置處理：編譯器在 compile .cpp 時，會透過 #include 指示詞把標頭檔的內容貼進該檔案中一起編譯。

## Java vs C++ 編譯邏輯差異
* C++ : 獨立編譯與靜態連結
    * 實作檔編譯前會先合併 hpp + h + include 中的合作對象定義。
* Java : 動態類別載入與執行期連結
    * java 直接轉 bytecode, runtime 時再載入合作類別。
* C++ 必須在 __執行前__ 完成所有程式碼的實體合併與位址解析，而 Java 則將 __模組間的連結__ 延後到執行時期由 JVM 處理。
* Java 使用 class loader。C++ 則是編譯開始前便先模組整理與合併，header file 將定義檔\(.hpp\)獨立撰寫，供使用方\(.cpp\)複製使用。避免於 cpp 重複定義。一切都導因於 c++ 的 compile 邏輯差異。


## Header File 內容
* 函式宣告: 只有 Signature，沒有函式本體。
* 類別定義（Class Definitions）：類別的成員變數與成員函式原型。
* 常數與巨集（Constants / Macros）：如 const int MAX_SIZE = 100; 或 #define。
* 結構與列舉（Structs / Enums）。
* 模板定義（Templates）：因為模板的特殊性，其完整實作通常也必須放在標頭檔中。



```C
```
