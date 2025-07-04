---
title: Scala with Eclipse IDE
description: Scala 在 Eclipse 中相關設定
keywords: [Scala,Eclipse]
---

## Eclipse 準備 : Plugins Installation
### 事前準備
* 因為比較習慣用 Eclipse 與 IntelliJ IDEA \(JetBrains) 所以紀錄這些 IDE 相關設定方式。

* 事先須安裝下列工具
    * Eclipse
    * Apache Maven
    * [Scala](https://www.scala-lang.org/download/)

### Scala IDE for Eclipse
* 直接下載 [Scala IDE](https://www.scala-lang.org/download/)，可能是最艱單的環境設定方式

<hr/>
<hr/>
* 下面的 Eclipse 搭配 plugin 的安裝與設定方試，適用於混和 java code 與 scala code 的專案。
<hr/>

### Eclipse Scala IDE Plugin 設定
* 這邊因為 Java 版本、Eclipse 版本與 Scala Plugin 相配合版本限制，安裝設定可能不同。可以上網查察其他方式。
* Scala IDE plugin 安裝設定: 
    * Eclipse 2023 🢂 Help 🢂 Install New Software 🢂 Add 🢂 <code>__http://download.scala-ide.org/sdk/lithium/e46/scala211/stable/site__</code> 🢂 Scala IDE for Eclipse
    * Eclipse Java Project 🢂 🖱R 🢂 Configure 🢂 add Scala Nature
    * Scala IDE plugins: Eclipse marketplace 🢂 Scala 🢂 Scala IDE x.x.x 🢂 Install \(marketplace 似乎已移除，且 plugins 已停止維護)
        * Eclipse Scala Compiler 設定 🢂 Window 🢂 Preferences 🢂 Installations 🢂 Add 🢂 查 Scala 安裝目錄的 lib folder    


### Eclipse m2e software







IntelliJ IDEA
https://docs.scala-lang.org/getting-started/scala-ides.html