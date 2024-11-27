---
title: init_project
description: init_project
keywords: [Docusaurus]
---
import { CodeBlock, dracula  } from "react-code-blocks";

* From Template

# github 
* 需要兩個 repo (vintage, vintage_code)
    * for docusaurus (github)
    * from code(bitbucket: 為了節省 github 佔用空間)
    
* vintage - docusaurus(github)
    * new repository 2024-05-20_094838.jpg
    * create local trunk folder ~\Git\GitExercise\github\vintage
    * colne repo 2024-05-20_095201.jpg
    * eclipse : 2024-05-20_095251.jpg / 2024-05-20_095326.jpg / 2024-05-20_095353.jpg

* vintage_code (bitbucket)   
    * todo 






# vintage - docusaurus
* 期待每次見新的 web，都能用最新的 node 版本，所以會先弄一個空的??
    * 額外安裝的 apis
        * npm install –save react-code-blocks
        * npm install --save papaparse
    * 更換 
        1. docusaurus.config.js
        2. sidebars.js
        3. \vintage\rust\src\pages\index.js
    * 自行開發的工具補上
        *  \vintage\rust\src\components\all    
    
    
* or copy from another repo
    * copy totem to vintage (有 .git 的資料夾下), and rename to rust
    * 移除 notes *.mds
    * 刪掉 build folder
    

# 試著 Run 
* 預期出現 totem's project



<hr/>
 
# 新專案設定
## docusaurus.config.js
## sidebars.js
## \vintage\rust\src\pages\index.js




# 關於















<hr/>







# docusaurus.config.js
* src\pages\index.js 是主頁的入口
* remove : algolia: Public API key

# package.json
* name => burny
* version => 0.0.1
* deploy => 裡面有 template 的 Git User_Account

# package-lock.json
* 整個移除或修改相對應位置