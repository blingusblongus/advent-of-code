import {input, test} from './input.js';


const countScores = (input) => {
    let matches = input.split(/\n+/g);
    matches = matches.map(match => match.split(/\s/g));
    
    let choiceThem = ['A', 'B', 'C'];
    let choiceYou = ['X', 'Y', 'Z'];
    
    let scores = [];
    for(let match of matches){
        let score = 0;
        const [them, you] = match;
    
        const iThem = choiceThem.indexOf(them);
        const iYou = choiceYou.indexOf(you);
    
        switch(iThem - iYou){
            case 1:
            case -2:
                //lose
                score = iYou + 1;
                break;
            case 0:
                //draw
                score = iYou + 1 + 3;
                break;
            case -1:
            case 2:
                //win
                score = iYou + 1 + 6
                break;
        }
    
        scores.push(score);
    }

    console.log(scores);
    return scores.reduce((sum, score) => sum += score, 0);
}

console.log(countScores(input));
