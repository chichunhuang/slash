select distinct SDS_ID, rawanswertext, qnumber, answer_id, qo_text as desc, second_key as sceond_or_third
 from 
	(
		select 
		 substring(ab.barcode, 0, 7) as SDS_ID
		, q.qnumber 
		, q.text as q_text
		, q.questiontype as q_type
		, qo.answertype as qo_type
		, qo.sequence as qo_seq 
		, qo.text as qo_text  
		, qo.id as qo_id
		, qr.id as qr_id  
		, ans.rawanswertext  
		, ans.id answer_id
		, ab.id ab_id
		, key23.secondKey second_key
		from QuestionResponse qr 
		left join question q on q.id = qr.question_id
		left join questionoption qo on q.id = qo.question_id
		left join answer ans on qr.id = ans.question_response_id and ans.question_option_id = qo.id
		left join answerbook ab on ab.id = qr.answer_book_id
		left join answerbook_2key3key key23 on key23.id = qr.answerbook_2key3key_id
		left join crf crf on ab.crf_id=crf.id

where crf.id in (select id from crf where name like '體檢記錄單%')
		
		order by ab.barcode 
		, substring(q.qnumber, 1, 1) 
		, case when q.qnumber like '%-%' then regexp_split_to_array( substring(q.qnumber, 3), '-')::int[] else array[0] end 
		, qo.id
	) qq
where qnumber in ( 'H-1-1', 'H-1-2' ) and answer_id is not null 
--and second_key = true 
and SDS_ID = 'AMJ212'
order by SDS_ID, answer_id ;