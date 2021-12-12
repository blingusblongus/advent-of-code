const testInput = require('./day11TestInput.js');
const miniTest = require('./day11Minitest.js');

function octopuses(input, steps) {
    const grid = [];
    const inputRows = input.split('\n');
    let flashes = 0;

    // fill grid of octopuses
    for (let row of inputRows) {
        grid.push(row.split('').map(el => {
            return {
                energy: Number(el),
                flashed: false
            }
        }));
    }

    for (let i = 0; i < steps; i++) {
        //increment all octopuses
        for (let j = 0; j < grid.length; j++) {
            for (let k = 0; k < grid[j].length; k++) {
                grid[j][k].energy++;          
            }
        }

        //recursively check flashes
        for (let j = 0; j < grid.length; j++) {
            for (let k = 0; k < grid[j].length; k++) {
                checkFlash(j, k, grid);        
            }
        }

        //reset flashed octopuses
        for (let j = 0; j < grid.length; j++) {
            for (let k = 0; k < grid[j].length; k++) {
                let octopus = grid[j][k];
                if (octopus.flashed) {
                    flashes++;
                    octopus.flashed = false;
                    octopus.energy = 0;
                }
            }
        }

        //visualize
        let visGrid = new Array(grid.length);
        for(let i=0; i<grid.length; i++){
            let energies = grid[i].map(oct => oct.energy).join('');
            visGrid[i] = energies;
        }

        console.log(visGrid);
        console.log(flashes);
    }

    return flashes;
}

function checkFlash(j, k, grid, flashes) {
    const octopus = grid[j][k];
    const maxY = grid.length - 1;
    const maxX = grid[0].length - 1;

    if (octopus.energy > 9 && !octopus.flashed) {
        flashes++;
        octopus.flashed = true;
        for (let l = -1; l < 2; l++) {
            for (let m = -1; m < 2; m++) {
                let y = j + l;
                let x = k + m;

                if (-1 < y && y < maxY && -1 < x && x <= maxX) {
                    grid[y][x].energy += 1;
                    checkFlash(y, x, grid);
                }
            }
        }
    }
}
console.log(octopuses(miniTest, 3)); //204;
// console.log(octopuses(testInput, 10)); //204;
// console.log(octopuses(testInput, 100)); // 1656