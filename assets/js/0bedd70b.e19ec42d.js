"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),k=r,d=c["".concat(l,".").concat(k)]||c[k]||m[k]||a;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={title:"\u3010\u975e\u6b63\u898fSession Fixation\u8655\u7406\u3011",description:"\u964d\u4f4e\u98a8\u96aa\uff0c\u4e26\u672a\u5b8c\u5168\u5373\u6642",keywords:["Session Fixation","Wicket"]},o="Session Fixation \u7684[\u975e\u6b63\u898f]\u8655\u7406\u65b9\u5f0f",s={unversionedId:"tech/Wicket_Session_Fixation",id:"tech/Wicket_Session_Fixation",title:"\u3010\u975e\u6b63\u898fSession Fixation\u8655\u7406\u3011",description:"\u964d\u4f4e\u98a8\u96aa\uff0c\u4e26\u672a\u5b8c\u5168\u5373\u6642",source:"@site/docs/tech/Wicket_Session_Fixation.md",sourceDirName:"tech",slug:"/tech/Wicket_Session_Fixation",permalink:"/slash/docs/tech/Wicket_Session_Fixation",draft:!1,tags:[],version:"current",frontMatter:{title:"\u3010\u975e\u6b63\u898fSession Fixation\u8655\u7406\u3011",description:"\u964d\u4f4e\u98a8\u96aa\uff0c\u4e26\u672a\u5b8c\u5168\u5373\u6642",keywords:["Session Fixation","Wicket"]},sidebar:"tutorialSidebar",previous:{title:"\u3010Tomcat Cookie \u5b89\u5168\u6027\u8a2d\u5b9a\u3011",permalink:"/slash/docs/tech/Tomat/Tomcat_Httponly"}},l={},u=[{value:"\u5f37\u884c\u66f4\u63db JSESSIONID",id:"\u5f37\u884c\u66f4\u63db-jsessionid",level:2},{value:"\u96e2\u958b\u9801\u9762\u6642\uff0c\u6bba\u6b7b\u7576\u524d SESSION\u3002",id:"\u96e2\u958b\u9801\u9762\u6642\u6bba\u6b7b\u7576\u524d-session",level:2},{value:"\u7e2e\u77ed Session key \u7684\u6548\u671f",id:"\u7e2e\u77ed-session-key-\u7684\u6548\u671f",level:2},{value:"JSESSIONID \u507d\u88dd",id:"jsessionid-\u507d\u88dd",level:2},{value:"web.xml Session Time \u8a2d\u5b9a",id:"webxml-session-time-\u8a2d\u5b9a",level:2},{value:"Java code \u8a2d\u5b9a MaxInactiveInterval",id:"java-code-\u8a2d\u5b9a-maxinactiveinterval",level:2},{value:"\u5176\u4ed6: \u700f\u89bd\u5668\u63d0\u9192:",id:"\u5176\u4ed6-\u700f\u89bd\u5668\u63d0\u9192",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"session-fixation-\u7684\u975e\u6b63\u898f\u8655\u7406\u65b9\u5f0f"},"Session Fixation \u7684","[\u975e\u6b63\u898f]","\u8655\u7406\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u975e\u6b63\u898f: \u56e0\u70ba\u9084\u662f\u6703\u88ab\u5de5\u5177\u6383\u51fa\u4f86\u3002\u4e0b\u5217\u65b9\u6cd5\u50c5\u662f\u964d\u4f4e\u88ab\u99ed\u7684\u6a5f\u6703\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8abf\u6574\u6982\u5ff5:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5f37\u884c\u66f4\u63db JSESSIONID \u503c\uff0c\u7e2e\u77ed ID \u7684\u6548\u671f\u3002\u5c31\u8b93\u4f60\u5077\u5427!\u6211\u983b\u7e41\u66f4\u63db key \u7e3d\u884c\u4e86\u5427"),(0,r.kt)("li",{parentName:"ul"},"\u96e2\u958b\u9801\u9762\u6642\uff0c\u6bba\u6b7b\u7576\u524d SESSION"),(0,r.kt)("li",{parentName:"ul"},"Container \u7e2e\u77ed Session Timeout \u6642\u9593"),(0,r.kt)("li",{parentName:"ul"},"JSESSIONID \u507d\u88dd"))),(0,r.kt)("li",{parentName:"ul"},"Session Timeout")),(0,r.kt)("h2",{id:"\u5f37\u884c\u66f4\u63db-jsessionid"},"\u5f37\u884c\u66f4\u63db JSESSIONID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ee5 Wicket Framework \u70ba\u7bc4\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nSignInPanel {\n  public String signIn(String username, String password) throws AuthenticationException {\n        //\u66f4\u63db Session(Session \u9084\u6d3b\u8457), \u5176\u4ed6 cookies \u6703\u4e00\u4f75\u88ab\u6e05\u9664\u3002\n        getBaseSession().replaceSession();\n  }\n}\n\n")),(0,r.kt)("h2",{id:"\u96e2\u958b\u9801\u9762\u6642\u6bba\u6b7b\u7576\u524d-session"},"\u96e2\u958b\u9801\u9762\u6642\uff0c\u6bba\u6b7b\u7576\u524d SESSION\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"invalidete : \u6574\u500b Session \u88ab\u6467\u6bc0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' ExternalLink link = new ExternalLink("destSystemUrl",\n                            tuple.getSecond());\n                    link.add(new AjaxEventBehavior("click") {\n\n                        @Override\n                        protected void onEvent(AjaxRequestTarget target) {\n                            // \u66f4\u81f3\u5176\u4ed6\u5916\u90e8\u9801\u9762\u6642\uff0c\u6bba\u6b7b\u7576\u4e0b\u7cfb\u7d71\u7684 Session\n                            getSession().invalidate();\n                        }\n\n                        @Override\n                        protected void updateAjaxAttributes(\n                                AjaxRequestAttributes attributes) {\n                            super.updateAjaxAttributes(attributes);\n                            // \u56e0\u70ba Ajax \u70ba\u540c\u6b65\u52d5\u4f5c\u70ba\u907f\u514d\u8f49\u5916\u90e8\u9801\u9762\u6642 request \u5c1a\u672a\u52d5\u4f5c\u4fbf\u767b\u51fa\uff0c\u6545\u5ef6\u90721sec,\n                            // \u4ee5\u907f\u514d\u7576\u524d Session \u5148 destroy \u800c\u8df3\u5230\u767b\u5165\u9801\n                            attributes.setThrottlingSettings(\n                                    new ThrottlingSettings(link.getMarkupId(),\n                                            Duration.ONE_SECOND, true));\n                        }\n                    });\n')),(0,r.kt)("h2",{id:"\u7e2e\u77ed-session-key-\u7684\u6548\u671f"},"\u7e2e\u77ed Session key \u7684\u6548\u671f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528\u8005\u505a\u52d5\u4f5c\u6642: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"action(on request submit) =>  change Session ID"))),(0,r.kt)("li",{parentName:"ul"},"Session \u8207\u539f\u672c\u7684 Cookies \u90fd\u9084\u5728\uff0c\u4f46\u662f Container \u7528\u4f86\u8fa8\u5225 Session \u7684 token \u5df2\u88ab\u66f4\u63db.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n    //Wicket7.x\n    ServletWebRequest request = (ServletWebRequest) RequestCycle\n                .get().getRequest();\n    HttpServletRequest httpRequest = request.getContainerRequest();\n    Map params = httpRequest.getParameterMap();\n    httpRequest.changeSessionId();\n        \n    //Wicket8.x\n    Session session = getSession();\n    BaseSession bs = (BaseSession) session;\n    session.changeSessionid();\n\n")),(0,r.kt)("h2",{id:"jsessionid-\u507d\u88dd"},"JSESSIONID \u507d\u88dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u88ab\u653b\u64ca\u7576\u4e0b\uff0c\u55ae\u7d14\u53ea\u662f\u70ba\u4e86\u722d\u53d6\u6642\u9593\u800c\u5df2......"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u6539\u9810\u8a2d Container Session ID \u7684 key : jsessionid"),(0,r.kt)("li",{parentName:"ul"},"\u507d\u88dd\u4e00\u500b jsessionid \u653e\u5165 cookie\uff0c\u4e0d\u8b8a\u66f4\u503c\u3002\u7528\u4ee5\u6a21\u64ec\u9810\u8a2d Session ID \u52d5\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u88fd\u4f5c\u5341\u500b\u5047\u7684\u52d5\u614b\u8b8a\u66f4\u503c\u7684 cookies\uff0c\u5176\u4e2d\u4e00\u500b\u662f\u771f\u6b63\u7684 Session ID",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u642d\u914d tomcat \u66f4\u63db Session ID \u7684 key : fake_session_name")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//server.xml: \u66f4\u6539 \u9810\u8a2d sessionCookieName \u65b9\u6cd5A\n<Context path="/" docBase="webapp" reloadable="false" sessionCookieName="fake_session_name"></Context>\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//context.xml:  \u66f4\u6539\u9810\u8a2d sessionCookieName \u65b9\u6cd5B\n\n<Context sessionCookieName="fake_session_name ">\n \n    \x3c!-- Default set of monitored resources. If one of these changes, the    --\x3e\n    \x3c!-- web application will be reloaded.                                   --\x3e\n    <WatchedResource>WEB-INF/web.xml</WatchedResource>\n    <WatchedResource>${catalina.base}/conf/web.xml</WatchedResource>\n</Context>\n\n')),(0,r.kt)("h2",{id:"webxml-session-time-\u8a2d\u5b9a"},"web.xml Session Time \u8a2d\u5b9a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 web.xml \u4e2d\u7684 session-config \u8a2d\u5b9a session-timeout \u5143\u7d20 (unit: mins)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    <session-config>\n        <session-timeout>30</session-timeout>\n    </session-config>\n\n")),(0,r.kt)("h2",{id:"java-code-\u8a2d\u5b9a-maxinactiveinterval"},"Java code \u8a2d\u5b9a MaxInactiveInterval"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u55ae\u4f4d \u79d2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    session.setMaxInactiveInterval(30 * 60); \n    \n")),(0,r.kt)("h2",{id:"\u5176\u4ed6-\u700f\u89bd\u5668\u63d0\u9192"},"\u5176\u4ed6: \u700f\u89bd\u5668\u63d0\u9192:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7576\u4f7f\u7528\u8005\u5617\u8a66\u96e2\u958b\u6642\uff0c\u5982\u95dc\u9589 Browser \u6216 Browser tabs \u6642\u7d66\u4e88\u63d0\u9192\u8a0a\u606f\u3002\u8b93\u4f7f\u7528\u8005\u4e3b\u52d5\u767b\u51fa\u907f\u514d Session key \u6b98\u7559\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5fc5\u9808\u5728\u7db2\u9801\u4e0a\u6709\u4e92\u52d5\u4e4b\u5f8c\u4e0b\u5217 JS \u624d\u6703\u751f\u6548"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7576\u4e8b\u4ef6\u8fd4\u56de\u503c\u4e0d\u662f null \u6216\u8005 undefined \u6642\uff0c\u4f7f\u7528\u8005\u5c07\u6703\u88ab\u63d0\u9192\u662f\u5426\u96e2\u958b\u9801\u9762\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Firefox 44+, Chrome 51+, Opera 38+, Safari 9.1+ \u4ee5\u5f8c \u7121\u6cd5\u81ea\u8a02\u63d0\u793a\u6587\u5b57\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7db2\u8def\u4e0a\u67e5\u5230\u7684\u9810\u8a2d\u7684\u63d0\u793a\u5167\u5bb9\u5982\u4e0b:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Firefox(66.0.3)\u201c\u6b64\u9801\u9762\u60f3\u8a62\u554f\u60a8\u662f\u5426\u8981\u96e2\u958b - \u60a8\u8f38\u5165\u7684\u8cc7\u6599\u53ef\u80fd\u4e0d\u6703\u88ab\u4fdd\u5b58\u201d"),(0,r.kt)("li",{parentName:"ul"},"Safari(10.1.2)\u201c\u60a8\u78ba\u5b9a\u8981\u96e2\u958b\u6b64\u9801\u9762\u55ce?"),(0,r.kt)("li",{parentName:"ul"},"Chrome(74.0.3729.131)\u201c\u91cd\u65b0\u8f09\u5165\u6b64\u7db2\u7ad9?\u201d\u201c\u7cfb\u7d71\u53ef\u80fd\u4e0d\u6703\u4fdd\u5b58\u60a8\u6240\u505a\u7684\u66f4\u6539\u3002"),(0,r.kt)("li",{parentName:"ul"},"alert, confirm&, prompt\u4e0d\u57f7\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u4e00\u4e9b\u6d41\u89bd\u5668\u4e2d,\u5728onbeforeunload\u4e2d\u8abf\u7528alert,confirm,prompt\u7b49\u65b9\u6cd5\u6703\u88ab\u5ffd\u7565\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/how-to-detect-browser-or-tab-closing-in-javascript/"},"How to detect browser or tab closing in JavaScript ?")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"window.addEventListener('beforeunload', function (e) {\n    e.preventDefault();\n    e.returnValue = '';\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7db2\u8def\u4e0a\u7684 e.preventDefault() \u5168\u90e8\u7bc4\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<!DOCTYPE html>\n<html>\n<head>\n    <title>\n        Detect Browser or Tab Closing Event in JavaScript\n    </title>\n    <script  language=\"JavaScript\">\n      window.addEventListener('beforeunload', function (e) {\n            e.preventDefault();\n            e.returnValue = '';\n        });\n    \n    \n    <\/script>\n</head>\n<body>\n     <h1>\n        Detect Browser or Tab Closing Event in JavaScript\n    </h1>\n    <p>\n        The beforeunload event is fired just \n        before the closing the tab or browser\n        window or reloading the page. \n        In modern web browsers, you may have \n        to interate with the web\n        page to get the confirmation dialog.\n    </p>\n    <form>\n        <textarea placeholder = \"Write few words here to trigger an\n        interaction\">\n        </textarea>\n    </form>\n</body>\n</html> \n")))}m.isMDXComponent=!0}}]);