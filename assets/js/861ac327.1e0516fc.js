"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[9243],{43618:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var o=n(87462),i=(n(67294),n(3905));n(13848);const a={title:"Send Mail by Python smtplib",description:"Send Mail by Python smtplib",keywords:["smtplib","Python","mail"]},l=void 0,s={unversionedId:"DevTech/Python/Send_Eail_By_Python",id:"DevTech/Python/Send_Eail_By_Python",title:"Send Mail by Python smtplib",description:"Send Mail by Python smtplib",source:"@site/docs/DevTech/Python/Send_Eail_By_Python.md",sourceDirName:"DevTech/Python",slug:"/DevTech/Python/Send_Eail_By_Python",permalink:"/docs/DevTech/Python/Send_Eail_By_Python",draft:!1,tags:[],version:"current",frontMatter:{title:"Send Mail by Python smtplib",description:"Send Mail by Python smtplib",keywords:["smtplib","Python","mail"]},sidebar:"tutorialSidebar",previous:{title:"Python \u57fa\u790e\u578b\u5225\u6458\u8981",permalink:"/docs/DevTech/Python/Python_Typing_Types"},next:{title:"Python-Sorting by pandas",permalink:"/docs/DevTech/Python/Sorting_by_pandas_Python"}},m={},r=[],y={toc:r},d="wrapper";function h(t){let{components:e,...n}=t;return(0,i.kt)(d,(0,o.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python example: Send Mail")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import smtplib\nfrom email.mime.text import MIMEText\n\nmailFrom = 'doraemon+from@gmail.com'\nmailTo = 'doraemon+to@gmail.com'\n\nmsg = MIMEText(\"test\")\nmsg['Subject'] = 'Subject Test'\nmsg['From'] = mailFrom\nmsg['To'] = mailTo\n\ns = smtplib.SMTP('mail.server.edf.org')\ns.sendmail(mailFrom, [mailTo], msg.as_string())\ns.quit()\n")))}h.isMDXComponent=!0}}]);