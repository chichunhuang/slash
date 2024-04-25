"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[4465],{19580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),s=(t(67294),t(3905));t(13848);const l={title:"Python \u7269\u4ef6\u4ecb\u7d39",description:"Python Class \u4ecb\u7d39",keywords:["Python","Class Structure"]},r="Python Class \u4ecb\u7d39",o={unversionedId:"DevTech/Python/OOP/Python_4_Class",id:"DevTech/Python/OOP/Python_4_Class",title:"Python \u7269\u4ef6\u4ecb\u7d39",description:"Python Class \u4ecb\u7d39",source:"@site/docs/DevTech/Python/OOP/Python_4_Class.md",sourceDirName:"DevTech/Python/OOP",slug:"/DevTech/Python/OOP/Python_4_Class",permalink:"/docs/DevTech/Python/OOP/Python_4_Class",draft:!1,tags:[],version:"current",frontMatter:{title:"Python \u7269\u4ef6\u4ecb\u7d39",description:"Python Class \u4ecb\u7d39",keywords:["Python","Class Structure"]},sidebar:"tutorialSidebar",previous:{title:"PyCharm \u4e2d\u81ea\u8a02 Snippet Templates",permalink:"/docs/DevTech/Python/IDE/PyCharm_Snippet_Template"},next:{title:"Python \u985e\u5225\u6210\u54e1",permalink:"/docs/DevTech/Python/OOP/Python_4_Class_Members"}},c={},p=[{value:'<span id="cls_structure">Python Class \u7d50\u69cb</span>',id:"python-class-\u7d50\u69cb",level:2},{value:'<span id="cls_constructor">\u5efa\u69cb\u5b50</span>',id:"\u5efa\u69cb\u5b50",level:2},{value:'<span id="cls_nameing_rules">\u547d\u540d\u6163\u4f8b:</span>',id:"\u547d\u540d\u6163\u4f8b",level:2},{value:'<span id="cls_members">\u65b9\u6cd5\u8207\u5c6c\u6027</span>',id:"\u65b9\u6cd5\u8207\u5c6c\u6027",level:2},{value:'<span id="cls_anonymous"><strong><em>Variable \u8ffd\u52a0</em></strong></span>',id:"variable-\u8ffd\u52a0",level:2},{value:"<strong><em>Instance Object \u8ffd\u52a0 Method</em></strong>",id:"instance-object-\u8ffd\u52a0-method",level:2},{value:"<strong><em>Class Object \u8ffd\u52a0 Function</em></strong>",id:"class-object-\u8ffd\u52a0-function",level:2}],i={toc:p},m="wrapper";function k(e){let{components:n,...t}=e;return(0,s.kt)(m,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"python-class-\u4ecb\u7d39"},"Python Class \u4ecb\u7d39"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Pythonic way \u91dd\u5c0d\u7269\u4ef6\u8207\u985e\u5225\u4e0a\u7684 terminology\uff0c\u8207 Java \u6709\u4e9b\u5dee\u7570\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u56e0\u70ba Python \u662f\u76f4\u8b6f\u662f\u8a9e\u97f3\uff0c\u6240\u6709\u7684\u8173\u672c(Script) \u90fd\u6703\u88ab interpreter \u76f4\u8b6f\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\uff0c\u5728 Python \u7684\u4e16\u754c\u4e2d class script \u88ab\u76f4\u8b6f\u5f8c\u4e5f\u6703\u88ab\u7a31\u70ba object (class object)\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u7531 class object \u56e0\u8abf\u7528\u800c\u7522\u751f\u51fa\u7684\u7269\u4ef6\u7a31\u70ba instance object\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u5728 Python Environment \u4e2d\u4f3c\u4e4e\u4e5f\u6c92\u6709 Java heap \u7684\u7d50\u69cb\u3002")),(0,s.kt)("h2",{id:"python-class-\u7d50\u69cb"},(0,s.kt)("span",{id:"cls_structure"},"Python Class \u7d50\u69cb")),(0,s.kt)("pre",null,"*.py",(0,s.kt)("br",null),"Python Script --\x3e Class Object --\x3e Instance Object ",(0,s.kt)("br",null),"\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\\",(0,s.kt)("br",null),"\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\\> Instance Object"),(0,s.kt)("h2",{id:"\u5efa\u69cb\u5b50"},(0,s.kt)("span",{id:"cls_constructor"},"\u5efa\u69cb\u5b50")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Python \u4e2d Class \u5efa\u69cb\u5b50\u70ba ","_","_","init","_","_"," \u51fd\u6578",(0,s.kt)("br",{parentName:"p"}),"\n","\u53e6\u5916\uff0c\u56e0\u70ba Python \u7684\u51fd\u6578(\u5305\u542b\u5efa\u69cb\u5b50)\u90fd\u652f\u63f4 varArgs, kwArgs\uff0c\nPython \u5efa\u69cb\u5b50\u672c\u8eab\u5373\u5177\u6709\u591a\u8f09\u7279\u6027\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u56e0\u6b64\uff0cPython \u6c92\u6709\u5982 Java \u822c\u4ee5 this \u547c\u53eb overloaded \u5efa\u69cb\u5b50\u7684\u8a9e\u6cd5\u3002 ")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u53c3\u8003 ",(0,s.kt)("a",{parentName:"li",href:"./Python_4_Inheritance_Basic#inheritance_constructor"},"\u7e7c\u627f\u7d50\u69cb\u4e0b\u7684\u5efa\u69cb\u5b50: super")),(0,s.kt)("li",{parentName:"ul"},"\u53c3\u8003 ",(0,s.kt)("a",{parentName:"li",href:"./Python_4_Class_Members#cls_method_Factory"},"Factory Method: \u4f7f\u7528 Class Method \u8a9e\u6cd5"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Profile:\n    def __init__(self, name, gender, *args, **kwargs):\n        self.name = name\n        self.gender = gender\n        self.infoList = args\n        self.infoMap = kwargs\n\n# Fundamental constructor\np2 = Profile('Totem', 'Male')       \n\n# Chimera Style\np = Profile('Winnie', 'Female', \n            'Shopping', 'Reading', # varArgs\n            height='160', addr='TW', tel='0955-555-555') #kwargs\n\nprint(p.name) # Winnie\nprint(p.infoList) # ('Shopping', 'Reading')\nprint(p.infoMap) # {'height': '160', 'addr': 'TW', 'tel': '0955-555-555'}\n")),(0,s.kt)("h2",{id:"\u547d\u540d\u6163\u4f8b"},(0,s.kt)("span",{id:"cls_nameing_rules"},"\u547d\u540d\u6163\u4f8b:")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"package name"),": lowercase",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"class name"),": CamelCase",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"member name"),": lower_case with under_scores",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"exception name"),": CamelCase",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("strong",{parentName:"p"},"constant name"),": UPPERCASE  ")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Java \u4e2d\u7684 this => Python \u4e2d\u7684 self")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u5efa\u69cb\u5b50\u70ba ","_","_","init","_","_"," \u51fd\u6578")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"biologe.animal.py")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'class Animal:\n    alive = True\n    def __init__(self, gender: bool, voice: str):\n        self.voice = voice\n        self.gender = gender\n        self.age = None\n\n    def get_voice(self):\n        return self.voice\n\n    def get_gender(self):\n        if self.gender:\n            return "Male"\n        else:\n            return "Female"\n\n    def get_display(self):\n        return f\'sex:{self.gender}, voice={self.voice}, age={self.age} \'\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"run.py")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom biology.animal import Animal\n\ndog = Animal(True, voice="bark")\nprint(dog.getVoice())\nprint(dog.getGender())\n\n')),(0,s.kt)("h2",{id:"\u65b9\u6cd5\u8207\u5c6c\u6027"},(0,s.kt)("span",{id:"cls_members"},"\u65b9\u6cd5\u8207\u5c6c\u6027")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Python\n\u5141\u8a31 ",(0,s.kt)("strong",{parentName:"p"},"instance object")," ",(0,s.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u5728 class \u5b9a\u7fa9\u5340\u584a\u5916")," \u81ea\u884c\u6dfb\u52a0\u65b0\u7684\u5c6c\u6027\u8207\u51fd\u6578\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u800c\u76f8\u95dc\u65b0\u589e\u6210\u54e1\u50c5\u751f\u6548\u65bc instance object \u8eab\u4e0a\u3002")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u5141\u8a31 ",(0,s.kt)("strong",{parentName:"p"},"class object")," ",(0,s.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"\u5728 class \u5b9a\u7fa9\u5340\u584a\u5916")," \u81ea\u884c\u6dfb\u52a0\u65b0\u7684\u5c6c\u6027\u8207\u51fd\u6578\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u4f46\u76f8\u95dc\u65b0\u589e\u6210\u54e1\u6703\u751f\u6548\u5728\u9664\u4e86 class instance \u5916\u4e5f\u6703\u5728 instance object \u8eab\u4e0a\u751f\u6548\u3002")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u540c\u6642\u65b0\u589e\u540c\u540d\u8b8a\u6578\uff0c\u5404\u81ea\u64c1\u6709\u4e00\u500b\u79c1\u6709\u8b8a\u6578\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u9019\u60c5\u5883\u4e5f\u53ef\u8aaa\u6210 instance object \u906e\u853d\u4e86 class object \u6210\u54e1  ")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u5927\u90e8\u5206\u66f8\u7c4d\u6703\u8a0e\u8ad6\u5230\u9019\u9805\u529f\u80fd\u3002\n\u6c92\u932f\uff0c\u8a9e\u6cd5\u4e0a\u4f86\u8aaa\u9019\u662f\u4e00\u500b\u529f\u80fd\uff0c\u4f46\u5f88\u660e\u986f\u7684\u4ed6\u6703\u9020\u6210\u7ba1\u7406\u8207\u7dad\u8b77\u4e0a\u7684\u6210\u672c\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u61c9\u8a72\u907f\u958b\u3002\n\u53ef\u4ee5\u5f9e class object \u8eab\u4e0a\u4f86\u9632\u5446\u3002",(0,s.kt)("br",{parentName:"p"}),"\n","\u5982\u4e0b:",(0,s.kt)("br",{parentName:"p"}),"\n","Pythonic Way \u8b8a\u6578\u547d\u540d\u898f\u5247:",(0,s.kt)("br",{parentName:"p"}),"\n","\u57fa\u672c\u4e0a\u4e0d\u8a72\u5efa\u7acb\u540c\u540d\u8b8a\u6578",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("a",{parentName:"p",href:"../Python_Convention"},"\u8b8a\u6578\u547d\u540d\u898f\u5247"),": \u4f8b\u5982 class object \u8ffd\u52a0\u7684\u6210\u54e1\u4ee5 single underscore \u70ba\u524d\u7db4\uff0c\u5ba3\u544a\u662f class level\u3002",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("a",{parentName:"p",href:"../Advanced/Python_2_Constant"},"\u5e38\u6578\u8a2d\u8a08\u65b9\u5f0f"),": \u4e5f\u8a31\u53ef\u4ee5\u7528\u5e38\u6578\u6216\u96d9\u5e95\u7dda\u544a\u77e5\uff0c\u9019\u662f class level \u7528\u7684\u6210\u54e1\u3002   ")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u9019\u6bb5\u843d\u50c5\u662f\u500b\u4eba\u8a18\u61b6\u8207\u7406\u89e3\u7528\uff0c\u4e26\u672a\u6df1\u5c64\u7814\u7a76 Python Interpreter \u5be6\u969b\u904b\u65b9\u5f0f\u4f5c\u65b9\u5f0f\u3002  "),(0,s.kt)("li",{parentName:"ul"},"\u7531 Python class \u5efa\u7acb instance object \u904e\u7a0b\u6bd4\u8f03\u985e\u4f3c POM \u6216 XML \u7684\u7e7c\u627f\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u60f3\u6210\u662f\uff0c",(0,s.kt)("span",{style:{backgroundColor:"#ffd1b3"}},"composite \u7d50\u69cb\u3002 Instance Object \u5403\u4e86\u4e00\u4efd Class Object \u7d50\u69cb\u5728\u8eab\u4e0a"),"\u3002 "),(0,s.kt)("li",{parentName:"ul"},"\u6240\u4ee5 Object Instance \u64c1\u6709 Class Object \u7684 reference\u3002"),(0,s.kt)("li",{parentName:"ul"},"Python \u5141\u8a31\u7269\u4ef6 instacne \u5efa\u7acb\u5f8c\uff0c\u518d\u8ffd\u52a0\u6210\u54e1\u8b8a\u6578\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u7531\u6b64\u63a8\u5c0e\uff0c"),(0,s.kt)("li",{parentName:"ul"},"\u7576 Class Object \u4e8b\u5f8c\u8ffd\u52a0\u6210\u54e1\u6642\uff0cInstance Object \u56e0\u70ba\u64c1\u6709 Class reference\uff0c\u6240\u4ee5\u4e5f\u80fd\u8b80\u53d6\u8ffd\u52a0\u6210\u54e1\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u53cd\u4e4b\u7576 Instance Object \u4e8b\u5f8c\u8ffd\u52a0\u6210\u54e1\u6642\uff0cClass Object \u56e0\u7121\u6cd5\u5f97\u77e5 Instance reference\uff0c\u6240\u4ee5\u7121\u5f9e\u5f97\u77e5\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u4f46\u7576 Class / Instance Object \u90fd\u8ffd\u52a0\u540c\u540d\u6210\u54e1\u6642\uff0c\u56e0\u70ba Shadow effect \u9020\u6210\u7684\u5f71\u97ff\u3002Instance \u63db\u6539\u7528\u79c1\u6709\u6210\u54e1\u3002")),(0,s.kt)("h2",{id:"variable-\u8ffd\u52a0"},(0,s.kt)("span",{id:"cls_anonymous"},(0,s.kt)("strong",{parentName:"h2"},(0,s.kt)("em",{parentName:"strong"},"Variable \u8ffd\u52a0")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'from biology.animal import Animal\n\ndog = Animal(True, voice="bark!")\ncat = Animal(False, voice="mew~")\nprint(dog.get_voice())\nprint(dog.get_gender())\n\n# \u906e\u853d\u767c\u751f, \u907f\u514d\u4f7f\u7528\ndog.alive = False # alive \u906e\u853d,\u8b8a\u6210 dog scope \u7684\u6210\u54e1.\nprint(Animal.alive)  # True, \u81ea\u4f5c\u5b7d\u8a72\u6b7b, class \u8b8a\u6578\u540d\u61c9\u8a72\u7d66\u4e88\u8b66\u793a\u3002\nprint(dog.alive)  # False\n\ndog.eat = \'bone\' # \u6b63\u5e38\u8ffd\u52a0\u7684 instance variable\n\nAnimal._action = \'Run\'\nprint(dog._action) # Run\n\n# IDE \u4e5f\u6703\u51fa\u73fe\u8b66\u793a: Access to a protected member _action of a class\ndog._action = "Swim" # \u898b\u5230 underscore prefix/suffix \u61c9\u8a72\u8981\u8b66\u89ba!! We are all consenting adults!\nprint(dog._action)  # shadow effect, \u8b8a\u6578\u906e\u853d, \u81ea\u4f5c\u5b7d\u8a72\u6b7b, \u6ce8\u610f\u547d\u540d\u6163\u4f8b _X. \n\n')),(0,s.kt)("h2",{id:"instance-object-\u8ffd\u52a0-method"},(0,s.kt)("strong",{parentName:"h2"},(0,s.kt)("em",{parentName:"strong"},"Instance Object \u8ffd\u52a0 Method"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u4ee5 Java \u4f5c\u6bd4\u55bb\uff0c\u6211\u7684\u7406\u89e3\u662f:",(0,s.kt)("br",{parentName:"p"}),"\n","Instance Object \u985e\u4f3c Class \u7684\u5b50\u985e\u5225\uff0c\u7576\u60f3\u751f\u51fa\u4e00\u500b anonymous \u5b50\u985e\u4e26\u64f4\u5145\u529f\u80fd\u6642\u4f7f\u7528\u3002  ")),(0,s.kt)("p",null,"\u6b65\u9a5f: ",(0,s.kt)("br",null)),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u5148\u5efa\u7acb\u4e00\u500b\u65b0 method"),(0,s.kt)("li",{parentName:"ol"},"instance object \u518d\u4ee5\u65b0\u6210\u54e1\u8b8a\u6578\u8207 method \u5efa\u7acb\u95dc\u806f"),(0,s.kt)("li",{parentName:"ol"},"instance object \u4ee5\u65b0\u6210\u54e1\u89f8\u767c\u65b0\u884c\u70ba")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import functools\n\nclass Student:\n    def __init__(self, name: str, grade: int, scores=[]):\n        self.name = name\n        self.grade = grade\n        self.scores = scores\n\ndef mean(scores: list = []) -> float:\n    if len(scores) == 0:\n        return 0\n    sum = functools.reduce(lambda a, b: a + b, scores)\n    return sum / len(scores)\n\ntotem = Student('Tom', 7)\n\ntotem.scores.append(60)\ntotem.scores.append(70)\nprint(totem.scores)\n\ntotem.average = mean  # append new function\n\nprint(totem.average(totem.scores))  # 65.0\n\n")),(0,s.kt)("h2",{id:"class-object-\u8ffd\u52a0-function"},(0,s.kt)("strong",{parentName:"h2"},(0,s.kt)("em",{parentName:"strong"},"Class Object \u8ffd\u52a0 Function"))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6211\u7684\u7406\u89e3\u662f\uff0c\u70ba\u7b2c\u4e09\u65b9\u63d0\u4f9b\u7684\u5de5\u5177\u518d\u8ffd\u52a0\u5176\u4ed6\u529f\u80fd\u51fd\u6578\u6642\u4f7f\u7528\u3002  ")),(0,s.kt)("p",null,"\u6b65\u9a5f: ",(0,s.kt)("br",null)),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u5148\u5efa\u7acb\u4e00\u500b\u5e36 self \u53c3\u6578 function (self \u6307\u5411 instance object)"),(0,s.kt)("li",{parentName:"ol"},"function \u53ef\u4ee5\u85c9\u7531 self \u53d6\u5f97 class \u7684\u5176\u4ed6\u6210\u54e1"),(0,s.kt)("li",{parentName:"ol"},"class object \u518d\u4ee5\u65b0\u6210\u54e1\u8b8a\u6578\u8207 function \u5efa\u7acb\u95dc\u806f"),(0,s.kt)("li",{parentName:"ol"},"class object \u4ee5\u65b0\u6210\u54e1\u89f8\u767c\u65b0\u884c\u70ba")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"man.persion.py"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Person:\n    def __init__(self, first_name: str, last_name: str):\n        self.first_name = first_name\n        self.last_name = last_name\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"run.py"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6ce8\u610f: \u6b32\u9644\u52a0\u7d66 class \u7684 Function \u9700\u5e36 self \u53c3\u6578")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# append method to class\nfrom man.person import Person\n\ndef full_name(self, separator: str): # \u8a3b\u610f\u6b64\u8655\u7b2c\u4e00\u500b\u53c3\u6578\u662f self\n    return self.first_name + separator + self.last_name\n\nPerson.full_name = full_name\ntotem = Person("Totem", "Insect")\nprint(totem.full_name(\'_\')) # Totem_Insect\n')))}k.isMDXComponent=!0}}]);