---
title: HTML 關閉自動完成
description: HTML autocomplete 相關技巧
keywords: [HTML,autocomplete]
---

    依據 ISMS ISO27001  
    基本上表單不允許紀錄與儲存曾經輸入過的資料  
    這邊列出常見的處理方式
    
    
## 在 form 上處理
* 在 form 標籤加入 autocomplete="off"
* 適用於 Chrome

```
    <form autocomplete="off"> 
    ...
    </form>
```

## 在 input 上處理
* 在 input 標籤加入 autocomplete="off"
* 適用於 Chrome

```
     <input 
        type="password" 
        size="30"  
        accesskey="P" 
        autocomplete="off" />
```

## Firefox 特例情境

* Firefox的表單管理員自動填寫的規則是:   
    如果在表單裡找到1~3個 password 型別欄位( <span style={{color: '#0044FF'}}> __多於3個則不符合自動填入的條件__ </span> )，   
    而且表單只在這個 domain 記錄過一個填寫記錄，  
    那麼 Firefox 就會自動在這裡網頁的第一個 password 型別的欄位填入資料，  
    然後從第一個 password 欄位往上找，  
    在第一個找到的 text 欄位填入登入者名稱。  
    依據這個個原則，  
    部分情境會造成資料 <span style={{color: '#0044FF'}}> __填入錯誤的格子中__ </span>   
    或是雖然設定 autocomplete 為 off 但依舊被填入資料。
* 處理方式 : 使表單中的 <span style={{color: '#0044FF'}}> __password 欄位多於3個__ </span> ，讓表單管理員略過自動填入    

```
    <!-- 在表單裡塞入多餘 至少三個以上 -->
    <input type="password" style="display:none;"/>
```
    