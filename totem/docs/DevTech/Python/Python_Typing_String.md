---
title: Python String
description: Python String
keywords: [Python,String]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python String 介紹

## Python String Escaping 脫逸字元與路徑分隔符 

* Python 有兩種字元脫逸方式 __(反斜槓 \\)__ :  
    * 以 <span style={{color: '#0044FF'}}> __反斜槓 \\__ </span> 做字元脫逸。  
    * r String: 轉義序列(escape sequence) 前加上一個小寫 r。  

```python

# tempFile1 結果相同於 tempFile2  
tmpFile1 = 'C:\\temp\\tmp.text'  
tmpFile2 = r'C:\temp\tmp.text'  

content = 'Python: in windows we use \\r\\n as break-line symbol.'
print(content)
# Python: in windows we use \r\n as break-line symbol.
```

* Python 路徑分隔符 __(正斜槓:除號 /)__ :  
    * Python 已做最佳化，Linux/Windows 系統下皆可以<span style={{color: '#0044FF'}}>  __(除號 /)__ </span>作為檔案路經分隔符。  
    
```python

# tempFile1 結果相同於 tempFile2  
tmpFile1 = 'C:/temp/tmp.text'  # 語法糖: 除號
tmpFile2 = r'C:\temp\tmp.text'  # r String
tmpFile3 = 'C:\\temp\\tmp.text'  # escape character

```

## Python String (字串，字符串)
* immutable sequence 
* 包括三大類
    * str: Unicode/ASCII
    * bytes: Binary
    * bytearray : bytes 的變體
    
* 字串定義種類:  
    * 單引號: 'Hello World'  
    * 雙引號: "Hello World"  
    * 三引號: ''' Multi-line Content ''' , __多行字串__  
    * Raw String : r"C:\tmp\text.txt" , __不做 escape__  
        * Kotlin 以 triple quotes 做 auto-escape  
    * Unicode String : u'\u65E9\u5B89'  
    * Bytes String : b'\xe6\x97\xa9\xe5\xae\x89 Python', Bytes String 通常讓人聯想到的是一串 __數字__ 或是一串 __0與1__ 串接的 literal.而 Python 在以 b String 呈現時，則是以字母的方式呈現。例如65則以A呈現，方便英語系語言者閱讀。  
    
    
## Python Unicode String 轉換

```python

import sys
# utf-8, 當前系統 encoding
print(sys.getdefaultencoding())    

encoding = 'unicode_escape'
content = 'ABC昆蟲圖騰'

# to unicode: 'unicode_escape'
# 系統預設轉 unicode
u = content.encode(encoding)
print(type(u))
print(u)
#<class 'bytes'>
#b'ABC\\u6606\\u87f2\\u5716\\u9a30'

# unicode 解回先前系統
d = u.decode(encoding)
print(type(d))
print(d)
#<class 'str'>
# ABC昆蟲圖騰


uString = u'ABC\u6606\u87f2\u5716\u9a30'
print(uString)
# ABC昆蟲圖騰
```

## Python String vs Bytes 轉換
    * String vs bytes
    * String vs bytearray
    
> 每個字元底層都是以數值為內碼，所以一段文字其實是可以以 byte array 來呈現。例如 (65,66,67) 代表 ABC。  
> Python 這邊增加提供以 b 修飾的字串來呈現 byte 集合所代表的內容。  
> 例如: Hello,  
> 以 bytes 集合，如 tuple 呈現為 (72,101,108,108,111)  
> 以 B String 呈現則為 b'Hello'  
> 兩者概念相同。B String 則屏除數值轉字母時腦子思考的動作。    
> bytes 集合/B String 兩者皆可轉成 Python 中內建的 <class 'bytes'> 來統一操作使用。  
> 而 <class 'bytes'> 與 <class 'str'> 兩類別間則有轉換介面。  
> 
> 簡單來說，可想成 Python 中文字內碼為 <class 'bytes'>，而呈現上可以有多種方式(tuple/B String)。  

### String vs bytes 轉換
   * bytes() 方法轉換 String/Tuple 為 <class 'bytes'>
       * bytes(str, encoding) 將字串轉 bytes
       * bytes( tuple ) 將數字序列轉 bytes
   * b'content'. __decode(encoding)__ 方法將 bytes 字串轉回 String

```python
# from string to bytes
encoding = 'utf-8'
original = "python 早安"
converted_to_bytes = bytes(original, encoding)
print(type(converted_to_bytes)) 
# <class 'bytes'>
print(converted_to_bytes) 
# b'python \xe6\x97\xa9\xe5\xae\x89'
print(converted_to_bytes[0]) 
# p(112), (p= a(97)+ shift 15)


# from integer tuple to bytes
bs = bytes((65,66,67));
print(bs) # b'ABC'
back = bs.decode(encoding)
print(type(back)) # <class 'str'>
print(back) # ABC


# from bytes to string
back = converted_to_bytes.decode(encoding)
print(type(back)) 
# <class 'str'>
print(back) 
# python 早安

back2 = str(converted_to_bytes, encoding)
print(back2) 
# python 早安
```

