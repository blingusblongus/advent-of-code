from input import fullInput

# build dictionary of matching polymers
matches = {}
for i in range(26):
    letter = chr(97 + i)
    matches[letter] = letter.upper()
    matches[letter.upper()] = letter


def collapse_polymer(str):
    pass

def checkPolarity(unit1, unit2):
    return False

print(collapse_polymer("dabAcCaCBAcCcaDA")) # dabCBAcaDA


