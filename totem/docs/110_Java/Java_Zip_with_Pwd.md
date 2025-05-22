---
title: Java 解壓縮並加密
description: Reading pwd protected zip file
keywords: [Java,zip,pasword]
---

## Java 解壓縮加密的 zip 檔
* 網路上找到以 Java 解壓縮加密(需要密碼)的 zip 檔的方法，留著做參考  
* 原始出處 [reading-password-protected-zip-files-in-java](http://blog.alutam.com/2009/10/31/reading-password-protected-zip-files-in-java/)  

  作者寫了一個類別 ZipDecryptInputStream 處理解密 zip 的工作   
  程式最後面的 main() 是使用範例  
  其中加密的 zip 檔以 7-Zip 製作  

```javascript
     
    import java.io.FileInputStream;
    import java.io.FileOutputStream;
    import java.io.IOException;
    import java.io.InputStream;
    import java.util.zip.ZipEntry;
    import java.util.zip.ZipInputStream;
     
    public class ZipDecryptInputStream extends InputStream {
        private static final int[] CRC_TABLE = new int[256];
        // compute the table
        // (could also have it pre-computed - see
        // http://snippets.dzone.com/tag/crc32)
        static {
            for (int i = 0; i < 256; i++) {
                int r = i;
                for (int j = 0; j < 8; j++) {
                    if ((r & 1) == 1) {
                        r = (r >>> 1) ^ 0xedb88320;
                    } else {
                        r >>>= 1;
                    }
                }
                CRC_TABLE[i] = r;
            }
        }
     
        private static final int DECRYPT_HEADER_SIZE = 12;
     
        private static final int[] LFH_SIGNATURE = { 0x50, 0x4b, 0x03, 0x04 };
     
        private final InputStream delegate;
     
        private final String password;
     
        private final int keys[] = new int[3];
     
        private State state = State.SIGNATURE;
     
        private int skipBytes;
     
        private int compressedSize;
     
        private int value;
     
        private int valuePos;
     
        private int valueInc;
     
        public ZipDecryptInputStream(InputStream stream, String password) {
            this.delegate = stream;
            this.password = password;
        }
     
        @Override
        public int read() throws IOException {
            int result = delegate.read();
            if (skipBytes == 0) {
                switch (state) {
                case SIGNATURE:
                    if (result != LFH_SIGNATURE[valuePos]) {
                        state = State.TAIL;
                    } else {
                        valuePos++;
                        if (valuePos >= LFH_SIGNATURE.length) {
                            skipBytes = 2;
                            state = State.FLAGS;
                        }
                    }
                    break;
                case FLAGS:
                    if ((result & 1) == 0) {
                        throw new IllegalStateException(
                                "ZIP not password protected.");
                    }
                    if ((result & 64) == 64) {
                        throw new IllegalStateException("Strong encryption used.");
                    }
                    if ((result & 8) == 8) {
                        throw new IllegalStateException("Unsupported ZIP format.");
                    }
                    result -= 1;
                    compressedSize = 0;
                    valuePos = 0;
                    valueInc = DECRYPT_HEADER_SIZE;
                    state = State.COMPRESSED_SIZE;
                    skipBytes = 11;
                    break;
                case COMPRESSED_SIZE:
                    compressedSize += result << (8 * valuePos);
                    result -= valueInc;
                    if (result < 0) {
                        valueInc = 1;
                        result += 256;
                    } else {
                        valueInc = 0;
                    }
                    valuePos++;
                    if (valuePos > 3) {
                        valuePos = 0;
                        value = 0;
                        state = State.FN_LENGTH;
                        skipBytes = 4;
                    }
                    break;
                case FN_LENGTH:
                case EF_LENGTH:
                    value += result << 8 * valuePos;
                    if (valuePos == 1) {
                        valuePos = 0;
                        if (state == State.FN_LENGTH) {
                            state = State.EF_LENGTH;
                        } else {
                            state = State.HEADER;
                            skipBytes = value;
                        }
                    } else {
                        valuePos = 1;
                    }
                    break;
                case HEADER:
                    initKeys(password);
                    for (int i = 0; i < DECRYPT_HEADER_SIZE; i++) {
                        updateKeys((byte) (result ^ decryptByte()));
                        result = delegate.read();
                    }
                    compressedSize -= DECRYPT_HEADER_SIZE;
                    state = State.DATA;
                    // intentionally no break
                case DATA:
                    result = (result ^ decryptByte()) & 0xff;
                    updateKeys((byte) result);
                    compressedSize--;
                    if (compressedSize == 0) {
                        valuePos = 0;
                        state = State.SIGNATURE;
                    }
                    break;
                case TAIL:
                    // do nothing
                }
            } else {
                skipBytes--;
            }
            return result;
        }
     
        @Override
        public void close() throws IOException {
            delegate.close();
            super.close();
        }
     
        private void initKeys(String password) {
            keys[0] = 305419896;
            keys[1] = 591751049;
            keys[2] = 878082192;
            for (int i = 0; i < password.length(); i++) {
                updateKeys((byte) (password.charAt(i) & 0xff));
            }
        }
     
        private void updateKeys(byte charAt) {
            keys[0] = crc32(keys[0], charAt);
            keys[1] += keys[0] & 0xff;
            keys[1] = keys[1] * 134775813 + 1;
            keys[2] = crc32(keys[2], (byte) (keys[1] >> 24));
        }
     
        private byte decryptByte() {
            int temp = keys[2] | 2;
            return (byte) ((temp * (temp ^ 1)) >>> 8);
        }
     
        private int crc32(int oldCrc, byte charAt) {
            return ((oldCrc >>> 8) ^ CRC_TABLE[(oldCrc ^ charAt) & 0xff]);
        }
     
        private static enum State {
            SIGNATURE, FLAGS, COMPRESSED_SIZE, FN_LENGTH, EF_LENGTH, HEADER, DATA, TAIL
        }
     
        public static void main(String[] args) throws Exception {
            FileInputStream fis = new FileInputStream("d:/test.zip");
            // wrap it in the decrypt stream
            ZipDecryptInputStream zdis = new ZipDecryptInputStream(fis, "1111");
            // wrap the decrypt stream by the ZIP input stream
            ZipInputStream zis = new ZipInputStream(zdis);
     
            // read all the zip entries and save them as files
            ZipEntry ze;
     
            while ((ze = zis.getNextEntry()) != null) {
                FileOutputStream fos = new FileOutputStream("d:/result/" + ze.getName());
     
                int len;
                byte[] buf = new byte[256];
     
                while ((len = zis.read(buf)) != -1) {
                    fos.write(buf, 0, len);
                }
     
                fos.close();
                zis.closeEntry();
            }
            zis.close();
     
            System.out.println("done.");
        }
    }
```

## 其他
* [Java 壓縮檔內的中文檔案名亂碼](./Java_Zip_Chinese)