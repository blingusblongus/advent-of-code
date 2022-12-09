import { test, input } from './input.js';

type Pos = [number, number];

const parseInput = (input: string): string[][] => {
    let arr = input.split(/\n/g);
    return arr.map(x => x.split(""));
}

const checkHoriz = (row: string[], coords: Pos): boolean => {
    let index = coords[0];
    let visible = true;
    let height = Number(row[index]);

    // guard edge
    if(index === 0 || index === row.length -1) return true;

    //look left
    for(let i=index - 1; i>=0; i--){
        // console.log('checking left', row[i], 'vs', height);
        let otherHeight: number = Number(row[i]);
        if(otherHeight >= height){
            visible = false;
            // console.log('blocked from left');
            break;
        }
    }
    if(visible) return true;

    //look right
    visible = true;
    for(let i=index + 1; i<row.length; i++){
        let otherHeight: number = Number(row[i]);
        // console.log('checking right', row[i], 'vs', height);
        if(otherHeight >= height){
            visible = false;
            // console.log('blocked from right')
            break;
        }
    }
    if(visible) return true;
    return false;
}

const solvePuzzle = (grove: string[][]) => {
    let count = 0;

    for(let y=0; y<grove.length; y++){
        let row = grove[y];

        for(let x=0; x<row.length; x++){
            const pos: Pos = [x,y];
            if(checkHoriz(row, pos)){
                console.log('visible at (horiz) ', pos, row);
                count++;
                continue;
            }
            const transposedRow = grove.map(el => el[x]);
            if(checkHoriz(transposedRow, [y,x])){
                console.log('visible at (horiz) ', pos, row);
                count++;
                continue;
            }
        }
    }

    return count;
}
const parsedInput = parseInput(input);
console.log(solvePuzzle(parsedInput));

// console.log(checkHoriz(parsedInput[0], [1,0]))

