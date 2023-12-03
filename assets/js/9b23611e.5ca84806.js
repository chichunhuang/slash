"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[1685],{5940:r=>{r.exports=JSON.parse('{"blogPosts":[{"id":"List-Properties-in-Spring-App","metadata":{"permalink":"/slash/blog/List-Properties-in-Spring-App","source":"@site/blog/Spring_List_Proerties.md","title":"List Properties in Spring App","description":"\u5217\u51fa Spring \u5c08\u6848\u4e2d properties \u6a94\u4e2d\u7684\u53c3\u6578","date":"2023-11-28T03:52:41.000Z","formattedDate":"November 28, 2023","tags":[{"label":"property file","permalink":"/slash/blog/tags/property-file"},{"label":"spring","permalink":"/slash/blog/tags/spring"}],"readingTime":3.655,"hasTruncateMarker":false,"authors":[{"name":"Insect Totem","url":"https://github.com/chichunhuang","imageURL":"https://chichunhuang.github.io/slash/img/70_70.jpg","key":"insect"}],"frontMatter":{"title":"List Properties in Spring App","description":"\u5217\u51fa Spring \u5c08\u6848\u4e2d properties \u6a94\u4e2d\u7684\u53c3\u6578","keywords":["property file","spring"],"slug":"List-Properties-in-Spring-App","authors":["insect"],"tags":["property file","spring"]},"nextItem":{"title":"Java SHA \u96dc\u6e4a","permalink":"/slash/blog/Java-SHA-digester"}},"content":"import { CodeBlock, dracula  } from \\"react-code-blocks\\";\\r\\n\\r\\n> \u4e0d\u7ba1\u662f\u9075\u5faa ISO \u6216\u662f\u63a1\u7d0d DevOps \u7b49\u6d41\u7a0b\u3002\u901a\u5e38\u958b\u767c\u7aef\u8207\u7dad\u904b\u7aef\u5fc5\u9808 __\u6b0a\u8cac\u5206\u96e2__ \u3002\\r\\n> \u4f46\u7562\u7adf\u662f\u591a\u7d44\u4eba\u5171\u540c\u5354\u4f5c\uff0c\u8981\u5982\u4f55\u91d0\u6e05\u7cfb\u7d71\u554f\u984c\u4e0d\u662f\u4f86\u81ea\u958b\u767c\u7aef\u800c\u662f\u7dad\u904b\u7aef\u8a2d\u5b9a\u7684\u554f\u984c\u5462?\\r\\n> \u7562\u7adf\u6211\u9019\u908a\u5076\u800c\u767c\u751f MIS \u5c6c\u6027\u6a94\u8a2d\u5b9a\u932f\u8aa4\u800c\u9020\u6210\u7cfb\u7d71\u7121\u6cd5\u958b\u555f\u7684\u554f\u984c\u3002\\r\\n> \u4f8b\u5982: \u8207\u5176\u4ed6\u7cfb\u7d71\u4e92\u52d5\u7684 host name \u6216 IP \u8a2d\u932f\uff0c\u6b63\u5f0f\u6a5f\u6307\u5411\u7df4\u7fd2\u6a5f\u3002\\r\\n> \u6216\u662f\u4f60 bla bla~ \u7684\u9023 DB \u5e33\u5bc6\u90fd\u6539\u932f\u3002\\r\\n> \u53ea\u597d\u5148\u5c0f\u4eba\u63d0\u4f9b App \u7ba1\u7406\u4eba\u67e5\u8a62\u7279\u5b9a\u7cfb\u7d71\u53c3\u6578\u7684\u529f\u80fd\u3002\\r\\n> \u4e5f\u9806\u4fbf\u5beb\u4e86\u9019\u4efd\u8a3b\u8a18\u3002\\r\\n\\r\\n## \u4e00\u500b\u5c08\u6848\u8a72\u6709\u5e7e\u500b\u5c6c\u6027\u6a94\u5462?\\r\\n> \u6211\u9019\u908a\u7684\u7fd2\u6163\u662f\u81f3\u5c11\u5169\u500b\u3002\u5982\u6b64\u8a2d\u5b9a\u4e5f\u662f\u56e0\u70ba\u6b0a\u8cac\u5206\u96e2\uff0c\u6e1b\u5c11 MIS \u7dad\u8b77\u6642\u51fa\u932f\u3002\\r\\n> \u4e00\u500b\u662f\u8207\u7dad\u904b\u76f8\u95dc: \u4f8b\u5982 IP / DB \u5e33\u5bc6 / Mail Server / Exception \u767c\u751f\u6642\u7684\u544a\u8b66\u5c0d\u8c61\u3002\\r\\n> \u53e6\u4e00\u500b\u662f\u7cfb\u7d71\u53c3\u6578\u76f8\u95dc: \u8207\u61c9\u7528\u76f8\u95dc\u7684\u8a2d\u5b9a MIS \u4e0d\u9808\u77e5\u9053\u3002\\r\\n> \u6211\u9019\u505a\u662f\u56e0\u70ba\uff0c\u9019\u908a\u90e8\u5206\u7dad\u904b\u4eba\u54e1\u6703\u4ee5\u5c6c\u6027\u6a94\u66f4\u63db\u7684\u65b9\u5f0f\u4f86\u6539\u53c3\u6578\u3002\u8acb\u5047\u6642\u4ea4\u63a5\u53c8\u4e0d\u6e05\u695a\uff0c\u8077\u4ee3\u4e5d\u6210\u4e5d\u6703\u51fa\u932f\u3002\\r\\n> \u70ba\u907f\u514d\u7d1b\u722d\uff0c\u6240\u4ee5\u63d0\u4f9b\u7cfb\u7d71\u7ba1\u7406\u54e1\u67e5\u8a62\u756b\u9762\u3002\\r\\n\\r\\n# PathMatchingResourcePatternResolver \u76f4\u63a5\u8b80\u53d6\u5c6c\u6027\u6a94\\r\\n1. \u7b2c\u4e00\u500b\u65b9\u5f0f\u76f4\u63a5\u8b80\u53d6\u5c6c\u6027\u6a94\uff0c\u9019\u908a\u662f\u63a1\u7528 <span style={{color: \'#0044FF\'}}>PathMatchingResourcePatternResolver</span> \u985e\u5225\uff0c\u76f4\u63a5\u4ee5 pattern \u544a\u77e5\u5c6c\u6027\u6a94\u4f4d\u7f6e\u3002\u7136\u5f8c\u518d\u770b\u4f60\u60f3\u8f38\u51fa\u5230\u90a3\u88e1\u56c9\u3002\u9019\u908a\u5148\u76f4\u63a5\u8f38\u51fa\u5230 Console.\\r\\n1. \u9019\u908a\u5047\u8a2d\u5c6c\u6027\u6a94\u540d\u70ba config.properties\u3002\\r\\n\\r\\n* PropertiesFactoryBeanServiceImpl.java \u7bc4\u4f8b\\r\\n<CodeBlock text={`\\r\\n    @Service\\r\\n    public class PropertiesFactoryBeanServiceImpl\\r\\n            implements PropertiesFactoryBeanService {\\r\\n            \\r\\n        public PropertiesFactoryBean configProperties() throws Exception {\\r\\n            PropertiesFactoryBean propertiesFactoryBean = new PropertiesFactoryBean();\\r\\n            PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();\\r\\n            propertiesFactoryBean.setLocations(\\r\\n                    resolver.getResources(\\"classpath*:config.properties\\"));\\r\\n            return propertiesFactoryBean;\\r\\n        }\\r\\n    \\r\\n        @Override\\r\\n        public void doPrintAllPrperties() {\\r\\n            try {\\r\\n                PropertiesFactoryBean factory = configProperties();\\r\\n                factory.afterPropertiesSet();\\r\\n                Properties props = factory.getObject();\\r\\n    \\r\\n                @SuppressWarnings(\\"rawtypes\\")\\r\\n                Enumeration en = props.propertyNames();\\r\\n                while (en.hasMoreElements()) {\\r\\n                    String key = (String) en.nextElement();\\r\\n                    String Property = props.getProperty(key);\\r\\n                    System.out.println(key + Property);\\r\\n                }\\r\\n            } catch (Exception e) {\\r\\n                throw new RuntimeException(\\"unexpected\\", e);\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n    `}\\r\\n      language=\'java\'\\r\\n      showLineNumbers=\'true\'\\r\\n      /> \\r\\n \\r\\n## PropertiesFactoryBean Location \u8a2d\u5b9a\u7684\u5176\u4ed6\u65b9\u5f0f\\r\\n1. PathMatchingResourcePatternResolver\\r\\n1. ClassPathResource\\r\\n1. FileSystemResource\\r\\n\\r\\n\\r\\n* ClassPathResource \u7bc4\u4f8b\\r\\n```\\r\\n  PropertiesFactoryBean bean = new PropertiesFactoryBean();\\r\\n  bean.setLocation(new ClassPathResource(\\"bar/foo/app.properties\\"));\\r\\n```\\r\\n\\r\\n* FileSystemResource \u7bc4\u4f8b\\r\\n```\\r\\n  PropertiesFactoryBean bean = new PropertiesFactoryBean();\\r\\n  bean.setFileEncoding(\\"UTF-8\\");\\r\\n  bean.setLocation(new FileSystemResource(\\"file:ENV_VAR/appConfig/3rdConfig.properties\\"));\\r\\n```\\r\\n \\r\\n \\r\\n# \u81ea Spring Application Context \u4e2d\u53d6\u51fa Property Bean\\r\\n* \u90e8\u5206\u820a\u5c08\u6848\u53ef\u80fd\u6df7\u96dc\u4f7f\u7528 xml \u8a2d\u5b9a\u6b64\u6642\u5247\u53ef\u76f4\u63a5\u53d6\u51fa property bean \u5373\u53ef\u3002\\r\\n\\r\\n* applicationContext.xml : \u9019\u908a\u8a3b\u518a\u4e86 id \u70ba configProperties \u7684 bean\\r\\n<CodeBlock text={`\\r\\n    <bean id=\\"configProperties\\" lazy-init=\\"false\\"\\r\\n        class=\\"org.springframework.beans.factory.config.PropertiesFactoryBean\\">\\r\\n        <property name=\\"location\\">\\r\\n            <value>classpath:config.properties</value>\\r\\n        </property>\\r\\n    </bean>\\r\\n    `}\\r\\n      language=\'xml\'\\r\\n      showLineNumbers=\'true\'\\r\\n      /> \\r\\n\\r\\n* PropertiesFactoryBeanServiceImpl.java \u7bc4\u4f8b\\r\\n    * \u8a3b: \u524d\u9762\u8aaa\u904e\u9019\u908a\u7fd2\u6163\u6709\u591a\u500b *.properties \u6a94\uff0c\u6240\u4ee5 inject \u6642\u4f7f\u7528 @Qualifier \u6ce8\u5165\u3002\u672a\u518d by Type \u81ea\u52d5 inject\u3002\\r\\n<CodeBlock text={`\\r\\n@Service\\r\\npublic class PropertiesFactoryBeanServiceImpl\\r\\n        implements PropertiesFactoryBeanService {\\r\\n    private PropertiesFactoryBean configProperties;\\r\\n    @Autowired\\r\\n    @Qualifier(\\"configProperties\\")\\r\\n    public void setconfigProperties(PropertiesFactoryBean configProperties) {\\r\\n        this.configProperties = configProperties;\\r\\n    }\\r\\n    @Override\\r\\n    public void doPrintAllPrperties() {\\r\\n        try {\\r\\n            PropertiesFactoryBean factory2 = configProperties;\\r\\n            factory2.afterPropertiesSet();\\r\\n            Properties props = factory2.getObject();\\r\\n            @SuppressWarnings(\\"rawtypes\\")\\r\\n            Enumeration en = props.propertyNames();\\r\\n            while (en.hasMoreElements()) {\\r\\n                String key = (String) en.nextElement();\\r\\n                String Property = props.getProperty(key);\\r\\n                System.out.println(key + Property);\\r\\n            }\\r\\n        } catch (Exception e) {\\r\\n            throw new RuntimeException(\\"unexpected\\", e);\\r\\n        }\\r\\n    }\\r\\n}\\r\\n    `}\\r\\n      language=\'java\'\\r\\n      showLineNumbers=\'true\'\\r\\n      /> \\r\\n     \\r\\n# \u76f8\u95dc 3rd party libraries\\r\\n    * import java.util.Enumeration;\\r\\n    * import java.util.Properties;\\r\\n    * import org.springframework.beans.factory.annotation.Autowired;\\r\\n    * import org.springframework.beans.factory.annotation.Qualifier;\\r\\n    * import org.springframework.beans.factory.config.PropertiesFactoryBean;\\r\\n    * import org.springframework.core.io.support.PathMatchingResourcePatternResolver;\\r\\n    * import org.springframework.stereotype.Service;"},{"id":"Java-SHA-digester","metadata":{"permalink":"/slash/blog/Java-SHA-digester","source":"@site/blog/Java_Sha_Digest.md","title":"Java SHA \u96dc\u6e4a","description":"\u4ee5 Java SHA \u9032\u884c\u8cc7\u6599\u96dc\u6e4a","date":"2023-10-26T04:09:23.000Z","formattedDate":"October 26, 2023","tags":[{"label":"sha","permalink":"/slash/blog/tags/sha"},{"label":"cipher","permalink":"/slash/blog/tags/cipher"}],"readingTime":1.26,"hasTruncateMarker":false,"authors":[{"name":"Insect Totem","url":"https://github.com/chichunhuang","imageURL":"https://chichunhuang.github.io/slash/img/70_70.jpg","key":"insect"}],"frontMatter":{"title":"Java SHA \u96dc\u6e4a","description":"\u4ee5 Java SHA \u9032\u884c\u8cc7\u6599\u96dc\u6e4a","keywords":["sha","java","cipher","encrypt","decrypt"],"slug":"Java-SHA-digester","authors":["insect"],"tags":["sha","cipher"]},"prevItem":{"title":"List Properties in Spring App","permalink":"/slash/blog/List-Properties-in-Spring-App"}},"content":"import { CodeBlock, dracula  } from \\"react-code-blocks\\";\\r\\n\\r\\n\\r\\n> SHA \u4e26\u4e0d\u7b97\u662f\u7570\u7a2e\u52a0\u89e3\u5bc6\u6280\u8853\uff0c\u50c5\u80fd\u7a31\u70ba\u662f\u4e00\u7a2e\u96dc\u6e4a\u8a08\u7b97\u3002\\r\\n> \u5c07\u6307\u5b9a\u8cc7\u6599\u8f49\u70ba\u4e0d\u53ef\u9006\u7684\u5bc6\u6587\uff0c\u8207 MD5 \u76f8\u4f3c\u3002\\r\\n\\r\\n## \u96dc\u6e4a\u6f14\u7b97 (Hash)\\r\\n> \u53c8\u7a31\u70ba __\u6563\u5217\u7b97\u6cd5__ ,\u6216 __\u54c8\u5e0c\u51fd\u6578__ \u3002\\r\\n> \u96dc\u6e4a\u6f14\u7b97\u4e5f\u80fd\u5c07\u8cc7\u6599\u8f49\u70ba\u5bc6\u6587\uff0c\u4f46\u662f\u7121\u6cd5\u5c07\u5bc6\u6587\u8f49\u56de\u660e\u6587\u3002\\r\\n> \u6240\u4ee5\uff0c\u96dc\u6e4a\u6f14\u7b97\u901a\u5e38\u53ea\u662f\u7528\u4f86\u9a57\u8b49\u8cc7\u6599\u50b3\u905e\u904e\u7a0b\u662f\u5426\u907a\u6f0f\u5c01\u5305\u3002\u4e5f\u5c31\u662f\u9a57\u8b49\u8cc7\u6599\u5b8c\u6574\u6027(Integrity)\u6642\u4f7f\u7528\u3002\\r\\n>\\r\\n> ex: MD5\u3001SHA1\u3001HMAC\\r\\n\\r\\n\\r\\n* ShaDigester.java\\r\\n\\r\\n```java\\r\\nimport java.security.MessageDigest;\\r\\nimport java.security.NoSuchAlgorithmException;\\r\\n\\r\\n\\r\\n// SHA: \u96dc\u6e4a\u6f14\u7b97, \u55ae\u5411\u5c07\u8cc7\u6599\u8f49\u5bc6\u6587\u3002\u9a57\u8b49\u8cc7\u6599\u5b8c\u6574\u6027(Integrity)\u6642\u4f7f\u7528\u3002 \\r\\npublic class ShaDigester {\\r\\n    \\r\\n    private static final String DIGEST_ALGORITHM_512 = \\"sha-512\\";\\r\\n\\r\\n    private static final String DIGEST_ALGORITHM_256 = \\"sha-256\\";\\r\\n    \\r\\n    \\r\\n    public static String sha512Digest(String message, String salt)\\r\\n            throws NoSuchAlgorithmException {\\r\\n        MessageDigest md = MessageDigest.getInstance(DIGEST_ALGORITHM_512);\\r\\n        md.update(String.format(\\"%s%s\\", message, salt).getBytes());\\r\\n\\r\\n        StringBuffer ret = new StringBuffer();\\r\\n        for (byte b : md.digest()) {\\r\\n            ret.append(String.format(\\"%02x\\", b));\\r\\n        }\\r\\n\\r\\n        return ret.toString();\\r\\n    }\\r\\n    \\r\\n    public static String sha256Digest(String message, String salt)\\r\\n            throws NoSuchAlgorithmException {\\r\\n        MessageDigest md = MessageDigest.getInstance(DIGEST_ALGORITHM_256);\\r\\n        md.update(String.format(\\"%s%s\\", message, salt).getBytes());\\r\\n        \\r\\n        StringBuffer ret = new StringBuffer();\\r\\n        for (byte b : md.digest()) {\\r\\n            ret.append(String.format(\\"%02x\\", b));\\r\\n        }\\r\\n        \\r\\n        return ret.toString();\\r\\n    }\\r\\n}    \\r\\n```"}]}')}}]);