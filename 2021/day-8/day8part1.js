const testInput = require('./testInput.js');
const input = require('./input.js');

function findEasyNumbers(input){
    //split segments by delimiter
    // const segments = input.split(/\s\|\n|\n/g); // only formatted for test input
    const segments = input.split(/\s\|\s|\n/g); // for input data (no line break)
    console.log(segments);

    //loop through odd indexed elements
    //count codes with unique values (length of 2,3,4,7)
    let uniqueCount = 0;
    let uniqueLengths = [2,3,4,7];
    for(let i=1; i<segments.length; i+=2){
        uniqueCount += segments[i].split(' ')
            .filter(segment => uniqueLengths.includes(segment.length)).length;
    }

    return uniqueCount
}

// console.log(findEasyNumbers(testInput)); // 26
console.log(findEasyNumbers(input));