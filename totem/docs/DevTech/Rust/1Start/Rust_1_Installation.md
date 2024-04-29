---
title: Rust 安裝
description: Rust 安裝
keywords: [Rust,Install]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Rust 於 Windows 安裝

* 安裝過程摘要記錄  

    * 先至 [Install Rust](https://www.rust-lang.org/tools/install) 下載安裝檔 
    * 安裝過程中會先檢查 C++ build tools 是否安裝，若未安裝請先中斷並安裝指定版本 [Visual Studio](#vs_install)  
        * 這邊的回應只是提醒，不是詢問要不要順便安裝，是一定要安裝。  
    * 若是覺得 Visual Studio 太吃資源，可依使用 [Visual Studio Code](#vsc_install) 輕量版 IDE，並安裝所需基本套件。 

## SDK 安裝 
* 安裝檔下載位置 [Install Rust](https://www.rust-lang.org/tools/install) 
* 起步走: https://rust-lang.tw/book-tw/ch01-02-hello-world.html


### SDK 紀錄
* 下載並安裝這邊先下載 [Windows 版的 Rust SDK](https://www.rust-lang.org/tools/install) 與安裝工具
    * Desktop Development with C++
    * 出現提示 <span style={{color: '#0044FF'}}> __Install the C++ build tools before proceeding__ </span>. 應先中斷後安裝 [C++ build tools](#vs_install)  
    * 下載 [Visual Studio](https://visualstudio.microsoft.com/downloads)
    * 下載 [Visual Studio Code](https://code.visualstudio.com/download)
    
__ 安裝工具出現 C++ build tools are required __

```

Rust Visual C++ prerequisites

 Rust requires the Microsoft C++ build tools for Visual Studio 2013 or
later, but they don't seem to be installed.

You can acquire the build tools by installing Microsoft Visual Studio.

  https://visualstudio.microsoft.com/downloads/

Check the box for "Desktop development with C++" which will ensure that the
needed components are installed. If your locale language is not English,
then additionally check the box for English under Language packs.

For more details see:

  https://rust-lang.github.io/rustup/installation/windows-msvc.html

Install the C++ build tools before proceeding.

If you will be targeting the GNU ABI or otherwise know what you are
doing then it is fine to continue installation without the build
tools, but otherwise, install the C++ build tools before proceeding.

Continue? (y/N)
```

我偷懶，先安裝 Rust Compiler 試試...<br/>
    
```
Welcome to Rust!

This will download and install the official compiler for the Rust
programming language, and its package manager, Cargo.

Rustup metadata and toolchains will be installed into the Rustup
home directory, located at:

  C:\Users\user\.rustup

This can be modified with the RUSTUP_HOME environment variable.

The Cargo home directory is located at:

  C:\Users\user\.cargo

This can be modified with the CARGO_HOME environment variable.

The cargo, rustc, rustup and other commands will be added to
Cargo's bin directory, located at:

  C:\Users\user\.cargo\bin

This path will then be added to your PATH environment variable by
modifying the HKEY_CURRENT_USER/Environment/PATH registry key.

You can uninstall at any time with rustup self uninstall and
these changes will be reverted.

Current installation options:


   default host triple: x86_64-pc-windows-msvc
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes

1) Proceed with standard installation (default - just press enter)
2) Customize installation
3) Cancel installation
> 
...

Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload its PATH environment variable to include
Cargo's bin directory (%USERPROFILE%\.cargo\bin).

Press the Enter key to continue.

```

* 接下來補安裝  C++ Buiold Tools... 

## 安裝 Visual Studio <span id="vs_install">&nbsp:</span>
* 這邊依據官方文件，看來安裝 Visual Studio 主要目的是安裝 C++ Build Tools.
* 工作負載: Desktop Development with C++ 記得勾選 - 1/3 
![Desktop Development with C++](/img/rust/insect_totem_net_rust_install_step_004.jpg "Desktop Development with C++")

* 個別元件: Rust Windows 10/11 SDK 記得勾選 - 2/3 
![ Windows 10/11 SDK](/img/rust/insect_totem_net_rust_install_step_005.jpg "Windows 10/11 SDK")

* 語言套件: 中文/英文語言套件也可勾選 - 3/3  
![中文/英文語言套件](/img/rust/insect_totem_net_rust_install_step_006.jpg "中文/英文語言套件")

## 安裝 Visual Studio Code 中開發 Rust 所需套件<span id="vsc_install">&nbsp:</span>
* 簡易版的 Rust 開發工具
* 安裝 extensions: rust-analyzer (注意開發人 Visual Studio Code)
![ rust-analyzer](/img/rust/insect_totem_net_rust_install_step_007.jpg "rust-analyzer")

* Rust extension Pack Zerotask
![ Rust extension Pack](/img/rust/insect_totem_net_rust_install_step_008.jpg "Rust extension Pack")


## 試一下安裝效果
* Visual Studio Code > Termial 確認一下安裝狀況

__VS Code Terminal__
* 也可以直接在 cmd.exe 下執行

```

$ insecttotem> rustc --version
rustc 1.77.2 (25ef9e3d8 2024-04-09)

$ insecttotem> cargo --version
cargo 1.77.2 (e52e36006 2024-03-26)
```

__以 Cargo 建立一個簡單的 helloworld__ 並執行

```
$ insecttotem> mkdir hello_totem
$ insecttotem> cd hello_totem
$ insecttotem> cargo new hello_totem
$ insecttotem> cargo build
    Compiling hello_totem v0.1.0 ...
    Finished dev [unoptimized + debuginfo] target(s) in 0.64s
$ insecttotem> cargo run 
    Finished dev [unoptimized + debuginfo] target(s) in 0.01s
    Running `target\debug\hello_totem.exe`
Hello, world!

```

確認基本環境安裝完成