"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[7565],{46475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var l=n(87462),a=(n(67294),n(3905));n(13848);const i={title:"Python File Operation",description:"Python \u4e2d\u64cd\u4f5c File \u76f8\u95dc",keywords:["Python","File"]},r="Python File \u64cd\u4f5c",p={unversionedId:"DevTech/Python/Python_File",id:"DevTech/Python/Python_File",title:"Python File Operation",description:"Python \u4e2d\u64cd\u4f5c File \u76f8\u95dc",source:"@site/docs/DevTech/Python/Python_File.md",sourceDirName:"DevTech/Python",slug:"/DevTech/Python/Python_File",permalink:"/en/docs/DevTech/Python/Python_File",draft:!1,tags:[],version:"current",frontMatter:{title:"Python File Operation",description:"Python \u4e2d\u64cd\u4f5c File \u76f8\u95dc",keywords:["Python","File"]},sidebar:"tutorialSidebar",previous:{title:"Python Conventions",permalink:"/en/docs/DevTech/Python/Python_Convention"},next:{title:"Python Typing",permalink:"/en/docs/DevTech/Python/Python_Typing"}},o={},d=[{value:"\u6a94\u6848\u958b\u555f",id:"\u6a94\u6848\u958b\u555f",level:2},{value:"\u6a94\u6848\u95dc\u9589",id:"\u6a94\u6848\u95dc\u9589",level:2},{value:"\u6a94\u6848\u8b80\u53d6",id:"\u6a94\u6848\u8b80\u53d6",level:2},{value:"\u6a94\u6848\u5beb\u5165",id:"\u6a94\u6848\u5beb\u5165",level:2},{value:"Exception \u8655\u7406",id:"exception-\u8655\u7406",level:2}],s={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-file-\u64cd\u4f5c"},"Python File \u64cd\u4f5c"),(0,a.kt)("h1",{id:"\u57fa\u672c\u64cd\u4f5c"},"\u57fa\u672c\u64cd\u4f5c"),(0,a.kt)("h2",{id:"\u6a94\u6848\u958b\u555f"},"\u6a94\u6848\u958b\u555f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Syntax",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"filename: \u7d55\u5c0d\u6216\u76f8\u5c0d\u8def\u5f91: raw text",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ex: r'D:\\tmp\\tyemplate_utf8.txt'"))),(0,a.kt)("li",{parentName:"ul"},"mode: default 'rt'",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"r: read"),(0,a.kt)("li",{parentName:"ul"},"b: binary"),(0,a.kt)("li",{parentName:"ul"},"t: text"),(0,a.kt)("li",{parentName:"ul"},"w: write"),(0,a.kt)("li",{parentName:"ul"},"a: append"))),(0,a.kt)("li",{parentName:"ul"},"encoding: utf-8, big5, \u932f\u8aa4\u6642\u62cb\u51fa UnicodeDecodeError",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ex:  encoding='UTF-8'")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"fp=open(<filename>,<mode>,<encoding>)\n\nwith open(r'D:\\template_utf8.txt', 'r', encoding='UTF-8') as file:\n    # pass\n")),(0,a.kt)("h2",{id:"\u6a94\u6848\u95dc\u9589"},"\u6a94\u6848\u95dc\u9589"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u624b\u52d5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u624b\u52d5\u95dc\u9589\u6642\u81ea\u884c\u547c\u53eb f.close()")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"fp.close()\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"closable ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52d5\u95dc\u9589\u6642\u63a1\u7528 closable \u8a9e\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u96e2\u958b with scope \u6642 python \u4ee3\u70ba\u95dc\u9589")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"with open(<filename>) as f:\n    # do something\n")),(0,a.kt)("h2",{id:"\u6a94\u6848\u8b80\u53d6"},"\u6a94\u6848\u8b80\u53d6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Syntax",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"file.read() "),(0,a.kt)("li",{parentName:"ul"},"file.read(","[size]",") : \u4f9d\u6307\u5b9a size \u6c7a\u5b9a\u56de\u50b3\u5167\u5bb9"),(0,a.kt)("li",{parentName:"ul"},"file.readline() : \u56de\u50b3\u7d50\u679c\u5305\u542b\u63db\u884c\u7b26\u865f"),(0,a.kt)("li",{parentName:"ul"},"file.readlines() : \u56de\u50b3 String list"))),(0,a.kt)("li",{parentName:"ul"},"closable : \u53ef\u6df7\u642d\u4e0a\u65b9 closable \u8a9e\u6cd5\u7531 VM \u81ea\u52d5\u95dc\u9589\u8cc7\u6599\u6d41\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'dataFile=fp.read()\n\ndataByte=fp.read([size])\n\n\nfile = open("compress.zip", "rb")\ndata = file.read(10)\nwhile data:\n    print(data)\n    data = file.read(10)\nfile.close()\n\nfile = open("note.txt", "r")\ncontent = file.read(20)\nprint(content)\nfile.close()\n\n\nfile = open("statements.txt", "r")\nwhile True:\n    content=file.readline()\n    if not content:\n        break\n    print(content)\nfile.close()\n\n\nfile = open("statements.txt", "r")\ncontent=file.readlines()\nprint(content)\nfile.close()\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u82e5\u662f 'b' mode(binary mode): size \u4ee3\u8868 byte \u9577\u5ea6\uff0c\u56de\u50b3\u7684 data \u662f\u4f4d\u5143\u7d44\u4e32\u5217 (sequence of byte) "),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u662f 't' mode(text mode): size \u4ee3\u8868\u5b57\u5143\u9577\u5ea6\uff0c\u56de\u50b3\u7684 data \u662f String  ")),(0,a.kt)("h2",{id:"\u6a94\u6848\u5beb\u5165"},"\u6a94\u6848\u5beb\u5165"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Syntax",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"fp.write(data)"),(0,a.kt)("li",{parentName:"ul"},"fp.writelines(data_list)")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"fp.write(data_String)\n# \u628a\u5b57\u4e32 data \u5beb\u5165 file\n\nfp.writelines(data_list)\n# \u65b7\u884c\u9700\u81ea\u884c\u8655\u7406\uff0c\u81ea\u884c\u52a0\u5165\u65b7\u884c\u7b26\u865f\u65bc\u6307\u5b9a\u4f4d\u7f6e\u3002\n\n")),(0,a.kt)("h2",{id:"exception-\u8655\u7406"},"Exception \u8655\u7406"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"try except finally")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"try:\n    with open(r'D:\\tmp\\file_not_found.txt', 'r', encoding='UTF-8') as file2:\n        for line in file2.readlines():\n            print(line)\nexcept: \n    print('file not FOUND')\nfinally:\n    print('send error mail')\n\n")),(0,a.kt)("h1",{id:"with-as-\u5b9a\u7fa9\u4e00\u500b\u81e8\u6642\u7684-codeblock"},"with as: \u5b9a\u7fa9\u4e00\u500b",(0,a.kt)("strong",{parentName:"h1"},"\u81e8\u6642\u7684 codeblock")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"with as \u7528\u5728\u6a94\u6848\u958b\u555f\u7684",(0,a.kt)("strong",{parentName:"li"},"\u66ab\u6642"),"\u8cc7\u6599\u6d41\u5340\u584a\u7bc4\u4f8b"),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f: \u9019\u908a\u9700\u8981\u4e00\u500b\u5192\u865f : \u505a Multi-line Block \u7bc4\u570d\u9650\u5b9a ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"with open(file_path) as file_alias:\n    # do....\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"with as \u7528\u5728\u5b9a\u7fa9\u4e00\u500b",(0,a.kt)("strong",{parentName:"li"},"\u81e8\u6642"),"\u7684\u7cbe\u78ba\u5ea6\u9650\u5236\u5340\u584a\u7bc4\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import decimal\nwith with decimal.localcontext() as ctx:\n    ctx.prec = 5\n    #do something\n")),(0,a.kt)("h1",{id:"pandas"},"pandas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 pandas \u8b80\u53d6\u8cc7\u6599")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\ndata1 = pd.read_csv(r'C:\\temp\\filea.csv')\ndata2 = pd.read_table(\"filepath\", dep='\\t')\n# ...\u53ef\u8b80\u53d6\u591a\u7a2e\u683c\u5f0f\n\ndata1.to_csv()\n\n")),(0,a.kt)("h1",{id:"text-file-parsing-\u5b8c\u6574\u7bc4\u4f8b"},"Text File Parsing \u5b8c\u6574\u7bc4\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime\n\ntry:\n    with open(r'D:\\tmp\\Explain_utf8_2.txt', 'r', encoding='UTF-8') as file2:\n        for line in file2.readlines():\n            print(line)\nexcept: \n    print('error')\nfinally:\n    print(\"Finished: \", datetime.now().strftime(\"%H:%M:%S\")) \n")),(0,a.kt)("h1",{id:"text-file-writing-\u5b8c\u6574\u7bc4\u4f8b"},"Text File Writing \u5b8c\u6574\u7bc4\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from datetime import datetime\n\ntry:\n    with open(r'D:\\tmp\\ABCs.txt', 'w', encoding='UTF-8') as file2:\n        # file2.writelines(['a','b','c','d'])\n        for line in ['a','b','c','d']:\n            file2.write(line + \"\\n\")\nexcept: \n    print('error')\nfinally:\n    print(\"Finished: \", datetime.now().strftime(\"%H:%M:%S\")) \n")))}u.isMDXComponent=!0}}]);