---
title: Linux 主機唯一碼
description: Linux Machine ID
keywords: [Linux,MachineID]
---

> 
> 這邊紀錄 Linux 查詢 Machine ID 的方法  
> 因為想限制客戶端安裝軟體的 instance 數量，所以可能會用到  
> 可利用 Machine ID + 時間 + hostname 等限制，用來產生專屬的啟動序號，這邊讓大家各自實作發揮  
> 

## Machine ID
* 128-bit 十六進位
* 在 Linux 系統中，Machine ID \(通常是唯一識別系統的 ID) 通常儲存在特定的檔案中。  
這資訊可用來辨別系統 instance。  

## systemd 系統取 Machine ID
* 藉由安裝時產生的 /etc/machine-id 檔案得知
* Ubuntu / Debian / CentOS / RHEL / Fedora / Arch Linux / Manjaro / openSUSE / SUSE Linux Enterprise 等適用

__直接讀取 Machine ID__

```bash 
    cat /etc/machine-id
```

__hostnamectl 間接讀取 Machine ID__
* hostnamectl：還會顯示 hostname、Machine ID、OS 等資訊

```bash 
    hostnamectl | grep "Machine ID"
```

## Alpine Linux 自行產生 UUID

__uuidgen 建立__

```bash 
    uuidgen > /etc/machine-id
```

__DMI 資訊代替__

```bash 
    cat /sys/class/dmi/id/product_uuid
```

## 重新產生 Machine ID
* 可能會讓你網路掛掉，部分服務異常

```
    sudo rm /etc/machine-id
    sudo systemd-machine-id-setup
```


## 與 hostnamectl 整合取系通資訊

__machine_id.sh__

```
    #!/bin/bash
    
    # 取得系統資訊
    HOSTNAME=$(hostname)
    MACHINE_ID=$(cat /etc/machine-id 2>/dev/null || echo "N/A")
    BOOT_ID=$(cat /proc/sys/kernel/random/boot_id 2>/dev/null || echo "N/A")
    OS_NAME=$(grep '^PRETTY_NAME=' /etc/os-release 2>/dev/null | cut -d= -f2 | tr -d '"')
    
    # 輸出格式化表格
    echo "==============================================="
    printf "%-15s: %s\n" "Hostname"    "$HOSTNAME"
    printf "%-15s: %s\n" "Machine ID"  "$MACHINE_ID"
    printf "%-15s: %s\n" "Boot ID"     "$BOOT_ID"
    printf "%-15s: %s\n" "OS"          "$OS_NAME"
    echo "==============================================="

```

__執行方式__

```
    chmod +x machine_id.sh

    ./machine_id.sh
```

## 其他系統實例辨識的方式
> 僅作紀錄，尚未實作驗證

### Windows 系統辨識 instance 方式
* windows 下有 <code>__MachineGuid__</code> 功能類似 machine ID，儲存在登錄檔中。
* 另外 windows 下也可以嘗試以主機版的 UUID 來做機器識別。

__PowerShell  下__

```PowerShell
-- 取 hostname
    hostname
    
--MachineGuid
    Get-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Cryptography" -Name "MachineGuid"

--BIOS UUID
    wmic csproduct get uuid
```

### Android 系統實例辨識方式
* Settings.Secure.ANDROID_ID : 符合需求。\(Restore 後會改變)
* Build.SERIAL / Build.getSerial\() : 裝置序號，缺點必須得到授權才能取得。

### iOS 系統實例辨識方式
* 這邊應該只能偷藏一個 UUID 來做辨識。