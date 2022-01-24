import datetime
import re
from sqlite3 import Date

fInput = open('2018/day04/input.txt', 'r')
fTest = open('2018/day04/test.txt', 'r')

def processSleepData(input):
    
    for line in input:
        print(parseSleepData(line))

def parseSleepData(log):
    date = re.findall('\[(.*?) ', log)[0]
    times = re.findall(' (.*):(.*)]', log)[0]
    status = re.findall('] (.*?) ', log)[0]
    print(times)

    return {
        'date': datetime.date(date, '%Y-%b-%d'),
        'hours': int(times[0]),
        'minute': int(times[1]),
        'status': status
    }

print(processSleepData(fTest))