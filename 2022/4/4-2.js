import { input } from './input.js';
function parseInput(input) {
    return input.split(/\n/g)
        .map(el => el.split(',')
        .map(el => el.split('-')
        .map(el => Number(el))));
}
function solvePuzzle(input) {
    let count = 0;
    for (let pair of input) {
        const [first, second] = pair;
        const checkOverlap = (x, y) => {
            if (x[1] >= y[0] && y[1] >= x[0])
                return true;
            return false;
        };
        if (checkOverlap(first, second))
            count++;
    }
    return count;
}
console.log(solvePuzzle(parseInput(input)));
