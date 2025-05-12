---
title: Title for search engines; can be different from the actual heading
description: A short description of this page
keywords: [keywords, describing, the main topics]
---
image: a thumbnail image to be shown in social media cards


## 【Python scripts】
[https://jira.abc.edf.org/confluence/pages/viewpage.action?spaceKey=~teddyyen&title=Python+scripts](https://jira.abc.edf.org/confluence/pages/viewpage.action?spaceKey=~teddyyen&title=Python+scripts)


## loc / iloc 在 loop 效率太差, 可改用 at/iat
* 參考: [Don’t use loc/iloc with Loops In Python, Instead, Use This!](https://medium.com/codex/dont-use-loc-iloc-with-loops-in-python-instead-use-this-f9243289dde7)

```
<code>
import time
 
start = time.time()
 
# Iterating through the DataFrame df
for index, row in df.iterrows():
        df.loc[index,'c'] = row.a + row.b
end = time.time()
print(end - start)
 
###################
import time
 
start = time.time()
 
# Iterating through DataFrame
for index, row in df.iterrows():
    df.at[index,'c'] = row.a + row.b
end = time.time()
print(end - start)

</code>

```