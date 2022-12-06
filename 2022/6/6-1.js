import { test, test2, input } from './input.js';
const getMarkerIndex = (input) => {
    for (let i = 3; i < input.length; i++) {
        const marker = new Set();
        marker
            .add(input[i - 3])
            .add(input[i - 2])
            .add(input[i - 1])
            .add(input[i]);
        if (marker.size === 4)
            return i + 1;
    }
    return -1;
};
function solvePuzzle(stacks, directions) {
}
console.log(getMarkerIndex(test));
console.log(getMarkerIndex(test2));
console.log(getMarkerIndex(input));
