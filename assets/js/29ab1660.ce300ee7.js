"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[833],{6501:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=o(7462),s=(o(7294),o(3905)),a=o(1424);const i={title:"Gson fromJson \u62cb\u51fa ClassCastException",description:"Gson.fromJson throws java.lang.ClassCastException",keywords:["Gson","TypeToken","JsonParseException"]},r=void 0,l={unversionedId:"DevTech/Java/GSON_ClassCastException",id:"DevTech/Java/GSON_ClassCastException",title:"Gson fromJson \u62cb\u51fa ClassCastException",description:"Gson.fromJson throws java.lang.ClassCastException",source:"@site/docs/DevTech/Java/GSON_ClassCastException.md",sourceDirName:"DevTech/Java",slug:"/DevTech/Java/GSON_ClassCastException",permalink:"/slash/docs/DevTech/Java/GSON_ClassCastException",draft:!1,tags:[],version:"current",frontMatter:{title:"Gson fromJson \u62cb\u51fa ClassCastException",description:"Gson.fromJson throws java.lang.ClassCastException",keywords:["Gson","TypeToken","JsonParseException"]},sidebar:"tutorialSidebar",previous:{title:"Log4j EmailAppender Configuration",permalink:"/slash/docs/DevTech/Java/ExceptionMailFromLog4j"},next:{title:"Java AES \u52a0\u89e3\u5bc6",permalink:"/slash/docs/DevTech/Java/Java_Aes_Cipher"}},p={},c=[{value:"Gson API Reference",id:"gson-api-reference",level:2},{value:"JsonParseException",id:"jsonparseexception",level:2},{value:"Gson Api Documentation",id:"gson-api-documentation",level:2}],g={toc:c},m="wrapper";function u(e){let{components:n,...o}=e;return(0,s.kt)(m,(0,t.Z)({},g,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"gson-api-reference"},"Gson API Reference"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u74b0\u5883 : jdk1.8.0_11 & gson-2.2.4"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://google-gson.googlecode.com/svn/trunk/gson/docs/javadocs/com/google/gson/Gson.html"}," Gson API Documentation "))),(0,s.kt)("h2",{id:"jsonparseexception"},"JsonParseException"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"gson.fromJson(jsonString, Map.class) \u65b9\u6cd5\u6642\u62cb\u51fa JsonParseException \u8a0a\u606f")),(0,s.kt)("code",null,"Caused by: com.google.gson.JsonParseException: The JsonDeserializer MapTypeAdapter failed to deserialize json object "," given the type interface java.util.Map"),(0,s.kt)("h2",{id:"gson-api-documentation"},"Gson Api Documentation"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6839\u64da",(0,s.kt)("a",{parentName:"li",href:"https://google-gson.googlecode.com/svn/trunk/gson/docs/javadocs/com/google/gson/Gson.html"},"\u6587\u4ef6"),"\u8aaa\u660e\n")),(0,s.kt)("code",null,"If the object that your are serializing/deserializing is a ParameterizedType (i.e. contains at least one type parameter and may be an array) then you must use the toJson(Object, Type) or fromJson(String, Type) method."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u56e0\u6b64\u5728\u4f7f\u7528 gson.fromJson() \u6642\u7b2c\u4e8c\u500b\u53c3\u6578\u8981\u5e36\u5165 TypeToken\uff0c\u4e5f\u5c31\u662f\u8981\u544a\u77e5 Gson \u5982\u4f55\u5c07 String \u8f49\u578b\u3002\u4ee5\u4e0b\u662f\u7bc4\u4f8b :"),(0,s.kt)(a.dn,{language:"Java",showLineNumbers:"true",text:"\nimport com.google.gson.Gson;\nimport com.google.gson.GsonBuilder;\nimport com.google.gson.reflect.TypeToken;\n\t\t \npublic class MyDomainEntity<T>{\n\tint age;\n\tString name;\n\tT vehicle;\n}\n\t \n Type type = new TypeToken< MyDomainEntity<Car>>(){}.getType();\n MyDomainEntity map = gson.fromJson(jsonString, type);\n\t\t ",mdxType:"CodeBlock"})),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u4e0b\u9762\u662f Pastgresql Jsonb \u53d6\u51fa\u5f8c\u76f4\u63a5\u5c07\u6b04\u4f4d\u503c\u8f49 String \u7684\u7bc4\u4f8b\uff1a"),(0,s.kt)(a.dn,{language:"Java",showLineNumbers:"true",text:'\t\nimport com.google.gson.Gson;\n  import com.google.gson.GsonBuilder;\t\t \n\t\t \n  private Map<String, String> jsonbToMap(String jsonb) {\n      Map<String, String> varMap = new LinkedHashMap<>();\n      if (jsonb != null) {\n          Gson gson2 = new GsonBuilder().serializeNulls().create();\n          @SuppressWarnings("unchecked")\n          Map<String, String> fromJson = (Map<String, String>) gson2\n                  .fromJson(jsonb, Map.class);\n          varMap.putAll(fromJson);\n      }\n      return varMap;\n  }\n         ',mdxType:"CodeBlock"}))))}u.isMDXComponent=!0}}]);