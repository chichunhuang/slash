---
title: exiftool 基本使用
description: exiftool
keywords: [exiftool]
---

> 圖片於 EXIF 寫入版權資訊

## exiftool 授權方式
* 授權方式: [Perl (可選 GPL 或 Artistic License)](https://github.com/exiftool/exiftool/pull/177?utm_source=chatgpt.com)
* 官方網站位置: [https://exiftool.org/](https://exiftool.org/)
* [exiftool GUI](https://exiftool.org/gui/): exiftool的擴充工具。


___安裝 exiftool___ 

```bash
    # mac
    brew install exiftool

    # linux
    sudo apt install libimage-exiftool-perl
    
    # Windows
    直接下載 Windows exe檔使用
```

## EXIF 資訊寫入範例
* EXIF 編輯時預設會保留原始檔，<code>overwrite_original</code> 參數可直接覆寫原始檔。
* <code>Artist</code>，<code>Copyright</code>，<code>Comment</code> 是常見用來宣告版權的資訊

```bash
    exiftool -overwrite_original
        -Artist="Insect Totem" 
        -Copyright="© 2025 Insect Totem. All rights reserved."
        -Comment="Created for Insect Totem's blog"
        Test.png
```

## 檢視 EXIF 資訊
```bash
    # bash
    exiftool Test.png | grep -E "Artist|Copyright|Comment"
    
    # cmd
    exiftool Test.png | findstr "Artist Copyright Comment"
```


## EXIF 資訊批次寫入範例

### Linux bash

```bash
    # bash
    for f in *.jpg; do
          exiftool -overwrite_original 
            -Artist="Insect Totem" 
            -Copyright="© 2025 Insect Totem. All rights reserved."
            -Comment="Created for Insect Totem's blog"
            "$f"
    done
```

### Windows CMD

```bash
    #cmd/bat
    
    @ECHO OFF
    ECHO Starting to update Artist tag to "Insect Totem"...
    
    REM 迴圈遍歷目前資料夾中所有的 .jpg 和 .bmp 檔案
    REM "%%F" 是一個變數，它會依次代表每一個找到的檔案名稱
    FOR /R . %%F IN (*.jpg *.bmp) DO (
        ECHO Processing file: "%%F"
        exiftool -overwrite_original 
            -Artist="Insect Totem" 
            -Copyright="© 2025 Insect Totem. All rights reserved."
            -Comment="Created for Insect Totem's blog"
            "%%F"
    )
    
    ECHO All files processed.
    PAUSE
    
```

### Windows CMD 指定參數

___exif_batch.sh___

```bash

    REM [%~n0] "[Artist 名稱]" "[Copyright]" "[Comment]" [檔案類型1] [檔案類型2]...

    @ECHO OFF
    REM 啟用延遲變數擴充，並建立一個本地變數範圍
    SETLOCAL ENABLEDELAYEDEXPANSION
    
    REM === 參數檢查 ===
    REM 如果第一個參數是空的，或使用者要求幫助，則跳至 :HELP 區塊
    IF %1=="" GOTO :HELP
    IF %1=="-?" GOTO :HELP
    IF %1=="/?" GOTO :HELP

    IF %2=="" GOTO :HELP
    IF %3=="" GOTO :HELP
    
    REM === 處理參數 ===
    REM 1. 設定 Artist 名稱
    REM    %~1 會移除傳入參數時可能帶有的引號 (例如 "ABC")
    SET "ARTIST=%~1"
    
    REM 2. 將參數列表 "左移" 一個位置
    REM    原本的 %2 (檔案類型1) 會變成 %1
    REM    原本的 %3 (檔案類型2) 會變成 %2 ...依此類推
    SHIFT
    
    SET "COPYRIGHT=%~1"
    SHIFT
    
    SET "COMMENT=%~1"
    SHIFT
    
    ECHO -Artist="%ARTIST%"
    ECHO -Copyright="%COPYRIGHT%" 
    ECHO -Comment="%COMMENT%"
    
    
    REM 3. 檢查檔案類型
    REM    執行 SHIFT 之後，如果 %1 是空的，表示使用者沒有提供檔案類型
    IF "%1"=="" GOTO :HELP_NO_TYPES
    
    REM === 主迴圈 ===
    ECHO.
    ECHO ======================================================
    ECHO  準備執行...
    ECHO  Artist 將被設定為: "%ARTIST%"
    ECHO  將處理的檔案資訊: %*
    ECHO ======================================================
    ECHO.
    
    REM %* 現在代表 "所有剩下的參數" (即 *.jpg *.bmp *.png 等)
    REM -overwrite_original 會覆蓋原檔案，不會產生 _original 備份
    REM 您可以移除 -overwrite_original，如果需要保留備份的話
    REM %* 會由 %1 開始取，且不受 SHIFT 影響，故改%~1
    :PROCESS_FILES
    IF "%~1"=="" GOTO :DONE_FILES

    FOR %%F IN (%~1) DO (
        IF EXIST "%%F" (
            ECHO Processing file: "%%F"
            exiftool -overwrite_original -Artist="%ARTIST%" -Copyright="%COPYRIGHT%" -Comment="%COMMENT%" "%%F"
        ) ELSE (
            ECHO No files found matching: "%%F"
        )
    )
    SHIFT
    GOTO :PROCESS_FILES
        
    :DONE_FILES
    ECHO.
    ECHO All specified file types processed.
    GOTO :EOF
    
    REM === 說明區塊 ===
    :HELP
    ECHO.
    ECHO  錯誤：參數不足或要求幫助。
    ECHO.
    ECHO  此批次檔用於將 Artist,Copyright,Comment 標籤寫入指定的檔案類型。
    ECHO.
    ECHO  [用法]
    ECHO    %~n0 "Artist Name" "Copyright" "Comment" [檔案類型1] [檔案類型2] ...
    ECHO.
    ECHO  [範例]
    ECHO    %~n0 "Insect Totem" "c 2025 Insect Totem. All rights reserved." "Created for Insect Totem's blog" *.jpg *.bmp
    ECHO.
    ECHO  注意:
    ECHO  - 如果 Artist,Copyright,Comment 名稱包含空格，請務必使用雙引號。
    ECHO  - 您可以指定多種檔案類型 (使用萬用字元)。
    GOTO :EOF
    
    :HELP_NO_TYPES
    ECHO.
    ECHO  錯誤：您提供了 Artist 名稱，但沒有指定任何檔案類型。
    ECHO.
    ECHO  [範例]
    ECHO    %~n0 "Insect Totem" "c 2025 Insect Totem. All rights reserved." "Created for Insect Totem's blog" *.jpg *.bmp
    GOTO :EOF
    
    :EOF
    REM 結束本地變數範圍
    ENDLOCAL
    PAUSE    
  
```

___執行___

```batch
 exif_batch "Insect Totem" "© 2025 Insect Totem. All rights reserved." "Created for Insect Totem's blog" *.jpg *.png
```

* 設定環境變數

```bash
    set PATH=%PATH%;C:\Program_Files\tools\exiftool_install_dor
    
    exiftool -ver
```