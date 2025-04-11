"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[1141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>w});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,w=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(w,r(r({ref:t},u),{},{components:n})):a.createElement(w,r({ref:t},u))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50013:(e,t,n)=>{n.d(t,{y:()=>i});var a=n(67294);function i(e,t,n){void 0===n&&(n={});let i=n.width,r=n.height,l=!!n.hidden,p=n.degree?n.degree:0,s="https://drive.google.com/file/d/"+(o(e)?"1-BpQLo_Lc4OMolKwOifCwMAK32qyCMgL":e)+"/preview",u="/gd/waiting/"+(o(t)?"insect_totem_logo_70x70.jpg":t);return a.createElement("span",null,a.createElement("iframe",{src:s,width:i,height:r,allow:"autoplay",scrolling:"false",style:{transform:"rotate("+p+"deg)"}}),a.createElement("img",{src:u,hidden:l,style:{transform:"rotate("+p+"deg)"}}))}function o(e){return!e||/^\s*$/.test(e)}},7934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),o=n(50013);const r={title:"Notion View \u8cc7\u6599\u5448\u73fe\u65b9\u5f0f",description:"Notion Views",keywords:["Notion","Views"]},l=void 0,p={unversionedId:"DevTech/tools/notion/Notion_View",id:"DevTech/tools/notion/Notion_View",title:"Notion View \u8cc7\u6599\u5448\u73fe\u65b9\u5f0f",description:"Notion Views",source:"@site/docs/DevTech/tools/notion/07_Notion_View.md",sourceDirName:"DevTech/tools/notion",slug:"/DevTech/tools/notion/Notion_View",permalink:"/en/docs/DevTech/tools/notion/Notion_View",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Notion View \u8cc7\u6599\u5448\u73fe\u65b9\u5f0f",description:"Notion Views",keywords:["Notion","Views"]},sidebar:"totem_sidebar",previous:{title:"Notion \u8868\u55ae",permalink:"/en/docs/DevTech/tools/notion/Notion_Form"},next:{title:"Notion Board View",permalink:"/en/docs/DevTech/tools/notion/Notion_View_Boards"}},s={},u=[{value:"Notion Views",id:"notion-views",level:2},{value:"Views (Layout)",id:"views-layout",level:2},{value:"\u57fa\u672c\u8a2d\u5b9a:",id:"\u57fa\u672c\u8a2d\u5b9a",level:3},{value:"Peak \u9801\u9762:",id:"peak-\u9801\u9762",level:3},{value:"Detail Page UI \u8a2d\u5b9a\u5165\u53e3:",id:"detail-page-ui-\u8a2d\u5b9a\u5165\u53e3",level:3},{value:"Notion Views \u985e\u5225",id:"notion-views-\u985e\u5225",level:2}],d={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"notion-views"},"Notion Views"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Notion Database \u529f\u80fd\u7684\u5ef6\u4f38\uff0c\n\u5141\u8a31 Notion Database \u4f9d\u4e0d\u540c\u7684\u76ee\u7684\u6539\u8b8a\u8996\u89ba\u5448\u73fe\u3002\nDatabase \u9810\u8a2d\u4ee5 Table View \u5448\u73fe\u3002\n")),(0,i.kt)("h2",{id:"views-layout"},"Views ","(","Layout)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u65b0\u5efa\u7acb Database \u6642\u6703\u5728\u4e3b\u9801\u4e0b\u81ea\u52d5\u5efa\u7acb Database Page\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","Page \u9810\u8a2d\u6703\u4ee5 View of database \u547d\u540d\u3002\u5efa\u8b70\u5373\u523b\u4f9d view + db \u6539\u540d\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u82e5\u65b0\u589e\u5176\u4ed6 Database View\uff0c\u5247 Database Page \u4e0b\u6703\u51fa\u73fe\u76f8\u95dc\u5b50\u5206\u652f\u3002 ")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Database Page Menu \u76f8\u95dc\u7d50\u69cb")),(0,i.kt)("div",null,(0,o.y)("157IWXKoY7-8I4NoB6HTO1ttwChSv_OnD","07_Notion_Views.png",{width:"652px",height:"142px",hidden:!0,degree:0})),(0,i.kt)("h3",{id:"\u57fa\u672c\u8a2d\u5b9a"},"\u57fa\u672c\u8a2d\u5b9a:"),(0,i.kt)("p",null,"Database Layout \u8207 Columns \u7684\u986f\u793a\u96b1\u85cf\uff0c\u76f8\u95dc\u8a2d\u5b9a\u5728 ",(0,i.kt)("b",null,"\u53f3\u4e0a\u7684 ",(0,i.kt)("code",null," ","\xa0",(0,i.kt)("strong",{parentName:"p"}," \u2026 ")," ","\xa0")),(0,i.kt)("br",{parentName:"p"}),"\n","\u8207 View \u76f8\u95dc\u7684 Specific \u8a2d\u5b9a\u6703\u653e\u5728 View ",(0,i.kt)("b",null,"\u53f3\u4e0a\u7684\u76f8\u95dc\u5feb\u6377"),"\u6216\u76f4\u63a5\u9ede View Title",(0,i.kt)("br",{parentName:"p"}),"\n","Card \u7684\u76f8\u95dc\u8a2d\u5b9a\u6216 peak \u6703\u5728 card ",(0,i.kt)("b",null,"\u53f3\u4e0a\u65b9"),"   "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Database Views \u76f8\u95dc\u8a2d\u5b9a\u5165\u53e3")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Layout \u8a2d\u5b9a"),(0,i.kt)("span",null,(0,o.y)("1l6rcGUYQK9g6jAkT-a4VrU6GAErCMg4U","07_Notion_Views_02.png",{width:"652px",height:"206px",hidden:!0,degree:0})),(0,i.kt)("span",null,(0,o.y)("1IxBxbpxxWnR-Y1HDnDx1Wzq4l_Dm9sRJ","07_Notion_Views_03.png",{width:"267px",height:"350px",hidden:!0,degree:0}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u55ae\u4e00 View \u5c08\u5c6c\u8a2d\u5b9a"),(0,i.kt)("div",null,(0,o.y)("1h_SHXBZ31C5-IdAc8XpdMzTAtaMGHAd-","07_Notion_Views_04.png",{width:"372px",height:"272px",hidden:!0,degree:0})))),(0,i.kt)("h3",{id:"peak-\u9801\u9762"},"Peak \u9801\u9762:"),(0,i.kt)("p",null,"Peak \u6307\u7684\u662f Row \u7684 Detail Page",(0,i.kt)("br",{parentName:"p"}),"\n","\u7576\u6ed1\u9f20\u79fb\u81f3 Name Column \u6642\u6240\u958b\u555f\u7684 Detail Page\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u9019\u500b Page \u662f Row \u7684\u4e00\u90e8\u5206\uff0c\u4e0d\u662f SubPage\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u6b64\u5916\uff0c\u8cc7\u6599\u5eab\u9801\u9762\u53ef\u4ee5\u81ea\u884c\u8a2d\u5b9a ",(0,i.kt)("b",null,"Detail \u9801\u5448\u73fe\u8cc7\u8a0a\u8207\u6392\u7248\u65b9\u5f0f"),"\uff0c",(0,i.kt)("br",{parentName:"p"}),"\n","\u53ef\u80fd\u56e0\u90e8\u5206\u7684 View \u5728\u5448\u986f\u6642\u50c5\u986f\u793a\u6307\u5b9a\u6458\u8981\u8cc7\u8a0a\uff0c\u6545\u63d0\u4f9b Row Detail Page \u529f\u80fd\u3002    "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Peak ","(","Detail Page)")),(0,i.kt)("div",null,(0,o.y)("1vfxXgoDy8_nrZcqfoYmWJmTnpb071Ew9","07_Notion_Views_05.png",{width:"652px",height:"257px",hidden:!0,degree:0})),(0,i.kt)("h3",{id:"detail-page-ui-\u8a2d\u5b9a\u5165\u53e3"},"Detail Page UI \u8a2d\u5b9a\u5165\u53e3:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\uddb1hover > \u79fb\u81f3\u6a19\u984c\u4e0a\u65b9 > Customize Layout  "),(0,i.kt)("li",{parentName:"ul"},"\u6216\u662f\u958b\u555f peak page > \u53f3\u4e0a ",(0,i.kt)("strong",{parentName:"li"}," \u2026 ")," > Customize Layout  "),(0,i.kt)("li",{parentName:"ul"},"\u62d6\u62c9 Panel \u5373\u53ef\u9032\u884c\u7248\u9762\u7de8\u6392"),(0,i.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u5f8c\u8a18\u5f97\u53f3\u4e0a\u89d2\u7684 ",(0,i.kt)("strong",{parentName:"li"},"Apply to all pages")," \u9032\u884c\u5132\u5b58")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Peak ","(","Detail Page) \u756b\u9762\u8abf\u6574")),(0,i.kt)("div",null,(0,o.y)("1Ujj2BCVnDiX1X0hMtB2yHVuBTETF9snR","07_Notion_Views_06.png",{width:"652px",height:"350px",hidden:!0,degree:0})),(0,i.kt)("h2",{id:"notion-views-\u985e\u5225"},"Notion Views \u985e\u5225"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Notion_View_Boards"},"Boards View")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Notion_View_Calendar"},"Calendar View")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Notion_View_Timeline"},"Timeline View")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Notion_View_Gallery"},"Gallery View")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./Notion_View_Chart"},"Chart View"))))}m.isMDXComponent=!0}}]);