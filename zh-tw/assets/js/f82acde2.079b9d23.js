"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[5024],{5823:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>_});var r=o(87462),s=(o(67294),o(3905)),l=o(13848);const n={title:"PostgreSQL \u532f\u51fa Blob \u6b04\u4f4d",description:"Postgres Export Blob to File",keywords:["Postgres","Lob","Export"]},i=void 0,a={unversionedId:"DevTech/PostgreSQL/Postgres_Export_Blob_to_File",id:"DevTech/PostgreSQL/Postgres_Export_Blob_to_File",title:"PostgreSQL \u532f\u51fa Blob \u6b04\u4f4d",description:"Postgres Export Blob to File",source:"@site/docs/DevTech/PostgreSQL/Postgres_Export_Blob_to_File.md",sourceDirName:"DevTech/PostgreSQL",slug:"/DevTech/PostgreSQL/Postgres_Export_Blob_to_File",permalink:"/zh-tw/docs/DevTech/PostgreSQL/Postgres_Export_Blob_to_File",draft:!1,tags:[],version:"current",frontMatter:{title:"PostgreSQL \u532f\u51fa Blob \u6b04\u4f4d",description:"Postgres Export Blob to File",keywords:["Postgres","Lob","Export"]},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL string_agg Function",permalink:"/zh-tw/docs/DevTech/PostgreSQL/PostgreSQL_string_agg_function"},next:{title:"PostgreSQL \u4e0a\u50b3 Blob \u6a94\u6848",permalink:"/zh-tw/docs/DevTech/PostgreSQL/Postgres_Import_Blob_from_File"}},p={},_=[],g={toc:_},c="wrapper";function u(e){let{components:t,...o}=e;return(0,s.kt)(c,(0,r.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u53c3\u8003\u8cc7\u6599"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./Postgres_Import_Blob_from_File"},"PostgreSQL \u4e0a\u50b3 Blob \u6a94\u6848")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./Backup_Restore_BLOB_in_Postgres"},"PostgreSQL Blob \u5099\u4efd\u8207\u56de\u5b58"))),(0,s.kt)("h1",{id:"postgresql-\u532f\u51fa-blob-\u6b04\u4f4d\u81f3\u6a94\u6848"},"PostgreSQL \u532f\u51fa Blob \u6b04\u4f4d\u81f3\u6a94\u6848"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"PostgreSQL \u8207  Oracle \u5728\u5b58 Lob \u8cc7\u6599\u6642\u65b9\u6cd5\u8fe5\u7570\u3002 ",(0,s.kt)("br",null),"\nPostgres \u662f\u5c07\u8cc7\u6599\u5b58\u5728 lob table \u4e2d\uff0c\u8cc7\u6599\u8868\u50c5\u662f\u5efa\u7acb\u76f8\u95dc reference \uff0c ",(0,s.kt)("br",null),"\n\u6240\u4ee5\u82e5\u8981\u532f\u51fa Lob Object \u5167\u5bb9\u7684\u8a71\uff0c\u5247\u5fc5\u9808\u501f\u52a9 Postgres \u7684\u539f\u751f\u65b9\u6cd5 ",(0,s.kt)("strong",{parentName:"p"},"lo_export"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"function name: lo_export"),(0,s.kt)("li",{parentName:"ul"},"file_content : column name"),(0,s.kt)("li",{parentName:"ul"},"Submission_Case : table with file_content column")),(0,s.kt)(l.dn,{text:"\nSELECT lo_export(file_content, '/tmp/Export_File_To.csv') FROM Submission_Case where id = 719;\n",language:"sql",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,s.kt)("h1",{id:"postgresql-\u532f\u5165-lob-\u6a94\u6848\u81f3\u8cc7\u6599\u8868"},"PostgreSQL \u532f\u5165 Lob \u6a94\u6848\u81f3\u8cc7\u6599\u8868"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"./Postgres_Import_Blob_from_File"},"\u53c3\u8003 Postgres \u81ea console \u532f\u5165\u6307\u5b9a\u8cc7\u6a94\u6848\u81f3\u8cc7\u6599\u8868"))))}u.isMDXComponent=!0}}]);