### String vs bytearray 轉換
> Python 中 bytearray 為 bytes 的變體

   * bytearray() 方法轉換 String/Tuple 為 <class 'bytearray'>
       * bytearray(str, encoding) 將字串轉 bytearray
       * bytearray( tuple ) 將數字序列轉 bytearray
   * b'content'. __decode(encoding)__ 方法將 bytearray 字串轉回 String
   

```python
# from string to bytearray
encoding = 'utf-8'
text = "ABC 早安"
ba = bytearray(text, encoding)
print(type(ba)) # <class 'bytearray'>
print(ba) # bytearray(b'ABC \xe6\x97\xa9\xe5\xae\x89')
print(type(ba[0])) # <class 'int'>
print(ba[0]) # A(65)

# from integer tuple to bytearray
ba = bytearray((65,66,67));
back = ba.decode(encoding)
print(type(back)) # <class 'str'>
print(back) # ABC

# from bytearray to string
back = ba.decode()
print(type(back)) # <class 'str'>
print(back) # ABC 早安

```
    
## Python Binary Presentation String
> 字元背後以數值為內碼，數值再向底層走就是二進位的 0 與 1。  
> 下面的範例僅只是將數值轉成二進位呈現而已。  
> 單純的二進位 __呈現__ 。
    
```python
# from string to binary presentation
original = "python 早安A"
bin_string = ' '.join(format(ord(charN), 'b') for charN in original)
print(bin_string) #1110000 1111001 1110100 1101000 1101111 1101110 100000 110010111101001 101101110001001 1000001

bin_string2 = ' '.join(format(byteN, 'b') for byteN in bytearray(original, 'utf-8'))
print(bin_string) #1110000 1111001 1110100 1101000 1101111 1101110 100000 110010111101001 101101110001001 1000001
```

## Python 檔案內容編碼與轉換

```python
# filename = input('檔名：')

# 讀檔時告知檔案的編碼方式: 
# 若與實際不同應會報錯
file = open(r"D:\encoding.txt", 'r', encoding='utf-8')
file = open(r"D:\encoding_ansi.txt", 'r', encoding='big5')
file = open(r"D:\encoding_ansi.txt", 'r', encoding='ANSI')
content = file.read()
file.close()

# 若成功讀入檔案內容，則此處的 content 採用 IDE encoding
print(content) # 正常顯示內容

# 將內容轉換為指定 encoding: 如 UTF-8
print(content.encode('UTF-8')) # 得到的是重新編碼後的 <class 'bytes'>

# 將內容轉換為指定 encoding: 如 Unicode
print(content.encode('unicode_escape'))

# 將指定 bytes 以 'UTF-8' 解碼
bytes_content = content.encode('UTF-8')
print(bytes_content.decode('UTF-8')) # 轉成指定編碼內容，不一定能正常顯示

```
## String 與數值轉換
* 整數轉換成其他進制的字串 (Integer -> String)
* 非十進制文字轉十進位(String -> Number)
* ASCII String 轉 Char

### 整數轉換成其他進制的字串 (Integet -> String)
* syntax
    * __<span style={{color: '#0044FF'}}>str(int) : 十進位 </span>__
    * hex(int) : 十六進位
    * oct(int) : 八進位
    * bin(int) : 二進位
* 浮點數種其他進制字串
    * 數學上可行，電腦中浮點數都不精確了要怎樣轉。  
    * 需找專門的數學套件來使用。      

```python

num_integer = 9
print(hex(num_integer)) 
# 十六進位 0x9

print(oct(num_integer))
# 八進位 0o11

print(bin(num_integer))
#  二進位 0b1001

print(str(num_integer))
# 9
print(str(5.5))
# 5.5

```


### 其他進制文字轉十進位(String -> Number)
* syntax: 
    * __<span style={{color: '#0044FF'}}> int('literal', base) </span>__  
    * float('literal')

```python
hex_string ='0x9'
print(int(hex_string, 16)) # 9

oct_string ='0o11'
print(int(oct_string, 8)) # 9

bin_string ='0b1001'
print(int(bin_string, 2)) # 9

# 預設為十進位
five = int('5')
print(five) # 5

fiveAndHalf = float('5.5')
print(fiveAndHalf) # 5.5
```

### ASCII String 轉 Char
* ord('char') : char to integer
* chr(int) : integer to char

```python
print(ord('a')) # 97
print(chr(97)) # a
```


## 格式化 String (String Formatting)
### [字串格式化 String Formatting](./Python_Typing_StringFormatting)


