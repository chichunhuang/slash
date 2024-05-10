---
title: Python 日期與時間
description: Python Date and Time
keywords: [Python,Date,Time]
---
import { CodeBlock, dracula  } from "react-code-blocks";

# Python 日期與時間

> 下面列出 Python 中時間處理範例  
> 需注意的是，Python 這邊即使是不同套件下  
> timestamp __精確值__ 大多都是到 __<span style={{color: '#0044FF'}}>微秒</span>__ ，  
> 且回傳的是 __秒為整數單位__，小數點後再接6~7位數  
> 主要使用的套件是 __<span style={{color: '#0044FF'}}>time</span>__ ,   __<span style={{color: '#0044FF'}}>datetime</span>__ , __<span style={{color: '#0044FF'}}>calendar</span>__ 
> 
> 當使用 time module 時需注意 struct_time 這個 meta class，是不同可表現時間的不同 types 的轉換媒介  
> 當使用 datetime module 時需注意 <class 'datetime.datetime'> 這個 class，是不同可表現時間的不同 types 的轉換媒介  



References : 
* [datetime](http://docs.python.org/library/datetime.html#module-datetime): 時間區間計算
* [calendar](https://www.runoob.com/python/python-date-time.html): 日期日曆相關
* [pytz](http://www.twinsun.com/tz/tz-link.htm): Time Zone
* [dateutil](http://labix.org/python-dateutil), https://dateutil.readthedocs.io/en/stable/



## Mindmap of time module 

![insect-totem-net_python_time_module.svg](/img/docs/python/insect-totem-net_python_time_module.svg "Python time module")



## Menu Links

|  主題  |                 | 套件 |
|----------|-----------------|----|
| [time 取微秒](#microsecond1)| UTC time/0時區 | time |
| [datetime 取微秒](#microsecond2)| UTC | datetime |
| [millisecond](#Millisecond)| 取毫秒, 微秒 | time | 
| [struct_time](#struct_time)| 拆解後的每個時間單位 | calendar, time | 
| [String to Date](#String_to_Date)|  |  | 
| [Float to Date](#Float_to_Date_datetime)|   | datetime |
| [Date Formatting](#Float_to_Date_datetime) : Date to String|  from datetime to String | datetime | 
| [Python Time Zone](#Time_Zone)|  | datetime, pytz | 


## __time package 取微秒__ <span id="microsecond1">&nbsp;</span>
* Coordinated Universal Time: UTC time, 世界協調時間

```python
import time
current_timestamp = time.time() # microsecond, <class 'float'>
print("Timestamp:", current_timestamp)

# Timestamp: 1715152590.437168
```

## __datetime package 取微秒__ <span id="microsecond2">&nbsp;</span>
* datetime.datetime.now()
* datetime.datetime.now(timezone)
* datetime.datetime.utcnow()


```python
import datetime
current_datetime = datetime.datetime.now() # <class 'datetime.datetime'>
print(current_datetime)
timestamp = current_datetime.timestamp() # microsecond, <class 'float'>
print("Timestamp:", timestamp)

# 2024-05-08 16:04:50.940161
# Timestamp: 1715155490.940161
```

```python
import datetime
utc_datetime = datetime.datetime.utcnow()
utc_timestamp = utc_datetime.timestamp()
print("UTC Timestamp:", utc_timestamp)
```

## __\* Structure Time__ <span id="struct_time">&nbsp;</span>
* GMT Greenwich Mean Time: 格林威治標準時間 <span style={{color: '#0044FF'}}> __time.gmtime()__ </span>
* Loacal Time: <span style={{color: '#0044FF'}}> __time.localtime()__ </span>
* struct_time 類別將時間拆解為:
    * tm_isdst: 夏令時間調整
    * tm_year, tm_mon, tm_mday, 
    * tm_hour, tm_min, tm_sec,
    * tm_wday, tm_yday

```python
import time
import calendar
time_tuple = time.gmtime() # <class 'time.struct_time'>
print("Time Structure:", time_tuple)
timestamp = calendar.timegm(time_tuple) # <class 'int'>
print("Timestamp:", timestamp)

# Time Structure: time.struct_time(tm_year=2024, tm_mon=5, tm_mday=8, tm_hour=7, tm_min=54, tm_sec=13, tm_wday=2, tm_yday=129, tm_isdst=0)
# Timestamp: 1715154853
```


## __Float to Date, Date to String__ : by datetime module <span id="Float_to_Date_datetime">&nbsp;</span>

```python
import datetime
timestamp = 1715155490.940161  # Example timestamp
datetime_object = datetime.datetime.fromtimestamp(timestamp)

print(type(datetime.datetime)) # <class 'type'>
print(type(datetime_object)) # <class 'datetime.datetime'>
print("Datetime:", datetime_object)

formatted_string = datetime_object.strftime("%Y-%m-%d %H:%M:%S")
print(type(formatted_string)) # <class 'str'>
print("Formatted Datetime:", formatted_string)
```



## __Millisecond, Microsecond__  <span id="Millisecond">&nbsp;</span>

```python
import time
current_timestamp = time.time() # <class 'float'>, 秒為單位, 精確至(小數下7位數)?
current_timestamp_milli = int(time.time() * 1000) # 轉毫秒, 去小數點後尾數
current_timestamp_sec = int(time.time()) # 取秒, 直接去小數點後尾數

print("Timestamp in microseconds:", current_timestamp)
print("Timestamp in milliseconds:", current_timestamp_milli)
print("Timestamp in Seconds:", current_timestamp_sec)
```


## __String to Date__  <span id="String_to_Date">&nbsp;</span>
* String to time_struct
* time_struct to float
* float to time_struct
* time_struct formatting

```python

date_string = '2024-05-08 10:11:12'
struct_time = time.strptime(date_string, "%Y-%m-%d %H:%M:%S") # <class 'time.struct_time'>
print(type(struct_time))  #<class 'time.struct_time'>

float_time = time.mktime(struct_time)
print(type(float_time)) #<class 'float'>

second_time = int(float_time) # truncate to sec
print(second_time) # 1715134272


struct_time_from_sec = time.localtime(second_time) # sceond to  struct_time
struct_time_from_sec_gm = time.gmtime(second_time) # 格林威治時間 (time.localtime -8hr)
print(type(struct_time_from_sec))  #<class 'time.struct_time'>


date2 = time.strftime( "%Y-%m-%d %H:%M:%S", struct_time_from_sec) # struct_time to String
print(date2) # 2024-05-08 10:11:12

```

## __Python Time Zone__  <span id="Time_Zone">&nbsp;</span>

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



## time module
> default UTC time  
> time_string = time.asctime(struct_time) : 將 struct_time 轉成 asc format : ex, Sun May 27 01:05:27 2018  
> asc_time_string = time.ctime(float) : 把浮點數轉成 asc time  
> struct_time = time.gmtime(num)  
> struct_time = time.localtime(num)  (UTC+8)  
> float=  time.mktime( struct_time )  
> formatted_string = datetime_object.strftime("%Y-%m-%d %H:%M:%S") # by instance  
> formatted_string = time.strftime(format, struct_time)  
> struct_time= time.strptime(formatted_string, format)  
> float = time.time() # UTC time  
> time.tzset() # 依據環境變數設定值，reset 程式時間  
