const testInput = require('./day5testInput.js');

function findVents(input){
    const regex = /\n/;
    const lines = input.split(regex);
    const endpoints = lines.map(line => line.split(' -> '));
    const vents = endpoints.map(el => el.map(xy => xy.split(',')));

    let maxX = 0;
    let maxY = 0;

    // Get the bounds
    for(let line of vents){
        let xy0 = line[0];
        let xy1 = line[1];

        maxX = Math.max(maxX, xy0[0]);
        maxX = Math.max(maxX, xy1[0]);
        maxY = Math.max(maxX, xy0[1]);
        maxY = Math.max(maxX, xy1[1]);
    }

    //init map
    let map = [];
    for(let y = 0; y<=maxY; y++){
        map.push(Array(maxX+1).map(el => 0));
    }

    console.log(map[4]);
    console.log(map);

    console.log(maxX, " " , maxY);

    console.log(vents);

    return 'end func';
}

console.log(findVents(testInput));