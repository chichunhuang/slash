---
title: Python 例外與錯誤
description: Python Exception and Error
keywords: [Python,Exception Handling]
---

# Python 例外與錯誤
> Python 的[內建例外](https://docs.python.org/zh-tw/3/library/exceptions.html#bltin-exceptions)中可以看到，Exception 的子類別多數是以 Error 結尾。  
>　所以，有時 Error 會直接被視為是一種 Exception 的意思。  
> 不過 [Python 文件](https://docs.python.org/3/tutorial/errors.html)似乎把 Error 這個字眼強調為 Syntax Error，
> 有別於 Exception 這個 Class 下的子類別。    
> 我這邊還是把 Exception/Error 視為同一類，Syntax Error 另外討論

__Reference__ :<br/>
* [Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)
* [錯誤和例外](https://docs.python.org/zh-tw/3/tutorial/errors.html)
* [Built-in Exceptions](https://docs.python.org/3/library/exceptions.html#bltin-exceptions)
* [內建的例外](https://docs.python.org/zh-tw/3/library/exceptions.html#bltin-exceptions)

## Syntax Error: 語法錯誤
> 就是 Python 直譯器在解析程式法時所發現的錯誤，又稱為 Parsing Errors。  
> 簡單說就是程式碼直接被拒於門外無法使用。  
> Pythonic Slogan : We are all consenting adults!   
> 基本上出現 Syntax Error 意味著，你是個小 Baby 吧。  


## Exception: 例外
> 例外 \(__Exception__ \)指的是程式碼執行過程中發生的錯誤事件。  
> 事情可大可小，  
> 有些無法處理，有些可處理。  
> 無法處理例外如: IO異常/硬體異常/網路異常，基本上開發者只能回應錯誤發生並等待相關人員做後續處理。    
> 可處理處理例外，第一類如 分母為零/型別錯誤/IndexError 等等，通常是工程師程式沒處理好，應該進一步改寫，  
> 第二類則是工程師自行創建的例外類型，用來阻擋或處理商業邏輯上的異常行為。

## Exception Handling: 例外處理
* try -> except -> else -> finally

> try/except 間的程式區塊是商業邏輯區塊，  
> 以 try/except 包住用來檢驗是否發生指定例外。  
> 
> except 區塊則是當指定例外生時，說明如何進一步的處理區塊。
> 
> else 區塊是，當沒例外發生時才會執行。
> 
> finally 區塊無論如何都會執行的區塊，即使例外已發生。

__Exception Handling Syntax__ <br/>
* business_statement 發生時會依據下方語法，<span style={{color: '#0044FF'}}> __由上而下，由左而右的查詢符合的 Error 種類。__ </span>

```python

try:
    <business_statement>
    except <ErrorA>: 
        <statement>
    except <ErrorB, ErrorC>: # 列舉不同的 Errors
        <statement>
    except <ErrorD> as <alias_d>: # 給予別名, 方便 stack tracing
        <statement>
        print(str(e), repr(e))
    except <ErrorE, ErrorF> as <alias_x>:
        <statement>
    except Exception: # 系統退出以外的 Errors
        <statement>
    except: # catch all Exceptions   
        <statement>
    else:   
        <statement> # 若無 Error raise 則執行   
    finally:    
        <statement> # 無論如何都執行   

```

__心得__ <br/>

```python
else:
    1.若無 Exception 時，則執行 else 區塊的句子。
    2.使用上，可想成與 if else 相同概念。一個判斷 Boolean 另一個判斷 Exception。
    
* 猜測是因為 Python 中， try-except, methods, vars 等都可以是一級成員。
* 使用時為了可以把整個 Business logic 封裝在同一個區塊，所以有 else 片段
* Java 中 try-catch 語句會寫在 method 內，
  else 片段則直接寫在  try-catch 區塊外。
  business logic 由 method 封裝。因此不需要 else 片段。
    
```

## 客製專屬的例外

> 客製專屬的例外，因 Exception 是一個 Class，所以簡單地繼承便是。  

```python

class CustomizedException(Exception):
    def __init__(self, message, error_code):
        super().__init__(message) # 呼叫父類別建構子，以方便未來使用 str(e)/repr(e) 等取異常內容
        self.error_code = error_code
```

## 拋出例外
* 兩類語法
    * raise  
    * raise ... from ...

__Raise Error: Syntax__

```python
# raise
raise <error_instance> 
# 拋出新建立的 Error Instance

raise <ErrorClass> 
# 直接呼叫指定 Error Class 建構子，自動建立並拋出 Error Instance
# 註: 預設建構子，因此沒錯誤訊息。

raise # 重新拋出先前的 Error

# raise from
raise <Error> from <PreviousError> # Catch Error 並重新包裝與再次拋出

try: 
    login('username', 'pwd')
except AccountNotExistError as e:
    raise LoginFailedError('Can not login!') from e
except WrongPasswordError as e:
    raise LoginFailedError('Can not login!') from e
    
```


## With As context management <span id="with_as_codeblock">&nbsp;</span>

* Reference: [With As: 定義一個臨時的 Codeblock](../Python_File#with_as_codeblock) 

> with/as 是一種暫時的程式碼區塊，  
> 在此也可視為 try/finally 的變種。  
> 用來定義無論如何都必須執行的終止動作或情除收尾動作。  


__With As context management: syntax__ <br/>

with as syntax: 
 
```python
with <expression> as <variable>:
    doAction()
    
with open(r'C:\pathtofile.txt', rb) as file:
    doParsing(file)    
            
```

combination of try and with: <br/>
範例主要呈現的目的是: 1.自動關閉資料流, 2.例外處理 
 
```python  
# style 1:
try:
    with open('not_exists.txt') as f:
        print(f.readlines())
except FileNotFoundError as error: 
    print('oops')


# style 2:        
try:
    f = open('not_exists.txt')
except FileNotFoundError:
    print('error')
else:
    with f:
        print(f.readlines())
            
```