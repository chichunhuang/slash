"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[3898],{5809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>y});var a=n(7462),r=(n(7294),n(3905));n(3848);const i={title:"Java RSA \u52a0\u89e3\u5bc6",description:"\u4ee5 Java RSA \u9032\u884c\u8cc7\u6599\u52a0\u89e3\u5bc6",keywords:["rsa","java","cipher","encrypt","decrypt"]},c="RSA \u52a0\u5bc6\u6f14\u7b97",p={unversionedId:"tech/java/Java_Rsa_Cipher",id:"tech/java/Java_Rsa_Cipher",title:"Java RSA \u52a0\u89e3\u5bc6",description:"\u4ee5 Java RSA \u9032\u884c\u8cc7\u6599\u52a0\u89e3\u5bc6",source:"@site/docs/tech/java/Java_Rsa_Cipher.md",sourceDirName:"tech/java",slug:"/tech/java/Java_Rsa_Cipher",permalink:"/slash/docs/tech/java/Java_Rsa_Cipher",draft:!1,tags:[],version:"current",frontMatter:{title:"Java RSA \u52a0\u89e3\u5bc6",description:"\u4ee5 Java RSA \u9032\u884c\u8cc7\u6599\u52a0\u89e3\u5bc6",keywords:["rsa","java","cipher","encrypt","decrypt"]},sidebar:"tutorialSidebar",previous:{title:"Java PBE \u52a0\u89e3\u5bc6",permalink:"/slash/docs/tech/java/Java_Pbe_Cipher"},next:{title:"Java SHA \u96dc\u6e4a",permalink:"/slash/docs/tech/java/Java_Sha_Digest"}},o={},y=[{value:"\u975e\u5c0d\u7a31\u6f14\u7b97\u6cd5\uff1a",id:"\u975e\u5c0d\u7a31\u6f14\u7b97\u6cd5",level:2}],s={toc:y},l="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rsa-\u52a0\u5bc6\u6f14\u7b97"},"RSA \u52a0\u5bc6\u6f14\u7b97"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"RSA \u662f\u975e\u5c0d\u7a31\u5f0f\u52a0\u5bc6\u6f14\u7b97\u7684\u4e00\u7a2e\uff0c\u4f7f\u7528\u516c\u9470\u4f9b\u50b3\u9001\u65b9\u52a0\u5bc6\u8cc7\u8a0a\u4f7f\u7528\uff0c\u63a5\u6536\u65b9\u4ee5\u79c1\u9470\u89e3\u9396\u4ee5\u8b80\u53d6\u660e\u6587\u5167\u5bb9\u3002")),(0,r.kt)("h2",{id:"\u975e\u5c0d\u7a31\u6f14\u7b97\u6cd5"},"\u975e\u5c0d\u7a31\u6f14\u7b97\u6cd5\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u975e\u5c0d\u7a31\u5f0f\u52a0\u5bc6\u5c31\u662f\u52a0\u5bc6\u548c\u89e3\u5bc6\u6240\u4f7f\u7528\u7684\u5bc6\u9470\u4e0d\u540c\uff0c\u4e00\u822c\u7a31 ",(0,r.kt)("strong",{parentName:"p"},"\u516c\u9470")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"\u79c1\u9470")," \u3002\n\u516c\u79c1\u9470\u5fc5\u9700\u914d\u5c0d\u4f7f\u7528\uff0c\u5426\u5247\u4e0d\u80fd\u6253\u958b\u52a0\u5bc6\u6587\u4ef6\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u8a0a\u606f\u63a5\u6536\u65b9\u5148\u88fd\u5099\u516c\u9470\u8207\u79c1\u9470\u3002\u4e26\u5c07\u516c\u9470\u767c\u9001\u7d66\u8cc7\u6599\u4f86\u6e90\u65b9\u3002\n\u8cc7\u6599\u6e90\u982d\u5247\u4f7f\u7528\u63a5\u6536\u65b9\u7684\u516c\u9470\u5c07\u8a0a\u606f\u52a0\u5bc6\uff0c\u7136\u5f8c\u5c07\u7955\u6587\u56de\u50b3\u7d66\u63a5\u6536\u65b9\uff0c\u63a5\u6536\u65b9\u518d\u4f9d\u64da\u81ea\u5df1\u898f\u5247\u7d50\u5408\u516c\u79c1\u9470\u9032\u884c\u89e3\u5bc6\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u6240\u4ee5\uff0c\u539f\u5247\u4e0a\u662f ",(0,r.kt)("strong",{parentName:"p"},"\u63a5\u6536")," \u8a0a\u606f\u7684\u4eba\u4f86 ",(0,r.kt)("strong",{parentName:"p"},"\u6c7a\u5b9a\u6f14\u7b97")," \u5de5\u5177\u548c ",(0,r.kt)("strong",{parentName:"p"},"\u6d3e\u767c\u91d1\u9470")," \u3002"),(0,r.kt)("p",{parentName:"blockquote"},"ex: RSA\u3001DSA\u3001ECC")),(0,r.kt)("h1",{id:"java-rsa-\u7bc4\u4f8b"},"Java RSA \u7bc4\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import java.security.InvalidKeyException;\nimport java.security.KeyFactory;\nimport java.security.KeyPair;\nimport java.security.KeyPairGenerator;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.spec.InvalidKeySpecException;\nimport java.security.spec.PKCS8EncodedKeySpec;\nimport java.security.spec.X509EncodedKeySpec;\nimport java.util.Arrays;\n\nimport javax.crypto.BadPaddingException;\nimport javax.crypto.Cipher;\nimport javax.crypto.IllegalBlockSizeException;\nimport javax.crypto.NoSuchPaddingException;\n\nimport util.EncryptDecryptException;\n\n//\u975e\u5c0d\u7a31\u5f0f\u52a0\u5bc6\u5c31\u662f\u52a0\u5bc6\u548c\u89e3\u5bc6\u6240\u4f7f\u7528\u5bc6\u9470\u4e0d\u540c\uff0c\u4e00\u822c\u7a31 __\u516c\u9470__ \u548c __\u79c1\u9470__ \u3002\npublic class RsaCipher {\n\n    public static void main(String[] args) {\n\n        try {\n            byte[] data = new byte[] { 1, 3, 5, 7, 9, 11, 13, 17, 31 };\n\n            KeyPair keyPair = RsaCipher.generateRsaKeyPair(2048);\n            byte[] publicKey = keyPair.getPublic().getEncoded();\n            byte[] privateKey = keyPair.getPrivate().getEncoded();\n\n            byte[] encrypted = RsaCipher.rasEncryptByPublicKey(data,\n                    publicKey);\n\n            byte[] descrypted = RsaCipher.rsaDecryptByPrivateKey(encrypted,\n                    privateKey);\n\n            System.out.println(Arrays.equals(data, descrypted));\n\n        } catch (NoSuchAlgorithmException | EncryptDecryptException e) {\n            e.printStackTrace();\n            throw new RuntimeException(e.getMessage());\n        }\n    }\n\n    public static KeyPair generateRsaKeyPair(int length)\n            throws NoSuchAlgorithmException {\n        KeyPairGenerator keyGen = KeyPairGenerator.getInstance("RSA");\n        keyGen.initialize(length);\n\n        return keyGen.generateKeyPair();\n    }\n\n    private static Cipher createRsaPrivateKeyCipher(byte[] secretKey)\n            throws NoSuchAlgorithmException, NoSuchPaddingException,\n            InvalidKeyException, InvalidKeySpecException {\n        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");\n        cipher.init(Cipher.DECRYPT_MODE, KeyFactory.getInstance("RSA")\n                .generatePrivate(new PKCS8EncodedKeySpec(secretKey)));\n        return cipher;\n    }\n\n    private static Cipher createRsaPublicKeyCipher(byte[] publicKey)\n            throws NoSuchAlgorithmException, NoSuchPaddingException,\n            InvalidKeyException, InvalidKeySpecException {\n        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");\n        cipher.init(Cipher.ENCRYPT_MODE, KeyFactory.getInstance("RSA")\n                .generatePublic(new X509EncodedKeySpec(publicKey)));\n        return cipher;\n    }\n\n    public static byte[] rasEncryptByPublicKey(byte[] data, byte[] publicKey)\n            throws EncryptDecryptException {\n        if (null == data || data.length == 0) return new byte[] {};\n\n        try {\n            Cipher cipher = createRsaPublicKeyCipher(publicKey);\n            byte[] ret = cipher.doFinal(data);\n            return ret;\n        } catch (InvalidKeyException | NoSuchAlgorithmException\n                | NoSuchPaddingException | InvalidKeySpecException\n                | IllegalBlockSizeException | BadPaddingException e) {\n            e.printStackTrace();\n            throw new EncryptDecryptException("unexpected", e);\n        }\n    }\n\n    public static byte[] rsaDecryptByPrivateKey(byte[] data, byte[] privateKey)\n            throws EncryptDecryptException {\n        if (null == data || data.length == 0) return new byte[] {};\n\n        try {\n            Cipher cipher = createRsaPrivateKeyCipher(privateKey);\n            byte[] ret = cipher.doFinal(data);\n            return ret;\n        } catch (InvalidKeyException | NoSuchAlgorithmException\n                | NoSuchPaddingException | InvalidKeySpecException\n                | IllegalBlockSizeException | BadPaddingException e) {\n            e.printStackTrace();\n            throw new RuntimeException("unexpected", e);\n        }\n    }\n\n    public static boolean isKeyPair(byte[] publicKey, byte[] secretKey) {\n        String data = "fake-data";\n\n        byte[] actual;\n\n        try {\n            actual = RsaCipher.rasEncryptByPublicKey(data.getBytes("utf8"),\n                    publicKey);\n            RsaCipher.rsaDecryptByPrivateKey(actual, secretKey);\n        } catch (Exception e) {\n            return false;\n        }\n        return true;\n    }\n\n}\n')))}d.isMDXComponent=!0}}]);