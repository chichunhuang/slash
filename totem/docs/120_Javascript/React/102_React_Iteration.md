---
title: React 集合與陣列渲染
description: React Components Iteration
keywords: [React,Iteration]
---

> 表格或清單等重複性結構渲染方式  
> 可以利用迴圈的方式，將集合或陣列內容依次產出 UI 元件。  
> 例如: 使用 JS Array 的 map, filter methods 為陣列走訪並轉型或篩選。  
> 結構上類似 DSL 與 Lambda 結合。  


## React 集合渲染
* 注意 JSX return 必須是一個封閉的單元
    * 實作 A : 
    * 實作 B : 

## Map: 迴圈與變型

```javascript
    const students = [
       { id: 0, name: 'May'  , age: 30 },
       { id: 1, name: 'John' , age: 25 },
       { id: 2, name: 'Ben'  , age: 33 },
       { id: 3, name: 'David', age: 37 }
    ];
    
    export default function testPage() {
      const listItems = students.map(person =>
        ( <li key={person.id}>{person.name}</li> )
      );
      return <ul>{listItems}</ul>;
    }
```

## Filter: 迴圈與選取
```javascript
    export default function testPage() {
      const listItems = 
          students
          .filter(person =>
             person.age > 30 
          )
          .map( (person) =>
            return { <li key={person.id}>{person.name}</li> }
          );
          
      return ( <ul>{listItems}</ul> );
    }
```

## 關於 Keys
* React Render 陣列並產生元件清單時，每一組陣列元件下的 items 都需要有各自獨立的 key。
    * Key 是 React 辨別 Item 所需要的標識。
    * Keys 須是 unique 且非動態建立，且若可以的話也應該避免用 Array Index。
    * Array 插入、移除或重排陣列順序時，item 因順序改動可能造成 Render 產生非預期畫面。

__Console__

```
    Warning: Each child in a list should have a unique “key” prop.
```

__Example__

```

```