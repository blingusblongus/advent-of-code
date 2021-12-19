const {test, full} = require('./input.js');

function findTrees(input, slope){
    const arr = input.split(/\n\s*/g);
    const width = arr[0].length;

    let treesHit = 0;

    for(let i=0; i<arr.length; i++){
        // set coordinates, using repeating x values if necessary
        let y = i * slope.y;
        let x = i * slope.x >= width ? i * slope.x % width : i * slope.x;

        // handle out-of-bounds from increased y slope
        if(y > arr.length) break;

        // console.log(x, ' ', y);

        // check for tree and inc
        if(arr[y][x] === '#') treesHit++;
    }

    return treesHit;
}

function checkSlopes(input){
    let treeProduct = 1;
    const slopes = [
        {x:1,y:1},
        {x:3,y:1},
        {x:5,y:1},
        {x:7,y:1},
        {x:1,y:2}
    ]

    for(let slope of slopes){
        let treesHit = findTrees(input, slope);
        console.log(treesHit);
        treeProduct *= treesHit;
    }

    return treeProduct;
}

console.log(checkSlopes(test)) // 336 
console.log(checkSlopes(full))  