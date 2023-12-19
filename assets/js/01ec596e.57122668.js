"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[7086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>S});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,S=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(S,l(l({ref:t},p),{},{components:n})):r.createElement(S,l({ref:t},p))}));function S(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"PostgreSQL Update JSONB Column",description:"\u66f4\u6539 PostgreSQL JSONB \u6b04\u4f4d\u8cc7\u6599\u503c",keywords:["JSONB","PostgreSQL"]},l="\u66f4\u6539 PostgreSQL JSONB \u6b04\u4f4d\u8cc7\u6599\u503c",s={unversionedId:"DevTech/PostgreSQL/PostgreSQL_Update_JSONB_Column",id:"DevTech/PostgreSQL/PostgreSQL_Update_JSONB_Column",title:"PostgreSQL Update JSONB Column",description:"\u66f4\u6539 PostgreSQL JSONB \u6b04\u4f4d\u8cc7\u6599\u503c",source:"@site/docs/DevTech/PostgreSQL/PostgreSQL_Update_JSONB_Column.md",sourceDirName:"DevTech/PostgreSQL",slug:"/DevTech/PostgreSQL/PostgreSQL_Update_JSONB_Column",permalink:"/docs/DevTech/PostgreSQL/PostgreSQL_Update_JSONB_Column",draft:!1,tags:[],version:"current",frontMatter:{title:"PostgreSQL Update JSONB Column",description:"\u66f4\u6539 PostgreSQL JSONB \u6b04\u4f4d\u8cc7\u6599\u503c",keywords:["JSONB","PostgreSQL"]},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL FDW Setting",permalink:"/docs/DevTech/PostgreSQL/PostgreSQL_FDW_Setting"},next:{title:"PostgreSQL string_agg Function",permalink:"/docs/DevTech/PostgreSQL/PostgreSQL_string_agg_function"}},i={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u66f4\u6539-postgresql-jsonb-\u6b04\u4f4d\u8cc7\u6599\u503c"},"\u66f4\u6539 PostgreSQL JSONB \u6b04\u4f4d\u8cc7\u6599\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60c5\u5883: Table \u5165\u5b78\u8003\u8a66\u8cc7\u6599\u8868(Entrance_Examination)")),(0,a.kt)("p",null,'|  id(bigint)  |  Admission_Ticket(character)  |             raw_data(jsonb)        |\n|      1       |           AAA001              |  {"City":"TPE", "School":"NTU" , "Score":"60"  }  |\n|      2       |           BBB001              |  {"City":"TYN", "School":"NCHU", "Score":"70" }   |\n|      3       |           CCC001              |  {"City":"HSZ", "School":"NCCU", "Score":"80" }   |'),(0,a.kt)("h1",{id:"\u67e5\u8a62-jsonb-\u5c6c\u6027\u8cc7\u6599"},"\u67e5\u8a62 JSONB \u5c6c\u6027\u8cc7\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ->> \u7b26\u865f\u9032\u884c JSONB \u6b04\u4f4d\u4e0b\u5c6c\u6027\u503c\u67e5\u8a62")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"  select raw_data ->> 'School' as \"School\" from Entrance_Examination where Admission_Ticket = 'AAA001';\n")),(0,a.kt)("h1",{id:"\u66f4\u6539-jsonb-\u65b9\u5f0f"},"\u66f4\u6539 JSONB \u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5217\u65b9\u5f0f\u4f86\u505a\u5c6c\u6027\u503c\u4fee\u6539\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"jsonb_set()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"jsonb_insert()")," ")),(0,a.kt)("h1",{id:"\u66f4\u6539-jsonb-\u5c6c\u6027\u503c\u85c9\u7531-jsonb_set"},"\u66f4\u6539 JSONB \u5c6c\u6027\u503c\u85c9\u7531 jsonb_set()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"jsonb_set \u7f6e\u5165\u7269\u4ef6\uff0c\u53d6\u4ee3\u65e2\u6709\u8cc7\u6599, Replacement  "),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f: jsonb column \u81f3\u5c11\u8981\u5148\u6709\u4e00\u500b\u7a7a\u7269\u4ef6(\u4e0d\u80fd\u70ba null)\u624d\u80fd\u9032\u884c set\u3002  "),(0,a.kt)("li",{parentName:"ul"},"create_if_missing \u9810\u8a2d\u70ba true\uff0c\u7576\u7121\u6b64 attribute \u6642\uff0cupdate \u8b8a insert\u3002  ")),(0,a.kt)("p",null,"  \u8a9e\u6cd5:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    jsonb_set(\n      target JSONB, path TEXT[], new_value JSONB[, create_if_missing BOOLEAN]\n    ) -> JSONB\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0b\u65b9 replacement \u7bc4\u4f8b: school NTU \u53d6\u4ee3\u6210 NCHU",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c07\u5b78\u6821\u6539\u6210 NCHU (JSON \u7d50\u69cb\u672a\u6539\u8b8a)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'   update Entrance_Examination set raw_data = jsonb_set( raw_data, \'{School}\', \'"NCHU"\'::jsonb )\n           where Admission_Ticket = \'AAA001\';\n           \n--\x3e\n{\n  "City":"TPE", \n  "School":"NCHU" , \n  "Score":"60"  \n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c07\u5b78\u6821\u6539\u6210 NCHU\uff0c\u4e26\u8a2d\u5b9a\u5206\u6821\u70ba Taipei (School \u6539\u4e00\u500b JSON \u7d50\u69cb)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'   update Entrance_Examination set raw_data = jsonb_set( raw_data, \'{School}\', \'{"Campus":"NCHU", "Branch_Campus":"Taipei"}\' )\n           where Admission_Ticket = \'AAA001\';\n           \n--\x3e\n"{\n    "City": "TPE",\n    "Score": "60",\n    "School": {\n        "Campus": "NCHU",\n        "Bbranch_Ccampus": "Taipei"\n    }\n}"           \n')),(0,a.kt)("h1",{id:"\u65b0\u589e--jsonb-\u5c6c\u6027\u503c\u85c9\u7531-jsonb_insert"},"\u65b0\u589e  JSONB \u5c6c\u6027\u503c\u85c9\u7531 jsonb_insert()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"    jsonb_insert(\n      target JSONB, path TEXT[], new_value JSONB[, insert_after BOOLEAN]\n    ) -> JSONB\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"update Entrance_Examination set raw_data = jsonb_insert( raw_data, '{Country}', '\"TW\"'::jsonb )\n           where Admission_Ticket = 'AAA001';\n")),(0,a.kt)("h1",{id:"\u88dc\u9f4a-jsonb-\u5c6c\u6027\u503c\u9577\u5ea6"},"\u88dc\u9f4a JSONB \u5c6c\u6027\u503c\u9577\u5ea6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5206\u6578\u88dc0\u5230\u56db\u4f4d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--\u88dc\u96f6\uff0c\u8f49\u63db\u70ba jsonb \u505a update\nupdate Entrance_Examination \n     set raw_data = jsonb_set( raw_data, '{Score}', quote_ident(lpad(raw_data ->> 'Score', 4, '0'))::jsonb )\n     where Admission_Ticket = 'AAA001';\n")),(0,a.kt)("h1",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/40583639/update-multiple-values-in-a-jsonb-data-in-postgresql"},'\u6279\u6b21\u66f4\u6539 Jsonb \u7684\u5167\u5bb9: \u4f7f\u7528 "||"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/9.5/functions-json.html"},"https://www.postgresql.org/docs/9.5/functions-json.html"))))}m.isMDXComponent=!0}}]);