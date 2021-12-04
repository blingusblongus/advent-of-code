const inputArr = require('./day3input.js');
const testInputArr = require('./day3testInput.js');

function calculateLifeSupportRating(inputArr) {
    const n = inputArr.length;
    let gamma = '';
    let epsilon = '';

    //Determine most common bit per position
    // gamma prints 1 if equal (oxygen generator)
    // epsilon prints 0 if equal (CO2 scrubber)
    for (let i = 0; i < inputArr[0].length; i++) {
        let countOnes = 0;
        
        for (let bin of inputArr) {
            if(Number(bin[i])) countOnes++;
        }

        gamma += countOnes >= n - countOnes ? '1':'0';
        epsilon += countOnes >= n - countOnes ? '0':'1';
    }

    // Use gamma and epsilon to determine life support filter
    let oxyArr = new Array(n);
    let i = 0;

    while(oxyArr.length > 1){
        oxyArr = oxyArr.filter(bin => bin[i] === gamma[i]);
    }

    console.log(oxyArr);

    return parseInt(gamma, 2) * (parseInt(epsilon, 2));
}

console.log(calculateLifeSupportRating(testInputArr)) // 230 (23 * 10)
console.log(calculateLifeSupportRating(inputArr));