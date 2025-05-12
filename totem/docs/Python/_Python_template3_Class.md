---
title: sidebar menu link/ docs-map link
description: doc map link desc
keywords: [Python ,Tutorial]
---

https://github.com/apachecn/programiz-zh/tree/master/docs/py


```python

class Exam:
    # Python 的型別(冒號後面)僅只是 [提示]。所以應該自行檢查。
    def __init__(self, name: str, score: int, penalty: int):
        if not isinstance(name, str):
            raise TypeError('name should be str')
        self.score = score
        self.penalty = penalty
        self.name = name

    def win(self):
        self.score += 1

    def lose(self):
        self.penalty += 1

    def get_points(self):
        return self.score - self.penalty

    def display(self):
        return self.name + "-" + str(self.get_points())

exe1 = Exam("Tom", 80, 10)
exe2 = Exam("Jack", 95, 30)
exe3 = Exam("May", 60, 20)
exe1.win()
exe2.lose()

exams = [exe1, exe2, exe3]

def is_pass(exam: Exam):
    return exam.get_points() > 60

result = filter(is_pass, exams)
# result = filter(lambda exam: exam.get_points() > 60, exams)

for r in result:
    print(type(r), r.display())
# <class '__main__.Exam'> Tom-71
# <class '__main__.Exam'> Jack-64
```