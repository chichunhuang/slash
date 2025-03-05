---
title: Notion 工作頁面
description: Notion Page
keywords: [Notion,Page]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

## Notion Page <span id="notion_page_type"> </span>  
* Page 基本操作: 
    * 每個工作的最小單元是 Block。Block 是一個容器用來乘載文字或圖表等。
    * Main Page 建立: Docker Panel 🢂 __private__ 🢂 __+__ 按鈕 🢂 Create Page
    * 註: private 區域放的是<b>未發佈</b>的 Pages
    * Sub Page 建立: Docker Panel 🢂 特定 Page 🢂 __+__ 按鈕 🢂 Create SubPage
    * Pages 間可以直接拖拉更改階層結構。 
    * 注意: 發佈時以 Pages Tree 為單位，頁面中 linked Pages 不會自動發佈。  

<span>
 {GoogleImage( 'google_file_id',  'local_file_path', {width:'320px', height:'240px', hidden:false, degree:0})}
</span>

* Page 結構:
    * 封面 \(Banner\): 可以自行插入一張圖片，或由相關聯圖庫網站直接定取用圖片。   
    * 圖示 \(Page Icon\): 這張圖也可 Reference 到網路上的其他 icons。用在 <br/>
        a.Browser 的 Tab Icon。<br/>
        b.Notion Docker 上的辨識圖樣。  
    * 內容部分則是以 Block 組成。    
    
* Block: 
    * 工作區所有內容都是 Block。由一個六點符號 __ ⁝⁝ __ 帶出。
    * Block 操作技巧: 有時會使用複雜的 Block，例如 [Database](#notion_Database) 或是 [Form](#notion_Form) 等結構，此類結構下方似乎有 padding 區塊。若欲在下方附加 Block 時，常會發現無法直接 enter 新增，此時可將鼠標移置 Block 下方一段距離\(約4-5個rows)並注意鼠標變化，若由箭頭變成 I 型時便是WYSIWYG下可插入下一 Block 位置。

* Page 轉換: 
    * Notion 可以將 Block 轉成 Page，或是其他程式區塊。
    
* Pages 種類:注意不同種類的 Page 由不同的 icons 呈現    
    * Private Page: 這邊指的是未 Publish 的 Pages。    
    * Public Page: 這邊泛指已 Publish 的 Pages。     
    * DB Page: Notion 中指的 DB 類似 Graph DB。以表格呈現可直接編輯並建立相關關聯。   
        * Page icon 有 __↗__ 符號的是，__Mentioned Page__。是單純的 Page Link。  
        * <span style={{color: 'blue'}}>Page icon 僅單純頁面符號的是，Page 的分支。Link 與 Page 同存亡</span>。  
        * icon 有橫線的是已填內容的 Page。 