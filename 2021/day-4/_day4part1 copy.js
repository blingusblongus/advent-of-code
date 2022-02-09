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
        bestPickIndex: Infinity,
        worstPickIndex: 0,
    }
    // Check for wins
    for (let i = 0; i < boardsArr.length; i++) {
        let board = boardsArr[i];
        let boardWin = Infinity;

        //score horizontal rows and vertical columns
        for (let j=0; j < 5; j++) {
            let h = [];
            let v = [];

            //figure out what the last pick to score a bingo will be
            for(let k=0; k<5; k++){
                v.push(picks.indexOf(board[k][j]));
                h.push(picks.indexOf(board[j][k]));
            }

            let maxH = Math.max(...h);
            let maxV = Math.max(...v);
            if(maxH < boardWin || maxV < boardWin) boardWin = Math.min(maxH, maxV)
        }

        if(boardWin > best.worstPickIndex){
            best.worstPickIndex = boardWin;
            best.boardIndex = i;
        }
    }

    const lastPick = picks[best.worstPickIndex];
    let flatBoard = [];
    for (let line of boardsArr[best.boardIndex]){
        flatBoard = [...flatBoard, ...line];
    }
    let selected = picks.splice(0, best.worstPickIndex + 1);
    console.log('selected', selected);

    let unmarked = flatBoard.filter(el => !selected.includes(el));
    console.log('unmarked', unmarked);
    let sumUnmarked = unmarked.reduce((sum, el) => sum += parseInt(el), 0);
    console.log('sumUnmarked', sumUnmarked);

    return sumUnmarked * lastPick;
}

console.log(pickBingo(testInput)); // 188 * 24 = 4512.
console.log(pickBingo(input));