---
title: KeyPairGenerator 公私鑰
description: Java KeyPairGenerator 基本使用方式
keywords: [java,cipher,KeyPairGenerator]
---

## KeyPairGenerator API 簡介

```java
import java.security.KeyPairGenerator;

...

KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
 
//初始化,設定長度為1024
keyGen.initialize(1024);
 
//產生key pair
KeyPair key = keyGen.generateKeyPair();
 
//產生ciper
Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
 
//準備以公鑰進行加密
cipher.init(Cipher.ENCRYPT_MODE, key.getPublic());
 
//取得以公鑰加密後的ciphertext
byte[] cipherText = cipher.doFinal("測試123".getBytes());
System.out.println("Finish encryption:");
 
//準備以私鑰進行解密
cipher.init(Cipher.DECRYPT_MODE,key.getPrivate());
 
//取得以私鑰解密後的plaintext
byte[] newPlainText=cipher.doFinal(cipherText);
System.out.println(new String(newPlainText,"UTF8"));
 
//準備以私鑰進行加密
cipher.init(Cipher.ENCRYPT_MODE, key.getPrivate());
cipherText = cipher.doFinal("測試123".getBytes());
System.out.println("Finish encryption:");
 
//準備以公鑰進行解密
cipher.init(Cipher.DECRYPT_MODE,key.getPublic());
newPlainText=cipher.doFinal(cipherText);
System.out.println(new String(newPlainText,"UTF8"));

```


## KeyPairGenerator 範例

```
import java.security.InvalidKeyException;
import java.security.Key;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.PublicKey;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.NoSuchPaddingException;

public class TestCipher {

    public static void main(String[] args) throws Exception {
//      doDigest();
//      doPrivacyKeyEncryption();
        doPublicKeyEncryption();
    }

    public static void doPublicKeyEncryption() throws Exception {
        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
        keyGen.initialize(2048);
        KeyPair key = keyGen.generateKeyPair();

        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");

        PublicKey pk = key.getPublic();
        System.out.println(convertKeyBytes(pk.getEncoded()));;
        cipher.init(Cipher.ENCRYPT_MODE, pk);
        byte[] cipherText = cipher.doFinal("中文測試許功蓋123".getBytes());
        System.out.println("以公鑰加密完成.");
        
        cipher.init(Cipher.DECRYPT_MODE,key.getPrivate());
        byte[] newPlainText=cipher.doFinal(cipherText);
        System.out.printf("以私鑰解密:%s\n", new String(newPlainText,"UTF8"));
        
        cipher.init(Cipher.ENCRYPT_MODE, key.getPrivate());
        cipherText = cipher.doFinal("中文測試許功蓋123".getBytes());
        System.out.println("以私鑰加密完成.");
        
        cipher.init(Cipher.DECRYPT_MODE,pk);
        newPlainText=cipher.doFinal(cipherText);
        System.out.printf("以公鑰解密:%s\n", new String(newPlainText,"UTF8"));
    }

    public static void doPrivacyKeyEncryption() throws Exception {
        System.out.println("\nStart generate AES key");
        Key key = createKey("AES", 128);

        Cipher cipher = createCipher(key, Cipher.ENCRYPT_MODE,
                "AES/ECB/PKCS5Padding");
        cipher.init(Cipher.ENCRYPT_MODE, key);

        byte[] cipherText = cipher.doFinal("測試123".getBytes());

        System.out.println("Finish encryption:");
        System.out.println(new String(cipherText, "UTF8"));

        cipher.init(Cipher.DECRYPT_MODE, key);
        byte[] newPlainText = cipher.doFinal(cipherText);

        System.out.println("Finish decryption:");
        System.out.println(new String(newPlainText, "UTF8"));
    }

    private static Cipher createCipher(Key key, int cipherMode,
            String cipherType) throws NoSuchAlgorithmException,
            NoSuchPaddingException, InvalidKeyException {
        Cipher cipher = Cipher.getInstance(cipherType);
        return cipher;
    }

    private static Key createKey(String keyGenType, int keyLength)
            throws NoSuchAlgorithmException {
        KeyGenerator keyGen = KeyGenerator.getInstance(keyGenType);
        keyGen.init(keyLength);
        Key key = keyGen.generateKey();
        return key;
    }

    public static void doDigest() throws Exception {
        MessageDigest md = MessageDigest.getInstance("sha-512");
        System.out.println(md.getProvider().getInfo());
        md.update("12345".getBytes());
        byte[] bytes = md.digest();
        System.out.println(bytes);
        String strBuf = convertKeyBytes(bytes);
        
        System.out.println(strBuf);
        System.out.println(strBuf.length());
    }

    private static String convertKeyBytes(byte[] bytes) {
        StringBuffer strBuf = new StringBuffer();
        
        for(byte b : bytes) {
            strBuf.append(String.format("%02x", b));
        }
        return strBuf.toString();
    }
}

```

## 除錯

### BadPaddingException 
* 可能發生原因: Public key和secret key不是一起產生出來(不屬於同一個key pair), 當用於加解密時會出現 BadPaddingException

```
javax.crypto.BadPaddingException: Data must start with zero
```