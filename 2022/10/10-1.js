import { input } from './input.js';
const parseInput = (input) => {
    return input
        .split(/\n/g)
        .map(line => {
        const instruction = line.split(' ')[0];
        const value = Number(line.split(' ')[1]) || null;
        return [instruction, value];
    });
};
const getSignalStrengths = (timeline) => {
    let sum = 0;
    for (let i = 20; i <= 220; i += 40) {
        let value = timeline.get(i);
        console.log(value, i);
        sum += (value || 0) * i;
    }
    return sum;
};
const solvePuzzle = (input) => {
    const cycles = {
        addx: 2,
        noop: 1
    };
    const timeline = new Map();
    const instructions = parseInput(input);
    let register = 1;
    let cycle = 1;
    for (let instruction of instructions) {
        const [command, value] = instruction;
        switch (command) {
            case 'addx':
                cycle++;
                timeline.set(cycle, register);
                cycle++;
                register += value || 0;
                timeline.set(cycle, register);
                break;
            case 'noop':
                cycle++;
                timeline.set(cycle, register);
                break;
            default: console.error('Not addx or noop');
        }
    }
    console.log(timeline);
    return getSignalStrengths(timeline);
};
console.log(solvePuzzle(input));
