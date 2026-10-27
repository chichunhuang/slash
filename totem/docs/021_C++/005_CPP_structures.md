---
title: C++ 內建資料結構
description: C++ 內建資料結構
keywords: [C++ structures]
---

## 內建結構
* vector
* list
* stack
* queue
* deque
* set
* map
* iterator
* algorithm



## Arrays
* 需先說明 size
 
```
    string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
    cout << cars[0];
    cars[0] = "Opel";
    
```

## Vector
* \#include \<vector\>

```
    vector<string> cars;
    
    vector<string> cars = {"Volvo", "BMW", "Ford", "Mazda"};
    // Print vector elements
    for (string car : cars) {
      cout << car << "\n";
    }

    // front: Get the first element
    cout << cars.front();

    // back: Get the last element
    cout << cars.back();

    // Get the first element
    cout << cars[0];  // Outputs Volvo
    cout << cars.at(0);

    cout << endl;

    cars[0] = "Opel";
    cars.at(0) = "Opel";
    cout << cars[0];

     cout << endl;
    // add at the [end] of the vector
    cars.push_back("Tesla");

    // remove from the [end] of the vector
    cars.pop_back();

    // size
    if(cars.empty()){
        cout << "Empty " <<  cars.size();
    }else{
        cout << "Not Empty " <<  cars.size();
    }
```

## Iterator
* iterator 用於走訪資料結構\(vector, list, set, deque, map\)，逐一取出結構中元素 __指標__ 。
* iterator 屬於指定資料結構實例的成員。
* :: 範圍解析運算子 Scope Resolution Operator
    * 到特定的範圍下，尋找特定的成員或類型定義

__範例1 list iterator__

```
#include <iostream>
#include <list> 
using namespace std;

int main() {
  list<string> cars = {"Volvo", "BMW", "Ford", "Mazda", "Toyota"};

  // 使用 SRO 運算子，取出 list 內的 iterator
  // A 此處進行走訪 型別 宣告
  list<string>::iterator it;

  // B iterator 走訪的是 pointer，取值時要再轉一般變數
  for (it = cars.begin(); it != cars.end(); it++) {
    cout << *it << "\n";
  }
 
  // 上式 (A+B)等同於，明確宣告走訪型別 list<string>::iterator
  for (list<string>::iterator it = cars.begin(); it != cars.end(); it++) {
    cout << *it << "\n";
  }

  // (A+B) 可直接聲明 auto, 由 compiler 自動參照原本型別
  for (auto it = cars.begin(); it != cars.end(); it++) {
    cout << *it << "\n";
  }

  return 0;
}
```

__範例2 vector iterator__

```
#include <iostream>
#include <vector>
using namespace std;

int main() {
  // Create a vector called cars that will store strings
  vector<string> cars = {"Volvo", "BMW", "Ford", "Mazda"};

  // Create a vector iterator called it
  vector<string>::iterator it;
  
  // vector 的專屬怪招。專屬用法
  it = cars.begin() + 2;

  // Print the second element in the vector
  cout << *it;
  
  return 0;
}
```

__iterator through map__

```
    map<string, int> people = { {"John", 32}, {"Adele", 45}, {"Bo", 29} };
    
    // Loop through the map with an iterator
    for (auto it = people.begin(); it != people.end(); ++it) {
      cout << it->first << " is: " << it->second << "\n";
    }
    for ( map<string, int>::iterator it = people.begin(); it != people.end(); ++it) {
      cout << it->first << " is: " << it->second << "\n";
    }
```




## Algorithms
* 在 Java 中，Collection 具有排序等父類方法。部分功能則交由 Math 套件處理。在 C++ 中排序等方法經由 Algorithms 來幫忙處理。
* \#include \<algorithm\>

__sort__
* 使用型別原生的排序規則
* 可自訂由主集合的特定位置元素為起迄，進行排序。
* 注意: 起迄需使用相同 iterator

```
    #include <iostream>
    #include <vector>
    #include <algorithm>
    using namespace std;
    
    int main() {
      vector<int> numbers = {1, 7, 3, 5, 9, 2};
    
      // 反序()，大>小
      sort(numbers.rbegin(), numbers.rend());
      // 正序，
      sort(numbers.begin(), numbers.end());
      // ERROR!! 不同 type iterators, ERROR reverse_iterator vs iterator 同時使用
      // sort(numbers.rbegin(), numbers.begin());
    
      for (int num : numbers) {
        cout << num << "\n";
      }
    
      return 0;
    }
```


## Template
* \#include \<tmp\>

```
```