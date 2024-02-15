"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[8609],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var l=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,l,a=function(e,r){if(null==e)return{};var t,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=l.createContext({}),p=function(e){var r=l.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return l.createElement(i.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return l.createElement(l.Fragment,{},r)}},g=l.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=a,y=c["".concat(i,".").concat(g)]||c[g]||m[g]||n;return t?l.createElement(y,o(o({ref:r},u),{},{components:t})):l.createElement(y,o({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=g;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<n;p++)o[p]=t[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}g.displayName="MDXCreateElement"},35299:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var l=t(87462),a=(t(67294),t(3905));const n={title:"Parallel Query in PostgreSQL",description:"Parallel_Query_in_PostgreSQL",keywords:["postgresql","Parallel Query"]},o="Parallel Query in PostgreSQL",s={unversionedId:"DevTech/PostgreSQL/Parallel_Query_in_PostgreSQL",id:"DevTech/PostgreSQL/Parallel_Query_in_PostgreSQL",title:"Parallel Query in PostgreSQL",description:"Parallel_Query_in_PostgreSQL",source:"@site/docs/DevTech/PostgreSQL/Parallel_Query_in_PostgreSQL.md",sourceDirName:"DevTech/PostgreSQL",slug:"/DevTech/PostgreSQL/Parallel_Query_in_PostgreSQL",permalink:"/docs/DevTech/PostgreSQL/Parallel_Query_in_PostgreSQL",draft:!1,tags:[],version:"current",frontMatter:{title:"Parallel Query in PostgreSQL",description:"Parallel_Query_in_PostgreSQL",keywords:["postgresql","Parallel Query"]},sidebar:"tutorialSidebar",previous:{title:"PosrgreSQL",permalink:"/docs/DevTech/PostgreSQL/JSONB/tmp/PosrgreSQL_JSON_SharpArrow_Operator"},next:{title:"PosgreSQL Backup and Restore",permalink:"/docs/DevTech/PostgreSQL/PosgreSQL_Backup_and_Restore"}},i={},p=[],u={toc:p},c="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,l.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parallel-query-in-postgresql"},"Parallel Query in PostgreSQL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Postgres9.6+ \u5f8c\u958b\u59cb\u63d0\u4f9b CPU \u5e73\u884c\u8655\u7406\u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7cfb\u7d71\u81ea\u884c\u6c7a\u5b9a\u4f55\u6642\u63a1\u7528 CPU \u5e73\u884c\u904b\u7b97\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u81ea\u8cc7\u6599\u5eab\u4e2d\u904e\u6ffe\u51fa\u5c11\u91cf\u8cc7\u6599\u6642\u6548\u80fd\u6703\u6709\u6240\u63d0\u5347\u3002")),(0,a.kt)("h1",{id:"postgres-parallel-query-\u8a2d\u5b9a\u65b9\u5f0f"},"Postgres Parallel Query \u8a2d\u5b9a\u65b9\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u66f4\u6539 postgresql.conf max_parallel_workers_per_gather \u53c3\u6578\u5f8c\u91cd\u555f postgres\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"postgresql.conf"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"max_parallel_workers_per_gather: \u5927\u65bc 0 \u5373\u53ef, \u4e00\u822c\u70ba 2 ~ 8\u3002\u4f9d\u5be6\u969b  CPU \u72c0\u6cc1\u8abf\u6574\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","force_parallel_mode (optional): \u8a2d\u5b9a\u70ba on \u53ef\u5f37\u5236\u7cfb\u7d71\u4f7f\u7528 parallel query\u3002  ")))),(0,a.kt)("h1",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u76ee\u524d Postgres9.6 / Postgres10 \u7121\u6cd5\u5728\u4e0b\u5217\u72c0\u6cc1\u4f7f\u7528 Parallel Query"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"writes any data or locks any database rows, CTE  "),(0,a.kt)("li",{parentName:"ul"},"PL/pgSQL cursor, for loop  "),(0,a.kt)("li",{parentName:"ul"},"user-defined functions are marked PARALLEL UNSAFE by default (can be modified to SAFE)  "),(0,a.kt)("li",{parentName:"ul"},"The transaction isolation level is serializable (\u4e5f\u5c31\u662f\u9023query\u90fd\u6703\u88ablock)  "),(0,a.kt)("li",{parentName:"ul"},"query is running inside of another query  ")))),(0,a.kt)("h1",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/10/static/parallel-query.html"},"\u5b98\u7db2 parallel-query \u8aaa\u660e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.rustprooflabs.com/2018/02/pg10_parallel_queries"},"PostgreSQL 10 Parallel Queries and Performance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/when-can-parallel-query-be-used.html"},"https://www.postgresql.org/docs/current/when-can-parallel-query-be-used.html"))))}m.isMDXComponent=!0}}]);