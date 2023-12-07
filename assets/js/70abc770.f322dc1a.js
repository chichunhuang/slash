"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[7297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(i,".").concat(m)]||s[m]||v[m]||o;return n?r.createElement(k,p(p({ref:t},u),{},{components:n})):r.createElement(k,p({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Java Cipher Intro",description:"Java \u52a0\u5bc6\u65b9\u5f0f\u7c21\u4ecb",keywords:["java","cipher","aes","sha","hash"]},p="\u52a0\u5bc6\u7a2e\u985e: \u4f9d\u52a0\u89e3\u5bc6\u6f14\u7b97\u6cd5\u7a2e\u985e\u5206",l={unversionedId:"DevTech/Java/Java_Encryption",id:"DevTech/Java/Java_Encryption",title:"Java Cipher Intro",description:"Java \u52a0\u5bc6\u65b9\u5f0f\u7c21\u4ecb",source:"@site/docs/DevTech/Java/Java_Encryption.md",sourceDirName:"DevTech/Java",slug:"/DevTech/Java/Java_Encryption",permalink:"/docs/DevTech/Java/Java_Encryption",draft:!1,tags:[],version:"current",frontMatter:{title:"Java Cipher Intro",description:"Java \u52a0\u5bc6\u65b9\u5f0f\u7c21\u4ecb",keywords:["java","cipher","aes","sha","hash"]},sidebar:"tutorialSidebar",previous:{title:"Java AES \u52a0\u89e3\u5bc6",permalink:"/docs/DevTech/Java/Java_Aes_Cipher"},next:{title:"Java PBE \u52a0\u89e3\u5bc6",permalink:"/docs/DevTech/Java/Java_Pbe_Cipher"}},i={},c=[{value:"\u5c0d\u7a31\u6027\u52a0\u5bc6\u6f14\u7b97\u6cd5\uff1a",id:"\u5c0d\u7a31\u6027\u52a0\u5bc6\u6f14\u7b97\u6cd5",level:2},{value:"\u975e\u5c0d\u7a31\u6f14\u7b97\u6cd5\uff1a",id:"\u975e\u5c0d\u7a31\u6f14\u7b97\u6cd5",level:2},{value:"\u96dc\u6e4a\u6f14\u7b97 (Hash)",id:"\u96dc\u6e4a\u6f14\u7b97-hash",level:2},{value:"PBEWITHMD5andDES",id:"pbewithmd5anddes",level:2}],u={toc:c},s="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u52a0\u5bc6\u7a2e\u985e-\u4f9d\u52a0\u89e3\u5bc6\u6f14\u7b97\u6cd5\u7a2e\u985e\u5206"},"\u52a0\u5bc6\u7a2e\u985e: \u4f9d\u52a0\u89e3\u5bc6\u6f14\u7b97\u6cd5\u7a2e\u985e\u5206"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5c0d\u7a31\u5f0f")," \u548c ",(0,a.kt)("strong",{parentName:"li"},"\u975e\u5c0d\u7a31\u5f0f")," \u52a0\u5bc6"),(0,a.kt)("li",{parentName:"ul"},"\u55ae\u5411\u96dc\u6e4a\u6f14\u7b97")),(0,a.kt)("h2",{id:"\u5c0d\u7a31\u6027\u52a0\u5bc6\u6f14\u7b97\u6cd5"},"\u5c0d\u7a31\u6027\u52a0\u5bc6\u6f14\u7b97\u6cd5\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5c0d\u7a31\u5f0f\u52a0\u5bc6\u5c31\u662f\u52a0\u5bc6\u548c\u89e3\u5bc6\u4f7f\u7528\u540c\u4e00\u500b\u5bc6\u9470\n\u8cc7\u6599\u63a5\u6536\u96d9\u65b9\u9700\u5148\u77e5\u9053\u96d9\u65b9\u52a0\u5bc6\u7684\u91d1\u9470\u8207\u6f14\u7b97\u6cd5\uff0c\u624d\u80fd\u5b8c\u6574\u52a0\u89e3\u5bc6\u3002 "),(0,a.kt)("p",{parentName:"blockquote"},"ex: AES\u3001DES\u30013DES\u3001PBEWITHMD5andDES")),(0,a.kt)("h2",{id:"\u975e\u5c0d\u7a31\u6f14\u7b97\u6cd5"},"\u975e\u5c0d\u7a31\u6f14\u7b97\u6cd5\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u975e\u5c0d\u7a31\u5f0f\u52a0\u5bc6\u5c31\u662f\u52a0\u5bc6\u548c\u89e3\u5bc6\u6240\u4f7f\u7528\u7684\u5bc6\u9470\u4e0d\u540c\uff0c\u4e00\u822c\u7a31 ",(0,a.kt)("strong",{parentName:"p"},"\u516c\u9470")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u79c1\u9470")," \u3002\n\u516c\u79c1\u9470\u5fc5\u9700\u914d\u5c0d\u4f7f\u7528\uff0c\u5426\u5247\u4e0d\u80fd\u6253\u958b\u52a0\u5bc6\u6587\u4ef6\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u8a0a\u606f\u63a5\u6536\u65b9\u5148\u88fd\u5099\u516c\u9470\u8207\u79c1\u9470\u3002\u4e26\u5c07\u516c\u9470\u767c\u9001\u7d66\u8cc7\u6599\u4f86\u6e90\u65b9\u3002\n\u8cc7\u6599\u6e90\u982d\u5247\u4f7f\u7528\u63a5\u6536\u65b9\u7684\u516c\u9470\u5c07\u8a0a\u606f\u52a0\u5bc6\uff0c\u7136\u5f8c\u5c07\u7955\u6587\u56de\u50b3\u7d66\u63a5\u6536\u65b9\uff0c\u63a5\u6536\u65b9\u518d\u4f9d\u64da\u81ea\u5df1\u898f\u5247\u7d50\u5408\u516c\u79c1\u9470\u9032\u884c\u89e3\u5bc6\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u6240\u4ee5\uff0c\u539f\u5247\u4e0a\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u63a5\u6536")," \u8a0a\u606f\u7684\u4eba\u4f86 ",(0,a.kt)("strong",{parentName:"p"},"\u6c7a\u5b9a\u6f14\u7b97")," \u5de5\u5177\u548c ",(0,a.kt)("strong",{parentName:"p"},"\u6d3e\u767c\u91d1\u9470")," \u3002"),(0,a.kt)("p",{parentName:"blockquote"},"ex: RSA\u3001DSA\u3001ECC")),(0,a.kt)("h2",{id:"\u96dc\u6e4a\u6f14\u7b97-hash"},"\u96dc\u6e4a\u6f14\u7b97 (Hash)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53c8\u7a31\u70ba ",(0,a.kt)("strong",{parentName:"p"},"\u6563\u5217\u7b97\u6cd5")," ,\u6216 ",(0,a.kt)("strong",{parentName:"p"},"\u54c8\u5e0c\u51fd\u6578")," \u3002\n\u96dc\u6e4a\u6f14\u7b97\u4e5f\u80fd\u5c07\u8cc7\u6599\u8f49\u70ba\u5bc6\u6587\uff0c\u4f46\u662f\u7121\u6cd5\u5c07\u5bc6\u6587\u8f49\u56de\u660e\u6587\u3002\n\u6240\u4ee5\uff0c\u96dc\u6e4a\u6f14\u7b97\u901a\u5e38\u53ea\u662f\u7528\u4f86\u9a57\u8b49\u8cc7\u6599\u50b3\u905e\u904e\u7a0b\u662f\u5426\u907a\u6f0f\u5c01\u5305\u3002\u4e5f\u5c31\u662f\u9a57\u8b49\u8cc7\u6599\u5b8c\u6574\u6027(Integrity)\u6642\u4f7f\u7528\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"ex: MD5\u3001SHA1\u3001HMAC")),(0,a.kt)("h2",{id:"pbewithmd5anddes"},"PBEWITHMD5andDES"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u985e\u4f3c\u5c0d\u7a31\u5f0f\u52a0\u5bc6\uff0c\u53ea\u662f\u6536\u9001\u96d9\u65b9\u4fdd\u5b58\u7684\u4e0d\u662f\u91d1\u9470\u800c\u662f\u4e00\u7d44\u5bc6\u78bc\u3002\n\u6536\u9001\u96d9\u65b9\u6301\u6709\u5bc6\u78bc\uff0cApp\u7ba1\u7406\u4eba(ex:MIS)\u5247\u4fdd\u6709\u96dc\u6e4a\u78bc\uff0c\u7a0b\u5f0f\u4e2d\u5247\u5167\u85cf\u6f14\u7b97\u905e\u8ff4\u6b21\u6578\u3002\nPBEWITHMD5andDES \u6f14\u7b97\u6cd5\u591a\u4e86\u6a5f\u500b\u53c3\u6578"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 pwd \u4f86\u5efa\u7acb encryption key\u3002"),(0,a.kt)("li",{parentName:"ol"},"salt string"),(0,a.kt)("li",{parentName:"ol"},"\u6f14\u7b97\u7684\u905e\u8ff4\u6b21\u6578\n\u4e5f\u5c31\u662f\u8aaa\u76f8\u8f03\u65bc\u4e00\u822c\u5c07 salt \u52a0\u5165\u8cc7\u6599\u52a0\u5bc6\u6f14\u7b97\u5916\uff0c\nPBEWITHMD5andDES A:\u9084\u6703\u6aa2\u67e5\u89e3\u5bc6\u91d1\u9470\u662f\u5426\u6b63\u78ba\u3002\n\u53e6\u5916\uff0cB:\u4e5f\u6703\u4f9d\u64da iteration count \u8a2d\u5b9a\u503c\u4f86\u91cd\u8907\u52a0\u5bc6\u6240\u5f97\u51fa\u7684\u7d50\u679c\u3002\n\u5229\u7528\u589e\u52a0 A/B \u5169\u9805\u63aa\u65bd\u589e\u52a0\u5317\u7834\u89e3\u7684\u96e3\u5ea6\u3002"))))}v.isMDXComponent=!0}}]);