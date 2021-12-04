let testInput = require('./day3TestInput.js');

function pickBingo(testInput){
    let picks = testInput.picks.split(' ');
    
    //parse the input into an array of boards
    let regex = /\s+/;
    let nums = testInput.boards.split(regex);
    let lines = [];
    let boardsArr = [];
    
    for(let i=0; i<nums.length/5; i++){
        let line = nums.splice(0,5);
        lines.push(line);
    }

    for(let i=0; i<lines.length/5; i++){
        let board = lines.splice(0,5);
        boardsArr.push(board);
    }

    console.log(picks);
    console.log(boardsArr);
}

pickBingo(testInput);