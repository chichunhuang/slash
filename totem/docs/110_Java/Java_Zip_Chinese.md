---
title: Java 壓縮檔內的中文檔案名亂碼
description: Java is Han String
keywords: [Java,Han,String]
---

  假設程式欲將多個檔案打包成一個壓縮檔，  
  即使已用 ZipOutputStream 的 setEncoding 方法指定檔名和檔案的內容編碼格式，  
  仍造成壓縮內中文檔名的檔案顯示不出來，或檔名是亂碼，

  此時僅需將 ZipOutputStream 與 ZipEntry 類別從 <span style={{color: '#0044FF'}}> **commons-compress.jar** </span> 換成 <span style={{color: '#0044FF'}}> **apache-ant.jar** </span>  
  類別的建構子、方法、常數大致相同，使用到的地方幾乎不需改變，只要更改 import 的 package  

__Package 調整__
* 捨棄 <span style={{color: '#0044FF'}}> **commons-compress.jar** </span> 
* 改用 <span style={{color: '#0044FF'}}> **apache-ant.jar** </span> 

```javascript
    //原先(來自於commons-compress.jar)
    import org.apache.commons.compress.zip.ZipEntry;
    import org.apache.commons.compress.zip.ZipOutputStream;
    
    //改成(來自於apache-ant.jar)
    import org.apache.tools.zip.ZipEntry;
    import org.apache.tools.zip.ZipOutputStream;
```


__壓縮範例__

```javascript

    public byte[] zipFileExample(Project project, Encoding encoding) {
        List<AttachedFile> files = new ArrayList<AttachedFile>();
 
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ZipOutputStream ziops = new ZipOutputStream(bos);
        ziops.setEncoding(encoding.getValue());
 
        try {
            for (AttachedFile resource : files) {
                String content = resource.getFileContent();
                String fileName =  resource.getFileNameWithExtension();
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                 
                formFileToOutputStream(content, baos);
 
                ziops.setMethod(ZipOutputStream.DEFLATED);
                ZipEntry zipEntry = new ZipEntry(fileName);
                ziops.putNextEntry(zipEntry);
 
                baos.writeTo(ziops);
            }
 
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            IOUtils.closeQuietly(ziops);
            IOUtils.closeQuietly(bos);
        }
 
        return bos.toByteArray();
    }
```    

## 其他
* [信件附件中文檔名亂碼](../Mail/Mail_MimeUtility_Attatch_Garbled)處理方式
* [Java 解壓縮並加密](./Java_Zip_with_Pwd)