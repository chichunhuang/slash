"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[4097],{76096:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=e(87462),r=(e(67294),e(3905));e(13848);const l={title:"Python \u51fd\u6578",description:"Python \u51fd\u6578\u4ecb\u7d39",keywords:["Python","function"]},i="Python \u51fd\u6578",o={unversionedId:"DevTech/Python/Advanced/Python_2_Function",id:"DevTech/Python/Advanced/Python_2_Function",title:"Python \u51fd\u6578",description:"Python \u51fd\u6578\u4ecb\u7d39",source:"@site/docs/DevTech/Python/Advanced/Python_2_Function.md",sourceDirName:"DevTech/Python/Advanced",slug:"/DevTech/Python/Advanced/Python_2_Function",permalink:"/en/docs/DevTech/Python/Advanced/Python_2_Function",draft:!1,tags:[],version:"current",frontMatter:{title:"Python \u51fd\u6578",description:"Python \u51fd\u6578\u4ecb\u7d39",keywords:["Python","function"]},sidebar:"totem_sidebar",previous:{title:"Python \u4f8b\u5916\u8207\u932f\u8aa4",permalink:"/en/docs/DevTech/Python/Advanced/Python_2_Exception_Error"},next:{title:"Python Generator",permalink:"/en/docs/DevTech/Python/Advanced/Python_2_Generator"}},p={},u=[{value:"\u51fd\u6578\u9677\u9631",id:"\u51fd\u6578\u9677\u9631",level:2},{value:"\u51fd\u6578\u8a3b\u91cb(Annotation)\u5beb\u6cd5",id:"\u51fd\u6578\u8a3b\u91cbannotation\u5beb\u6cd5",level:2},{value:"Python \u51fd\u6578\u7684\u5c6c\u6027(Attributes)",id:"python-\u51fd\u6578\u7684\u5c6c\u6027attributes",level:2},{value:"Bound and Unbound Method",id:"bound-and-unbound-method",level:2},{value:"\u540c\u6a23\u662f\u975c\u614b\u6210\u54e1: \u5e38\u6578",id:"\u540c\u6a23\u662f\u975c\u614b\u6210\u54e1-\u5e38\u6578",level:2}],c={toc:u},s="wrapper";function d(n){let{components:t,...e}=n;return(0,r.kt)(s,(0,a.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-\u51fd\u6578"},"Python \u51fd\u6578"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c3\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../OOP/Python_4_AbstractMethod"},"Python Abstract Method \u8a2d\u8a08\u65b9\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../OOP/Python_4_Class#instance-object-append-method"},"Instance Object \u8ffd\u52a0 Method \u8a2d\u8a08\u65b9\u6cd5  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../OOP/Python_4_Class_Members#cls_method_Factory"},"Factory Method: \u4f7f\u7528 Class Method \u8a9e\u6cd5"))))),(0,r.kt)("h2",{id:"\u51fd\u6578\u9677\u9631"},"\u51fd\u6578\u9677\u9631"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9810\u8a2d\u503c\u662f function \u5275\u5efa\u5f8c\u7522\u751f\u7684\u4e00\u500b\u7269\u4ef6\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u6703\u5b58\u5728\u65bc function \u6240\u5728\u7684 scope\uff0c\u5f62\u6210\u985e\u4f3c\u5168\u57df\u7684\u4e00\u500b\u8b8a\u6578\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u9808\u5c0f\u5fc3 multable default value\uff0c\u6703\u9593\u63a5\u9020\u6210\u9810\u8a2d\u503c\u4e0d\u65b7\u6539\u8b8a\u3002  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"function: multable default value "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# function multable default value: list\ndef string_builder(element: str, arr=[]):\n    arr.append(element)\n    print(arr) # \u5370\u51fa\u7576\u524d\u8cc7\u6599\u5167\u5bb9\n    return arr\n\n\nx = string_builder('A')\n# ['A']\ny = string_builder('B')\n# ['A', 'B'], \u8cc7\u6599\u51fa\u73fe\u7570\u5e38\u7d2f\u52a0\nz = string_builder('C')\n# ['A', 'B', 'C'], \u8cc7\u6599\u518d\u6b21\u51fa\u73fe\u7570\u5e38\u7d2f\u52a0\n\n\n# ==> \u767c\u751f multable \u5167\u5bb9\u7d2f\u52a0\u60c5\u5f62\nprint(x)\n# ['A', 'B', 'C']\nprint(y)\n# ['A', 'B', 'C']\nprint(z)\n# ['A', 'B', 'C']\n")),(0,r.kt)("h2",{id:"\u51fd\u6578\u8a3b\u91cbannotation\u5beb\u6cd5"},"\u51fd\u6578\u8a3b\u91cb(Annotation)\u5beb\u6cd5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Python \u96d6\u88ab\u5b9a\u7fa9\u70ba\u76f4\u8b6f\u5f0f\u8a9e\u8a00\u4e14\u53ef\u52d5\u614b\u578b\u5225\u7d81\u5b9a\uff0c\u4f46\u70ba\u4e86\u5c07\u4f86\u597d\u7dad\u8b77\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u6211\u9084\u662f\u671f\u5f85\u80fd\u70ba\u51fd\u6578\u8207\u8b8a\u6578\u7c21\u55ae\u5b9a\u7fa9\u76ee\u7684\u9810\u671f\u5f85\u578b\u5225\uff0c\u4e26\u4f5c\u70ba\u5718\u968a\u6163\u4f8b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5982\u6b64\uff0c\u624d\u80fd\u8f03\u653e\u5fc3\u7684\u7c21\u5316\u51fd\u6578\u7684\u578b\u5225\u6aa2\u67e5\uff0c\u4e0d\u7136\u5149\u6aa2\u67e5\u8f38\u5165\u8cc7\u6599\u683c\u5f0f\u5c31\u61c9\u63a5\u4e0d\u6687\u3002    ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Annotations Syntax"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6e2c\u8a66\u8b8a\u6578\u8a3b\u91cb\u6642\u767c\u73fe:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u578b\u5225\u6216\u8b8a\u6578\u6558\u8ff0\u4f3c\u4e4e\u53ea\u80fd\u4e8c\u64c7\u4e00"),(0,r.kt)("li",{parentName:"ul"},"\u56de\u50b3\u503c\u4f3c\u4e4e\u53ea\u80fd\u6307\u5b9a\u578b\u5225"),(0,r.kt)("li",{parentName:"ul"},"\u533f\u540d\u51fd\u6578(lambda \u7121\u6cd5\u5beb\u8a3b\u91cb)\uff0c\u5192\u865f\u88ab\u7528\u505a\u5b9a\u7fa9\u51fd\u6578\u5340\u584a\u7528\u4e86")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n# \u8b8a\u6578\u8a3b\u89e3: \u8b8a\u6578\u540d:\u8a3b\u89e3=\u9810\u8a2d\u503c\n# \u56de\u50b3\u503c: \u76f4\u63a5\u586b\u5165\u578b\u5225\u6216 None\n\n# \u8b8a\u6578\u6558\u8ff0\ndef funcName(varName:'desc'=defaultValue) -> retType:\n    pass\n\n# \u8b8a\u6578\u578b\u5225\ndef funcName2(varName:int=defaultValuue) -> retType:\n    pass\n    \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Annotations Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\ndef area(w: 'width' = 10, l: 'length' = 10) -> int:\n    return w * l\nprint(area.__annotations__)\n# {'w': 'width', 'l': 'length', 'return': <class 'int'>}\n\n\ndef area(w: 'width' = 10, l:int = 10) -> int:\n    return w * l\nprint(area.__annotations__)\n# {'w': 'width', 'l': <class 'int'>, 'return': <class 'int'>}    \n")),(0,r.kt)("h2",{id:"python-\u51fd\u6578\u7684\u5c6c\u6027attributes"},"Python \u51fd\u6578\u7684\u5c6c\u6027(Attributes)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'\u985e\u4f3c"\u975c\u614b\u672c\u5730"\u8b8a\u6578(static local)',(0,r.kt)("br",{parentName:"p"}),"\n","\u76f4\u63a5\u70ba\u51fd\u6578\u6307\u5b9a\u4e00\u500b\u975c\u614b\u8b8a\u6578\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5fc5\u9808\u5148\u70ba\u687f\u8b8a\u6578\u521d\u59cb\u5316\u4e26\u8ce6\u503c\u5f8c\u624d\u80fd\u4f7f\u7528\u3002  "),(0,r.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u60c5\u5883:",(0,r.kt)("br",{parentName:"p"}),"\n","Python \u4e2d\u51fd\u6578\u53ef\u4ee5\u662f\u4e00\u7d1a\u6210\u54e1(first-class object)\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u9019\u908a\u61c9\u8a72\u662f Python \u4ee5\u51fd\u6578\u62bd\u8c61\u7269\u4ef6\u6642\u7684\u53e6\u7a2e\u4f5c\u6cd5\u3002  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Static Variable: \u76f4\u63a5\u9935 static variable \u7d66\u4e00\u7d1a\u6210\u54e1"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7bc4\u4f8b\u4e2d\u7684\u8b8a\u6578 count"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f static \u8b8a\u6578\u7684\u547d\u540d\u65b9\u5f0f: ",(0,r.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u8981\u51a0\u4e0a\u51fd\u6578\u540d\u7a31: circleArea.pi"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def circleArea(radius: int):\n    pi = 3.14 # \u5ba3\u544a\u4e00\u500b\u8b8a\u6578 pi\n    circleArea.pi = pi # \u5c07 pi \u8f49\u6210 static \u6210\u54e1\uff0c\u4e14\u6bcf\u6b21\u521d\u59cb\u5316\u6642\u6703 reset\n    pass\n\ncircleArea.pi = 3.14159\n# define count variable, and init\n# or init by invoking foo(x) first\n# otherwise: AttributeError: 'function' object has no attribute 'count'\n\nprint(circleArea.pi)\nprint(vars(circleArea))\n# 3.14159\n# {'radius': 3.14159}\n\ny = circleArea\ny.pi += 1 # \u5c0e\u5411\u5171\u7528\u7684\u975c\u614b\u8b8a\u6578\nprint(circleArea.pi)\nprint(vars(circleArea))\n# 4.14159\n# {'radius': 4.14159}\n\nz = circleArea(10) # reset\nprint(circleArea.pi)\nprint(vars(circleArea))\n# 3.14\n# {'radius': 3.14}\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Static functions: \u51fd\u6578\u4e00\u7d1a\u6210\u54e1\u4e0b\u7684 static function"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def area():\n    pi = 3.14\n\n    def cricleArea(radius: int):\n        print("Circle Area = ")\n        return pi * radius * radius\n\n    def squareArea(width: int):\n        print("Square Area = ")\n        return width * width\n\n    # \u6b64\u5340\u5c07\u6210\u54e1\u5ba3\u544a\u70ba static members\n    area.cricle = cricleArea\n    area.square = squareArea\n    area.pi = pi\n    return area\n\n\na = area()\n\nprint(a.square(10))\n# Square Area =\n# 100\n\nprint(a.cricle(10))\n# Circle Area =\n# 314.0\n\nprint(a.pi)\n# 3.14\n')),(0,r.kt)("h2",{id:"bound-and-unbound-method"},"Bound and Unbound Method"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u51fd\u6578\u4e5f\u53ef\u4f9d\u64da\u7d81\u5b9a\u95dc\u4fc2(Binding)\u5206\u985e:",(0,r.kt)("br",{parentName:"p"}),"\n","Bounding \u6307\u7684\u662f: Method \u662f\u5426\u8207 class instance \u76f8\u4e92\u7d81\u5b9a  ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"binding : ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"method \u7684 signature \u4e2d\u6709 self"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6642\u9700\u5148\u5efa\u7acb instance"),(0,r.kt)("li",{parentName:"ul"},"Python \u4e2d\u7684 ",(0,r.kt)("a",{parentName:"li",href:"../OOP/Python_4_Class_Members#Funs_Instance"},"Simple Method")))),(0,r.kt)("li",{parentName:"ul"},"Unbinding:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"method \u7684 signature \u4e2d\u6c92\u6709 self"),(0,r.kt)("li",{parentName:"ul"},"method \u51a0 @staticmethod annotation"),(0,r.kt)("li",{parentName:"ul"},"Python \u4e2d\u7684 ",(0,r.kt)("a",{parentName:"li",href:"../OOP/Python_4_Class_Members#Funs_Static"},"Simple Method")),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6642\u90e8\u9700\u5148\u5efa\u7acb instance")))),(0,r.kt)("h2",{id:"\u540c\u6a23\u662f\u975c\u614b\u6210\u54e1-\u5e38\u6578"},"\u540c\u6a23\u662f\u975c\u614b\u6210\u54e1: \u5e38\u6578"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./Python_2_Constant"},"Python \u5e38\u6578\u5be6\u4f5c\u65b9\u5f0f"))))}d.isMDXComponent=!0}}]);