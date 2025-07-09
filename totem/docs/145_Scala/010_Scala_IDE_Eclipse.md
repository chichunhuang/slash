---
title: Scala with Eclipse IDE
description: Scala 在 Eclipse 中相關設定
keywords: [Scala,Eclipse]
---



> 部分 plugins 似乎已不再維護  
> 可改用 JetBrain


## Eclipse 準備 : Plugins Installation
### 事前準備
* 因為比較習慣用 Eclipse 與 IntelliJ IDEA \(JetBrains) 所以紀錄這些 IDE 相關設定方式。

* 事先須安裝下列工具
    * Eclipse
    * Apache Maven
    * [Scala](https://www.scala-lang.org/download/)

### Scala IDE for Eclipse
* 直接下載 [Scala IDE](https://www.scala-lang.org/download/)，可能是最艱單的環境設定方式

<hr/>
<hr/>
* 下面的 Eclipse 搭配 plugin 的安裝與設定方試，適用於混和 java code 與 scala code 的專案。
<hr/>

### Eclipse Scala IDE Plugin 設定
* 這邊因為 Java 版本、Eclipse 版本與 Scala Plugin 相配合版本限制，安裝設定可能不同。可以上網查察其他方式。
* Scala IDE plugin 安裝設定: 
    * Eclipse 2023 🢂 Help 🢂 Install New Software 🢂 Add 🢂 <code>__http://download.scala-ide.org/sdk/lithium/e46/scala211/stable/site__</code> 🢂 Scala IDE for Eclipse
    * Eclipse Java Project 🢂 🖱R 🢂 Configure 🢂 add Scala Nature
    * Scala IDE plugins: Eclipse marketplace 🢂 Scala 🢂 Scala IDE x.x.x 🢂 Install \(marketplace 似乎已移除，且 plugins 已停止維護)
        * Eclipse Scala Compiler 設定 🢂 Window 🢂 Preferences 🢂 Installations 🢂 Add 🢂 查 Scala 安裝目錄的 lib folder    


### Eclipse m2e software
* m2e Software: (Maven Integration for Scala IDE)
    * Help -> Install New Software ->
    * http://alchim31.free.fr/m2e-scala/update-site/ -> Next -> Next...

### Add Maven Scala Archetype
* Window -> Preference -> Maven -> Archetypes -> Add Remote Catalog...
* Catalog File: http://repo1.maven.org/maven2/archetype-catalog.xml
* Description: Remote Archtype

### Create Eclipse Scala Maven Project#
* File -> New -> Maven Project -> Archetype 選 org.scala-tools.archetypes(scala-archetype-simple) -> finish
* 或是 File -> New -> Maven Project -> Archetype 選 net.alchim31.maven(scala-archetype-simple) -> finish
* 這一個的版本比較新, 且衝突問題較少
```
<groupId>net.alchim31.maven</groupId>
     <artifactId>scala-archetype-simple</artifactId>
<version>1.6</version>
```
* JVM 設定 : project -> 右鍵 -> build path -> 更改 JVM version
* Scala Nature Configuration: project -> 右鍵 -> Configure -> Add Scala Nature
* Scala Compiler 設定: project -> 右鍵 -> properties -> Scala Compiler
    * 因為目前 Scala-test 的 lib 只支援到 Scala 2.10 版, 所以暫時先退版
* pom.xml 設定 (版本更改)
    * org.scala-lang version 更改
    * org.scala-tools.testing version 更改
    * plugins 增加 pluginManagement (新版 Eclipse 不會出現此警訊)
```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>chichun</groupId>
  <artifactId>ssa</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <name>${project.artifactId}</name>
  <description>My wonderfull scala app</description>
  <inceptionYear>2010</inceptionYear>
  <licenses>
    <license>
      <name>My License</name>
      <url>http://....</url>
      <distribution>repo</distribution>
    </license>
  </licenses>

  <properties>
    <maven.compiler.source>1.5</maven.compiler.source>
    <maven.compiler.target>1.5</maven.compiler.target>
    <encoding>UTF-8</encoding>
    <scala.version>2.10.6</scala.version>
  </properties>

<!--
  <repositories>
    <repository>
      <id>scala-tools.org</id>
      <name>Scala-Tools Maven2 Repository</name>
      <url>http://scala-tools.org/repo-releases</url>
    </repository>
  </repositories>

  <pluginRepositories>
    <pluginRepository>
      <id>scala-tools.org</id>
      <name>Scala-Tools Maven2 Repository</name>
      <url>http://scala-tools.org/repo-releases</url>
    </pluginRepository>
  </pluginRepositories>
-->
    <dependencies>
        <dependency>
            <groupId>org.scala-lang</groupId>
            <artifactId>scala-library</artifactId>
            <version>${scala.version}</version>
        </dependency>

        <dependency>
            <groupId>org.scala-lang</groupId>
            <artifactId>scala-reflect</artifactId>
            <version>${scala.version}</version>
        </dependency>
        <dependency>
            <groupId>org.scala-lang</groupId>
            <artifactId>scala-compiler</artifactId>
            <version>${scala.version}</version>
        </dependency>
        <dependency>
            <groupId>com.typesafe.scala-logging</groupId>
            <artifactId>scala-logging_2.11</artifactId>
            <version>3.1.0</version>
        </dependency>


    <!-- Test -->
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.8.1</version>
      <scope>test</scope>
    </dependency>
    <!-- <dependency> 
    <groupId>org.scala-tools.testing</groupId> 
    <artifactId>specs_${scala.version}</artifactId> 
        <version>1.6.5</version> 
        <scope>test</scope> 
        </dependency> -->

    <!-- https://mvnrepository.com/artifact/org.scala-tools.testing/specs -->
    <dependency>
        <groupId>org.scala-tools.testing</groupId>
        <artifactId>specs_2.10</artifactId>
        <version>1.6.9</version>
        <scope>test</scope>
    </dependency>
    
    <dependency>
      <groupId>org.scalatest</groupId>
      <artifactId>scalatest</artifactId>
      <version>1.2</version>
      <scope>test</scope>
    </dependency>
    
    <!-- https://mvnrepository.com/artifact/org.scalatest/scalatest-mustmatchers -->
<dependency>
    <groupId>org.scalatest</groupId>
    <artifactId>scalatest-mustmatchers_sjs0.6_2.10</artifactId>
    <version>3.0.0-SNAP13</version>
</dependency>

  </dependencies>

  <build>
    <sourceDirectory>src/main/scala</sourceDirectory>
    <testSourceDirectory>src/test/scala</testSourceDirectory>
     <pluginManagement>
    <plugins>
      <plugin>
        <groupId>org.scala-tools</groupId>
        <artifactId>maven-scala-plugin</artifactId>
        <version>2.15.0</version>
        <executions>
          <execution>
            <goals>
              <goal>compile</goal>
              <goal>testCompile</goal>
            </goals>
            <configuration>
              <args>
                <arg>-make:transitive</arg>
                <arg>-dependencyfile</arg>
                <arg>${project.build.directory}/.scala_dependencies</arg>
              </args>
            </configuration>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>2.6</version>
        <configuration>
          <useFile>false</useFile>
          <disableXmlReport>true</disableXmlReport>
          <!-- If you have classpath issue like NoDefClassError,... -->
          <!-- useManifestOnlyJar>false</useManifestOnlyJar -->
          <includes>
            <include>**/*Test.*</include>
            <include>**/*Suite.*</include>
          </includes>
        </configuration>
      </plugin>
    </plugins>
         </pluginManagement>
  </build>
</project>
```
* net.alchim31.maven 版的 pom.xml
```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>chichun</groupId>
  <artifactId>scala6</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <name>${project.artifactId}</name>
  <description>My wonderfull scala app</description>
  <inceptionYear>2018</inceptionYear>
  <licenses>
    <license>
      <name>My License</name>
      <url>http://....</url>
      <distribution>repo</distribution>
    </license>
  </licenses>

  <properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <encoding>UTF-8</encoding>
    <scala.version>2.12.7</scala.version>
    <scala.compat.version>2.12</scala.compat.version>
    <spec2.version>4.2.0</spec2.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.scala-lang</groupId>
      <artifactId>scala-library</artifactId>
      <version>${scala.version}</version>
    </dependency>

    <!-- Test -->
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.12</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.scalatest</groupId>
      <artifactId>scalatest_${scala.compat.version}</artifactId>
      <version>3.0.5</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.specs2</groupId>
      <artifactId>specs2-core_${scala.compat.version}</artifactId>
      <version>${spec2.version}</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.specs2</groupId>
      <artifactId>specs2-junit_${scala.compat.version}</artifactId>
      <version>${spec2.version}</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <sourceDirectory>src/main/scala</sourceDirectory>
    <testSourceDirectory>src/test/scala</testSourceDirectory>
    <pluginManagement>
    <plugins>
      <plugin>
        <!-- see http://davidb.github.com/scala-maven-plugin -->
        <groupId>net.alchim31.maven</groupId>
        <artifactId>scala-maven-plugin</artifactId>
        <version>3.3.2</version>
        <executions>
          <execution>
            <goals>
              <goal>compile</goal>
              <goal>testCompile</goal>
            </goals>
            <configuration>
              <args>
                <arg>-dependencyfile</arg>
                <arg>${project.build.directory}/.scala_dependencies</arg>
              </args>
            </configuration>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-plugin</artifactId>
        <version>2.21.0</version>
        <configuration>
          <!-- Tests will be run with scalatest-maven-plugin instead -->
          <skipTests>true</skipTests>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.scalatest</groupId>
        <artifactId>scalatest-maven-plugin</artifactId>
        <version>2.0.0</version>
        <configuration>
          <reportsDirectory>${project.build.directory}/surefire-reports</reportsDirectory>
          <junitxml>.</junitxml>
          <filereports>TestSuiteReport.txt</filereports>
          <!-- Comma separated list of JUnit test class names to execute -->
          <jUnitClasses>samples.AppTest</jUnitClasses>
        </configuration>
        <executions>
          <execution>
            <id>test</id>
            <goals>
              <goal>test</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
    </pluginManagement>
  </build>
</project>
```

* create source folders
    * src/main/java
    * src/test/java
    * src/main/scala
    * src/test/scala

## Create Eclipse Simple Scala Project#
* 沒有 maven
* File -> new -> Scala Project
* pom 設定
* mvn clean compile
```
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>Scala5</groupId>
    <artifactId>Scala5</artifactId>
    <version>0.0.1-SNAPSHOT</version>

    <properties>
        <scala.version>2.12.3</scala.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.scala-lang</groupId>
            <artifactId>scala-library</artifactId>
            <version>${scala.version}</version>
        </dependency>
        <dependency>
            <groupId>org.scala-lang</groupId>
            <artifactId>scala-compiler</artifactId>
            <version>${scala.version}</version>
        </dependency>
        <dependency>
            <groupId>org.scala-lang</groupId>
            <artifactId>scala-reflect</artifactId>
            <version>${scala.version}</version>
        </dependency>
    </dependencies>


    <build>
        <sourceDirectory>src</sourceDirectory>
        <pluginManagement>
            <plugins>
                <plugin>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <version>3.7.0</version>
                    <configuration>
                        <source>1.8</source>
                        <target>1.8</target>
                    </configuration>
                </plugin>
                <plugin>
                    <groupId>org.scala-tools</groupId>
                    <artifactId>maven-scala-plugin</artifactId>
                    <version>2.15.1</version>
                    <executions>
                        <execution>
                            <id>compile-scala</id>
                            <goals>
                                <goal>add-source</goal>
                                <goal>compile</goal>
                            </goals>
                        </execution>
                        <execution>
                            <id>test-compile-scala</id>
                            <goals>
                                <goal>add-source</goal>
                                <goal>testCompile</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </pluginManagement>
    </build>
</project>

```