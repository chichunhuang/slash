---- 注意 體檢紀錄單等 會出現多次答案(123key, ND,NA......)



---koopa
--- 執行前後 koopa 保留 A
select rawanswertext, answer_id,qnumber,*  from 
	(
		select ab.barcode, q.qnumber 
		, q.text as q_text
		, q.questiontype as q_type
		, qo.answertype as qo_type
		, qo.sequence as qo_seq 
		, qo.text as qo_text  
		, qo.id as qo_id
		, qr.id as qr_id  
		, ans.rawanswertext  
		, ans.id answer_id
		from QuestionResponse qr 
		left join question q on q.id = qr.question_id
		left join questionoption qo on q.id = qo.question_id
		left join answer ans on qr.id = ans.question_response_id and ans.question_option_id = qo.id
		left join answerbook ab on ab.id = qr.answer_book_id
		left join crf crf on ab.crf_id=crf.id
		where 
		ab.barcode in( 
		'ALD276-LD',
'ALG115-LD',
'AKZ497-LD',
'AKZ867-LD',
'ALA196-LD',
'ALC396-LD',
'ALE912-LD',
'ALN839-LD',
'ALI798-LD',
'ALK298-LD',
'ALI667-LD',
'ALC543-LD',
'ALI669-LD',
'ALJ190-LD',
'ALJ347-LD',
'ALL098-LD',
'ALR764-LD'
		
		
		)
		order by ab.barcode 
		, substring(q.qnumber, 1, 1) 
		, case when q.qnumber like '%-%' then regexp_split_to_array( substring(q.qnumber, 3), '-')::int[] else array[0] end 
		, qo.id
	) qq
where qnumber in ( 'A-2', 'B-13-2', 'B-14-2')

order by barcode, qnumber;





--- 執行前後 koopa 保留 B
select rawanswertext, answer_id,qnumber,*  from 
	(
		select ab.barcode, q.qnumber 
		, q.text as q_text
		, q.questiontype as q_type
		, qo.answertype as qo_type
		, qo.sequence as qo_seq 
		, qo.text as qo_text  
		, qo.id as qo_id
		, qr.id as qr_id  
		, ans.rawanswertext  
		, ans.id answer_id
		from QuestionResponse qr 
		left join question q on q.id = qr.question_id
		left join questionoption qo on q.id = qo.question_id
		left join answer ans on qr.id = ans.question_response_id and ans.question_option_id = qo.id
		left join answerbook ab on ab.id = qr.answer_book_id
		left join crf crf on ab.crf_id=crf.id
		where 
		ab.barcode in( 
		'ALD276-LD',
'ALG115-LD',
'AKZ497-LD',
'AKZ867-LD',
'ALA196-LD',
'ALC396-LD',
'ALE912-LD',
'ALN839-LD',
'ALI798-LD',
'ALK298-LD',
'ALI667-LD',
'ALC543-LD',
'ALI669-LD',
'ALJ190-LD',
'ALJ347-LD',
'ALL098-LD',
'ALR764-LD'
		
		
		)
		order by ab.barcode 
		, substring(q.qnumber, 1, 1) 
		, case when q.qnumber like '%-%' then regexp_split_to_array( substring(q.qnumber, 3), '-')::int[] else array[0] end 
		, qo.id
	) qq
where rawanswertext ='mg/Dl' and qnumber in ( 'A-2', 'B-13-2', 'B-14-2')

order by barcode, qnumber;






---- Koopa ==== 更正答案  SQL

update answer set rawanswertext='mg/dL' where  rawanswertext='mg/Dl' and

id in (

17719310,
17719488,
17719399,
17719844,
17804519,
17804522,
17645636,
17719577,
17645725,
17753182,
17753179,
17804341,
17804344,
17719933,
17804430,
17804433,
17804163,
17804166,
17719755,
17804252,
17804255,
17719666,
17804074,
17804077



);
