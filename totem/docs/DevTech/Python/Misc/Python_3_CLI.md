---
title: Python Command Line
description: Python command line 基本處理
keywords: [Python,CLI]
---

# Python Parsers
> 這邊摘要紀錄 Python 中相關的 Parser 工具

|  api  |  Doc Type     |
|----------|-----------------|
| [Configparser](./Python_3_Parser_ConfigParser) | *.ini |
| ElementTree | *.xml |
| pandas | *.csv |
| pandas | *.xls |
| argparse | command line |


# Python 解析 Command Line 參數
> sys module 可以用來讀取 CLI 參數，需自行檢查參數數輛等資訊。  
> 相關 CLI 套件包含 argparse、getopt 等



## sys module 解析 CLI 參數
* 藉由 sys.argv 對 Command Line Arguments 解析

__args.py__

```python
import sys
import pprint

if len(sys.argv) != 2:
    print('非預期參數數量: 改用 %s <file_path>' % sys.argv[0])
    sys.exit(1)

filename = sys.argv[1]
with open(filename, 'r') as file:
    pass

pprint.pprint('arg1', sys.argv[0]) # python file
pprint.pprint('arg2', sys.argv[1]) # 1st argument

```

__CLI__

```
$ python args.py test.txt

arg1 'args.py'
arg2 'test.txt'
 
```


## CLI pipe line
* 以 sys.stdin 讀取 CLI 回傳內容

__pipe.py__

```python
import sys

if len(sys.argv) != 2:
    print('非預期參數數量: 改用 %s <r or w>' % sys.argv[0])
    sys.exit(1)

if sys.argv[1] == 'r':
    print('read mode')
elif sys.argv[1] == 'w':
    print('write mode')
else:
    print('unexpected mode')

print(type(sys.stdin)) # <class '_io.TextIOWrapper'>

for line in sys.stdin:
    print(line.strip())
```

__CLI__

```
$ echo Hello world! | python pipe.py r
read mode
<class '_io.TextIOWrapper'>
Hello world!


$ ls *.py | python pipe.py r
read mode
<class '_io.TextIOWrapper'>
args.py
pipe.py
....

```

## 將資料寫至 log 檔

```python 
import sys

print("Hello world", file=sys.stdout)
print("Goodbye", file=sys.stderr)
```

```
python std.py 1>info.log 2> err.log
# 1-stdout, 2-stderr

python std.py > output.log
# 僅將 sys.stdout 輸出至 output.log

python std.py >> output.log
# 訊息附加

```

## 執行外部程式
* 由執行中的 *.py 執行外部程式

__external.py__

```python
import os, pprint
ret = os.system('dir *.py')
pprint.pprint(ret)
```

```python
python external.py >> output.log
```

