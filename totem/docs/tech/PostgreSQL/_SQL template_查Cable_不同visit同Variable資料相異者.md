
-- 清查ID 生日需校正的部分
select subject_code, 
     string_agg(follow, ',') as follows, 
     string_agg(main_sds, ',') as main_sdss,
     string_agg(raw_data->>'ID_BIRTH', ',') as ID_BIRTHs  
     from dataland_record  where subject_code in (
     
         select subject_code from 
            (select subject_code, 
                   string_agg(main_sds, ',') as main_sdss , 
                   raw_data->>'ID_BIRTH' as ID_BIRTH  
                   from dataland_record group by subject_code, ID_BIRTH order by subject_code
            ) tmp 
        group by subject_code having count(subject_code) >1) 
        
    group by subject_code order by subject_code;

    
-- 清查REAL 生日需校正的部分
select subject_code, 
     string_agg(follow, ',') as follows, 
     string_agg(main_sds, ',') as main_sdss,
     string_agg(raw_data->>'REAL_BIRTH', ',') as REAL_BIRTHs  
     from dataland_record  where subject_code in (
     
         select subject_code from 
            (select subject_code, 
                   string_agg(main_sds, ',') as main_sdss , 
                   raw_data->>'REAL_BIRTH' as REAL_BIRTH  
                   from dataland_record group by subject_code, REAL_BIRTH order by subject_code
            ) tmp 
        group by subject_code having count(subject_code) >1) 
        
    group by subject_code order by subject_code;
