input = open('./2018/day01/input.txt', 'r')

def sumFreqs(input):
    count = 0
    for line in input:
        count += int(line)
    return count

print(sumFreqs(input)) # 445