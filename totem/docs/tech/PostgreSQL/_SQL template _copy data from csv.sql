\encoding UTF8
\timing on
\copy dataland_record(old_code, main_sds, sub_sdss, follow, acq_date, raw_data) FROM 'output.csv' DELIMITER ',' CSV HEADER ENCODING 'UTF8';
\timing off