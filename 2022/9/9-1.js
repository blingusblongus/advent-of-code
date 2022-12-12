import { input } from './input.js';
const parseInput = (input) => {
    const result = input
        .split(/\n/g)
        .map((line) => [line.split(' ')[0], Number(line.split(' ')[1])]);
    return result;
};
const notAdjacent = (head, tail) => {
    return Math.abs(tail[0] - head[0]) >= 2 || Math.abs(tail[1] - head[1]) >= 2;
};
export const solvePuzzle = (input) => {
    const result = new Set();
    const directions = parseInput(input);
    // Starting Coords
    let position = [0, 0];
    let tailPosition = [0, 0];
    // For each direction, move the head n times in the given direction
    for (let dir of directions) {
        const [direction, distance] = dir;
        let horiz = false;
        let increment = 1;
        let last = [...position];
        if (['R', 'L'].includes(direction))
            horiz = true;
        if (['D', 'L'].includes(direction))
            increment = -1;
        // One by one, move the head and check if tails should move
        for (let i = 0; i < distance; i++) {
            //Move head
            if (horiz) {
                position[0] = position[0] + increment;
            }
            else {
                position[1] = position[1] + increment;
            }
            //If tail moves, add to set
            if (notAdjacent(position, tailPosition)) {
                tailPosition = last;
                result.add(JSON.stringify(tailPosition));
            }
            // keep track of where tail might be pulled next;
            last = [...position];
        }
    }
    return result.size;
};
console.log(solvePuzzle(input));
