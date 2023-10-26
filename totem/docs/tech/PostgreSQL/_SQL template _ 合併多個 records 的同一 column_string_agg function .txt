select subject_code, 
       string_agg(follow, ',') as follows, 
	   string_agg(main_sds, ',') as main_sdss  
	   from dataland_record 
	   group by subject_code;





-- 包含取 JSONB values
select subject_code, 
       string_agg(follow, ',') as follows, 
	   string_agg(main_sds, ',') as main_sdss, 
	   string_agg(raw_data->>'SURVEY_DATE', ',') as SURVEY_DATEs  
	   
	   from dataland_record 
	   
	   where subject_code in ('10014227', '10006801', '10000001') 
	   
	   group by subject_code;