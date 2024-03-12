---
title: Pickle 序列化與反序列化
description: Python 物件序列化與反序列化
keywords: [Python ,Tutorial,Serialization]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 物件序列化與反序列化: pickle
> pickle module 允許你將 python 中的 Object serialized。  
> 類似 tomcat serialized web application 的狀態。    
> 在適當或需要的情形下再反序列化回 python objects。  

* 文件說明參考
    * https://docs.python.org/zh-tw/3/library/pickle.html
    * https://docs.python.org/3/library/pickle.html

## Pickle serialization: dump(object, path)
<CodeBlock text={`
import pickle
#
person = {
    'name': 'Totem',
    'age': 30,
    'gender': 'M'
}
#
with open('D:/dump_p.pkl', 'wb') as f:
    pickle.dump(person, f)
# {'name': 'Totem', 'age': 30, 'gender': 'M'}
    `}
      language='python'
      showLineNumbers='true'
      /> 

## Pickle de-serialization: load(path)
<CodeBlock text={`
import pickle
# 
with open('D:/dump_p.pkl', 'rb') as f:
    data = pickle.load(f)
print(data)
#
data['weight'] = 80
data['height'] = 170
with open('D:/dump_p2.pkl', 'wb') as f:
    pickle.dump(data, f)
with open('D:/dump_p2.pkl', 'rb') as f:
    data2 = pickle.load(f)
print(data2)
# {'name': 'Totem', 'age': 30, 'gender': 'M', 'weight': 80, 'height': 170}
    `}
      language='python'
      showLineNumbers='true'
      /> 


## 與 eval() 比較: 
> eval 也可達到將資料序列化的目的。  

<CodeBlock text={`
with open('D:/eval_string_file.txt', 'r') as f:
    content = f.readline()
    # content = '{"name": "Totem", "age": 30, "gender": "M", "weight": 80, "height": 170}'
    p = eval(content)
    print(p)
    print(type(p))
    `}
      language='python'
      showLineNumbers='true'
      /> 
