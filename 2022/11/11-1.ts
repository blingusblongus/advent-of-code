import { test, input } from './input.js';

interface Monkey {
    id: number;
    items: number[];
    operation: (x:number) => number;
    trueMonkey: number;
    falseMonkey: number;
    divisibleBy: number;
    inspections: number;
}
const parseMonkeys = (input: string) => {
    let arr = input.split(/\n/g);

    let result = new Map<number, Monkey>();
    let monkey: Monkey = {
        id: -1,
        items: [],
        operation: ():number => -1,
        trueMonkey: -1,
        falseMonkey: -1,
        divisibleBy: -1,
        inspections: 0,
    };
    for(let line of arr){
        let match: RegExpMatchArray | string = '';
        switch(true){
            case /^Monkey/.test(line):
                match = line.match(/(\d):/) || '0';
                monkey.id = parseInt(match[1]);
                break;
            case /^Operation/.test(line):
                monkey.operation = (old) => eval(line.split('=')[1]);
                break;
            case /^Starting items:/.test(line):
                match = line.match(/:\s(.*)?/) || '0';
                monkey.items = match[1].split(', ').map(x => parseInt(x));
                break;
            case /^\s+If\strue:/.test(line):
                monkey.trueMonkey = Number(line.match(/\d+$/));
                break;
            case /^Test/.test(line):
                monkey.divisibleBy = Number(line.match(/\d+$/));
                break;
            case /^\s+If\sfalse:/.test(line):
                monkey.falseMonkey = Number(line.match(/\d+$/));
                break;
            default: // If no line matches, push the monkey
                result.set(monkey.id, {...monkey});
        }
    }
    result.set(monkey.id, {...monkey});
    // console.log(result);
    return result;
}

const solvePuzzle = (input: string) => {
    const monkeys = parseMonkeys(input);
    const relief: number = 3;

    for(let i=0; i<20; i++){
        for(let [key, monkey] of monkeys){
            // console.log('items: ', monkey.items)

            while(monkey.items.length > 0){
                let item = monkey.items.shift();
                let throwToId: number = -1;
    
                item = Math.floor(monkey.operation(item) / relief);
                monkey.inspections += 1;
                throwToId = item % monkey.divisibleBy === 0 ? monkey.trueMonkey : monkey.falseMonkey;
            
                const receivingMonkey: Monkey = monkeys.get(throwToId);
                receivingMonkey.items.push(item);
                monkeys.set(throwToId, receivingMonkey);
            }
        }
    }
    return Array.from(monkeys.values()).sort((a,b) => b.inspections - a.inspections);
}

// console.log(solvePuzzle(input));
console.log(solvePuzzle(input)[0].inspections * solvePuzzle(input)[1].inspections)