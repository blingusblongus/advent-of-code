import { test, input } from './input.js';

type Direction = [string, number];
type Coordinate = [number, number];

const parseInput = (input: string): Direction[] => {
    const result = input
        .split(/\n/g)
        .map((line): Direction => [line.split(' ')[0], Number(line.split(' ')[1])])
    return result;
}

const moveHead = (coord: Coordinate, dir: Direction): [Coordinate, Coordinate] => {
    const [direction, distance] = dir;
    
    let horiz = false;
    let increment = 1;
    if(['R','L'].includes(direction)) horiz = true;
    if(['D', 'L'].includes(direction)) increment = -1;

    if(horiz){
        return [
            [coord[0] + distance * increment, coord[1]],
            [coord[0] + (distance - 1) * increment, coord[1]]
        ]
    }else{
        return [
            [coord[0], coord[1] + distance * increment],
            [coord[0], coord[1] + (distance - 1) * increment]
        ]
    }
}

const notAdjacent = (head: Coordinate, tail: Coordinate) => {
    return Math.abs(tail[0] - head[0]) > 2 || Math.abs(tail[1] - head[1]) > 2;
}

export const solvePuzzle = (input: string) => {
    const result = new Set();
    const directions = parseInput(input);
    let position: Coordinate = [0,0];
    let tailPosition: Coordinate = [0,0];

    for(let direction of directions){
        console.log(direction);
        const [current, last] = moveHead(position, direction);

        // Move the Head
        position = current;

        // TODO: swap to checking distance on every move
        if(notAdjacent(position, tailPosition)){
            tailPosition = last;
        }
        
        console.log(tailPosition);
        result.add(JSON.stringify(tailPosition));
    }
    console.log(result);
    return result.size;
}

console.log(solvePuzzle(test));