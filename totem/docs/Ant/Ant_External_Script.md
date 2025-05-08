---
title: Ant執行外部程式
description: Ant執行外部程式
keywords: [Ant,exec] 
---

## 以 Ant 執行外部程式

* executable: 是要執行的標的程式
* failonerror: 當遇到錯誤(外部程式執行後的傳回值非0)發生時，建置程序是否需停止
    * __預設值__ 是 <code>false</code> 即 __不會__ 因為外部程式錯誤而 __停止__
* arg: 是執行外部程式時所給的參數


```ant

<target name="build">
    <exec executable="python3" failonerror="true">
        <arg value="combinePatch.py"/>
        <arg value="cofigOfficialProps"/>
    </exec>
</target>
```
