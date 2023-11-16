
INSERT INTO table2 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table1
WHERE condition;


* Copy all columns 
INSERT INTO table2
SELECT * FROM table1
WHERE condition;


insert into committee values (nextval('seq_committee'), '委員會2',
(select id from xxxxxxxx_user where email = 'uuuuuuu.cm1@gmail.com'),
(select id from xxxxxxxx_user where email = 'uuuuuuu.cm2@gmail.com'));