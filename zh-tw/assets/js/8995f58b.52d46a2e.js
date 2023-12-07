"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[1338],{1734:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>g,toc:()=>c});var n=a(7462),s=(a(7294),a(3905));a(1424);const r={title:"Java SHA \u96dc\u6e4a",description:"\u4ee5 Java SHA \u9032\u884c\u8cc7\u6599\u96dc\u6e4a",keywords:["sha","java","cipher","encrypt","decrypt"],slug:"Java-SHA-digester",authors:["insect"],tags:["sha","cipher"]},i="Java SHA \u6f14\u7b97\u6cd5\u5be6\u4f5c\u7bc4\u4f8b",g={permalink:"/zh-tw/blog/Java-SHA-digester",source:"@site/blog/Java_Sha_Digest.md",title:"Java SHA \u96dc\u6e4a",description:"\u4ee5 Java SHA \u9032\u884c\u8cc7\u6599\u96dc\u6e4a",date:"2023-10-26T04:09:23.000Z",formattedDate:"2023\u5e7410\u670826\u65e5",tags:[{label:"sha",permalink:"/zh-tw/blog/tags/sha"},{label:"cipher",permalink:"/zh-tw/blog/tags/cipher"}],readingTime:1.26,hasTruncateMarker:!1,authors:[{name:"Insect Totem",url:"https://github.com/chichunhuang",imageURL:"https://chichunhuang.github.io/slash/img/70_70.jpg",key:"insect"}],frontMatter:{title:"Java SHA \u96dc\u6e4a",description:"\u4ee5 Java SHA \u9032\u884c\u8cc7\u6599\u96dc\u6e4a",keywords:["sha","java","cipher","encrypt","decrypt"],slug:"Java-SHA-digester",authors:["insect"],tags:["sha","cipher"]}},o={authorsImageUrls:[void 0]},c=[{value:"\u96dc\u6e4a\u6f14\u7b97 (Hash)",id:"\u96dc\u6e4a\u6f14\u7b97-hash",level:2}],l={toc:c},p="wrapper";function h(t){let{components:e,...a}=t;return(0,s.kt)(p,(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"SHA \u4e26\u4e0d\u7b97\u662f\u7570\u7a2e\u52a0\u89e3\u5bc6\u6280\u8853\uff0c\u50c5\u80fd\u7a31\u70ba\u662f\u4e00\u7a2e\u96dc\u6e4a\u8a08\u7b97\u3002\n\u5c07\u6307\u5b9a\u8cc7\u6599\u8f49\u70ba\u4e0d\u53ef\u9006\u7684\u5bc6\u6587\uff0c\u8207 MD5 \u76f8\u4f3c\u3002")),(0,s.kt)("h2",{id:"\u96dc\u6e4a\u6f14\u7b97-hash"},"\u96dc\u6e4a\u6f14\u7b97 (Hash)"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u53c8\u7a31\u70ba ",(0,s.kt)("strong",{parentName:"p"},"\u6563\u5217\u7b97\u6cd5")," ,\u6216 ",(0,s.kt)("strong",{parentName:"p"},"\u54c8\u5e0c\u51fd\u6578")," \u3002\n\u96dc\u6e4a\u6f14\u7b97\u4e5f\u80fd\u5c07\u8cc7\u6599\u8f49\u70ba\u5bc6\u6587\uff0c\u4f46\u662f\u7121\u6cd5\u5c07\u5bc6\u6587\u8f49\u56de\u660e\u6587\u3002\n\u6240\u4ee5\uff0c\u96dc\u6e4a\u6f14\u7b97\u901a\u5e38\u53ea\u662f\u7528\u4f86\u9a57\u8b49\u8cc7\u6599\u50b3\u905e\u904e\u7a0b\u662f\u5426\u907a\u6f0f\u5c01\u5305\u3002\u4e5f\u5c31\u662f\u9a57\u8b49\u8cc7\u6599\u5b8c\u6574\u6027(Integrity)\u6642\u4f7f\u7528\u3002"),(0,s.kt)("p",{parentName:"blockquote"},"ex: MD5\u3001SHA1\u3001HMAC")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"ShaDigester.java")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import java.security.MessageDigest;\nimport java.security.NoSuchAlgorithmException;\n\n\n// SHA: \u96dc\u6e4a\u6f14\u7b97, \u55ae\u5411\u5c07\u8cc7\u6599\u8f49\u5bc6\u6587\u3002\u9a57\u8b49\u8cc7\u6599\u5b8c\u6574\u6027(Integrity)\u6642\u4f7f\u7528\u3002 \npublic class ShaDigester {\n    \n    private static final String DIGEST_ALGORITHM_512 = "sha-512";\n\n    private static final String DIGEST_ALGORITHM_256 = "sha-256";\n    \n    \n    public static String sha512Digest(String message, String salt)\n            throws NoSuchAlgorithmException {\n        MessageDigest md = MessageDigest.getInstance(DIGEST_ALGORITHM_512);\n        md.update(String.format("%s%s", message, salt).getBytes());\n\n        StringBuffer ret = new StringBuffer();\n        for (byte b : md.digest()) {\n            ret.append(String.format("%02x", b));\n        }\n\n        return ret.toString();\n    }\n    \n    public static String sha256Digest(String message, String salt)\n            throws NoSuchAlgorithmException {\n        MessageDigest md = MessageDigest.getInstance(DIGEST_ALGORITHM_256);\n        md.update(String.format("%s%s", message, salt).getBytes());\n        \n        StringBuffer ret = new StringBuffer();\n        for (byte b : md.digest()) {\n            ret.append(String.format("%02x", b));\n        }\n        \n        return ret.toString();\n    }\n}    \n')))}h.isMDXComponent=!0}}]);