const inputArr = require('./day3input.js');
const testInputArr = require('./day3testInput.js');

function calculatePower(inputArr) {
    const n = inputArr.length;
    let gamma = '';
    let epsilon = '';

    for (let i = 0; i < inputArr[0].length; i++) {
        let countOnes = 0;
        
        for (let bin of inputArr) {
            if(Number(bin[i])) countOnes++;
        }

        gamma += countOnes >= n - countOnes ? '1':'0';
        epsilon += countOnes >= n - countOnes ? '0':'1';
    }

    return parseInt(gamma, 2) * (parseInt(epsilon, 2));
}

console.log(calculatePower(testInputArr)) // 198 (22 * 9);
console.log(calculatePower(inputArr));