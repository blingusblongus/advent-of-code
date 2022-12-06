import {testDirections, testStacks, inputStacks, inputDirections} from './input.js';

// Top of the pile is stack[0]!!!!

function parseDirections(input: string): number[][] {
    const directions = input.split(/\n/g);
    const dirArr = directions.map(direction => {
        return direction.match(/move\s(\d+)\sfrom\s(\d+)\sto\s(\d+)/);
    })
    return dirArr?.map(match => [match[1], match[2], match[3]].map(el => Number(el)));
}

function solvePuzzle(stacks: string[][], directions: number[][]){
    for(let direction of directions){
        const from = stacks[direction[1] - 1];
        let to = stacks[direction[2] - 1];
        const numCrates = direction[0];

        // Remove crates from top of stack and reverse them
        let movedCrates = from.splice(0, numCrates).reverse();
      
        // stick them on top of the target stack, update stacks variable
        stacks[direction[2] - 1] = [...movedCrates, ...to];
    }

    return stacks.map(arr => arr[0]).join('');
}


// console.log(solvePuzzle(testStacks, parseDirections(testDirections)));
console.log(solvePuzzle(inputStacks, parseDirections(inputDirections)));