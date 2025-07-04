---
title: Scala 的 instance 相等性比較
description: Scala 的 instance 相等性比較
keywords: [Scala,equals]
---


## instance 相等性比較
```
    x == that
```

| 操作 | 說明 |
| ---- |---- |
|equals | 內容比較|
|eq | reference 比較\(是否相同)|
|ne | reference 比較\(是否不同)|
|== | 先看看是不是 null, 不是的話就比內容|
|x==that|如果 x 是 null : <br/>等同於 x eq that|
|x==that|如果 x 非 null : <br/>等同於 x equals that|