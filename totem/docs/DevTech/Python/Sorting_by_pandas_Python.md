---
title: Python-Sorting by pandas
description: Python - Sorting and Parsing CSV  
keywords: [python,pandas,sort,parse,dateformat]
---


```python

import json
import pandas as pd
import datetime
import time
import numpy as np

import datetime
import time
import calendar

def dateFormatID_BIRTH(row):
    dateString = row['ID_BIRTH']
    return dateFormat(dateString)

def dateFormat_XXXX(row):
    dateString = row['XXXX']
    return dateFormat(dateString)

def dateFormatWithColumn(row, column):
    dateString = row[column]
    return dateFormat(dateString)
    
def dateFormat(dateString): 
    if '' == dateString or None == dateString:
        return ''
    else:
        d = datetime.datetime.strptime(dateString, "%Y/%m/%d")
        r = d.strftime("%Y/%m/%d")
        return r

def print2(msg):
    print(datetime.datetime.now(), end=' =>  ')
    print(msg)

def print3(msg):
    print(datetime.datetime.now())
    print(msg)
    print('')
    
def printType(obj):
    print(type(obj)) 
    
    
    
    
# filea : 離線資料 A
fileA = r'C:\Users\user\Anaconda-Python-Jupyter\Python_diff\filea.csv'

# fileb : 匯出資料 B
fileB = r'C:\Users\user\Anaconda-Python-Jupyter\Python_diff\fileb.csv'

outA ='outA.csv'
outB ='outB.csv'


COLUM_NAME_ID_BIRTH ='ID_BIRTH'
ROW_COUNT = 0
errors =[]
equal_record =[]


print2('read_csv file A 離線資料')
df_a = pd.read_csv(fileA, index_col=False, dtype=str)
df_a = df_a.replace({pd.np.nan: ''})

# Sort by given column's value
df_as = df_a.sort_values(by =[COLUM_NAME_ID_BIRTH]).copy()
# df_as = df_as.fillna('', inplace = True)

print2('read_csv file B 匯出資料')
df_b = pd.read_csv(fileB, index_col=False, dtype=str)
df_b = df_b.replace({pd.np.nan: ''})
df_bs = df_b.sort_values(by =[COLUM_NAME_ID_BIRTH]).copy()
# df_bs =df_bs.fillna('', inplace = True)
print2('read_csv stop')


columns_of_a = list(df_as.columns)
columns_of_b = list(df_bs.columns)

columns_of_a_and_b = list(set(columns_of_a).intersection(set(columns_of_b)))

# print(columns_of_a_and_b)
columns_of_a_and_b.sort()


print('columns intersection')
# print(columns_of_a_and_b)

outputA = pd.DataFrame({})
outputB = pd.DataFrame({})
# aa = df_as.copy()
# bb = df_bs.copy()


print('re assign data')
for index in columns_of_a_and_b:
#   print(index)
    outputA[index] = df_as[index]
    outputB[index] = df_bs[index]
    

print('date formatting')
outputA["ID_BIRTH"] = outputA.apply(dateFormatID_BIRTH, axis=1)
outputA["XXXX"] = outputA.apply(dateFormat_XXXX, axis=1)


print('date formatting2')
outputB["ID_BIRTH"] = outputB.apply(dateFormatID_BIRTH, axis=1)
outputB["XXXX"] = outputB.apply(dateFormat_XXXX, axis=1)

print2('to file sorted_from.csv')
outputA.to_csv(outA, index= False)
print2('to file sorted_output.csv')
outputB.to_csv(outB, index= False)
print2('End')


# removes = ['YYYY', 'ZZZZ']
# q_df.drop(removes, axis=1, inplace=True)

```
