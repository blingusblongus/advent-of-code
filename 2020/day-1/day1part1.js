const {test, full} = require('./input.js');

function find2020(input){
    const arr = input.split(/\n/g).map(num => Number(num));
    
    for(let i=0; i<arr.length - 1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === 2020){
                return arr[i]*arr[j];
            }
        }
    }
}

console.log(find2020(test)); // 514579
console.log(find2020(full));