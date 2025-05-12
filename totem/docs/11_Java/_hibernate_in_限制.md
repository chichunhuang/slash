---
title: Hibernate In Clause 限制
description: 
keywords: [in clause,hibernate]
---
## tmp table/ Nested select statement/ Using SELECT result in another SELECT
select where id in (select id from temptable)

SELECT name FROM (SELECT name FROM agentinformation) a


SELECT a.name FROM (SELECT name FROM agentinformation) a  



## with clause ??

## if criteria in JSON/JSONB ??

## ??

1. 下面方法只解決一個 in param, if multi-in-param with not-in-param....
2. Spring HQL named-params

Hibernate 支援的 in-collection 查詢最多只有1000個。例如有一個2000人的user清單，現在想找出 user table中不在此清單中的user，通常寫法是

from User u where u.username not in (:userList)

但是userList的長度不能超過1000，否則在執行期就會出錯。

所以只好用一個抽象類別，將userList切割開來查詢:

```java
abstract class QuerySplitter<T1, T2> {

    private int span;

    public abstract List<T2> doQuery(List<T1> queryParams);

    public QuerySplitter(int span) {
        this.span = span;
    }

    public List<T2> query(List<T1> queryParams) {
        List<T2> ret = Lists.newArrayList();
        int n = 0;

        while (true) {
            if (n + span > queryParams.size()) {
                ret.addAll(doQuery(queryParams.subList(n, queryParams.size())));
                break;
            }
            ret.addAll(doQuery(queryParams.subList(n, n += span)));
        }
        return ret;
    }
}

abstract class QuerySplitter2<T1, T2> {

    private int span;

    public abstract List<T2> doQuery(List<T1> queryParams);

    public QuerySplitter2(int span) {
        this.span = span;
    }

    public List<T2> query(List<T1> queryParams) {
        List<T2> ret = Lists.newArrayList();
        int n = 0;

        while (true) {
            if (n + span > queryParams.size()) {
                ret.addAll(doQuery(queryParams.subList(n, queryParams.size())));
                break;
            }
            ret.addAll(doQuery(queryParams.subList(n, n += span)));
        }
        return ret;
    }
}

//Example

List<User> foundUsers = new QuerySplitter2<String, User>(900) {
            @Override
            public List<User> doQuery(List<String> subUserNmaeList) {
                return userDAO.findUsersInNameList(subUserNmaeList);
            }
        }.query(fullUserNameList);
```

