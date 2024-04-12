---
title: Python Package and Module
description: Python Package and Module
keywords: [Python ,Package, Module]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python Package and Module

[ ___Package___ ](#using_package)
> 
> 指的是放 Python 相關檔案的資料夾。資料夾中預期會有 <span style={{color: '#0044FF'}}> __\_\_init\_\_.py__ </span> 檔案。  
>> __\_\_init\_\_.py__ 內容可為空，python3+ 中可省略(若考慮向下相容，建議可以保留此慣例)。  
> 
> Package 資料夾可以槽串，同樣預期每個資料夾中都該有 __\_\_init\_\_.py__ 檔案。  
> 在 import 句子中使用時，須由 root package 依序寫清路徑全名(full path)。  

[ ___Module___ ](#using_module)

> 就是 package 資料夾內的 \*.py 檔。  
> 使用上需注意 module name 也是一種變量，所以使用時(命名時)須注意 shadow effect。  

## <span id="using_module">Module 的使用</span>

## Import 路徑
__絕對路徑(Absolute Path)__
> 由整個 Python Environment 來看的路徑。每個路徑都是唯一的。  

__相對路徑(Relative Path)__
> 指的是 <span style={{backgroundColor: '#ffd1b3'}}>由 main process 角度來看</span> 的路徑。並非當前使用中的 module 的角度來看。  


## Module Importing 的概述
[Import 相關語法](#importing_syntax)
___import 語法___
___from\.\.\. import 語法___
___reload 語法___

[系統預設載入的 Modules](#default_modules)

[模組查詢順序](#loading_shadow)

[Module 使用陷阱](#module_pitfall)

[Module 與封裝](#module_envelop)






## import v\.s\. from import
21L

## Module Reload(重新載入模組)


## <span id='default_modules'>系統預設載入的 Modules</span>
___sys.modules___

___ \_\_pycache\_\_ ___

___ sys.path ___


## <span id='loading_shadow'>Python Env(VM) 模組查詢順序: Shadow effect</span>
21/24

## <span id='module_pitfall'>Module(\*.py) 使用陷阱</span>
22
___Shadow Effect___

___by reference___

___by value___


## <span id="importing_syntax">Import 相關語法</span>

<span>import from reload main</span>

___ \_\_main\_\_ ___

## <span id="module_envelop">Module 與封裝</span>
24

## <span id="using_package">Package 的使用</span>