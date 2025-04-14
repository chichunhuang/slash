---
title: Anaconda 基本管理指令
description: Anaconda 基本管理指令
keywords: [Python,Anaconda,Tutorial]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Anaconda 管理 Python Env 相關指令
* 使用工具 
** Anaconda Propmt
** Anaconda Navigaror


| 指令 | 說明 | 同義 | 
| :-- | :-- | :-- |
| $conda env list  | 列出系統中已安裝 Virtual Environments |  |
| $conda create --name {NAME} | 建立名稱為 NAME 的 VM | $conda create -n {NAME} |
| $conda create --name {NAME} python={version} | 建立名稱為 NAME 的 VM，指定使用 version 版的 Python |  |
| $conda activate {NAME} | 啟用 NAME 這個 VM |  |
| $conda desctivate | 停用當前使用中 VM |  |
| $conda list  | 列出當前 VM 中所安裝的相關套件 |  |
| $conda install {LIB} | 為當前啟用中的 VM 安裝 LIB 這個套件 |  |
| $conda remove --name {NAME} {LIB} | 移除 NAME VM 下的 LIB 套件 |  |
| $conda env remove --name {NAME} | 移除 NAME 這個 VM |  |
| $conda info | 顯示 conda 詳細資訊 |  |
| $conda update conda  | 更新 Conda 版本(管理者執行) |  |
| $conda -V  | 檢查 Conda 版本 | $conda --version |
| $conda list anaconda$ | 檢查 annaconda 版本/Name/Build Channel |  |
| $conda list python -f | conda env 下 python 版本 |  |


  
# Conda vs Anaconda
* Anaconda : 是 python 的一個整合的發布版本(已整合多項 Packages，並處理之的的相依關係)
* conda : 是 packages 管理工具