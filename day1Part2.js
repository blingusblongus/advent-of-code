//count the number of times a depth measurement increases 
//from the previous measurement.

let inputStr = require('./input.js');
let input = inputStr.split('\n').map(str => Number(str));

function isDeeper(depthArr){
    let deeper = 0;
    let lastChunk = 
    for(let i = 3; i<input.length; i++){
        

        if(Number(input[i]) > Number(input[i-1])){
            deeper++;
        }
    }
    return deeper;
}

console.log(isDeeper(inputStr));