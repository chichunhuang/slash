---
title: JetBrains Scala 專案設定 
description: JetBrains Scala 專案設定
keywords: [Scala,IntelliJ,JetBrains]
---
import {GoogleImage} from "@site/src/components/google/GoogleImage";

> 這裡僅是紀錄學習與安裝過程，  
> 隨版本異動關步驟可能或有所變動， 

## Create Jet Brains IDEA Scala Project
### Simple IDEA Scala Project
    * File 🢂 New 🢂 Project 🢂 選 Scala/IDEA

### Simple IDEA Scala Maven Project
* File 🢂 New 🢂 Project 🢂 選 Maven 🢂 Project SDK 🢂 Next 🢂 ...finish
* Maven enable auto import
<div>
 {GoogleImage( 'google_file_id',  'idea_scala_maven_001.jpg')}
</div>
* pom.xml 設定\(直接Copy Eclipse端的設定)
* Add Framework Support : Project 🢂 右鍵 🢂 Add Framework Support 🢂 Scala
<div>
 {GoogleImage( 'google_file_id',  'idea_scala_maven_002.jpg')}
</div>
<div>
 {GoogleImage( 'google_file_id',  'idea_scala_maven_003.jpg')}
</div>
<div>
 {GoogleImage( 'google_file_id',  'idea_scala_maven_004.jpg')}
</div>
* 建立 pom.xml 中指定的 Source folder
* 設定資料夾屬性
    * Source Root: src/main/scala 🢂 右鍵 🢂 Mark Directory as 🢂 Sources Root
    * Test Source Root: src/test/scala 🢂 右鍵 🢂 Mark Directory as 🢂 Test Sources Root
<div>
 {GoogleImage( 'google_file_id',  'idea_scala_maven_005.jpg')}
</div>
<div>
 {GoogleImage( 'google_file_id',  'idea_scala_maven_006.jpg')}
</div>

* pom.xml

```xml
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