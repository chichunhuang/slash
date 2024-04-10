"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[8757],{89015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>k,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));n(13848);const p={title:"Python \u6253\u5305\u8207\u89e3\u5305",description:"Python Packing and Unpacking",keywords:["Python","Packing"]},i="Python \u6253\u5305\u8207\u89e3\u5305",k={unversionedId:"DevTech/Python/Advanced/Python_2_unpack_lisit_map",id:"DevTech/Python/Advanced/Python_2_unpack_lisit_map",title:"Python \u6253\u5305\u8207\u89e3\u5305",description:"Python Packing and Unpacking",source:"@site/docs/DevTech/Python/Advanced/Python_2_unpack_lisit_map.md",sourceDirName:"DevTech/Python/Advanced",slug:"/DevTech/Python/Advanced/Python_2_unpack_lisit_map",permalink:"/en/docs/DevTech/Python/Advanced/Python_2_unpack_lisit_map",draft:!1,tags:[],version:"current",frontMatter:{title:"Python \u6253\u5305\u8207\u89e3\u5305",description:"Python Packing and Unpacking",keywords:["Python","Packing"]},sidebar:"tutorialSidebar",previous:{title:"Python \u8b8a\u6578\u8207\u8b8a\u6578\u5b58\u53d6\u7bc4\u570d",permalink:"/en/docs/DevTech/Python/Advanced/Python_2_Variable_and_Scope"},next:{title:"Python \u904b\u7b97\u5b50\u9032\u968e-operator",permalink:"/en/docs/DevTech/Python/Advanced/Python_Operator_module"}},l={},s=[{value:"Packing / Unpacking \u6642 Asterisk \u76f8\u95dc\u6458\u8981\u6574\u7406",id:"packing--unpacking-\u6642-asterisk-\u76f8\u95dc\u6458\u8981\u6574\u7406",level:2},{value:"Python \u6253\u5305\u8207\u89e3\u5305\u89e3\u8aaa",id:"python-\u6253\u5305\u8207\u89e3\u5305\u89e3\u8aaa",level:2},{value:'<span id="iterable_unpacking">Tuple / List \u89e3\u5305\u7bc4\u4f8b:</span>',id:"tuple--list-\u89e3\u5305\u7bc4\u4f8b",level:2},{value:'<span id="dict_unpacking">Dict \u89e3\u5305\u7bc4\u4f8b:</span>',id:"dict-\u89e3\u5305\u7bc4\u4f8b",level:2},{value:"\u8ff4\u5708 / Comprehension \u89e3\u5305\u7bc4\u4f8b:",id:"\u8ff4\u5708--comprehension-\u89e3\u5305\u7bc4\u4f8b",level:2},{value:'<span id="varArg_packing">Tuple \u6253\u5305\u7bc4\u4f8b: variable arguments </span>',id:"tuple-\u6253\u5305\u7bc4\u4f8b-variable-arguments-",level:2},{value:'<span id="kwArg_packing">Dict \u6253\u5305\u7bc4\u4f8b: key-vale pair arguments</span>',id:"dict-\u6253\u5305\u7bc4\u4f8b-key-vale-pair-arguments",level:2},{value:'<span id="bare_asterisk">Bare Asterisk</span>',id:"bare-asterisk",level:2},{value:'<span id="star_underscore">Asterisk Underscore</span>',id:"asterisk-underscore",level:2},{value:"<span id='partial_unpacking'>\u642d\u914d Asterisk \u7684\u6253\u5305\u8207\u89e3\u5305: \u4e0d\u5b8c\u5168\u89e3\u5305</span>",id:"\u642d\u914d-asterisk-\u7684\u6253\u5305\u8207\u89e3\u5305-\u4e0d\u5b8c\u5168\u89e3\u5305",level:2}],o={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-\u6253\u5305\u8207\u89e3\u5305"},"Python \u6253\u5305\u8207\u89e3\u5305"),(0,r.kt)("h2",{id:"packing--unpacking-\u6642-asterisk-\u76f8\u95dc\u6458\u8981\u6574\u7406"},"Packing / Unpacking \u6642 Asterisk \u76f8\u95dc\u6458\u8981\u6574\u7406"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u55ae\u4e00\u500b Asterisk: \u7528\u5728 iterable object \u8eab\u4e0a"),(0,r.kt)("li",{parentName:"ul"},"\u96d9 Asterisks: \u7528\u5728 dict object \u8eab\u4e0a"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u5728\u8b8a\u6578\u6307\u5b9a\u4e0a: ",(0,r.kt)("a",{parentName:"li",href:"#partial_unpacking"},"\u4e0d\u5b8c\u5168\u89e3\u5305")),(0,r.kt)("li",{parentName:"ul"},"\u7528\u5728\u5f15\u6578\u4e0a: ",(0,r.kt)("a",{parentName:"li",href:"#unpacking"},"\u4f9d\u60c5\u5883\u89e3\u5305\u6210 tuple: iterable")),(0,r.kt)("li",{parentName:"ul"},"\u7528\u5728\u5f15\u6578\u4e0a: ",(0,r.kt)("a",{parentName:"li",href:"#dict_unpacking"},"\u4f9d\u60c5\u5883\u89e3\u5305\u6210 dict: named-params")),(0,r.kt)("li",{parentName:"ul"},"\u7528\u51fd\u6578\u53c3\u6578\u4e0a: ",(0,r.kt)("a",{parentName:"li",href:"#varArg_packing"},"\u5b9a\u7fa9 VarArgs \u6642\u4f7f\u7528"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8a3b: ",(0,r.kt)("a",{parentName:"li",href:"#bare_asterisk"},"Bare Asterisk")," \u7528\u5728\u51fd\u6578 signature \u6642: \u9650\u5236\u5f8c\u65b9\u7684 args \u5fc5\u9808\u4f7f\u7528 keyword arguments. ")))),(0,r.kt)("h2",{id:"python-\u6253\u5305\u8207\u89e3\u5305\u89e3\u8aaa"},"Python \u6253\u5305\u8207\u89e3\u5305\u89e3\u8aaa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#unpacking"},"Arguments unpacking hints"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u628a tuple/list instance \u89e3\u5305:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iterable_unpacking"},"iterable: var args ","*"),": \u96c6\u5408\u5143\u7d20\u500b\u5225\u6307\u5b9a\u8b8a\u6578\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u628a dict instance \u89e3\u5305:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dict_unpacking"},"dict: named-params ","*","*"),": dict instance \u4e2d\u7684 attr \u8207 function parameter mapping\u3002"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#packing"},"VarArgs function definition hints"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53ef\u8b8a\u6578\u91cf\u53c3\u6578\u51fd\u6578\u5b9a\u7fa9")," \u7684\u4e00\u7a2e\uff0cvarargs \u7686\u7f6e\u65bc signature \u7684\u6700\u672b\u7aef\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#varArg_packing"},"var-arg params")," \u5b9a\u7fa9\u5728 ",(0,r.kt)("a",{parentName:"li",href:"#kwArg_packing"},"key-word params")," \u4e4b\u524d\u3002    ")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u89e3\u5305(\u958b\u7bb1) Unpacking \u5b9a\u7fa9"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6307\u7684\u662f:",(0,r.kt)("br",{parentName:"p"}),"\n","\u5c07\u6709\u5e8f\u7684\u53ef\u8fed\u4ee3\u8cc7\u6599\u96c6\u5408\u62c6\u89e3\u6210\u4e00\u500b\u4e00\u500b\u7684\u55ae\u4e00\u5143\u7d20\uff0c\u4e26\u4e14\u5c07\u5143\u7d20\u8207\u8b8a\u6578\u4f5c\u5c0d\u61c9\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6216\u662f\u5c07dict \u62c6\u89e3\u6210\u591a\u500b\u55ae\u4e00\u5143\u7d20\u7684\u96c6\u5408\uff0c\u53ef\u7528\u4f86\u7576 named-arguments\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"\u9019\u908a\u6211\u6703\u7c21\u55ae\u7a31\u89e3\u5305\u7684\u76ee\u7684\u662f: \u5feb\u901f\u5730\u5c07\u8b8a\u6578\u8ce6\u503c\u529f\u80fd\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\uff0c\u958b\u7bb1\u540c\u5e38\u6703\u4f34\u96a8\u8b8a\u6578\u6307\u5b9a\u51fa\u73fe\u3002  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u6253\u5305(\u88dd\u7bb1) Packing \u5b9a\u7fa9"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6253\u5305\u6307\u7684\u662f:",(0,r.kt)("br",{parentName:"p"}),"\n","\u51fd\u6578\u5b9a\u7fa9 VarArgument parameter \u6642\uff0c\u50b3\u5165\u7684\u591a\u500b\u9023\u7e8c\u540c\u578b\u5225\u5f15\u6578\u53ef\u4ee5\u81ea\u52d5\u88dd\u8f09\u5230\u4e00\u500b\u6709\u5e8f\u96c6\u5408\u4e4b\u4e2d\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6216\u662f\u51fd\u6578\u5b9a\u7fa9 VarArgument parameter \u6642\uff0c\u50b3\u5165\u7684\u591a\u500b\u9023\u7e8c key-variable pairs\u3000\u53ef\u4ee5\u81ea\u52d5\u88dd\u8f09\u5230\u4e00\u500b dict \u4e4b\u4e2d\u3002   "),(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u7684\u7406\u89e3\u4e2d\u6253\u5305\u7684\u76ee\u7684\u662f: \u7c21\u5316\u8cc7\u6599(\u5f15\u6578)\u50b3\u905e\u7d66\u51fd\u6578\u7684\u529f\u80fd\u3002\n\u6240\u4ee5\uff0c\u901a\u5e38\u6253\u5305\u6703\u9700\u8981\u51fd\u6578\u5b9a\u7fa9\uff0c\u4e5f\u6703\u4f34\u96a8\u51fd\u6578\u547c\u53eb\u51fa\u73fe\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\u9032\u968e: \u642d\u914d Asterisk \u7684\u6253\u5305\u89e3\u5305"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Asterisk * \u5728\u6253\u5305\u89e3\u5305\u904e\u7a0b\u4e2d:",(0,r.kt)("br",{parentName:"p"}),"\n","\u55ae\u4e00\u500b asterisk \u7528\u65bc: \u628a\u4e0d\u662f\u91cd\u9ede\u7684\u5143\u7d20\u7d71\u4e00\u6536\u96c6\u5230\u5e36\u55ae\u4e00\u661f\u865f\u7684\u8b8a\u6578\u8eab\u4e0a\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u9023\u7e8c\u5169\u500b  asterisks \u7528\u65bc: \u7528\u65bc\u544a\u77e5\u8655\u7406\u7684\u662f dict \u6216\u662f key-value pairs\u3002(\u5340\u5225 dict \u8207\u6709\u5e8f\u96c6\u5408)    ")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"\u89e3\u5305\u958b\u7bb1-unpacking"},(0,r.kt)("span",{id:"unpacking"},"\u89e3\u5305\u958b\u7bb1 Unpacking")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u89e3\u5305\u6216\u7a31\u70ba\u958b\u7bb1 (Unpacking):",(0,r.kt)("br",{parentName:"p"}),"\n","\u9019\u908a\u6307\u7684\u662f\u5c07\u4e00\u500b\u96c6\u5408\u6216 ",(0,r.kt)("span",{style:{color:"#ff6600"}},"\u53ef\u8fed\u4ee3\u7269\u4ef6\u7684\u5143\u7d20\u81ea\u52d5\u8207\u8b8a\u6578\u5efa\u7acb\u95dc\u806f"),"\u3002 \u6216\u662f\u5c07\u4e00\u500b dict instance \u7576\u5f15\u6578\u50b3\u7d66 function \u6642\uff0c",(0,r.kt)("span",{style:{color:"#ff6600"}},"Function \u4f9d dict attribute name \u8207 function signature name \u81ea\u52d5\u914d\u5c0d"),"\u529f\u80fd\u3002  ")),(0,r.kt)("h2",{id:"tuple--list-\u89e3\u5305\u7bc4\u4f8b"},(0,r.kt)("span",{id:"iterable_unpacking"},"Tuple / List \u89e3\u5305\u7bc4\u4f8b:")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Positional unpacking: \u4f9d\u4f4d\u7f6e\u89e3\u5305"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"[firstName, lastName] = ['Michael', 'Jackson']\n[firstName, lastName] = ('Michael', 'Jackson')\nfirstName, lastName = 'Michael', 'Jackson'\nprint(firstName)\n# Michael\nprint(lastName)\n# Jackson\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Sequence unpacking: \u4f9d\u9806\u5e8f\u89e3\u5305 "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"x, y, z = 'CAT'\nprint(x)\n# C\nprint(y)\n# A\nprint(z)\n# T\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Asterisk Operator: List/Tuple \u5f15\u6578\u89e3\u5305"))," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9019\u908a\u53ef\u4ee5\u5c07 Asterisk \u8996\u70ba\u4e00\u7a2e Arguments Unpacking \u904b\u7b97\u5143\u3002\u5176\u904b\u7b97\u70ba: \u5c07 tuple/list \u9032\u884c\u89e3\u5305\u3002  "),(0,r.kt)("li",{parentName:"ul"},"\u5c07\u4e00\u500b\u6709\u5e8f\u96c6\u5408\u8f49\u63db\u6210 var argument function \u6240\u9700\u7684\u5f15\u6578\u6e05\u55ae",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7b2c8\u884c\uff0c\u4e2d\u7684 *terms\uff0c\u5c07\u539f\u672c\u7684 tuple \u8f49\u6210\u5143\u7d20\u6e05\u55ae")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def string_join(separatpr: str, *args: str):\n    ret = \"\"\n    for item in args:\n        ret += (item + separatpr)\n    return ret\n\nterms = ('How', 'are', 'you', 'Tom', '?')\nsentence = string_join(' ', *terms) # \u4ee5 asterisk \u6a19\u8a18\u5c07 terms \u89e3\u5305\u5f8c\u50b3\u5165\uff0c\nprint(sentence)\n# How are you Tom ? \n\n# \u4e0a\u65b9\u7247\u6bb5\u7b49\u540c\u65bc\u4e0b\u65b9\u7bc4\u4f8b\nsentence2 = string_join(' ', 'How', 'are', 'you', 'Tom', '?')\nprint(sentence2)\n# How are you Tom ? \n\n")),(0,r.kt)("h2",{id:"dict-\u89e3\u5305\u7bc4\u4f8b"},(0,r.kt)("span",{id:"dict_unpacking"},"Dict \u89e3\u5305\u7bc4\u4f8b:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6211\u628a\u5b83\u5206\u5169\u985e: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"dict \u8f49\u6210 iterable\uff0c\u90a3\u4fbf\u64c1\u6709 list \u7684 unpacking \u80fd\u529b\u3002"),(0,r.kt)("li",{parentName:"ul"},"dict \u8f49\u6210 named-parameters \u6240\u9700 arguments\u3002")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"}," Dict to tuples or dict_items")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u672c\u4e0a\u5c31\u662f\u8f49\u63db\u6210\u5176\u4ed6 iterable\uff0c\u7136\u5f8c\u8d70\u57fa\u672c  list / tuple \u89e3\u5305\u6d41\u7a0b\u3002 ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"profile = {\"name\": \"Totem\", \"age\":50, 'gender': 'Male'}\n\nname,age,gender = profile.items()\nprint(age)\n# ('age', 50)\n\nfor item in profile.items():\n    print( type(item)) # <class 'tuple'>\n# ('name', 'Totem')\n# ('age', 50)\n# ('gender', 'Male')\n\nfor k, v in profile.items(): # \u642d\u914d tuple \u89e3\u5305\n    print( k, '=', v)\n# name = Totem\n# age = 50\n# gender = Male\n\nshow = [print(k, '+', v) for k, v in profile.items()]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DiAsterisk Operator: Dict Unpacking to named-parameters "),(0,r.kt)("span",{id:"#double-asterisk-dict"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7d93\u7531\u5c07 dict \u7684 key-value \u8f49\u63db\u6210 ",(0,r.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"named-parameters")," \u6240\u9700\u5f15\u6578\uff0c\u56e0\u6b64\u53ef\u4ee5\u662f\u7121\u5e8f\u7684\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'profile = {"name": "Totem", "age": 15, \'gender\': \'Male\'}\n\ndef print_profile(name, gender, age):\n    print(f"{name} is {age} years old and he is {gender}")\n\nprint_profile(**profile)\n# Totem is 15 years old and he is Male\n\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DiAsterisk Operator: Dict Unpacking to ?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9019\u985e\u578b Dict \u89e3\u5305\uff0c\u76ee\u524d\u627e\u4e0d\u5230\u89e3\u91cb\u3002\u53ea\u80fd\u786c\u89e3\u91cb\u6210\u8aaa\u662f\u8a9e\u6cd5\u7cd6\u3002\u76ee\u524d\u53ea\u77e5\u9053\u4e0b\u65b9\u7bc4\u4f8b\u4e2d\u7684\u9019\u7a2e\u7528\u6cd5\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"boy_scores = {\"Totem\":60, \"Robert\":70, \"Ade\":10 }\ngirl_scores = {\"Winnie\":65, \"May\":75, \"Anna\":85 }\n\nscores ={**boy_scores, **girl_scores}\nprint(scores)\n# {'Totem': 60, 'Robert': 70, 'Ade': 10, 'Winnie': 65, 'May': 75, 'Anna': 85}\n\n")),(0,r.kt)("h2",{id:"\u8ff4\u5708--comprehension-\u89e3\u5305\u7bc4\u4f8b"},"\u8ff4\u5708 / Comprehension \u89e3\u5305\u7bc4\u4f8b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8ff4\u5708\u672c\u8eab\u5c31\u662f\u6700\u5e38\u898b\u7684\u89e3\u5305\uff0c\u4e0d\u7528\u591a\u8aaa\u5427\u3002")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"unpack tuples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\ncouples = {("Totem","Winnie"), ("Robert","May"), ("Tony","Jina")}\nfor k, v in couples:\n    print( k, \'\\u2665\', v)\n# Robert \u2665 May\n# Tony \u2665 Jina\n# Totem \u2665 Winnie\n\n')),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h1",{id:"\u6253\u5305\u88dd\u7bb1-packing"},(0,r.kt)("span",{id:"packing"},"\u6253\u5305\u88dd\u7bb1 Packing")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Packing",(0,r.kt)("br",{parentName:"p"}),"\n","\u7528\u5728\u5b9a\u7fa9\u51fd\u6578\u8655: \u76ee\u7684\u5728 ",(0,r.kt)("span",{style:{color:"#ff6600"}},"\u81ea\u52d5\u5c07\u4e0d\u5b9a\u6578\u7684\u5f15\u6578\u6253\u5305\u5230\u4e00\u500b ",(0,r.kt)("strong",{parentName:"p"},"list \u6216 dict")," \u4e2d\u5f8c\u50b3\u5165\u65b9\u6cd5\u4e2d")," \u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7528\u5728\u8b8a\u6578\u8ce6\u503c\u6642(\u5e38\u4f34\u96a8\u89e3\u5305\u4e00\u8d77\u767c\u751f):  \u89e3\u5305\u6642\u5c07\u975e\u4e3b\u8981\u5143\u7d20\u6536\u96c6\u5728\u4e00\u500b\u96c6\u5408\u4e2d\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6b64\u6642\u6703\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"#partial_unpacking"},"asterisk \u6a19\u793a\u6253\u5305\u7684\u8b8a\u6578"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5 Packing \u901a\u5e38\u7528\u5728\u51fd\u6578\u5b9a\u7fa9\u4e0a\u3002 "),(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u5f97\u6253\u5305\u9019\u500b\u540d\u7a31\u4e0d\u6613\u7406\u89e3\uff0c\u6211\u63db\u4e00\u500b\u540d\u8a5e\u4f86\u89e3\u91cb\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Python \u7684 Packing \u5c31\u662f\u5176\u4ed6\u8a9e\u8a00\u7684 VarArgs (Variable Arguments)\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u610f\u601d\u5c31\u662f\u51fd\u6578\u6216\u65b9\u6cd5\u5728\u5b9a\u7fa9\u50b3\u5165\u53c3\u6578\u6642\uff0c\u82e5\u60f3\u50b3\u5165\u7684\u6578\u91cf\u4e0d\u56fa\u5b9a\u6642\u8a72\u5982\u4f55\u8655\u7406\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6211\u5011\u4e0d\u53ef\u80fd\u7121\u9650\u5236\u7684 overload \u51fd\u6578\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u53e6\u4e00\u500b\u89e3\u6cd5\u662f\u5c07\u540c\u578b\u5225\u5f15\u6578\u653e\u5230\u96c6\u5408\u4e2d\u518d\u7d71\u4e00\u50b3\u5165\u3002\u4f46\u662f\u5c31\u9700\u8981\u591a\u4e00\u500b\u7d44\u6210\u96c6\u5408\u7684\u52d5\u4f5c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u56e0\u6b64\uff0c\u5404\u7a2e\u8a9e\u8a00\u4fbf\u51fa\u73fe\u52d5\u614b\u6578\u91cf\u5f15\u6578\u7684\u50b3\u5165\u8a9e\u6cd5\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728 Python \u4e2d\u7a31\u70ba\u6253\u5305 (packing)\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e5f\u5c31\u662f\u81ea\u52d5\u5c07\u4e0d\u5b9a\u6578\u7684\u5f15\u6578  ",(0,r.kt)("strong",{parentName:"p"},"\u6253\u5305")," \u5230\u4e00\u500b list \u6216 dict \u4e2d\u5f8c\u50b3\u5165\u3002\n")),(0,r.kt)("h2",{id:"tuple-\u6253\u5305\u7bc4\u4f8b-variable-arguments-"},(0,r.kt)("span",{id:"varArg_packing"},"Tuple \u6253\u5305\u7bc4\u4f8b: variable arguments ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u901a\u5e38\u6253\u5305\u4f34\u96a8\u51fd\u6578\u5b9a\u7fa9\u8207\u51fd\u6578\u547c\u53eb\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Iterable style: \u5176\u5be6\u53ef\u60f3\u6210\u662f Java \u4e2d\u7684 Variable Arguments \u51fd\u6578\u8a2d\u8a08\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728 function \u7684 signature ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("span",{style:{color:"#0044FF"}}," \u6700\u5f8c "))," \u90e8\u5206\u53ef\u4ee5\u5b9a\u7fa9\u4e00\u500b ",(0,r.kt)("span",{style:{color:"#0044FF"}}," ",(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u5b9a\u6578\u53c3\u6578")," "),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e0d\u5b9a\u6578\u53c3\u6578\u5728\u63a5\u6536\u5f15\u6578\u6642\uff0c\u6703\u5c07\u55ae\u4e00\u500b\u5225\u7684\u5f15\u6578\u6253\u5305\u6210\u4e00\u500b tuple \u4f9b\u51fd\u6578\u4f7f\u7528\u3002  "),(0,r.kt)("p",{parentName:"blockquote"},"varArgs signature \u5b9a\u7fa9\u65b9\u5f0f\u70ba\u5728\u53c3\u6578\u524d\u65b9\u52a0\u4e0a ",(0,r.kt)("strong",{parentName:"p"},"\u55ae\u4e00\u500b Asterisk")," \u3002",(0,r.kt)("br",{parentName:"p"}),"\n","(\u5176\u5be6\u4e5f\u53ef\u4ee5\u628a Asterisk \u60f3\u6210\u662f\u4e00\u7a2e operator: \u628a\u5f15\u6578\u5c01\u88dd\u6210 tuple \u7684\u904b\u7b97\u5143)"),(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: packing \u76f8\u95dc\u53c3\u6578\u5fc5\u9808\u5b9a\u7fa9\u5728\u6700\u672b\u7aef\u3002   ")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"VarArgs \u6253\u5305\u7bc4\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n# \u51fd\u6578\u5b9a\u7fa9, *args \u6a19\u8a18\u70ba\u53ef\u8b8a\u52d5\u6578\u91cf\u53c3\u6578\ndef string_join(separator: str, *args: str):\n    print(type(args)) # <class 'tuple'>\n    ret = \"\"\n    for item in args:\n        ret += (item + separator)\n    return ret\n\n# \u51fd\u6578\u547c\u53eb\u6642\u672b\u7aef\u7684\u5269\u9918\u53c3\u6578\u6703\u88ab\u6253\u5305\u6210 tuple\nprint(string_join(\" \", 'How', 'are', 'you', '?'))\n# How are you ? \n\n")),(0,r.kt)("h2",{id:"dict-\u6253\u5305\u7bc4\u4f8b-key-vale-pair-arguments"},(0,r.kt)("span",{id:"kwArg_packing"},"Dict \u6253\u5305\u7bc4\u4f8b: key-vale pair arguments")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53c8\u7a31\u70ba key word arguments packing\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","Python \u4e2d\u6709\u6240\u8b02\u7684 Keyword Arguments \u8a9e\u6cd5\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728\u5f15\u6578 (argument) \u6307\u540d\u53c3\u6578 (parameter) \u6642\u53ef\u4ee5\u4e0d\u4f9d\u53c3\u6578\u5b9a\u7fa9\u9806\u5e8f (signature) \u4f86\u547c\u53eb\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e5f\u5c31\u662f\u8aaa\u5141\u8a31 key-value pair \u7684\u65b9\u5f0f\u6307\u5b9a\u6bcf\u500b\u53c3\u6578\u7684\u5f15\u6578\u503c\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","key word arguments packing: \u4fbf\u662f\u5c07\u8981\u50b3\u5165\u7684\u5f15\u6578\u6253\u5305\u6210\u4e00\u500b dict\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","key word arguments packing \u8207\u4e00\u822c named-args \u5dee\u5225\u4e3b\u8981\u5728\u65bc\uff0cdict packing \u6642\u53ef\u4ee5\u628a\u540d\u7a31\u672a\u6210\u529f\u914d\u5c0d\u7684\u5f15\u6578\u7d71\u4e00\u653e\u5230\u4e00\u500b dict \u5f15\u6578\u4e2d\u3002  "),(0,r.kt)("p",{parentName:"blockquote"},"key word arguments signature \u5b9a\u7fa9\u65b9\u5f0f\u70ba\u5728\u53c3\u6578\u524d\u65b9\u52a0\u4e0a ",(0,r.kt)("strong",{parentName:"p"},"\u5169\u500b Asterisks")," \u3002",(0,r.kt)("br",{parentName:"p"}),"\n","(\u5176\u5be6\u4e5f\u53ef\u4ee5\u628a DiAsterisk \u60f3\u6210\u662f\u4e00\u7a2e operator: \u628a named-args \u5c01\u88dd\u6210 dict \u7684\u904b\u7b97\u5143)  "),(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: dict packing \u6642\u53ef\u4ee5\u628a\u540d\u7a31\u672a\u6210\u529f\u914d\u5c0d\u7684\u5f15\u6578\u7d71\u4e00\u653e\u5230\u4e00\u500b dict \u5f15\u6578\u4e2d\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","dict packing \u6642\u662f\u7121\u5e8f\u7684\uff0c\u53ef\u8207 named-args \u4ea4\u4e92\u7a7f\u63d2\u3002 ")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Key Word  Args \u6253\u5305\u7bc4\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# \u9664\u4e86 name \u8207 gender \u5916\uff0c\u5176\u4ed6\u5f15\u6578\u7d71\u4e00\u6253\u5305\u5230 kwargs \u9019\u500b\u8b8a\u6578\ndef print_profile(name='nobody', gender='Male', **kwargs):\n    print(f'I\\'m {name}, {gender}')\n    for fact in kwargs:\n        print(fact, ':', kwargs[fact])\n\n# \u4f7f\u7528\u6642\uff0c\u4e0d\u9700\u8003\u616e named-args \u5f15\u6578\u9806\u5e8f\u3002\nprint_profile(gender='Female', height='160', \n              addr='TW', tel='0955-555-555', name='Winnie')\n# I'm Winnie, Female\n# height : 160\n# addr : TW\n# tel : 0955-555-555\n\n")),(0,r.kt)("h2",{id:"bare-asterisk"},(0,r.kt)("span",{id:"bare_asterisk"},"Bare Asterisk")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Bare Asterisk \u7528\u5728\u51fd\u6578 signature \u4ee3\u8868 ",(0,r.kt)("strong",{parentName:"p"},"\u9650\u5236")," \u5f8c\u65b9\u7684 args \u5fc5\u9808\u4f7f\u7528 keyword arguments",(0,r.kt)("br",{parentName:"p"}),"\n","\u5c31\u55ae\u7d14\u662f\u4e00\u7a2e\u9650\u5236\uff0c\u672a\u9075\u5faa\u6703\u62cb\u51fa\u932f\u8aa4  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bare Asterisk"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def funcAsterisk(name, exam, *, score):\n    print( f\'{name} only got {score} in {exam} exam.\')\n\nfuncAsterisk("Totem", "math", score=\'60\')\n# Totem only got 60 in math exam.\n\nfuncAsterisk("Totem", "math", \'60\')\n# TypeError: funcAsterisk() takes 2 positional arguments but 3 were given\n')),(0,r.kt)("h2",{id:"asterisk-underscore"},(0,r.kt)("span",{id:"star_underscore"},"Asterisk Underscore")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Asterisk Underscore (star underscore): \u53c8\u662f\u4e00\u500b\u602a\u5496\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6703\u51fa\u73fe\u5728\u8b8a\u6578\u6307\u5b9a\u4e0a\uff0c\u4e5f\u6703\u51fa\u73fe\u5728\u51fd\u6578 signature \u4e0a\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u56e0\u70ba\u540c\u6642\u76f8\u9023\u51fa\u73fe\u5169\u500b operators\u3002    "),(0,r.kt)("p",{parentName:"blockquote"},"Asterisk:\u5c31\u662f\u89e3\u5305\u6216\u6253\u5305\u610f\u601d\u3002    "),(0,r.kt)("p",{parentName:"blockquote"},"underscore \u8d77\u59cb\u7684\u8b8a\u6578\u90fd\u662f\u6709\u610f\u7fa9\u7684\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"underscore "),"  ","_"," \u5c0d python VM/Interpreter \u4f86\u8aaa\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u662f\u7528\u4f86 ",(0,r.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u66ab\u5b58\u6700\u5f8c\u4e00\u500b expression \u7684\u56de\u50b3\u503c\u4f7f\u7528"),"\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u9019\u908a\u53ea\u662f\u66ab\u501f\u4f86\u653e\u4e0d\u91cd\u8981\u7684\u8cc7\u8a0a\uff0c\u53cd\u6b63\u7b49\u4e00\u4e0b\u5c31\u6703\u88ab\u4e1f\u68c4\u3002  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Asterisk Underscore: variable"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5148\u8aaa\u660e underscore :",(0,r.kt)("br",{parentName:"p"}),"\n","\u5728\u6b64\u8655\u4e5f\u53ef\u60f3\u6210\u662f\u4f54\u4f4d\u7b26(placeholder)\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e5f\u5c31\u662f\u9019\u500b\u8b8a\u6578\u4e0d\u91cd\u8981\uff0c\u4e5f\u4e0d\u6703\u53bb\u7528\u5b83\uff0c\u6240\u4ee5\u61f6\u5f97\u70ba\u4ed6\u53d6\u540d\u7a31\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u8207 Asterisk \u642d\u914d\u4f7f\u7528\u610f\u5473\u8457\uff0c\u5c07\u4e0d\u5b8c\u5168\u89e3\u5305\u7684\u8cc7\u6599\u66ab\u653e\u5728 underscore \u8b8a\u6578\u4e0a\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u8a3b: underscore \u662f\u4e00\u500b\u8b8a\u6578\uff0c\u6240\u4ee5\u9084\u662f\u53ef\u4ee5\u53d6\u503c\u7684\u3002  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"a, _, b = (1, 2, 3)\nprint(a, b)\n# 1 3\n\na, *_, b = (1,2,3,4,5,6,7,8)\nprint(a, b)\nprint(_)\n# 1 8\n# [2, 3, 4, 5, 6, 7]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"}," Asterisk Underscore: signature"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7528\u4f86\u7576\u4f5c\u4e00\u64b0\u5beb overloaded funcs \u7684\u7c21\u5316\u8a9e\u6cd5\u3002  ")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"./Python_2_Constant"},"Python \u5e38\u6578\u5be6\u4f5c\u7bc4\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Python \u5e38\u6578\u7bc4\u4f8b\u4e2d:\n# \u4e0b\u65b9\u5beb\u6cd5\u610f\u5473\u8457 VarArgs signature\uff0c\u7121\u8ad6\u50b3\u5e7e\u500b args \u90fd\u6703\u5c0e\u5411\u6b64\u51fd\u6578\u3002\n\n# \u7981\u7528\u6240\u6709 setter\ndef __setattr__(self, *_):\n    pass\n")),(0,r.kt)("h2",{id:"\u642d\u914d-asterisk-\u7684\u6253\u5305\u8207\u89e3\u5305-\u4e0d\u5b8c\u5168\u89e3\u5305"},(0,r.kt)("span",{id:"partial_unpacking"},"\u642d\u914d Asterisk \u7684\u6253\u5305\u8207\u89e3\u5305: \u4e0d\u5b8c\u5168\u89e3\u5305")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"VarArg \u5f15\u6578\u6536\u96c6\u7bc4\u4f8b: asterisk variable \u4e0d\u5b8c\u5168\u89e3\u5305"))),(0,r.kt)("p",null,"\u89e3\u8aaa: ",(0,r.kt)("br",null),"\n\u6709\u5225\u65bc Positional unpacking \u6216 Sequence unpacking\uff0c\u4e00\u500b\u8b8a\u6578\u5c0d\u61c9\u4e00\u500b\u5143\u7d20\u7684\u5b8c\u5168\u89e3\u5305\uff0c ",(0,r.kt)("br",null),"\nPython \u9084\u652f\u63f4\u4e0d\u5b8c\u5168\u89e3\u5305\uff0c\u9664\u90e8\u5206\u5143\u7d20\u500b\u5225\u55ae\u4e00\u5206\u96e2\u5916\uff0c\u540c\u6642\u5141\u8a31\u5c07\u90e8\u5206\u5143\u7d20\u6536\u96c6\u6210\u4e00\u500b\u96c6\u5408\u3002 ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"\u4e0b\u65b9\u7bc4\u4f8b: 5 \u500b\u5143\u7d20\u7684 tuple\uff0c\u5148\u9032\u884c\u89e3\u5305\u70ba\u55ae\u4e00\u5143\u7d20\u3002\u524d\u5169\u5143\u7d20\u5206\u5225\u5c0d\u61c9\u8b8a\u6578 a \u8207 b\u3002",(0,r.kt)("br",null),"\n\u5269\u9918\u7684 3 \u5143\u7d20\u5247\u4ee5 asterisk \u7b26\u865f\u6a19\u8a18\u6253\u5305\u6210 others \u8b8a\u6578\u3002",(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n a, b , *others = (1,2,3,4,5)\n print(a)\n # 1\n \n print(b)\n # 2\n \n print(others)\n # (3,4,5)\n\n")))}u.isMDXComponent=!0}}]);