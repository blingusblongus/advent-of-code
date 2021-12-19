const {test, full} = require('./input.js');

function find2020(input){
    const arr = input.split(/\n/g).map(num => Number(num));
    
    for(let i=0; i<arr.length - 2; i++){
        for(let j=i+1; j<arr.length - 1; j++){
            for(let k=j+1; k<arr.length; k++){
                if(arr[i] + arr[j] + arr[k] === 2020){
                    console.log(arr[i], ' ', arr[j], ' ',  arr[k])
                    return arr[i]*arr[j]*arr[k];
                }
            }
        }
    }
}

console.log(find2020(test)); // 241861950
console.log(find2020(full));