---
title: Gson fromJson 拋出 ClassCastException
description: Gson.fromJson throws java.lang.ClassCastException
keywords: [Gson, TypeToken, JsonParseException]
---

## Gson API Reference
* 使用環境 : jdk1.8.0_11 & gson-2.2.4
* [ Gson API Documentation ](https://google-gson.googlecode.com/svn/trunk/gson/docs/javadocs/com/google/gson/Gson.html)


## JsonParseException
* gson.fromJson(jsonString, Map.class) 方法時拋出 JsonParseException 訊息

<code>
Caused by: com.google.gson.JsonParseException: The JsonDeserializer MapTypeAdapter failed to deserialize json object {} given the type interface java.util.Map
</code>


## Gson Api Documentation

* 根據[文件](https://google-gson.googlecode.com/svn/trunk/gson/docs/javadocs/com/google/gson/Gson.html)說明
	 
<code>	  
If the object that your are serializing/deserializing is a ParameterizedType (i.e. contains at least one type parameter and may be an array) then you must use the toJson(Object, Type) or fromJson(String, Type) method.
</code>	  

* 因此在使用 gson.fromJson() 時第二個參數要帶入 TypeToken，也就是要告知 Gson 如何將 String 轉型。以下是範例 :

```Javascript
	import com.google.gson.Gson;
	import com.google.gson.GsonBuilder;
	import com.google.gson.reflect.TypeToken;
			 
	public class MyDomainEntity<T>{
		int age;
		String name;
		T vehicle;
	}
		 
	 Type type = new TypeToken< MyDomainEntity<Car>>(){}.getType();
	 MyDomainEntity map = gson.fromJson(jsonString, type);
```				
					
* 下面是 Pastgresql Jsonb 取出後直接將欄位值轉 String 的範例：

```Javascript
	import com.google.gson.Gson;
    import com.google.gson.GsonBuilder;		 
			 
    private Map<String, String> jsonbToMap(String jsonb) {
        Map<String, String> varMap = new LinkedHashMap<>();
        if (jsonb != null) {
            Gson gson2 = new GsonBuilder().serializeNulls().create();
            @SuppressWarnings("unchecked")
            Map<String, String> fromJson = (Map<String, String>) gson2
                    .fromJson(jsonb, Map.class);
            varMap.putAll(fromJson);
        }
        return varMap;
    }
```
					