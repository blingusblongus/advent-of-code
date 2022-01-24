import datetime
import re

fInput = open('2018/day04/input.txt', 'r')
fTest = open('2018/day04/test.txt', 'r')

def processSleepData(input):
    
    entries = []
    for line in input:
        entries += [parseSleepData(line)]

    # sort entries by date
    entries = sorted(
        entries, key=lambda x: (
            x['year'], 
            x['month'],
            x['day'],
            x['minute']))
    # print(entries)

    guards = {}
    curGuard = 0
    sleep = 0
    wake = 0
    for entry in entries:
        if 'guardNum' in entry:
            curGuard = entry['guardNum']
        if entry['status'] == 'falls':
            sleep = entry['minutes']



def parseSleepData(log):
    date = re.findall('\[(.*?) ', log)[0]
    [year, month, day] = date.split('-');
    times = re.findall(' (.*):(.*)]', log)[0]
    status = re.findall('] (.*?) ', log)[0]

    data = {
        'year': int(year),
        'month': int(month),
        'day': int(day),
        'hours': int(times[0]),
        'minute': int(times[1]),
        'status': status
    }

    if status == 'Guard':
        data['guardNum'] = int(re.findall('#(.*?) ', log)[0])

    return data

print(processSleepData(fTest))
# print(processSleepData(fInput))