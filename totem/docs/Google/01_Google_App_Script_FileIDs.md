---
title: Google App Script 取 File ID
description: Google App Script 取 File ID
keywords: [Google App Script] 
---

> 目的:   
> 使用 Google Apps Script 匯出指定資料夾及其子資料夾中的所有檔案的檔名和 Google File ID，並將結果輸出到 Google Sheets。


## Google App Script 建立
* 開啟 Google Sheets，然後點選 <code>擴充功能</code> -> <code>Apps Script</code>。
* 此功能頁面可處理 App Scripts 建立於執行。


## 重點說明
___Google Sheets___
* YOUR_FOLDER_ID : 替換為您想要匯出檔案的來源資料夾 Google File ID。
* DIST_PATH : 替換為您想要匯出結果檔的目的雲端位置。以 <code>&nbsp;/&nbsp;</code> 分隔每一層資料夾。
* exportFilesToSheet()：Main 函式，會創建 Google Sheets 並呼叫 listFilesInFolder() 來列出檔案。
* listFilesInFolder()：遞迴函式抓取資料夾中的所有檔案以及子資料夾中的檔案，並將 Filename、File ID 和 URL 寫入 Google Sheets。
* getFormattedTimestamp() : 取得並格式化當前的日期與時間，格式為 YYYYMMDD-HHmm，並將其用在資料夾名稱中。
* DriveApp.getRootFolder() : API 用來取得「我的雲端硬碟」根目錄。
* getFoldersByName() : 依次取得輸出雲端 dist 資料夾。

___儲存為 CSV___
* 使用 Utilities.newBlob() 將 CSV 內容轉換成 Blob 格式。
* 使用 distFolder.createFile(csvBlob) 將生成的 CSV 檔案儲存至 dist 資料夾。

```javascript
function go(){
  
  exportFilesToSheet('YOUR_FOLDER_ID', 'DIST_PATH');
  exportFilesToCSV('YOUR_FOLDER_ID', 'DIST_PATH');

}

function exportFilesToCSV(folderId, outputPath) {
  // 設定要匯出檔案的根資料夾 ID
  var folder = DriveApp.getFolderById(folderId);

  // 取得目前的日期和時間，並格式化為 YYYYMMDD-HHmm
  var timestamp = getFormattedTimestamp();
  
  // 解析 outputPath，並定位到對應的資料夾
  var outputFolder = getFolderByPath(outputPath);
  
  // 生成 CSV 的內容
  var csvContent = 'File Name,File ID,File URL\n';  // CSV 的表頭
  
  // 開始遞迴抓取檔案並生成 CSV 內容
  csvContent = generateCSVContent(folder, csvContent);
  
  // 將 CSV 內容轉換為 Blob 格式
  var csvBlob = Utilities.newBlob(csvContent, 'text/csv', 'File_Export_' + timestamp + '.csv');
  
  // 確保 outputFolder 資料夾存在並儲存 CSV 檔案
  try {
    var file = outputFolder.createFile(csvBlob);
    Logger.log('CSV File created successfully. File URL: ' + file.getUrl());
  } catch (e) {
    Logger.log('Error creating CSV file: ' + e.message);
  }
}

function exportFilesToSheet(folderId, outputPath) {
  // 設定要匯出檔案的根資料夾 ID
  var folder = DriveApp.getFolderById(folderId);

  // 取得目前的日期和時間，並格式化為 YYYYMMDD-HHmm
  var timestamp = getFormattedTimestamp();
  
  // 解析 outputPath，並定位到對應的資料夾
  var outputFolder = getFolderByPath(outputPath);
  
  // 建立一個新的 Google Sheet，並將時間戳記加到檔案名稱中
  var sheetFileName = 'File_Export_' + timestamp;
  var ss = SpreadsheetApp.create(sheetFileName);
  
  // 把新建立的檔案移動到指定資料夾
  var sheetFile = DriveApp.getFileById(ss.getId());
  outputFolder.addFile(sheetFile);
  DriveApp.getRootFolder().removeFile(sheetFile); // 移除根目錄中的檔案（只保留在指定資料夾中）

  var sheet = ss.getActiveSheet();
  
  // 設定標題
  sheet.appendRow(['File Name', 'File ID', 'File URL']);
  
  // 開始遞迴抓取檔案
  listFilesInFolder(folder, sheet);
  
  // 顯示 Google Sheet 的 URL
  Logger.log('Google Sheet URL: ' + ss.getUrl());
}

function listFilesInFolder(folder, sheet) {
  // 取得資料夾中的所有檔案
  var files = folder.getFiles();
  
  // 逐一處理每個檔案
  while (files.hasNext()) {
    var file = files.next();
    sheet.appendRow([file.getName(), file.getId(), file.getUrl()]);
  }
  
  // 取得子資料夾並遞迴處理
  var subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    var subfolder = subfolders.next();
    listFilesInFolder(subfolder, sheet);
  }
}

function generateCSVContent(folder, csvContent) {
  // 取得資料夾中的所有檔案
  var files = folder.getFiles();
  
  // 逐一處理每個檔案並加入 CSV 內容
  while (files.hasNext()) {
    var file = files.next();
    csvContent += file.getName() + ',' + file.getId() + ',' + file.getUrl() + '\n';
  }
  
  // 取得子資料夾並遞迴處理
  var subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    var subfolder = subfolders.next();
    generateCSVContent(subfolder, csvContent);
  }

  return csvContent;
}

function getFolderByPath(path) {
  var folder = DriveApp.getRootFolder();
  var pathArray = path.split('/');
  Logger.log[pathArray];
  
  // 逐層尋找資料夾
  for (var i = 0; i < pathArray.length; i++) {
    var folderName = pathArray[i];
    var folders = folder.getFoldersByName(folderName);

    Logger.log(folderName);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      throw new Error('Folder not found: ' + folderName);
    }
  }
  
  return folder;
}

function getFormattedTimestamp() {
  var date = new Date();
  
  // 取得年、月、日、時、分，並格式化
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);
  var hours = ('0' + date.getHours()).slice(-2);
  var minutes = ('0' + date.getMinutes()).slice(-2);
  
  // 回傳格式化後的時間戳記：YYYYMMDD-HHmm
  return year + month + day + '-' + hours + minutes;
}

```