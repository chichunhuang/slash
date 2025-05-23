---
title: Git Log 指令
description: ISMS 比較版本差異
keywords: [Git,ISMS] 
---

    因 ISMS 法遵問題，需提供版本差異  
    這邊慣例是每次 commit 時的 log 需附加 issue/task 號碼與其他訊息  
    由 issue/task no 可連接到異動內容與相關流程申請與核准文件紀錄  
    所以，不同 tag 間的差異變成釋出時的附加文件  
    用來做版本插的附加資料之一  
    下面是依據 tag 差異，匯出中間所有的程式碼異動紀錄的指令  
    
## 來源參考
* [Git 查看 commit history](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2)

## Git Bash
* open git bash 
* connect to remote or local repository
    * local : cd to local project

___syntax___

```    
    $ git log <branch-name> --pretty=format:"desc: %s, %cd, author: %an" tagA..tagB> output.log
```

___example___

```bash
    切換 branch 至 master
    $ git checkout master
     
    $ git log master --pretty=format:"desc: %s, %cd, author: %an" tagA..tagB > Diff_TagA_TagB_git.log
```

## Format Pattern

|  | 說明 |
| ---- | ---- |
| %s   | commit message|
| %cd  | commit date   |
| %an  | author        |
| tagA..tagB | from tag tagA to tag tagB |



## 檢查指定路徑下資料夾內容異動
* 下面範例可作為 SBOM 附加檔用

```
    -- 指定 path 查詢 commit histories
    -- 範例: 確認 js 資料夾異動情形
    $ git log --after="yyyy-mm-dd" --pretty=format:"desc: %s, %cd, author: %an"  'web/js/*' > project_js_git_log_yyyymmdd.log
     
    -- 範例: 確認 java lib pom.xml 異動情形
    $ git log -- 'pom.xml' > project_pom_git_log_yyyymmdd.log
```