---
title: Title for search engines; can be different from the actual heading
description: A short description of this page
image: a thumbnail image to be shown in social media cards
keywords: [keywords, describing, the main topics]
---

https://jira.ncgm.sinica.edu.tw/confluence/pages/viewpage.action?pageId=319665151



* HQL 預設可以使用常見的 length(), substring() 等 function, 其他的 function 不支援

* 這次是遇到題號排序的需求, 純 SQL 的做法如下

<code>

--使用 substring(), regexp_split_to_array() 做排序
WITH  temp (col) AS (VALUES ('A-1-1'), ('A-11-1'), ('A-2-1'), ('A-10-1'), ('A-2-11'), ('A-2-10'), ('A-12-10'), ('A-12-1') )
SELECT * FROM temp
order by substring(col, 1, 1)
, case when col like '%-%' then regexp_split_to_array( substring(col, 3), '-')::int[] else array[0] end

</code>


* 要在 HQL 使用需要修改設定
  * 在 Hibernate dialect 增加 function, 這裡是繼承 PostgreSQL94Dialect 來修改
  
<code>  

// 定義 "spilt_order_by()"
public class CustomPostgreSQL94Dialect extends PostgreSQL94Dialect {
    public CustomPostgreSQL94Dialect() {
        super();
        registerFunction("spilt_order_by", new SQLFunctionTemplate(
                StringType.INSTANCE,
                " case when ?1 like '%-%' then regexp_split_to_array( substring(?1, 3), '-')::int[] else array[0] end "));
    }
}
</code>  

* 讓 Hibernate 讀取新的 dialect  
<code>  

</code>  
-- applicationContext-hibernate.xml

 <property name="hibernateProperties">
    <props>
        <prop key="hibernate.dialect">
            koopa.answer.dao.CustomPostgreSQL94Dialect
        </prop>
        ...
    </props>
</property>
 
 
## 在 DAO 可直接使用 
<code>  
@Repository
public class QuestionResponseDAO extends GenericHibernateDAO<QuestionResponse> {
    @SuppressWarnings("unchecked")
    public List<QuestionResponse> findByAnswerBook(String barcode) {
        String hql = " from QuestionResponse qr join fetch qr.question q "
                + " join fetch qr.answerBook ab where ab.barcode = :barcode "
                + " order by substring(q.qNumber, 1, 1),  spilt_order_by(q.qNumber) ";
 
        return (List<QuestionResponse>) hibernateTemplate.findByNamedParam(hql,
                "barcode", barcode);
    }
}
</code>  

# reference files
* applicationContext-hibernate.xml
* CustomPostgreSQL94Dialect.java
* QuestionResponseDAO.java
* QuestionResponseDAOTest.java


