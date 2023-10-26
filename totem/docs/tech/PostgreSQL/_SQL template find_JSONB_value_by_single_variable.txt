select subject_code, 
       follow, 
	   main_sds, 
	   raw_data->>'SURVEY_DATE' as SURVEY_DATE 
	   
	   from dataland_record 
	   
	   order by subject_code, follow, main_sds;



select subject_code, 
       follow, main_sds, 
       raw_data->>'SURVEY_DATE' as SURVEY_DATE 
       from dataland_record  where main_sds in( 'TPE140', 'RRR005' );