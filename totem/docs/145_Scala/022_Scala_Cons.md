---
title: Scala Cons - construct
description: Scala 學習紀錄
keywords: [Scala,Cons]
---

> 在 Scala 中，cons 是 construct 的縮寫，常用來建立 List 的新元素，特別是以遞迴方式建立 immutable List 時。
> cons 屬於建構鏈結結構運算子之一，通常限定指 <code>__::__</code>  

## Cons 語法 <code>__::__</code>
* 在 Scala 中 <code>__cons__</code>通常限定指的是 <code>__::__</code> 運算子。
* 把一個元素 headElement 加到 existingList 的開頭，產生一個新的 List

___symtax___

```
   val newList = headElement :: existingList 
```

___example___

```
    val list1 = 2 :: 3 :: 4 :: Nil  // 建立一個 List(2, 3, 4)
    // 實際等價同於 2 :: (3 :: (4 :: Nil))
    val list2 = 1 :: list1          // 使用 cons 將 1 放到 list1 前面 => List(1, 2, 3, 4)
```

## 建構鏈結結構相關運算子
* 與 Cons 功能類似的運算子: 下列運算子都可用來 ___建構鏈結結構___ 。
    * 例如- <code>__::__</code>, <code>__:+__</code>, <code>__+:__</code>, <code>__++__</code>, <code>__:::__</code>
* 註: 
    * 建構鏈結結構運算子有 left-associative, right-associative 兩類
    * cons 主要是 List 的方法，所以是設計給 List 使用。回傳的 elements 有序排列。Vector/Seq/LaztList/ArrayBuffer 也有部分類似的客製化運算子。
    * Nil 是空的 List，等於 List()
    
## Right-Associative 右結合運算子
* 右結合是由右邊開始呼叫，所以最右邊是呼叫方。
* 觀察中似乎: 
    * 如果 <span style={{color: '#0044FF'}}> 運算子以冒號 <code>__:__</code> 結尾，那它就是 <code>__右結合__</code> </span>
    * 也就是由右邊向左進行指定操作
 

| 運算子 | 功用 |    |  呼叫方  |  範例  | 
| ---- | ---- | ----  | ----  |  ----  | 
| :: | 將元素加到 List 前面。<br/>範例:建構一個全新的 List 物件　| 空集合在最後面 | var list = 1 :: 2 :: 3 :: 4 :: <span style={{color: '#FF1100'}}>__Nil__</span>  | List(1,2,3,4) |
| :+ | 集合的__末端__增加元素 | 集合在最前面　| var end = <span style={{color: '#FF1100'}}>__list__</span> :+ 5 :+ 6 | List(1,2,3,4 <span style={{color: '#FF1100'}}>__,5,6__</span>) |
| +: | 集合的__前端__增加元素　| 集合在最後面　| var start = 7 +: 8 +: <span style={{color: '#FF1100'}}>__end__</span> | List( <span style={{color: '#FF1100'}}>__7,8,__</span>1,2,3,4,5,6) |
| ++ | 合併兩個集合　| 　| var set = Set(1,2,3)<br/> var list = List(11,22,33) <br/>var combined = <span style={{color: '#FF1100'}}>__set__</span> ++ list | 依最左邊的集合決定型別　Set(...) |
| ::: | 合併兩個 <span style={{color: '#FF1100'}}>__List__</span> | | var list1 = List(1,2,3)<br/> var list2 = List(11,22,33)<br/> var combined = set ++ list | List(1,2,3,11,22,33) |