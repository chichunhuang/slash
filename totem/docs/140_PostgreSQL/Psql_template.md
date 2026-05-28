---
title: psql 範例
description: psql 範例
keywords: [psql,SQL Shell,PostgreSQL]
---

# Create function 結構範例

* __GenUpdateAddressFunction.sql__ 
* 用來執行主要邏輯的 update_address function 封裝

```psql
    \encoding UTF8
    
    CREATE OR REPLACE FUNCTION update_address(_file text) 
        RETURNS text AS 
        $func$
    DECLARE
        v_start_time timestamp;
        v_end_time   timestamp;
        
    
    
    BEGIN
        v_start_time := clock_timestamp();
    
        RAISE NOTICE 'UPDATE START TIME = %', v_start_time;
    
    DROP TABLE IF EXISTS tmp_source;
    
    CREATE TABLE tmp_source (
        s_address varchar(255),
        s_fullname varchar(255)
     );
    
    -- Compose script String, then EXECUTE
    -- Use function argument to generate script
     EXECUTE format($$copy tmp_source(s_address, s_fullname ) FROM '%s' WITH (FORMAT csv, HEADER true) $$ , _file);
    
    ANALYZE tmp_source;
    
    -- Execute script directly
     UPDATE student d
      SET address = t.s_address 
      FROM (select  s_fullname,  s_address from tmp_source ) t
      WHERE d.fullname = t.s_fullname;
    
    
    
        v_end_time := clock_timestamp();
    
        RAISE NOTICE 'UPDATE END TIME   = %', v_end_time;
    
        RAISE NOTICE 'TOTAL ELAPSED     = %', v_end_time - v_start_time;
    
        DROP TABLE IF EXISTS tmp_source;
        
        return 'finished';
    END
    $func$ LANGUAGE plpgsql 
    SECURITY DEFINER;
    
    GRANT EXECUTE ON FUNCTION update_address(text) TO insect;
    GRANT EXECUTE ON FUNCTION update_address(text) TO totem;

```

* __ExecuteUpdateAddress.sql__ 
* 驅動執行主要邏輯的 function 的指令封裝
* update_address

```
    \encoding UTF8
    \timing on
    select update_address('D:\tmp\data-1779690101035_utf8_test.csv');
    \timing off
```


* 在 SQL shell 執行 function 建立

```
insect# \i 'file/path/to/GenUpdateAddressFunction.sql'

insect# \i 'file/path/to/ExecuteUpdateAddress.sql'

```

# Do in PgAdmin 結構範例
* 由 admin 於 PgAdmin 執行

```
DO $$
    DECLARE
        v_start_time timestamp;
        v_end_time   timestamp;
    
    BEGIN
        v_start_time := clock_timestamp();
    
        RAISE NOTICE 'UPDATE START TIME = %', v_start_time;
    
    DROP TABLE IF EXISTS tmp_source;
    
    CREATE TABLE tmp_source (
        s_address varchar(255),
        s_fullname varchar(255)
     );
    
    copy tmp_source(s_address, s_fullname ) FROM 'path/to/name_address_pairs.csv' WITH (FORMAT csv, HEADER true);
    
    ANALYZE tmp_source;
    
    UPDATE student d
      SET address = t.s_address 
      FROM (select  s_address,  s_fullname from tmp_source ) t
      WHERE d.fullname = t.s_fullname;
    
        v_end_time := clock_timestamp();
    
        RAISE NOTICE 'UPDATE END TIME   = %', v_end_time;
    
        RAISE NOTICE 'TOTAL ELAPSED     = %', v_end_time - v_start_time;
    
        DROP TABLE IF EXISTS tmp_source;
    END $$;
```