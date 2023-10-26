
--syntax:  select * from (query) alias
--alias 不可省略


select subject_code from 
            (select subject_code, 
                   string_agg(main_sds, ',') as main_sdss , 
                   raw_data->>'ID_BIRTH' as ID_BIRTH  
                   from dataland_record group by subject_code, ID_BIRTH order by subject_code
            ) tmp



			
