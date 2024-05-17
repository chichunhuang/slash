---
title: Python ConfigParser
description: Python ConfigParser 解析 ini 檔
keywords: [Python,Parsers]
---

# Python Parsers
> 這邊摘要紀錄 Python 中相關的 Parser 工具

|  api  |  Doc Type     |
|----------|-----------------|
| Configparser | *.ini |
| ElementTree | *.xml |
| pandas | *.csv |
| openpyxl | *.xls |
| argparse | command line |

# ConfigParser ini 檔案解析
> ini 檔類似一般的 property 檔，但是有再分不同 sections 區塊。  
> 大多是使用在 Windows 作業系統下。  
> 沒有嚴格的檔案規範，也沒有專用的副檔名。  
> 是一種有點自由的設定檔。  

ini 基本重點摘要如下: 
* 需 Unicode 編碼
* 註解用 # 或 ; 起始。
* 允許使用佔位符或是資料內插。內插語法為 %(attribute)。
* 脫逸字元為 %  
* 內容可以以等數的空白進行縮排


## ini 檔的範例

> 1.DEFAULT 區塊中的屬性可作為屬性的預設值。但前提是:  
> &nbsp;&nbsp;當程式欲取出某一 section 下不存在的 key 的屬性值時，  
> &nbsp;&nbsp;而 DEFAULT section 有設定的話，則可依 DEFAULT 值代用。 
> 
> 2.sections 可以縮排，以方便人的閱讀，對 ConfigParser 而言等同於未做縮排。   
> 
> 3.multiline values 直接斷行條列即可。   
> 
> 4.空值時屬性後仍須加上冒號或等號，不然會拋出 ParsingError。  

