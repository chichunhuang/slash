---
title: SBOM Generate
description: 軟體物料清單Windows下建立步驟
keywords: [ISMS,SBOM]
---


## Step1 Install WinGet
* 藉由微軟商店安裝winget
* 相關說明：https://learn.microsoft.com/zh-tw/windows/package-manager/winget/

## Step optional
* 依據所使用的套件管理程式不同，請記得為套件管理程式設定環境變數與 path
* 例如: Windows 下使用 Maven，請記得設定 MAVEN_HOME, Path。


## Step2 安裝Microsoft sbom-tool
* 開啟 Windows PowerShell
```
    winget install Microsoft.SbomTool
```
import {GoogleImage} from "@site/src/components/google/GoogleImage";

<div>
 {GoogleImage( 'google_file_id',  '001_install_SBOMTool.jpg', {width:'320px', height:'240px', hidden:false, degree:0})}
</div>

## Step3 開始Microsoft sbom-tool掃描
* 專案資料夾旁建立 SBOM_Report 資料夾
* 執行掃描
    * 安裝 Microsoft.SbomTool 時已自動設定別名為 sbom
    * 下列範例專案名為 Zeus

```
    sbom generate -b "./Zeus_SBOM" -bc "./Zeus" -pn "Zeus" -pv "v1" -ps "nics" -D "true"
```

## Step4 查看 SBOM Report
* Zeus_SBOM\_manifest\spdx_2.2 下會出現兩個檔案
    * manifest.spdx.json 
    * manifest.spdx.json.sha256
* manifest.spdx.json 下 packages 節點可查看元件版本
* manifest.spdx.json 下 relationships 節點可查看元件關係


## Step5 安裝 scoop 與 osv-scanner
* scoop 安裝 
    * cd C:\Users\user
    * Set-ExecutionPolicy RemoteSigned -scope CurrentUser 
    * iwr -useb get.scoop.sh | iex
* osv-scanner 安裝
    * scoop install osv-scanner 
    
## Step6 產生 Json OSV 報告

```
    osv-scanner --sbom="./manifest.spdx.json" --format json > "./osv_report.json"

    osv-scanner --sbom="./manifest.spdx.json" --format html > "./osv_report.html"

    osv-scanner --sbom="./manifest.spdx.json" --format table > "./osv_report.txt"

    osv-scanner --sbom="./manifest.spdx.json" --format markdown > "./osv_report.md"

    osv-scanner --sbom="./manifest.spdx.json" --format spdx-2-3 > "./osv_spdx_report.txt"
    
    osv-scanner --sbom="./manifest.spdx.json" --format cyclonedx-1-5 > "./osv_cyclonedx_report.txt"

    osv-scanner --sbom="./manifest.spdx.json" --format cyclonedx-1.4 > "./osv_cyclonedx_report.txt"
    
```

## Summary 

```
    sbom generate -b "./Zeus_SBOM_202609" -bc "./Zeus" -pn "Zeus" -pv "v1" -ps "nics" -D "true"
    
    osv-scanner --sbom="./manifest.spdx.json" --format markdown > "./osv_report_Zeus.md"
    osv-scanner --sbom="./manifest.spdx.json" --format html > "./osv_report_Zeus.html"
```


