---
title: PyCharm 中使用 Anaconda 管理 Envs
description: PyCharm 中以 Anaconda 管理 Python Envs
keywords: [Python,PyCharm,Anaconda]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# PyCharm 中以 Anaconda 使用/切換 Python Virtual Environment

## 建立專案時指定 Python Virtual Environment
* File > 
* Create Project(New Project...) >> 
* Previously Configured Interpreter >>
* Add Interpreter >> 

![PyCharm_Anaconda_Envs_Mgmt_a1.jpg](/img/docs/python/InsectTotem_PyCharm_Anaconda_Envs_Mgmt_a1.jpg "Select Env while Creating Project")

## 已建立專案切換 Python Virtual Environment 
* File > 
* Settings >>
* Project >>
* Python Interpreter >>
* Add Interpreter >>
* Conda Environment >> 
* Interpreter >> ... 選取已經在 Conda 整理好的 Virtual Environment 的 python.exe

![PyCharm_Anaconda_Envs_Mgmt_a2.jpg](/img/docs/python/InsectTotem_PyCharm_Anaconda_Envs_Mgmt_a2.jpg "Switch Python Env")  
  
## 顯示以安裝 Conda environments 位置
* 開啟 Anaconda Prompt
* 輸入指令 $conda env list

```
$ conda env list
```
![PyCharm_Anaconda_Envs_Mgmt_01.jpg](/img/docs/python/InsectTotem_PyCharm_Anaconda_Envs_Mgmt_01.jpg "Anaconda env list")