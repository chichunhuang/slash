---
title: Java AES 加解密
description: 以 Java AES 進行資料加解密
keywords: [aes,java,cipher,encrypt,decrypt]
---


* 有時會需要將資料進行可回復的加密。
* 例如: ISO 27001 DLP(data leakage prevention)，一般在驗證時最低要求為密碼原則、硬碟資料與 DB 資料加密。
* 此時若牽涉到敏感性資料，下列方法也許有用。

> DBA 知道加密時的 half-salt。 DBA 只知道一半的 salt 且有機會接觸密文。無法完整解密。
> 工程師知道加密演算法加另一半的 salt 以及 salt 合併方法。但是無接觸資料。
> App 使用者僅能在系統上使用資料。


# AES 進階加密標準

* __對稱加密演算法__ :AES算法使用 <span style={{color: '#0044FF'}}>[相同]</span> 的密鑰來對資料進行 <span style={{color: '#0044FF'}}>[加密]</span> 和 <span style={{color: '#0044FF'}}>[解密]</span>

> 加密種類: 依加解密演算法種類分 __對稱式__ 和 __非對稱式__ 加密
>    
> 對稱性加密算法：
>> 對稱式加密就是加密和解密使用同一個密鑰
>> 資料接收雙方需先知道雙方加密的金鑰與演算法，才能完整加解密。 
>> ex: AES、DES、3DES
> 
> 非對稱算法：
>> 非對稱式加密就是加密和解密所使用不同密鑰，一般稱 __公鑰__ 和 __私鑰__ 。
>> 公私鑰必需配對使用，否則不能打開加密文件。
>> 
>> 訊息接收方先製備公鑰與私鑰。並將公鑰發送給資料來源方。
>> 資料源頭則使用接收方的公鑰將訊息加密，然後將祕文回傳給接收方，接收方再依據自己規則結合公私鑰進行解密。
>> 
>> 所以，原則上是 __接收__ 訊息的人來 __決定演算__ 工具和 __派發金鑰__ 。
>> ex: RSA、DSA、ECC


# Aes128 Encryption and Decryption Example

* Aes128EncrypterUtil.java

```Javascript
    public class Aes128EncrypterUtil {
        public static String encryptHex(String str) {
            Aes128Cipher encrypter = new Aes128Cipher();
            return encrypter.encrypt(str);
        }
        public static String decryptHex(String str) {
            Aes128Cipher encrypter = new Aes128Cipher();
            return encrypter.decrypt(str);
        }
        public static String encryptBased64(String str) {
            Aes128Cipher encrypter = new Aes128Cipher();
            return encrypter.encrypt(str, "BASED64");
        }
        public static String decryptBased64(String str) {
            Aes128Cipher encrypter = new Aes128Cipher();
            return encrypter.decrypt(str, "BASED64");
        }
    }
```


* Aes128Cipher.java

