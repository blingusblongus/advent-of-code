import itertools

fhand = open('2018/day02/input.txt', 'r')

def getSimilarIDs(input):

    ids = tuple(list(fhand))

    # compare all combinations
    for a,b in itertools.combinations(ids, 2):
        
        index = -1
        different = 0

        a = a.strip()
        b = b.strip()

        for letter in a:
            # break loop if more than one letter different
            if different > 1: break

            # check letter against same-index letter of b
            index += 1
            if letter != b[index]:
                different += 1
                differentIndex = index

        # if all letters are looped and one difference is found, return that
        if different == 1:
            #splice out the different letter
            return a[:differentIndex] + a[differentIndex + 1:]

    return 'not found'

print(getSimilarIDs(fhand))