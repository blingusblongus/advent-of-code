const testInput = require('./testInput.js');
const input = require('./input.js');

function findLowPoints(input){
    let riskLevel = [];
    //make 2d array by splitting by line break and ''
    let arr = input.split(/\n/g).map(row => row.split(''));

    for(let y = 0; y<arr.length; y++){
        for(let x = 0; x<arr[0].length; x++){
            let center = arr[y][x];

            // skip out of bounds checks by setting them to infinity (auto true)
            let top = arr[y-1]?.[x] || Infinity;
            let left = arr[y]?.[x-1] || Infinity;
            let right = arr[y]?.[x+1] || Infinity;
            let bottom = arr[y+1]?.[x] || Infinity;

            // console.log('x = ', x, ' y = ', y);

            //  if every side is greater than center val, add to riskLevel
            if([top, left, right, bottom].every(adj => center < adj)){
                riskLevel.push(center);
                console.log('match, x = ', x, ' y = ', y);
            }

            // console.log(center, top, left, right, bottom);
        }
    }

    // console.log(riskLevel);

    // return sum of (all low points + 1);
    return riskLevel.reduce((sum, el)=> sum += Number(el) + 1, 0);
}

console.log(findLowPoints(testInput)) // 15;
console.log(findLowPoints(input));