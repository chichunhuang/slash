---
title: Python 日期與時間
description: Python Date and Time
keywords: [Python,Date,Time]
---
import { CodeBlock, dracula  } from "react-code-blocks";


reference
https://flexiple.com/python/python-timestamp



```python
import time
current_timestamp = time.time()
print("Timestamp:", current_timestamp)

```

```python
import datetime
current_datetime = datetime.datetime.now()
timestamp = current_datetime.timestamp()
print("Timestamp:", timestamp)
```

```python
import datetime
current_datetime = datetime.datetime.now()
timestamp = current_datetime.timestamp()
print("Timestamp:", timestamp)
```

```python
import calendar
time_tuple = time.gmtime()
timestamp = calendar.timegm(time_tuple)
print("Timestamp:", timestamp)
```

```python
import datetime
timestamp = 1644916516.3435678  # Example timestamp
datetime_object = datetime.datetime.fromtimestamp(timestamp)
print("Datetime:", datetime_object)
```

```python
formatted_datetime = datetime_object.strftime("%Y-%m-%d %H:%M:%S")
print("Formatted Datetime:", formatted_datetime)
```

```python
import datetime
timestamp = 1644916516.3435678  # Example timestamp
formatted_string = datetime.datetime.fromtimestamp(timestamp).strftime("%Y-%m-%d %H:%M:%S")
print("Formatted Timestamp:", formatted_string)

```

```python
import time
current_timestamp_ms = int(time.time() *

 1000)
print("Timestamp in milliseconds:", current_timestamp_ms)
```

```python
import datetime
current_datetime = datetime.datetime.now()
current_timestamp_ms = int(current_datetime.timestamp() * 1000)
print("Timestamp in milliseconds:", current_timestamp_ms)
```

```python

#UTC time
import time
import calendar
utc_time_tuple = time.gmtime()
utc_timestamp = calendar.timegm(utc_time_tuple)
print("UTC Timestamp:", utc_timestamp)
```

```python
import datetime
utc_datetime = datetime.datetime.utcnow()
utc_timestamp = utc_datetime.timestamp()
print("UTC Timestamp:", utc_timestamp)
```

```python
import datetime
import pytz
# Define the timezone
desired_timezone = pytz.timezone('America/New_York')
# Create a datetime object with the desired timezone
datetime_with_timezone = datetime.datetime.now(desired_timezone)
# Convert the datetime object to a timestamp
timestamp = datetime_with_timezone.timestamp()
print("Timestamp with Different Timezone:", timestamp)
```

```python
import datetime
integer_timestamp = 1644916516  # Example integer timestamp
datetime_object = datetime.datetime.fromtimestamp(integer_timestamp)
print("Datetime from Integer Timestamp:", datetime_object)
```

```python
formatted_datetime = datetime_object.strftime("%Y-%m-%d %H:%M:%S")
print("Formatted Datetime:", formatted_datetime)
```

```python
```

```python
```

```python
```

```python
```

```python
```
