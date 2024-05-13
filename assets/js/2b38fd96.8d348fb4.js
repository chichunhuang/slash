"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[498],{53373:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));n(13848);const a={title:"Python Print",description:"Python Print \u65b9\u6cd5",keywords:["Python","Tutorial"]},l="Python Print()",i={unversionedId:"DevTech/Python/Python_Basic_Print",id:"DevTech/Python/Python_Basic_Print",title:"Python Print",description:"Python Print \u65b9\u6cd5",source:"@site/docs/DevTech/Python/Python_Basic_Print.md",sourceDirName:"DevTech/Python",slug:"/DevTech/Python/Python_Basic_Print",permalink:"/docs/DevTech/Python/Python_Basic_Print",draft:!1,tags:[],version:"current",frontMatter:{title:"Python Print",description:"Python Print \u65b9\u6cd5",keywords:["Python","Tutorial"]},sidebar:"tutorialSidebar",next:{title:"Python \u6a94\u6848\u64cd\u4f5c",permalink:"/docs/DevTech/Python/Python_File"}},s={},p=[{value:"print() \u8a9e\u6cd5",id:"print-\u8a9e\u6cd5",level:2},{value:"print to File: \u8f38\u51fa\u81f3\u6a94\u6848",id:"print-to-file-\u8f38\u51fa\u81f3\u6a94\u6848",level:2},{value:"Separator",id:"separator",level:2}],u={toc:p},h="wrapper";function c(t){let{components:e,...n}=t;return(0,o.kt)(h,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-print"},"Python Print()"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u89ba\u5f97\u9019\u500b\u4e3b\u984c\u5f88\u8822\uff0c\u90a3\u5c31\u8df3\u904e\u5427!  "),(0,o.kt)("p",{parentName:"blockquote"},"\u9019\u908a\u4e3b\u8981\u7d00\u9304\u5982\u4f55\u5c07\u8cc7\u6599\u5370\u5230\u6307\u5b9a\u6a94\u6848\u4e2d\u3002  ")),(0,o.kt)("h2",{id:"print-\u8a9e\u6cd5"},"print() \u8a9e\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"objects: \u9810\u8a2d\u53ef\u63a5\u53d7 varArgs \u8cc7\u6599\u3002\u4ee5\u9017\u865f\u5206\u9694\u8981\u5370\u51fa\u7684\u7269\u4ef6\u3002  ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5370\u51fa\u7269\u4ef6\u7684",(0,o.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"str()"),"\u5167\u5bb9  "))),(0,o.kt)("li",{parentName:"ul"},"sep: separator\uff0c\u5370\u591a\u7269\u4ef6\u6642\u5167\u5bb9\u7684\u5206\u9694\u7b26\u865f\u3002    "),(0,o.kt)("li",{parentName:"ul"},"end: \u53ef\u4ee5\u81ea\u884c\u70ba\u6bcf\u4e00\u6b21\u5217\u5370\u52d5\u4f5c\u6307\u5b9a\u884c\u5c3e\u5167\u5bb9\u3002\u9810\u8a2d\u70ba\u63db\u884c ","\\","n\u3002  "),(0,o.kt)("li",{parentName:"ul"},"file: \u53ef\u6307\u5b9a\u8f38\u51fa\u4f4d\u7f6e\uff0c\u9810\u8a2d\u70ba sys.stdout\u3002  "),(0,o.kt)("li",{parentName:"ul"},"flush: \u8cc7\u6599\u662f\u5426\u66ab\u5b58\u3002\u53ef\u63a5\u53d7\u503c\u70ba True/False \u7269\u4ef6(\u6ce8\u610f\u70ba\u5927\u5beb)\u3002  s")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Syntax")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    print(\n      [objects...] \n      [, sep='']\n      [, end='\\n'] \n      [, file='']\n      [, flush = False]\n     )                           \n\n")),(0,o.kt)("h2",{id:"print-to-file-\u8f38\u51fa\u81f3\u6a94\u6848"},"print to File: \u8f38\u51fa\u81f3\u6a94\u6848"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f: \u6a94\u6848\u8981\u7528 append mode\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nwith open(r'D:\\log.txt', 'a') as logFile:\n    print('Hello, Python!', file=logFile)   \n                           \n")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nimport sys\ntemp = sys.stdout\nsys.stdout = open(r'D:\\log.txt', 'a')\nprint('Hello')\nprint('World')\nprint('!')\nsys.stdout.close()\nsys.stdout = temp                        \n")),(0,o.kt)("h2",{id:"separator"},"Separator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"tom = \"Tom Cat\"\njerry = 'Jerry Mouse'\n\nprint(tom, jerry, sep=' and ', end='*** \\n')\n# Tom Cat and Jerry Mouse*** \n# \n")))}c.isMDXComponent=!0}}]);