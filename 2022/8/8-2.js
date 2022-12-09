import { input } from './input.js';
const parseInput = (input) => {
    let arr = input.split(/\n/g);
    return arr.map(x => x.split(""));
};
const getTreeScore = (row, coords) => {
    let index = coords[0];
    let visible = true;
    let height = Number(row[index]);
    let left = 0;
    let right = 0;
    // guard edge
    if (index === 0 || index === row.length - 1)
        return 0;
    //look left
    for (let i = index - 1; i >= 0; i--) {
        // console.log('checking left', row[i], 'vs', height);
        let otherHeight = Number(row[i]);
        if (otherHeight >= height) {
            visible = false;
            left++;
            // console.log('blocked from left');
            break;
        }
        left++;
    }
    //look right
    visible = true;
    for (let i = index + 1; i < row.length; i++) {
        let otherHeight = Number(row[i]);
        // console.log('checking right', row[i], 'vs', height);
        if (otherHeight >= height) {
            visible = false;
            right++;
            // console.log('blocked from right')
            break;
        }
        right++;
    }
    return left * right;
};
const solvePuzzle = (grove) => {
    let scenicScore = 0;
    for (let y = 0; y < grove.length; y++) {
        let row = grove[y];
        for (let x = 0; x < row.length; x++) {
            const pos = [x, y];
            const transposedRow = grove.map(el => el[x]);
            let posTreeScore = getTreeScore(transposedRow, [y, x]) * getTreeScore(row, pos);
            if (posTreeScore > scenicScore)
                scenicScore = posTreeScore;
        }
    }
    return scenicScore;
};
const parsedInput = parseInput(input);
console.log(solvePuzzle(parsedInput));
// console.log(checkHoriz(parsedInput[0], [1,0]))
