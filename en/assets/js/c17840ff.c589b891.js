"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[3879],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>k});var r=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function p(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)l=s[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)l=s[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=r.createContext({}),i=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},u=function(e){var t=i(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(l),d=n,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||s;return l?r.createElement(k,a(a({ref:t},u),{},{components:l})):r.createElement(k,a({ref:t},u))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=l.length,a=new Array(s);a[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,a[1]=p;for(var i=2;i<s;i++)a[i]=l[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},85691:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var r=l(87462),n=(l(67294),l(3905));const s={title:"SQL Shell psql Basic",description:"SQL Shell psql \u57fa\u672c\u4f7f\u7528",keywords:["psql","SQL Shell","PostgreSQL"]},a="SQL Shell (psql) \u57fa\u672c\u4f7f\u7528",p={unversionedId:"DevTech/PostgreSQL/SqlShell_psql_Basic",id:"DevTech/PostgreSQL/SqlShell_psql_Basic",title:"SQL Shell psql Basic",description:"SQL Shell psql \u57fa\u672c\u4f7f\u7528",source:"@site/docs/DevTech/PostgreSQL/SqlShell_psql_Basic.md",sourceDirName:"DevTech/PostgreSQL",slug:"/DevTech/PostgreSQL/SqlShell_psql_Basic",permalink:"/en/docs/DevTech/PostgreSQL/SqlShell_psql_Basic",draft:!1,tags:[],version:"current",frontMatter:{title:"SQL Shell psql Basic",description:"SQL Shell psql \u57fa\u672c\u4f7f\u7528",keywords:["psql","SQL Shell","PostgreSQL"]},sidebar:"tutorialSidebar",previous:{title:"Using subqueries outside of WHERE",permalink:"/en/docs/DevTech/PostgreSQL/SQL/Using_subqueries_outside_of_WHERE"},next:{title:"Anaconda \u57fa\u672c\u7ba1\u7406\u6307\u4ee4",permalink:"/en/docs/DevTech/Python/Anaconda_Statements"}},o={},i=[{value:"psql -f",id:"psql--f",level:2},{value:"SQL Shell(psql) \u9032\u5165\u5f8c\uff0c i \u6307\u4ee4",id:"sql-shellpsql-\u9032\u5165\u5f8c-i-\u6307\u4ee4",level:2},{value:"Linux Shell Script \u4e2d\u63d0\u4f9b\u5bc6\u78bc\u65b9\u5f0f",id:"linux-shell-script-\u4e2d\u63d0\u4f9b\u5bc6\u78bc\u65b9\u5f0f",level:2}],u={toc:i},c="wrapper";function m(e){let{components:t,...l}=e;return(0,n.kt)(c,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sql-shell-psql-\u57fa\u672c\u4f7f\u7528"},"SQL Shell (psql) \u57fa\u672c\u4f7f\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u696d\u74b0\u5883: windows "),(0,n.kt)("li",{parentName:"ul"},"\u5df2\u8a2d\u5b9a ~\\PostgreSQL\\x.x.x\\bin \u65bc\u74b0\u5883\u8b8a\u6578(\u624d\u80fd\u627e\u5230 psql.exe)"),(0,n.kt)("li",{parentName:"ul"},"\u65b9\u6cd51: \u4f7f\u7528 cmd \u76f4\u63a5\u4e0b psql \u6307\u4ee4\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u76f4\u63a5\u5728 command line \u6307\u4ee4\u4e2d\u7d66\u4e88 username/port/host \u7b49\u53c3\u6578"))),(0,n.kt)("li",{parentName:"ul"},"\u65b9\u6cd52: \u4f7f\u7528 SQL Shell(psql) \u4e0b\u4ee4\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9808\u5148\u9032\u884c\u767b\u5165\u5f8c\u624d\u53ef\u52d5\u4f5c")))),(0,n.kt)("h1",{id:"psql-cmd-\u4e0b-login-\u65b9\u5f0f"},"psql cmd \u4e0b login \u65b9\u5f0f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"wondows \u4e0b\u8a18\u5f97\u5148\u52a0\u5165 postgreSQL/bin \u5230\u74b0\u5883\u8b8a\u6578\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    psql -U postgres -d cable -p 5432 -h 192.168.x.xxx\n    \n    psql# select * from totem_user;\n")),(0,n.kt)("h1",{id:"sql-shell-psql-\u4e0b-login-\u65b9\u5f0f"},"SQL Shell (psql) \u4e0b login \u65b9\u5f0f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'    Database [postgres]: totem\n    Port [5432]: 5432\n    Username [postgres]: totem\n    psql (9.5.25\uff0c\u4f3a\u670d\u5668 9.5.18)\n    \u8f38\u5165 "help" \u986f\u793a\u8aaa\u660e\u3002\n    \n    totem=# select * from totem_user;\n    ....\n    \u8a3b: \n    A: q \u53ef\u4ee5\u8df3\u51fa\u67e5\u8a62\u7d50\u679c\u6aa2\u8996\n    B: Ctrl+C \u7d50\u675f\n')),(0,n.kt)("h1",{id:"\u76f4\u63a5\u65bc-sql-shell-psql-\u57f7\u884c-sql-\u6a94"},"\u76f4\u63a5\u65bc SQL Shell (psql) \u57f7\u884c sql \u6a94"),(0,n.kt)("p",null,"  \u901a\u5e38 DevOps \u4e0b\uff0c\u70ba\u4e86\u65b9\u4fbf DBA \u8655\u7406\u8207\u6b0a\u8cac\u5206\u96e2\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u9019\u908a\u7fd2\u6163\u63d0\u4f9b DBA \u5305\u597d\u7684 sql \u6a94\u6216 stored procedure \u65b9\u4fbf\u57f7\u884c\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4e5f\u907f\u514d\u51fa\u932f\u6642\u5206\u4e0d\u6e05 DBA \u624b\u52d5\u7a0b\u5e8f\u5931\u8aa4\u6216\u662f sql \u672c\u8eab\u554f\u984c\u3002"),(0,n.kt)("h2",{id:"psql--f"},"psql -f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"psql -f \u53ef\u7528\u4f86\u6307\u5411 local \u7aef\u6e96\u5099\u597d\u7684 *.sql \u6a94  "),(0,n.kt)("li",{parentName:"ul"},"-U : role  "),(0,n.kt)("li",{parentName:"ul"},"-d : database  "),(0,n.kt)("li",{parentName:"ul"},"-f : sql \u6a94  "),(0,n.kt)("li",{parentName:"ul"},"-p : port  "),(0,n.kt)("li",{parentName:"ul"},"-h : hostname  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"psql -U postgres -d totem -f export_all_user.sql\n")),(0,n.kt)("h2",{id:"sql-shellpsql-\u9032\u5165\u5f8c-i-\u6307\u4ee4"},"SQL Shell(psql) \u9032\u5165\u5f8c\uff0c \\i \u6307\u4ee4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SQL Shell(psql) \\i \u53ef\u7528\u4f86\u6307\u5411 local \u7aef\u6e96\u5099\u597d\u7684 *.sql \u6a94  "),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u4e8b\u9805: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5373\u4f7f\u662f\u5728 windows \u4e0b\uff0c\u8def\u5f91\u4e5f\u662f\u4f7f\u7528 ",(0,n.kt)("strong",{parentName:"li"},"\u659c\u7dda")," \u975e\u53cd\u659c\u7dda\u3002  "),(0,n.kt)("li",{parentName:"ul"},"\u8def\u5f91\u61c9\u4f7f\u7528 single quote \u5305\u8986\u3002  ")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"totem=# \\i '\u9019\u908a\u662f local \u6240\u5728\u7684\u4f4d\u7f6e, \u4e0d\u662f\u767b\u5165\u76ee\u6a19\u9060\u7aef\u6a5f\u5668\u7684\u4f4d\u7f6e'\n\ntotem=# \\i 'D:/tmp/export_all_user.sql'\n\n\u6ce8\u610f\u4e8b\u9805\n1: single quote\n2. \u8cc7\u6599\u593e\u4f7f\u7528\u7684\u662f [\u659c\u7dda] / (windows \u4e2d\u7528\u7684\u662f\u53cd\u659c\u7dda)\n")),(0,n.kt)("h2",{id:"linux-shell-script-\u4e2d\u63d0\u4f9b\u5bc6\u78bc\u65b9\u5f0f"},"Linux Shell Script \u4e2d\u63d0\u4f9b\u5bc6\u78bc\u65b9\u5f0f"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u57f7\u884c psql \u6642\uff0c\u901a\u5e38\u9700\u8981\u63d0\u4f9b\u5bc6\u78bc\uff0cpsql \u9810\u8a2d\u7531 stdin \u8b80\u53d6\u5bc6\u78bc\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u4f46\u5728 shell script \u4e2d\u7121\u6cd5\u8f38\u5165\u5bc6\u78bc\uff0c\u89e3\u5957\u65b9\u5f0f\u900f\u904e .pgpass \u6a94\u6848\u63d0\u4f9b\u5bc6\u78bc\u3002  ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728 psql \u547d\u4ee4\u5f8c\u52a0\u4e0a  ",(0,n.kt)("strong",{parentName:"li"},"'--no-password'")),(0,n.kt)("li",{parentName:"ul"},"home directory \u4e0b\u65b0\u589e ",(0,n.kt)("strong",{parentName:"li"},".pgpass")," \u6a94\u6848\uff0c\u5167\u5bb9\u70ba\u5404 DB \u9023\u7dda\u7684\u5bc6\u78bc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u683c\u5f0f\u70ba:")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"host:port:database:user:password\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u518d\u5c07 .pgpass \u7684\u6b0a\u9650\u6539\u6210 600")))}m.isMDXComponent=!0}}]);