
-- pinokio
COPY  
(
select subject_code, global_id from subject
) 

to '/tmp/pinokio.csv' DELIMITER ',' CSV HEADER FORCE QUOTE * ;