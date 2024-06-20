"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[4653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>O});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(r),g=a,O=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(O,l(l({ref:t},p),{},{components:r})):n.createElement(O,l({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},77570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"PostgreSQL Format JSONB Object",description:"PostgreSQL Format JSONB Object",keywords:["JSONB","jsonb_pretty","PostgreSQL"]},l="Format PostgreSQL JSONB Object",c={unversionedId:"DevTech/PostgreSQL/JSONB/PostgreSQL_Format_JSONB_Object",id:"DevTech/PostgreSQL/JSONB/PostgreSQL_Format_JSONB_Object",title:"PostgreSQL Format JSONB Object",description:"PostgreSQL Format JSONB Object",source:"@site/docs/DevTech/PostgreSQL/JSONB/PostgreSQL_Format_JSONB_Object.md",sourceDirName:"DevTech/PostgreSQL/JSONB",slug:"/DevTech/PostgreSQL/JSONB/PostgreSQL_Format_JSONB_Object",permalink:"/docs/DevTech/PostgreSQL/JSONB/PostgreSQL_Format_JSONB_Object",draft:!1,tags:[],version:"current",frontMatter:{title:"PostgreSQL Format JSONB Object",description:"PostgreSQL Format JSONB Object",keywords:["JSONB","jsonb_pretty","PostgreSQL"]},sidebar:"totem_sidebar",previous:{title:"PostgreSQL Blob \u5099\u4efd\u8207\u56de\u5b58",permalink:"/docs/DevTech/PostgreSQL/Backup_Restore_BLOB_in_Postgres"},next:{title:"PostgreSQL Update JSONB Column",permalink:"/docs/DevTech/PostgreSQL/JSONB/PostgreSQL_Update_JSONB_Column"}},s={},i=[],p={toc:i},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"format-postgresql-jsonb-object"},"Format PostgreSQL JSONB Object"),(0,a.kt)("p",null,"\u57fa\u672c\u4e0a PostgreSQL JSONB \u7684\u56de\u50b3\u7d50\u679c\u662f\u7121\u5e8f\u7684\uff0c\u4e14\u672a\u6709\u63db\u884c\u6216\u7e2e\u6392\u3002\u56e0\u6b64\u4e0d\u610f\u95b1\u8b80\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u82e5\u8981\u66ab\u6642\u5c07\u67e5\u8a62\u7d50\u679c\u9032\u884c\u63db\u884c\u8207\u7e2e\u6392\u5247\u53ef\u4f7f\u7528: jsonb_pretty \u4f86\u81ea\u52d5\u7e2e\u6392\u67e5\u8a62\u7d50\u679c\u3002  "),(0,a.kt)("p",null,"\u8a9e\u6cd5:  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"    jsonb_pretty(json_value JSONB) -> TEXT\n")),(0,a.kt)("p",null,"example: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u60c5\u5883: Table \u5165\u5b78\u8003\u8a66\u8cc7\u6599\u8868(Entrance_Examination)")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"id(bigint)"),(0,a.kt)("th",{parentName:"tr",align:null},"Admission_Ticket(character)"),(0,a.kt)("th",{parentName:"tr",align:null},"raw_data(jsonb)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"AAA001"),(0,a.kt)("td",{parentName:"tr",align:null},'{"City":"TPE", "School":"NTU" , "Score":"60"  }')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"BBB001"),(0,a.kt)("td",{parentName:"tr",align:null},'{"City":"TYN", "School":"NCHU", "Score":"70" }')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"CCC001"),(0,a.kt)("td",{parentName:"tr",align:null},'{"City":"HSZ", "School":"NITK", "Score":"80" }')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'    select jsonb_pretty(raw_data) from Entrance_Examination where Admission_Ticket = \'AAA001\';\n\n\n--\x3e result\n{\n    "City":"TPE", \n    "School":"NTU" , \n    "Score":"60" \n}\n\n')),(0,a.kt)("h1",{id:"reference"},"reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.sqliz.com/postgresql-ref/jsonb_pretty/"},"https://www.sqliz.com/postgresql-ref/jsonb_pretty/"))))}u.isMDXComponent=!0}}]);