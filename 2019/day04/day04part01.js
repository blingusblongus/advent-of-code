const [min, max] = [158126, 624574];

function possPasswords(min, max){
    let result = 0;

    //rules 1 and 2 can be ignored, they automatically fit the input

    for(let i=min; i<=max; i++){
        //test rules 3 and 4
        if(checkLtR(i) && checkAdjacent(i)){
            result++;
        }
    }
    return result;
}

function checkLtR(num){
    let arr = num.toString();

    for(let i=0; i<arr.length; i++){
        if(i>0 && arr[i] < arr[i - 1]) return false;
    }

    return true;
}

function checkAdjacent(num){
    let arr = num.toString();

    for(let i=0; i<arr.length; i++){
        if(i>0 && arr[i] === arr[i - 1]) return true;
    }
    return false;
}

console.log(possPasswords(min, max)); //

// console.log(checkLtR(111111)); // true;
// console.log(checkLtR(223450)); // false
// console.log(checkLtR(123789)); // true

// console.log(checkAdjacent(111111)); // true;
// console.log(checkAdjacent(223450)); // true
// console.log(checkAdjacent(123789)); // false;