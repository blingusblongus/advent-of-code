import re
fhand = open('2018/day03/input.txt', 'r')
ftest = open('2018/day03/test.txt', 'r')

def getOverlapping(input):
    hashMap = {}
    candidates = {}

    #extract coords with helper function
    for line in input:
        claimData = parseClaim(line)
        # add a list of all the claims and their eligibility
        candidates[claimData['claimNum']] = True

        # record a count for every square inch in claim coords
        for row in range(claimData['y'], claimData['y'] + claimData['height']):
            for column in range(claimData['x'], claimData['x'] + claimData['width']):
                loc = str(row) + ',' + str(column)
                if loc in hashMap:
                    hashMap[loc] = hashMap[loc] + [claimData['claimNum']]
                    hashMap[loc][0] += 1
                else:
                    hashMap[loc] = [1, claimData['claimNum']]

    # review all the coords, and disqualify candidates if overal
    for coord in hashMap:
        if hashMap[coord][0] > 1:
            for num in hashMap[coord][1:]:
                candidates[num] = False
            
    return filter(lambda c: candidates[c] == True, candidates)

def parseClaim(claim):
    # use regex to extract starting coords, width, and height
    claimNum = re.findall('#\d+', claim)[0]
    [x,y] = re.findall('(\d+),(\d+)', claim)[0]
    [width, height] = re.findall('(\d+)x(\d+)', claim)[0]

    return {
        'claimNum': claimNum,
        'x': int(x),
        'y': int(y),
        'width': int(width),
        'height': int(height)
        }

# print(parseClaim('#1 @ 335,861: 14x10'))
# print(getOverlapping(ftest))
print(getOverlapping(fhand))