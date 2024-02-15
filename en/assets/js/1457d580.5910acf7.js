"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[4960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>S});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(r),f=n,S=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return r?o.createElement(S,a(a({ref:t},c),{},{components:r})):o.createElement(S,a({ref:t},c))}));function S(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,a[1]=p;for(var i=2;i<l;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const l={title:"PosgreSQL copy from CSV",description:"\u81ea CSV \u6a94\u532f\u5165\u8cc7\u6599",keywords:["postgresql","copy","CSV"]},a="\u81ea CSV \u6a94\u532f\u5165\u8cc7\u6599",p={unversionedId:"DevTech/PostgreSQL/PosgreSQL_copy_from_CSV",id:"DevTech/PostgreSQL/PosgreSQL_copy_from_CSV",title:"PosgreSQL copy from CSV",description:"\u81ea CSV \u6a94\u532f\u5165\u8cc7\u6599",source:"@site/docs/DevTech/PostgreSQL/PosgreSQL_copy_from_CSV.md",sourceDirName:"DevTech/PostgreSQL",slug:"/DevTech/PostgreSQL/PosgreSQL_copy_from_CSV",permalink:"/en/docs/DevTech/PostgreSQL/PosgreSQL_copy_from_CSV",draft:!1,tags:[],version:"current",frontMatter:{title:"PosgreSQL copy from CSV",description:"\u81ea CSV \u6a94\u532f\u5165\u8cc7\u6599",keywords:["postgresql","copy","CSV"]},sidebar:"tutorialSidebar",previous:{title:"PosgreSQL copy CSV to table",permalink:"/en/docs/DevTech/PostgreSQL/PosgreSQL_copy_CSV_to_table"},next:{title:"PostgreSQL FDW Setting",permalink:"/en/docs/DevTech/PostgreSQL/PostgreSQL_FDW_Setting"}},s={},i=[{value:"import.sql \u5167\u5bb9\u7bc4\u4f8b",id:"importsql-\u5167\u5bb9\u7bc4\u4f8b",level:2},{value:"SQL Shell(psql) \u767b\u5165\u5f8c\u57f7\u884c\u65b9\u5f0f",id:"sql-shellpsql-\u767b\u5165\u5f8c\u57f7\u884c\u65b9\u5f0f",level:2},{value:"psql \u57f7\u884c\u65b9\u5f0f",id:"psql-\u57f7\u884c\u65b9\u5f0f",level:2}],c={toc:i},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u81ea-csv-\u6a94\u532f\u5165\u8cc7\u6599"},"\u81ea CSV \u6a94\u532f\u5165\u8cc7\u6599"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ee5 SQL Shell / psql \u642d\u914d \\i -f \u6307\u4ee4\u57f7\u884c\u4e0b\u5217 *.sql \u7bc4\u4f8b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"path_of_source_file.csv \u4e2d\u9808\u5177\u5099\u8207 totem_user \u4e2d\u540c\u540d\u6b04\u4f4d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"example \u8907\u88fd path_of_source_file.csv \u5167\u5bb9\u5230 totem_user \u8cc7\u6599\u8868"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"step1: import.sql \u6307\u4ee4\u6a94\u6e96\u5099"),(0,n.kt)("li",{parentName:"ul"},"step2: SQL Shell(psql) \u57f7\u884c import.sql \u5167\u5bb9\u65b9\u5f0f")))),(0,n.kt)("h2",{id:"importsql-\u5167\u5bb9\u7bc4\u4f8b"},"import.sql \u5167\u5bb9\u7bc4\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\\encoding UTF8\n\\timing on\n\\copy totem_user(username, expired_date, email) FROM 'path_of_source_file.csv' DELIMITER ',' CSV HEADER ENCODING 'UTF8';\n\\timing off\n")),(0,n.kt)("h2",{id:"sql-shellpsql-\u767b\u5165\u5f8c\u57f7\u884c\u65b9\u5f0f"},"SQL Shell(psql) \u767b\u5165\u5f8c\u57f7\u884c\u65b9\u5f0f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"totem=# \\i 'D:/tmp/import.sql'\n")),(0,n.kt)("h2",{id:"psql-\u57f7\u884c\u65b9\u5f0f"},"psql \u57f7\u884c\u65b9\u5f0f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"psql -U postgres -d totem -p xxxx -h xxx.xxx.xxx.xxx -f import.sql\n")),(0,n.kt)("h1",{id:"\u53c3\u8003"},"\u53c3\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./PosgreSQL_copy_CSV_to_table"},"PosgreSQL \u8cc7\u6599\u532f\u51fa\u6210 CSV")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./SqlShell_psql_Basic"},"PosgreSQL:\u76f4\u63a5\u65bc SQL Shell (psql) \u57f7\u884c sql \u6a94"))))}u.isMDXComponent=!0}}]);