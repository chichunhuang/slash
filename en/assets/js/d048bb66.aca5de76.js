"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[7321],{47079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=n(87462),o=(n(67294),n(3905)),a=n(13848);const l={title:"Pickle \u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316",description:"Python \u7269\u4ef6\u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316",keywords:["Python","Tutorial","Serialization"]},p="Python \u7269\u4ef6\u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316: pickle",r={unversionedId:"DevTech/Python/Python_module_pickle",id:"DevTech/Python/Python_module_pickle",title:"Pickle \u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316",description:"Python \u7269\u4ef6\u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316",source:"@site/docs/DevTech/Python/Python_module_pickle.md",sourceDirName:"DevTech/Python",slug:"/DevTech/Python/Python_module_pickle",permalink:"/en/docs/DevTech/Python/Python_module_pickle",draft:!1,tags:[],version:"current",frontMatter:{title:"Pickle \u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316",description:"Python \u7269\u4ef6\u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316",keywords:["Python","Tutorial","Serialization"]},sidebar:"tutorialSidebar",previous:{title:"Python Utils",permalink:"/en/docs/DevTech/Python/Python_Utils"},next:{title:"Send Mail by Python smtplib",permalink:"/en/docs/DevTech/Python/Send_Eail_By_Python"}},h={},d=[{value:"Pickle serialization: dump(object, path)",id:"pickle-serialization-dumpobject-path",level:2},{value:"Pickle de-serialization: load(path)",id:"pickle-de-serialization-loadpath",level:2},{value:"\u8207 eval() \u6bd4\u8f03:",id:"\u8207-eval-\u6bd4\u8f03",level:2}],c={toc:d},k="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-\u7269\u4ef6\u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316-pickle"},"Python \u7269\u4ef6\u5e8f\u5217\u5316\u8207\u53cd\u5e8f\u5217\u5316: pickle"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"pickle module \u5141\u8a31\u4f60\u5c07 python \u4e2d\u7684 Object serialized\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u985e\u4f3c tomcat serialized web application \u7684\u72c0\u614b\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5728\u9069\u7576\u6216\u9700\u8981\u7684\u60c5\u5f62\u4e0b\u518d\u53cd\u5e8f\u5217\u5316\u56de python objects\u3002  ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u8aaa\u660e\u53c3\u8003",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/zh-tw/3/library/pickle.html"},"https://docs.python.org/zh-tw/3/library/pickle.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/pickle.html"},"https://docs.python.org/3/library/pickle.html"))))),(0,o.kt)("h2",{id:"pickle-serialization-dumpobject-path"},"Pickle serialization: dump(object, path)"),(0,o.kt)(a.dn,{text:"\nimport pickle\n#\nperson = {\n    'name': 'Totem',\n    'age': 30,\n    'gender': 'M'\n}\n#\nwith open('D:/dump_p.pkl', 'wb') as f:\n    pickle.dump(person, f)\n# {'name': 'Totem', 'age': 30, 'gender': 'M'}\n    ",language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,o.kt)("h2",{id:"pickle-de-serialization-loadpath"},"Pickle de-serialization: load(path)"),(0,o.kt)(a.dn,{text:"\nimport pickle\n# \nwith open('D:/dump_p.pkl', 'rb') as f:\n    data = pickle.load(f)\nprint(data)\n#\ndata['weight'] = 80\ndata['height'] = 170\nwith open('D:/dump_p2.pkl', 'wb') as f:\n    pickle.dump(data, f)\nwith open('D:/dump_p2.pkl', 'rb') as f:\n    data2 = pickle.load(f)\nprint(data2)\n# {'name': 'Totem', 'age': 30, 'gender': 'M', 'weight': 80, 'height': 170}\n    ",language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}),(0,o.kt)("h2",{id:"\u8207-eval-\u6bd4\u8f03"},"\u8207 eval() \u6bd4\u8f03:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"eval \u4e5f\u53ef\u9054\u5230\u5c07\u8cc7\u6599\u5e8f\u5217\u5316\u7684\u76ee\u7684\u3002  ")),(0,o.kt)(a.dn,{text:'\nwith open(\'D:/eval_string_file.txt\', \'r\') as f:\n    content = f.readline()\n    # content = \'{"name": "Totem", "age": 30, "gender": "M", "weight": 80, "height": 170}\'\n    p = eval(content)\n    print(p)\n    print(type(p))\n    ',language:"python",showLineNumbers:"true",mdxType:"CodeBlock"}))}s.isMDXComponent=!0}}]);