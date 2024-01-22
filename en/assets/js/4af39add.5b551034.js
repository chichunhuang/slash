"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[353],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u95dc\u9589 Browser or Tab \u81ea\u52d5\u767b\u51fa",description:"\u95dc\u9589 Browser or Tab \u81ea\u52d5\u767b\u51fa",keywords:["Session Fixation","logout","close browser"]},i="\u95dc\u9589 Browser or Tab \u6642\u81ea\u52d5\u767b\u51fa\u89e3\u6c7a\u65b9\u6848",s={unversionedId:"DevTech/Java/Session_Fixation",id:"DevTech/Java/Session_Fixation",title:"\u95dc\u9589 Browser or Tab \u81ea\u52d5\u767b\u51fa",description:"\u95dc\u9589 Browser or Tab \u81ea\u52d5\u767b\u51fa",source:"@site/docs/DevTech/Java/Session_Fixation.md",sourceDirName:"DevTech/Java",slug:"/DevTech/Java/Session_Fixation",permalink:"/en/docs/DevTech/Java/Session_Fixation",draft:!1,tags:[],version:"current",frontMatter:{title:"\u95dc\u9589 Browser or Tab \u81ea\u52d5\u767b\u51fa",description:"\u95dc\u9589 Browser or Tab \u81ea\u52d5\u767b\u51fa",keywords:["Session Fixation","logout","close browser"]},sidebar:"tutorialSidebar",previous:{title:"Gson fromJson \u62cb\u51fa ClassCastException",permalink:"/en/docs/DevTech/Java/JSON/GSON_ClassCastException"},next:{title:"\u975e\u6b63\u898fSession Fixation\u8655\u7406",permalink:"/en/docs/DevTech/Java/Session_Fixation_Wicket"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u95dc\u9589-browser-or-tab-\u6642\u81ea\u52d5\u767b\u51fa\u89e3\u6c7a\u65b9\u6848"},"\u95dc\u9589 Browser or Tab \u6642\u81ea\u52d5\u767b\u51fa\u89e3\u6c7a\u65b9\u6848"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8981\u8ffd\u8e64\u4f7f\u7528\u8005\u672a\u767b\u51fa\u4fbf\u95dc\u9589 Browser \u6216\u95dc\u9589 Tab \u6642\uff0c\u6700\u76f4\u63a5\u7684\u65b9\u6cd5\u4fbf\u662f\u8ffd\u8e64 onunload/ onbeforeunload \u4e8b\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u76ee\u524d\u9019\u5169\u500b event \u90fd\u6703\u9650\u5236 alert \u7b49\u529f\u80fd\u3002\u807d\u8aaa\u662f\u8a50\u9a19\u96c6\u5718\u5e38\u4f7f\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"onunload \u4e8b\u4ef6\u96d6\u7136\u88ab\u73fe\u4eca\u5927\u591a\u6578\u700f\u89bd\u5668\u9650\u5236\uff0c\u4f46\u662f\u90e8\u5206\u529f\u80fd\u9084\u662f\u53ef\u4ee5\u4f7f\u7528\u3002\u9810\u8a08\u8655\u7406\u65b9\u5f0f\u662f\u5728 unload \u4e8b\u4ef6\u767c\u751f\u6642\u80cc\u5f8c\u81ea\u52d5\u50b3\u9001\u4e00\u500b httprequest \u7d66\u5f8c\u65b9 server\u3002\u4ee5\u79fb\u9664 Session \u6216\u662f Token\u3002\u4f86\u9054\u5230\u4e3b\u52d5\u767b\u51fa\u6548\u679c\uff0c\u4e26\u907f\u514d Session key \u6b98\u7559\u4f9b\u99ed\u5ba2\u4f7f\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"clinet-server \u67b6\u69cb\u4e0b\u6e2c\u8a66\u53ef\u884c\uff0cOAuth \u63a8\u6e2c\u7528\u76f8\u540c\u6982\u5ff5\u6e05\u9664 TOKEN \u61c9\u8a72\u4e5f\u884c\u5f97\u901a\u3002")),(0,o.kt)("h1",{id:"\u95dc\u9589\u6642\u81ea\u52d5\u767b\u51fa\u7bc4\u4f8b"},"\u95dc\u9589\u6642\u81ea\u52d5\u767b\u51fa\u7bc4\u4f8b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTML \u7aef\u6514\u622a onunload event\uff0c\u4e26\u5373\u523b\u5411\u5f8c\u65b9\u767c\u51fa\u767b\u51fa Request\u3002"),(0,o.kt)("li",{parentName:"ul"},"Server \u7aef\u7684\u8a71\u6bcf\u5bb6\u7684\u8a9e\u8a00\u4e0d\u540c\uff0c\u6982\u5ff5\u4e0a\u5c31\u662f\u6536\u5230 request \u5f8c\u767b\u51fa\u4fbf\u662f\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'\n<script>\n                \n      window.onunload = function() {\n           var pathArray = window.location.pathname.split(\'/\');\n           var appPath = window.location.protocol + "//" + window.location.host\n                  + "/" + pathArray[1] + "/";\n            $.ajax({\n                   url : appPath + "logout_browser"\n               });\n       }    \n           \n<\/script>\n\n')))}d.isMDXComponent=!0}}]);