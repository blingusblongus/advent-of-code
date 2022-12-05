import {test, input} from './input.js';

function parseInput(input: string): number[][][]{
    return input.split(/\n/g)
        .map(el => el.split(',')
            .map(el => el.split('-')
                .map(el => Number(el))));
}

function solvePuzzle(input: number[][][]): number{
    let count = 0;
    for(let pair of input){
        const [first, second] = pair;
        
        const checkOverlap = (x: number[], y: number[]): boolean => {
            if(x[1] >= y[0] && y[1] >= x[0]) return true;
            return false;
        }

        if(checkOverlap(first, second)) count++;
    }

    return count;
}

console.log(solvePuzzle(parseInput(input)));