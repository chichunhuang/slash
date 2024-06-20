"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[1581],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=l,d=g["".concat(i,".").concat(m)]||g[m]||u[m]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[g]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={title:"PostgreSQL FDW Setting",description:"PostgreSQL DB link \u8a2d\u5b9a",keywords:["dblink","FDW","PostgreSQL"]},o="PostgreSQL DB link (FDW)",s={unversionedId:"DevTech/PostgreSQL/PostgreSQL_FDW_Setting",id:"DevTech/PostgreSQL/PostgreSQL_FDW_Setting",title:"PostgreSQL FDW Setting",description:"PostgreSQL DB link \u8a2d\u5b9a",source:"@site/docs/DevTech/PostgreSQL/PostgreSQL_FDW_Setting.md",sourceDirName:"DevTech/PostgreSQL",slug:"/DevTech/PostgreSQL/PostgreSQL_FDW_Setting",permalink:"/en/docs/DevTech/PostgreSQL/PostgreSQL_FDW_Setting",draft:!1,tags:[],version:"current",frontMatter:{title:"PostgreSQL FDW Setting",description:"PostgreSQL DB link \u8a2d\u5b9a",keywords:["dblink","FDW","PostgreSQL"]},sidebar:"totem_sidebar",previous:{title:"PosgreSQL copy from CSV",permalink:"/en/docs/DevTech/PostgreSQL/PosgreSQL_copy_from_CSV"},next:{title:"PostgreSQL string_agg Function",permalink:"/en/docs/DevTech/PostgreSQL/PostgreSQL_string_agg_function"}},i={},p=[{value:"FDW \u53c3\u8003\u8cc7\u6599",id:"fdw-\u53c3\u8003\u8cc7\u6599",level:2},{value:"Foreign Data Wrappers \u8a2d\u5b9a\u6b65\u9a5f",id:"foreign-data-wrappers-\u8a2d\u5b9a\u6b65\u9a5f",level:2},{value:"\u5b89\u88dd <strong>postgresql10-contrib</strong> \u5957\u4ef6\u3002",id:"\u5b89\u88dd-postgresql10-contrib-\u5957\u4ef6",level:2},{value:"pg_hba.conf \u8a2d\u5b9a\u9023\u7dda\u9a57\u8a3c\u65b9\u5f0f",id:"pg_hbaconf-\u8a2d\u5b9a\u9023\u7dda\u9a57\u8a3c\u65b9\u5f0f",level:2},{value:"\u5b89\u88dd postgres_fdw Extension",id:"\u5b89\u88dd-postgres_fdw-extension",level:2},{value:"\u8a2d\u5b9a Foreign Server",id:"\u8a2d\u5b9a-foreign-server",level:2},{value:"\u8a2d\u5b9a User Mapping",id:"\u8a2d\u5b9a-user-mapping",level:2},{value:"Local \u8a2d\u5b9a Foreign Table",id:"local-\u8a2d\u5b9a-foreign-table",level:2},{value:"Grant Authority of Foreign Table to Role",id:"grant-authority-of-foreign-table-to-role",level:2},{value:"\u67e5\u8a62 foreign server / foreign table",id:"\u67e5\u8a62-foreign-server--foreign-table",level:2},{value:"Local \u67e5\u8a62\u9060\u7aef\u8cc7\u6599\u4f7f\u7528\u7bc4\u4f8b",id:"local-\u67e5\u8a62\u9060\u7aef\u8cc7\u6599\u4f7f\u7528\u7bc4\u4f8b",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}],c={toc:p},g="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(g,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"postgresql-db-link-fdw"},"PostgreSQL DB link (FDW)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Foreign Data Wrappers (FDW)"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4ee5\u9032\u884c\u8de8\u8cc7\u6599\u5eab query, insert, delete \u6307\u5b9a\u8cc7\u6599\u8868\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u9810\u8a2d\u529f\u80fd\uff0c\u9700\u624b\u52d5\u5b89\u88dd PostgreSQL Extension"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u9023\u7d50\u591a\u7a2e\u8cc7\u6599\u6e90:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"SQL Databases: Oracle, MySQL, ODBC, JDBC"),(0,l.kt)("li",{parentName:"ul"},"NoSQL Databases: CouchDB, Mongo, Redis"),(0,l.kt)("li",{parentName:"ul"},"Files: CSV, Text, even JSON"),(0,l.kt)("li",{parentName:"ul"},"Hadoop, Hive, Elastic Search ")))),(0,l.kt)("h2",{id:"fdw-\u53c3\u8003\u8cc7\u6599"},"FDW \u53c3\u8003\u8cc7\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.postgresql.org/wiki/Foreign_data_wrappers"},"Foreign_data_wrappers ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/10/postgres-fdw.html"},"postgres-fdw"))),(0,l.kt)("h2",{id:"foreign-data-wrappers-\u8a2d\u5b9a\u6b65\u9a5f"},"Foreign Data Wrappers \u8a2d\u5b9a\u6b65\u9a5f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5 PostgreSQL 10 \u70ba\u4f8b"),(0,l.kt)("li",{parentName:"ul"},"role totem \u81ea totem DB \u9023\u7dda\u5230 insect DB \u70ba\u4f8b")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u9700\u5b89\u88dd ",(0,l.kt)("strong",{parentName:"li"},"postgresql10-contrib")," \u5957\u4ef6\u3002  "),(0,l.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a\u9023\u7dda\u9a57\u8a3c\u65b9\u5f0f pg_hba.conf"),(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88dd postgres_fdw Extension \u64f4\u5145\u529f\u80fd"),(0,l.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a Foreign Server"),(0,l.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a User Mapping: \u7576\u524d Role \u8207\u9060\u7aef DB role \u5efa\u7acb\u95dc\u806f\u3002"),(0,l.kt)("li",{parentName:"ol"},"Local \u8a2d\u5b9a Foreign Table \u4ee3\u7406\u4eba"),(0,l.kt)("li",{parentName:"ol"},"Grant Authority of Foreign Table to Role"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u8a62 Foreign Server / Foreign Fable"),(0,l.kt)("li",{parentName:"ol"},"Local \u67e5\u8a62\u9060\u7aef\u8cc7\u6599\u4f7f\u7528\u7bc4\u4f8b  "),(0,l.kt)("li",{parentName:"ol"},"\u5176\u4ed6")),(0,l.kt)("h2",{id:"\u5b89\u88dd-postgresql10-contrib-\u5957\u4ef6"},"\u5b89\u88dd ",(0,l.kt)("strong",{parentName:"h2"},"postgresql10-contrib")," \u5957\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shellscript"},"# \u5217\u51fa\u5df2\u5b89\u88dd\u7684 postgresql \u5957\u4ef6\n$ yum list installed | grep postgresql\n \n# \u5b89\u88dd contrib \u5957\u4ef6\n$ yum install postgresql10-contrib\n")),(0,l.kt)("h2",{id:"pg_hbaconf-\u8a2d\u5b9a\u9023\u7dda\u9a57\u8a3c\u65b9\u5f0f"},"pg_hba.conf \u8a2d\u5b9a\u9023\u7dda\u9a57\u8a3c\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9810\u8a2d\u9a57\u8a3c\u65b9\u5f0f\u70ba trust (\u53ea\u80fd\u8b93 role postgres \u4f7f\u7528 FDW)"),(0,l.kt)("li",{parentName:"ul"},"trust \u6539 md5 \u505a\u70ba\u9023\u7dda\u9a57\u8a3c\u65b9\u5f0f")),(0,l.kt)("p",null,"pg_hba.conf \u8a2d\u5b9a\u7bc4\u4f8b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# TYPE  DATABASE        USER            ADDRESS                 METHOD\n \n# IPv4 local connections:\nhost     all             all             127.0.0.1/32             md5\n# IPv6 local connections:\n#host    all             all             ::1/128                  md5\nhost     all             all         192.168.X.0 255.255.255.0    md5\n")),(0,l.kt)("h2",{id:"\u5b89\u88dd-postgres_fdw-extension"},"\u5b89\u88dd postgres_fdw Extension"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee5 postgres \u6b0a\u9650 \u5728 totem DB \u9032\u884c extension \u5b89\u88dd"),(0,l.kt)("li",{parentName:"ul"},"\u4e26\u6388\u6b0a\u7d66\u6307\u5b9a Role totem \u4f7f\u7528")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--login\npsql -U postgres\n \n--connection to totem\n\\c totem\n \n--install fdw\nCREATE EXTENSION postgres_fdw;\n \n--\u8b93 role totem \u53ef\u4ee5\u57f7\u884c FDW\nGRANT USAGE ON FOREIGN DATA WRAPPER postgres_fdw to totem;\n")),(0,l.kt)("h2",{id:"\u8a2d\u5b9a-foreign-server"},"\u8a2d\u5b9a Foreign Server"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 totem DB \u5efa\u7acb\u9060\u7aef DB \u4ee3\u7406 server (\u6b64\u8655\u547d\u540d\u70ba foreign_insect_server)"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4f9d\u9700\u8981\u8a2d\u70ba read only / use_remote_estimate(\u7d71\u8a08)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--by role totem on database totem\nCREATE SERVER foreign_insect_server\n        FOREIGN DATA WRAPPER postgres_fdw\n        OPTIONS (host '192.168.XX.XXX', port '5432', dbname 'insect');\n \n--on database totem set read only\nALTER SERVER foreign_insect_server OPTIONS (ADD updatable 'false');\n \n--\u5728 local \u7aef\u7d00\u9304 remote table \u7684\u7d71\u8a08\u503c, \u5927\u578b query \u6703\u9700\u8981\nALTER SERVER foreign_insect_server OPTIONS (ADD use_remote_estimate 'true');\n")),(0,l.kt)("h2",{id:"\u8a2d\u5b9a-user-mapping"},"\u8a2d\u5b9a User Mapping"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7576\u524d Role \u8207\u9060\u7aef DB role \u5efa\u7acb\u95dc\u806f\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"=> local role totem \u8207 remote role insect \u5efa\u95dc\u806f")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--user mapping\nCREATE USER MAPPING FOR totem\n        SERVER foreign_insect_server\n        OPTIONS (user 'insect', password 'pwOfInsect');\n")),(0,l.kt)("h2",{id:"local-\u8a2d\u5b9a-foreign-table"},"Local \u8a2d\u5b9a Foreign Table"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u672c\u5730\u7aef(totem DB)\u5efa\u7acb\u8207\u9060\u7aef(insect DB) table / view \u76f8\u896f\u7684\u8cc7\u6599\u8868"),(0,l.kt)("li",{parentName:"ul"},"\u6b04\u4f4d\u7684 data type \u61c9\u914d\u5408\u9060\u7aef\u8a2d\u5b9a"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4f9d\u9700\u8981\u70ba\u6b04\u4f4d\u55ae\u7368\u8a2d\u70ba\u552f\u8b80",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"local table name insect_category_substitute:  "),(0,l.kt)("li",{parentName:"ul"},"remote table name : insect_classicfication_category")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"    --create insect_category_substitute\n    --constraints are not supported\n    CREATE FOREIGN TABLE insect_category_substitute (\n        \"class_name\" text,\n        \"order_name\" text,\n        \"family_name\" text,\n        \"genus_name\" text\n    )\n            SERVER foreign_insect_server\n            OPTIONS (schema_name 'public', table_name 'insect_classicfication_category',\n                updatable 'false', use_remote_estimate 'true'); \n                --\u8a2d\u5b9a\u70ba read only / use_remote_estimate\n")),(0,l.kt)("h2",{id:"grant-authority-of-foreign-table-to-role"},"Grant Authority of Foreign Table to Role"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c07 select insect_category_substitute \u7684\u6b0a\u9650\u7d66\u4e88 totem")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"}," grant select on insect_category_substitute to totem;\n")),(0,l.kt)("h2",{id:"\u67e5\u8a62-foreign-server--foreign-table"},"\u67e5\u8a62 foreign server / foreign table"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"pgAdmin \u4e0b\u53ea\u6703\u986f\u793a foreign server\uff0ctable / view \u7d30\u7bc0\u8981\u4e0b sql \u5f97\u77e5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--foreign server / table\nselect * from pg_foreign_data_wrapper;\n \nSELECT * FROM pg_foreign_server;\n \nSELECT * FROM pg_foreign_table;\n")),(0,l.kt)("h2",{id:"local-\u67e5\u8a62\u9060\u7aef\u8cc7\u6599\u4f7f\u7528\u7bc4\u4f8b"},"Local \u67e5\u8a62\u9060\u7aef\u8cc7\u6599\u4f7f\u7528\u7bc4\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select * from species sp \n       left join insect_category_substitute cat\n       on sp.genus_name = cat.genus_name;\n")),(0,l.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6301\u7e8c\u6574\u5408\u6e2c\u8a66\u6642\u91cd\u5efa\u8cc7\u6599\u5eab vs FDW \u6b0a\u9650\u8a2d\u5b9a\u554f\u984c"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8b93 totem \u6709 superuser \u6b0a\u9650")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"alter role totem superuser;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* template1 \u5b89\u88dd postgres_fdw\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"psql -U postgres -d template1\n\nCREATE EXTENSION postgres_fdw;\n\n--\u8b93 role totem \u53ef\u4ee5\u57f7\u884c\nGRANT USAGE ON FOREIGN DATA WRAPPER postgres_fdw to totem;\n\n--CI \u91cd\u5efa database \u6642, \u9810\u8a2d\u5c31\u662f template1, \u4e0d\u9700\u6307\u5b9a\nCREATE DATABASE totem WITH ENCODING='UTF8' OWNER=totem\n\n--TEMPLATE=template0 \nTABLESPACE=totem;\n\n")))}u.isMDXComponent=!0}}]);