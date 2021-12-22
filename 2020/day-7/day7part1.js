const {test, full} = require('./input.js');

function howManyColors(input){
    const rules = input
        //split by newlines
        .split(/\n\s*/g)
        // get bag description and start and following digit
        .map(rule => rule.match(/^\w+ \w+|\d+ \w+ \w+/g)
            //split digits off from bags that have them
            .map(item => item.match(/^\d+|\w+ \w+$/g)));

    console.log(rules);
}

console.log(howManyColors(test));