__ini 檔的範例__ <br/>
範例來源: [configparser — Configuration file parser](https://docs.python.org/3/library/configparser.html)

```ini
[DEFAULT]
PI = 3.1415926535
Euler = 2.7182818284
Speed_of_light= 299792458
Avogadro = 6.022140 *10^23

[Simple Values]
key=value
spaces in keys=allowed
spaces in values=allowed as well
spaces around the delimiter = obviously
you can also use : to delimit keys from values

[All Values Are Strings]
values like this: 1000000
or this: 3.14159265359
are they treated as numbers? : no
integers, floats and booleans are held as: strings
can use the API to get converted values directly: true

[Multiline Values]
chorus: I'm a lumberjack, and I'm okay
    I sleep all night and I work all day

[No Values]
key_without_value : 
empty string value here =
# : or = is required, otherwise configparser.ParsingError

[You can use comments]
# like this
; or this

# By default only in an empty line.
# Inline comments can be harmful because they prevent users
# from using the delimiting characters as parts of values.
# That being said, this can be customized.

    [Sections Can Be Indented]
        can_values_be_as_well = True
        does_that_mean_anything_special = False
        purpose = formatting for readability
        multiline_values = are
            handled just fine as
            long as they are indented
            deeper than the first line
            of a value
        # Did I mention we can indent comments, too?
```


## ini 檔案讀取方式

_ini exercise_

```properties
[Mail]
mail.disable=true
mailTempalte.from=dummy+from@google.com
mailTempalte.fromname=Insect Totem

[DataSource]
jdbc.driverClassName=org.postgresql.Driver
jdbc.url.host=192.168.10.10
jdbc.url.port=5432
jdbc.url.schema=totem
jdbc.url=jdbc:postgresql://192.168.10.10:5432/totem
jdbc.username=totem
jdbc.password=password

[Forbidden.account]
backlist=Ade
   Ed
   Edd

```

__取值相關 Syntax__
* 以 configparser.ConfigParser() 取得 Util
* config.sections() 列出所有 sections
* config['section_name'], 以 dict style 語法取值
* 預設情形下 ConfigParser 讀取出的屬性值皆為 string，可依需要自行轉換型別，或採用取值並轉換的相關 API。  
* 操作時: 
    * section name 是 case sensitive
    * attribute name 是 case insensitive
* 可用 in 語法檢查屬性值或 section 是否存在。檢查時仍須注意 section name 是 sensitive

```python
import configparser, os

with open (r'D:\tmp\totem.ini', 'r') as ini_file:
    config = configparser.ConfigParser()
    config.read_file(ini_file)
    
    print(config.sections())
    # ['Mail', 'DataSource', 'Forbidden.account']
    print(config['Mail']) # <Section: Mail>
    print(config['Mail']['MaIl.DiSaBlE']) # true  
    print(type(config['Mail']['MaIl.DiSaBlE'])) # <class 'str'>    
    print(type(config['DataSource']['jdbc.url.port'])) # <class 'str'>
    
    print('Mail' in config) # True
    print('Mail.Disable' in config['Mail']) # True
    
```


## ini 檔案屬性讀取方式與轉型
* 使用 python built-in functions 轉型
* 使用 ConfigParser 的 getXX() 轉型

> 關於 config.getboolean() 的解析: 
>> True: '1', 'yes', 'true', 'on' 預設解析為 True
>> False: '0', 'no', 'false', 'off' 預設解析為 False

```python
with open (r'D:\tmp\totem.ini', 'r') as ini_file:
    config = configparser.ConfigParser()
    config.read_file(ini_file)

    datasource = config['DataSource']
    print(datasource.getint('jdbc.url.port')) # 5432
    print(type(datasource.getint('jdbc.url.port'))) # <class 'int>
    print(int(datasource['jdbc.url.port'])) # built-in 

    mail = config['Mail']
    print(mail.getboolean('mail.disable')) # True
    print(type(mail.getboolean('mail.disable'))) # <class 'bool'>
```

## ini 檔案屬性預設值
* 分為兩類: DEFAULT 與 Fallback

__DEFAULT Section__
> 1.DEFAULT 區塊中的屬性可作為屬性的預設值。但前提是:  
> &nbsp;&nbsp;當程式欲取出某一 section 下不存在的 key 的屬性值時，  
> &nbsp;&nbsp;而 DEFAULT section 有設定的話，則可依 DEFAULT 值代用。 

```python
```

__Fallback value__

```python
topsecret.get('Port')

topsecret.get('CompressionLevel')

topsecret.get('Cipher')
topsecret.get('Cipher', '3des-cbc')

config.get('forge.example', 'monster',
           fallback='No such things as monsters')
           
'BatchMode' in topsecret

topsecret.getboolean('BatchMode', fallback=True)

config['DEFAULT']['BatchMode'] = 'no'
topsecret.getboolean('BatchMode', fallback=True)           
```


## ini 檔案屬性的內插\(Interpolation\) : BasicInterpolation

* ConfigParser 的 interpolation 預設為 BasicInterpolation()

```python

[Paths]
home_dir: /Users
my_dir: %(home_dir)s/lumberjack
my_pictures: %(my_dir)s/Pictures

[Escape]
# use a %% to escape the % sign (% is the only character that needs to be escaped):
gain: 80%%

```
## ini 檔案屬性的內插\(Interpolation\) : ExtendedInterpolation

```python 
config = configparser.ConfigParser(interpolation=configparser.ExtendedInterpolation())
```

## ini 格式內容其他讀取方式
```python
another_config = configparser.ConfigParser()
another_config.read('example.ini')

another_config['topsecret.server.example']['Port']

another_config.read_string("[topsecret.server.example]\nPort=48484")
another_config['topsecret.server.example']['Port']

another_config.read_dict({"topsecret.server.example": {"Port": 21212}})
another_config['topsecret.server.example']['Port']

another_config['topsecret.server.example']['ForwardX11']
```

## ini 格式內容其他讀取方式與操作

```python
config = configparser.ConfigParser()
config.sections()

config.read('example.ini')

config.sections()

'forge.example' in config

'python.org' in config

config['forge.example']['User']

config['DEFAULT']['Compression']

topsecret = config['topsecret.server.example']
topsecret['ForwardX11']

topsecret['Port']

for key in config['forge.example']:  
    print(key)





config['forge.example']['ForwardX11']
```

## 建立 ini 格式檔

```python
import configparser
config = configparser.ConfigParser()
config['DEFAULT'] = {'ServerAliveInterval': '45',
                     'Compression': 'yes',
                     'CompressionLevel': '9'}
config['forge.example'] = {}
config['forge.example']['User'] = 'hg'
config['topsecret.server.example'] = {}
topsecret = config['topsecret.server.example']
topsecret['Port'] = '50022'     # mutates the parser
topsecret['ForwardX11'] = 'no'  # same here
config['DEFAULT']['ForwardX11'] = 'yes'
with open('example.ini', 'w') as configfile:
  config.write(configfile)
```















import { CodeBlock, dracula  } from "react-code-blocks";
<CodeBlock text={`  
'Hello World'
    `}
      language='python'
      showLineNumbers='true'
      />