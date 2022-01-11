const { demo, test1, test2, full } = require('./input.js');

function getClosestIntersection(input) {
    const wires = input.split(/\n\s*/)
        .map(wire => wire.split(/,/g));

    let wireMap0 = getWireMap(wires[0]);
    let wireMap1 = getWireMap(wires[1]);

    let crosses = [];

    // this time, push the sum of segment count to crosses arr 
    // if same loc is in both objs
    for(let loc in wireMap0){
        if(wireMap1[loc]){
            crosses.push(wireMap0[loc] + wireMap1[loc]);
        }
    }

    return Math.min(...crosses);
}

// trace the path of a single wire and save all the locations
function getWireMap(wire){
    let wireMap = {};
    let pos = [0, 0];
    let segments = 0;

    for (let instruction of wire) {
        let direction = instruction.substring(0, 1);
        let distance = Number(instruction.substring(1));

        for (let i = 0; i < distance; i++) {
            move(pos, direction);
            segments++;

            let key = pos[0] + 'x' + pos[1];

            // create a reference with all covered locations
            // no else this time, since we want only want the first time at each
            // spot
            if (!wireMap[key]) {
                // mark each visited location with the segments traversed
                wireMap[key] = segments;
            }
        }
    }

    return wireMap;
}

// util to adjust pos in the appropriate given
function move(pos, direction) {
    switch (direction) {
        case 'R':
            pos[0] += 1;
            return pos;
        case 'L':
            pos[0] -= 1;
            return pos;
        case 'D':
            pos[1] -= 1;
            return pos;
        case 'U':
            pos[1] += 1;
            return pos;
        default:
            console.log('Bad direction');
    }
}

console.log(getClosestIntersection(demo)); // 30
console.log(getClosestIntersection(test1)); // 610
console.log(getClosestIntersection(test2)); // 410
console.log(getClosestIntersection(full));