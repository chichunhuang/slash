---
title: Notion 工作頁面
description: Notion Page
keywords: [Notion,Page]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

## Notion Page <span id="notion_page_type"> </span>  

### Page 基本操作: 
* 每個工作的最小單元是 Block。Block 是一個容器用來乘載文字或圖表等。
* Main Page 建立: Docker Panel 🢂 __private__ 🢂 __+__ 按鈕 🢂 Create Page
* 註: private 區域放的是<b>未發佈</b>的 Pages
* Sub Page 建立: Docker Panel 🢂 特定 Page 🢂 __+__ 按鈕 🢂 Create SubPage
* Pages 間可以直接拖拉更改階層結構。 
* 注意: 發佈時以 Pages Tree 為單位，頁面中 linked Pages 不會自動發佈。  

<span>
 {GoogleImage( '1q4PH9noJYGhcrSfWIbWTRmj0aBzF5-yN',  '03_Notion_Page_01_addAPage.png', {width:'268px', height:'128px', hidden:true, degree:0})}
</span>&nbsp; &nbsp;&nbsp;
<span>
 {GoogleImage( '1jJ6eTXotT8Txu7vH-re5Aihgqv9umTLB',  '03_Notion_Page_02_addAPageInside.png', {width:'283px', height:'115px', hidden:true, degree:0})}
</span>

### Page 結構:
* 封面 \(Page Cover\): 可以自行插入一張圖片，或由相關聯圖庫網站直接定取用圖片。   
* 圖示 \(Page Icon\): 這張圖也可 Reference 到網路上的其他 icons。用在 <br/>
    a.Browser 的 Tab Icon。<br/>
    b.Notion Docker 上的辨識圖樣。  
* 內容部分則是以 Block 組成。    

<span>
 {GoogleImage( '1UGq-RhV-UVYy0qX43c6tkDCzNyr4e2ee',  '03_Notion_Page_03_structure.png', {width:'1020px', height:'600px', hidden:true, degree:0})}
</span>&nbsp; &nbsp;&nbsp;<br/>
<span>
 {GoogleImage( '1vcUrcD_GoQZO-hCAGmOR9yvf613fkKnD',  '03_Notion_Page_04_structure.png', {width:'1020px', height:'400px', hidden:true, degree:0})}
</span><br/>

    
### Notion Block: 
* 工作區所有內容都是 Block。由一個六點符號 __ ⁝⁝ __ 帶出。
* Block 操作技巧: 有時會使用複雜的 Block，例如 [Database](Notion_Database) 或是 [Form](Notion_Form) 等結構，此類結構下方似乎有 padding 區塊。若欲在下方附加 Block 時，常會發現無法直接 enter 新增，此時可將鼠標移置 Block 下方一段距離\(約4-5個rows)並注意鼠標變化，若由箭頭變成 I 型時便是WYSIWYG下可插入下一 Block 位置。

<span>
 {GoogleImage( '1Cj7eanYn_RoF_TTdjjP08PmgYMPmLuY1',  'x', {width:'820px', height:'317px', hidden:true, degree:0})}
</span><br/>


### Page 轉換: 
* Notion 可以將 Block 轉成 Page，或是其他程式區塊。__ ⁝⁝ __ > Turn into 
* Mouse over 選項時右側會出現預覽縮圖。

<span>
 {GoogleImage( '1UUhiuSeaPQ1tdHdCGbMgUKD53P9VMoeF',  '03_Notion_Page_07_convert.png', {width:'917px', height:'483px', hidden:true, degree:0})}
</span><br/>

### Pages 種類:注意不同種類的 Page 由不同的 icons 呈現    
* Private Page: 這邊指的是未 Publish 的 Pages。    
* Public Page: 這邊泛指已 Publish 的 Pages。     
* DB Page: Notion 中指的 DB 類似 Windows Access。以表格呈現可直接編輯並建立相關關聯。   
    * Page icon 有 __↗__ 符號的是，__Mentioned Page__。是單純的 Page Link。  
    * <span style={{color: 'red'}}>Page icon 僅單純頁面符號的是，Page 的分支。Link 與 Page 同存亡</span>。刪掉 Link 的話，等同於刪掉 Page  
    * icon 有橫線的是已填內容的 Page。 