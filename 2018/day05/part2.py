from input import fullInput

# build dictionary of matching polymers
matches = {}
for i in range(26):
    letter = chr(97 + i)
    matches[letter] = letter.upper()
    matches[letter.upper()] = letter

def collapse_polymer(string):
    while True:
        altered = False
        for i in range(len(string) - 2):
            print("length: ", len(string))
            if string[i] == '\n' or string[i+1] == '\n':
                continue
            elif checkPolarity(string[i], string[i+1]):
                # string = string[:i] + string[i+2:]
                string = string.replace(string[i:i+2], '')
                altered = True
                break
        if altered: continue
        strLength = len(string.strip())
        return strLength
    pass

def checkPolarity(unit1, unit2):
    return True if unit2 == matches[unit1] else False

def checkRemoval(polymer):
    results = {}

    for key in matches:
        if key not in results:
            newPoly = polymer.replace(key, '')
            newPoly = newPoly.replace(matches[key], '')
            results[matches[key]] = collapse_polymer(newPoly)
    
    print(results)
    return min(results, key=results.get)




# print(collapse_polymer("dabAcCaCBAcCcaDA")) # dabCBAcaDA
print(checkRemoval(fullInput))

