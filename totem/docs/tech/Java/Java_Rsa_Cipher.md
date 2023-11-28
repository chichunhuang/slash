---
title: Java RSA 加解密
description: 以 Java RSA 進行資料加解密
keywords: [rsa,java,cipher,encrypt,decrypt]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# RSA 加密演算
> RSA 是非對稱式加密演算的一種，使用公鑰供傳送方加密資訊使用，接收方以私鑰解鎖以讀取明文內容。

## 非對稱演算法：
> 非對稱式加密就是加密和解密所使用的密鑰不同，一般稱 __公鑰__ 和 __私鑰__ 。
> 公私鑰必需配對使用，否則不能打開加密文件。
> 
> 訊息接收方先製備公鑰與私鑰。並將公鑰發送給資料來源方。
> 資料源頭則使用接收方的公鑰將訊息加密，然後將祕文回傳給接收方，接收方再依據自己規則結合公私鑰進行解密。
> 
> 所以，原則上是 __接收__ 訊息的人來 __決定演算__ 工具和 __派發金鑰__ 。
> 
> ex: RSA、DSA、ECC


# Java RSA 範例

```java
import java.security.InvalidKeyException;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Arrays;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

import util.EncryptDecryptException;

//非對稱式加密就是加密和解密所使用密鑰不同，一般稱 __公鑰__ 和 __私鑰__ 。
public class RsaCipher {

    public static void main(String[] args) {

        try {
            byte[] data = new byte[] { 1, 3, 5, 7, 9, 11, 13, 17, 31 };

            KeyPair keyPair = RsaCipher.generateRsaKeyPair(2048);
            byte[] publicKey = keyPair.getPublic().getEncoded();
            byte[] privateKey = keyPair.getPrivate().getEncoded();

            byte[] encrypted = RsaCipher.rasEncryptByPublicKey(data,
                    publicKey);

            byte[] descrypted = RsaCipher.rsaDecryptByPrivateKey(encrypted,
                    privateKey);

            System.out.println(Arrays.equals(data, descrypted));

        } catch (NoSuchAlgorithmException | EncryptDecryptException e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        }
    }

    public static KeyPair generateRsaKeyPair(int length)
            throws NoSuchAlgorithmException {
        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");
        keyGen.initialize(length);

        return keyGen.generateKeyPair();
    }

    private static Cipher createRsaPrivateKeyCipher(byte[] secretKey)
            throws NoSuchAlgorithmException, NoSuchPaddingException,
            InvalidKeyException, InvalidKeySpecException {
        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
        cipher.init(Cipher.DECRYPT_MODE, KeyFactory.getInstance("RSA")
                .generatePrivate(new PKCS8EncodedKeySpec(secretKey)));
        return cipher;
    }

    private static Cipher createRsaPublicKeyCipher(byte[] publicKey)
            throws NoSuchAlgorithmException, NoSuchPaddingException,
            InvalidKeyException, InvalidKeySpecException {
        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");
        cipher.init(Cipher.ENCRYPT_MODE, KeyFactory.getInstance("RSA")
                .generatePublic(new X509EncodedKeySpec(publicKey)));
        return cipher;
    }

    public static byte[] rasEncryptByPublicKey(byte[] data, byte[] publicKey)
            throws EncryptDecryptException {
        if (null == data || data.length == 0) return new byte[] {};

        try {
            Cipher cipher = createRsaPublicKeyCipher(publicKey);
            byte[] ret = cipher.doFinal(data);
            return ret;
        } catch (InvalidKeyException | NoSuchAlgorithmException
                | NoSuchPaddingException | InvalidKeySpecException
                | IllegalBlockSizeException | BadPaddingException e) {
            e.printStackTrace();
            throw new EncryptDecryptException("unexpected", e);
        }
    }

    public static byte[] rsaDecryptByPrivateKey(byte[] data, byte[] privateKey)
            throws EncryptDecryptException {
        if (null == data || data.length == 0) return new byte[] {};

        try {
            Cipher cipher = createRsaPrivateKeyCipher(privateKey);
            byte[] ret = cipher.doFinal(data);
            return ret;
        } catch (InvalidKeyException | NoSuchAlgorithmException
                | NoSuchPaddingException | InvalidKeySpecException
                | IllegalBlockSizeException | BadPaddingException e) {
            e.printStackTrace();
            throw new RuntimeException("unexpected", e);
        }
    }

    public static boolean isKeyPair(byte[] publicKey, byte[] secretKey) {
        String data = "fake-data";

        byte[] actual;

        try {
            actual = RsaCipher.rasEncryptByPublicKey(data.getBytes("utf8"),
                    publicKey);
            RsaCipher.rsaDecryptByPrivateKey(actual, secretKey);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

}
```