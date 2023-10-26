CREATE OR REPLACE FUNCTION public.export_dataland_record(output_file text)
  RETURNS text AS
$BODY$ 
	DECLARE row_ct int; sql_not_native text; p_keys text; output_key text; final_query_str text; 
	
	BEGIN 
		SET work_mem = '256MB'; 
		set maintenance_work_mem = '1GB'; 
		
		drop table if exists tmp_dataland_info; 
		drop table if exists tmp_dataland_data;
		drop table if exists tmp_export_data_id;  
		
		analyze temp_variable; 
		analyze temp_forbidden_subject; 
		analyze temp_sql_not_native; 
		analyze temp_export_project;  
		
		select sql into sql_not_native from temp_sql_not_native order by id limit 1;  
		
		execute 
			' create table tmp_export_data_id as ' || 
			' select id from dataland_record where project_id in ( select id from project where code in ' || 
			' ( select code from temp_export_project order by id limit 1 ) ) ' || 
			' and subject_code not in ( select subject_code from temp_forbidden_subject ) ' || sql_not_native;  
			
		alter table tmp_export_data_id owner to cable;  
		analyze tmp_export_data_id;  
		
		create table tmp_dataland_info as 
		   
		   select id , 
			subject_code as "SUB_ID" , 
			main_sds as "SDS_ID" , 
			(case when sub_sdss is not null then split_part(sub_sdss, ',', 1) else null end ) as "SDS_ID2" , 
			(case when sub_sdss is not null then REPLACE(sub_sdss, (split_part(sub_sdss, ',', 1) || ','), '') else null end ) as "SDS_ID3" , 
			follow as "FOLLOW" , 
			(case when crf_qn is not null and crf_qn <> '' then crf_qn else null end) as "CRF_NAME_QN" , 
			to_char(acq_date, 'yyyy/mm/dd') as "SURVEY_DATE" 
				from dataland_record 
				where id in ( select id from tmp_export_data_id ) order by id;  
		
		GET DIAGNOSTICS row_ct = ROW_COUNT;  		
		alter table tmp_dataland_info owner to cable;  
		CREATE INDEX idx_tmp_dataland_info_id ON tmp_dataland_info(id);  
		analyze tmp_dataland_info;  
		
		execute 
			' create table tmp_dataland_data(id, key, value) as ' || 
			' select id, t.key as key, t.value as value ' || 
			' from dataland_record q, jsonb_each_text(raw_data) t ' || 
			' where q.id in ( select id from tmp_export_data_id ) ';  
			
		alter table tmp_dataland_data owner to cable;  
		CREATE INDEX idx_tmp_dataland_data ON tmp_dataland_data(id);  
		analyze tmp_dataland_data;  
		
		select string_agg( format('max( case when key = ''%s'' then value else null end ) as "%s"',var, var), ',') into 
		    p_keys from temp_variable where var not in ( 'SUB_ID','SDS_ID','SDS_ID2','SDS_ID3','FOLLOW','CRF_NAME_QN','SURVEY_DATE' );  
		
		p_keys := 'id,' || p_keys;  
		
		select string_agg( format('"%s"',var), ',') into output_key from temp_variable;  
			final_query_str := 'select ' || output_key || ' from ( select * from tmp_dataland_info info join (' || ' ( select ' || p_keys || ' from tmp_dataland_data group by id ) ' || ' ) data_1 on info.id = data_1.id ' || ' where info.id in ( select id from tmp_export_data_id ) ' || ' order by info.id ) q';  
			
			EXECUTE format($$COPY (%s) TO %L DELIMITER ',' CSV HEADER FORCE QUOTE * $$ , final_query_str, output_file);  
			drop table if exists temp_variable; 
			drop table if exists temp_forbidden_subject; 
			drop table if exists temp_sql_not_native; 
			drop table if exists temp_export_project; 
			drop table if exists tmp_dataland_info; 
			drop table if exists tmp_dataland_data; 
			drop table if exists tmp_export_data_id;  
			
			RETURN format('total: %s rows.', row_ct);  
			
		EXCEPTION WHEN OTHERS THEN  raise notice '% %', SQLERRM, SQLSTATE;  
	
	END 

$BODY$
  LANGUAGE plpgsql VOLATILE SECURITY DEFINER
  COST 100;
ALTER FUNCTION public.export_dataland_record(text)
  OWNER TO postgres;
GRANT EXECUTE ON FUNCTION public.export_dataland_record(text) TO public;
GRANT EXECUTE ON FUNCTION public.export_dataland_record(text) TO postgres;
GRANT EXECUTE ON FUNCTION public.export_dataland_record(text) TO cable;
