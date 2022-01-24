import re
fhand = open('2018/day03/input.txt', 'r')
ftest = open('2018/day03/test.txt', 'r')

def getOverlapping(input):
    hashMap = {}

    #extract coords with helper function
    for line in input:
        claimData = parseClaim(line)

        # record a count for every square inch in claim coords
        for row in range(claimData['y'], claimData['y'] + claimData['height']):
            for column in range(claimData['x'], claimData['x'] + claimData['width']):
                # print(line, 'writing:', column, row);
                loc = str(row) + ',' + str(column)
                hashMap[loc] = hashMap.get(loc, 0) + 1

    #count the coords with more than one claim
    overlaps = 0
    for coord in hashMap:
        if hashMap[coord] > 1: overlaps += 1

    return overlaps

def parseClaim(claim):
    # use regex to extract starting coords, width, and height
    [x,y] = re.findall('(\d+),(\d+)', claim)[0]
    [width, height] = re.findall('(\d+)x(\d+)', claim)[0]

    return {
        'x': int(x),
        'y': int(y),
        'width': int(width),
        'height': int(height)
        }

# print(parseClaim('#1 @ 335,861: 14x10'))
print(getOverlapping(ftest))