const { test, full } = require('./input.js');

function checkValidPassports(input) {
    //parse string into array
    const passports = input.split(/\n{2}/g)
        .map(passport => passport.split(/\s|\n/g)
            .map(p => p.split(':')));

    //rules: must have all fields, but CID is optional
    const reqFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    let countValid = 0;
    
    //Transcribe the passport arrays into objects
    for (let passport of passports) {
        let pObj = {};
        let valid = true;

        //fill object with key/value pairs
        for (let pair of passport) {
            pObj[pair[0]] = pair[1];
        }

        //Test the pObjs for all the keys
        for (let field of reqFields) {
            if(!pObj[field]){
                valid = false;
                break;
            }
        }

        if(valid) countValid++;
    }
    return countValid;
}

console.log(checkValidPassports(test)); // 2
console.log(checkValidPassports(full));