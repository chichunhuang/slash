"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[9290],{31352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var s=n(87462),i=(n(67294),n(3905));n(13848);const l={title:"Set \u8cc7\u6599\u7d50\u69cb",description:"Python Set \u8cc7\u6599\u7d50\u69cb",keywords:["Python","Set"]},r="Python \u7121\u5e8f\u8cc7\u6599\u7d50\u69cb",a={unversionedId:"DevTech/Python/Python_Typing_Set",id:"DevTech/Python/Python_Typing_Set",title:"Set \u8cc7\u6599\u7d50\u69cb",description:"Python Set \u8cc7\u6599\u7d50\u69cb",source:"@site/docs/DevTech/Python/Python_Typing_Set.md",sourceDirName:"DevTech/Python",slug:"/DevTech/Python/Python_Typing_Set",permalink:"/en/docs/DevTech/Python/Python_Typing_Set",draft:!1,tags:[],version:"current",frontMatter:{title:"Set \u8cc7\u6599\u7d50\u69cb",description:"Python Set \u8cc7\u6599\u7d50\u69cb",keywords:["Python","Set"]},sidebar:"tutorialSidebar",previous:{title:"Python \u6578\u503c\u578b\u5225",permalink:"/en/docs/DevTech/Python/Python_Typing_Numeric"},next:{title:"Python Types",permalink:"/en/docs/DevTech/Python/Python_Typing_Types"}},o={},p=[{value:'Python set \u7121\u5e8f\u7684\u8cc7\u6599\u7d50\u69cb : set<span id="custom-id-set"></span>',id:"python-set-\u7121\u5e8f\u7684\u8cc7\u6599\u7d50\u69cb--set",level:2},{value:'Python immutable frozenset \u7121\u5e8f\u7684\u8cc7\u6599\u7d50\u69cb : frozenset  <span id="custom-id-frozenset"></span>',id:"python-immutable-frozenset-\u7121\u5e8f\u7684\u8cc7\u6599\u7d50\u69cb--frozenset--",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python-\u7121\u5e8f\u8cc7\u6599\u7d50\u69cb"},"Python \u7121\u5e8f\u8cc7\u6599\u7d50\u69cb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5206\u70ba set (#custom-id-set) "),(0,i.kt)("li",{parentName:"ul"},"\u5206\u70ba immutable frozenset (#custom-id-frozenset)  ")),(0,i.kt)("h2",{id:"python-set-\u7121\u5e8f\u7684\u8cc7\u6599\u7d50\u69cb--set"},"Python set \u7121\u5e8f\u7684\u8cc7\u6599\u7d50\u69cb : set",(0,i.kt)("span",{id:"custom-id-set"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5efa\u69cb\u65b9\u5f0f"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"s = set( ","[iterable]"," )  "),(0,i.kt)("li",{parentName:"ul"},"s = set((e1,e2,e3)) : build-in method, \u50b3\u5165 tuple  "),(0,i.kt)("li",{parentName:"ul"},"s = set(","[e1,e2,e3]",") : build-in method, \u50b3\u5165 list  "),(0,i.kt)("li",{parentName:"ul"},"s = set('string') : string \u4e5f\u662f iterable  "),(0,i.kt)("li",{parentName:"ul"},"s = {e1, e2, e3} : \u539f\u751f\u975e\u7269\u4ef6\u7684\u5efa\u7acb\u65b9\u5f0f"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"set \u4e2d\u7684 element \u5fc5\u9808\u662f immutable  "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"tuple: \u5c0f\u62ec\u865f (), \u6240\u5efa\u7acb\u7684\u7269\u4ef6\u624d\u662f immutable  "),(0,i.kt)("li",{parentName:"ul"},"list : \u4e2d\u62ec\u865f ","[","]",", \u6240\u5efa\u7acb\u7684\u7269\u4ef6\u662f mutable, \u4e0d\u53ef\u70ba set element\u3002\u62cb\u51fa TypeError: unhashable type  "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"set \u662f\u53ef\u8b8a\u7684\uff0c\u53ef\u547c\u53eb set.add(el) \u589e\u52a0 element"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# set constructor\ns1 = {7,8,9,10}\nfor s in s1:\n    print(s)\nprint(s1)\n# {8, 9, 10, 7}\n\n# build-in method \u4f86\u5efa\u7acb\ns2 = set((7,8,9,10,11))\nfor s in s2:\n    print(s)\nprint(s2)\n# {7, 8, 9, 10, 11}\n\n# build-in method \u4f86\u5efa\u7acb : iterable String\ns3= set('Hello World')\nfor s in s3:\n    print(s)\nprint(s3)\n# {'d', 'r', 'H', 'e', ' ', 'W', 'o', 'l'}\n\n\n# set \u4e2d\u7684 element \u5fc5\u9808\u662f immutable\nl1 = (1,2,3) # tuple \u662f immutable\nl2 = (4,5,6)\nl3 = [11,22,33] # list \u662f mutable, \u4e0d\u53ef\u505a\u70ba set \u7684 neated element\ns3 = {l1,l2, l3}\nprint(s3)\n# TypeError: unhashable type\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5efa\u7acb Empty Set: \u5efa\u8b70\u4f7f\u7528 set() function")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\ns_dic = {} # \u6ce8\u610f,\u9019\u908a\u5efa\u7acb\u7684\u662f dic \ns5 = {()} # \u9019\u908a\u662f\u653e\u9032\u53bb\u4e00\u500b\u7a7a\u7684colection object reference, \u6240\u4ee5 set \u672c\u8eab\u975e\u7a7a \n\ns6 = set() # OK, Empty\ns7 = set([]) # OK, Empty\ns8 = set({}) # OK, Empty\n\nprint('************')\nprint(type(s_dic))\nprint(len(s_dic))\n# <class 'dict'>\n# 0\n\nprint(type(s5))\nprint(len(s5))\n# <class 'set'>\n# 1\n\nprint(type(s6))\nprint(len(s6))\n# <class 'set'>\n# 0\n\nprint(type(s7))\nprint(len(s7))\n# <class 'set'>\n# 0\n\nprint(type(s8))\nprint(len(s8))\n# <class 'set'>\n# 0\n\nprint('************')\ns5.add(1)\ns5.add(\"A\")\nfor x in s5:\n    print(x)\n# 1\n# A\n\n")),(0,i.kt)("h2",{id:"python-immutable-frozenset-\u7121\u5e8f\u7684\u8cc7\u6599\u7d50\u69cb--frozenset--"},"Python immutable frozenset \u7121\u5e8f\u7684\u8cc7\u6599\u7d50\u69cb : frozenset  ",(0,i.kt)("span",{id:"custom-id-frozenset"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u57fa\u672c\u4e0a\u8207 set \u7684\u64cd\u4f5c\u4e00\u81f4\uff0c\u50c5\u5dee\u7570\u5728\u65bc\u5efa\u7acb\u5f8c\u4e0d\u53ef\u4fee\u6539\u9019\u4ef6\u4e8b\u3002  "),(0,i.kt)("li",{parentName:"ul"},"\u82e5\u4e0d\u614e\u7d66\u4e88\u5167\u5bb9\u7570\u52d5\uff0c\u6ce8\u610f ",(0,i.kt)("strong",{parentName:"li"},"\u52d5\u4f5c\u6703\u88ab\u5ffd\u7565")," \u4e14\u7cfb\u7d71\u4e26 ==",(0,i.kt)("span",{style:{color:"#FF1100"}},"\u4e0d\u6703\u5831\u932f"),"==  \u3002  ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"fs9 = frozenset(([1,2],3))  # list \u662f mutable, \u4e0d\u53ef\u505a\u70ba set \u7684 neated element\nprint(fs9)\nfor x in fs9:\n    print(x)\n# Process finished with exit code 1\n\n\n\nfs10 = frozenset((1,2,3))\nfs10.add(4) # \u4e0d\u53ef\u505a\u7570\u52d5\nprint(fs10)\n # Process finished with exit code 1   \n")))}d.isMDXComponent=!0}}]);