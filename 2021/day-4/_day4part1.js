let testInput = require('./day4TestInput.js');
let input = require('./day4Input.js');

function pickBingo(testInput) {
    let picks = testInput.picks.split(',');
    console.log(picks);

    //parse the input into an array of boards
    let regex = /\s+/;
    let nums = testInput.boards.split(regex);
    let lines = [];
    let boardsArr = [];

    // fill boardsArr
    for (let i = 0; 0 < nums.length; i++) {
        let line = nums.splice(0, 5);
        lines.push(line);
    }

    for (let i = 0; 0 < lines.length / 5; i++) {
        let board = lines.splice(0, 5);
        boardsArr.push(board);
    }

    let best = {
        boardIndex: null,
        bestPickIndex: Infinity
    }
    // Check for wins
    for (let i = 0; i < boardsArr.length; i++) {
        let board = boardsArr[i];
        //score horizontal rows
        for (let j=0; j < 5; j++) {
            let h = [];
            let v = [];
            for(let k=0; k<5; k++){
                v.push(picks.indexOf(board[k][j]));
                h.push(picks.indexOf(board[j][k]));
            }

            let maxH = Math.max(...h);
            let maxV = Math.max(...v);
            if(maxH < best.bestPickIndex) best = {boardIndex: i, bestPickIndex: maxH}
            if(maxV < best.bestPickIndex) best = {boardIndex: i, bestPickIndex: maxV}
        }
    }

    const lastPick = picks[best.bestPickIndex];
    let flatBoard = [];
    for (let line of boardsArr[best.boardIndex]){
        flatBoard = [...flatBoard, ...line];
    }
    let selected = picks.splice(0, best.bestPickIndex + 1);
    console.log('selected', selected);

    let unmarked = flatBoard.filter(el => !selected.includes(el));
    console.log('unmarked', unmarked);
    let sumUnmarked = unmarked.reduce((sum, el) => sum += parseInt(el), 0);
    console.log('sumUnmarked', sumUnmarked);

    return sumUnmarked * lastPick;
}

console.log(pickBingo(testInput)); // 188 * 24 = 4512.
console.log(pickBingo(input));