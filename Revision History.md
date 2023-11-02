
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
    





