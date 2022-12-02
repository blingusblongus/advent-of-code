import {input, test} from './input.js';

const countScores = (input) => {
    let matches = input.split(/\n+/g);
    matches = matches.map(match => match.split(/\s/g));
    
    let choiceThem = ['A', 'B', 'C'];
    
    let scores = [];
    for(let match of matches){
        let score = 0;
        const [them, desiredResult] = match;
    
        const iThem = choiceThem.indexOf(them);
    
        switch(desiredResult){
            case 'X':
                //lose
                score = iThem == 0 ? 3 : iThem;
                break;
            case 'Y':
                //draw
                score = iThem + 1 + 3;
                break;
            case 'Z':
                score = iThem == 2 ? 7 : iThem + 8;
                break;
        }
    
        scores.push(score);
    }

    return scores.reduce((sum, score) => sum += score, 0);
}

console.log(countScores(input));
