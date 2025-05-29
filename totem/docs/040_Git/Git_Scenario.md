---
title: Git 使用情境
description: Git 使用情境
keywords: [Git] 
---

    基本上建議，  
    若是需要將已經 commit 內容刪除 (tag remove...)，  
    或是想將 branch 往回退 (reset)。  
    在做這類操作前可以先在最後的 commit 點先建立一個暫時的 branch，  
    先留個底，再做移除操作。避免計畫改變。    

    
## 常見情境整理

### ☞ 移除 remote 端不再使用的 branch
* 先切換到指定 branch
* 參考來源: [git-remote](http://git-scm.com/docs/git-remote)

```bash
* 先切換到指定 branch
    $git checkout <branch> 
    $git switch <branch>
    
    $git remote update --prune
```

### ☞ 移除已 merged 的 branch
* \<Pattern\> : beanch name 的 pattern
* 參考來源: [how-can-i-delete-all-git-branches-which-have-been-merged](http://stackoverflow.com/questions/6127328/how-can-i-delete-all-git-branches-which-have-been-merged)

```bash
*  先確認列出的是預計要刪除的 branch
    $git branch -r --merged|grep '<Pattern>'|
        sed 's/origin\///'
        
    git branch -r --merged|grep '<Pattern>'|
        sed 's/origin\///' | xargs -n 1 git push origin --delete    
```

### ☞ ignore 已進入管控的檔案
1. local 先移置不想被管控的檔案到專案外部
1. commit
1. 將檔案移回
1. 撰寫 .gitignore，指明那些不想版本管控的檔案


### ☞ 查詢已被刪除的 tags
1. 找出未被參考到的 commit sha-1 
1. git show 看內容

```baash
    $git fsck --unreachable | grep tag
    
    $git show commit-sha1
    
    for commit in `git fsck --unreachable | grep tag | awk '{ print $3 }'`; do
       git show $commit | grep -E "^(tag|Tagger)";
    done
```

### ☞ 回復不該送交的內容
* commit 復原並強制送置遠端
* 基本上是誤操作，是管理上的問題。這邊說明補救措施。
1. 在 local branch 退回到上 n 個 commit \(n 要替換成數字\)
1. 使用 --force 強制 remote branch 回到上 n 個 commit

```bash
    $git reset --hard HEAD~n
    
    $git push origin/<branchName> --force

```