---
title: Kotlin 操作子
description: Kotlin Operators
keywords: [kotlin,operator]
---

Kotlin Operators

| Operator | 使用處 | 使用情境 | 範例 |   |
|----------|-----------------|----------|-----------------|---| 
|**?**|型別之後|代表該變數允許為 null|val email: String<span style={{color: '#FF1100'}}>?</span>| |
|**?.**|方法呼叫時|safe-call, 回傳null或進行指定動作|s?. toUpperCase()| 一個點不多做, null 或做後面的事 |
|**let**| 方法呼叫時 | 忽略或進行指定expression |email?.let \{email \-\> sendMailTo\(mail\)\} |一個點不多做, null 或做後面的事 |
|**?:**|變數與默認值之間|null-coalescing, 變數若為null則給予預設值|email ?: "Not Assigned"| 兩個點多做事(給預設值)ie做後面的事 | 
|**::**|lambda expression|成員引用, member references|函數, 頂層函數,建構子,extension 函數引用|  | 
|**as**|變數與型別間|casting, 型別錯會拋出 ClassCastException|  |  | 
|**as?**|變數與型別間|safe casting, 型別檢查覆蓋 ClassCastException|val person = object as? Person ?: return false|  | 
|**is/!is**|if condition|Type checking + casting|if\(s is String\)\{ println\(s\)\},<br/>與 smart casting比較|  | 
|**!**|boolean, in...|NOT|  |  | 
|**!**|compiler|Platform Type Only, String!|Compiler 中特殊的類型僅與javaCode交互作用時會遇到。用來到表JavaCode中未告知是否可以為null的資料|  | 
|**!!**|變數之後|Not-null assertions, 非空斷言,暴力告知compiler變數不會為 null|val sex = tom.gender!!|  | 