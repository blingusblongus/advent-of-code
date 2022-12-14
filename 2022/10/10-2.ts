import { test, test2, input } from './input.js';

type Instruction = [string, number | null];
const parseInput = (input: string): Instruction[] => {
    return input
        .split(/\n/g)
        .map(line => {
            const instruction = line.split(' ')[0];
            const value: number | null = Number(line.split(' ')[1]) || null;
            return <Instruction>[instruction, value];
        })
}

const getSignalStrengths = (timeline: Map<number, number>) => {
    let sum = 0;
    for(let i=20; i<=220; i+=40){
        let value = timeline.get(i);
        console.log(value, i);
        sum += (value || 0) * i;
    }
    return sum;
}

const getScreenArr = (timeline: Map<number, number>) => {
    const result = [];
    const arr = Array.from(timeline);
    while(arr.length > 0){
        result.push(arr.splice(0, 40));
    }
    console.log(result);
    return result;
}

const solvePuzzle = (input: string) => {
    const timeline = new Map<number, number>();
    const instructions = parseInput(input);
    let register = 1;
    let cycle = 1

    for(let instruction of instructions){
        const [command, value] = instruction;
        switch(command){
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
    const screen: [number, number][] = getScreenArr(timeline);

    const crt: string[][] = [];

    for(let line of screen){
        const pixels: number[] = line.map((pixel) => pixel[1]);
        const translated: string[] = pixels.map((pixel, i): string => Math.abs(pixel - i) < 2 ? 'X' : '.')
        crt.push(translated);
    }
  
    return crt.map(line => line.join(''));
}
console.log(solvePuzzle(test2));