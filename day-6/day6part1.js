// I bet there's a better way to do this...
// You could probably model just the first 7 days, then add ?^x where x is the number of weeks???

const testInput = require('./day6testInput.js');
const input = require('./day6Input.js');

function modelFish(input){
    const startFish = input.split(',').map(el => parseInt(el));
    
    let fish = {};
    let nextFish = {};

    // init empty fish table
    zeroTable(fish);

    //fill initial fish table
    for(let f of startFish){
        fish[f] += 1;
    }

    console.log('startFish', fish);

    //step through a day
    for(let i=0; i<80; i++){
        //reset nextfish
        nextFish = zeroTable(nextFish);

        for(let timer in fish){
            if(timer == 0){
                nextFish[8] += fish[0];
                nextFish[6] += fish[0];
            }else{
                nextFish[timer-1] += fish[timer];
            }
        }

        //write nextfish to fish
        copyTable(fish, nextFish);
    }

    console.log('endFish', fish);
    return sumObjValues(fish);
}

function zeroTable(table){
        //init table
        for(let i=0; i<9; i++){
            table[i] = 0;
        }

        return table;
}

function copyTable(table1, table2){
    for(let i=0; i<9; i++){
        table1[i] = table2[i];
    }
}

function sumObjValues(obj){
    let sum = 0;
    for(let key in obj){
        sum+=obj[key];
    }
    return sum;
}

// Tests
console.log(modelFish(testInput)); // 5934
console.log(modelFish(input));