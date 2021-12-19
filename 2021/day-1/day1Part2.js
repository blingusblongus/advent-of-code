//Consider sums of a three-measurement sliding window. 
//How many sums are larger than the previous sum?

let testArr = require('./part2Test.js').split('\n').map(str => Number(str));
let inputStr = require('./input.js');
let depthArr = inputStr.split('\n').map(str => Number(str));

function isDeeper(depthArr){
    let deeper = 0;
    let lastChunk = depthArr[0] + depthArr[1] + depthArr[2];
    for(let i = 3; i<depthArr.length; i++){
        let nextChunk = depthArr[i] + depthArr[i-1] + depthArr[i-2];
        if(nextChunk > lastChunk){
            deeper++;
        }
        lastChunk = nextChunk;
    }
    return deeper;
}

console.log(isDeeper(testArr)); // 5;
console.log(isDeeper(depthArr));