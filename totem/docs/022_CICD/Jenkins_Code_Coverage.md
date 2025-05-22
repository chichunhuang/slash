---
title: Jenkins Code Coverage
description: Jenkins Code Coverage 設定
keywords: [Jenkins,Code_Coverage]
---

   Jenkins 上常用的 Code Covergae 工具有 
   1. [Jacoco](https://www.eclemma.org/jacoco/)
   2. [Cobertura](https://cobertura.github.io/cobertura/)
   3. [Jenkins Plugins 參考](https://plugins.jenkins.io/coverage/)
   

## Jacoco 安裝
    注意: 
        JaCoCo 0.7.5 變更了 execution data 的檔案格式
        安裝時須注意 Jenkins Plugins 與 Jacoco 間版本相容問題

### Plugins 安裝
* Jenkins CI Server 首頁 🢂 管理Jenkins 🢂 管理外掛程式 🢂 可用的頁籤 🢂 選取 Jacoco Plugin 安裝

### 準備 jar
* 在專案中加入Jacoco需要的jar檔
* 方範例將 jacocoant.jar 放在 build/jacoco/ 資料夾之內

### Ant build.xml

```xml

    <project name="InsectTotem" basedir="." default="build" xmlns:jacoco="antlib:org.jacoco.ant">
        ...
        <taskdef uri="antlib:org.jacoco.ant" resource="org/jacoco/ant/antlib.xml">
            <classpath path="build/jacoco/jacocoant.jar"/>
        </taskdef>
     
        ...
         
        <target name="test"...>
            用<jacoco:coverage></jacoco:coverage>包覆原來的<junit></junit>標籤:
            <jacoco:coverage destfile="report/jacoco/jacoco.exec">
            <junit ...>
                    ...
                    </junit>
            </jacoco:coverage>
     
            單元測試結束後,產生報告:
            <jacoco:report>
                <executiondata>
                    <file file="report/jacoco/jacoco.exec"/>
                </executiondata>
                                
                <structure name="insecttotem">
                    <classfiles>
                        <fileset dir="bin/main"/>
                    </classfiles>
                    <sourcefiles encoding="UTF-8">
                        <fileset dir="src"/>
                    </sourcefiles>
                </structure>
                                
                <html destdir="report/jacoco"/>
                                
            </jacoco:report>
        </target>
    </project>

```

### 修改 Jenkins 上專案的設定
* 專案的 '建置後動作' 中，加入<code>Record Jacoco Coverage Report</code>
* 路徑設定: 依實際路徑設定
    * Path to exec files - **/report/**/jacoco.exec
    * Path to class directories - **/bin/main
    * Path to source directories - **/src
