"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[5747],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),i=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(r),f=n,g=u["".concat(p,".").concat(f)]||u[f]||m[f]||l;return r?o.createElement(g,a(a({ref:t},c),{},{components:r})):o.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var i=2;i<l;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const l={title:"PostgreSQL \u4e0a\u50b3 Blob \u6a94\u6848",description:"Postgres Import Blob from File",keywords:["postgresql","Lob","Import"]},a=void 0,s={unversionedId:"DevTech/PostgreSQL/Postgres_Import_Blob_from_File",id:"DevTech/PostgreSQL/Postgres_Import_Blob_from_File",title:"PostgreSQL \u4e0a\u50b3 Blob \u6a94\u6848",description:"Postgres Import Blob from File",source:"@site/docs/DevTech/PostgreSQL/Postgres_Import_Blob_from_File.md",sourceDirName:"DevTech/PostgreSQL",slug:"/DevTech/PostgreSQL/Postgres_Import_Blob_from_File",permalink:"/docs/DevTech/PostgreSQL/Postgres_Import_Blob_from_File",draft:!1,tags:[],version:"current",frontMatter:{title:"PostgreSQL \u4e0a\u50b3 Blob \u6a94\u6848",description:"Postgres Import Blob from File",keywords:["postgresql","Lob","Import"]},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL \u532f\u51fa Blob \u6b04\u4f4d",permalink:"/docs/DevTech/PostgreSQL/Postgres_Export_Blob_to_File"},next:{title:"Insert from Select",permalink:"/docs/DevTech/PostgreSQL/SQL/Insert_From_Selection_Values"}},p={},i=[],c={toc:i},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u53c3\u8003\u8cc7\u6599"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Postgres_Export_Blob_to_File"},"PostgreSQL \u532f\u51fa Blob \u6b04\u4f4d\u81f3\u6a94\u6848")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Backup_Restore_BLOB_in_Postgres"},"PostgreSQL Blob \u5099\u4efd\u8207\u56de\u5b58"))),(0,n.kt)("h1",{id:"postgresql-\u4e0a\u50b3-blob-\u6a94\u6848"},"PostgreSQL \u4e0a\u50b3 Blob \u6a94\u6848"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5206\u70ba\u5169\u985e\u57f7\u884c\u65b9\u5f0f"),(0,n.kt)("blockquote",{parentName:"blockquote"},(0,n.kt)("p",{parentName:"blockquote"},"\u5728 DB server \u7aef\u57f7\u884c\n\u5728 Client \u7aef psql \u57f7\u884c"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./Postgres_Export_Blob_to_File"},"\u53c3\u8003 PostgreSQL \u532f\u51fa Blob \u6b04\u4f4d\u81f3\u6a94\u6848"))))))),(0,n.kt)("h1",{id:"postgresql-server-side-\u57f7\u884c\u6a94\u6848\u4e0a\u50b3\u65b9\u5f0f"},"PostgreSQL server side \u57f7\u884c\u6a94\u6848\u4e0a\u50b3\u65b9\u5f0f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"server side \u53ef\u4ee5 ",(0,n.kt)("strong",{parentName:"li"},"\u76f4\u63a5\u5728 sql \u4e2d")," \u4e0b\u9054 lo_export \u6216 lo_import functions \u6307\u4ee4"),(0,n.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u4f7f\u7528 lo_import function \u4e0a\u50b3\u6a94\u6848"),(0,n.kt)("li",{parentName:"ul"},"postgres \u6703\u56de\u50b3 OID ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"totem=> \\lo_import '/home/server/uploading_file.txt';\n\nret:\nlo_import 123456\n")),(0,n.kt)("h1",{id:"postgresql-client-side-psql-\u57f7\u884c\u6a94\u6848\u4e0a\u50b3\u65b9\u5f0f"},"PostgreSQL Client side psql \u57f7\u884c\u6a94\u6848\u4e0a\u50b3\u65b9\u5f0f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"psql")," \u4e0b\u65b0\u6a94\u4e0a\u50b3\u65b9\u5f0f:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"\\lo_import '/home/server/uploading_file.txt'\n\nret:\nlo_import 123456\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6a94\u6848\u4e0b\u8f09\u65b9\u5f0f")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\\lo_export 123456 /var/tmp/output_file_to.txt\n\n\nSELECT lo_export(file_content_column, '/tmp/Export_File_To.csv') FROM table_name where t_pk = 719;\n")))}m.isMDXComponent=!0}}]);