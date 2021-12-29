let {test, full} = require('./input.js');
// test = test.split(',').map(el => Number(el));
// full = full.split(',').map(el => Number(el));

function splitProg(input){
    return input.split(',').map(el=>Number(el));
}

function runProgram(program){
    let endProg = [...program];
    for(let i=0; i<endProg.length; i+=4){
        let opcode = endProg[i];
        let modIndex = endProg[i+3];
        let firstIndex = endProg[i+1];
        let secondIndex = endProg[i+2];

        switch(opcode){
            case 1:
                endProg[modIndex] = endProg[firstIndex] + endProg[secondIndex];
                break;
            case 2:
                endProg[modIndex] = endProg[firstIndex] * endProg[secondIndex];
                break;
            case 99:
                return endProg;
            default:
                console.log('error');
        }
    }
}

function adjustProgram(program){
    program[1] = 12;
    program[2] = 2;

    return runProgram(program);
}

// console.log(test);
// console.log(runProgram(test));

console.log(adjustProgram(splitProg(full)));

// console.log(runProgram(splitProg('1,0,0,0,99')))