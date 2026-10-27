---
title: 為 APCS 準備 C++ 開發環境
description: 為 APCS 準備 C++ 開發環境
keywords: [C++]
---

> 如題為小孩準備 C++ 開發環境已因應 APCS 練習使用

# 基本知識
* Bjarne Stroustrup
* 物件導向 object oriented programming
* 工具:
    * 臨時念驗證用這個線上編譯器:  https://www.onlinegdb.com/online_c++_compiler
    * 考場提供的需孰悉的工具: Code:blocks 
    
# Code:blocks 安裝
1. 配合考場與同學討論方便選擇使用 Code:blocks 加 MinGW 安裝包
1. [Code:blocks 官方下載](https://www.codeblocks.org/downloads/binaries/)
1. Win11 下選擇 codeblocks-25.03mingw-setup.exe
    * 同時打包安裝開源社群的 MinGW c++ 編譯器

   
# Code:blocks 必要快速鍵
* F9 : 直接編譯執行程式碼
* Ctrl + Wheel : 字型大小調整 
* Ctrl + I : 查詢+高亮
* Ctrl + E : incremental finding
* Ctrl + shift+ E : incremental finding
* 

# Encoding
* 一般 OS 通用 UTF-8: Settings > Editor > Encoding settings > Use encoding when open files > UTF-8 
* Windows 下 Console 使用 BIG-5 所以設定改輸出 BIG-5: Settings > Compiler > Compiler Settings > Other compiler options > -fexec-charset=BIG-5
* i18n 介面: Settings > Environment > View > Internationalization > 沒幾種語言可選

# Code:blocks with Git
* Code:blocks 相較 VS code/Visual Studio/Eclipse 等算是個陽春的 IDE，為與 Git 深度整合。
* 那就安裝: GitHub Desktop 或 Sourcetree

# C++ operators
* & bitwise and: 對應的兩個位元皆為 1 時，結果才為 1，否則為 0。
* | bitwise or: 對應的兩個位元其一為 1 時，結果為 1，否則為 0。
* ^ __bitwise xor__ \<注意\>: 對應的兩個位元值不同時為 1，否則為 0。 
* && logical and
* || logical or
* ! logical not

# 注意事項
* 大於等於小於: 有時考注意力，連續 if else 判斷進行數值比大小，中間其中一個少 等於 之類
* C++ 次方計算 operator 不是 ^ \(bitwise xor)，需 #include \<cmath\> 使用 pow\(\) 方法
* true\(1\), false\(0\), 可以被哪去做計算


# C++ Reference 與 Pointer

* 定義時
    * 變數前加 & 為別名變數
    * 變數前加 * 為指標變數
* 取值時
    * 變數前加 & 變指標
    * 指標前加 * 變變數

```

//宣告
string food = "Pizza";  // 一般變數宣告
string & alias = food;  //別名變數宣告
string * ptr = & food;  //指標變數宣告
string same =  * ptr;    //指標取值(右式:*指標變數轉變數)

//取值
cout <<  food << "\n";     //變數取值
cout <<  alias << "\n";      //別名變數取值
cout <<  * ptr << "\n";      //指標取值 (*指標轉變數)

//取址
cout <<  & food << "\n";  //變數取址(&變數轉指標)
cout <<  ptr << "\n";         //指標取址
```
    
    

|   | 變數建立 | 賦值 | 取值 | 取址 | 
|---|--------|-----|-----| ---- |
| 一般變數 | type name | string name = "Totem" | name | |
| 別名變數\(Ref\) & | type &alias | string &alias = name | alias | |
| 指標變數 | type \*pointer | pointer=&name | 取值 \*pointer | pointer \<br/\> |
* reference 指別名變數
* & 用在等號左側: 宣告建立別名變數 \(相同 pointer\)
* & 用在等號右側: 經由一般變數取出其記憶體位置
* \* 用在等號左側: 宣告建立指標變數
* \* 用在等號右側: 取出指標指向記憶體所儲存資料內容

# Rerfernce
```
string food = "Pizza";  // food variable
string & meal = food;    // reference to food
// & 一般變數建立, 等號左側
// 兩者為別名關係 
// > 指向同一實體資料(Data 資料)
// > 更改內容，同時生效
// Ch ~ Article 間關係
```

# Pointer
* \* 左側
    * 新建指標變數:由一般變數\(已有資料\)
    * 新建指標變數:先取記憶體，\(尚未有資料\)

* 右側
    * 由變數取指標: &variable 
    * 由指標取變數值: *ptr 
    * 由指標呼叫成員函數,括號與星: \(*ptr\).function() 
    * 由指標呼叫成員函數,箭頭: ptr -> function() 

```
// Method A
string food = "Pizza";  // A food variable of type string

// 由變數取指標: &variable 
string * ptr = &food;   // A pointer variable, with the name ptr, that stores the address of food
// & 取值 Memory Address, 等號右側
// * 指標變數建立, 等號左側 > 因為指向記憶體位址 (Memory Address 頁碼)

// Method B
int * ptr = new int;

*ptr = 35; 

// 由指標取變數值: *variable 
cout << *ptr;
```


## friend 授權
* 在 friend 的 Scope 之內 main class 的 object 可以存取 main object 的 private members。
* 與 Java 比較，C++ 在建立 instance 時不須使用 new。

__friend function__

```
class Rectangle {
private:
    double width = 10;
    double height = 5;
    
    // declare friend function
    friend double area(const Rectangle& r);
};

double area(const Rectangle& r) {
    //可存取 Rectangle Object 的 private members
    return r.width * r.height;
}
```

__friend class__

```
    class Engine {
    private:
        int temperature = 90;
        
         // Car 是 Engine 的 friend
        friend class Car;
    };
    
    class Car {
    public:
        void checkEngine(const Engine& engine) {
            // Car 是 Engine 的 friend，
            // 因此可以讀取 Engine 的 private 成員。
            if (engine.temperature > 100) {
                // 執行相關處理
            }
        }
    };
```

## inheritance
* base class (parent)
* derived class (child)
* keyword symbol : 
* 逗號 Multiple Inheritance
    * Diamond ?? 

```
    // Base class
    class MyClass {
      public:
        void myFunction() {
          cout << "Some content in parent class." ;
        }
    };

    // Another base class
    class MyOtherClass {
      public:
        void myOtherFunction() {
          cout << "Some content in another class." ;
        }
    };
    
    // Derived class, Multiple, public
    class MyChildClass: public MyClass, public MyOtherClass {
    };
    
    int main() {
      MyChildClass myObj;
      myObj.myFunction();
      myObj.myOtherFunction();
      return 0;
    }
```

## Polymorphism and Virtual Functions
* C++ Polymorphism 下的特殊情境。當以 Parent 為 Type 時，呼叫 override method 時執行的是父或子類的實作。 
    * Parent Method 加 Virtual 時為虛，以子類顯性。
    * CP Java: Parent Methods 類似預設全加 virtual，Parent 是 Template。
    * 
* virtua key word 用在父類的成員上。
* A virtual function is a member function in the base class that can be overridden in derived classes.
* 與 Java 比較，C++ 在建立 instance 時不須使用 new。

__C++ 基本多型__
* 範例無 virtual，多型時 Parent 為顯性

```
    // Base class
    class Animal {
      public:
        void animalSound() {
          cout << "The animal makes a sound \n";
        }
    };
    
    // Derived class
    class Pig : public Animal {
      public:
        void animalSound() {
          cout << "The pig says: wee wee \n";
        }
    };
    
    // Derived class
    class Dog : public Animal {
      public:
        void animalSound() {
          cout << "The dog says: bow wow \n";
        }
    };
    
    int main() {
      Animal myAnimal;
      Pig myPig;
      Dog myDog;
    
      myAnimal.animalSound(); // makes a sound
      myPig.animalSound();    // wee
      myDog.animalSound();    // bow
      
      Animal* a;  
      Dog d;  
      a = &d;
      a->animalSound();  // makes a sound，以父類為顯性
      return 0;
    }
```

__C++ 多型: Virtual__
* Pointer, virtual + override
    * 注意關鍵字寫的位置
* Base 有 virtual，多型時 Parent 為隱性
* 多型情境下，使用父類別的原始 function implementation 

```
#include <iostream>
using namespace std;

class Animal {
  public:
    virtual void sound() {
      cout << "Animal sound\n";
    }
};

class Dog : public Animal {
  public:
    void sound() override { 
    // void sound() { 可隱含的的說明為 override
      cout << "Dog barks\n";
    }
};

int main() {
  Animal* a;   // Declare a pointer to the base class (Animal)
  Dog d;       // Create an object of the derived class (Dog)
  a = &d;      // Point the base class pointer to the Dog object
  
  a->sound();  // barks, base 有 virtual， 為隱性。
  (*a).sound();// Pointer 轉一般 variable 的另一種寫法。注意要括號。
  
  d.sound();   // barks 
  return 0;
}
```

## Function Template
* 類似 Java 的泛型 Generic

__Function Template__

```
// Syntax
    template <typename T>
    return_type function_name(T parameter) {
      // code
    } 

    template <typename T>
    T add(T a, T b) {
      return a + b;
    }
    
    int main() {
      cout << add<int>(5, 3) << "\n";
      cout << add<double>(2.5, 1.5) << "\n";
      return 0;
    }
```

* Template：指定函式使用的型別。
* 繼承：讓子類別可以轉換成父類別參考。
* 多型\(Polymorphism\)：讓程式依實際物件型別呼叫對應函式。
* C++20 支援 requires derived_from: 限制泛型可接受範圍

```
    #include <iostream>
    using namespace std;
    
    class Animal {
    public:
        // virtual -------------------------
        virtual void speak() {
            cout << "Animal sound" << endl;
        }
    
        virtual ~Animal() = default;
        // Destructor  -------------------------
    };
    
    class Dog : public Animal {
    public:
        // override -------------------------
        void speak() override {
            cout << "Woof!" << endl;
        }
    };
    
    class Cat : public Animal {
    public:
        void speak() override {
            cout << "Meow!" << endl;
        }
    };
    
    
    // T& -------------------------
    template <typename T> 
        requires derived_from<T, Animal>
    void makeSpeak(T& animal) {
        animal.speak();
    }
    
    int main() {
        Dog dog;
        Cat cat;
    
        makeSpeak<Animal>(dog); // Woof
        makeSpeak<Animal>(cat); // Meow
    
        return 0;
    }
```

__Class Template__

```
    template <typename T>
    class ClassName {
      // members and methods using T
    };
    
    template <typename T>
    class Box {
      public:
        T value;
        Box(T v) {
          value = v;
        }
        void show() {
          cout << "Value: " << value << "\n";
        }
    };
    
    int main() {
      Box<int> intBox(50);
      Box<string> strBox("Hello");
    
      intBox.show();
      strBox.show();
      return 0;
    }
```

