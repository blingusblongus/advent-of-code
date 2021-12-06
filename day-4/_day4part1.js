let testInput = require('./day3TestInput.js');

function pickBingo(testInput){
    let picks = testInput.picks.split(' ');
    
    //parse the input into an array of boards
    let regex = /\s+/;
    let nums = testInput.boards.split(regex);
    let lines = [];
    let boardsArr = [];

    let totalNums = Number(nums.length);
    console.log(totalNums)
    console.log(nums);

    for(let i=0; 0<nums.length; i++){
        let line = nums.splice(0,5);
        lines.push(line);
    }

    console.log(lines);

    for(let i=0; 0<lines.length/5; i++){
        let board = lines.splice(0,5);
        boardsArr.push(board);
    }

    console.log(picks);
    console.log(boardsArr);
}

pickBingo(testInput); // 188 * 24 = 4512.