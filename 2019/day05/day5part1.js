// preprocessed test input as an array
let {test, full} = require('./input.js');

function runProgram(program){
    console.log(program);

    for(let i=0; i<program.length; i+=4){
        // stringify instruction
        let instruction = program[i].toString();
        // parse opcode
        let opcode = parseInt(instruction.substring(instruction.length - 2));
        console.log('opcode: ', opcode);

        //get list of modes
        let modes = [];
        for(let i=0; i<3; i++){
            let last = instruction.length - 1;
            let digit = instruction[last - (i + 2)];
            if(digit){
                modes.push(parseInt(digit))
            }else{
                modes.push(0)
            }
        }
        console.log(modes);
        ////////////////////////////// STOPPED HERE, 

        let modIndex = program[i+3];
        let firstIndex = program[i+1];
        let secondIndex = program[i+2];

        switch(opcode){
            case 1:
                program[modIndex] = program[firstIndex] + program[secondIndex];
                break;
            case 2:
                program[modIndex] = program[firstIndex] * program[secondIndex];
                break;
            case 99:
                return program;
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


console.log(runProgram(test)); //
// console.log(adjustProgram(splitProg(full)));
