const {test, full} = require('./input.js');

function sumAllGroups(input){
    const answers = input
        .split(/\n\s*\n\s*/g)
        .map(group => group.split(/\n\s*/g));
    
    return answers.reduce((sum, group) => sum += countUnamYes(group), 0)
}

function countUnamYes(group){
    let yesObj = {};
    let unanimous = 0;

    //fill the obj with keys and count how many for each
    for(let person of group){
        for(let i=0; i<person.length; i++){
            let answer = person[i];
            if(yesObj[answer]){
                yesObj[answer] += 1;
            }else{
                yesObj[answer] = 1;
            }
        }
    }

    //check if key answers === group length
    for(let question in yesObj){
        if(yesObj[question] == group.length){
            unanimous++;
        }
    }

    // console.log('group:', group, '\nyesObj:', yesObj, '\nUnanimous:', unanimous);

    // count the number of keys in final Obj
    return unanimous;
}

console.log(sumAllGroups(test)) // 6;
console.log(sumAllGroups(full));
// console.log(countYes(['a', 'b', 'c'])); // 3