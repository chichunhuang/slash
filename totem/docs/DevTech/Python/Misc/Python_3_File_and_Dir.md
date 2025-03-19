---
title: Python 檔案與資料夾走訪
description: Python File and Folder
keywords: [Python,File and Folder]
---

# Python 檔案與資料夾走訪技巧
> 這邊僅介紹相關語法以及使用方式，熟悉 API 前快速查找用。

* file_path_str = file_object.name()


## os.path
* built-in 

|     |  os.path  |    |
|-----|----|----|
| **回傳 絕對路徑**| os.path.abspath(file_path_str) | os.path |
| <span style={{color: '#0044FF'}}> **分拆 路徑與檔名** </span> | os.path.split(file_path_str) | os.path, tuple2(path, filename) |
| **回傳 路徑**| os.path.dirname(file_path_str) | os.path |
| **回傳 檔名/資料夾名**| os.path.basename(file_path_str) | os.path, 路徑末端主體名稱 |
| **回傳 共同路徑**| os.path.comparefix([file_path_str, file_path_str2]) | os.path, 傳入的是 strings list  |
| <span style={{color: '#0044FF'}}> **回傳 檔案或資料夾是否存在** </span> | os.path.exists(file_path_str) | &nbsp; |
| <span style={{color: '#0044FF'}}> **檢查路徑指向目標是否為檔案**_ </span>| os.path.isfile(str_path) | &nbsp; |
| <span style={{color: '#0044FF'}}> **檢查路徑指向目標是否為資料夾** </span>| os.path.isdir(str_path) | &nbsp; |


## os
* built-in 

|     |  os  |    |
|-----|----|----|
| **回傳 當前所在資料夾**| os.getcwd() | &nbsp; |
| **切換所在資料夾指標**| os.chdir(path_str) | 絕對或相對位置路徑皆可，搭配 old = os.getcwd() 回先前位置 |
| **列出指定路徑下的檔案與資料夾**| os.listdir(path_str) | 若未提供路徑，則查當前所在資料夾內的狀態 |
| **切換所在資料夾指標**| os.chdir(path_str) | 絕對或相對位置路徑皆可，搭配 old = os.getcwd() 回先前位置 |
| **建立資料夾**| os.mkdir(path_str) | 建立路徑末端指定資料夾。 |
| **建立資料夾**| os.mkdirs(path_str) | 依指定路徑建立指定資料夾，包含路徑中間不存在的資料夾。 |
| **移除檔案**| os.remove(path_str) | &nbsp; |
| **移除資料夾**| os.removedirs(path_str) | 移除資料夾，包含指定路徑中的空資料夾。 |
| **搬動檔案**| os.moveto(fromPath_str, toPath_str) | &nbsp; |


## os.walk
* built-in 

|     |  os.walk  |    |
|-----|----|----|
| **遞迴向下列出指定路徑下的檔案與資料夾**| os.walk(path_str) | 回傳的是 list of tuple3(path, \[dirs\], \[files\]) <br/> t.first: 資料的起始路徑 <br/> t.second: t_first下的所有資料夾名(str,不含路徑) <br/> t.third: t_first下的所有檔案名(str,不含路徑)  |


__os.walk example__

```python
for root, dirs, files in os.walk(r'D:\tmp'):
    print('Folder: ', root)
    for folder in dirs:
        print("Folder path: ", os.path.join(root, folder))

    for file in files:
        print("File path: ", os.path.join(root, file))
```

## glob
* Python 內建的 module，可以使用 wildcard(通配符)，以類似 regex 的方式查找檔案。
* glob 遞迴 : Python 3.5+, 以 ** 表示資料夾遞迴 
* 注意: pattern 與 regex 部員全相同
    * \* : 0+
    * ? : 1+
    * \[\] : range
     

|     |  glob  |    |
|-----|----|----|
| **查詢符合指定路徑結構的資料，回傳list**| glob.glob(path_str) | &nbsp; |
| **Lazily 查詢符合指定路徑結構的資料，回傳iterator**| glob.iglob(path_str) | &nbsp; |


__glob 走訪範例__

```python
import glob

found = glob.glob(r'D:\tmp\*\*.txt')
for f in found:
    print(f)

# iterator, generator: lazy 走訪
found = glob.iglob(r'D:\tmp\tomcat\log\*log')
for f in found:
    print(f)
    
# 遞迴向下走訪  
found = glob.glob(r'D:\tmp\**\*.txt', recursive=True)
print("start ")
for f in found:
    print(f)
```