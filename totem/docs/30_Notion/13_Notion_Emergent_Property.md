---
title: Notion 資料集的集合性質
description: Notion Emergent Property
keywords: [Notion,Rollup,SubItem,Calculation]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage"

## Notion 資料表的突現性質
> 資料表的突現性質 Database Emergent Property 這個名詞是我自創的......  
> 借用生物學的 Emergent Property 概念。  
> 我指的是，當多筆資料收納成資料集時所先出現的一些特性。  
> 例如: 總和、平均值、最大/最小值等特性。  
> Notion 在功能實作上，表現在 Rollup、Relation、Calculations、Subitem、Chart 等相關實作之中。  
> 
> 類似特性還包含 Formula vs Filter，在此一併討論。  

## 一句話解釋: <span id="Notion_Example">&nbsp;</span>

* __Relation__: 指的是 Notion Database 中的 PK/FK 對應 <span style={{color: '#0044FF'}}> __關係__ </span>。主表中列出子表 PK __清單的欄位__。     
* __Rollup__: 將一對多關聯式資料表中，多方(FK)的資料彙總成單一數值。在主表將 <span style={{color: '#0044FF'}}> __Relation 摘要__ </span> 成圖或數值。
* __Chart__: 將 Database 資料分組後，以 <span style={{color: '#0044FF'}}> __圖表顯示__ </span> 各組的數量或百分比。 
* __Calculation__: 將 Database 指定 <span style={{color: '#0044FF'}}> __單一 Column__ </span> 進行__加總__。
* __Formula__: 將 Database 的 <span style={{color: '#0044FF'}}> __單一 Record Row__ </span> 進行 columns 間的__計算__。  
* __SubItem__: 指的是一個 Record 可再細分的子 records。 
* __Filter__: 為 Database 做客製化呈現，隱藏部分資訊。

> 情境解說: 下面是房屋、所有人與稅金間的關係。  
> Houses 列出稅金與所有權人  
> Tax Database 則以家庭為單位計算整家人所需支付的總稅金。  

___Table1:主表___
<div>
 {GoogleImage( '1erPa6e8DMX5FRQtIlyce3Yo3t9fB3fQR',  '13_Notion_Emergent_Prop_01.png' , {width:'652px', height:'178px', hidden:true, degree:0})}
</div>

___Table2:關聯表___
<div>
 {GoogleImage( '19ebUG8NWBT404e0ocdZH_-XTrI9WlYMH',  '13_Notion_Emergent_Prop_02.png' , {width:'652px', height:'305px', hidden:true, degree:0})}
</div>

> 相關設定

## [Relation Property](./Notion_Database#notion_database_Relation):
* Table1 中的 Houses 欄位，__僅能單純列出 Table1/Table2 間關系__。主表預設列出關聯表的 Name 欄位。
* 主 'Houses' 與關聯表'不動產' 建立關聯。
* 呈現上僅能以 __Name__ 做辨別。

<div>
 {GoogleImage( '1X8OPkIJ3fyzO9VnfqXSjVT8l5xr3YnVD',  '13_Notion_Emergent_Prop_08.png' , {width:'631px', height:'310px', hidden:true, degree:0})}
</div>

## [Rollup Property](./Notion_Database#notion_database_rollup):
* Table1 中的 'Rollup 欄'位及'個別房屋稅金欄位'。  
* Rollup 主要是將關聯表中的資料作彙總。此處僅簡單列出 Name/稅金。可依實際需要更換顯示__欄位__內容。
* 或依欄位特性做不同計算或 UI 呈現。

___以 Property 呈現___
<div>
 {GoogleImage( '1OUQQuWwzsD17SMQBg43cxzi5cYUGMLG7',  '13_Notion_Emergent_Prop_03.png' , {width:'453px', height:'308px', hidden:true, degree:0})}
</div>

___以 圖表/數值 呈現___
<div>
 {GoogleImage( '1ousLa76Hpuyof9zzSg0UWBMCfWp-JJq7',  '13_Notion_Emergent_Prop_04.png' , {width:'652px', height:'331px', hidden:true, degree:0})}
</div>


