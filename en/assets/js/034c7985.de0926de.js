"use strict";(self.webpackChunktotem=self.webpackChunktotem||[]).push([[7921],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,g=u["".concat(o,".").concat(h)]||u[h]||y[h]||i;return t?r.createElement(g,c(c({ref:n},s),{},{components:t})):r.createElement(g,c({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=h;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:a,c[1]=p;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},743:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={title:"Java AES \u52a0\u89e3\u5bc6",description:"\u4ee5 Java AES \u9032\u884c\u8cc7\u6599\u52a0\u89e3\u5bc6",keywords:["aes","java","cipher","encrypt","decrypt"]},c=void 0,p={unversionedId:"tech/java/Java_Aes_Cipher",id:"tech/java/Java_Aes_Cipher",title:"Java AES \u52a0\u89e3\u5bc6",description:"\u4ee5 Java AES \u9032\u884c\u8cc7\u6599\u52a0\u89e3\u5bc6",source:"@site/docs/tech/java/Java_Aes_Cipher.md",sourceDirName:"tech/java",slug:"/tech/java/Java_Aes_Cipher",permalink:"/slash/en/docs/tech/java/Java_Aes_Cipher",draft:!1,tags:[],version:"current",frontMatter:{title:"Java AES \u52a0\u89e3\u5bc6",description:"\u4ee5 Java AES \u9032\u884c\u8cc7\u6599\u52a0\u89e3\u5bc6",keywords:["aes","java","cipher","encrypt","decrypt"]},sidebar:"tutorialSidebar",previous:{title:"\u3010Tomcat Cookie \u5b89\u5168\u6027\u8a2d\u5b9a\u3011",permalink:"/slash/en/docs/tech/Tomat/Tomcat_Httponly"},next:{title:"Java Cipher Intro",permalink:"/slash/en/docs/tech/java/Java_Encryption"}},o={},l=[],s={toc:l},u="wrapper";function y(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6709\u6642\u6703\u9700\u8981\u5c07\u8cc7\u6599\u9032\u884c\u53ef\u56de\u5fa9\u7684\u52a0\u5bc6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982: ISO 27001 DLP(data leakage prevention)\uff0c\u4e00\u822c\u5728\u9a57\u8b49\u6642\u6700\u4f4e\u8981\u6c42\u70ba\u5bc6\u78bc\u539f\u5247\u3001\u786c\u789f\u8cc7\u6599\u8207 DB \u8cc7\u6599\u52a0\u5bc6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6b64\u6642\u82e5\u727d\u6d89\u5230\u654f\u611f\u6027\u8cc7\u6599\uff0c\u4e0b\u5217\u65b9\u6cd5\u4e5f\u8a31\u6709\u7528\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"DBA \u77e5\u9053\u52a0\u5bc6\u6642\u7684 half-salt\u3002 DBA \u53ea\u77e5\u9053\u4e00\u534a\u7684 salt \u4e14\u6709\u6a5f\u6703\u63a5\u89f8\u5bc6\u6587\u3002\u7121\u6cd5\u5b8c\u6574\u89e3\u5bc6\u3002\n\u5de5\u7a0b\u5e2b\u77e5\u9053\u52a0\u5bc6\u6f14\u7b97\u6cd5\u52a0\u53e6\u4e00\u534a\u7684 salt \u4ee5\u53ca salt \u5408\u4f75\u65b9\u6cd5\u3002\u4f46\u662f\u7121\u63a5\u89f8\u8cc7\u6599\u3002\nApp \u4f7f\u7528\u8005\u50c5\u80fd\u5728\u7cfb\u7d71\u4e0a\u4f7f\u7528\u8cc7\u6599\u3002")),(0,a.kt)("h1",{id:"aes-\u9032\u968e\u52a0\u5bc6\u6a19\u6e96"},"AES \u9032\u968e\u52a0\u5bc6\u6a19\u6e96"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5c0d\u7a31\u52a0\u5bc6\u6f14\u7b97\u6cd5")," :AES\u7b97\u6cd5\u4f7f\u7528 ",(0,a.kt)("span",{style:{color:"#0044FF"}},"[\u76f8\u540c]")," \u7684\u5bc6\u9470\u4f86\u5c0d\u8cc7\u6599\u9032\u884c ",(0,a.kt)("span",{style:{color:"#0044FF"}},"[\u52a0\u5bc6]")," \u548c ",(0,a.kt)("span",{style:{color:"#0044FF"}},"[\u89e3\u5bc6]"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u52a0\u5bc6\u7a2e\u985e: \u4f9d\u52a0\u89e3\u5bc6\u6f14\u7b97\u6cd5\u7a2e\u985e\u5206 ",(0,a.kt)("strong",{parentName:"p"},"\u5c0d\u7a31\u5f0f")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u975e\u5c0d\u7a31\u5f0f")," \u52a0\u5bc6"),(0,a.kt)("p",{parentName:"blockquote"},"\u5c0d\u7a31\u6027\u52a0\u5bc6\u7b97\u6cd5\uff1a"),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"\u5c0d\u7a31\u5f0f\u52a0\u5bc6\u5c31\u662f\u52a0\u5bc6\u548c\u89e3\u5bc6\u4f7f\u7528\u540c\u4e00\u500b\u5bc6\u9470\n\u8cc7\u6599\u63a5\u6536\u96d9\u65b9\u9700\u5148\u77e5\u9053\u96d9\u65b9\u52a0\u5bc6\u7684\u91d1\u9470\u8207\u6f14\u7b97\u6cd5\uff0c\u624d\u80fd\u5b8c\u6574\u52a0\u89e3\u5bc6\u3002\nex: AES\u3001DES\u30013DES")),(0,a.kt)("p",{parentName:"blockquote"},"\u975e\u5c0d\u7a31\u7b97\u6cd5\uff1a"),(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"\u975e\u5c0d\u7a31\u5f0f\u52a0\u5bc6\u5c31\u662f\u52a0\u5bc6\u548c\u89e3\u5bc6\u6240\u4f7f\u7528\u4e0d\u540c\u5bc6\u9470\uff0c\u4e00\u822c\u7a31 ",(0,a.kt)("strong",{parentName:"p"},"\u516c\u9470")," \u548c ",(0,a.kt)("strong",{parentName:"p"},"\u79c1\u9470")," \u3002\n\u516c\u79c1\u9470\u5fc5\u9700\u914d\u5c0d\u4f7f\u7528\uff0c\u5426\u5247\u4e0d\u80fd\u6253\u958b\u52a0\u5bc6\u6587\u4ef6\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u8a0a\u606f\u63a5\u6536\u65b9\u5148\u88fd\u5099\u516c\u9470\u8207\u79c1\u9470\u3002\u4e26\u5c07\u516c\u9470\u767c\u9001\u7d66\u8cc7\u6599\u4f86\u6e90\u65b9\u3002\n\u8cc7\u6599\u6e90\u982d\u5247\u4f7f\u7528\u63a5\u6536\u65b9\u7684\u516c\u9470\u5c07\u8a0a\u606f\u52a0\u5bc6\uff0c\u7136\u5f8c\u5c07\u7955\u6587\u56de\u50b3\u7d66\u63a5\u6536\u65b9\uff0c\u63a5\u6536\u65b9\u518d\u4f9d\u64da\u81ea\u5df1\u898f\u5247\u7d50\u5408\u516c\u79c1\u9470\u9032\u884c\u89e3\u5bc6\u3002"),(0,a.kt)("p",{parentName:"blockquote"},"\u6240\u4ee5\uff0c\u539f\u5247\u4e0a\u662f ",(0,a.kt)("strong",{parentName:"p"},"\u63a5\u6536")," \u8a0a\u606f\u7684\u4eba\u4f86 ",(0,a.kt)("strong",{parentName:"p"},"\u6c7a\u5b9a\u6f14\u7b97")," \u5de5\u5177\u548c ",(0,a.kt)("strong",{parentName:"p"},"\u6d3e\u767c\u91d1\u9470")," \u3002\nex: RSA\u3001DSA\u3001ECC"))),(0,a.kt)("h1",{id:"aes128-encypt-and-ddecrypt-example"},"Aes128 Encypt and Ddecrypt Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class Aes128EncrypterUtil {\n    public static String encryptHex(String str) {\n        Aes128Cipher encrypter = new Aes128Cipher();\n        return encrypter.encrypt(str);\n    }\n\n    public static String decryptHex(String str) {\n        Aes128Cipher encrypter = new Aes128Cipher();\n        return encrypter.decrypt(str);\n    }\n    \n    public static String encryptBased64(String str) {\n        Aes128Cipher encrypter = new Aes128Cipher();\n        return encrypter.encrypt(str, "BASED64");\n    }\n\n    public static String decryptBased64(String str) {\n        Aes128Cipher encrypter = new Aes128Cipher();\n        return encrypter.decrypt(str, "BASED64");\n    }\n}\n\n')),(0,a.kt)("h1",{id:"aes128cipherjava"},"Aes128Cipher.java"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import java.io.UnsupportedEncodingException;\nimport java.security.NoSuchAlgorithmException;\nimport java.util.Arrays;\nimport java.util.Base64;\n\nimport javax.crypto.Cipher;\nimport javax.crypto.IllegalBlockSizeException;\nimport javax.crypto.KeyGenerator;\nimport javax.crypto.SecretKey;\nimport javax.crypto.spec.SecretKeySpec;\n\n/**\n * <pre>\n<h1>\u9032\u968e\u52a0\u5bc6\u6a19\u6e96</h1>\n\n<h2>\u5c0d\u7a31\u52a0\u5bc6\u7b97\u6cd5 :</h2> \nAES\u7b97\u6cd5\u4f7f\u7528[\u76f8\u540c]\u7684\u5bc6\u9470\u4f86\u5c0d\u8cc7\u6599\u9032\u884c[\u52a0]\u5bc6\u548c[\u89e3]\u5bc6\n\n<h2>\u52a0\u5bc6\u904e\u7a0b\u5305\u62ec\u4ee5\u4e0b\u6b65\u9a5f\uff1a</h2>\n ref: https://inbound.technology/%E4%BB%80%E9%BA%BC%E6%98%AF-aes-%E5%B0%8D%E7%A8%B1%E5%8A%A0%E5%AF%86%E6%BC%94%E7%AE%97%E6%B3%95%EF%BC%9Fphp-%E8%88%87-nodejs-%E7%AF%84%E4%BE%8B%E5%AF%A6%E4%BD%9C/\n \n<ol>\n<li>\u5bc6\u9470\u64f4\u5c55\uff1a\u5c07\u8f38\u5165\u7684\u5bc6\u9470\u64f4\u5c55\u70ba\u66f4\u9577\u7684\u5bc6\u9470\u5e8f\u5217\uff0c\u4ee5\u4f9b\u5f8c\u7e8c\u7684\u52a0\u5bc6\u548c\u89e3\u5bc6\u904e\u7a0b\u4f7f\u7528\u3002</li>\n<li>\u521d\u59cb\u8f2a\uff1a\u5c07\u660e\u6587\u6578\u64da\u6309\u7167\u4e00\u5b9a\u7684\u898f\u5247\u8207\u5bc6\u9470\u5e8f\u5217\u9032\u884c\u7570\u6216\u64cd\u4f5c\u3002</li>\n<li>\u8f2a\u51fd\u6578\uff1a\u91cd\u8986\u57f7\u884c\u591a\u8f2a\u64cd\u4f5c\uff0c\u6bcf\u4e00\u8f2a\u90fd\u5305\u62ec\u56db\u500b\u6b65\u9a5f\uff1a</li>\n<li>\u5b57\u7bc0\u66ff\u63db\uff1a\u5c07\u6578\u64da\u4e2d\u7684\u6bcf\u500b\u5b57\u7bc0\u66ff\u63db\u70ba\u53e6\u4e00\u500b\u5b57\u7bc0\uff0c\u4f7f\u7528\u4e00\u500b\u56fa\u5b9a\u7684S\u76d2\u9032\u884c\u6620\u5c04\u3002</li>\n    <li>\u884c\u79fb\u4f4d\uff1a\u5c07\u6578\u64da\u77e9\u9663\u4e2d\u7684\u6bcf\u4e00\u884c\u5faa\u74b0\u5de6\u79fb\u4e0d\u540c\u7684\u504f\u79fb\u91cf\u3002</li>\n    <li>\u5217\u6df7\u6dc6\uff1a\u5c07\u6578\u64da\u77e9\u9663\u4e2d\u7684\u6bcf\u4e00\u5217\u9032\u884c\u6df7\u6dc6\u3002</li>\n    <li>\u5bc6\u9470\u52a0\uff1a\u5c07\u5bc6\u9470\u5e8f\u5217\u4e2d\u7684\u4e00\u90e8\u5206\u8207\u6578\u64da\u9032\u884c\u7570\u6216\u64cd\u4f5c\u3002</li>\n<li>\u6700\u7d42\u8f2a\uff1a\u6700\u5f8c\u4e00\u8f2a\u64cd\u4f5c\u4e2d\uff0c\u7701\u7565\u5217\u6df7\u6dc6\u6b65\u9a5f\uff0c\u53ea\u5305\u62ec\u5b57\u7bc0\u66ff\u63db\u3001\u884c\u79fb\u4f4d\u548c\u5bc6\u9470\u52a0\u3002</li>\n<li>\u8f38\u51fa\uff1a\u8f38\u51fa\u52a0\u5bc6\u5f8c\u7684\u6578\u64da\u3002</li>\n</ol>\n * \n * </pre>\n */\npublic class Aes128Cipher {\n\n    public static final String CIPHER_TO_BASED64 = \"BASED64\";\n\n    public static final String CIPHER_TO_HEX = \"HEX\";\n\n    private Cipher ecipher;\n\n    private Cipher dcipher;\n\n    private final byte[] keySalt = new byte[] { 45, -42, 105, -110, 115, -101,\n            99, -116, 45, -116, -111, 116, -101, 109, 42, -45 };\n\n    private static final String ENCODING_UTF8 = \"UTF8\";\n\n    public static void main(String[] args) {\n        KeyGenerator kg = null;\n        try {\n            kg = KeyGenerator.getInstance(\"AES\");\n        } catch (NoSuchAlgorithmException e) {\n            e.printStackTrace();\n        }\n        kg.init(128);\n        SecretKey secretKey = kg.generateKey();\n        byte[] encodedByteArray = secretKey.getEncoded();\n        System.out.println(Arrays.toString(encodedByteArray));\n    }\n\n    public Aes128Cipher() throws EncryptDecryptException {\n        SecretKeySpec skeySpec = new SecretKeySpec(keySalt, \"AES\");\n\n        try {\n            ecipher = Cipher.getInstance(\"AES\");\n            dcipher = Cipher.getInstance(\"AES\");\n            ecipher.init(Cipher.ENCRYPT_MODE, skeySpec);\n            dcipher.init(Cipher.DECRYPT_MODE, skeySpec);\n        } catch (NoSuchAlgorithmException | NoSuchPaddingException\n                | InvalidKeyException e) {\n            e.printStackTrace();\n            throw new EncryptDecryptException(\"unexpected\", e);\n        }\n    }\n\n    public String encrypt(String str) throws EncryptDecryptException {\n        return encrypt(str, CIPHER_TO_HEX);\n    }\n\n    public String encrypt(String str, String cipherTo)\n            throws EncryptDecryptException {\n        try {\n            // Encode the string into bytes using utf-8\n            byte[] utf8 = str.getBytes(ENCODING_UTF8);\n\n            // Encrypt\n            byte[] enc = ecipher.doFinal(utf8);\n\n            if (CIPHER_TO_BASED64.equalsIgnoreCase(cipherTo)) {\n                Base64.Encoder encoder = Base64.getEncoder();\n                return encoder.encodeToString(enc);\n            } else {\n                // encrypt should produce url safe string, which best in HEX\n                return HexStringUtil.toHexString(enc);\n            }\n\n        } catch (javax.crypto.BadPaddingException | IllegalBlockSizeException\n                | UnsupportedEncodingException e) {\n            e.printStackTrace();\n            throw new EncryptDecryptException(\"unexpected\", e);\n        }\n    }\n\n    public String decrypt(String str) throws EncryptDecryptException {\n        return decrypt(str, CIPHER_TO_HEX);\n    }\n\n    public String decrypt(String str, String cypherTo)\n            throws EncryptDecryptException {\n        try {\n\n            if (CIPHER_TO_BASED64.equalsIgnoreCase(cypherTo)) {\n                Base64.Decoder decoder = Base64.getDecoder();\n                byte[] cipherText = decoder.decode(str.getBytes(\"UTF8\"));\n                return new String(dcipher.doFinal(cipherText), \"UTF-8\");\n            } else {\n                // Decode base64 to get bytes\n                byte[] dec = HexStringUtil.fromHexString(str);\n\n                // Decrypt\n                byte[] utf8 = dcipher.doFinal(dec);\n\n                // Decode using utf-8\n                return new String(utf8, ENCODING_UTF8);\n            }\n\n        } catch (javax.crypto.BadPaddingException | IllegalBlockSizeException\n                | UnsupportedEncodingException e) {\n            e.printStackTrace();\n            throw new EncryptDecryptException(\"unexpected\", e);\n        }\n    }\n\n    private static class HexStringUtil {\n\n        // table to convert a nibble to a hex char.\n        private static char[] hexChar = { '0', '1', '2', '3', '4', '5', '6',\n                '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };\n\n        /**\n         * Convert a hex string to a byte array. Permits upper or lower case\n         * hex.\n         * \n         * @param s\n         *            String must have even number of characters. and be formed\n         *            only of digits 0-9 A-F or a-f. No spaces, minus or plus\n         *            signs.\n         * @return corresponding byte array.\n         */\n        public static byte[] fromHexString(String s) {\n            int stringLength = s.length();\n            if ((stringLength & 0x1) != 0) {\n                throw new IllegalArgumentException(\n                        \"fromHexString requires an even number of hex characters\");\n            }\n            byte[] b = new byte[stringLength / 2];\n\n            for (int i = 0, j = 0; i < stringLength; i += 2, j++) {\n                int high = charToNibble(s.charAt(i));\n                int low = charToNibble(s.charAt(i + 1));\n                b[j] = (byte) ((high << 4) | low);\n            }\n            return b;\n        }\n\n        /**\n         * convert a single char to corresponding nibble.\n         * \n         * @param c\n         *            char to convert. must be 0-9 a-f A-F, no spaces, plus or\n         *            minus signs.\n         * \n         * @return corresponding integer\n         */\n        private static int charToNibble(char c) {\n            if ('0' <= c && c <= '9') {\n                return c - '0';\n            } else if ('a' <= c && c <= 'f') {\n                return c - 'a' + 0xa;\n            } else if ('A' <= c && c <= 'F') {\n                return c - 'A' + 0xa;\n            } else {\n                throw new IllegalArgumentException(\n                        \"Invalid hex character: \" + c);\n            }\n        }\n\n        public static String toHexString(byte[] b) {\n            StringBuffer sb = new StringBuffer(b.length * 2);\n            for (int i = 0; i < b.length; i++) {\n                // look up high nibble char\n                sb.append(hexChar[(b[i] & 0xf0) >>> 4]);\n\n                // look up low nibble char\n                sb.append(hexChar[b[i] & 0x0f]);\n            }\n            return sb.toString();\n        }\n\n    }\n}\n")))}y.isMDXComponent=!0}}]);