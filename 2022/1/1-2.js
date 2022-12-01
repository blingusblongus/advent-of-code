import data from './input.js';

const {input} = data;

// split food by elves
let elves = input.split(/\n\n+/g);

// split food by item
elves = elves.map(elf => elf.split(/\n/g));

//map total cals for each elf
elves = elves.map(elf => elf.reduce((sum, el) => sum += Number(el), 0));

// Sort elf cals highest to lowest
elves.sort((a,b) => b - a);

console.log(elves[0] + elves[1] + elves[2]);

