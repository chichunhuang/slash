"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[8827],{3905:(t,e,o)=>{o.d(e,{Zo:()=>s,kt:()=>b});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var u=n.createContext({}),c=function(t){var e=n.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},s=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=c(o),d=r,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return o?n.createElement(b,i(i({ref:e},s),{},{components:o})):n.createElement(b,i({ref:e},s))}));function b(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[p]="string"==typeof t?t:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},31375:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={title:"Notion \u81ea\u52d5\u5316",description:"Notion \u81ea\u52d5\u5316",keywords:["Notion","Automation"]},i=void 0,l={unversionedId:"DevTech/tools/notion/Notion_Automation",id:"DevTech/tools/notion/Notion_Automation",title:"Notion \u81ea\u52d5\u5316",description:"Notion \u81ea\u52d5\u5316",source:"@site/docs/DevTech/tools/notion/Notion_Automation.md",sourceDirName:"DevTech/tools/notion",slug:"/DevTech/tools/notion/Notion_Automation",permalink:"/en/docs/DevTech/tools/notion/Notion_Automation",draft:!1,tags:[],version:"current",frontMatter:{title:"Notion \u81ea\u52d5\u5316",description:"Notion \u81ea\u52d5\u5316",keywords:["Notion","Automation"]},sidebar:"totem_sidebar",previous:{title:"Notion Apps",permalink:"/en/docs/DevTech/tools/notion/Notion_Apps"},next:{title:"Notion \u5171\u7de8",permalink:"/en/docs/DevTech/tools/notion/Notion_Collaboration"}},u={},c=[{value:"Buttons",id:"buttons",level:2},{value:"Database Buttons",id:"database-buttons",level:2},{value:"Database automation",id:"database-automation",level:2},{value:"Webhook actions",id:"webhook-actions",level:2},{value:"https://www.notion.com/zh-tw/help/category/automations",id:"httpswwwnotioncomzh-twhelpcategoryautomations",level:2}],s={toc:c},p="wrapper";function m(t){let{components:e,...o}=t;return(0,r.kt)(p,(0,n.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notion Automation: \u985e\u4f3c\u5efa\u7acb\u5de8\u96c6\uff0c\u9304\u88fd\u52d5\u4f5c\u4e26\u4ee5 Button \u9a45\u52d5\u6307\u5b9a\u52d5\u4f5c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u90e8\u5206\u529f\u80fd\u9650\u4ed8\u8cbb\u7248\u4f7f\u7528\u3002   ")),(0,r.kt)("h2",{id:"buttons"},"Buttons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 /button \u5492\u8a9e\u5efa\u7acb Button\uff0c\u7528\u4f86\u8a2d\u5b9a\u4e26\u9a45\u52d5\u4e00\u9023\u4e32\u52d5\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9700\u4f9d\u60c5\u5883\u5ba2\u88fd\u6240\u9700\u52d5\u4f5c\uff0cedu plus \u7248\u4ee5\u4e0a\u63d0\u4f9b\u5bc4\u4fe1\u529f\u80fd\u3002")),(0,r.kt)("h2",{id:"database-buttons"},"Database Buttons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9019\u908a\u6307\u7684\u662f Notion database \u53ef\u4ee5\u5efa\u7acb Button Property\u3002  "),(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u65b9\u5f0f: ")),(0,r.kt)("h2",{id:"database-automation"},"Database automation"),(0,r.kt)("h2",{id:"webhook-actions"},"Webhook actions"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"httpswwwnotioncomzh-twhelpcategoryautomations"},(0,r.kt)("a",{parentName:"h2",href:"https://www.notion.com/zh-tw/help/category/automations"},"https://www.notion.com/zh-tw/help/category/automations")))}m.isMDXComponent=!0}}]);