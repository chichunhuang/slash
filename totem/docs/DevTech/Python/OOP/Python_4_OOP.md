---
title: Python 與 OOP
description: Python 與物件導向
keywords: [Python,OOP]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 與 OOP
* OOP 的三大概念與特性 (繼承/多型/封裝) 與 Python 間的關係，<span style={{color: '#996633'}}>__純個人理解的學習摘要__</span>。隨便看看就好，不負責任的。 

## Inheritance 繼承
> Signature 中的 MRO 查找順序其實可以看出 Python 中繼承的設計端倪。  

> Python 雖然是直譯式語言沒有編譯的中間階段，所以推測應該也沒也 heap 相關記憶體。  
> 感覺上 Python 的繼承比較像似 XML 的繼承。也就是把父類別的程式碼複製一份過來組成完整片段後一起進行直譯。  
> 但實際是如何實作還是要看直譯器的動作。目前尚未深入了解。   

## Polymorphism 多型多態
> type 還是以創建時指定的為主。  
> Python 畢竟是動態型別，所以也不會做型別檢查。  
> 當然也不會有以父類別的變數指向子類別實作這種事情發生。  
> 所以談多型似乎沒太大意義。  
> 若要談多型應該是指 Python 有 class 繼承的語法。     
> 這當中我覺得較重要需注意的是，你實際使用的是哪個成員。  
> 可以將繼承結構展開，然後得到成員解析順序，記得注意使用的是否是靜態成員。    

> 另外，Python 也有 abstract method，提醒子類需作相關實作的功能。  

## Encapsulation 封裝
> Python 的封裝大多數都僅是建議與提示性質的，  
> 也就是說 Python 多以命名慣例來提醒 API 使用者需注意設計者不希望被干擾的成員。  
> 也就是以偽私有變數命名，來達成資料封裝的目的。   

## 偽私有變數命名方式:
__目的__ 
　
> 著重在避免 instance 內的命名空間發生衝突，  
> 而非強力限制變數存取。  
> 

__Variable Mangling__ 
　
> Python Class 區塊內 en dash 起始(雙下劃線 di-underscore)的變數名，  
> 會被編譯為以 _className 為前綴的新名稱。
> 因為編譯後變數名冠類別名，因此可以避免被子類別覆寫。    
> 例如: __var 會變成 _className__var。  
>
> Mangling 用在工具類或 super class，用來避免超類被子類覆蓋的慣例。


