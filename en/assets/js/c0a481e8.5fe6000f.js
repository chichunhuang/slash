"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[9412],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>b});var l=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,l,r=function(e,t){if(null==e)return{};var o,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)o=n[l],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)o=n[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(o),u=r,b=m["".concat(p,".").concat(u)]||m[u]||d[u]||n;return o?l.createElement(b,a(a({ref:t},c),{},{components:o})):l.createElement(b,a({ref:t},c))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,a=new Array(n);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<n;s++)a[s]=o[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,o)}u.displayName="MDXCreateElement"},45110:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var l=o(87462),r=(o(67294),o(3905));const n={title:"PostgreSQL Blob \u5099\u4efd\u8207\u56de\u5b58",description:"Backup and Restore BLOB in PostgreSQL",keywords:["postgresql","lob","restore","backup"]},a=void 0,i={unversionedId:"DevTech/PostgreSQL/Backup_Restore_BLOB_in_Postgres",id:"DevTech/PostgreSQL/Backup_Restore_BLOB_in_Postgres",title:"PostgreSQL Blob \u5099\u4efd\u8207\u56de\u5b58",description:"Backup and Restore BLOB in PostgreSQL",source:"@site/docs/DevTech/PostgreSQL/Backup_Restore_BLOB_in_Postgres.md",sourceDirName:"DevTech/PostgreSQL",slug:"/DevTech/PostgreSQL/Backup_Restore_BLOB_in_Postgres",permalink:"/en/docs/DevTech/PostgreSQL/Backup_Restore_BLOB_in_Postgres",draft:!1,tags:[],version:"current",frontMatter:{title:"PostgreSQL Blob \u5099\u4efd\u8207\u56de\u5b58",description:"Backup and Restore BLOB in PostgreSQL",keywords:["postgresql","lob","restore","backup"]},sidebar:"tutorialSidebar",previous:{title:"Spring Properties to Map by @Resource",permalink:"/en/docs/DevTech/Java/Spring/Spring_Property_inject_AtResource_to_Map"},next:{title:"PostgreSQL Format JSONB Object",permalink:"/en/docs/DevTech/PostgreSQL/JSONB/PostgreSQL_Format_JSONB_Object"}},p={},s=[{value:'<strong>\u532f\u51fa</strong> \u55ae\u4e00 LOB \u6a94\u6848\u81f3\u6307\u5b9a\u4f4d\u7f6e\u7bc4\u4f8b<span id="single-clause-export"></span>',id:"\u532f\u51fa-\u55ae\u4e00-lob-\u6a94\u6848\u81f3\u6307\u5b9a\u4f4d\u7f6e\u7bc4\u4f8b",level:2},{value:'<strong>\u532f\u5165</strong> \u55ae\u4e00\u6a94\u6848\u4e26\u53d6\u5f97 loid \u7bc4\u4f8b<span id="single-clause-import"></span>',id:"\u532f\u5165-\u55ae\u4e00\u6a94\u6848\u4e26\u53d6\u5f97-loid-\u7bc4\u4f8b",level:2},{value:"\u542b BLOB COLUMN \u7684 TABLE \u5099\u4efd",id:"\u542b-blob-column-\u7684-table-\u5099\u4efd",level:2},{value:"\u67e5\u8a62 SCHEMA \u5c08\u6848\u4e0b\u7684 LOB \u7bc4\u4f8b",id:"\u67e5\u8a62-schema-\u5c08\u6848\u4e0b\u7684-lob-\u7bc4\u4f8b",level:2},{value:"\u67e5\u8a62 DORAEMON \u5c08\u6848\u7684 APPLICATION_FORM TABLE",id:"\u67e5\u8a62-doraemon-\u5c08\u6848\u7684-application_form-table",level:2},{value:"\u532f\u51fa TABLE APPLICATION_FORM \u7684 LOB OBJECT ID \u7bc4\u4f8b",id:"\u532f\u51fa-table-application_form-\u7684-lob-object-id-\u7bc4\u4f8b",level:2},{value:"\u532f\u5165 TABLE \u7684 LOB OBJECT ID \u7bc4\u4f8b",id:"\u532f\u5165-table-\u7684-lob-object-id-\u7bc4\u4f8b",level:2},{value:"\u6e05\u9664 DORAEMON \u672a\u4f7f\u7528\u7684 LOB",id:"\u6e05\u9664-doraemon-\u672a\u4f7f\u7528\u7684-lob",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,l.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u53c3\u8003\u8cc7\u6599"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./Postgres_Export_Blob_to_File"},"PostgreSQL \u532f\u51fa Blob \u6b04\u4f4d\u81f3\u6a94\u6848")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./Postgres_Import_Blob_from_File"},"PostgreSQL \u4e0a\u50b3 Blob \u6a94\u6848"))),(0,r.kt)("h1",{id:"postgresql-blob-\u5099\u4efd\u8207\u56de\u5b58\u57fa\u672c\u7bc4\u4f8b"},"POSTGRESQL BLOB \u5099\u4efd\u8207\u56de\u5b58\u57fa\u672c\u7bc4\u4f8b"),(0,r.kt)("h2",{id:"\u532f\u51fa-\u55ae\u4e00-lob-\u6a94\u6848\u81f3\u6307\u5b9a\u4f4d\u7f6e\u7bc4\u4f8b"},(0,r.kt)("strong",{parentName:"h2"},"\u532f\u51fa")," \u55ae\u4e00 LOB \u6a94\u6848\u81f3\u6307\u5b9a\u4f4d\u7f6e\u7bc4\u4f8b",(0,r.kt)("span",{id:"single-clause-export"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"by select clause\nSELECT lo_export(index_file, '/tmp/download_file.csv') FROM table_with_lob_column\n\nby LOID / psql\npsql -U doraemon -d doraemon -c '\\lo_export given_oid /tmp/download_file.csv '\n\n")),(0,r.kt)("h2",{id:"\u532f\u5165-\u55ae\u4e00\u6a94\u6848\u4e26\u53d6\u5f97-loid-\u7bc4\u4f8b"},(0,r.kt)("strong",{parentName:"h2"},"\u532f\u5165")," \u55ae\u4e00\u6a94\u6848\u4e26\u53d6\u5f97 loid \u7bc4\u4f8b",(0,r.kt)("span",{id:"single-clause-import"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f8c\u7e8c\u9808\u518d\u5c07 OID \u6307\u5230\u5c0d\u61c9 table column")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"psql -U doraemon -d doraemon -c '\\lo_import /tmp/import_file.txt'\n\n----\nlo_import 123456\n")),(0,r.kt)("h1",{id:"postgresql-blob-\u5099\u4efd\u8207\u56de\u5b58\u6279\u6b21"},"PostgreSQL Blob \u5099\u4efd\u8207\u56de\u5b58(\u6279\u6b21)"),(0,r.kt)("p",null,"\u7de3\u7531: "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Doraemon \u5c08\u6848\u7684 Application_Form table \u4e2d\u6709\u4f7f\u7528\u5230 blob \u6b04\u4f4d\u4f86\u5b58\u653e\u4e0a\u50b3\u6a94\u6848\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728\u4f8b\u884c\u7684\u8cc7\u6599\u5eab\u5099\u4efd\u904e\u7a0b\u4e2d\u6703\u57f7\u884c pg_dump -t \u6307\u5b9a table \u5099\u4efd",(0,r.kt)("br",{parentName:"p"}),"\n","\u6b64\u6642 blob \u6703\u88ab\u7565\u904e\uff0c\u56e0\u6b64\u9700\u7279\u5225\u5c0d\u8a72 table \u8207 blob \u7279\u5225\u8655\u7406",(0,r.kt)("br",{parentName:"p"}),"\n","\u76f8\u95dc\u6b65\u9a5f\u5982\u4e0b:  ")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5099\u4efd application_form table",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728 pg_dump \u547d\u4ee4\u4e2d\u52a0\u5165 ",(0,r.kt)("strong",{parentName:"li"},"-t application_form")))),(0,r.kt)("li",{parentName:"ol"},"\u532f\u51fa application_form \u4f7f\u7528\u5230\u7684 blob \u7684 lob object ID"),(0,r.kt)("li",{parentName:"ol"},"\u56de\u5b58 application_form"),(0,r.kt)("li",{parentName:"ol"},"\u5c0e\u5165\u4e8b\u5148\u5099\u4efd\u7684 blob \u4e26\u66f4\u65b0 application_form \u7684 loid (stands for: lob object id)")),(0,r.kt)("h2",{id:"\u542b-blob-column-\u7684-table-\u5099\u4efd"},"\u542b BLOB COLUMN \u7684 TABLE \u5099\u4efd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9700\u4f7f\u7528 pg_dump \u6307\u4ee4  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"pg_dump -t application_form\n")),(0,r.kt)("h2",{id:"\u67e5\u8a62-schema-\u5c08\u6848\u4e0b\u7684-lob-\u7bc4\u4f8b"},"\u67e5\u8a62 SCHEMA \u5c08\u6848\u4e0b\u7684 LOB \u7bc4\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8a62 DB \u6307\u5b9a Schema \u4e0b\u6240\u6709\u7684 LOB objects  "),(0,r.kt)("li",{parentName:"ul"},"\u95dc\u9375\u5728\u65bc ",(0,r.kt)("strong",{parentName:"li"},"pg_largeobject")," \u9019\u500b\u5167\u5efa\u7684 table  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"psql -U postgres -d doraemon -c 'select loid from pg_largeobject'\n")),(0,r.kt)("h1",{id:"doraemon-\u5c08\u6848\u532f\u51fa\u7bc4\u4f8b"},"DORAEMON \u5c08\u6848\u532f\u51fa\u7bc4\u4f8b"),(0,r.kt)("h2",{id:"\u67e5\u8a62-doraemon-\u5c08\u6848\u7684-application_form-table"},"\u67e5\u8a62 DORAEMON \u5c08\u6848\u7684 APPLICATION_FORM TABLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"psql -U postgres -d doraemon -c 'select id, file, file_name from application_form where file is not null order by id'\n\n id |   file   | file_name                \n\n----+----------+----------------------------------------\n\n  1 | 29990876 | application1.csv\n\n  2 | 29990875 | application2.csv\n\n  4 | 29990873 | application3.csv\n\n")),(0,r.kt)("h1",{id:"lob-table-\u532f\u51fa\u4e26\u532f\u5165\u5230\u53e6\u4e00\u500b-table-\u7df4\u7fd2"},"LOB TABLE \u532f\u51fa\u4e26\u532f\u5165\u5230\u53e6\u4e00\u500b TABLE \u7df4\u7fd2"),(0,r.kt)("h2",{id:"\u532f\u51fa-table-application_form-\u7684-lob-object-id-\u7bc4\u4f8b"},"\u532f\u51fa TABLE APPLICATION_FORM \u7684 LOB OBJECT ID \u7bc4\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8a3b(bash shell): eval is a built-in shell command used to evaluate and execute strings as a shell command.  "),(0,r.kt)("li",{parentName:"ul"},"\u5c07 pk, oid, filenmae \u4e32\u63a5\u5f8c\u7d44\u6210",(0,r.kt)("a",{parentName:"li",href:"#single-clause-export"},"\u55ae\u4e00 BLOB \u6a94\u532f\u51fa\u53e5\u5b50"),"  "),(0,r.kt)("li",{parentName:"ul"},"\u7d44\u6210 lo_export \u53e5\u5b50\u4ee5\u4f9b\u532f\u51fa\u6a94\u6848\u7528  "),(0,r.kt)("li",{parentName:"ul"},"\u5c07\u6a94\u6848\u532f\u51fa\u5230 lob \u8cc7\u6599\u593e\u4e4b\u4e0b(pk_filename.lob)  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"shell",shell:!0},"for i in `psql -U doraemon -t -S -c \"select format('%s*%s*%s', id, file_name, file) from application_form where file is not null\"`;\n\ndo\n\n    eval $(echo $i | python3 -c \"import sys; id,filename,lobid=sys.stdin.read().split('*'); print('psql -U doraemon -c \\'\\\\lo_export %s /home/doraemon/download/lob/%s_%s.lob\\''%(lobid.strip(), id.strip(), filename.strip()))\");\n\ndone\n")),(0,r.kt)("h2",{id:"\u532f\u5165-table-\u7684-lob-object-id-\u7bc4\u4f8b"},"\u532f\u5165 TABLE \u7684 LOB OBJECT ID \u7bc4\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u5e8f\u5c07\u6a94\u6848\u532f\u5165\u4e26\u4f9d\u5e8f\u53d6\u5f97\u6a94\u6848\u7684 LOID (lo_import \u51fd\u6578)"),(0,r.kt)("li",{parentName:"ul"},"\u53c3\u8003",(0,r.kt)("a",{parentName:"li",href:"#single-clause-import"},"\u55ae\u4e00 BLOB \u6a94\u532f\u5165\u53e5\u5b50")),(0,r.kt)("li",{parentName:"ul"},"\u5c07 LOID \u9935\u56de\u65b0\u7684 table record \u4e4b\u4e2d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"shell",shell:!0},'for f in `ls /home/doraemon/download/lob`;\n\ndo\n\n    psql -U doraemon -d doraemon -c "\\lo_import /home/doraemon/download/lob/$f" | python3 -c \'import sys;uid, _ = sys.argv[1].split("_", 1);print("update application_form set file = %s where id = %s" % (sys.stdin.read().replace("lo_import ", "").strip(), uid))\' $f | psql -U doraemon ;\n\ndone\n')),(0,r.kt)("h2",{id:"\u6e05\u9664-doraemon-\u672a\u4f7f\u7528\u7684-lob"},"\u6e05\u9664 DORAEMON \u672a\u4f7f\u7528\u7684 LOB"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 vacuumlo \u6307\u4ee4\uff0c\u7528\u4f86\u6e05\u9664 pg_largeobject \u7121\u4eba\u4f7f\u7528\u7684\u5b64\u5152\u8cc7\u6599\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nvacuumlo -U doraemon -v doraemon\n\n")))}d.isMDXComponent=!0}}]);