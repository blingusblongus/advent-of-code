const input = require('./input.js');

function getHighestID(input){
    const seats = input
        //split input into individual seats
        .split(/\n\s*/g)
        //map seat IDs to the seats arr
        .map(seat => getSeatID(seat));

    return Math.max(...seats);
}

function getSeatID(seat){
    //split seat into row and col strings
    let row = seat.substring(0,7)
    let column = seat.substring(7);

    //convert strings to binary strings
    let rowBin = mapBinary(row, 'F');
    let colBin = mapBinary(column, 'L');

    //multiply row by 8, add column, return
    return parseInt(rowBin, 2) * 8 + parseInt(colBin, 2);
}

function mapBinary(input, zero){
    return input.substring(0,7)
        .split('')
        .map(x => x == zero ? '0' : '1')
        .join('');
}

// console.log(getSeatID('FBFBBFFRLR')) // 357
console.log(getHighestID(input));