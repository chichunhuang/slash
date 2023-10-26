在使用256 bits的key建立AES 256 cipher時

```
ecipher = Cipher.getInstance("AES");

ecipher.init(Cipher.ENCRYPT_MODE, skeySpec);
```

出現錯誤訊息:
```
InvalidKeyException:Illegal key size or default parameters
```

必須修改JDK對加密金鑰長度的限制.修改

```
JAVA_HOME/jre/lib/security/java.scurity
```

找到一行
```
crypto.policy=unlimited
```

如果沒有就加上,如果前面有#就去除.儲存後重啟java行程,應該就可以順利初始化.