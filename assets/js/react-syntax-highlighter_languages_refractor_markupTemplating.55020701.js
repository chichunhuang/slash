"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[3047],{93205:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var u=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"==typeof r&&!r(e))return e;for(var o,c=u.length;-1!==t.code.indexOf(o=n(a,c));)++c;return u[c]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function u(c){for(var i=0;i<c.length&&!(o>=r.length);i++){var s=c[i];if("string"==typeof s||s.content&&"string"==typeof s.content){var l=r[o],p=t.tokenStack[l],g="string"==typeof s?s:s.content,f=n(a,l),k=g.indexOf(f);if(k>-1){++o;var m=g.substring(0,k),h=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),d=g.substring(k+f.length),y=[];m&&y.push.apply(y,u([m])),y.push(h),d&&y.push.apply(y,u([d])),"string"==typeof s?c.splice.apply(c,[i,1].concat(y)):s.content=y}}else s.content&&u(s.content)}return c}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);