---
title: Docusaurus 疑難雜症
description: Docusaurus Troubleshooting
keywords: [Docusaurus,troubleshooting] 
---


## Lazy line
在 Markdown 中，一個 "lazy line" 指的是在一個需要特定前綴的容器環境下(例如 \> 用於區塊引用，或空白用於列表)，卻沒有正確前綴的行。

__通常在以下情況下發生：__

* 程式碼區塊被錯誤地嵌套在需要前綴的容器中： 例如，你可能不小心將這個程式碼區塊放在了一個區塊引用中，但沒有為程式碼區塊內的每一行都加上 \> 前綴。
    * 避免容器多層嵌套
* MDX 語法解析的誤判： 雖然你的程式碼看起來是一個標準的 Markdown 程式碼區塊，但 Docusaurus 的 MDX 解析器可能因為某些原因將其誤認為處於一個需要前綴的容器中。這可能是由於周圍的 Markdown 語法結構不正確或 MDX 解析器的一些邊緣情況。若確認被挑出的區塊沒有錯誤。
    * 這通常只能檢查前一行，是否出現語法錯誤。例如 escape 忘了加。
    * 逐行簡化前方數行，重新 run start/run build 看檢查結果
    

## Docusaurus found broken anchors!
run build 後出現 Docusaurus found broken anchors!，但 run start 下相關 links\(通常是單一 Page 內的 anchor 跳轉造成)卻又功能正常。  
這通常是因為 anchor id 未符合  Markdown/MDX Anchors 規範造成，注意下列建議:


* __大小寫敏感__ ： 錨點 ID 是大小寫敏感。確保連結中的 #錨點ID 與實際生成的或自訂的 id 屬性的大小寫完全一致。
* __特殊字元處理__ ： Docusaurus 在生成標題錨點時，會移除或替換特殊字元。例如，我的標題 (測試) 可能會變成 #我的標題-測試。在連結時，你需要使用處理後的 ID。
* __空格和連字符__ ： 標題中的空格會被替換為連字符 (-)。
* __編碼問題__ ： 某些特殊字元在 URL 中可能需要進行編碼。雖然 Docusaurus 通常會處理這些，但如果遇到問題，可以嘗試使用 URL 編碼後的格式。
* __檢查編譯輸出__ ： 仔細查看 Docusaurus 編譯時的輸出日誌。它通常會列出有問題的頁面和具體的 broken anchor。
瀏覽器開發者工具__ ： 在開發環境中，你可以使用瀏覽器的開發者工具(例如 Chrome DevTools 的 "Elements" 面板)檢查頁面的 HTML 結構，找到標題元素，查看它們的 id 屬性，確認實際生成的錨點 ID。
* __MDX 組件中的錨點__ ： 如果你的錨點位於自訂的 MDX 組件中，請確保組件正確地渲染了帶有 id 屬性的 HTML 元素。
* __動態生成的內容__ ： 如果你的錨點是根據動態數據生成的，Docusaurus 的靜態編譯可能無法正確檢測到它們。在這種情況下，你可能需要考慮其他的連結策略，或者接受 onBrokenAnchors: 'warn' 或 'ignore' 的配置。
檢查連結語法： 仔細檢查你的 Markdown/MDX 文件中所有以 # 開頭的連結，確保它們指向的錨點 ID 是存在的且拼寫正確。


## 
run build 時出現 [WARNING] Docusaurus found broken anchors!  

> onBrokenAnchors 是 Docusaurus 專門用來處理在建置網站時發現的失效錨點連結 (broken anchors) 的配置。當 Docusaurus 在你的 Markdown/MDX 文件中找到一個指向不存在的錨點 (#some-nonexistent-id) 的連結時，它會根據 onBrokenAnchors 的設定來處理這個問題。  
> docusaurus.config.js 或 docusaurus.config.ts 中的 themeConfig 區塊下找到 onBrokenAnchors 這個選項。


```
/** @type {import('@docusaurus/types').Config} */
const config = {
  // ... 其他配置
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // ... 其他 themeConfig
      onBrokenAnchors: 'throw', // 預設值
    }),
};
```

__onBrokenAnchors 可以設定的值及其行為：__

* 'throw' (預設值):
    * 當 Docusaurus 發現任何失效的錨點連結時，它會拋出錯誤並終止建置過程。
這是一個最嚴格的設定，目的是確保你的網站沒有任何無效的內部連結。
在生產環境中，你通常希望保持這個設定，以避免使用者遇到 broken link。

* 'warn':
    * 當 Docusaurus 發現失效的錨點連結時，它會在建置過程中輸出警告訊息，但不會終止建置。
這個設定允許你建置網站，但你會在終端機看到關於 broken anchor 的警告，提醒你進行修正。
在開發階段，如果你想先忽略這些警告並繼續開發其他部分，可以使用這個設定。但最終發布前應該修正這些問題。

* 'ignore':
    * 當 Docusaurus 發現失效的錨點連結時，它會忽略這些錯誤，並且不會輸出任何警告，直接繼續建置。
這個設定應該謹慎使用。它可能會導致你的網站存在無法正常工作的內部連結，影響使用者體驗。
在某些特殊情況下，例如你明確知道某些連結在特定環境下是有效的，或者你正在進行一些實驗性的工作，可以考慮使用這個設定。但一般不建議在生產環境中使用。