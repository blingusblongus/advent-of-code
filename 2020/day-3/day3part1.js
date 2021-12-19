const {test, full} = require('./input.js');

function findTrees(input){
    const arr = input.split(/\n\s*/g);
    const width = arr[0].length;

    let treesHit = 0;

    for(let i=0; i<arr.length; i++){
        // set coordinates, using repeating x values if necessary
        let y = i;
        let x = i * 3 >= width ? i * 3 % width : i * 3;

        // console.log(x);

        // check for tree and inc
        if(arr[y][x] === '#') treesHit++;
    }

    return treesHit;
}

console.log(findTrees(test)) // 7  
console.log(findTrees(full))  