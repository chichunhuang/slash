---
title: Java 漢字辨別
description: Java is Han String
keywords: [Java,Han,String]
---

## Java 判斷是否只為漢字
* regex: 
    * A: 常用中文漢字 
        * \u9fa5 舊式範例，列到 Big5 編碼中最後一個繁體中文常用字
        * \u9fff 新式範例的常見漢字，含繁體簡體，僅列到 CJK Ideographs \(中日韓統一漢字)區段的結尾字元
        * 仍有部分古字、生僻字未列入
    * B: 所有 Unicode 漢字，包含 Extension

__regex__

```javascript
    String regex_A = "[\\u4e00-\\u9fff]+";

    String regex_B = "[\\p{IsHan}]+";
```

__example__

* 此範例匹配所有 Unicode 定義中的 <span style={{color: '#0044FF'}}> __漢字__ </span>，包含 <span style={{color: '#0044FF'}}> __簡體、繁體__ </span> 、甚至一些偏僻字

```javascript
    public static void main(String[] args) {
        String input = "許功蓋";

        // String regex = "[\\u4e00-\\u9fff]+";
        String regex = "[\\p{IsHan}]+";
        Pattern pattern = Pattern.compile(regex);
        System.out.println(input );        
        System.out.println(" is Han? " + pattern.matcher(input).matches());        
        
    }
```

## Java Encoding 與 Unicode
* Java 所有字串在記憶體中都是使用 UTF-16 編碼儲存
* 無論輸入來源的檔案或資料是 UTF-8、ISO-8859-1、Big5 還是其他編碼，只要它被正確解碼為 Java 的 String，那麼你就可以用上述方法檢查中文字元
    * 反之，來源內容以錯誤的 Encoding 判別，因為錯誤的解碼方式，那無論如何都會得到錯誤結果
    
## 繁體與檢體中文判別
* 繁體中文與簡體中文在 Unicode 中是共用同一組漢字碼位\(code point, code position)，所以無法直接區分。  
    * 若搭配字集，則可約略比對出常用部分。\(無法百分之百成功判別)
    * 需指定繁體字集，排除指定簡體字集內容來達到不完美效果。

```
    String regex = "[\\u4e00-\\u9fff&&[^簡體排除區間]]+"
```
    
## 其他
```
 //全形標點 。、《》
 [\u3000-\u303F\uFF01-\uFF60]+

 //全形英數與符號(全形字元) ！？
 [\uFF01-\uFF60\uFFE0-\uFFE6\uFF10-\uFF5A\uFF21-\uFF3A\uFF41-\uFF5A]+
``` 