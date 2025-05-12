---
title: Java SHA 雜湊
description: 以 Java SHA 進行資料雜湊
keywords: [sha,java,cipher,encrypt,decrypt]
slug: Java-SHA-digester
authors: [insect]
tags: [sha, cipher]
---

# Java SHA 演算法實作範例
> SHA 並不算是異種加解密技術，僅能稱為是一種雜湊計算。
> 將指定資料轉為不可逆的密文，與 MD5 相似。

## 雜湊演算 (Hash)
> 又稱為 __散列算法__ ,或 __哈希函數__ 。
> 雜湊演算也能將資料轉為密文，但是無法將密文轉回明文。
> 所以，雜湊演算通常只是用來驗證資料傳遞過程是否遺漏封包。也就是驗證資料完整性(Integrity)時使用。
>
> ex: MD5、SHA1、HMAC


* ShaDigester.java

```java
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;


// SHA: 雜湊演算, 單向將資料轉密文。驗證資料完整性(Integrity)時使用。 
public class ShaDigester {
    
    private static final String DIGEST_ALGORITHM_512 = "sha-512";

    private static final String DIGEST_ALGORITHM_256 = "sha-256";
    
    
    public static String sha512Digest(String message, String salt)
            throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance(DIGEST_ALGORITHM_512);
        md.update(String.format("%s%s", message, salt).getBytes());

        StringBuffer ret = new StringBuffer();
        for (byte b : md.digest()) {
            ret.append(String.format("%02x", b));
        }

        return ret.toString();
    }
    
    public static String sha256Digest(String message, String salt)
            throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance(DIGEST_ALGORITHM_256);
        md.update(String.format("%s%s", message, salt).getBytes());
        
        StringBuffer ret = new StringBuffer();
        for (byte b : md.digest()) {
            ret.append(String.format("%02x", b));
        }
        
        return ret.toString();
    }
}    
```