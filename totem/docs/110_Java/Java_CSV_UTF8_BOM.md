---
title: Excel 開啟 CSV 發生中文亂碼
description: CSV 增加 UTF-8 BOM
keywords: [Java,CSV,BOM]
---

    部分 CSV 檔，以 MS Excel 開啟後，會發生中文亂碼的問題  
    改以 NP++ 開啟後，卻沒有中文亂碼的問題  
    檢查 Encoding Type 為 UTF-8 (w/o BOM)  
    將 Encoding Type 改為 UTF-8 (with BOM) 後存檔並用 MS Excel開啟，中文顯示正常

<span style={{color: '#FF1100'}}>__這邊討論的是 UTF-8 下的情境__</span>

## 關於 BOM 
* BOM: Byte order mark
* [http://en.wikipedia.org/wiki/Byte_order_mark](http://en.wikipedia.org/wiki/Byte_order_mark)  
* 位元組順序標記 (BOM) 是一個 Unicode 字符，
    用於表示文字檔案或流的位元組順序 (位元組順序)。其代號點是 U+FEFF。 
    BOM 的使用是可選的，如果使用，則應出現在文字流的開頭。
    除了作為位元組順序指示符的特定用途之外，
    BOM 字元還可以指示文字採用幾種 Unicode 表示形式中的哪一種進行編碼。  

## UTF-8 的 BOM 
* Excel 需要下面三個 bytes 才能正確辨識 UTF-8 的 CSV 檔案
* 注意 \\uFEFF 編碼成 UTF-8 時會就是下面三個 bytes
    * 其他編碼不適用，會是不同內容 

__以 byte 表示__

```
    0xEF, 0xBB, 0xBF
```

__以 Char 表示__
* 你寫入 \\uFEFF 到一個以 UTF-8 編碼的檔案中時，實際上就是寫入了上方三個 bytes
* \\uFEFF: 一個特殊 Unicode 字元又稱為 ㄋZERO WIDTH NO-BREAK SPACE (ZWNBSP)

```
   '\uFEFF' : 在 UTF-8 中的實際 bytes 是 0xEF 0xBB 0xBF 
```

## 範例

### char: \\uFEFF
* 輸出檔補上 FEFF

```javascript
    import java.io.BufferedWriter;
    import java.io.FileOutputStream;
    import java.io.OutputStreamWriter;
    import java.io.Writer;
    import java.nio.charset.StandardCharsets;
    
    public class Utf8BomCsvWriter {
        public static void main(String[] args) {
            String filePath = "output.csv";
    
            try (Writer writer = new BufferedWriter(
                    new OutputStreamWriter(new FileOutputStream(filePath), StandardCharsets.UTF_8))) {
    
                // 寫入 CSV 內容前先寫 UTF-8 BOM
                writer.write('\uFEFF');
    
                // 寫入 CSV 內容
                writer.write("姓名,目的\n");
                writer.write("許茹芸,去王功買鍋蓋\n");
    
                System.out.println("CSV 寫入完成，已加入 UTF-8 BOM。");
    
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

```

### bytes: 0xEF, 0xBB, 0xBF
* [http://koti.mbnet.fi/akini/java/java_utf8_xml/](http://koti.mbnet.fi/akini/java/java_utf8_xml/)

```javascript
    public static void saveFile(String data, boolean append) throws IOException {
      String filePath = "output.csv";
      BufferedWriter bw = null;
      OutputStreamWriter osw = null;
 
      File f = new File(filePath);
      FileOutputStream fos = new FileOutputStream(f, append);
      try {
         // write UTF8 BOM mark if file is empty
         if (f.length() < 1) {
            final byte[] bom = new byte[] { (byte)0xEF, (byte)0xBB, (byte)0xBF };
            fos.write(bom);
         }
         osw = new OutputStreamWriter(fos, "UTF-8");
         bw = new BufferedWriter(osw);
         if (data != null) bw.write(data);
      } catch (IOException ex) {
         throw ex;
      } finally {
         try { bw.close(); fos.close(); } catch (Exception ex) { }
      }
   }
```


### 視需要添加 UTF-8 BOM

```javascript
    import java.io.*;
    import java.nio.charset.StandardCharsets;
    
    public class AddBomIfMissing {
    
        private String input_csv = "downloaded.csv";
        private String output_csv = "converted_with_bom.csv";
    
        public static void main(String[] args) {
            try {
                File inputFile = new File(input_csv);
                byte[] fileBytes = readAllBytes(inputFile);
    
                // 檢查是否已有 UTF-8 BOM (0xEF 0xBB 0xBF)
                boolean hasBOM = fileBytes.length >= 3 &&
                        (fileBytes[0] & 0xFF) == 0xEF &&
                        (fileBytes[1] & 0xFF) == 0xBB &&
                        (fileBytes[2] & 0xFF) == 0xBF;
    
                if (hasBOM) {
                    System.out.println("此 CSV 已有 UTF-8 BOM，無需處理。");
                } else {
                    System.out.println("檔案無 BOM，將會加入 UTF-8 BOM 並產出新檔案。");
                    // 加入 BOM 再寫入新檔
                    try (OutputStream os = new FileOutputStream(output_csv)) {
                        os.write(0xEF);
                        os.write(0xBB);
                        os.write(0xBF);
                        os.write(fileBytes); 
                    }
                    System.out.println("新檔案寫入完成：" + output_csv);
                }
    
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    
        private static byte[] readAllBytes(File file) throws IOException {
            try (InputStream is = new FileInputStream(file)) {
                ByteArrayOutputStream buffer = new ByteArrayOutputStream();
                byte[] data = new byte[4096];
                int nRead;
                while ((nRead = is.read(data, 0, data.length)) != -1) {
                    buffer.write(data, 0, nRead);
                }
                return buffer.toByteArray();
            }
        }
    }

```

## 比較

| __說明項目__ | <code>\uFEFF</code> | <code>0xEF 0xBB 0xBF</code> |
| ---- | ---- | ---- |
|   | Unicode 字元(U+FEFF) | U+FEFF在 UTF-8 中的編碼內容 |
| __用法__ | <code>writer.write('\uFEFF')</code> | <code>os.write(0xEF);</code> <br/><code>os.write(0xBB);</code> <br/><code>os.write(0xBF);</code> |
| __UTF-8 下長度__ | 3 bytes | 3 bytes |
| __在 UTF-16/32 用途__ | 同樣是 BOM，但編碼成不同內容 | 僅用於 UTF-8 |
