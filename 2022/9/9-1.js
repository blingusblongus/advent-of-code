import { test } from './input.js';
const parseInput = (input) => {
    const result = input
        .split(/\n/g)
        .map((line) => [line.split(' ')[0], Number(line.split(' ')[1])]);
    return result;
};
const moveHead = (coord, dir) => {
    const [direction, distance] = dir;
    let horiz = false;
    let increment = 1;
    if (['R', 'L'].includes(direction))
        horiz = true;
    if (['D', 'L'].includes(direction))
        increment = -1;
    if (horiz) {
        return [
            [coord[0] + distance * increment, coord[1]],
            [coord[0] + (distance - 1) * increment, coord[1]]
        ];
    }
    else {
        return [
            [coord[0], coord[1] + distance * increment],
            [coord[0], coord[1] + (distance - 1) * increment]
        ];
    }
};
const notAdjacent = (head, tail) => {
    return Math.abs(tail[0] - head[0]) > 2 || Math.abs(tail[1] - head[1]) > 2;
};
const solvePuzzle = (input) => {
    const result = new Set();
    const directions = parseInput(input);
    let position = [0, 0];
    let tailPosition = [0, 0];
    for (let direction of directions) {
        console.log(direction);
        const [current, last] = moveHead(position, direction);
        // Move the Head
        position = current;
        if (notAdjacent(position, tailPosition)) {
            tailPosition = last;
        }
        console.log(tailPosition);
        result.add(JSON.stringify(tailPosition));
    }
    console.log(result);
    return result.size;
};
console.log(solvePuzzle(test));
