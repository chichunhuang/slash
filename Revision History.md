
# Initial Project at 20231026
* create repo
* copy existed to repo
* basic settings

# Change to IDE Eclipse
* I used SourceTree Before, for some reasons I changed to familiary IDE. 
* test push from Eclipse to GitGub : encountered authorized-failed problems.
* Reference: [Pushing from Eclipse to my GitHub repository via HTTPS stopped working](https://stackoverflow.com/questions/68790276/pushing-from-eclipse-to-my-github-repository-via-https-stopped-working-git-rec)
* [Since August 13, 2021, GitHub does not support authentication via HTTPS with your GitHub account password for security reasons anymore. ](https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/)
* How to resolve this problem: pick one option. 
    * Personal access tokens
    * SSH with an SSH key
    
## Personal access tokens
* a GitHub specific Personal access tokens as password instead of your previously used GitHub account password
* https://i.stack.imgur.com/NSDoK.jpg
![GitHub Personal access token](https://i.stack.imgur.com/NSDoK.jpg "NSDoK.jpg") 
* Steps
    * at upper right, click Personal Icon > 
    * Settings > Developer settings (lower down) > Personal Access Tokens > Tokens (class)
    * Generate new token
    * Set Note
    * Set Expired Date
    * Select scopes > check repo (set privileges of read, write )
    * Generate token
    * copy token 
    * Eclipse: use as password
    

# Prepare for deploy: 20250213


# 版本升級
* 移除 react-code-blocks 一大堆版本衝突
* 新版 docusaurus, 似乎預設採較嚴格的 md 格式檢查, 先前疑惑為何部份情形可以不做 escape, 現在變強制檢查.
 

_from_

  "dependencies": {
    "@docusaurus/core": "2.4.1",
    "@docusaurus/preset-classic": "2.4.1",
    "@mdx-js/react": "1.6.22",
    "clsx": "1.2.1",
    "prism-react-renderer": "1.3.5",
    "react": "17.0.2",
    "react-code-blocks": "0.1.4",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "2.4.1"
  },

_to_
<pre>
  "dependencies": {
    "@docusaurus/core": "^3.7.0",
    "@docusaurus/preset-classic": "^3.7.0",
    "@mdx-js/react": "^3.0.0",
    "bootstrap": "^5.3.6",
    "clsx": "^2.0.0",
    "prism-react-renderer": "^2.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "^3.7.0",
    "@docusaurus/types": "3.7.0"
  },
</pre>
