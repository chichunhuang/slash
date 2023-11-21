---
title: Send Mail by Python smtplib
description: Send Mail by Python smtplib
keywords: [smtplib,Python,mail]
---

import { CodeBlock, dracula  } from "react-code-blocks";

* Python example: Send Mail
```python
import smtplib
from email.mime.text import MIMEText

mailFrom = 'doraemon+from@gmail.com'
mailTo = 'doraemon+to@gmail.com'

msg = MIMEText("test")
msg['Subject'] = 'Subject Test'
msg['From'] = mailFrom
msg['To'] = mailTo

s = smtplib.SMTP('mail.server.edf.org')
s.sendmail(mailFrom, [mailTo], msg.as_string())
s.quit()
```