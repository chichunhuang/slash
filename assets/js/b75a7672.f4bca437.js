"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[5797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,b=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(b,s(s({ref:t},i),{},{components:r})):n.createElement(b,s({ref:t},i))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,s[1]=u;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},44522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Using subqueries outside of WHERE",description:"\u5728 sql from \u4e2d\u4f7f\u7528\u5b50\u67e5\u8a62",keywords:["Nested select","subquery"]},s="Using Subqueries outside of Where",u={unversionedId:"DevTech/SQL/Using_subqueries_outside_of_WHERE",id:"DevTech/SQL/Using_subqueries_outside_of_WHERE",title:"Using subqueries outside of WHERE",description:"\u5728 sql from \u4e2d\u4f7f\u7528\u5b50\u67e5\u8a62",source:"@site/docs/DevTech/SQL/Using_subqueries_outside_of_WHERE.md",sourceDirName:"DevTech/SQL",slug:"/DevTech/SQL/Using_subqueries_outside_of_WHERE",permalink:"/docs/DevTech/SQL/Using_subqueries_outside_of_WHERE",draft:!1,tags:[],version:"current",frontMatter:{title:"Using subqueries outside of WHERE",description:"\u5728 sql from \u4e2d\u4f7f\u7528\u5b50\u67e5\u8a62",keywords:["Nested select","subquery"]},sidebar:"totem_sidebar",previous:{title:"Insert Into v.s. Select Into",permalink:"/docs/DevTech/SQL/Insert_Into_vs_Select_Into"},next:{title:"\u96b1\u85cf Tomcat \u7248\u672c\u8cc7\u8a0a",permalink:"/docs/DevTech/Tomcat/Hide_Tomcat_Version"}},l={},c=[],i={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-subqueries-outside-of-where"},"Using Subqueries outside of Where"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u76f8\u4fe1\u5f88\u591a\u4eba\u5df2\u7d93\u5728 where \u689d\u4ef6\u4e2d\u4e2d\u4f7f\u7528\u904e\u5b50\u67e5\u8a62\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4f8b\u5982: \u5728 in clause \u4e2d\u4f7f\u7528\u4e00\u500b\u67e5\u8a62\u53e5\u5b50\u4f86\u63d0\u4f9b\u9650\u5236\u689d\u4ef6\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u9019\u908a\u8981\u6f14\u793a\u7684\u662f\u5728 from \u4e2d\u4f7f\u7528\u5b50\u67e5\u8a62\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e26\u4e14\u56de\u5fa9\u4e00\u500b\u65b0\u7684\u8868\u683c\u7d50\u69cb\u7d66\u524d\u65b9\u7684 select \u4f7f\u7528\u3002  ")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6b64\u7a2e\u60c5\u5883\u5728\u4f7f\u7528 subquery \u6642\uff0csubquery \u901a\u5e38\u6703\u642d\u914d group by \u4e4b\u985e\u7684\u53e5\u5b50\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e26\u56de\u50b3\u4e00\u500b meta table\u3002\u4e5f\u5c31\u662f\u4e00\u500b\u7d50\u69cb\u8207\u5206\u7fa4\u8207\u7c21\u55ae\u67e5\u8a62\u4e0d\u540c\u7684\u8cc7\u6599\u7d50\u69cb\u3002  ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8209\u4f8b\u60c5\u5883:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u67e5\u51fa\u4e0d\u540c\u5e74\u9f61\u5c64\u6bcf\u65e5\u5e73\u5747\u4f7f\u7528\u624b\u6a5f\u7684\u5e73\u5747\u6642\u9593\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u67e5\u51fa\u6bcf\u73ed\u7d1a\u500b\u79d1\u76ee\u8003\u8a66\u7684\u6700\u9ad8\u5206\u6578\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Syntax:  "))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"select * from (query) alias")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u4e0b\u5217\u7bc4\u4f8b\u4e2d: from clause \u5fc5\u9808\u7d66\u500b\u5225\u540d\uff0c\u4e0d\u53ef\u7701\u7565\u3002\u4e0b\u65b9\u4f8b\u5b50\u70ba tmp")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT  max_score, class , subject\n  FROM \n (\n   select max(score) max_score, class , subject from annual_exam group by class , subject\n ) tmp\n   ;\n")),(0,o.kt)("h1",{id:"\u82e5\u5b50\u67e5\u8a62\u4e2d\u672a\u9020\u6210\u8cc7\u6599\u7d50\u69cb\u6539\u8b8a"},"\u82e5\u5b50\u67e5\u8a62\u4e2d\u672a\u9020\u6210\u8cc7\u6599\u7d50\u69cb\u6539\u8b8a"),(0,o.kt)("p",null," \u7121\u610f\u7fa9\u7684\u52d5\u4f5c\u3002\u812b\u8932\u5b50\u653e\u5c41\uff0c\u5b50\u67e5\u8a62\u672c\u8eab\u5c31\u80fd\u9054\u5230\u76ee\u7684\u4e86\u3002\u53ef\u4ee5\u7b97\u662f\u4e00\u7a2e\u8aa4\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select * from (\n    select \n       a.column_01, a.column_02, a.column_03,\n       b.column_01, b.column_02, b.column_03 \n       from table_a as a \n            left join table_b as b on \n            a.ref_b_fk = b.pk \n  ) t\n")))}m.isMDXComponent=!0}}]);