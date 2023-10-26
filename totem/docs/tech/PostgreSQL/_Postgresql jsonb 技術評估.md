
https://jira.ncgm.sinica.edu.tw/confluence/pages/viewpage.action?pageId=309299932

先說結論: 

Postgresql 的 jsonb 欄位, 可以用 hibernate hql / jdbc sql 方式寫入 & 讀取
讀取方面, 目前可自動轉換成 java Map
寫入時, 使用 jackson 把 java 轉成 json , 預設會把 Date 型別轉成 millisecond 
測試10萬筆資料, 速度似乎還可以
所佔磁碟空間比傳統欄位大 ( 測試10萬筆資料 大約要563MB )
與其他 table 做 join, 可能速度會慢很多
 


 

讓 Java / Hibernate 支援 Postgresql jsonb 格式
測試環境: Postgresql 9.5, Hibernate 5.0.1, jackson 2.8.6

首先建立測試用的table

CREATE TABLE data_land_test (
id BIGSERIAL PRIMARY KEY,
subject_code character varying(15),
visit character varying(50),
sds_id character varying(25),
raw_data JSONB);
  
--會自動產生 sequence 'data_land_test_id_seq'
 

準備10萬筆測試資料   insert_data_land_test.sql

--簡化的範例
insert into data_land_test
select nextval('data_land_test_id_seq') as id
, (10000000 + i)::text as subject_code
, ( case when i%2 = 1 then 'Baseline' else 'Follow' end ) as visit
, upper(substring(md5(random()::text) from 1 for 5)) as sds_id
, (
'{ "健康參與者調查問卷":' || '{ "Release_No":' || (10000000 + i)::text || ...
' }' ||
', "體檢記錄單":' ||
'{ "MEASURE_POSE":' || trunc(2 * random()) || ...
' }' ||
', "肺功能資料":' ||
'{ "VC":' || trunc(2 * random()) || ...
' }' ||
', "長庚檢驗-基本項目":' ||
'{ "CREATE_Date":' || trunc(2 * random()) || ...
' }' ||
' }' 
  )::JSONB
as raw_data
FROM generate_series(1, 100000) i;
 

讓 hibernate 支援 json / jsonb 型別, 已經有網友整理好了  How to map JSON objects using generic Hibernate Types

新增 Maven 設定

    <!-- https://mvnrepository.com/artifact/com.vladmihalcea/hibernate-types-5 -->
    <dependency>
        <groupId>com.vladmihalcea</groupId>
        <artifactId>hibernate-types-5</artifactId>
        <version>2.2.0</version>
    </dependency>
    <!-- Jackson -->
    <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-annotations -->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-annotations</artifactId>
        <version>2.8.6</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-core -->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-core</artifactId>
        <version>2.8.6</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind -->
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.8.6</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.dataformat/jackson-dataformat-xml -->
    <dependency>
        <groupId>com.fasterxml.jackson.dataformat</groupId>
        <artifactId>jackson-dataformat-xml</artifactId>
        <version>2.8.6</version>
    </dependency>
 

目前看到的 hibernate 範例都已改用 annotation 設定

在 thor 專案內測試, 需要修改 applicationContext-hibernate.xml, 讓 hibernate 去讀 java 檔案內的 annotation
PostgreSQLDialect 升級到 => PostgreSQL94Dialect
    <prop key="hibernate.dialect">
      org.hibernate.dialect.PostgreSQL94Dialect
    </prop>
  
    <property name="packagesToScan" value="thor.acquisition.sds, thor.dataland"/>
 

對應的 java class: DatalandRecord.java   檔案下載

/* declare json types */
@TypeDefs({ @TypeDef(name = "json", typeClass = JsonStringType.class),
        @TypeDef(name = "jsonb", typeClass = JsonBinaryType.class) })
@Entity
@Table(name = "data_land_test")
public class DatalandRecord implements Serializable {
    /* allocationSize 預設為50, 必須設為1 */
    @Id
    @GeneratedValue(generator = "data_land_test_gen")
    @SequenceGenerator(name = "data_land_test_gen", sequenceName = "data_land_test_id_seq", allocationSize=1)
    @Column(name = "id", nullable = false)
    private Long id;
  
    @Column(name = "subject_code")
    private String subjectCode;
  
    @Column(name = "visit")
    private String visit;
  
    @Column(name = "sds_id")
    private String sdsId;
  
