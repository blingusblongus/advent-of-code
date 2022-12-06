import { test, test2, input } from './input.js';
const getMarkerIndex = (input) => {
    for (let i = 13; i < input.length; i++) {
        const marker = new Set();
        for (let j = 0; j < 14; j++) {
            marker.add(input[i - j]);
        }
        if (marker.size === 14)
            return i + 1;
    }
    return -1;
};
console.log(getMarkerIndex(test));
console.log(getMarkerIndex(test2));
console.log(getMarkerIndex(input));
