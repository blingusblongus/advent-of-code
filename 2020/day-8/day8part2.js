const {test, full} = require('./input.js');

function getLoopAcc(input){
    const instructions = input.split(/\n\s*/g)
        .map(instruction => instruction.split(/\s/g));

    let visited = {};
    let acc = 0;
    let nopCount = 0;
    let maxNop = 0;
    let editMade = false;

    for(let i=0; i<=instructions.length; i++){
        //exit successfully
        if(i === instructions.length) return acc;

        //else execute instruction
        let op = instructions[i][0];
        let arg = instructions[i][1];
        console.log(instructions[i], i);

        if (visited[i]) {
            editMade = false;
            i = -1;
            visited = {};
            continue;
        }else{
            visited[i] = true;
        }

        //record last index for error handling
        last = i;

        //choose action and execute
        switch(op){
            case 'nop': 
                if(nopCount > maxNop && !editMade && Number(arg) !== 0){
                    i += Number(arg) - 1;
                    editMade = true;
                }else{
                    nopCount++;
                }
                break;
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

console.log(getLoopAcc(test)); // 8
// console.log(getLoopAcc(full));
