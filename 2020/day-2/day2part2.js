const {test, full} = require('./input.js');

function validatePasswords(input){
    let goodPasswordCount = 0;
    //map each line into an object with the password rules
    const arr = input.split(/\n\s*/g).map(line => {
        let obj = {};
        let options, letter;

        [options, letter, obj.password] = line.split(/\s/g);
        
        //set options (with zero index)
        [obj.firstOption, obj.secondOption] = options.split('-').map(num => Number(num) - 1);

        //trim the colon off the letter
        obj.letter = letter[0];
        
        return obj;
    });

    // console.log(arr);


    //validate
    for(let pass of arr){
        // console.log(pass);
        //count number of specified letter
        if(
            //first matches, second doesn't
            (pass.password[pass.firstOption] === pass.letter && 
            pass.password[pass.secondOption] !== pass.letter) ||
            //second matches, first doesn't
            (pass.password[pass.firstOption] !== pass.letter && 
            pass.password[pass.secondOption] === pass.letter)
        ){
            goodPasswordCount++;
        }
    }

    return goodPasswordCount;
}

console.log(validatePasswords(test)); // 1
console.log(validatePasswords(full));