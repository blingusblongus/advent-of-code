const {test1, test2, full} = require('./input.js');

function getClosestIntersection(input){
    const instructions = input.split(/\n\s*|,/g);
    const {bounds, origin} = getBounds(instructions);
    const grid = buildGrid(...bounds);

    let x = origin[0];
    let y = origin[1];

    for(let instruction of instructions){
        let direction = instruction.substring(0,1);
        let distance = Number(instruction.substring(1));
        
    }
    
    // return instructions;
}

function getBounds(instructions){
    let yMax = 0;
    let yMin = 0;
    let xMax = 0;
    let xMin = 0;
    let y = 0;
    let x = 0;

    for(let instruction of instructions){
        let direction = instruction.substring(0,1);
        let distance = Number(instruction.substring(1));
        
        switch(direction){
            case 'R':
                x += distance;
                if(x > xMax) xMax = x;
                break;
            case 'L':
                x -= distance;
                if(x < xMin) xMin = x;
                break;
            case 'D':
                y += distance;
                if(y > yMax) yMax = y;
                break;
            case 'U':
                y -= distance;
                if(y < yMin) yMin = y;
                break;
            default:
                console.log('error in bounds');

        }
    }

    let yOff = Math.abs(yMin);
    let xOff = Math.abs(xMin);

    return {
        bounds: [xMax + xOff, yMax + yOff],
        origin: [xOff, yOff]
    }
}

function buildGrid(x, y){
    let grid = [];

    for(let i = 0; i<=y; i++){
        let row = [];
        for(let j = 0; j<=x; j++){
            row.push(0);
        }
        grid.push(row);
    }
    return grid;
}
console.log(getClosestIntersection(test1));