"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[1489],{97322:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"PostgreSQL string_agg Function",description:"PostgreSQL\u6279\u6b21\u5408\u4f75group by\u5f8c,\u7d44\u5167\u8cc7\u6599",keywords:["postgresql","string_agg"]},o="PostgreSQL string_agg() \u5408\u4f75\u591a\u7b46 Records \u7684\u540c\u6b04\u4f4d\u503c",g={unversionedId:"DevTech/PostgreSQL/PostgreSQL_string_agg_function",id:"DevTech/PostgreSQL/PostgreSQL_string_agg_function",title:"PostgreSQL string_agg Function",description:"PostgreSQL\u6279\u6b21\u5408\u4f75group by\u5f8c,\u7d44\u5167\u8cc7\u6599",source:"@site/docs/DevTech/PostgreSQL/PostgreSQL_string_agg_function.md",sourceDirName:"DevTech/PostgreSQL",slug:"/DevTech/PostgreSQL/PostgreSQL_string_agg_function",permalink:"/docs/DevTech/PostgreSQL/PostgreSQL_string_agg_function",draft:!1,tags:[],version:"current",frontMatter:{title:"PostgreSQL string_agg Function",description:"PostgreSQL\u6279\u6b21\u5408\u4f75group by\u5f8c,\u7d44\u5167\u8cc7\u6599",keywords:["postgresql","string_agg"]},sidebar:"totem_sidebar",previous:{title:"PostgreSQL FDW Setting",permalink:"/docs/DevTech/PostgreSQL/PostgreSQL_FDW_Setting"},next:{title:"PostgreSQL \u532f\u51fa Blob \u6b04\u4f4d",permalink:"/docs/DevTech/PostgreSQL/Postgres_Export_Blob_to_File"}},s={},p=[],i={toc:p},u="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postgresql-string_agg-\u5408\u4f75\u591a\u7b46-records-\u7684\u540c\u6b04\u4f4d\u503c"},"PostgreSQL string_agg() \u5408\u4f75\u591a\u7b46 Records \u7684\u540c\u6b04\u4f4d\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6279\u6b21\u5408\u4f75 group by \u5f8c,\u6bcf\u55ae\u4e00\u7d44\u5167\u8cc7\u6599\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5448\u73fe group by \u7d50\u679c\u7684\u96c6\u5408\u8cc7\u8a0a\u3002  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u67e5\u8a62\u6642\u82e5\u6709\u4f7f\u7528 group by \u8a9e\u6cd5\u6642\u6703\u4f9d\u6307\u5b9a\u689d\u4ef6\u5c07\u67e5\u51fa\u7684\u8cc7\u6599\u505a\u5206\u7d44",(0,r.kt)("br",{parentName:"p"}),"\n","\u800c\u540c\u4e00\u7d44\u4e2d\u5206\u7d44\u689d\u4ef6\u5916\u5176\u4ed6\u6b04\u4f4d\uff0c\u82e5\u60f3\u986f\u793a\u6642\u53ef\u4ee5\u5229\u7528 string_agg (\u6b04\u4f4d\u540d, \u4e32\u63a5\u7b26\u865f) \u4f86\u53d6\u5f97 ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u60c5\u5883:",(0,r.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982\u6709\u4e00\u500b Book table\uff0cbook FK \u81f3 Author table",(0,r.kt)("br",{parentName:"p"}),"\n","\u4eca\u5929\u60f3\u5217\u51fa \u6bcf\u4e00\u4f4d\u4f5c\u8005\u6240\u8457\u7684\u66f8\u540d\u6642\uff0c\u53ef\u63a1\u7528 string_agg \u65b9\u6cd5\uff0c\u4f86\u5c07\u4e0d\u540c book records \u7684\u66f8\u540d\u6574\u5728\u4e00\u8d77\u3002    ")),(0,r.kt)("p",null,"Book table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"ISBN"),(0,r.kt)("th",{parentName:"tr",align:null},"Author_ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5c0f\u91d1\u9b5a\u9003\u8d70\u4e86"),(0,r.kt)("td",{parentName:"tr",align:null},"1234"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6211\u7684\u670b\u53cb"),(0,r.kt)("td",{parentName:"tr",align:null},"2234"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u746a\u8482\u9054"),(0,r.kt)("td",{parentName:"tr",align:null},"3234"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9c77\u9b5a\u6015\u6015\u3001\u7259\u91ab\u6015\u6015"),(0,r.kt)("td",{parentName:"tr",align:null},"4234"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"Author table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Author"),(0,r.kt)("th",{parentName:"tr",align:null},"Pen_Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e94\u5473\u592a\u90ce"),(0,r.kt)("td",{parentName:"tr",align:null},"\u592a\u90ce")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f85\u723e\u5fb7\xb7\u9054\u723e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f85\u5fb7\u9054\u723e")))),(0,r.kt)("h1",{id:"string_agg-\u76f8\u95dc\u53c3\u6578"},"string_agg \u76f8\u95dc\u53c3\u6578"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"string_agg():  "),(0,r.kt)("li",{parentName:"ul"},"expression : \u88ab\u7d44\u5408\u7684 column\u3002expression \u6240\u4ee5\u53ef\u4ee5\u7d66\u4e88\u9032\u4e00\u6b65\u8b8a\u5316\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ex: a.author || '-' || a.pen_name"))),(0,r.kt)("li",{parentName:"ul"},"separator : "),(0,r.kt)("li",{parentName:"ul"},"order by : \u9019\u908a\u6307\u7684\u662f aggregated items \u7d44\u5408\u6642\u7684\u6392\u5e8f\u3002\u4e0b\u65b9\u4f8b\u5b50\u4fbf\u662f\u4f9d\u64da\u66f8\u540d\u6392\u5e8f\u5f8c\u7d44\u5408\u6210\u4e00\u500b\u6b04\u4f4d\u3002")),(0,r.kt)("p",null,"syntax: ",(0,r.kt)("span",{style:{color:"#0044FF"}},"\u6ce8\u610f!!")," separator ","[order_by_clause]"," \u4e4b\u9593 ",(0,r.kt)("strong",{parentName:"p"},"\u6c92\u6709")," \u9017\u865f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"STRING_AGG ( expression, separator ","[order_by_clause]"," )")),(0,r.kt)("p",null,"\u7bc4\u4f8b:   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select b.Author_ID, a.author, \n       string_agg(name, ',' order by name desc ) as book_names, \n       from Book b \n         left join Author a\n           on b.Author_ID = a.id\n       group by a.author, b.Author_ID;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Author_ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Author"),(0,r.kt)("th",{parentName:"tr",align:null},"book_names"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e94\u5473\u592a\u90ce"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9c77\u9b5a\u6015\u6015\u3001\u7259\u91ab\u6015\u6015,\u6211\u7684\u670b\u53cb,\u5c0f\u91d1\u9b5a\u9003\u8d70\u4e86")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f85\u723e\u5fb7 \u9054\u723e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u746a\u8482\u9054")))),(0,r.kt)("h1",{id:"string_agg-expression-\u53c3\u6578\u7bc4\u4f8b"},"string_agg expression \u53c3\u6578\u7bc4\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u53d6 JSONB values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  string_agg(jsonb_column->>'key_name', ',') as alias_name  \n    \n  select patient  \n     string_agg(ecd->>'inpatient_date', ',') as ip_dates  \n     from clinical_record\n     group by patient;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b04\u4f4d\u5148\u5408\u4f75\u518d\u4e32\u63a5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    string_agg(a.first_name || ' ' || a.last_name, ',' ) as full_names, \n")))}k.isMDXComponent=!0}}]);