---
title:  JavaScript 命名慣例 
description:  JavaScript Naming Conventions
keywords: [javascript,Naming]
---

不常開發 Javascript 相關程式，經常亂命名，  
雖不影響功能，但...見人該說人話   
將慣例放這邊用來提醒自己  
看看下方 Javascript 人的用法，有夠囉嗦!  

## 變數、函式：camelCase

```javascript
    let userName = "Totem";
    function fetchUserData() {}
    const isUserLoggedIn = true;
```

## 類別 Class 與建構函式：PascalCase

```javascript
    class UserProfile {}
    class BlogPost {}
```

## 檔案 與 模組名稱： kebab-case

```javascript
    user-profile.js
    blog-post-service.js
```

## 常數 Constant：ALL_CAPS_SNAKE_CASE

```javascript
    const MAX_USERS = 100;
    const PI = 3.14;
    const API_BASE_URL = "https://example.com";
```

## NPM 套件名稱 與 plugin 名稱：kebab-case

```javascript
    docusaurus-plugin-image-optimizer
    eslint-config-prettier
    my-awesome-lib
```


## 命名範例對照表
| 用途       | 範例                | 命名風格         |
| -------- | ----------------- | ------------ |
| 變數/函式    | getUserInfo()   | camelCase  |
| 類別       | UserProfile     | PascalCase |
| 常數       | MAX_LIMIT       | ALL_CAPS   |
| 檔案名      | user-profile.js | kebab-case |
| Plugin 名 | my-plugin       | kebab-case |
| React 元件 | UserCard.jsx    | PascalCase |
