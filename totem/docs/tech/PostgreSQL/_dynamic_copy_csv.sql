CREATE OR REPLACE FUNCTION dynamic_copy_csv(_file    text
                                        , _tbl     text = 'tmp1'
										, _schema text = 'public'
                                        , _delim   varchar(1) = ','
										, _nodelim text = chr(127))
  RETURNS text AS
$func$
DECLARE
   row_ct int;
BEGIN
   -- create staging table for 1st row as single text column 
   CREATE TEMP TABLE tmp0(cols text) ON COMMIT DROP;

   -- fetch 1st row
   EXECUTE format($$COPY tmp0 FROM PROGRAM 'head -n1 %I | tr -d ''"''' WITH (DELIMITER %L)$$
                , _file, _nodelim);

   -- create actual temp table with all columns text
   EXECUTE (
      SELECT format('CREATE TABLE %I.%I(', _schema, _tbl)
          || string_agg(quote_ident(col) || ' text', ',')
--			|| string_agg(col || ' text', ',')
          || ')'
      FROM  (SELECT cols FROM tmp0 LIMIT 1) t
           --, unnest(string_to_array(t.cols, ',')) col
		   , unnest(string_to_array(t.cols, _delim)) col
      );

	EXECUTE (
      SELECT format('alter table %I.%I owner to groot', _schema, _tbl)
	  );

   -- Import data [, quote E'\b']
   EXECUTE format($$COPY %I.%I FROM %L WITH (FORMAT csv, HEADER, NULL '\N', DELIMITER %L)$$
                , _schema, _tbl, _file, _delim);

   GET DIAGNOSTICS row_ct = ROW_COUNT;
   
   RETURN format('create %I with %s rows.', _tbl, row_ct);
END
$func$  LANGUAGE plpgsql 
SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION dynamic_copy_csv(text, text, text, varchar(1), text) TO groot;

--use: 
--select * from dynamic_copy_csv('/media/data/100_observations/RCGRDADMACT.csv', 'RCGRDADMACT', 'cgmh_lk');

