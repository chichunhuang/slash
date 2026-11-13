---
title: Scope
description: C++ Scope
keywords: [C++,scope]
---

## Scope
* C++ Scope 分 6 級
    * Global scope
    * Namespace scope
    * Local scope
    * Class scope
    * Statement scope
    * Function scope
    

## 特殊情境
* 不知為何 C++ 喜歡給自己找麻煩

### 遮蔽類別與再顯示
* C++ 允許在相同 Scope 內宣告與 class 同名的 函式、物件、變數或 enumerator，以藉此隱藏 class 的存在。
* 想再次使用在遮蔽的 class 可採用 __class__ 關鍵字以將類別 \(class\)初始化。
* 不要使用同名變數即可避免

```C
    #include <iostream>
    using namespace std;
    
    // Declare class Account at global scope.
    class Account{
        public:
            Account( double InitialBalance ){ 
                balance = InitialBalance; 
            }
            double GetBalance(){ 
                return balance; 
            }
            
        private:
            double balance;
    };
    
    // 使用同名變數遮蔽 class 存在
    double Account = 15.37; 
    
    int main(){
        // 1st 'Account' class 帶出被遮蔽的 class
        // 2nd 'Account' 指向覆蓋者 double 變數 
        class Account Checking( Account ); 
    
        cout << "Opening account with a balance of: "
             << Checking.GetBalance() << "\n";
    }
    //Output: Opening account with a balance of: 15.37
```


### 遮蔽全域變數與再使用
* 被同名 local var 遮蔽的全域變數可藉由 scope-resolution operator 再次取出
* local scope 不要使用同名變數即可避免

```C
#include <iostream>

int i = 7;   // global variable
using namespace std;

int main( int argc, char *argv[] ) {
   int i = 5;   // 故意生一個同名 global scope
   cout << "Block-scoped i has the value: " << i << "\n";
   cout << "Global-scoped i has the value: " << ::i << "\n"; // 使用 scope-resolution operator 跨過遮蔽
}
```

## 範圍解析運算元 \(::\)
* 範圍解析運算元 scope-resolution operator
