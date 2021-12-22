const {test, full} = require('./input.js');

function sumAllGroups(input){
    const answers = input
        .split(/\n\s*\n\s*/g)
        .map(group => group.split(/\n\s*/g));
    
    return answers.reduce((sum, group) => sum += countYes(group), 0)
}

function countYes(group){
    let yesObj = {};

    //fill the obj with keys for each unique value
    for(let person of group){
        for(let i=0; i<person.length; i++){
            let answer = person[i];
            if(yesObj[answer]){
                continue;
            }else{
                yesObj[answer] = true;
            }
        }
    }

    // count the number of keys in final Obj
    return Object.keys(yesObj).length;
}

console.log(sumAllGroups(test)) // 11;
console.log(sumAllGroups(full));
// console.log(countYes(['a', 'b', 'c'])); // 3