    @Type(type = "jsonb")
    @Column(name = "raw_data", columnDefinition = "jsonb")
    private Map<String, Map<String, Object>> data;
  
    DatalandRecord() {}
  
    public DatalandRecord(String subjectCode, String visit, String sdsId,
            Map<String, Map<String, Object>> data) {
        super();
        this.subjectCode = subjectCode;
        this.visit = visit;
        this.sdsId = sdsId;
        this.data = data;
    }
  
    // getter, setter...
 

測試:  DatalandRecordDAOTest.java

 

試著比較 jsonb 與傳統欄位所佔的空間差異

--100000 筆
select count(id) from data_land_test;
  
--563 MB
SELECT pg_size_pretty(pg_table_size('data_land_test'));
 
--data_land_test: 傳統欄位 + jsonb 欄位 (幾乎都是 integer 格式)
100000 筆 * (4 + 714) 個欄位 = 71,800,000, 用了 563 MB
 
--3030180 筆
select count(id) from sample;
  
--359 MB
SELECT pg_size_pretty(pg_table_size('sample'));
  
--sample: 傳統欄位
3030180 筆 * 12 個欄位 = 36,362,160, 用了 359 MB
  
 

新增 E 大題
增加 start_date, close_date

CREATE TABLE data_land_test (
id BIGSERIAL PRIMARY KEY,
subject_code character varying(15),
visit character varying(50),
sds_id character varying(25),
start_date timestamp,
close_date timestamp,
raw_data JSONB);
  
--會自動產生 sequence 'data_land_test_id_seq'
 

重新 insert 10萬筆資料   insert_data_land_test_with_e_part.sql

--variables: 1220
--cost 31:06 minutes
insert into data_land_test
select nextval('data_land_test_id_seq') as id
, (10000000 + i)::text as subject_code
, ( case when i%2 = 1 then 'Baseline' else 'Follow' end ) as visit
, upper(substring(md5(random()::text) from 1 for 5)) as sds_id
, (NOW() - '1 month'::interval * round(random() * 100)) as start_date
, (NOW() + '1 month'::interval * round(random() * 100)) as close_date
, (
'{ "健康參與者調查問卷":' || '{ "Release_No":' || (10000000 + i)::text || ...
' }' ||
', "體檢記錄單":' ||
'{ "MEASURE_POSE":' || trunc(2 * random()) || ...
' }' ||
', "肺功能資料":' ||
'{ "VC":' || trunc(2 * random()) || ...
' }' ||
', "長庚檢驗-基本項目":' ||
'{ "CREATE_Date":' || trunc(2 * random()) || ...
' }' ||
' }' 
  )::JSONB
as raw_data
FROM generate_series(1, 100000) i;
 

調查問卷有1079個 variable
--1079
select array_length(array_agg(OA.key), 1)
from (
select json_object_keys( to_json(raw_data -> '健康參與者調查問卷') ) as key
from data_land_test
where id = 1
) OA
 

硬碟空間增加了不少

--868 MB
SELECT pg_size_pretty(pg_table_size('data_land_test'));
  
--傳統欄位 + jsonb 欄位 (幾乎都是 integer 格式)
100000 筆 * (6 + 1220) 個欄位 = 122,600,000, 用了 868 MB
 

DataLand 下載資料, 在 jsonb 欄位 filter 出所需要的 variable   Dataland 下載畫面_20180308.docx
--傳入需要的 key, 對 jsonb 欄位做 filter
CREATE OR REPLACE FUNCTION jsonb_select_by_key(doc jsonb, keys text[])
RETURNS jsonb AS $$
  SELECT jsonb_object( ARRAY_AGG(d.key), ARRAY_AGG(d.value) )
  FROM jsonb_each_text(doc) d
  JOIN unnest(keys) k ON k = d.key;
$$ LANGUAGE SQL;
  
--how to use part 1:
select jsonb_select_by_key((raw_data -> '健康參與者調查問卷'), array['AGE','DRK','DYS','D_1','D_2','D_3','D_4','D_5'])
 from data_land_test test
where test.id = 1;
 
--how to use part 2:
select id, subject_code, visit, sds_id, start_date, close_date
, jsonb_select_by_key( (raw_data -> '健康參與者調查問卷'),
--subquery keys
(
select array(
 select t.key
  from data_land_test test, jsonb_each(raw_data -> '健康參與者調查問卷') t
 where id = 1 limit 50
 )
)
--
)
 from data_land_test test
 limit 10
 

 