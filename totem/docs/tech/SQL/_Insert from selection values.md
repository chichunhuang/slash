
insert into committee values (nextval('seq_committee'), '委員會2',
(select id from justitia_user where email = 'ickxlin.cm1@gmail.com'),
(select id from justitia_user where email = 'ickxlin.cm2@gmail.com'));