```Javascript
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Base64;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
/**
 * <pre>
<h1>進階加密標準</h1>
<h2>對稱加密算法 :</h2> 
AES算法使用[相同]的密鑰來對資料進行[加]密和[解]密
<h2>加密過程包括以下步驟：</h2>
 ref: https://inbound.technology/%E4%BB%80%E9%BA%BC%E6%98%AF-aes-%E5%B0%8D%E7%A8%B1%E5%8A%A0%E5%AF%86%E6%BC%94%E7%AE%97%E6%B3%95%EF%BC%9Fphp-%E8%88%87-nodejs-%E7%AF%84%E4%BE%8B%E5%AF%A6%E4%BD%9C/
<ol>
<li>密鑰擴展：將輸入的密鑰擴展為更長的密鑰序列，以供後續的加密和解密過程使用。</li>
<li>初始輪：將明文數據按照一定的規則與密鑰序列進行異或操作。</li>
<li>輪函數：重覆執行多輪操作，每一輪都包括四個步驟：</li>
<li>字節替換：將數據中的每個字節替換為另一個字節，使用一個固定的S盒進行映射。</li>
    <li>行移位：將數據矩陣中的每一行循環左移不同的偏移量。</li>
    <li>列混淆：將數據矩陣中的每一列進行混淆。</li>
    <li>密鑰加：將密鑰序列中的一部分與數據進行異或操作。</li>
<li>最終輪：最後一輪操作中，省略列混淆步驟，只包括字節替換、行移位和密鑰加。</li>
<li>輸出：輸出加密後的數據。</li>
</ol>
 * </pre>
 */
public class Aes128Cipher {
    public static final String CIPHER_TO_BASED64 = "BASED64";
    public static final String CIPHER_TO_HEX = "HEX";
    private Cipher ecipher;
    private Cipher dcipher;
    private final byte[] keySalt = new byte[] { 45, -42, 105, -110, 115, -101,
            99, -116, 45, -116, -111, 116, -101, 109, 42, -45 };
    private static final String ENCODING_UTF8 = "UTF8";
    public static void main(String[] args) {
        KeyGenerator kg = null;
        try {
            kg = KeyGenerator.getInstance("AES");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        kg.init(128);
        SecretKey secretKey = kg.generateKey();
        byte[] encodedByteArray = secretKey.getEncoded();
        System.out.println(Arrays.toString(encodedByteArray));
    }
    public Aes128Cipher() throws EncryptDecryptException {
        SecretKeySpec skeySpec = new SecretKeySpec(keySalt, "AES");
        try {
            ecipher = Cipher.getInstance("AES");
            dcipher = Cipher.getInstance("AES");
            ecipher.init(Cipher.ENCRYPT_MODE, skeySpec);
            dcipher.init(Cipher.DECRYPT_MODE, skeySpec);
        } catch (NoSuchAlgorithmException | NoSuchPaddingException
                | InvalidKeyException e) {
            e.printStackTrace();
            throw new EncryptDecryptException("unexpected", e);
        }
    }
    public String encrypt(String str) throws EncryptDecryptException {
        return encrypt(str, CIPHER_TO_HEX);
    }
    public String encrypt(String str, String cipherTo)
            throws EncryptDecryptException {
        try {
            // Encode the string into bytes using utf-8
            byte[] utf8 = str.getBytes(ENCODING_UTF8);
            // Encrypt
            byte[] enc = ecipher.doFinal(utf8);
            if (CIPHER_TO_BASED64.equalsIgnoreCase(cipherTo)) {
                Base64.Encoder encoder = Base64.getEncoder();
                return encoder.encodeToString(enc);
            } else {
                // encrypt should produce url safe string, which best in HEX
                return HexStringUtil.toHexString(enc);
            }
        } catch (javax.crypto.BadPaddingException | IllegalBlockSizeException
                | UnsupportedEncodingException e) {
            e.printStackTrace();
            throw new EncryptDecryptException("unexpected", e);
        }
    }
    public String decrypt(String str) throws EncryptDecryptException {
        return decrypt(str, CIPHER_TO_HEX);
    }
    public String decrypt(String str, String cypherTo)
            throws EncryptDecryptException {
        try {
            if (CIPHER_TO_BASED64.equalsIgnoreCase(cypherTo)) {
                Base64.Decoder decoder = Base64.getDecoder();
                byte[] cipherText = decoder.decode(str.getBytes("UTF8"));
                return new String(dcipher.doFinal(cipherText), "UTF-8");
            } else {
                // Decode base64 to get bytes
                byte[] dec = HexStringUtil.fromHexString(str);
                // Decrypt
                byte[] utf8 = dcipher.doFinal(dec);
                // Decode using utf-8
                return new String(utf8, ENCODING_UTF8);
            }
        } catch (javax.crypto.BadPaddingException | IllegalBlockSizeException
                | UnsupportedEncodingException e) {
            e.printStackTrace();
            throw new EncryptDecryptException("unexpected", e);
        }
    }
    private static class HexStringUtil {
        // table to convert a nibble to a hex char.
        private static char[] hexChar = { '0', '1', '2', '3', '4', '5', '6',
                '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };
       /**
         * Convert a hex string to a byte array. Permits upper or lower case
         * hex.
         * 
         * @param s
         *            String must have even number of characters. and be formed
         *            only of digits 0-9 A-F or a-f. No spaces, minus or plus
         *            signs.
         * @return corresponding byte array.
         */
        public static byte[] fromHexString(String s) {
            int stringLength = s.length();
            if ((stringLength & 0x1) != 0) {
                throw new IllegalArgumentException(
                        "fromHexString requires an even number of hex characters");
            }
            byte[] b = new byte[stringLength / 2];
            for (int i = 0, j = 0; i < stringLength; i += 2, j++) {
                int high = charToNibble(s.charAt(i));
                int low = charToNibble(s.charAt(i + 1));
                b[j] = (byte) ((high << 4) | low);
            }
            return b;
        }
        /**
         * convert a single char to corresponding nibble.
         * 
         * @param c
         *            char to convert. must be 0-9 a-f A-F, no spaces, plus or
         *            minus signs.
         * 
         * @return corresponding integer
         */
        private static int charToNibble(char c) {
            if ('0' <= c && c <= '9') {
                return c - '0';
            } else if ('a' <= c && c <= 'f') {
                return c - 'a' + 0xa;
            } else if ('A' <= c && c <= 'F') {
                return c - 'A' + 0xa;
            } else {
                throw new IllegalArgumentException(
                        "Invalid hex character: " + c);
            }
        }
        public static String toHexString(byte[] b) {
            StringBuffer sb = new StringBuffer(b.length * 2);
            for (int i = 0; i < b.length; i++) {
                // look up high nibble char
                sb.append(hexChar[(b[i] & 0xf0) >>> 4]);
                // look up low nibble char
                sb.append(hexChar[b[i] & 0x0f]);
            }
            return sb.toString();
        }
    }
}
```



# Trouble shooting : InvalidKeyException
> 以 256 bits 的 key 建立 AES 256 cipher 時
> 可能會出現 __InvalidKeyException:Illegal key size or default parameters__ 錯誤
> 這是 JDK 對加密金鑰長度的限制所致。

* 下列 Code 可能拋出 InvalidKeyException 
```Javascript
    cipher = Cipher.getInstance("AES");
    cipher.init(Cipher.ENCRYPT_MODE, skeySpec);
```
      
> 解決 InvalidKeyException 異常方式
>> 到 __JAVA_HOME/jre/lib/security/java.scurity__
>> 找出或增加 crypto.policy=unlimited 並設定為 unlimited
>> 然後重啟 Java 即可解決