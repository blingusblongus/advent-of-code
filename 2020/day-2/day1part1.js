const {test, full} = require('./input.js');

function validatePasswords(input){
    let goodPasswordCount = 0;
    //map each line into an object with the password rules
    const arr = input.split(/\n\s*/g).map(line => {
        let obj = {};
        let minMax, letter;

        [minMax, letter, obj.password] = line.split(/\s/g);
        
        //set min and max
        [obj.min, obj.max] = minMax.split('-').map(num => Number(num));

        //trim the colon off the letter
        obj.letter = letter[0];
        
        return obj;
    });


    //validate
    for(let pass of arr){
        //count number of specified letter
        let count = pass.password
                        .split('')
                        .filter(letter => letter === pass.letter)
                        .length;

        // check against max and min to validate
        if(count >= pass.min && count <= pass.max){
            goodPasswordCount++;
        }
    }

    return goodPasswordCount;
}

console.log(validatePasswords(test)); // 2
console.log(validatePasswords(full));