## [Chart View](./Notion_View_Chart):
* Chart 是一種 Database View。用來以圖表呈現單一 Database 的狀態。

<div>
 {GoogleImage( '1e9sAmBpUikKpY45Ss15bKWNgncTkmB3r',  '13_Notion_Emergent_Prop_05.png' , {width:'652px', height:'479px', hidden:true, degree:0})}
</div>


## [Formula](./Notion_Database#notion_Formula):
* 用來透過函數運算欄位值，較進階且功能強。例如:Table1 中的 '個人總稅金'，'含子女總稅金'。
* [Formula Property](./Notion_Database#notion_Formula)
* 註: Calculation 預設計算的資料集為 Database Rows，SubItems 不列入計算。下方範例將 SubItems 納入計算，使用時可供參考。

___Table1 Forlumas___

```
    個人總稅金
    sum(prop("個別房屋稅金"))
```

```    
    含子女總稅金(一併計算 SubItems)
    sum(  prop("Sub-item").flat().map(current.prop("個人總稅金")) , sum(prop("個別房屋稅金")))
```

<div>
 {GoogleImage( '1SRhCX_BAcicLyhoHtAxPG0EfpjJsB_Ng',  '13_Notion_Emergent_Prop_06.png' , {width:'652px', height:'203px', hidden:true, degree:0})}
</div>

## [SubItems](./Notion_Database#notion_database_Subitem) 
* 通常用於 Database __Row 拆分成多個 SubRows__，Main Task 拆成多個 SubTasks。
* 與 Relation 類似，屬於資料結構變體。
* 注意: SubItem 預設使用上不會幫當作 Row，所以無 Row 多數特性。在 Calculate / Rollup / Chart 等都需額外設定。  

<div>
 {GoogleImage( '1V5J2E-rSRzGvI7Y2SBLxfARz9ethmF0p',  '13_Notion_Emergent_Prop_07.png' , {width:'344px', height:'380px', hidden:true, degree:0})}
</div>


## [Filter](./Notion_Database#notion_database_Filter) 
* 同一份 DB 資料，可以使用在不同地方。Filter 則可以為此客製不同呈現方式。  

_Filter 建立_
<span>
 {GoogleImage( '1CTRtXRns1xJ8FlB2zDnsd2FJh3sEmybK',  'insect_totem_logo_70x70.jpg', {width:'461px', height:'455px', hidden:true, degree:0})}
</span><br/>

_Advance Filter 設定_
<span>
 {GoogleImage( '1y3yPVcxPrev63mZ47JcpQgPZhDICGvq4',  'insect_totem_logo_70x70.jpg', {width:'672px', height:'371px', hidden:true, degree:0})}
</span><br/>

## 突現性質比較表

| **功能名稱** | **資料來源** | **資料標的** | **運作方式** | **主要功能與目的** |
| ---- | ---- | ---- | ---- | ---- |
| **Relation** | Databases 間 | 連結不同資料庫中的項目 | 透過關聯欄位建立連結 | 建立資料庫間的關聯性，使不同資料庫的項目相互參照 |
| **Rollup** | Relation 欄位間 | 被關聯的資料 | 透過 Relation 取得的資料進行匯總計算 | 將關聯資料進行計算，例如計數、平均、最小/最大值等 |
| **Calculation** | 單一 Column | 數值或日期欄位 | 直接在資料庫內的屬性欄位進行計算 | 提供基本統計，如總和、平均值、計數等 |
| **Subitem** | Row | 隸屬於父項目的子項目 | 透過層級關係建立階層式結構 | 管理子任務、子內容，使資料層次更清晰 |
| **Chart View** | 單一 Database | 資料欄位 | 以視覺化圖表呈現資料 | 讓使用者透過圖表方式分析和比較資料 |
| **Formula** | Notion Database | 文字、數字、日期等欄位 | 透過函數運算欄位值 | 進行自動計算，如條件判斷、數值運算、字串處理等 |
| **Filter** | 單一 Database | Database 內的項目 | 設定條件篩選出符合條件的項目 | 控制資料庫顯示內容，以利於管理與查找 |