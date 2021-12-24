const {test, full} = require('./input.js');

function getLoopAcc(input){
    const instructions = input.split(/\n\s*/g)
        .map(instruction => instruction.split(/\s/g));

    const visited = {};
    let acc = 0;

    for(let i=0; i<instructions.length; i++){
        let op = instructions[i][0];
        let arg = instructions[i][1];
        console.log(instructions[i]);

        if (visited[i]) {
            return acc;
        }else{
            visited[i] = true;
        }

        switch(op){
            case 'nop': break;
            case 'acc':
                acc += Number(arg);
                break;
            case 'jmp':
                i += Number(arg) - 1;
                break;
            default:
                console.log('error in switch');
        }
    }

    // console.log(instructions);
}

// console.log(getLoopAcc(test)); // 5
console.log(getLoopAcc(full));
