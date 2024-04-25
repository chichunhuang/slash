"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[2401],{63715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));a(13848);const o={title:"Python Package and Module",description:"Python Package and Module",keywords:["Python","Package","Module"]},p="Python Package and Module",r={unversionedId:"DevTech/Python/Advanced/Python_2_Package_Module",id:"DevTech/Python/Advanced/Python_2_Package_Module",title:"Python Package and Module",description:"Python Package and Module",source:"@site/docs/DevTech/Python/Advanced/Python_2_Package_Module.md",sourceDirName:"DevTech/Python/Advanced",slug:"/DevTech/Python/Advanced/Python_2_Package_Module",permalink:"/en/docs/DevTech/Python/Advanced/Python_2_Package_Module",draft:!1,tags:[],version:"current",frontMatter:{title:"Python Package and Module",description:"Python Package and Module",keywords:["Python","Package","Module"]},sidebar:"tutorialSidebar",previous:{title:"Python Lambda \u533f\u540d\u51fd\u5f0f",permalink:"/en/docs/DevTech/Python/Advanced/Python_2_Labmda"},next:{title:"Python \u8b8a\u6578\u8207\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d",permalink:"/en/docs/DevTech/Python/Advanced/Python_2_Variable_and_Scope"}},m={},s=[{value:'<span id="using_module">Module \u7684\u4f7f\u7528</span>',id:"module-\u7684\u4f7f\u7528",level:2},{value:"Module Importing \u7684\u6982\u8ff0",id:"module-importing-\u7684\u6982\u8ff0",level:2},{value:'<span id="module_path">Module Namespace \u8207\u8def\u5f91</span>',id:"module-namespace-\u8207\u8def\u5f91",level:2},{value:"Import \u8a9e\u6cd5\u4f7f\u7528\u5efa\u8b70",id:"import-\u8a9e\u6cd5\u4f7f\u7528\u5efa\u8b70",level:2},{value:'<span id="importing_syntax">Import \u76f8\u95dc\u8a9e\u6cd5</span>',id:"import-\u76f8\u95dc\u8a9e\u6cd5",level:2},{value:'<span id="from_import_syntax">From Import \u76f8\u95dc\u8a9e\u6cd5</span>',id:"from-import-\u76f8\u95dc\u8a9e\u6cd5",level:2},{value:"<span id='reload_syntax'>Module Reload(\u91cd\u65b0\u8f09\u5165\u6a21\u7d44)</span>",id:"module-reload\u91cd\u65b0\u8f09\u5165\u6a21\u7d44",level:2},{value:"<span id='default_modules'>\u7cfb\u7d71\u9810\u8a2d\u8f09\u5165\u7684 Modules</span>",id:"\u7cfb\u7d71\u9810\u8a2d\u8f09\u5165\u7684-modules",level:2},{value:"<span id='loading_shadow'>Python Env(VM) \u6a21\u7d44\u8f09\u5165\u9806\u5e8f: Shadow effect</span>",id:"python-envvm-\u6a21\u7d44\u8f09\u5165\u9806\u5e8f-shadow-effect",level:2},{value:'<span id="module_envelop">Module \u8207\u5c01\u88dd</span>',id:"module-\u8207\u5c01\u88dd",level:2},{value:'<span id="using_package">Package \u7684\u4f7f\u7528</span>',id:"package-\u7684\u4f7f\u7528",level:2},{value:"<strong><em> __name__ \u8207 __main__  </em></strong>",id:"-__name__-\u8207-__main__--",level:2},{value:"<span id='module_pitfall'>Module(*.py) \u4f7f\u7528\u9677\u9631\u8207\u6ce8\u610f\u4e8b\u9805</span>",id:"modulepy-\u4f7f\u7528\u9677\u9631\u8207\u6ce8\u610f\u4e8b\u9805",level:2}],i={toc:s},k="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"python-package-and-module"},"Python Package and Module"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#using_package"}," ",(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("em",{parentName:"strong"},"Package"))," ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6307\u7684\u662f\u653e Python \u76f8\u95dc\u6a94\u6848\u7684\u8cc7\u6599\u593e\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u53ef\u7c21\u55ae\u60f3\u6210\u662f\u4e00\u500b\u5b58\u653e modules \u8207 packages \u7684\u8cc7\u6599\u593e\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u8cc7\u6599\u593e\u4e2d\u9810\u671f\u6703\u6709 ",(0,l.kt)("span",{style:{color:"#0044FF"}}," ",(0,l.kt)("strong",{parentName:"p"},"_","_","init","_","_",".py")," ")," \u6a94\u6848\u3002  "),(0,l.kt)("blockquote",{parentName:"blockquote"},(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"_","_","init","_","_",".py")," \u5167\u5bb9\u53ef\u70ba\u7a7a\uff0cpython3+ \u4e2d\u53ef\u7701\u7565(\u82e5\u8003\u616e\u5411\u4e0b\u76f8\u5bb9\uff0c\u5efa\u8b70\u53ef\u4ee5\u4fdd\u7559\u6b64\u6163\u4f8b)\u3002  ")),(0,l.kt)("p",{parentName:"blockquote"},"Package \u8cc7\u6599\u593e\u53ef\u4ee5\u69fd\u4e32\uff0c\u540c\u6a23\u9810\u671f\u6bcf\u500b\u8cc7\u6599\u593e\u4e2d\u90fd\u8a72\u6709 ",(0,l.kt)("strong",{parentName:"p"},"_","_","init","_","_",".py")," \u6a94\u6848\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5728 import \u53e5\u5b50\u4e2d\u4f7f\u7528\u6642\uff0c\u9808\u7531 root package \u4f9d\u5e8f\u5beb\u6e05\u8def\u5f91\u5168\u540d(full path)\u3002  ")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#using_module"}," ",(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("em",{parentName:"strong"},"Module"))," ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c31\u662f package \u8cc7\u6599\u593e\u5167\u7684 ","*",".py \u6a94\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4f7f\u7528\u4e0a\u9700\u6ce8\u610f module name \u4e5f\u662f\u4e00\u7a2e\u8b8a\u91cf\uff0c\u6240\u4ee5\u4f7f\u7528\u6642(\u547d\u540d\u6642)\u9808\u6ce8\u610f shadow effect\u3002  ")),(0,l.kt)("h2",{id:"module-\u7684\u4f7f\u7528"},(0,l.kt)("span",{id:"using_module"},"Module \u7684\u4f7f\u7528")),(0,l.kt)("h2",{id:"module-importing-\u7684\u6982\u8ff0"},"Module Importing \u7684\u6982\u8ff0"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8207\u5176\u4ed6\u7a0b\u4f7f\u8a9e\u8a00\u4e00\u6a23\uff0cPython \u57f7\u884c\u74b0\u5883\u4e2d\u4e5f\u6703\u6709\u4e00\u4e9b\u57fa\u790e\u7684 libs \u53ef\u4f7f\u7528\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e5f\u5c31\u662f\u6240\u8b02\u7684 ",(0,l.kt)("a",{parentName:"p",href:"#default_modules"},"\u7cfb\u7d71\u9810\u8a2d\u8f09\u5165\u7684 Modules"),"\uff0c\u985e\u4f3c\u4e00\u822c SDK \u4e2d\u7684\u76f8\u95dc api\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u7576\u6211\u5011\u5728\u9032\u884c\u958b\u767c\u6642\u9664\u4e86\u539f\u751f\u7684 api \u5916\uff0c\u4e5f\u53ef",(0,l.kt)("a",{parentName:"p",href:"#importing_syntax"},"\u8f09\u5165\u81ea\u884c\u958b\u767c\u7684\u5de5\u5177\u6216\u7b2c\u4e09\u65b9\u6240\u63d0\u4f9b\u7684\u5de5\u5177"),"\u4f86\u4f7f\u7528\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u7576\u8f09\u5165\u4e0d\u540c modules \u6216\u5de5\u5177\u6642\u5247\u9808\u6ce8\u610f",(0,l.kt)("a",{parentName:"p",href:"#loading_shadow"},"\u8f09\u5165\u7684\u9806\u5e8f"),"\u4ee5\u53ca",(0,l.kt)("a",{parentName:"p",href:"#module_pitfall"},"\u662f\u5426\u51fa\u73fe\u547d\u540d\u885d\u7a81"),"\u7684\u60c5\u5f62\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u4ee5\u907f\u514d\u8f09\u5165\u932f\u8aa4\u6216\u662f\u7121\u6cd5\u6210\u529f\u5728\u5165\u6240\u9700 api \u7684\u60c5\u5f62\u767c\u751f\u3002  ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_path"},"Module Namespace \u8207\u8def\u5f91")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#importing_syntax"},"Import \u76f8\u95dc\u8a9e\u6cd5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#from_import_syntax"},"From Import \u76f8\u95dc\u8a9e\u6cd5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#reload_syntax"},"Module Reload \u76f8\u95dc\u8a9e\u6cd5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#default_modules"},"\u7cfb\u7d71\u9810\u8a2d\u8f09\u5165\u7684 Modules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#loading_shadow"},"\u6a21\u7d44\u67e5\u8a62\u9806\u5e8f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_envelop"},"Module \u8207\u5c01\u88dd")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#using_package"},"Package \u7684\u4f7f\u7528")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#module_pitfall"},"Module \u4f7f\u7528\u9677\u9631\u8207\u6ce8\u610f\u4e8b\u9805"))),(0,l.kt)("h2",{id:"module-namespace-\u8207\u8def\u5f91"},(0,l.kt)("span",{id:"module_path"},"Module Namespace \u8207\u8def\u5f91")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"namespace \u6307\u7684\u662f\u6a21\u7d44\u6240\u5728\u7684\u8cc7\u6599\u593e\u968e\u5c64\u7d50\u69cb\u3002  "),(0,l.kt)("li",{parentName:"ul"},"\u8def\u5f91\u5247\u662f Python Env \u67e5\u627e\u6a21\u7d44\u6642\u7684 namespace \u63cf\u8ff0\u65b9\u5f0f\u3002  ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7d55\u5c0d\u8def\u5f91(Absolute Path)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u500b\u4eba\u5efa\u8b70\u63a1\u7528\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u898f\u907f\u8a31\u591a\u96b1\u85cf\u7684\u98a8\u96aa\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u7531\u6574\u500b Python Environment \u4f86\u770b\u7684\u8def\u5f91\u3002\u6bcf\u500b\u8def\u5f91\u90fd\u662f\u552f\u4e00\u7684\u3002  ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u76f8\u5c0d\u8def\u5f91(Relative Path)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6307\u7684\u662f ",(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u7531 main process \u89d2\u5ea6\u4f86\u770b")," \u7684\u8def\u5f91\u3002\u4e26\u975e\u7576\u524d\u4f7f\u7528\u4e2d\u7684 module \u7684\u89d2\u5ea6\u4f86\u770b\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u500b\u4eba\u4e0d\u5efa\u8b70\u4f7f\u7528\u3002  ")),(0,l.kt)("h2",{id:"import-\u8a9e\u6cd5\u4f7f\u7528\u5efa\u8b70"},"Import \u8a9e\u6cd5\u4f7f\u7528\u5efa\u8b70"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u8003\u91cf interpreter \u5de5\u4f5c\u65b9\u5f0f\u4e0b\uff0c\u5efa\u8b70",(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u512a\u5148\u63a1\u7528 import ","[module]"," as ","[alias]"," "))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Priority of Importing Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# \u512a\u5148\u5efa\u8b70\uff0cby reference import (copy reference)\n# import [module] as [alias]\nimport datetime as dt\n\n# \u4e0b\u9762\u53ef\u4ee5\u7576\u4f5c\u6c92\u770b\u5230\n\n# \u6b21\u8981, \u7576\u8f09\u5165\u6210\u54e1\u662f \u7269\u4ef6\u985e\u5247 by reference, \u662f primitive \u5247 by value (copy value)\n# from [module] import [member] as [alias]\nfrom datetime import date as dt\n\n# \u5c11\u7528, \u6613\u767c\u751f\u8b8a\u6578\u540d\u906e\u853d. \u642d\u914d __all__ \u4f7f\u7528\n# from [module] import *\nfrom datetime import *\n\n# \u907f\u7528, \u76f8\u5c0d\u8def\u5f91\u6703\u589e\u52a0\u7dad\u8b77\u6210\u672c\n# from [relative_path] import [module] as [alias]\nfrom .. import datetime as dt\n\n")),(0,l.kt)("h2",{id:"import-\u76f8\u95dc\u8a9e\u6cd5"},(0,l.kt)("span",{id:"importing_syntax"},"Import \u76f8\u95dc\u8a9e\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"import statement, by reference \u4f86\u5c0e\u5165\u6574\u500b module\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u9808\u4ee5\u5b8c\u6574\u8def\u5f91(full path with namespace) \u6307\u5230\u6a21\u7d44 (","*",".py)\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u540c package \u53ef\u7528 shortcut path\u3002 ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"import \u8a9e\u6cd5"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import [namespace.module]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"hello.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def sayHelloWorld():\n    msg = 'Hello World'\n    print(msg)\n    return msg;\n\n\ndef say(msg: str):\n    print(msg)\n    return msg;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"totem.math.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\npi = 3.14159\n\ndef add(a: int, b: int):\n    return a + b\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"run.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import hello   #same package\nimport totem.math # diff package\n\nhello.sayHelloWorld() # Hello World\n\nhello.say("Good Day") # Good Day\n\nsum = totem.math.add(10, 20)\nprint(sum) # 30\n')),(0,l.kt)("p",null,"\u8a3b: import \u53ef\u5c0e\u5165\u7684\u4e0d\u55ae\u662f Python \u6a94\uff0c\u4e0b\u5217\u4e5f\u5728\u5141\u8a31\u7bc4\u570d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"*",".py"),(0,l.kt)("li",{parentName:"ul"},"*",".pyc"),(0,l.kt)("li",{parentName:"ul"},"*",".zip"),(0,l.kt)("li",{parentName:"ul"},"*",".dll"),(0,l.kt)("li",{parentName:"ul"},"*",".pyd"),(0,l.kt)("li",{parentName:"ul"},"*",".java ")),(0,l.kt)("h2",{id:"from-import-\u76f8\u95dc\u8a9e\u6cd5"},(0,l.kt)("span",{id:"from_import_syntax"},"From Import \u76f8\u95dc\u8a9e\u6cd5")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"from...import... statement \u7528\u4f86\u5c0e\u5165\u6a21\u7d44\u4e2d\u7684\u7279\u5b9a\u6210\u54e1\u3002\u5982\u8b8a\u6578(variable)\u3001\u51fd\u6578(function)\u3001\u985e\u5225(class)\u3001\u6a21\u7d44(module)\u7b49\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","from import statement: by reference \u5c0e\u5165\u7269\u4ef6\u985e\u6210\u54e1\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","by value \u4f86\u8907\u88fd primitive \u985e\u6210\u54e1\uff0c  ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"from",".",".","."," import \u8a9e\u6cd5"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"run2.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from [module with namespace] import [name1, name2, ...]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from hello import say as talk\nfrom totem.math import pi as CONST_PI\n\ntalk("Yahoo~") # Yahoo~\n\nprint(CONST_PI) # 3.14159\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"from",".",".","."," import ","*"," \u8a9e\u6cd5"))),(0,l.kt)("blockquote",null,(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u4e0d\u5efa\u8b70\u4f7f\u7528\uff0c\u76f8\u5c0d\u4e0a\u4f86\u8b1b\u98a8\u96aa\u8f03\u9ad8\u3002\u5bb9\u6613\u767c\u751f\u547d\u540d\u885d\u7a81\u8207\u6210\u54e1\u8986\u5beb\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from [module with namespace] import *\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"run3.py")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 asterisk \u96a8\u7136\u53ef\u4ee5\u65b9\u4fbf\u4e00\u6b21\u532f\u5165\u6240\u6709\u6210\u54e1\uff0c\u4f46\u6709\u53ef\u80fd\u4e0d\u5c0f\u5fc3\u767c\u751f\u547d\u540d\u885d\u7a81\u3002\u751a\u81f3\u8986\u84cb\u65e2\u6709\u6210\u54e1\u5167\u5bb9\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from hello import *\nfrom totem.math import *\n\nsay("implicitly import by asterisk")\n\nprint(pi) #3.14159\n\npi = 3.14\nprint(pi) # 3.14, variable conflict\n')),(0,l.kt)("h2",{id:"module-reload\u91cd\u65b0\u8f09\u5165\u6a21\u7d44"},(0,l.kt)("span",{id:"reload_syntax"},"Module Reload(\u91cd\u65b0\u8f09\u5165\u6a21\u7d44)")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"reload \u6307\u7684\u662f\u5728\u4e0d\u4e2d\u6b62 Python \u7a0b\u5e8f\u7684\u524d\u63d0\u4e0b\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u91cd\u65b0\u8f09\u5165\u76f8\u95dc\u6a21\u7d44(\u91cd\u65b0\u8b80\u53d6\u6587\u4ef6\u7684 source code)\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u662f Python3+ \u5f8c\u51fa\u73fe\u7684\u65b0\u529f\u80fd\u3002  "),(0,l.kt)("p",{parentName:"blockquote"},"reload \u6703\u91cd\u65b0\u57f7\u884c\u9802\u5c64\u7684 statement\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u7269\u4ef6\u7684\u90e8\u5206\u9700\u8981\u7b49\u5230\u91cd\u65b0\u4f7f\u7528\u91cd\u8f09\u8b8a\u91cf\u6642\u624d\u6703\u4f7f\u7528\u65b0\u8f09\u5165\u7684\u6a21\u7d44\u3002  ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"reload \u8a9e\u6cd5"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"reload \u51fd\u6578\u5728 imp \u6a21\u7d44")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from imp import reload\nreload(module)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"totem.helloworld.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import time\nprint('Hello World')\n\ncurrent_timestamp = time.time()\n\ndef hello(name: str):\n    print(f'Hell, {name}', current_timestamp)\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"run4.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from imp import reload\nimport totem.hellowrold\n\ntotem.hellowrold.hello("Totem")\ntotem.hellowrold.hello("Tim")\n# Hello World\n# Hell, Totem 1713194539.5623431\n# Hell, Tim 1713194539.5623431 # \u672a reload \u6642\uff0c\u5148\u524d\u53d6\u51fa\u7684 timestamp \u4e0d\u8b8a\u3002\n\nreload(totem.hellowrold)\ntotem.hellowrold.hello("Winnie")\ntotem.hellowrold.hello("Wendy")\n# Hello World\n# Hell, Winnie 1713194539.5633183 # reload \u5f8c\uff0c\u6574\u500b source \u91cd\u8b80\uff0c\u4e5f\u4e00\u4f75\u66f4\u65b0\u4e86 timestamp \u3002\n# Hell, Wendy 1713194539.5633183\n')),(0,l.kt)("h2",{id:"\u7cfb\u7d71\u9810\u8a2d\u8f09\u5165\u7684-modules"},(0,l.kt)("span",{id:"default_modules"},"\u7cfb\u7d71\u9810\u8a2d\u8f09\u5165\u7684 Modules")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"sys.modules \u8b8a\u6578")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"sys.modules: \u53ef\u7528\u4f86\u67e5\u8a62 ",(0,l.kt)("span",{style:{color:"#0044FF"}}," ",(0,l.kt)("strong",{parentName:"p"},"\u5df2\u8f09\u5165\u7684\u6a21\u7d44")," "),"\u8cc7\u8a0a\u3002\n\u56de\u50b3\u7d50\u679c\u70ba\u4e00\u500b dict\uff0c\u5167\u5bb9\u5305\u542b\u5df2\u5c0e\u5165\u6a21\u7d44\u540d\u7a31\u8207 api \u5be6\u969b\u6a94\u6848\u4f4d\u7f6e\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nprint(sys.modules) # <class 'dict'>, \u5be6\u969b\u532f\u5165\u6a94\u6e05\u55ae\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"}," sys.path \u8b8a\u6578"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"sys.modules \u53ef\u4ee5\u5217\u51fa\u5df2\u8f09\u5165 modules ",(0,l.kt)("strong",{parentName:"p"},"\u6a94\u6848\u4f4d\u7f6e"),"\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u800c sys.path \u5247\u662f\u5217\u51fa\u4e0a\u8ff0\u6a94\u6848\u6240\u5728\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u8cc7\u6599\u593e")," \u4f4d\u7f6e\u3002  ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nprint(sys.path) # <class 'list'>, \u5be6\u969b\u532f\u5165\u6a94\u6848\u6240\u5728\u8cc7\u6599\u593e\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"}," ","_","_","pycache","_","_"," \u8cc7\u6599\u593e"))," "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Python \u5728\u5c0e\u5165 modules \u6642\uff0c\u6703\u5148\u5c07\u6b32 ",(0,l.kt)("span",{style:{color:"#0044FF"}}," ",(0,l.kt)("strong",{parentName:"p"},"\u5c0e\u5165\u7684 modules \u5148\u57f7\u884c\u4e00\u6b21")," "),"\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u800c\u904e\u7a0b\u4e2d\u6240\u7522\u751f\u7684 byte code (","*",".pyc \u6a94)\u5247\u6703\u7d71\u4e00\u653e\u5728 ","_","_","pycache","_","_"," \u8cc7\u6599\u593e\u4e0b\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e5f\u5c31\u662f\u8aaa ","_","_","pycache","_","_",": \u53ef\u7528\u4f86\u67e5\u8a62\u5df2 Compiled \u7684\u7a0b\u5f0f\u78bc(byte code)\u5132\u5b58\u4f4d\u7f6e\u76f8\u95dc\u8cc7\u8a0a\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u53e6\u5916\uff0c\u57f7\u884c\u6642\u82e5\u539f\u59cb ","*",".py \u672a\u505a\u7570\u52d5\u5247\u4e0d\u6703\u91cd\u65b0 compile ","*",".py \u800c\u662f\u76f4\u63a5\u53d6\u7528 ","*",".pyc \u6a94\uff0c\u4ee5\u63d0\u9ad8\u6548\u80fd\u3002  ")),(0,l.kt)("h2",{id:"python-envvm-\u6a21\u7d44\u8f09\u5165\u9806\u5e8f-shadow-effect"},(0,l.kt)("span",{id:"loading_shadow"},"Python Env(VM) \u6a21\u7d44\u8f09\u5165\u9806\u5e8f: Shadow effect")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Python \u8f09\u5165 Modules \u6642\u7684\u67e5\u8a62\u8def\u5f91"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6709\u53ef\u80fd\u6703\u4f9d\u5e73\u53f0\u8207 Python \u7248\u672c\u800c\u6709\u6240\u5dee\u7570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Python \u7684 home directory: \u7a0b\u5f0f\u78bc\u6240\u5728\u4f4d\u7f6e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"PYTHONPATH: class path \u4f4d\u7f6e\uff0c\u4e5f\u5c31\u662f OS \u4e2d\u7684\u74b0\u5883\u8b8a\u6578\u7684\u8a2d\u5b9a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Standard Library Directories: Python \u5b89\u88dd\u4f4d\u7f6e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"*",".py \u6a94\u6848\u4f4d\u7f6e\uff0c\u7279\u5225\u6307\u540d\u8cc7\u6599\u593e\u4e2d\u7684 Python \u6a94\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u524d\u4e09\u9805\u8a2d\u5b9a\u9810\u8f09\u5165\u7684 modules \u8cc7\u8a0a\u53ef\u4ee5\u7d93\u7531 sys.path \u67e5\u8a62\u3002"))),(0,l.kt)("h2",{id:"module-\u8207\u5c01\u88dd"},(0,l.kt)("span",{id:"module_envelop"},"Module \u8207\u5c01\u88dd")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Python \u6c92\u6709\u5f37\u5236\u8cc7\u6599\u96b1\u85cf\u6a5f\u5236\uff0c\u4f46\u53ef\u5229\u7528\u8a9e\u6cd5\u6163\u4f8b\uff0c\u4e0d\u81ea\u52d5\u532f\u5165\u7279\u5b9a\u6a21\u7d44\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u9019\u908a\u4ecb\u7d39 ",(0,l.kt)("span",{style:{color:"#0044FF"}}," ",(0,l.kt)("a",{parentName:"p",href:"#from_import_syntax"},(0,l.kt)("strong",{parentName:"a"},"from",".",".","."," import ","*"," \u8a9e\u6cd5"))," ")," (Implicit importing) \u6642 module \u7684\u532f\u5165\u898f\u5247\u3002  ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"_","_","init","_","_",".py \u4e2d ",(0,l.kt)("a",{parentName:"li",href:"#using_package"},"_","_","all","_","_")," \u5217\u8868\u4e2d\u7684\u6a21\u7d44\u4e00\u5f8b\u9078\u53d6"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u672a\u5b9a\u7fa9 ","_","_","all","_","_","\uff0c\u5247\u53cd\u5411\u9078\u53d6\u3002\u53ea\u9650\u5236 ",(0,l.kt)("a",{parentName:"li",href:"../Python_Convention#variable_naming_rules"},"single underscore")," \u6210\u54e1\u4e0d\u5c0e\u5165\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#using_package"},"_","_","all","_","_")," : \u6b63\u5411\u5217\u8209"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../Python_Convention#variable_naming_rules"},"single underscore")," : \u53cd\u5411\u6392\u9664")),(0,l.kt)("h2",{id:"package-\u7684\u4f7f\u7528"},(0,l.kt)("span",{id:"using_package"},"Package \u7684\u4f7f\u7528")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Package \u6307\u7684\u662f\u653e Python \u76f8\u95dc\u6a94\u6848\u7684\u8cc7\u6599\u593e\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u53ef\u7c21\u55ae\u60f3\u6210\u662f\u5b58\u653e modules \u8207 packages \u7684\u8cc7\u6599\u593e\u3002\n\u4e14\u8cc7\u6599\u593e\u4e2d\u9810\u671f(\u5efa\u8b70)\u6703\u6709 ",(0,l.kt)("span",{style:{color:"#0044FF"}}," ",(0,l.kt)("strong",{parentName:"p"},"_","_","init","_","_",".py")," ")," \u6a94\u6848\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"_","_","init","_","_",".py")," \u5167\u5bb9\u53ef\u70ba\u7a7a\uff0cpython3+ \u4e2d\u53ef\u7701\u7565(\u82e5\u8003\u616e\u5411\u4e0b\u76f8\u5bb9\uff0c\u5efa\u8b70\u53ef\u4ee5\u4fdd\u7559\u6b64\u6163\u4f8b)\u3002  ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Package \u8cc7\u6599\u593e\u53ef\u4ee5\u69fd\u4e32\uff0c\u540c\u6a23\u9810\u671f\u6bcf\u500b\u8cc7\u6599\u593e\u4e2d\u90fd\u8a72\u6709 ",(0,l.kt)("strong",{parentName:"p"},"_","_","init","_","_",".py")," \u6a94\u6848\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5728 import \u53e5\u5b50\u4e2d\u4f7f\u7528\u6642\uff0c\u9808\u7531 root package \u4f9d\u5e8f\u5beb\u6e05\u8def\u5f91\u5168\u540d(full path)\u3002 ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"_","_","init","_","_",".py")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"_","_","init","_","_",".py \u5167\u5bb9\u7a7a\u7684\uff0c\u6216\u662f\u64b0\u5beb\u4e0b\u5217\u76f8\u95dc\u8cc7\u8a0a\u3002  ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"_","_","all","_","_",": \u662f\u4e00\u500b array\uff0c\u6240\u5217\u7684\u6e05\u55ae\u662f from m import * (implicitly)\u6642\u5141\u8a31\u88ab\u532f\u5165\u7684\u5b50\u6a21\u7d44\u6e05\u55ae\uff0c\n\u63db\u8a00\u4e4b\uff0c",(0,l.kt)("strong",{parentName:"p"},"implicitly import")," \u6642\u88ab\u5217\u51fa\u7684\u624d\u80fd\u7d93\u7531 import \u532f\u5165\u3002\u662f\u4e00\u7a2e\u7a0b\u5f0f\u78bc\u5c01\u88dd\u6280\u5de7\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4f46\u4ecd\u9700\u6ce8\u610f\u547d\u540d\u885d\u7a81\u8207\u906e\u853d\u554f\u984c\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u9047\u5230\u8207 Local \u8b8a\u91cf(local defined var)\u91cd\u540d\u6642\u5247\u4e0d\u6703\u532f\u5165\uff0c\u6539\u63a1\u7528 local \u8b8a\u91cf\u3002  ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6b64\u5957\u4ef6\u521d\u59cb\u5316\u6642\u6240\u9700\u7684\u6e96\u5099\u5de5\u4f5c(\u4f8b\u5982\u8cc7\u6599\u5eab\u9023\u7dda)\uff0c\u4ee5\u5229\u5f8c\u7e8c\u4f7f\u7528\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8a3b: ","_","\\init","_","_",".py \u5728\u9996\u6b21\u532f\u5165\u6642\u6703\u57f7\u884c\u4e00\u6b21\u76f8\u95dc\u5167\u5bb9\u3002  ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# __init__.py example\n\n__all__ = ["echo", "surround", "reverse"]\n')),(0,l.kt)("h2",{id:"-__name__-\u8207-__main__--"},(0,l.kt)("strong",{parentName:"h2"},(0,l.kt)("em",{parentName:"strong"}," ","_","_","name","_","_"," \u8207 ","_","_","main","_","_","  "))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"_","_","name","_","_"," == '","_","_","main","_","_","'",(0,l.kt)("br",{parentName:"p"}),"\n","_","_","name","_","_"," == 'module_name'")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7576 module (","*",".py) \u88ab\u76f4\u63a5\u57f7\u884c\u6642(\u5982\u7d93\u904e\u547d\u4ee4\u5217\u57f7\u884c)\uff0c\u8a72 module \u6703\u8b8a\u6210\u4e3b\u8981\u57f7\u884c\u7dd2\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u6b64\u6642\uff0c\u6a21\u7d44\u5167\u5efa\u7684 ","_","_","name","_","_"," \u8b8a\u6578\u6703\u7531\u9810\u8a2d\u7684\u6a21\u7d44\u540d\u7a31\u6539\u70ba ","_","_","main","_","_"," \u5b57\u4e32\u3002   "),(0,l.kt)("p",{parentName:"blockquote"},"\u800c\u5982\u679c module \u662f\u88ab\u5f15\u7528(import)\uff0c\u90a3\u9ebc","_","_","name","_","_"," \u6703\u662f\u6a21\u7d44\u540d\u7a31\u3002  "),(0,l.kt)("p",{parentName:"blockquote"},"\u56e0\u6b64\u90e8\u5206\u7684\u4eba\u5728\u5beb ",(0,l.kt)("strong",{parentName:"p"},"\u81e8\u6642\u6e2c\u8a66\u78bc")," \u6642\u6703\u5229\u7528\u6b64\u4e00\u7279\u6027\uff0c",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e5f\u5c31\u662f\u8aaa\u7576 module \u76f4\u63a5\u57f7\u884c\u6642\u624d\u6703\u547c\u53eb\u6e2c\u8a66\u78bc\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e0d\u904e\uff0c\u6211\u672c\u8eab\u5012\u662f\u8a8d\u70ba\uff0c\u6e2c\u8a66\u78bc\u61c9\u8a72\u53e6\u95e2\u8cc7\u6599\u593e\u7ba1\u7406\u624d\u662f\u3002  ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"}," ","_","_","name","_","_"," \u7bc4\u4f8b"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7576\u57f7\u884c\u7684\u662f Exam.py (\u5305\u542b ",(0,l.kt)("strong",{parentName:"li"},"name"),", ",(0,l.kt)("strong",{parentName:"li"},"main"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"print('Hello: This is Exam class')\n\nclass Exam:\n    # Python \u7684\u578b\u5225(\u5192\u865f\u5f8c\u9762)\u50c5\u53ea\u662f [\u63d0\u793a]\u3002\u6240\u4ee5\u61c9\u8a72\u81ea\u884c\u6aa2\u67e5\u3002\n    def __init__(self, name: str, score: int, penalty: int):\n        if not isinstance(name, str):\n            raise TypeError('name should be str')\n        self.score = score\n        self.penalty = penalty\n        self.name = name\n\n    def win(self):\n        self.score += 1\n\n    def lose(self):\n        self.penalty += 1\n\n    def get_points(self):\n        return self.score - self.penalty\n\n    def display(self):\n        return self.name + \"-\" + str(self.get_points())\n\nif __name__ =='__main__':\n    print('Testers of Exam class')\n    exe1 = Exam(\"Tom\", 80, 10)\n    exe2 = Exam(\"Jack\", 95, 30)\n    exe3 = Exam(\"May\", 60, 20)\n    exe1.win()\n    exe2.lose()\n\n    exams = [exe1.display(), exe2.display(), exe3.display()]\n    print(exams)\n    \n# Hello: This is Exam class\n# Testers of Exam class\n# ['Tom-71', 'Jack-64', 'May-40']    \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"run.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import Exam as ex\n\nprint(type(ex))\n# <class 'module'>\n\n# console:\n# Hello: This is Exam class (\u9019\u908a\u662f\u8f09\u5165\u6642\u6240\u57f7\u884c)\n# <class 'module'>\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7576\u57f7\u884c\u7684\u662f Exam2.py (\u4e0d\u5305\u542b ",(0,l.kt)("strong",{parentName:"li"},"name"),", ",(0,l.kt)("strong",{parentName:"li"},"main"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'print(\'Hello: This is Exam class\')\n\nclass Exam:\n    # Python \u7684\u578b\u5225(\u5192\u865f\u5f8c\u9762)\u50c5\u53ea\u662f [\u63d0\u793a]\u3002\u6240\u4ee5\u61c9\u8a72\u81ea\u884c\u6aa2\u67e5\u3002\n    def __init__(self, name: str, score: int, penalty: int):\n        if not isinstance(name, str):\n            raise TypeError(\'name should be str\')\n        self.score = score\n        self.penalty = penalty\n        self.name = name\n\n    def win(self):\n        self.score += 1\n\n    def lose(self):\n        self.penalty += 1\n\n    def get_points(self):\n        return self.score - self.penalty\n\n    def display(self):\n        return self.name + "-" + str(self.get_points())\n\nprint(\'Testers of Exam class\')\nexe1 = Exam("Tom", 80, 10)\nexe2 = Exam("Jack", 95, 30)\nexe3 = Exam("May", 60, 20)\nexe1.win()\nexe2.lose()\n\nexams = [exe1.display(), exe2.display(), exe3.display()]\nprint(exams)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"run.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import Exam as ex2\n\nprint(type(ex2))\n# <class 'module'>\n\n# console:\n# Hello: This is Exam class \n# Testers of Exam class \n# ['Tom-71', 'Jack-64', 'May-40'] (# \u6240\u6709\u6e2c\u8a66\u78bc\u90fd\u6703\u88ab\u57f7\u884c)\n# <class 'module'>\n\n")),(0,l.kt)("h2",{id:"modulepy-\u4f7f\u7528\u9677\u9631\u8207\u6ce8\u610f\u4e8b\u9805"},(0,l.kt)("span",{id:"module_pitfall"},"Module(","*",".py) \u4f7f\u7528\u9677\u9631\u8207\u6ce8\u610f\u4e8b\u9805")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u96dc\u4e03\u96dc\u516b\u6ce8\u610f\u4e8b\u9805")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"module name \u4e5f\u662f\u4e00\u7a2e\u8b8a\u91cf\uff0c\u6240\u4ee5\u9808\u6ce8\u610f\u547d\u540d\u885d\u7a81"),(0,l.kt)("li",{parentName:"ul"},"Python Env \u5728\u8f09\u5165 libs \u6642\u6703\u5148\u57f7\u884c\u4e00\u6b21"),(0,l.kt)("li",{parentName:"ul"},"\u4ee5 import \u6307\u4ee4\u8f09\u5165\u7684\u7a0b\u5f0f\u78bc\u662f by reference \u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u4ee5 from import \u6307\u4ee4\u8f09\u5165\u7684\u7a0b\u5f0f\u78bc\u7269\u4ef6\u985e\u7684\u662f by reference \u4f7f\u7528\uff0c\u7d14\u503c\u985e\u7684\u5247\u6642 by value\u3002"),(0,l.kt)("li",{parentName:"ul"},"implicitly import \u9700\u6ce8\u610f\u662f\u5426\u767c\u751f\u6210\u54e1\u906e\u853d\u60c5\u5f62"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"forward reference"),": \u5411\u524d\u5f15\u7528\uff0cPython interpreter \u662f\u4f9d\u53e5\u5b50\u9806\u5e8f\u532f\u5165\u8207\u7de8\u8b6f\u3002\u56e0\u6b64\uff0c\u7121\u6cd5\u4f7f\u7528\u5f8c\u65b9\u5b9a\u7fa9\u8b8a\u6578\uff0c\u4e5f\u7121\u6cd5\u7406\u89e3\u5f8c\u65b9\u532f\u5165\u7684\u6a21\u7d44\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u905e\u8ff4\u5c0e\u5165: \u76f8\u4e92 import \u7684 modules \u61c9\u907f\u514d\u4f7f\u7528\uff0c\u53ef\u80fd\u6703\u9020\u6210\u6b7b\u5faa\u74b0\u3002")))}u.isMDXComponent=!0}}]);