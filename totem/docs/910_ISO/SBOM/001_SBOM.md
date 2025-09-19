---
title: SBOM
description: 軟體物料清單
keywords: [ISMS,SBOM]
---

## 數位韌性教材專區
* [SBOM 開源工具使用說明介紹](https://material.nics.nat.gov.tw/material/maintainable/Guide_to_SBOM_and_OSV_Tools/)

## SBOM 簡介
* _名詞解釋_ : 
    * __SBOM__ : Software Bill of Materials/軟體物料清單，指的是軟體中的函式庫與元件清單。
    * __OSV__ : Open Source Vulnerability，是一個公開的軟體漏洞資料庫，由 SBOM 搭配 OSV 可以了解軟體目前可能存在的漏洞。OSV 另提供函式庫與元件漏洞的修補版本資訊。

### SBOM 清單建立基本流程 
1. 先以[輔助工具](#SBOM_Tools)建立 SPDX 檔，通常以 Json 格式為主流。
    * 不同工具所產生的 SPDX 內容可能會有所差異，但物料名稱清單部分則幾乎都相同。
2. OSV-Scanner 工具查詢 OSV 紀錄中，相關物料目前所面臨的風險與相關 CVS 等級。
    * OSV-Scanner 可輔助產生可閱讀的 CSV 或 excel 報表。


## SBOM 相關產生工具<span id="SBOM_Tools">&nbsp;</span>
* Microsoft sbom-tool
* CycloneDX Generator
* Trivy
* Syft
* parlay
* OSV-Scanner


## Syft
* Syft 適用於 Windows、Linux 環境下

### Syft Windows 使用紀錄
* Syft 有封裝 exe 工具可直接於 Windows 下執行並產生 SBOM。
* 準備資訊
    * syft.exe 工具下載 
    * osv-scanner\osv-scanner_windows_arm64.exe 工具下載 
    * 專案路徑
    * 輸出檔路徑: 建議輸出檔附檔名以 .cdx.json 結尾，範例: syft.cdx.json
    * windows cmd

_Syft SBOM 建立指令_

```
-- SBOM 建立指令: cmd 下先進入 syft.exe 所在資料夾

set "SYFT_FORMAT_PRETTY=true" && syft "D:\path\to\my\project" -o cyclonedx-json@1.5=D:\path\of\sbom\output\folder\syft.cdx.json

```

_SPDX 連結 OSV 資料庫_

* forrmat 有多種可選: table、markdown 等等
    * --format: 參數 table、markdown
    * 別忘的輸出副檔名要修改，以方便工具開啟。
    * 建議搭配 Browser plugin 直接瀏覽 md 檔，方便快速連結到 OSV 查看 CSV 詳細細節。

```
-- osv-scanner 連結 OSV 資料庫: cmd 下先進入 osv-scanner_windows_arm64.exe 所在資料夾

osv-scanner --sbom="D:\path\of\sbom\output\folder\syft.cdx.json" --format=markdown --output=D:\path\of\osv\output\folder\osv.md

```
