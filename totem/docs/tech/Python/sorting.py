#!/usr/bin/env python
# coding: utf-8

# In[73]:



# import json
# import pandas as pd
# import time
import json
import pandas as pd
import datetime
import time
import numpy as np

import datetime
import time
import calendar



def dateFormatSURVEY_DATE(row):
    dateString = row['SURVEY_DATE']
    return dateFormat(dateString)


def dateFormatID_BIRTH(row):
    dateString = row['ID_BIRTH']
    return dateFormat(dateString)


def dateFormatREAL_BIRTH(row):
    dateString = row['REAL_BIRTH']
    return dateFormat(dateString)

def dateFormatDRAW_DATE(row):
    dateString = row['DRAW_DATE']
    return dateFormat(dateString)

def dateFormatMEAL_DATE(row):
    dateString = row['MEAL_DATE']
    return dateFormat(dateString)

def dateFormatIMAGE_DATE(row):
    dateString = row['IMAGE_DATE']
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
    
    
    
    
# filea : 離線資料
fileA = r'C:\Users\user\Anaconda-Python-Jupyter\Python_diff\filea.csv'
# fileb : 匯出資料
fileB = r'C:\Users\user\Anaconda-Python-Jupyter\Python_diff\fileb.csv'

outA ='DM_1.csv'
outB ='DLand_1.csv'


COLUM_NAME_SDS_ID ='SDS_ID'
ROW_COUNT = 0
errors =[]
equal_record =[]


print2('read_csv file DM 離線資料')
df_a = pd.read_csv(fileA, index_col=False, dtype=str)
df_a = df_a.replace({pd.np.nan: ''})
# Sort by given column's value
df_as = df_a.sort_values(by =[COLUM_NAME_SDS_ID]).copy()
# df_as = df_as.fillna('', inplace = True)

print2('read_csv file DL 匯出資料')
df_b = pd.read_csv(fileB, index_col=False, dtype=str)
df_b = df_b.replace({pd.np.nan: ''})
df_bs = df_b.sort_values(by =[COLUM_NAME_SDS_ID]).copy()
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
# bb=df_bs.copy()


print('re assign data')
for index in columns_of_a_and_b:
#     print(index)
    outputA[index] = df_as[index]
    outputB[index] = df_bs[index]
    

print('date formatting')
outputA["SURVEY_DATE"] = outputA.apply(dateFormatSURVEY_DATE, axis=1)
outputA["ID_BIRTH"] = outputA.apply(dateFormatID_BIRTH, axis=1)
outputA["REAL_BIRTH"] = outputA.apply(dateFormatREAL_BIRTH, axis=1)
outputA["DRAW_DATE"] = outputA.apply(dateFormatDRAW_DATE, axis=1)
outputA["MEAL_DATE"] = outputA.apply(dateFormatMEAL_DATE, axis=1)
outputA["IMAGE_DATE"] = outputA.apply(dateFormatIMAGE_DATE, axis=1)

print('date formatting2')
outputB["SURVEY_DATE"] = outputB.apply(dateFormatSURVEY_DATE, axis=1)
outputB["ID_BIRTH"] = outputB.apply(dateFormatID_BIRTH, axis=1)
outputB["REAL_BIRTH"] = outputB.apply(dateFormatREAL_BIRTH, axis=1)
outputB["DRAW_DATE"] = outputB.apply(dateFormatDRAW_DATE, axis=1)
outputB["MEAL_DATE"] = outputB.apply(dateFormatMEAL_DATE, axis=1)
outputB["IMAGE_DATE"] = outputB.apply(dateFormatIMAGE_DATE, axis=1)

print2('to file sorted_dm.csv')
outputA.to_csv(outA, index= False)
print2('to file sortted_DL_output.csv')
outputB.to_csv(outB, index= False)
print2('End')


# removes = ['SDS_ID2', 'SDS_ID3']
# q_df.drop(removes, axis=1, inplace=True)


# In[ ]:




