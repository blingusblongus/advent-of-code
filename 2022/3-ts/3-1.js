import { input } from './input.js';
const getPriority = (letter) => {
    const order = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return order.indexOf(letter) + 1;
};
const solvePuzzle = (input) => {
    let rucksacks = input.split(/\n+/g)
        .map(sack => {
        return [sack.slice(0, sack.length / 2), sack.slice(sack.length / 2)];
    });
    const findMatching = (rucksack) => {
        const [first, second] = rucksack;
        for (let x of first) {
            for (let y of second) {
                if (x === y) {
                    return x;
                }
            }
        }
        return '';
    };
    const doubles = rucksacks.map(sack => findMatching(sack));
    return doubles.reduce((sum, el) => sum += getPriority(el), 0);
};
console.log(solvePuzzle(input));
