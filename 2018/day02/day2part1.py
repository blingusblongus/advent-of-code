fhand = open('2018/day02/input.txt', 'r')

def getChecksum(input):

    twos = 0
    threes = 0

    for line in input:
        # print(line.rstrip())
        counts = {}
        twoCount = False
        threeCount = False

        for letter in line.rstrip():
            counts[letter] = counts.get(letter, 0) + 1
        # print(counts)

        # determine if the line has at least one twoCount and/or threeCount
        for letter in counts:
            if counts[letter] == 2: twoCount = True
            if counts[letter] == 3: threeCount = True
            if twoCount and threeCount: break
 
        if twoCount: twos = twos + 1
        if threeCount: threes = threes + 1

    # print('Twos:', twos, 'Threes:', threes)
    return twos * threes

print(getChecksum(fhand))