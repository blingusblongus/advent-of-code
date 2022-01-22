import re
input = open('./2018/day01/input.txt', 'r')

def findRepeat(input):
    freq = 0
    visitedFreqs = set()
    visitedFreqs.add(0)

    #handle test input (horizontal, with commas)
    if type(input) is str and re.search(',', input):
        input = input.split(', ')

    #loop until repeated frequency
    while(True):
        for line in input:
            freq = freq + int(line)
            # print(freq)
            if freq not in visitedFreqs:
                visitedFreqs.add(freq)
            else: 
                return 'answer ' + str(freq)
        # print(visitedFreqs)


print(findRepeat(input)) 
# print(findRepeat('+1, -1')) # 0
# print(findRepeat('+3, +3, +4, -2, -4')) # 10
# print(findRepeat('-6, +3, +8, +5, -6')) # 5
# print(findRepeat('+7, +7, -2, -7, -4')) # 14
