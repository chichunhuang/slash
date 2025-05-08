---
title: Python Print
description: Python Print 方法
keywords: [Python,Tutorial]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python Print()
> 
> 如果你覺得這個主題很蠢，那就跳過吧!  
> 
> 這邊主要紀錄如何將資料印到指定檔案中。  


## print() 語法
* objects: 預設可接受 varArgs 資料。以逗號分隔要印出的物件。  
    * 印出物件的<span style={{backgroundColor: '#ffd1b3'}}>str()</span>內容  
* sep: separator，印多物件時內容的分隔符號。    
* end: 可以自行為每一次列印動作指定行尾內容。預設為換行 \\n。  
* file: 可指定輸出位置，預設為 sys.stdout。  
* flush: 資料是否暫存。可接受值為 True/False 物件(注意為大寫)。  s


_Syntax_

```python
    print(
      [objects...] 
      [, sep='']
      [, end='\n'] 
      [, file='']
      [, flush = False]
     )                           

```

      
## print to File: 輸出至檔案
* 注意: 檔案要用 append mode。

```python

with open(r'D:\log.txt', 'a') as logFile:
    print('Hello, Python!', file=logFile)   
                           
```

<br/>
<br/>

```python                                   

import sys
temp = sys.stdout
sys.stdout = open(r'D:\log.txt', 'a')
print('Hello')
print('World')
print('!')
sys.stdout.close()
sys.stdout = temp                        
```
      
      
## Separator

```python
tom = "Tom Cat"
jerry = 'Jerry Mouse'

print(tom, jerry, sep=' and ', end='*** \n')
# Tom Cat and Jerry Mouse*** 
# 
```