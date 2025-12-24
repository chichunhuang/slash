---
title: React 基礎介紹
description: React 基礎介紹
keywords: [javascript,React]
---

## React 中見的父元件與子元件
* 子元件: 通常指的是 Presentation Component，也就是一個字定義的 UI 單元。
* 父元件: 通常指的是子元件被註冊的地方。也就是 UI 元件被使用的外層元件。

## props: UI 元件中的唯一參數
* props 泛指 React UI Component 間所傳遞的參數。
    * 注意: React 元件函數只接受一個參數，即一個 props 物件。
* 以 Java 來比喻可想像成是 arguments，但仍有差異。
    * 在 React 的語法結構中，僅能 <span style={{color: '#FF1100'}}>接受唯一的一個參數</span> ，那就是 props。
    * 注意: 語法糖，使用時同常會將參數定義與解構同時寫在一起。

```javascript

    // { person, size } 指的是 props 被解構成兩部分的語法，
    // 所以大括號不可省
    function Avatar({ person, size }) {
    ....
    }
    
    // 原樣
    function Avatar(props) {
      let person = props.person;
      let size = props.size;
      // ...
    }
```
    
```javascript

function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Avatar({ person, size=10 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}
// example from: https://react.dev/
```

## props 傳遞 JXS component: 泛型容器物件
* React 語法中允許 Presentation Component 以 props 直接接收一個子元件 \(另一個 Presentation Sub-Component)。而不是單純的傳遞參數值，而後在 Component 中重新編寫 markup。

___容器定義方式___
* 範例中的 Card，基本上與一般 UI Component 相同。接收封裝子元件的 props。

___容器使用方式___
* 範例中的 Profile，Parent Markup 直接嵌套 Children Markup。

```javascript

// JSX Children Component, 後續範例中被傳遞的主角
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
```

__泛型容器__

```javascript
// Parent Component, 泛型容器物件
// props 中的內容可以是資訊也可以是 UI 物件
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}
```

__Markup 嵌套方式__

```javascript
// UI 元件嵌套範例
export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```