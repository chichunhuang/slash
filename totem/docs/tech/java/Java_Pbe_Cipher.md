---
title: Java PBE 加解密
description: "以 Java PBE PBEWITHMD5andDES 進行資料加解密"
keywords: [pbe,java,cipher,encrypt,decrypt]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# PBEWITHMD5andDES
> 類似對[稱式加密](./Java_Aes_Cipher)，只是收送雙方保存的不是金鑰而是一組密碼。
> 收送雙方持有密碼，App管理人(ex:MIS)則保有雜湊碼，程式中則內藏演算遞迴次數。
> PBEWITHMD5andDES 演算法多了機個參數
> 1. 使用 pwd 來建立 encryption key。
> 2. salt string
> 3. 演算的遞迴次數
> 也就是說相較於一般將 salt 加入資料加密演算外，
> PBEWITHMD5andDES A:還會檢查解密金鑰是否正確。
> 另外，B:也會依據 iteration count 設定值來重複加密所得出的結果。
> 利用增加 A/B 兩項措施增加北破解的難度。


## 對稱性加密算法：
> 對稱式加密就是加密和解密使用同一個密鑰
> 資料接收雙方需先知道雙方加密的金鑰與演算法，才能完整加解密。 
>
> ex: AES、DES、3DES、PBEWITHMD5andDES

# PBEWITHMD5andDES 範例

<CodeBlock text={`

import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Arrays;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.PBEParameterSpec;

import util.EncryptDecryptException;

// 類似對稱式加密，只是收送雙方保存的不是金鑰而是一組密碼。
// 收送雙方持有密碼，App管理人(ex:MIS)則保有雜湊碼，程式中則內藏演算遞迴次數。

public class PbeCipher {

    public static void main(String[] args) {

        try {
            String pwd = "password";

            // Salt must be 8 bytes long
            String salt = "saltsalt";

            byte[] data = new byte[] { 1, 3, 5, 7, 11, 13, 17, 19 };

            byte[] encrypted = PbeCipher.symmetricalEncrypt(data, pwd, salt);

            System.out.println(Arrays.equals(data,
                    PbeCipher.symmetricalDecrypt(encrypted, pwd, salt)));

            /**
             * <pre>
             * System.out.println(Arrays.equals(data,
             *         PbeCipher.symmetricalDecrypt(encrypted, pwd2, salt)));
             * 
             * System.out.println(Arrays.equals(data,
             *         PbeCipher.symmetricalDecrypt(encrypted, pwd, salt2)));
             * // javax.crypto.BadPaddingException: Given final block not
             * // properly
             * // padded. Such issues can arise if a bad key is used during
             * // decryption.
             * 
             * </pre>
             */

        } catch (EncryptDecryptException e) {
            e.printStackTrace();
            throw new RuntimeException("unexpected", e);
        }
    }

    // iteration count: 遞迴演算次數
    private static final int ITERATION_COUNT = 31;

    public static final String SYMMETRICAL_ALGORITHM = "PBEWITHMD5andDES";

    /**
     * @param cipherMode
     *            : javax.crypto.Cipher.DECRYPT_MODE / Cipher.ENCRYPT_MODE
     */
    private static Cipher createSymmetricalCipher(String password, String salt,
            int cipherMode) throws EncryptDecryptException {
        try {
            Key key = prepareEncryptionKey(password);
            PBEParameterSpec paramSpec = new PBEParameterSpec(salt.getBytes(),
                    ITERATION_COUNT);
            Cipher cipher = Cipher.getInstance(SYMMETRICAL_ALGORITHM);
            cipher.init(cipherMode, key, paramSpec);
            return cipher;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new EncryptDecryptException(e);
        } catch (NoSuchPaddingException e) {
            e.printStackTrace();
            throw new EncryptDecryptException(e);
        } catch (InvalidKeyException e) {
            e.printStackTrace();
            throw new EncryptDecryptException(e);
        } catch (InvalidAlgorithmParameterException e) {
            e.printStackTrace();
            throw new EncryptDecryptException(e);
        }
    }

    private static Key prepareEncryptionKey(String password)
            throws EncryptDecryptException {
        PBEKeySpec keySpec = new PBEKeySpec(password.toCharArray());

        try {
            SecretKeyFactory keyFactory = SecretKeyFactory
                    .getInstance(SYMMETRICAL_ALGORITHM);
            SecretKey secretKey = keyFactory.generateSecret(keySpec);
            return secretKey;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new EncryptDecryptException(e);
        } catch (InvalidKeySpecException e) {
            e.printStackTrace();
            throw new EncryptDecryptException(e);
        }
    }

    public static byte[] symmetricalDecrypt(byte[] data, String password,
            String salt) throws EncryptDecryptException {
        if (data == null) return null;

        try {
            Cipher cipher = createSymmetricalCipher(password, salt,
                    Cipher.DECRYPT_MODE);
            return cipher.doFinal(data);
        } catch (IllegalBlockSizeException e) {
            e.printStackTrace();
            throw new EncryptDecryptException(e);
        } catch (BadPaddingException e) {
            e.printStackTrace();
            throw new EncryptDecryptException(e);
        }

    }

    public static byte[] symmetricalEncrypt(byte[] data, String password,
            String salt) throws EncryptDecryptException {
        if (data == null) return null;

        try {
            Cipher cipher = createSymmetricalCipher(password, salt,
                    Cipher.ENCRYPT_MODE);

            return cipher.doFinal(data);
        } catch (IllegalBlockSizeException e) {
            e.printStackTrace();
            throw new EncryptDecryptException(e);
        } catch (BadPaddingException e) {
            e.printStackTrace();
            throw new EncryptDecryptException(e);
        }
    }
}

    `}
      language='java'
      showLineNumbers='true'
      />  