//count the number of times a depth measurement increases 
//from the previous measurement.

let inputStr = require('./input.js');
let input = inputStr.split('\n');

function isDeeper(depthArr){
    let deeper = 0;
    for(let i = 1; i<input.length; i++){
        if(Number(depthArr[i]) > Number(depthArr[i-1])){
            deeper++;
        }
    }
    return deeper;
}

console.log(isDeeper(input));