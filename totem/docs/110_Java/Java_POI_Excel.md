---
title: Java POI 讀取 Excel
description: Java POI 讀取 2007 後的 Excel
keywords: [Java,POI]
---
    MS Office 不同版本之間存在些相容問題    
    即使是相同副檔名的檔案  
    以不同版本開啟，也有可出現些差異    
    2007 後的 Excel 副檔名由 xls 改為 xlsx  
    第三方讀取套件也做了相應的調整  
    這邊列出主要差異  
    功使用參考  

## Office2003 之前的 xls 檔

* 以 HSSF 讀取

```javascript
    import org.apache.poi.hssf.usermodel.*;
    HSSFWorkbook wb = new HSSFWorkbook();
    HSSFSheet s = wb.createSheet();
    HSSFRow row = sheet0.getRow(rowIndex);
    HSSFCell cell0 = row.getCell(0);
    HSSFCell cell1 = row.getCell(1);
```

## Office2007 之後的 xlsx 檔

* 以 XSSF 讀取

```javascript
    import org.apache.poi.ss.usermodel.*;
    XSSFWorkbook wb = new XSSFWorkbook();
```

## Apache POI
* [Apache POI網頁](http://poi.apache.org/spreadsheet/converting.html)