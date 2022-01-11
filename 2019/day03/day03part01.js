const { demo, test1, test2, full } = require('./input.js');

function getClosestIntersection(input) {
    const wires = input.split(/\n\s*/)
        .map(wire => wire.split(/,/g));

    let wireMap0 = getWireMap(wires[0]);
    let wireMap1 = getWireMap(wires[1]);

    let crosses = [];

    // push the coords to crosses arr if same loc is in both objs
    for(let loc in wireMap0){
        if(wireMap1[loc]){
            crosses.push(loc.split('x'));
        }
    }

    return Math.min(...crosses
        .map(cross => Math.abs(cross[0]) + Math.abs(cross[1])))
}

// trace the path of a single wire and save all the locations
function getWireMap(wire){
    let wireMap = {};
    let pos = [0, 0];

    for (let instruction of wire) {
        let direction = instruction.substring(0, 1);
        let distance = Number(instruction.substring(1));

        for (let i = 0; i < distance; i++) {
            move(pos, direction);

            let key = pos[0] + 'x' + pos[1];

            // create a reference with all covered locations
            if (!wireMap[key]) {
                wireMap[key] = true;
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

// console.log(getClosestIntersection(demo)); // 6
// console.log(getClosestIntersection(test1)); // 159
// console.log(getClosestIntersection(test2)); // 135
console.log(getClosestIntersection(full));