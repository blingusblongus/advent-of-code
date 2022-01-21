const { test } = require('./input.js');

function getErrorScore(input){
    console.log('running')
    const lines = input.split(/\n\s*/g);
    console.log(lines)

    checkClose(lines[0]);
    // for(let line of lines){
    //     checkClose(line);
    // }
    
}

function checkClose(str){
    let check = str;
    console.log(check);
    for(let i=0; i<check.length - 1; i++){
        console.log(i);
        if(check[i] === check[i+1]){
            check = check.slice(0, i + 1) + check.slice(i + 3);
            console.log('chopped', i+1, i+2);
            console.log(check);
            i = 0;
        } 
    }
}

console.log(getErrorScore(test));
