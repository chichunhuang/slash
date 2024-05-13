"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[5844],{58561:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=a(87462),m=(a(67294),a(3905));a(13848);const n={title:"Python \u65e5\u671f\u8207\u6642\u9593",description:"Python Date and Time",keywords:["Python","Date","Time"]},r="Python \u65e5\u671f\u8207\u6642\u9593",l={unversionedId:"DevTech/Python/Misc/Python_3_Time",id:"DevTech/Python/Misc/Python_3_Time",title:"Python \u65e5\u671f\u8207\u6642\u9593",description:"Python Date and Time",source:"@site/docs/DevTech/Python/Misc/Python_3_Time.md",sourceDirName:"DevTech/Python/Misc",slug:"/DevTech/Python/Misc/Python_3_Time",permalink:"/en/docs/DevTech/Python/Misc/Python_3_Time",draft:!1,tags:[],version:"current",frontMatter:{title:"Python \u65e5\u671f\u8207\u6642\u9593",description:"Python Date and Time",keywords:["Python","Date","Time"]},sidebar:"totem_sidebar",previous:{title:"PyCharm \u4e2d\u81ea\u8a02 Snippet Templates",permalink:"/en/docs/DevTech/Python/IDE/PyCharm_Snippet_Template"},next:{title:"Python-Sorting by pandas",permalink:"/en/docs/DevTech/Python/Misc/Sorting_by_pandas_Python"}},d={},s=[{value:"Mindmap of time module",id:"mindmap-of-time-module",level:2},{value:"Menu Links",id:"menu-links",level:2},{value:'<strong>time package \u53d6\u5fae\u79d2</strong> <span id="microsecond1">\xa0</span>',id:"time-package-\u53d6\u5fae\u79d2-",level:2},{value:'<strong>datetime package \u53d6\u5fae\u79d2</strong> <span id="microsecond2">\xa0</span>',id:"datetime-package-\u53d6\u5fae\u79d2-",level:2},{value:'<strong>* Structure Time</strong> <span id="struct_time">\xa0</span>',id:"-structure-time-",level:2},{value:'<strong>Float to Date, Date to String</strong> : by datetime module <span id="Float_to_Date_datetime">\xa0</span>',id:"float-to-date-date-to-string--by-datetime-module-",level:2},{value:'<strong>Millisecond, Microsecond</strong>  <span id="Millisecond">\xa0</span>',id:"millisecond-microsecond--",level:2},{value:'<strong>String to Date</strong>  <span id="String_to_Date">\xa0</span>',id:"string-to-date--",level:2},{value:'<strong>Python Time Zone</strong>  <span id="Time_Zone">\xa0</span>',id:"python-time-zone--",level:2},{value:"time module",id:"time-module",level:2}],p={toc:s},o="wrapper";function c(t){let{components:e,...n}=t;return(0,m.kt)(o,(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"python-\u65e5\u671f\u8207\u6642\u9593"},"Python \u65e5\u671f\u8207\u6642\u9593"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"\u4e0b\u9762\u5217\u51fa Python \u4e2d\u6642\u9593\u8655\u7406\u7bc4\u4f8b",(0,m.kt)("br",{parentName:"p"}),"\n","\u9700\u6ce8\u610f\u7684\u662f\uff0cPython \u9019\u908a\u5373\u4f7f\u662f\u4e0d\u540c\u5957\u4ef6\u4e0b",(0,m.kt)("br",{parentName:"p"}),"\n","timestamp ",(0,m.kt)("strong",{parentName:"p"},"\u7cbe\u78ba\u503c")," \u5927\u591a\u90fd\u662f\u5230 ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("span",{style:{color:"#0044FF"}},"\u5fae\u79d2"))," \uff0c",(0,m.kt)("br",{parentName:"p"}),"\n","\u4e14\u56de\u50b3\u7684\u662f ",(0,m.kt)("strong",{parentName:"p"},"\u79d2\u70ba\u6574\u6578\u55ae\u4f4d"),"\uff0c\u5c0f\u6578\u9ede\u5f8c\u518d\u63a56~7\u4f4d\u6578",(0,m.kt)("br",{parentName:"p"}),"\n","\u4e3b\u8981\u4f7f\u7528\u7684\u5957\u4ef6\u662f ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("span",{style:{color:"#0044FF"}},"time"))," ,   ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("span",{style:{color:"#0044FF"}},"datetime"))," , ",(0,m.kt)("strong",{parentName:"p"},(0,m.kt)("span",{style:{color:"#0044FF"}},"calendar"))," "),(0,m.kt)("p",{parentName:"blockquote"},"\u7576\u4f7f\u7528 time module \u6642\u9700\u6ce8\u610f struct_time \u9019\u500b meta class\uff0c\u662f\u4e0d\u540c\u53ef\u8868\u73fe\u6642\u9593\u7684\u4e0d\u540c types \u7684\u8f49\u63db\u5a92\u4ecb",(0,m.kt)("br",{parentName:"p"}),"\n","\u7576\u4f7f\u7528 datetime module \u6642\u9700\u6ce8\u610f <class 'datetime.datetime'> \u9019\u500b class\uff0c\u662f\u4e0d\u540c\u53ef\u8868\u73fe\u6642\u9593\u7684\u4e0d\u540c types \u7684\u8f49\u63db\u5a92\u4ecb  ")),(0,m.kt)("p",null,"References : "),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"http://docs.python.org/library/datetime.html#module-datetime"},"datetime"),": \u6642\u9593\u5340\u9593\u8a08\u7b97"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://www.runoob.com/python/python-date-time.html"},"calendar"),": \u65e5\u671f\u65e5\u66c6\u76f8\u95dc"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"http://www.twinsun.com/tz/tz-link.htm"},"pytz"),": Time Zone"),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"http://labix.org/python-dateutil"},"dateutil"),", ",(0,m.kt)("a",{parentName:"li",href:"https://dateutil.readthedocs.io/en/stable/"},"https://dateutil.readthedocs.io/en/stable/"))),(0,m.kt)("h2",{id:"mindmap-of-time-module"},"Mindmap of time module"),(0,m.kt)("p",null,(0,m.kt)("img",{alt:"insect-totem-net_python_time_module.svg",src:a(40260).Z,title:"Python time module",width:"800",height:"320"})),(0,m.kt)("h2",{id:"menu-links"},"Menu Links"),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"\u4e3b\u984c"),(0,m.kt)("th",{parentName:"tr",align:null}),(0,m.kt)("th",{parentName:"tr",align:null},"\u5957\u4ef6"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#microsecond1"},"time \u53d6\u5fae\u79d2")),(0,m.kt)("td",{parentName:"tr",align:null},"UTC time/0\u6642\u5340"),(0,m.kt)("td",{parentName:"tr",align:null},"time")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#microsecond2"},"datetime \u53d6\u5fae\u79d2")),(0,m.kt)("td",{parentName:"tr",align:null},"UTC"),(0,m.kt)("td",{parentName:"tr",align:null},"datetime")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#Millisecond"},"millisecond")),(0,m.kt)("td",{parentName:"tr",align:null},"\u53d6\u6beb\u79d2, \u5fae\u79d2"),(0,m.kt)("td",{parentName:"tr",align:null},"time")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#struct_time"},"struct_time")),(0,m.kt)("td",{parentName:"tr",align:null},"\u62c6\u89e3\u5f8c\u7684\u6bcf\u500b\u6642\u9593\u55ae\u4f4d"),(0,m.kt)("td",{parentName:"tr",align:null},"calendar, time")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#String_to_Date"},"String to Date")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null})),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#Float_to_Date_datetime"},"Float to Date")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"datetime")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#Float_to_Date_datetime"},"Date Formatting")," : Date to String"),(0,m.kt)("td",{parentName:"tr",align:null},"from datetime to String"),(0,m.kt)("td",{parentName:"tr",align:null},"datetime")),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("a",{parentName:"td",href:"#Time_Zone"},"Python Time Zone")),(0,m.kt)("td",{parentName:"tr",align:null}),(0,m.kt)("td",{parentName:"tr",align:null},"datetime, pytz")))),(0,m.kt)("h2",{id:"time-package-\u53d6\u5fae\u79d2-"},(0,m.kt)("strong",{parentName:"h2"},"time package \u53d6\u5fae\u79d2")," ",(0,m.kt)("span",{id:"microsecond1"},"\xa0")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Coordinated Universal Time: UTC time, \u4e16\u754c\u5354\u8abf\u6642\u9593")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"import time\ncurrent_timestamp = time.time() # microsecond, <class 'float'>\nprint(\"Timestamp:\", current_timestamp)\n\n# Timestamp: 1715152590.437168\n")),(0,m.kt)("h2",{id:"datetime-package-\u53d6\u5fae\u79d2-"},(0,m.kt)("strong",{parentName:"h2"},"datetime package \u53d6\u5fae\u79d2")," ",(0,m.kt)("span",{id:"microsecond2"},"\xa0")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"datetime.datetime.now()"),(0,m.kt)("li",{parentName:"ul"},"datetime.datetime.now(timezone)"),(0,m.kt)("li",{parentName:"ul"},"datetime.datetime.utcnow()")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"import datetime\ncurrent_datetime = datetime.datetime.now() # <class 'datetime.datetime'>\nprint(current_datetime)\ntimestamp = current_datetime.timestamp() # microsecond, <class 'float'>\nprint(\"Timestamp:\", timestamp)\n\n# 2024-05-08 16:04:50.940161\n# Timestamp: 1715155490.940161\n")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\nutc_datetime = datetime.datetime.utcnow()\nutc_timestamp = utc_datetime.timestamp()\nprint("UTC Timestamp:", utc_timestamp)\n')),(0,m.kt)("h2",{id:"-structure-time-"},(0,m.kt)("strong",{parentName:"h2"},"*"," Structure Time")," ",(0,m.kt)("span",{id:"struct_time"},"\xa0")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"GMT Greenwich Mean Time: \u683c\u6797\u5a01\u6cbb\u6a19\u6e96\u6642\u9593 ",(0,m.kt)("span",{style:{color:"#0044FF"}}," ",(0,m.kt)("strong",{parentName:"li"},"time.gmtime()")," ")),(0,m.kt)("li",{parentName:"ul"},"Loacal Time: ",(0,m.kt)("span",{style:{color:"#0044FF"}}," ",(0,m.kt)("strong",{parentName:"li"},"time.localtime()")," ")),(0,m.kt)("li",{parentName:"ul"},"struct_time \u985e\u5225\u5c07\u6642\u9593\u62c6\u89e3\u70ba:",(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},"tm_isdst: \u590f\u4ee4\u6642\u9593\u8abf\u6574"),(0,m.kt)("li",{parentName:"ul"},"tm_year, tm_mon, tm_mday, "),(0,m.kt)("li",{parentName:"ul"},"tm_hour, tm_min, tm_sec,"),(0,m.kt)("li",{parentName:"ul"},"tm_wday, tm_yday")))),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"import time\nimport calendar\ntime_tuple = time.gmtime() # <class 'time.struct_time'>\nprint(\"Time Structure:\", time_tuple)\ntimestamp = calendar.timegm(time_tuple) # <class 'int'>\nprint(\"Timestamp:\", timestamp)\n\n# Time Structure: time.struct_time(tm_year=2024, tm_mon=5, tm_mday=8, tm_hour=7, tm_min=54, tm_sec=13, tm_wday=2, tm_yday=129, tm_isdst=0)\n# Timestamp: 1715154853\n")),(0,m.kt)("h2",{id:"float-to-date-date-to-string--by-datetime-module-"},(0,m.kt)("strong",{parentName:"h2"},"Float to Date, Date to String")," : by datetime module ",(0,m.kt)("span",{id:"Float_to_Date_datetime"},"\xa0")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"import datetime\ntimestamp = 1715155490.940161  # Example timestamp\ndatetime_object = datetime.datetime.fromtimestamp(timestamp)\n\nprint(type(datetime.datetime)) # <class 'type'>\nprint(type(datetime_object)) # <class 'datetime.datetime'>\nprint(\"Datetime:\", datetime_object)\n\nformatted_string = datetime_object.strftime(\"%Y-%m-%d %H:%M:%S\")\nprint(type(formatted_string)) # <class 'str'>\nprint(\"Formatted Datetime:\", formatted_string)\n")),(0,m.kt)("h2",{id:"millisecond-microsecond--"},(0,m.kt)("strong",{parentName:"h2"},"Millisecond, Microsecond"),"  ",(0,m.kt)("span",{id:"Millisecond"},"\xa0")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},'import time\ncurrent_timestamp = time.time() # <class \'float\'>, \u79d2\u70ba\u55ae\u4f4d, \u7cbe\u78ba\u81f3(\u5c0f\u6578\u4e0b7\u4f4d\u6578)?\ncurrent_timestamp_milli = int(time.time() * 1000) # \u8f49\u6beb\u79d2, \u53bb\u5c0f\u6578\u9ede\u5f8c\u5c3e\u6578\ncurrent_timestamp_sec = int(time.time()) # \u53d6\u79d2, \u76f4\u63a5\u53bb\u5c0f\u6578\u9ede\u5f8c\u5c3e\u6578\n\nprint("Timestamp in microseconds:", current_timestamp)\nprint("Timestamp in milliseconds:", current_timestamp_milli)\nprint("Timestamp in Seconds:", current_timestamp_sec)\n')),(0,m.kt)("h2",{id:"string-to-date--"},(0,m.kt)("strong",{parentName:"h2"},"String to Date"),"  ",(0,m.kt)("span",{id:"String_to_Date"},"\xa0")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"String to time_struct"),(0,m.kt)("li",{parentName:"ul"},"time_struct to float"),(0,m.kt)("li",{parentName:"ul"},"float to time_struct"),(0,m.kt)("li",{parentName:"ul"},"time_struct formatting")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"\ndate_string = '2024-05-08 10:11:12'\nstruct_time = time.strptime(date_string, \"%Y-%m-%d %H:%M:%S\") # <class 'time.struct_time'>\nprint(type(struct_time))  #<class 'time.struct_time'>\n\nfloat_time = time.mktime(struct_time)\nprint(type(float_time)) #<class 'float'>\n\nsecond_time = int(float_time) # truncate to sec\nprint(second_time) # 1715134272\n\n\nstruct_time_from_sec = time.localtime(second_time) # sceond to  struct_time\nstruct_time_from_sec_gm = time.gmtime(second_time) # \u683c\u6797\u5a01\u6cbb\u6642\u9593 (time.localtime -8hr)\nprint(type(struct_time_from_sec))  #<class 'time.struct_time'>\n\n\ndate2 = time.strftime( \"%Y-%m-%d %H:%M:%S\", struct_time_from_sec) # struct_time to String\nprint(date2) # 2024-05-08 10:11:12\n\n")),(0,m.kt)("h2",{id:"python-time-zone--"},(0,m.kt)("strong",{parentName:"h2"},"Python Time Zone"),"  ",(0,m.kt)("span",{id:"Time_Zone"},"\xa0")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"import datetime\nimport pytz\n# Define the timezone\ndesired_timezone = pytz.timezone('America/New_York')\n# Create a datetime object with the desired timezone\ndatetime_with_timezone = datetime.datetime.now(desired_timezone)\n# Convert the datetime object to a timestamp\ntimestamp = datetime_with_timezone.timestamp()\nprint(\"Timestamp with Different Timezone:\", timestamp)\n")),(0,m.kt)("h2",{id:"time-module"},"time module"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"default UTC time",(0,m.kt)("br",{parentName:"p"}),"\n","time_string = time.asctime(struct_time) : \u5c07 struct_time \u8f49\u6210 asc format : ex, Sun May 27 01:05:27 2018",(0,m.kt)("br",{parentName:"p"}),"\n","asc_time_string = time.ctime(float) : \u628a\u6d6e\u9ede\u6578\u8f49\u6210 asc time",(0,m.kt)("br",{parentName:"p"}),"\n","struct_time = time.gmtime(num)",(0,m.kt)("br",{parentName:"p"}),"\n","struct_time = time.localtime(num)  (UTC+8)",(0,m.kt)("br",{parentName:"p"}),"\n","float=  time.mktime( struct_time )",(0,m.kt)("br",{parentName:"p"}),"\n",'formatted_string = datetime_object.strftime("%Y-%m-%d %H:%M:%S") # by instance',(0,m.kt)("br",{parentName:"p"}),"\n","formatted_string = time.strftime(format, struct_time)",(0,m.kt)("br",{parentName:"p"}),"\n","struct_time= time.strptime(formatted_string, format)",(0,m.kt)("br",{parentName:"p"}),"\n","float = time.time() # UTC time",(0,m.kt)("br",{parentName:"p"}),"\n","time.tzset() # \u4f9d\u64da\u74b0\u5883\u8b8a\u6578\u8a2d\u5b9a\u503c\uff0creset \u7a0b\u5f0f\u6642\u9593")))}c.isMDXComponent=!0},40260:(t,e,a)=>{a.d(e,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGlkPSJMYXllcl8xIj4KICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+CiAgPHRleHQgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9Ik5vdG8gU2FucyBKUCIgZm9udC1zaXplPSIyNCIgaWQ9InN2Z18xIiB5PSIxOTQuNSIgeD0iMzM0IiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0iIzAwMCIgZmlsbD0iIzAwMDAwMCI+U3RydWN0X1RpbWU8L3RleHQ+CiAgPHRleHQgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9Ik5vdG8gU2FucyBKUCIgZm9udC1zaXplPSIyNCIgaWQ9InN2Z18yIiB5PSI5NS41IiB4PSIzNTUuNzczNDQiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjMDAwMDAwIj5OdW1iZXI8L3RleHQ+CiAgPHRleHQgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9Ik5vdG8gU2FucyBKUCIgZm9udC1zaXplPSIyNCIgaWQ9InN2Z18zIiB5PSIzMDIuNSIgeD0iMzY2LjYwMTU2IiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0iIzAwMCIgZmlsbD0iIzAwMDAwMCI+U3RyaW5nPC90ZXh0PgogIDx0ZXh0IGZvbnQtc3R5bGU9Iml0YWxpYyIgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9Ik5vdG8gU2FucyBKUCIgZm9udC1zaXplPSIzMCIgaWQ9InN2Z180IiB5PSI0MC41IiB4PSIzNiIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiMwMDAwMDAiPnRpbWUgbW9kdWxlPC90ZXh0PgogIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9Ik5vdG8gU2FucyBKUCIgZm9udC1zaXplPSIyNCIgaWQ9InN2Z182IiB5PSIxMjIuNSIgeD0iNTE2IiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0iIzAwMCIgZmlsbD0iIzAwMDAwMCI+dGltZS5sb2NhbHRpbWUobik8L3RleHQ+CiAgPHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iTm90byBTYW5zIEpQIiBmb250LXNpemU9IjI0IiBpZD0ic3ZnXzciIHk9IjE0Ni41IiB4PSI1MTYiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlPSIjMDAwIiBmaWxsPSIjMDAwMDAwIj50aW1lLmdtdGltZShuKTwvdGV4dD4KICA8cGF0aCBzdHJva2U9IiMwMDAwZmYiIGlkPSJzdmdfMTEiIGQ9Im01MDYuNjY0OTksMTQ1LjU2MTY1YzAsLTE0LjExOTgxIC0xNy45MDg2MSwtMjUuNTY2MiAtNDAsLTI1LjU2NjJsMCwtMjAuNDUyOTZsMCwwYzIyLjA5MTM5LDAgNDAsMTEuNDQ2MzggNDAsMjUuNTY2MmwwLDIwLjQ1Mjk2YzAsMTEuNjU4MTUgLTEyLjMzOTI2LDIxLjgzOTgzIC0zMCwyNC43NTQzN2wwLDEwLjIyNjQ4bC0xMCwtMTkuNjQxMTNsMTAsLTIxLjI2NDc5bDAsMTAuMjI2NDhsMCwwYzExLjkwODc3LC0xLjk2NTI5IDIxLjc0MDg4LC03LjMyMzAxIDI2LjY2MDYxLC0xNC41Mjc4OSIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIHN0cm9rZT0iIzAwMDBmZiIgaWQ9InN2Z18xMiIgZD0ibTUwNi42NjUwMiwyNTUuNTYxNjVjMCwtMTQuMTE5ODEgLTE3LjkwODYxLC0yNS41NjYyIC00MCwtMjUuNTY2MmwwLC0yMC40NTI5NmwwLDBjMjIuMDkxMzksMCA0MCwxMS40NDYzOCA0MCwyNS41NjYybDAsMjAuNDUyOTZjMCwxMS42NTgxNSAtMTIuMzM5MjYsMjEuODM5ODQgLTMwLDI0Ljc1NDM3bDAsMTAuMjI2NDlsLTEwLC0xOS42NDExM2wxMCwtMjEuMjY0OGwwLDEwLjIyNjQ5bDAsMGMxMS45MDg3NywtMS45NjUyOSAyMS43NDA4OCwtNy4zMjMwMSAyNi42NjA2MSwtMTQuNTI3ODkiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBzdHJva2U9IiMwMDAwZmYiIGlkPSJzdmdfMTMiIGQ9Im0yODQuNjY0OTMsMTM0LjY4MjY3YzAsMTQuOTkxNCAxOS4yNTE3NiwyNy4xNDQzNSA0MywyNy4xNDQzNWwwLDIxLjcxNTQ4bDAsMGMtMjMuNzQ4MjQsMCAtNDMsLTEyLjE1Mjk0IC00MywtMjcuMTQ0MzVsMCwtMjEuNzE1NDhjMCwtMTIuMzc3NzggMTMuMjY0NywtMjMuMTg3OTcgMzIuMjUsLTI2LjI4MjQxbDAsLTEwLjg1Nzc1bDEwLjc1LDIwLjg1MzU0bC0xMC43NSwyMi41Nzc0M2wwLC0xMC44NTc3NWwwLDBjLTEyLjgwMTkzLDIuMDg2NiAtMjMuMzcxNDUsNy43NzUwNCAtMjguNjYwMTYsMTUuNDI0NjciIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBzdHJva2U9IiMwMDAwZmYiIGlkPSJzdmdfMTQiIGQ9Im0yODUuNjY0OTYsMjQwLjY4MjY3YzAsMTQuOTkxNCAxOC44MDQwNCwyNy4xNDQzNSA0MiwyNy4xNDQzNWwwLDIxLjcxNTQ4bDAsMGMtMjMuMTk1OTYsMCAtNDIsLTEyLjE1Mjk0IC00MiwtMjcuMTQ0MzVsMCwtMjEuNzE1NDhjMCwtMTIuMzc3NzggMTIuOTU2MjIsLTIzLjE4Nzk2IDMxLjUsLTI2LjI4MjRsMCwtMTAuODU3NzVsMTAuNSwyMC44NTM1M2wtMTAuNSwyMi41Nzc0NGwwLC0xMC44NTc3NWwwLDBjLTEyLjUwNDIsMi4wODY2IC0yMi44Mjc5Miw3Ljc3NTA0IC0yNy45OTM2MywxNS40MjQ2NiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIHRyYW5zZm9ybT0icm90YXRlKC0xMjUuNjc5IDQyMC4wNiA1My4zNzU4KSIgc3Ryb2tlPSIjMDAwMGZmIiBpZD0ic3ZnXzE1IiBkPSJtNDE3LjgzNTU4LDM5LjUwNTA5bDAsLTMuOTg0NjJsLTEyLjA5MjcyLDEyLjM0MTdsMTIuMDkyNzIsMTIuMzQxODFsMCwtNC4yNzU1NmMzLjI4MTQzLC0wLjAwMjcxIDkuMDQyMiwwLjQ5Mjk5IDkuMDQyMiw0LjAwNjE2YzAsNC45MDg3MiAtNi4wMTY0NSw3LjUyNzM4IC02LjAxNjQ1LDcuNTI3MzhsMCwzLjc2MzY1YzAsMCAxMy41MTUxOSwwLjgxNjI5IDEzLjUxNTE5LC0xNy4zNDQ3NWMwLC0xNC4yNjgwNCAtMTEuNTc1MjUsLTE0LjgwNDIgLTE2LjU0MDk0LC0xNC4zNzU3OHoiIGZpbGw9Im5vbmUiLz4KICA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtZmFtaWx5PSJOb3RvIFNhbnMgSlAiIGZvbnQtc2l6ZT0iMjQiIHN0cm9rZS13aWR0aD0iMCIgaWQ9InN2Z18xNiIgeT0iMzQuNSIgeD0iNDQzIiBzdHJva2U9IiMwMDAwZmYiIGZpbGw9IiMwMDAwMDAiPnRpbWUudGltZSgpPC90ZXh0PgogIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9Ik5vdG8gU2FucyBKUCIgZm9udC1zaXplPSIyNCIgaWQ9InN2Z18xNyIgeT0iMjQ4LjUiIHg9IjUxNiIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiNmZjAwMDAiIGZpbGw9IiMwMDAwMDAiPnRpbWUuc3RyZnRpbWUoZm9ybWF0LCBzdHJ1Y3QpPC90ZXh0PgogIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9Ik5vdG8gU2FucyBKUCIgZm9udC1zaXplPSIyNCIgaWQ9InN2Z18xOCIgeT0iMjU0LjUiIHg9IjEyIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZT0iI2ZmMDAwMCIgZmlsbD0iIzAwMDAwMCI+dGltZS5zdHJwdGltZShkYXRlLCBmb3JtYXQpPC90ZXh0PgogIDx0ZXh0IHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCIgZm9udC1mYW1pbHk9Ik5vdG8gU2FucyBKUCIgZm9udC1zaXplPSIyNCIgc3Ryb2tlLXdpZHRoPSIwIiBpZD0ic3ZnXzE5IiB5PSIxNDIuNSIgeD0iMjUuMjk2ODgiIHN0cm9rZT0iIzAwMDBmZiIgZmlsbD0iIzAwMDAwMCI+dGltZS5ta3RpbWUoc3RydWN0X3RpbWUpPC90ZXh0PgogPC9nPgo8L3N2Zz4="}}]);