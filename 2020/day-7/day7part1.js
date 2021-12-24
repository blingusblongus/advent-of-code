const {test, full} = require('./input.js');

function howManyColors(input){
    const rules = input
        //split by newlines
        .split(/\n\s*/g)
        // get bag description and start and following digit
        .map(rule => rule.match(/^\w+ \w+|\d+ \w+ \w+/g)
            //split digits off from bags that have them
            .map(item => item.match(/^\d+|\w+ \w+$/g)));

    //build ruleObj so rules can be accessed by key
    const ruleObj = {};
    for(let rule of rules){
        let [[bag]] = rule.splice(0,1);
        ruleObj[bag] = rule;
    }

    // console.log(ruleObj);

    // iterate through all bags, count if shiny is possible
    let numBags = 0;
    let bagsChecked = 0;
    for(let bag in ruleObj){
        bagsChecked++;
        if(hasShinyBag(bag)){
            console.log('bag found!');
            numBags++;
        }
    }

    console.log(Object.keys(ruleObj).length)
    console.log(bagsChecked);
    return numBags;

    // recursive function to drill through bags until shiny gold found
    // or bag with no inner bags found
    // this is assuming the rules can't loop :/
    function hasShinyBag(bag){
        let innerBags = ruleObj[bag];

        //check if shiny bag
        for(let innerBag of innerBags){
            if(innerBag[1] === 'shiny gold'){
                return true;
            }else{
                return hasShinyBag(innerBag[1]);
            }
        }
    }
}

console.log(howManyColors(test));
console.log(howManyColors(full));