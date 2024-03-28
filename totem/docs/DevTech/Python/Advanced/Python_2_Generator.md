---
title: Python Generator
description: Python Generator - lazy loop
keywords: [Python ,Generator]
---

# Python Generator
> Generator 是 Python 達到 performance lazy execution 目的的資料處理方式。
> 
> 搭配 iter() 使用時需注意是否發生 instance 共用情形。


## Generator 基本結構
* 迴圈
* yield

> Generator 是一種特殊的 function。  
> 該 function 中預期會出現 <span style={{backgroundColor: '#ffd1b3'}}>迴圈 loop 或迭代 iteration</span> 程式碼片段。  
> 
> 在每一個 iteration 可以使用 <span style={{backgroundColor: '#ffd1b3'}}>yield</span>  關鍵字，指名 return 一個結果。 
>
> 可以使用 next\(\) 函數對 generator 進行取值，  
> 也可以將 generator 當成一般 iterable object 放入迴圈取值使用。  
>
> 因為 generator 在被使用時可以記住被走訪到那一個元素。  
> 所以可以一次一個元素手動經由 next() 呼叫。
> 
> 因此，加上 generator 不另存資料僅允許走訪一次，加上需要時再走訪的特性(Lazy)。  
> 在要走訪大量資料或超大檔案時可以節省時間與效能。



_Generator 範例_

> 檢查函數是否為 generator 的工具 : ___from inspect import isgeneratorfunction___


```python
from inspect import isgeneratorfunction

def generator_function(n=3, flag=True):
    out = []
    for i in range(n):
        if flag:
            yield i
        else:
            out.append(i)
    return out

print(isgeneratorfunction(generator_function))

def loop(max:int):
    for i in range(0,max):
        yield i
print(isgeneratorfunction(loop))
```

