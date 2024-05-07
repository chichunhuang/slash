---
title: Python Decorator
description: Python Decorator
keywords: [Python,Decorator]
---


# Python Decorator 裝飾器
> 
> 先簡單說甚麼是 Decorator Pattern:   
> 在 Design Pattern 中是這樣說明的，  
>  __ <span style={{color: '#0044FF'}}>一種 Structural Pattern，允許在不改變原始程式碼結構下，為既有程式增加新功能。</span>__     
> 看到這說明直覺想到的應用是:  
> logging、DB Connection 準備、IO 準備等重複且固定的執行動作。  
> 所以接下來的例子都會以為 Business Function 進行 log 為主軸。  

> Python 的 Decorator 主要還是 Functions，  
> Decorator Functions 可以是 first-class 成員 Functions，也可以是 Class 的 Methods。  
> Decorators 除了單純的為 Business Objects 添加功能外，也可以接收參數增加使用變化，  
> 此外，一個 Business Function 也可以被多個 Decorators 修飾。    
> 

> 註:  
> 1. 這邊為了方便記憶與說明，將主角冠上 Decorator/Business 來區分裝飾者與被裝飾者。  
> 2. 參考 [AOP Aspect-Oriented Programming](https://en.wikipedia.org/wiki/Aspect-oriented_programming)，AOP 是一種常見的  Decorator Pattern 的實作。
> 3. [Inversion of control, IOC](https://en.wikipedia.org/wiki/Inversion_of_control)
> 


## Function Decorator: Basic
> Python 中 Business Function 是一級公民，可以當變數傳遞。  
> 所以最簡單的 Decorator 是接收 Business Function，  
> 並在執行 Business 前執行指定動作。  
> 下面範例，  
> Logger 接收 Business Function(login fucn)，  
> 並將相關動作封裝於 Wrapper Function，  
> 也就是說 login 加上 @Logger 之後會得到 wrapper function。  
> login function 所得到的參數也會 delegate 給 Wrapper。  

```python
# 藉由 Logger 將 Business Function 包覆在 __Wrapper Function__ 之中。
def Logger(business_function):
    def wrapper(*vArgs, **kwArgs):
        print("-logger: %s method start" % business_function.__name__)
        print('vArgs: ', vArgs)
        print('kwArgs: ', kwArgs)
        print("-Function go~")
        result = business_function(*vArgs, **kwArgs)
        print("-logger: %s method end" % business_function.__name__)
        return result
    return wrapper

@Logger
def login(username = 'username', pwd ='pwd'):
    print('user_login')
    print('username: ' , username)
    print('pwd: ', pwd)

action = login(username = 'totem', pwd ='password')

# -logger: login method start
# vArgs:  ()
# kwArgs:  {'username': 'totem', 'pwd': 'password'}
# -Function go~
# user_login
# username:  totem
# pwd:  password
# -logger: login method end
```

__上方動作等同於__ <br/>

```python 
logger = Logger
loginExecutor = logger(login)
loginExecutor(username = 'totem', pwd ='password')
```

## Function Decorator :添加 Annotation 屬性 

```python
# 帶參數的 Decorator 要雙層封裝
# 一層封裝 Decorator 所需參數
# 另一層封裝 Business Function 
def Transaction(driver, url, user, pwd):  # 這邊的是環境準備所需資料
    print('Prepare DB Connection driver=%s,url=%s,user=%s,pwd=%s. ' % (driver, url, user, pwd))
    connection_handler = 'my_db_handler'
    def decorator(business_fun):
        @Logger
        def argsCatcher(*vArgs, **kwArgs):
            result = business_fun(*vArgs, **kwArgs)
             print('Disconnect DB by %s.' % connection_handler)
            return result
        return argsCatcher
    return decorator

@Transaction('postgresql', 'db.url.schema','totem', 'pwd')
def buy(*vArgs, **kwArgs):
    print("Deal~ Buy All!")

gift = buy("ring", 'chocolate', 'flowers')

# Prepare DB Connection driver=postgresql,url=db.url.schema,user=totem,pwd=pwd. 
# -logger: argsCatcher method start
# vArgs:  ('ring', 'chocolate', 'flowers')
# kwArgs:  {}
# -Function go~
# Deal~ Buy All!
# Disconnect DB by my_db_handler.
# -logger: argsCatcher method end
```

## Class Decorator: 以類別管理多個 decorators

> 上面有提到 Annotation Decorator 可以為 Business Function 添加額外功能與準備動作。  
> 而 Decorator 本身是一個 Function，上面的例子也都是一級 (first-class) 成員函數的例子。  
> 接下來要介紹的是當 Decorator 以 Class 為 host 時的處理方式。  
> 延續上面的發想，我設計了一個 Logger，  
> 利用半殘的 Decorator 將資料輸出到指定位置。  
> 剩餘部分可以自行擴充不同的 Printer subclass。  
>
> 註:  
>> 也可以試試以 Decorator 來做 Form Components 的 Validator，進行基本格式檢查。  
>> 或是實作做 Web UI Event Handler，為 event 擷取資料或註冊處理函式。  

__Decorator: Print message to somewhere__ <br/>

```python
# Decorator
class Printer:
    def __init__(self, infoFile='info.txt', errorFile= 'error.txt'):
        self.infoFile = infoFile
        self.errorFile = errorFile
        # alternative ways: prepare mail sender/ console printer/logger server....

    def info(self, dest=''):
        print('log info to : ', self.infoFile if dest == '' else dest)
        def fun_wrapper(business_function):
            def arg_wrapper(*vArgs, **kwArgs):
                print("-logger: %s method start" % business_function.__name__)
                print('vArgs: ', vArgs)
                print('kwArgs: ', kwArgs)
                print("-Function go~")
                result = business_function(*vArgs, **kwArgs)
                print("-logger: %s method end" % business_function.__name__)
                return result
            return arg_wrapper
        return fun_wrapper

    def error(self, dest=''):
        print('log error to : ', self.errorFile if dest == '' else dest)
        def fun_wrapper(business_function):
            def arg_wrapper(*vArgs, **kwArgs):
                pass # moitted
            return arg_wrapper
        return fun_wrapper
```

__Logger Util: to print and to manage destinations__ <br/>

```python
# Util Class
class Logger:
    filePrinter = Printer(infoFile='info.txt', errorFile='error.txt')
    stdoutPrinter = Printer(infoFile='console_info', errorFile='console_error')

    def __init__(self, file=False, std=True):
        self.toFile = file
        self.toStd = std

    @filePrinter.info()
    def info_file(self, *message):
        print(*message)

    @filePrinter.error()
    def error_file(self, *message):
        print(*message)

    @stdoutPrinter.info()
    def info_std(self, *message):
        print(*message)

    @stdoutPrinter.error()
    def error_std(self, *message):
        print(*message)

    def info(self, *message):
        print("Util info ", message)
        if self.toFile:
            self.info_file(message)
        if self.toStd:
            self.info_std(message)

    def error(self, *message):
        print("Util error ", *message)
        if self.toFile:
            self.error_file(*message)
        if self.toStd:
            self.error_std(*message)
```

__Run test__ <br/>

> 當 呼叫 logger.info 或 logger.error 時會自動依據 Logger 建立時的設定將資料輸出至指定位置  

```python
def hand_shake(device, signal):
    logger = Logger(file=True, std=True)
    try:
        remote_connect()
        logger.info("Connected")
    except Exception as e:
        logger.error("Connection disrupted", str(e), repr(e))

hand_shake("device", "signal")
```

## Class Decorator: 類別管理下添加 Annotation 屬性 
上面 Decorator 範例其實已經準備好相關工作了，僅須在 Util 呼叫時給予數性質便可實現，<br/>
程式片段如下: <br/>

```python

    def info(self, dest=''):
        # omitted

    @filePrinter.info("customized.log")
    def info_file(self, *message):
        print(*message)

    @filePrinter.error("customized_error.log")
    def error_file(self, *message):
        print(*message)
        
```


## Decorator 後記:覆寫 \_\_call\_\_ 建立 Decorator
> Decorator 可以輔助 Business Function 並執行某些附加的動作。  
> Python 中具有執行能力的除了 Function/Method 之外，別忘了還有 Constructor。  
> 所以，Decorator 除了以 Function 來實作外也可以在建構時實作。  
> 此時需要的是覆寫 \_\_call\_\_() 這個方法。  
> 也就是不明確的呼叫指定函數，而是隱含的呼叫 \_\_call\_\_。  
> 個人是不偏好這種方式。畢竟若要用到 Class，基本上應該打算做些封裝管理。  
> 也就是將多個相關的  Decorators 放在一起管理。  
> 覆寫 \_\_call\_\_() 有點違反個人開發習慣，所以不這麼做(語法上是可以的)。  
> 對我來說他只有一個好處，就是 Annotation 尾端不需要加上小括號\(\)而已。  
> 下面是一個範例，不多作解釋...

__Class Decorator : by constructor__ <br/> 

```python 
class DecoratorClass(object):
    def __init__(self, func):
        self.func = func

    def __call__(self, *args, **kwargs):
        print("before call")
        result = self.func(*args, **kwargs)
        print("after call")
        return result

@DecoratorClass # 這裡不是 method, 故省略了 ()
def printHelloWorld():
    print("Hello World")

printHelloWorld()
# before call
# Hello World
# after call
```

__Class Decorator : by constructor with annotation attr__ <br/> 

```python 

class DecoratorClass(object):
    def __init__(self, annotation_attr):
        self.attr = annotation_attr
        print("Prepare", self.attr)

    def __call__(self, func):
        def wrapper(*args, **kwargs):
            print("before call")
            result = func(*args, **kwargs)
            print("after call")
            return result
        return wrapper


@DecoratorClass("Oracle DB")
def saveEntity(entity):
    print(entity)

score = saveEntity("Final Exam: 85%")
# Prepare Oracle DB
# before call
# Final Exam: 85%
# after call

```
