import {test, input} from './input.js';


const getPriority = (letter) => {
    const order = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return order.indexOf(letter) + 1;
}

const solvePuzzle = (input) => {
    let rucksacks = input.split(/\n+/g);
    let groups = [];

    while(rucksacks.length > 0){
        groups.push(rucksacks.splice(0, 3));
    }

    const findMatching = (group) => {
        const [first, second, third] = group;

        for(let x of first){
            for(let y of second){
                if(x === y){
                    for(let z of third){
                        if(x === z){
                            return x;
                        }
                    }
                }
            }
        }
    }

    const badges = groups.map(group => findMatching(group));

    return badges.reduce((sum, el) => sum += getPriority(el), 0); 
}

console.log(solvePuzzle(input))
