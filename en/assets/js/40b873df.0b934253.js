"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[542],{81642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));t(13848);const a={title:"Python Comprehension",description:"\u8ff4\u5708\u8207lambda\u7684\u7d50\u5408",keywords:["Python","Comprehension"]},i="Python Comprehension: \u8ff4\u5708\u8207 lambda \u7684\u7d50\u5408",l={unversionedId:"DevTech/Python/Python_Comprehension",id:"DevTech/Python/Python_Comprehension",title:"Python Comprehension",description:"\u8ff4\u5708\u8207lambda\u7684\u7d50\u5408",source:"@site/docs/DevTech/Python/Python_Comprehension.md",sourceDirName:"DevTech/Python",slug:"/DevTech/Python/Python_Comprehension",permalink:"/en/docs/DevTech/Python/Python_Comprehension",draft:!1,tags:[],version:"current",frontMatter:{title:"Python Comprehension",description:"\u8ff4\u5708\u8207lambda\u7684\u7d50\u5408",keywords:["Python","Comprehension"]},sidebar:"tutorialSidebar",previous:{title:"Python Print",permalink:"/en/docs/DevTech/Python/Python_Basic_Print"},next:{title:"Python \u6163\u4f8b",permalink:"/en/docs/DevTech/Python/Python_Convention"}},p={},s=[{value:"Comprehension \u8a9e\u6cd5",id:"comprehension-\u8a9e\u6cd5",level:2},{value:"<span id='list_comp'>List/Set Comprehension</span>",id:"listset-comprehension",level:2},{value:"Dict Comprehension",id:"dict-comprehension",level:2},{value:"<span id='generator_comprehension'>Generator Comprehension</span>",id:"generator-comprehension",level:2},{value:"Nested Comprehension",id:"nested-comprehension",level:2}],m={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-comprehension-\u8ff4\u5708\u8207-lambda-\u7684\u7d50\u5408"},"Python Comprehension: \u8ff4\u5708\u8207 lambda \u7684\u7d50\u5408"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Comprehension \u53ef\u7c21\u55ae\u7684\u60f3\u6210\u662f ",(0,o.kt)("strong",{parentName:"p"},"\u8ff4\u5708\u8207 lambda \u7684\u7d50\u5408"),"\uff0c",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e5f\u53ef\u60f3\u6210\u662f Java \u4e2d\u7684 streaming\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u57fa\u672c\u4e0a\u4fbf\u662f\u5c07\u4e00\u500b\u96c6\u5408\u7684\u8cc7\u6599\u4f9d\u5e8f\u57f7\u884c\u6307\u5b9a\u7684\u52d5\u4f5c\uff0c",(0,o.kt)("br",{parentName:"p"}),"\n","\u7136\u5f8c\u518d\u56de\u50b3\u4e00\u500b\u6709\u5e8f\u6216\u7121\u5e8f\u7684\u8cc7\u6599\u96c6\u3002    ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python \u4e2d\u5176\u4ed6\u76f8\u4f3c\u529f\u80fd",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"filter function"),(0,o.kt)("li",{parentName:"ul"},"map function"),(0,o.kt)("li",{parentName:"ul"},"zip function"),(0,o.kt)("li",{parentName:"ul"},"reduce function")))),(0,o.kt)("h2",{id:"comprehension-\u8a9e\u6cd5"},"Comprehension \u8a9e\u6cd5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#list_comp"},"\u4ee5 ",(0,o.kt)("span",{style:{backgroundColor:"#b3c4ff"}},"\u5927")," \u62ec\u865f\u64b0\u5beb\u5247\u56de\u50b3\u7121\u5e8f\u7d50\u679c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#list_comp"},"\u4ee5 ",(0,o.kt)("span",{style:{backgroundColor:"#b3c4ff"}},"\u4e2d")," \u62ec\u865f\u64b0\u5beb\u5247\u56de\u50b3\u6709\u5e8f\u7d50\u679c")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#generator_comprehension"},"\u4ee5 ",(0,o.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u5c0f")," \u62ec\u865f\u64b0\u5beb\u5247\u56de\u50b3\u7684\u662f ",(0,o.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"Generator")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"result = [ expression for x in collection if condition]\n")),(0,o.kt)("h2",{id:"listset-comprehension"},(0,o.kt)("span",{id:"list_comp"},"List/Set Comprehension")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e0b\u9762 Comprehension \u7bc4\u4f8b\u6709\u4ea4\u96dc\u8457 tuple \u89e3\u5305\u3002 "),(0,o.kt)("li",{parentName:"ul"},"couples \u672c\u8eab\u662f\u7121\u5e8f\u7684 set\uff0c\u6240\u4ee5\u5373\u4f7f\u4ee5 list \u63a5\u6536\u7d50\u679c\uff0c\u6bcf\u6b21\u8dd1\u72c0\u6cc1\u90fd\u6703\u4e0d\u76f8\u540c\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\ncouples = {("Totem","Winnie"), ("Robert","May"), ("Tony","Jina")}\n\nret = [ f\'{boy} and {girl}\' for boy, girl in couples ]\n\nfor couple in ret:\n    print(couple)\n    \n# Robert and May\n# Totem and Winnie\n# Tony and Jina\n    \n')),(0,o.kt)("h2",{id:"dict-comprehension"},"Dict Comprehension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dict  Comprehension \u57fa\u672c\u4e0a\u662f\u5c07 dict \u5148\u8f49\u63db\u6210\u5176\u4ed6 list \u518d\u4f86\u505a Comprehension \u64cd\u4f5c\u3002  "),(0,o.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u8f49\u6210 <class 'dict_items'> \u5f8c\u518d\u4f86\u8655\u7406\u3002  ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"dicts = {'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd'}\n\nret = [f'{k}:{v}' for k, v in dicts.items()]\nfor d in ret:\n    print(d)\n\n# A a\n# B b\n# C c\n# D d\n")),(0,o.kt)("h2",{id:"generator-comprehension"},(0,o.kt)("span",{id:"generator_comprehension"},"Generator Comprehension")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9019\u908a\u7684\u540d\u7a31\u547d\u540d\u4e0d\u662f\u5f88\u4e00\u81f4\uff0c Generator Comprehension \u6307\u7684\u662f\u4f7f\u7528 Comprehension \u7684\u53e5\u578b\u4f86\u5efa\u7acb Generator\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8a3b: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"range(n) \u56de\u50b3\u7684\u662f\u4e00\u500b generator "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./Advanced/Python_2_Generator"},"Python Generator \u8aaa\u660e"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Generator \u7bc4\u4f8b: basic"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\ndef filterEven(numbers: list):\n    for num in numbers:\n        if num % 2 == 0:\n            yield num\n\nevens = filterEven(nums)\n\nprint(next(evens)) # 2\nprint(next(evens)) # 4\nprint(next(evens)) # 6\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Generator Comprehension \u7bc4\u4f8b "))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9019\u500b\u7bc4\u4f8b\u5b8c\u5168\u7b49\u540c\u65bc basic generator \u7bc4\u4f8b\uff0c\u4f46\u4f60\u770b\u4e0d\u5230 yield \u95dc\u9375\u5b57")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# \u5c0f\u62ec\u865f comprehension \u6703\u5efa\u7acb generator\nevens_generator = (num for num in nums if num % 2 == 0)\n\nprint(next(evens_generator)) # 2\nprint(next(evens_generator)) # 4\nprint(next(evens_generator)) # 6\n")),(0,o.kt)("h2",{id:"nested-comprehension"},"Nested Comprehension"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Nested Comprehension \u6307\u7684\u662f\uff0c\u69fd\u72c0 Comprehension\uff0c  "),(0,o.kt)("p",{parentName:"blockquote"},"\u7d50\u69cbA: \u591a\u91cd\u8ff4\u5708",(0,o.kt)("br",{parentName:"p"}),"\n","\u5beb\u5728\u8d8a\u5f8c\u65b9\u7684 comprehension \u5c31\u662f\u8d8a\u5167\u5c64\u7684\u8ff4\u5708\u3002  "),(0,o.kt)("p",{parentName:"blockquote"},"\u7d50\u69cbB: Comprehension \u4e32\u63a5",(0,o.kt)("br",{parentName:"p"}),"\n","\u4e5f\u53ef\u4ee5\u628a\u4ed6\u60f3\u6210\u662f Java \u7684 Streaming\uff0c",(0,o.kt)("br",{parentName:"p"}),"\n","\u628a\u96c6\u5408\u7684\u8cc7\u6599\u9023\u7e8c\u505a\u591a\u6b21\u8655\u7406\uff0c",(0,o.kt)("br",{parentName:"p"}),"\n","\u628a\u8cc7\u6599\u4e32\u63a5\u5728\u53e6\u4e00\u500b Comprehension \u7684 in clause \u4e2d\u3002    ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"_Nested Comprehension: \u591a\u91cd\u8ff4\u5708\u7bc4\u4f8b")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u591a\u7dad\u77e9\u9663\u8d70\u8a2a\u7bc4\u4f8b\uff0c\u5beb\u5728\u8d8a\u5f8c\u65b9\u7684 comprehension \u5c31\u662f\u8d8a\u5167\u5c64\u7684\u8ff4\u5708\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"table = [\n    [10, 20, 30],\n    [11, 21, 31],\n    [12, 22, 32],\n]\n\nunpack = [\n    cell \n    for row in table\n    for cell in row\n]\n\nprint(unpack)\n# [10, 20, 30, 11, 21, 31, 12, 22, 32]\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u591a\u91cd\u8ff4\u5708\u7bc4\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# 45\u4e58\u6cd5\u8868\nfor i in range(4):\n    for j in range(5):\n        print(f'{i} x {j} = '+ str(i * j))\n\ntable = [f'{i} x {j} = ' + str(i * j)\n         for i in range(4) # \u5148\u8d70\u8a2a4\n         for j in range(5) # \u5148\u8d70\u8a2a5 (\u5171 4*5 \u500b\u7d50\u679c)\n         ]\n\nfor t in table:\n    print(t)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"_Nested Comprehension: Java Streaming \u7bc4\u4f8b")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Comprehension \u4e32\u63a5\u6210 Java Streaming ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5c07\u524d\u4e00\u8f2a\u7684\u7d50\u679c\u653e\u5230\u6b21\u4e00\u968e\u6bb5\u7684 in clause \u4e2d "),(0,o.kt)("li",{parentName:"ul"},"condition \u53ef\u7528\u4f86\u505a filtering "),(0,o.kt)("li",{parentName:"ul"},"expression \u53ef\u7528\u4f86\u505a java stream \u7684 map \u52d5\u4f5c ")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Person:\n    def __init__(self, name: str, gender: str, waistline: int):\n        if not isinstance(name, str):\n            raise TypeError('name should be str')\n        self.name = name\n        self.gender = gender\n        self.waistline = waistline\n\n\nps = [\n    Person('Tom', 'Male', 91),\n    Person('Michael', 'Male', 89),\n    Person('Bob', 'Male', 100),\n    Person('Mary', 'Female', 81),\n    Person('Winnie', 'Female', 79),\n]\n\n# \u67e5\u51fa\u8170\u570d\u5927\u65bc 90 \u7684\u7537\u6027\nfound = [target.name for target in [man for man in ps if man.gender == 'Male'] if target.waistline > 90]\n# Tom, Bob\n\n")))}c.isMDXComponent=!0}}]);