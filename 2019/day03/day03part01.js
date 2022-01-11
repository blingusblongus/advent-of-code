const { demo, test1, test2, full } = require('./input.js');

function getClosestIntersection(input) {
    const wires = input.split(/\n\s*/)
        .map(wire => wire.split(/,/g));

    console.log(wires);

    let wireMap = { '0-0': 1 };
    let crosses = [];

    for (let wire of wires) {
        let pos = [0, 0];
        for (let instruction of wire) {
            let direction = instruction.substring(0, 1);
            let distance = Number(instruction.substring(1));

            console.log(instruction);

            for (let i = 0; i < distance; i++) {
                move(pos, direction);

                let key = pos[0] + '-' + pos[1];
                if (!wireMap[key]) {
                    wireMap[key] = 1;
                } else {
                    wireMap[key] += 1;
                    crosses.push(key.split('-'));
                    console.log(crosses);
                }
            }
        }
    }


    return Math.min(...crosses.map(cross => Math.abs(cross[0]) + Math.abs(cross[1])))
}

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

console.log(getClosestIntersection(demo)); // 6