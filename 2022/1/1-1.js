import data from './input.js';

const {input} = data;

// split food by elves
let elves = input.split(/\n\n+/g);

// split food by item
elves = elves.map(elf => elf.split(/\n/g));

let highTotal = 0;

elves.forEach(elf => {
    const calories = elf.reduce((sum, el) => sum += Number(el), 0);
    if(calories > highTotal){
        highTotal = calories;
        console.log('new highTotal: ', highTotal);
    } 
})


