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
        const checkContain = (x, y) => {
            if (x[0] <= y[0] && x[1] >= y[1])
                return true;
            return false;
        };
        if (checkContain(first, second) || checkContain(second, first))
            count++;
    }
    return count;
}
console.log(solvePuzzle(parseInput(input)));
