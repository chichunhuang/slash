---
title: Python 排序三兩事
description: Python Sorting
keywords: [Python,Sorting]
---
import { CodeBlock, dracula  } from "react-code-blocks";


# Python 排序三兩事
> 該開始自學 Python 時，看到一大堆範例在使用 sort(), sorted(), 甚至是 pandas 的 sorting。    
> 老實說，學得亂七八糟。一個程式語言中到底要有幾種排序工具啊。  
> pandas 算第三方 api 先不提它。  
> 那麼 sort(), sorted() 都是語言自帶 (built-in) 工具，為設麼要這麼多種呢?  
> 再加上 in-place、by reference 或是 return 新 collection，彼此交互影響。  
> 使用上到底有沒有犯錯，老實說有些沒信心。  
> 當時，整體觀念我了解，但對 api 不熟悉...  
> 現在，覺得該做些紀錄不然下次使用時又還回去...  
> 畢竟只是 Python 的輕度使用者...  

> 其他:
>> 1. 下面介紹的部分也應該注意一下語法中的 key:expression 部分。   
>> 2. Reference :[Python_Sorting_by_Pandas](./Misc/Python_Sorting_by_Pandas)。 
>> 3. 排序時也可以搭配 operator module 使用。  


## sorted\(\) 函數: Built-in Tool 
> sorted\(\) 是 Python built-in function，可以建立一個 __新的__ 排好序的物件。  
> 原生的集合，sequence 類都可以使用。 
> 可以想成是 Java 的 Collections 類別。 
> 也就是說 sorted\(\) 他是一個通用的工具類。

## sort\(\) 函數: List Instance Function
> 這是最讓初學者混淆的部分。  
> list instance 的 in-place-modify function。  
> 因為一開始看到的範例中的集合大多數都是使用 list class。  
> 而 list 類本身也帶了一個 sort\(\) function。  
> 但是，這邊使用時需先有一個 list 的 instance。  
> 由 list instance 呼叫自己的 sort\(\)。  
> 結果便是將 list __中的__ items 排序。 
> 也就是說 list.sort\(\) 是 in-place 修改。  
> 這意味著，拿到 list instance 的其他人的資料也會跟這受影響。  
> 這跟 sorted\(\) 複製新的資料結構有所不同。  


## sorted\(\) syntax
* built-in function sorted\(\) 可用在多種資料結構下。list/set/map 等基本資料結構都可使用。  

> 注意: 
>> 語法中的 expression 並非是 comparator，僅需提供一個參數值供 comparator 比對使用。 
>> 因為 Python 語法較為寬鬆，若排序的條件為不同型別時，則會拋出 TypeError  
 
```python 
# sorted() syntax
copy = sorted(iterable, key=expression, reverse)

# list.sort() syntax
none = list.sort(key=expression, reverse)
```


## sorted\(\) 範例

### sorted\(\): List/Set Example
```python
nums = {44, 1, 33, 2, 3, 22, 4, 55, 5}
nums2 = {44, 1, 33, 2, 3, 22, 4, 55, 5}

# built-in sorted() function 會建立一個 [新的集合]，不影響既有資料
copy = sorted(nums, reverse=True)
copy2 = sorted(nums2, reverse=True)
print(copy)  # [55, 44, 33, 22, 5, 4, 3, 2, 1]
print(copy2)  # [55, 44, 33, 22, 5, 4, 3, 2, 1]
print(nums)  # [44, 1, 33, 2, 3, 22, 4, 55, 5]

```

### sorted\(\): Dict/Map Example

> hint: Python Dict 可以轉成 dict_items，針對 dict_items 進行 item 排序。
>  註: dict.items() = <class 'dict_items'>
>      key = dict_item[0]
>      value = dict_item[1]

```python

students = {
    's1': {
        'name':'Totem',
        'score1':81,
        'score2':70
    },
    's2': {
        'name':'Albert',
        'score1':60,
        'score2':71
    },
    's3': {
        'name': 'Winnie',
        'score1':80,
        'score2':70
    },
    's4': {
        'name': 'Tom',
        'score1':66,
        'score2':70
    },
    's5': {
        'name': 'Ben',
        'score1':45,
        'score2':50
    }
}

#  依據 score1 將 items 排序
#  註: students.items() = <class 'dict_items'>
#      key = dict_item[0]
#      value = dict_item[1]
s2 = sorted(students.items(), key=lambda d_item: d_item[1]['score1'])
print(s2)
# [('s5', {'name': 'Ben', 'score1': 45, 'score2': 50}), 
# ('s2', {'name': 'Albert', 'score1': 60, 'score2': 71}), 
# ('s4', {'name': 'Tom', 'score1': 66, 'score2': 70}), 
# ('s3', {'name': 'Winnie', 'score1': 80, 'score2': 70}), 
# ('s1', {'name': 'Totem', 'score1': 81, 'score2': 70})]
```

# sorted\(\): Class Example

```python
class Student:
    def __init__(self, name):
        self.name = name

    # 程式邏輯用
    def __repr__(self):
        return  self.name

students = [Student('Totoem'), Student('Albert'), Student('Winnie'), Student('Tom'), Student('Ben')]

s1 = sorted(students, key = lambda s: s.name, reverse = True)

print(s1) # [Winnie, Totoem, Tom, Ben, Albert]
```


## list.sort\(\) in-place 範例
* 這個功能僅限 list instance 使用。  

```python
nums = [44, 1, 33, 2, 3, 22, 4, 55, 5]

# list function，in-place，直接改原始資料集
x = nums.sort() # 沒回傳值
print(x)  # None
print(nums)  # [1, 2, 3, 4, 5, 22, 33, 44, 55]

```


## operator module 與 排序
* 看看就好，學太多種方式太為難自己，也容易出錯。  

```python 
import operator

students = [
    ("Totem", 80)
    , ("Albert", 80)
    , ("Winnie", 80)
    , ("Tom", 70)
    , ("Ben", 45)
]

# operator.itemgetter(1, 0) 先由 index=2 的屬性值排列, 若有出現相同則再依據 index=0 排序
s_op = sorted(students, key = operator.itemgetter(1, 0))
print(s_op) # [('Ben', 45), ('Tom', 70), ('Albert', 80), ('Totem', 80), ('Winnie', 80)]
```