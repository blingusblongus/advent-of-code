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

        //Test the pObjs
        for (let field of reqFields) {
            //does it have all req'd fields?
            if (!pObj[field]) {
                valid = false;
                break;
            }

            //Validate the value according to the field
            let value = pObj[field];
            switch (field) {
                case 'byr':
                    if (!checkLength(value, 4) || !checkRange(value, 1920, 2002)) {
                        valid = false;
                    }
                    break;
                case 'iyr':
                    if (!checkLength(value, 4) || !checkRange(value, 2010, 2020)) {
                        valid = false;
                    }
                    
                    break;
                case 'eyr':
                    if (!checkLength(value, 4) || !checkRange(value, 2020, 2030)) {
                        valid = false;
                    }
                    break;
                case 'hgt':
                    let valArr = value.match(/\d+|(cm|in)/g);

                    if(valArr.length !== 2){
                        valid = false;
                    }else if(valArr[1] === 'cm' && !checkRange(valArr[0], 150, 193) ||
                        valArr[1] === 'in' && !checkRange(valArr[0], 59,76)){
                        valid = false;
                    }else if(!['cm', 'in'].includes(valArr[1])){
                        valid = false;
                    }
                    console.log(valArr);
                    break;
                case 'hcl':
                    let hclRegex = /^#[a-f0-9]{6}$/i;
                    if(!hclRegex.test(value)){
                        valid = false;
                    }
                    break;
                case 'ecl':
                    let colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
                    if(!colors.includes(value)){
                        valid = false;
                    }
                    break;
                case 'pid':
                    let pidRegex = /^\d{9}$/;
                    if(!pidRegex.test(value)){
                        valid = false;
                    }                 
                    break;   
            }

            if(!valid) console.log('rejected ', field);
        }

        if (valid) countValid++;
    }
    return countValid;
}

function checkLength(str, length) {
    return str.length === length;
}

function checkRange(str, min, max) {
    return min <= Number(str) && Number(str) <= max;
}

console.log(checkValidPassports(test)); // 2
console.log(checkValidPassports(full));