"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[3462],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},i),{},{components:r})):n.createElement(d,l({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82823:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={title:"PostgreSQL find value by Attr from JSONB",description:"PostgreSQL find value from JSONB column",keywords:["JSONB","PostgreSQL"]},l="PostgreSQL find value from JSONB column",s={unversionedId:"DevTech/PostgreSQL/JSONB/Postgresql_find_value_by_Attr_of_JSONB_column",id:"DevTech/PostgreSQL/JSONB/Postgresql_find_value_by_Attr_of_JSONB_column",title:"PostgreSQL find value by Attr from JSONB",description:"PostgreSQL find value from JSONB column",source:"@site/docs/DevTech/PostgreSQL/JSONB/Postgresql_find_value_by_Attr_of_JSONB_column.md",sourceDirName:"DevTech/PostgreSQL/JSONB",slug:"/DevTech/PostgreSQL/JSONB/Postgresql_find_value_by_Attr_of_JSONB_column",permalink:"/docs/DevTech/PostgreSQL/JSONB/Postgresql_find_value_by_Attr_of_JSONB_column",draft:!1,tags:[],version:"current",frontMatter:{title:"PostgreSQL find value by Attr from JSONB",description:"PostgreSQL find value from JSONB column",keywords:["JSONB","PostgreSQL"]},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL Update JSONB Column",permalink:"/docs/DevTech/PostgreSQL/JSONB/PostgreSQL_Update_JSONB_Column"},next:{title:"PosrgreSQL_JSON_DoubleArrow_SharpDoubleArrow",permalink:"/docs/DevTech/PostgreSQL/JSONB/tmp/PosrgreSQL_JSON_DoubleArrow_SharpDoubleArrow"}},c={},u=[],i={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postgresql-find-value-from-jsonb-column"},"PostgreSQL find value from JSONB column"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"JSONB :",(0,o.kt)("br",{parentName:"p"}),"\n","PostgreSQL \u4e2d\u7684\u4e00\u7a2e\u7279\u6b8a\u6b04\u4f4d\uff0c\u5132\u5b58\u7684\u662f JSON \u578b\u614b\u4f46\u662f Compiled \u904e\u7684 binary \u8cc7\u6599\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u7279\u6027\u662f\uff0c\u53ef\u4ee5\u8b93 PostgreSQL \u7d93\u7531 mata data ",(0,o.kt)("strong",{parentName:"p"},"\u52a0\u901f\u67e5\u8a62")," \u7684\u901f\u5ea6\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4f46\u53cd\u904e\u4f86\u8aaa\uff0c\u5728 ",(0,o.kt)("strong",{parentName:"p"},"\u5132\u5b58\u6642\u8f03\u82b1\u6642\u9593")," \uff0c\u56e0\u70ba\u8981\u5148\u8f49 mata data \u6240\u4ee5\u76f8\u5c0d\u4e0a\u6703\u6bd4\u8f03\u8017\u6642\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u56e0\u6b64\u4e3b\u8981\u7528\u5728\uff0c\u5c11\u7de8\u8f2f\u4f46\u537b\u9700\u8981\u7d93\u5e38\u67e5\u8a62\u7684\u8acb\u5883\u4e0b\u3002")),(0,o.kt)("h1",{id:"\u67e5\u8a62-jsonb-\u8cc7\u6599\u5167\u5bb9\u65b9\u5f0f\u7bc4\u4f8b"},"\u67e5\u8a62 JSONB \u8cc7\u6599\u5167\u5bb9\u65b9\u5f0f\u7bc4\u4f8b"),(0,o.kt)("p",null,"  Syntax:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select column_a, \n       JSONB_COLUMN ->> 'ATTRIBUTE' as alias\n       from TABLE_WITH_JSONB_COLUMN\n       where clause;\n")),(0,o.kt)("p",null,"  Example:  JSON \u7d50\u69cb\u50c5\u55ae\u4e00\u5c64"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select student_id, \n       grade_no, class_no, \n       PERSONAL_DATA->>'DOB' as BIRTHDAY \n       from student  where grade_no = 1 and class_no in( 'A','B' );\n")),(0,o.kt)("p",null,"   Example:  \u67e5\u51fa1\u5e74A\u73ed\u5b78\u751f\uff0c\u6b77\u6b21\u6578\u5b78\u6210\u7e3e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select student_id, \n       string_agg(exam_score->>'MATH', ',') as Math_Scores  \n       from student  where grade_no = 1 and class_no in('A')\n       group by student_id;\n")))}m.isMDXComponent=!0}}]);