---
title: Python ini ConfigParser
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
> 2.sections/attributions 可以縮排方便閱讀。文件是這樣說，實際上似乎應該避免。   
>> Indentation 是有條件的，不小心就會出錯，不建議使用。  
>> Section Indentation 似乎只能在曹串的 sections 中使用，意即頂層 section 不可以 indent。  
>> 與 nested section 同階層的其他 attributions 也必須 indent。  
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

## 常用函數
|               |                          |
|----------|-----------------|
| config.read_file(ini_file) | 讀取單一個 ini 檔 |
| [config.read(\[file_list\])](#config_read) | 一次讀取多個 ini 檔 |
| [config.read_string(content_of_ini_file)](#config_readstr) | 讀取 plain text 內容，不同次讀取的資料會整合在一起。 |
| [config.read_dict(dict_json)](#config_readdict) | 讀取 dict 結構內容，一樣是可以分段讀資料，然後整合在一起。 |
| config.get(path, sub_path)| 依階層路徑取值，預設為 str |
| [config.getboolean()](#casting)| 取值並 cast 為布林 |
| config.getint()| 取值並 cast 為數值 |
| config.sections() | 列出階層內的 sections |
| config\['sec'\]\['attr'\] | 依階層路徑取值，預設為 str |



## ini 檔案讀取方式

_ini exercise_

```properties
[DEFAULT]
PI = 3.1415926535
Euler = 2.7182818284
Speed_of_light= 299792458
Avogadro = 6.022140 *10^23

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
jdbc.db.authority=  

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


## ini 檔案屬性讀取方式與轉型 <span id="casting">&nbsp;</span>
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
    
    print(config.get('Mail', 'mail.disable')) # 使用 get() 可以寫路徑
```

## ini 檔案屬性預設值
* 分為兩類: DEFAULT 與 Fallback，都是用在查無屬性設定時。
* DEFAULT: 類似系統 Global 參數概念，若 section 中查無屬性時接下來查詢的大池塘。
* Fallback: 當向上查詢屬性至 DEFAULT section 仍查無時，此時可以給定一個當查無屬性時回傳的 fallback value。
* 註: 空值仍視為有該屬性，所以不適用於此處的預設值。

__DEFAULT Section__
> 1.DEFAULT 區塊中的屬性可作為屬性的預設值。但前提是:  
> &nbsp;&nbsp;當程式欲取出某一 section 下不存在的 key 的屬性值時，  
> &nbsp;&nbsp;而 DEFAULT section 有設定的話，則可依 DEFAULT 值代用。 

```python
with open (r'D:\tmp\totem.ini', 'r') as ini_file:
    config = configparser.ConfigParser()
    config.read_file(ini_file)
    
    print(config['DEFAULT']['PI']) # 3.1415926535

    print('PI' in config['DataSource']) # DEFAULT always in
    print(config['Mail']['PI']) # 3.1415926535
```

__Fallback value__
> 
> 同樣是用在查無屬性時，若連 DEFAULT section 也查無的話，可以在取值時先給予預設。  
> fallback value 必須以 get() 方式取出時才可設定。  
> 

```python
with open (r'D:\tmp\totem.ini', 'r') as ini_file:
    config = configparser.ConfigParser()
    config.read_file(ini_file)
    
    dataSource = config['DataSource']
    print( 'jdbc.db.authority' in dataSource)
    print(config.get('DataSource', 'jdbc.db.authority' )) # 注意是有值, 空字串
    print(dataSource.get('jdbc.db.authority', fallback='read only')) # 注意是有值, 空字串,所以沒 fallback

    print(dataSource.get('attribute_not_exists')) # None
    print(dataSource.get('attribute_not_exists', fallback='fallback value')) # fallback value   
    print(config.get('DataSource', 'attribute_not_exists', fallback='fallback value')) # fallback value               
```


## 屬性內插\(Interpolation\) : BasicInterpolation
> 
> 內插指的是 ini 檔中允許屬性值串接。   
> 被內差的屬性須以 __%\(__ attr_name __\)s__ 修飾。
>> 小括號 __<span style={{color: '#0044FF'}}> 前加一個 %, 後補一個 s </span>__，別懷疑，除了%外， <span style={{color: '#FF1100'}}> 後面還要帶一個 __s__ </span>。    
> 脫逸字元為 % 百分比符號。  
> 預設採用的 Interpolation 為 BasicInterpolation，不須額外指定或設定即可使用。  

* ConfigParser 的 interpolation 預設為 BasicInterpolation()

__ini__

```python

[Address]
country: Nerverland
city: Indian Camp
road: central
number: 1
address=No.%(number)s %(road)s rd., %(city)s, %(country)s

[Escape.Char]
# escape string: % 
score: 80%%

[Gender.Distribution]
male: 50.1%%
female: 49.9%%
```

__BasicInterpolation Example__

```python
with open (r'D:\tmp\totem.ini', 'r') as ini_file:
    config = configparser.ConfigParser()
    config.read_file(ini_file)
    
    print(config.get('Address', 'address'))
    print(config['Address'][ 'address']) # No.1 central rd., Indian Camp, Nerverland

    print(config.get('Gender.Distribution', 'male')) # 50.1%   
```

## 屬性內插\(Interpolation\) : ExtendedInterpolation
> 沒特別研究 ExtendedInterpolation，不過猛一看似乎只是內插屬性的插入上不同。比較直覺，類似一般程式語言的用法。推薦!  
> 被內差的屬性須以 __${__ attr_name __\}__ 修飾。
>> 以錢符號與大括號 __<span style={{color: '#0044FF'}}> ${ attr_name } </span> 修飾內插屬性。    
> 脫逸字元為 $ 錢符號。  

```python 

[Address2]
country: Nerverland
city: Indian Camp
road: central
number: 1
address=No.${number}, ${road} rd., ${city}, ${country}


with open (r'D:\tmp\totem2.ini', 'r') as ini_file:
    config = configparser.ConfigParser(interpolation=configparser.ExtendedInterpolation())
    config.read_file(ini_file)

    ## ExtendedInterpolation
    print(config.get('Address2', 'address'))
    
```

## ini 格式內容其他讀取方式
__config.read([list of filenames])__ <span id="config_read">&nbsp;</span>
> config.read([list of filenames]): 允許一次讀多個 ini 檔。  
>> 不同檔案若出現相同 attribution 則以後讀到的為準。  

```python
config = configparser.ConfigParser()
config.read([r'D:\tmp\totem.ini', r'D:\tmp\totem2.ini'])
```

__config.read_string(content_of_ini_file)__ <span id="config_readstr">&nbsp;</span>
> config.read_string(content_of_ini_file):  
>> 讀取 plain text 內容，不同次讀取的資料會整合在一起。  

```python
config = configparser.ConfigParser()

config.read_string('[Profile]\n name=totem')
print(config['Profile']['name'])

config.read_string('[Profile]\n gender:male')
for att in config['Profile']:
    print(att) # name, gender
```

__config.read_dict(dict_json)__ <span id="config_readdict">&nbsp;</span>

> config.read_dict(dict_json):  
>> 讀取 dict 結構內容，一樣是可以分段讀資料，然後整合在一起。  

```python
import configparser, os
config = configparser.ConfigParser()

config.read_dict({'Profile': {"name": 'totem',
                              "gender": 'male'}
                  })

config.read_dict({'Education': {"Master": 'NTU',
                              "Bachelor": 'NCHU'}
                  })

for section in config:
    print(section)
    for attr in config[section]:
        print(attr)
        print("    %s=%s" % (attr, config.get(section, attr)))
        
# DEFAULT
# Profile
# name
#     name=totem
# gender
#     gender=male
# Education
# master
#     master=NTU
# bachelor
#     bachelor=NCHU
# 
# Process finished with exit code 0
        
```

## 建立 ini 格式檔
> 概念上很簡單，就像是編輯一個 dict 然後呼叫 write 寫成檔案。

```python

import configparser

config = configparser.ConfigParser()
config['DEFAULT'] = {'server': 'google.cloud',
                     'port': '1234'}

# 建立 Mail section, 這 statement 不能省略。
config['Mail'] = {}  

# 這邊要注意，因為 python 語法的關係，沒有建立並回傳變數的語法，所以要拆兩行。
mail = config['Mail'] 

config['Mail']['mail.disable'] = 'True'
mail['mailTempalte.from'] = 'dummy@org'
mail['mailTempalte.fromname'] = 'dummy'

with open(r'D:/tmp/export.ini', 'w') as configfile:
    config.write(configfile)
```

