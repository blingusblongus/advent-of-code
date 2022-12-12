import { test, input } from './input.js';
console.time('start');

interface Coordinate {
    x: number; 
    y: number; 
    height: number; 
    start?: boolean; 
    end?: boolean;
    distance?: number;
};

let start = [0,0];

const parseInput = (input: string) => {
    const heights = 'abcdefghijklmnopqrstuvwxyz';
    return input.split(/\n/g)
        .map((line, y) => line.split('')
            .map((loc, x) => {
                let item: Coordinate = {x, y, height: heights.indexOf(loc)};
                if(loc === 'S'){
                    start = [item.x, item.y];
                    item.start = true;
                    item.height = 0;
                } 
                if(loc === 'E'){
                    item.end = true;
                    item.height = 25;
                } 
                return item;
            })
        );
}


const solvePuzzle = (input: string) => {
    let map = parseInput(test);

    const pathFind = (start: Coordinate, steps = 0) => {
        const options = [[0,1], [1,0], [-1,0], [0,-1]];
        steps += 1;
        for(let [addX,addY] of options){
            const next = map[start.x + addX]?.[start.y + addY];
            // if option exists
            if(next){
                console.log('checking', next);
                console.log('next.end', next.end);
                if(next.end) continue; // continue if can't go higher
                console.log('passed end check')
                if(next.height > start.height + 1) continue; // continue if can't reach
                console.log('passed height check');
                if(next.distance && next.distance >= steps) continue;
                
                if(!next.distance || next.distance < steps){
                    next.distance = steps;
                    pathFind(next, steps); // recurse if a better path hasn't been found
                }
            }
        }
    }

    pathFind(map[start[1]][start[0]]);

    return map;
}
console.log(solvePuzzle(test));
console.timeEnd('start');