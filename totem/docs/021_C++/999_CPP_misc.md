



## String to int

* stoi\(\): stands for  string_to_int
* stol\(\): stands for  string_to_long

```C

#include <iostream>
#include <string>

int main() {
    std::string str = "123456789";
    long num = std::stol(str);
    int num_int = std::stoi(str);
    
    std::cout << "Converted long: " << num << std::endl;
    return 0;
}


```

## num to string
* std::
    * to_string\(\)

```C
#include <iostream>
#include <string>

int main() {
    long num = 123456789L;
    std::string str = std::to_string(num);
    
    std::cout << str << std::endl; // 輸出: 123456789
    return 0;
}

```



```C
#include <iostream>
#include <sstream>
#include <string>

int main() {
    long long num = 9876543210LL;
    std::stringstream ss;
    ss << num;
    std::string str = ss.str();
    
    std::cout << str << std::endl; // 輸出: 9876543210
    return 0;
}

```

## String + String
* via +
* via append\(\)

```C
#include <iostream>
#include <string>

using namespace std;

int main() {
    string str1 = "Hello";
    string str2 = " World";
    string result = str1 + str2; // "Hello World"
    cout << result << endl;
    return 0;
}
```

```C
string str1 = "Hello";
string str2 = " World";
str1.append(str2); // str1 變成 "Hello World"

// 也可以只 append 部分字串或字元
str1.append("!", 1); 
```

## String 分割 
* substr\(\)

```
#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

const std::vector<std::string> split(const std::string& str, const std::string& pattern) {
    std::vector<std::string> result;
    std::string::size_type begin, end;

    end = str.find(pattern);
    begin = 0;

    while (end != std::string::npos) {
        if (end - begin != 0) {
            result.push_back(str.substr(begin, end-begin)); 
        }    
        begin = end + pattern.size();
        end = str.find(pattern, begin);
    }

    if (begin != str.length()) {
        result.push_back(str.substr(begin));
    }
    return result;        
}

int main() {
    std::string str = " This is a c++ string";
    std::string delimiter = " ";

    std::vector<std::string> ret = split(str, delimiter);

    for (auto& s : ret) {
        cout << s << "\n";
    }
    return 0;
}


This
is
a
c++
string

```