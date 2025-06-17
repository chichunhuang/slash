---
title: Hibernate 一級二級快取
description: Hibernate Session Factory Cache
keywords: [Hibernate,Cache]
---

> 快取 cache 指的是在記憶體中暫存的資料副本  
> Hibernate 架構下的快取分為兩類，供查詢時快速查找，簡化連線或遠端呼叫時的資源耗費    
> Session Level Cache 與 SessionFactory Level Cache  
> Session Level Cache 僅作用在同一個 Hibernate Session 中  
> SessionFactory Level Cache 則可跨 Hibernate Sessions 使用   

## Session Level Cache
* 這類快取與 Session 存活期相同，Session 建立時快取建立，Session 銷毀時快取空間一併歸還。
* Session 中會維護一個類似 Map 的結構，紀錄資料的 PK 與內容。方便 Hibernate 快速查找指定資料。
    
## SessionFactory Level Cache
* SessionFactory Cache 又稱為二級快取，快取內容由相同 SessionFactory 所建立的 Sessions 共享。
    * 所以，若 Session 隸屬於不同 SessionFactory 則無法分享，各自管理。
    * Hibernate 預設採用 EHCache，將設定檔放在 classpath 下即可。  

__EHCache xml 設定範例__

```xml
<ehcache>

    <!-- Sets the path to the directory where cache .data files are created.
        
        If the path is a Java System Property it is replaced by
        its value in the running VM.
        
        The following properties are translated:
        user.home - User's home directory
        user.dir - User's current working directory
        java.io.tmpdir - Default temp file path -->
    <diskStore path="java.io.tmpdir/projectName" />


    <!--Default Cache configuration. These will applied to caches programmatically created through
        the CacheManager.
        
        The following attributes are required for defaultCache:
        
        maxInMemory       - Sets the maximum number of objects that will be created in memory
        eternal           - Sets whether elements are eternal. If eternal,  timeouts are ignored and the element
        is never expired.
        timeToIdleSeconds - Sets the time to idle for an element before it expires. Is only used
        if the element is not eternal. Idle time is now - last accessed time
        timeToLiveSeconds - Sets the time to live for an element before it expires. Is only used
        if the element is not eternal. TTL is now - creation time
        overflowToDisk    - Sets whether elements can overflow to disk when the in-memory cache
        has reached the maxInMemory limit.
        
    -->
    <defaultCache
        maxElementsInMemory="10000"
        eternal="false"
        timeToIdleSeconds="120"
        timeToLiveSeconds="120"
        overflowToDisk="true" />

</ehcache>

```
    
## 手動提前歸還 Cache 占用記憶體
* 可以手動提前歸還快取中的資料，這邊通常是用在一次載入大量資料之後，cache 膨脹過快，造成 server 記憶體有不足風險時使用。
    * 呼叫 clear 方法
    * 呼叫 evict 方法
    * Session Level Cache 則可直接呼叫 session 的 close 方法
* 需自行考量，清除快取與重新載入於效能上的權衡。程式設計時也宜搭配 Hibernate 快取機制作相對應調整。