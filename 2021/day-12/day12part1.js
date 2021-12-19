const testInput = require('./testInput.js');

/* RULES:
cant visit small caves more than once
start at start, end at end, can't pass through start or end multiple times
*/

function findPaths(input){
    console.log(input);
    const paths = input.split(/\n/g).map(path => {
        return path.split('-');
    });

    for(let path of paths.filter(path => path[0] === 'start')){
        

    }
    console.log(paths);
}

// function returnPaths(start){
//     let options = 
//     return [...currentPath, traversePath(currentPath)]
// };

console.log(findPaths(testInput)); // 10 paths