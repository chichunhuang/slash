

#coding=utf8

import smtplib

from email.mime.text import MIMEText

mailFrom = 'doraemon+from@gmail.com'
mailTo = 'doraemon+to@gmail.com'

msg = MIMEText("test")
msg['Subject'] = 'Subject Test'
msg['From'] = mailFrom
msg['To'] = mailTo

s = smtplib.SMTP('gate.abc.edf.org')
s.sendmail(mailFrom, [mailTo], msg.as_string())
s.quit()