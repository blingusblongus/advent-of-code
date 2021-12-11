const testInput = require('./day7testInput.js');
const input = require('./day7input.js');

function alignCrabs(input) {
    let crabFormation = input.split(',').map(el => Number(el));
    let bestFuel = Infinity;

    for (let i = Math.min(...crabFormation); i <= Math.max(...crabFormation); i++) {
        let fuel = 0;
        for (let crab of crabFormation) {
            let distance = Math.abs(crab - i);
            fuel += (distance + 1)/2 * distance;
        }
        if (fuel < bestFuel) {
            bestFuel = fuel;
            console.log('bestFuel = ', bestFuel);
        }
    }
    return bestFuel;
}

console.log(alignCrabs(testInput)) // 168;
console.log(alignCrabs(input));