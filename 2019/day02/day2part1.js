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
    const prog = splitProg(program);
    for(let i = 0; i<100; i++){
        for(let j=0; j<100; j++){
            let checkProg = [...prog];
            checkProg[1] = i;
            checkProg[2] = j;

            let result = runProgram(checkProg);
            // console.log(result[0]);

            if(result[0] === 19690720){
                return 100 * i + j;
            }
        }
    }

    console.log('error, no result found');
}

// console.log(test);
// console.log(runProgram(test));

console.log(adjustProgram(full));

// console.log(runProgram(splitProg('1,0,0,0,99')))