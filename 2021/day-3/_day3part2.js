const inputArr = require('./day3input.js');
const testInputArr = require('./day3testInput.js');

console.log(calculateLifeSupportRating(testInputArr)) // 230 (23 * 10)
console.log(calculateLifeSupportRating(inputArr));

function calculateLifeSupportRating(inputArr) {
    const n = inputArr.length;

    let oxygen = getLifeSupportRating(true, inputArr);
    let carbon = getLifeSupportRating(false, inputArr);

    console.log(oxygen);
    console.log(carbon);

    return parseInt(oxygen, 2) * (parseInt(carbon, 2));
}

function getLifeSupportRating(isOxygen, arr){
    let nums = [...arr];
    let oxyOrCarb = isOxygen ? '1' : '0';

    for(let i=0; i<nums[0].length; i++){
        let count = 0;

        for(let bin of nums){
            if(bin[i] === oxyOrCarb) count++;
        }

        if(count > nums.length - count){
            nums = nums.filter(bin => bin[i] === '1');
        }else if(count < nums.length - count){
            nums = nums.filter(bin => bin[i] === '0');
        }else{
            nums = nums.filter(bin => bin[i] === oxyOrCarb);
        }

        if(nums.length > 1) continue;
        return nums[0];
    }
}