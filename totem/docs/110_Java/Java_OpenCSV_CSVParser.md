---
title: OpenCSV 與 CSVParser 比較
description: OpenCSV and CSVParser Comparison
keywords: [Java,OpenCSV,CSVParser]
---
    
    Parse CSV 檔，說難不難，說不難有時卻又繁雜  
    尤其是遇到內容中有空白、換行、雙引號或穿插空白行時等特殊情形時  
    要自行寫出極為完整且通用的 CSV parser  
    著實有些繁瑣  
    所以，會想使用 CSV Parser 相關 API  
    OpenCSV 與 CSVParser 便是常見的第三方元件  
    開發自用時選誰都無所謂，但若要牽扯到商業行為那就必須注意了  
    下面是因為商業行為所以更換 API libs 的紀錄  
    
## 關於 License    

|  | OpenCSV  | CSVParser  |
| :-- | :--: |:--:|
|  | Apache  | Ostermiller   |
| 網站 | http://opencsv.sourceforge.net/ | http://ostermiller.org/utils/CSV.html |
| License  | Apache 2.0 | GPL |
| 其他| 允許商業行為 | 具有極強的感染力<br/>不利商業行為 |


## CSV Format
* Comma-Separated Values
* 尚無嚴格規格與標準，但有 RFC4180 ( IETF工作備忘錄 : The Internet Engineering Task Force )

## RFC4180 摘要
* 以 (CR/LF) 字元結束的DOS風格的行 (最後一行可選，檔案最後可自行決定是否加上斷行)。
* 一條可選的表頭記錄 (沒有可靠的方式來檢測它是否存在，所以導入時必須謹慎)。
* 每條記錄應當包含同樣數量的逗號分隔欄位。
* 任何欄位都可以被包裹 (用雙引號)。
* 包含換行符、雙引號和/或逗號的欄位應當被包裹。 (否則，文件很可能不能被正確處理)。
* 欄位中的一個 (雙) 引號字元必須被表示為兩個 (雙) 引號字元。

## 使用方式比較

<div class="container">
  <div class="row row-cols-3">
    <div class="col-2" >  </div>
    <div class="col-5" >___OpenCSV (CSVReader, CSVWriter)___</div>
    <div class="col-5" >___CSVParser (CSVParser, EcxelCSVPrinter)___</div>
    
    <div class="col-2" style={{backgroundColor: '#ddf9ff'}}>__Parse__</div>
    <div class="col-5" style={{backgroundColor: '#ddf9ff'}}><div>
    
    ```javascript
    byte[] content = null;
    String forceBig5ToUTF8 = CharEncodingUtils.forceBig5ToUTF8(content);
 
    CSVReader parser = new CSVReader(new InputStreamReader(new ByteArrayInputStream(
          forceBig5ToUTF8.getBytes())), ',', '"', 0);
 
    String[] a_line = parser.readNext();
    List<String[]> a_file = parser.readAll();
    ```
    * row: 以String\[\] 承接
    * file: 以List &lt;String\[\]&gt; 承接
    </div></div>
    <div class="col-5" style={{backgroundColor: '#ddf9ff'}}><div>
    ```javascript
    byte[] content = null;
    String forceBig5ToUTF8 = CharEncodingUtils.forceBig5ToUTF8(content);
 
    ByteArrayInputStream in = new ByteArrayInputStream(
                forceBig5ToUTF8.getBytes());
    CSVParser parser = new CSVParser(in);
 
    String[] a_line = parser.getLine();
    String[][] a_file = parser.getAllValues();    
    ```
    * row: 以String\[\] 承接
    * file: 以String\[\]\[\] 承接   
    </div></div>
 
    <div class="col-2" style={{backgroundColor: '#e6f2ff'}}>__Write__</div>
    <div class="col-5" style={{backgroundColor: '#e6f2ff'}}><div>
    ```javascript
    ByteArrayOutputStream output = new ByteArrayOutputStream();
        OutputStreamWriter osr= new OutputStreamWriter(output, encoding.getValue());
        CSVWriter printer = new CSVWriter(osr);
 
    String[] rowCells = null;
    printer.writeNext(rowCells);
 
    List<String[]> = fileCells = null;
    printer.writeAll(fileCells );    
    ```
    * 一次寫一行
    * 寫入整個File
    </div></div>
    <div class="col-5" style={{backgroundColor: '#e6f2ff'}}><div>
    ```javascript
    ByteArrayOutputStream output = new ByteArrayOutputStream();
    ExcelCSVPrinter printer = new ExcelCSVPrinter(new OutputStreamWriter(output, encoding.getValue()));
     
    printer.print("cell content"); // cell
    printer.println("content");    // cell content with break line
    printer.println(new String[]{});//row
    printer.println(new String[][]{});//file
     
    printer.close();
    ```
    </div></div>
  </div>
</div>