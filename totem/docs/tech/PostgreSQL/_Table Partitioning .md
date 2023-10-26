---
title: Title for search engines; can be different from the actual heading
description: A short description of this page
image: a thumbnail image to be shown in social media cards
keywords: [keywords, describing, the main topics]
---



## 【Table Partitioning 】
[https://jira.ncgm.sinica.edu.tw/confluence/pages/viewpage.action?spaceKey=~teddyyen&title=Table+Partitioning+in+Postgres+10]


* Table Partitioning 
  *  在10之前的做法是用 table Inheritance, 要自己寫 rule, trigger
  * PostgreSQL 10 新增 declarative partitioning table, 分為2種
     * Range Partitioning
     * List Partitioning
  * 可以做到 multi-dimensional partitioning (也就是切了再切) 

* 目前的限制 (PostgreSQL 11 可能會提供)
  * table / index 要自己建立
  * 不支援 primary keys / foreign keys 
  
## 測試:
sql script

<code>
--pk is not supported
create table partition_table_test (
    id int8 not null,
    log_date timestamp not null,
    log_user_name varchar(50) not null,
    event varchar(100) not null
) PARTITION BY RANGE (log_date);
 
create sequence seq_partition_table_test start 1 increment 1;
     
CREATE TABLE partition_table_test_2018q1 PARTITION OF partition_table_test
    FOR VALUES FROM ('2018-01-01') TO ('2018-03-31');
     
CREATE TABLE partition_table_test_2018q2 PARTITION OF partition_table_test
    FOR VALUES FROM ('2018-04-01') TO ('2018-06-30');
     
CREATE TABLE partition_table_test_2018q3 PARTITION OF partition_table_test
    FOR VALUES FROM ('2018-07-01') TO ('2018-09-30');
     
CREATE TABLE partition_table_test_2018q4 PARTITION OF partition_table_test
    FOR VALUES FROM ('2018-10-01') TO ('2018-12-31');
     
CREATE INDEX ON partition_table_test_2018q1 (log_date);
CREATE INDEX ON partition_table_test_2018q2 (log_date);
CREATE INDEX ON partition_table_test_2018q3 (log_date);
CREATE INDEX ON partition_table_test_2018q4 (log_date);
  
--insert & query
insert into partition_table_test (id, log_date, log_user_name, event)
    values (nextval('seq_partition_table_test'), '2018-01-01',
            substring(md5(random()::text) from 1 for 10), substring(md5(random()::text) from 1 for 10));
  
select * from partition_table_test
select * from partition_table_test_2018q1;
select * from partition_table_test_2018q2;
select * from partition_table_test_2018q3;
select * from partition_table_test_2018q4;

</code>

## Java code
<code>
package thor.partition;
import java.util.Date;
import org.bioinfo.util.persist.AbstractPersistentObject;
public class PartitionTableTest
        extends AbstractPersistentObject<PartitionTableTest> {
    private Date logDate;
 
    private String logUserName;
 
    private String event;
 
    PartitionTableTest() {}
 
    public PartitionTableTest(Date logDate, String logUserName, String event) {
        super();
        this.logDate = logDate;
        this.logUserName = logUserName;
        this.event = event;
    }
    void setLogDate(Date logDate) {
        this.logDate = logDate;
    }
    void setLogUserName(String logUserName) {
        this.logUserName = logUserName;
    }
    public Date getLogDate() {
        return logDate;
    }
    public String getLogUserName() {
        return logUserName;
    }
    public String getEvent() {
        return event;
    }
    void setEvent(String event) {
        this.event = event;
    }
}

</code>

## hbm
<code>
<?xml version="1.0"?>
<!DOCTYPE hibernate-mapping PUBLIC
        "-//Hibernate/Hibernate Mapping DTD 3.0//EN"
        "http://www.hibernate.org/dtd/hibernate-mapping-3.0.dtd">
<hibernate-mapping package="thor.partition" default-access="field">
    <class name="PartitionTableTest" table="partition_table_test" lazy="true"
        select-before-update="true">
        <id name="id">
            <generator class="sequence">
                <param name="sequence_name">seq_partition_table_test</param>
            </generator>
        </id>
  
        <property name="logDate" column="log_date" not-null="true" />
         
        <property name="logUserName" column="log_user_name" length="50" not-null="true" />
  
        <property name="event" column="event" length="100" not-null="true" />
         
    </class>
</hibernate-mapping>

</code>

## maintance
<code>

--remove
DROP TABLE partition_table_test_2018q4;
 
--detach
ALTER TABLE partition_table_test DETACH PARTITION partition_table_test_2018q4;
  
--attach
ALTER TABLE partition_table_test ATTACH PARTITION partition_table_test_2019q1;
</code>


## reference
* [Postgresql 10 官網 ](https://www.postgresql.org/docs/10/static/ddl-partitioning.html)
* [scaling-partitioning-data-postgresql-10-explained](https://blog.timescale.com/scaling-partitioning-data-postgresql-10-explained-cd48a712a9a1)

