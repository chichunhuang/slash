"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[29],{94166:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"PostgreSQL Update JSONB Column",description:"\u66f4\u6539 PostgreSQL JSONB \u6b04\u4f4d\u8cc7\u6599\u503c",keywords:["JSONB","PostgreSQL"]},o="\u66f4\u6539 PostgreSQL JSONB \u6b04\u4f4d\u8cc7\u6599\u503c",s={unversionedId:"DevTech/PostgreSQL/JSONB/PostgreSQL_Update_JSONB_Column",id:"DevTech/PostgreSQL/JSONB/PostgreSQL_Update_JSONB_Column",title:"PostgreSQL Update JSONB Column",description:"\u66f4\u6539 PostgreSQL JSONB \u6b04\u4f4d\u8cc7\u6599\u503c",source:"@site/docs/DevTech/PostgreSQL/JSONB/PostgreSQL_Update_JSONB_Column.md",sourceDirName:"DevTech/PostgreSQL/JSONB",slug:"/DevTech/PostgreSQL/JSONB/PostgreSQL_Update_JSONB_Column",permalink:"/en/docs/DevTech/PostgreSQL/JSONB/PostgreSQL_Update_JSONB_Column",draft:!1,tags:[],version:"current",frontMatter:{title:"PostgreSQL Update JSONB Column",description:"\u66f4\u6539 PostgreSQL JSONB \u6b04\u4f4d\u8cc7\u6599\u503c",keywords:["JSONB","PostgreSQL"]},sidebar:"totem_sidebar",previous:{title:"PostgreSQL Format JSONB Object",permalink:"/en/docs/DevTech/PostgreSQL/JSONB/PostgreSQL_Format_JSONB_Object"},next:{title:"PostgreSQL find value by Attr from JSONB",permalink:"/en/docs/DevTech/PostgreSQL/JSONB/Postgresql_find_value_by_Attr_of_JSONB_column"}},i={},p=[],u={toc:p},N="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(N,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u66f4\u6539-postgresql-jsonb-\u6b04\u4f4d\u8cc7\u6599\u503c"},"\u66f4\u6539 PostgreSQL JSONB \u6b04\u4f4d\u8cc7\u6599\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u60c5\u5883: Table \u5165\u5b78\u8003\u8a66\u8cc7\u6599\u8868(Entrance_Examination)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"id(bigint)"),(0,r.kt)("th",{parentName:"tr",align:null},"Admission_Ticket(character)"),(0,r.kt)("th",{parentName:"tr",align:null},"raw_data(jsonb)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"AAA001"),(0,r.kt)("td",{parentName:"tr",align:null},'{"City":"TPE", "School":"NTU" , "Score":"60"  }')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"BBB001"),(0,r.kt)("td",{parentName:"tr",align:null},'{"City":"TYN", "School":"NCHU", "Score":"70" }')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"CCC001"),(0,r.kt)("td",{parentName:"tr",align:null},'{"City":"HSZ", "School":"NCCU", "Score":"80" }')))),(0,r.kt)("h1",{id:"\u67e5\u8a62-jsonb-\u5c6c\u6027\u8cc7\u6599"},"\u67e5\u8a62 JSONB \u5c6c\u6027\u8cc7\u6599"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ->> \u7b26\u865f\u9032\u884c JSONB \u6b04\u4f4d\u4e0b\u5c6c\u6027\u503c\u67e5\u8a62")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"  select raw_data ->> 'School' as \"School\" from Entrance_Examination where Admission_Ticket = 'AAA001';\n")),(0,r.kt)("h1",{id:"\u66f4\u6539-jsonb-\u65b9\u5f0f"},"\u66f4\u6539 JSONB \u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5217\u65b9\u5f0f\u4f86\u505a\u5c6c\u6027\u503c\u4fee\u6539\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"jsonb_set()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"jsonb_insert()")," ")),(0,r.kt)("h1",{id:"\u66f4\u6539-jsonb-\u5c6c\u6027\u503c\u85c9\u7531-jsonb_set"},"\u66f4\u6539 JSONB \u5c6c\u6027\u503c\u85c9\u7531 jsonb_set()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jsonb_set \u7f6e\u5165\u7269\u4ef6\uff0c\u53d6\u4ee3\u65e2\u6709\u8cc7\u6599, Replacement  "),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f: jsonb column \u81f3\u5c11\u8981\u5148\u6709\u4e00\u500b\u7a7a\u7269\u4ef6(\u4e0d\u80fd\u70ba null)\u624d\u80fd\u9032\u884c set\u3002  "),(0,r.kt)("li",{parentName:"ul"},"create_if_missing \u9810\u8a2d\u70ba true\uff0c\u7576\u7121\u6b64 attribute \u6642\uff0cupdate \u8b8a insert\u3002  ")),(0,r.kt)("p",null,"  \u8a9e\u6cd5:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    jsonb_set(\n      target JSONB, path TEXT[], new_value JSONB[, create_if_missing BOOLEAN]\n    ) -> JSONB\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0b\u65b9 replacement \u7bc4\u4f8b: school NTU \u53d6\u4ee3\u6210 NCHU",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c07\u5b78\u6821\u6539\u6210 NCHU (JSON \u7d50\u69cb\u672a\u6539\u8b8a)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'   update Entrance_Examination set raw_data = jsonb_set( raw_data, \'{School}\', \'"NCHU"\'::jsonb )\n           where Admission_Ticket = \'AAA001\';\n           \n--\x3e\n{\n  "City":"TPE", \n  "School":"NCHU" , \n  "Score":"60"  \n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c07\u5b78\u6821\u6539\u6210 NCHU\uff0c\u4e26\u8a2d\u5b9a\u5206\u6821\u70ba Taipei (School \u6539\u4e00\u500b JSON \u7d50\u69cb)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'   update Entrance_Examination set raw_data = jsonb_set( raw_data, \'{School}\', \'{"Campus":"NCHU", "Branch_Campus":"Taipei"}\' )\n           where Admission_Ticket = \'AAA001\';\n           \n--\x3e\n"{\n    "City": "TPE",\n    "Score": "60",\n    "School": {\n        "Campus": "NCHU",\n        "Bbranch_Ccampus": "Taipei"\n    }\n}"           \n')),(0,r.kt)("h1",{id:"\u65b0\u589e--jsonb-\u5c6c\u6027\u503c\u85c9\u7531-jsonb_insert"},"\u65b0\u589e  JSONB \u5c6c\u6027\u503c\u85c9\u7531 jsonb_insert()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"    jsonb_insert(\n      target JSONB, path TEXT[], new_value JSONB[, insert_after BOOLEAN]\n    ) -> JSONB\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"update Entrance_Examination set raw_data = jsonb_insert( raw_data, '{Country}', '\"TW\"'::jsonb )\n           where Admission_Ticket = 'AAA001';\n")),(0,r.kt)("h1",{id:"\u88dc\u9f4a-jsonb-\u5c6c\u6027\u503c\u9577\u5ea6"},"\u88dc\u9f4a JSONB \u5c6c\u6027\u503c\u9577\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5206\u6578\u88dc0\u5230\u56db\u4f4d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--\u88dc\u96f6\uff0c\u8f49\u63db\u70ba jsonb \u505a update\nupdate Entrance_Examination \n     set raw_data = jsonb_set( raw_data, '{Score}', quote_ident(lpad(raw_data ->> 'Score', 4, '0'))::jsonb )\n     where Admission_Ticket = 'AAA001';\n")),(0,r.kt)("h1",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/40583639/update-multiple-values-in-a-jsonb-data-in-postgresql"},'\u6279\u6b21\u66f4\u6539 Jsonb \u7684\u5167\u5bb9: \u4f7f\u7528 "||"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/9.5/functions-json.html"},"https://www.postgresql.org/docs/9.5/functions-json.html"))))}m.isMDXComponent=!0}}]);