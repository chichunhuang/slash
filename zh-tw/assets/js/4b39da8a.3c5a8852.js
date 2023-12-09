"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[8922],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=i(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||l;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,c=new Array(l);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var i=2;i<l;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const l={title:"Insert from Select",description:"Insert from select result",keywords:["SQL","copy","insert from select"]},c="\u4e32\u63a5\u67e5\u8a62\u7d50\u679c\u8207\u65b0\u589e\u8cc7\u6599",a={unversionedId:"DevTech/PostgreSQL/SQL/Insert_From_Selection_Values",id:"DevTech/PostgreSQL/SQL/Insert_From_Selection_Values",title:"Insert from Select",description:"Insert from select result",source:"@site/docs/DevTech/PostgreSQL/SQL/Insert_From_Selection_Values.md",sourceDirName:"DevTech/PostgreSQL/SQL",slug:"/DevTech/PostgreSQL/SQL/Insert_From_Selection_Values",permalink:"/zh-tw/docs/DevTech/PostgreSQL/SQL/Insert_From_Selection_Values",draft:!1,tags:[],version:"current",frontMatter:{title:"Insert from Select",description:"Insert from select result",keywords:["SQL","copy","insert from select"]},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL \u4e0a\u50b3 Blob \u6a94\u6848",permalink:"/zh-tw/docs/DevTech/PostgreSQL/Postgres_Import_Blob_from_File"},next:{title:"INSERT INTO VS SELECT INTO",permalink:"/zh-tw/docs/DevTech/PostgreSQL/SQL/Insert_Into_vs_Select_Into"}},s={},i=[],u={toc:i},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e32\u63a5\u67e5\u8a62\u7d50\u679c\u8207\u65b0\u589e\u8cc7\u6599"},"\u4e32\u63a5\u67e5\u8a62\u7d50\u679c\u8207\u65b0\u589e\u8cc7\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8cc7\u6599\u8655\u7406\u6642\u6216\u662f\u532f\u5165\u5916\u90e8\u8cc7\u6599\u4e26\u8207\u5167\u90e8\u8cc7\u6599\u6574\u5408\u6210\u4e00\u500b Table \u6642\u5e38\u6703\u7528\u5230\u3002\u901a\u5e38\u6703\u4f7f\u7528\u5728 psql \u4e4b\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ul"},"insert into \u662f\u7528\u4f86 ",(0,o.kt)("span",{style:{color:"#FF1100"}},"copy data + insert")," \u5230\u53e6\u4e00\u500b table\u3002\u8207 Select into \u4e26\u4e0d\u76f8\u540c\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"insert  into  \u80cc\u5f8c\u662f\u6bcf\u7b46 record \u4f9d\u6b21 insert\n\u6240\u4ee5 nextval('seq_name') \u53ef\u57f7\u884c\u591a\u6b21"),(0,o.kt)("p",{parentName:"blockquote"},"select into \u5247\u50c5\u6703 select \u4e00\u6b21\uff0c\u56e0\u6b64\u53e5\u5b50\u4e2d\u51fa\u73fe\u7684 function \u50c5\u6703\u57f7\u884c\u4e00\u6b21\n\u4ee5\u4e0a\u65b9\u4f8b\u5b50\u8aaa\u660e :\n\u7576\u4f7f\u7528 select into \u62f7\u8c9d table \u6642\uff0c\u82e5\u4f7f\u7528 nextval('seq_name') \u5247\u6240\u6709 record \u7684 seq \u6b04\u4f4d\u503c\u6703\u76f8\u540c\u3002")),(0,o.kt)("h1",{id:"sql-\u5c07\u67e5\u8a62\u7d50\u679c\u9935\u7d66\u53e6\u4e00\u500b-table"},"SQL \u5c07\u67e5\u8a62\u7d50\u679c\u9935\u7d66\u53e6\u4e00\u500b Table"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INSERT INTO table2 (column1, column2, column3, ...)\n    SELECT column1, column2, column3, ...\n    FROM table1\nWHERE condition;\n")),(0,o.kt)("h1",{id:"\u5c07\u6574\u500b-table-\u5167\u5bb9\u8907\u88fd"},"\u5c07\u6574\u500b Table \u5167\u5bb9\u8907\u88fd"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u9700\u6bd4\u8f03 insert into v.s. select into \u5dee\u7570 ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INSERT INTO table2\n    SELECT * FROM table1\nWHERE condition;\n")))}m.isMDXComponent=!0}}]);