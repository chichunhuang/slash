

#coding=utf8

import smtplib

from email.mime.text import MIMEText

mailFrom = 'ickxlin+from@gmail.com'
mailTo = 'ickxlin+to@gmail.com'

msg = MIMEText("test")
msg['Subject'] = 'Subject Test'
msg['From'] = mailFrom
msg['To'] = mailTo

s = smtplib.SMTP('gate.sinica.edu.tw')
s.sendmail(mailFrom, [mailTo], msg.as_string())
s.quit()