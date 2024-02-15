"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[8537],{3905:(n,t,e)=>{e.d(t,{Zo:()=>c,kt:()=>m});var r=e(67294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function p(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var d=r.createContext({}),s=function(n){var t=r.useContext(d),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},c=function(n){var t=s(n.components);return r.createElement(d.Provider,{value:t},n.children)},u="mdxType",l={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,a=n.originalType,d=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),u=s(e),f=o,m=u["".concat(d,".").concat(f)]||u[f]||l[f]||a;return e?r.createElement(m,i(i({ref:t},c),{},{components:e})):r.createElement(m,i({ref:t},c))}));function m(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var a=e.length,i=new Array(a);i[0]=f;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=n,p[u]="string"==typeof n?n:o,i[1]=p;for(var s=2;s<a;s++)i[s]=e[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}f.displayName="MDXCreateElement"},86398:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=e(87462),o=(e(67294),e(3905));const a={title:"Python-Sorting by pandas",description:"Python - Sorting and Parsing CSV",keywords:["python","pandas","sort","parse","dateformat"]},i=void 0,p={unversionedId:"DevTech/Python/Sorting_by_pandas_Python",id:"DevTech/Python/Sorting_by_pandas_Python",title:"Python-Sorting by pandas",description:"Python - Sorting and Parsing CSV",source:"@site/docs/DevTech/Python/Sorting_by_pandas_Python.md",sourceDirName:"DevTech/Python",slug:"/DevTech/Python/Sorting_by_pandas_Python",permalink:"/docs/DevTech/Python/Sorting_by_pandas_Python",draft:!1,tags:[],version:"current",frontMatter:{title:"Python-Sorting by pandas",description:"Python - Sorting and Parsing CSV",keywords:["python","pandas","sort","parse","dateformat"]},sidebar:"tutorialSidebar",previous:{title:"Send Mail by Python smtplib",permalink:"/docs/DevTech/Python/Send_Eail_By_Python"},next:{title:"\u96b1\u85cf Tomcat \u7248\u672c\u8cc7\u8a0a",permalink:"/docs/DevTech/Tomcat/Hide_Tomcat_Version"}},d={},s=[],c={toc:s},u="wrapper";function l(n){let{components:t,...e}=n;return(0,o.kt)(u,(0,r.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nimport json\nimport pandas as pd\nimport datetime\nimport time\nimport numpy as np\n\nimport datetime\nimport time\nimport calendar\n\ndef dateFormatID_BIRTH(row):\n    dateString = row['ID_BIRTH']\n    return dateFormat(dateString)\n\ndef dateFormat_XXXX(row):\n    dateString = row['XXXX']\n    return dateFormat(dateString)\n\ndef dateFormatWithColumn(row, column):\n    dateString = row[column]\n    return dateFormat(dateString)\n    \ndef dateFormat(dateString): \n    if '' == dateString or None == dateString:\n        return ''\n    else:\n        d = datetime.datetime.strptime(dateString, \"%Y/%m/%d\")\n        r = d.strftime(\"%Y/%m/%d\")\n        return r\n\ndef print2(msg):\n    print(datetime.datetime.now(), end=' =>  ')\n    print(msg)\n\ndef print3(msg):\n    print(datetime.datetime.now())\n    print(msg)\n    print('')\n    \ndef printType(obj):\n    print(type(obj)) \n    \n    \n    \n    \n# filea : \u96e2\u7dda\u8cc7\u6599 A\nfileA = r'C:\\Users\\user\\Anaconda-Python-Jupyter\\Python_diff\\filea.csv'\n\n# fileb : \u532f\u51fa\u8cc7\u6599 B\nfileB = r'C:\\Users\\user\\Anaconda-Python-Jupyter\\Python_diff\\fileb.csv'\n\noutA ='outA.csv'\noutB ='outB.csv'\n\n\nCOLUM_NAME_ID_BIRTH ='ID_BIRTH'\nROW_COUNT = 0\nerrors =[]\nequal_record =[]\n\n\nprint2('read_csv file A \u96e2\u7dda\u8cc7\u6599')\ndf_a = pd.read_csv(fileA, index_col=False, dtype=str)\ndf_a = df_a.replace({pd.np.nan: ''})\n\n# Sort by given column's value\ndf_as = df_a.sort_values(by =[COLUM_NAME_ID_BIRTH]).copy()\n# df_as = df_as.fillna('', inplace = True)\n\nprint2('read_csv file B \u532f\u51fa\u8cc7\u6599')\ndf_b = pd.read_csv(fileB, index_col=False, dtype=str)\ndf_b = df_b.replace({pd.np.nan: ''})\ndf_bs = df_b.sort_values(by =[COLUM_NAME_ID_BIRTH]).copy()\n# df_bs =df_bs.fillna('', inplace = True)\nprint2('read_csv stop')\n\n\ncolumns_of_a = list(df_as.columns)\ncolumns_of_b = list(df_bs.columns)\n\ncolumns_of_a_and_b = list(set(columns_of_a).intersection(set(columns_of_b)))\n\n# print(columns_of_a_and_b)\ncolumns_of_a_and_b.sort()\n\n\nprint('columns intersection')\n# print(columns_of_a_and_b)\n\noutputA = pd.DataFrame({})\noutputB = pd.DataFrame({})\n# aa = df_as.copy()\n# bb = df_bs.copy()\n\n\nprint('re assign data')\nfor index in columns_of_a_and_b:\n#   print(index)\n    outputA[index] = df_as[index]\n    outputB[index] = df_bs[index]\n    \n\nprint('date formatting')\noutputA[\"ID_BIRTH\"] = outputA.apply(dateFormatID_BIRTH, axis=1)\noutputA[\"XXXX\"] = outputA.apply(dateFormat_XXXX, axis=1)\n\n\nprint('date formatting2')\noutputB[\"ID_BIRTH\"] = outputB.apply(dateFormatID_BIRTH, axis=1)\noutputB[\"XXXX\"] = outputB.apply(dateFormat_XXXX, axis=1)\n\nprint2('to file sorted_from.csv')\noutputA.to_csv(outA, index= False)\nprint2('to file sorted_output.csv')\noutputB.to_csv(outB, index= False)\nprint2('End')\n\n\n# removes = ['YYYY', 'ZZZZ']\n# q_df.drop(removes, axis=1, inplace=True)\n\n")))}l.isMDXComponent=!0}}]);