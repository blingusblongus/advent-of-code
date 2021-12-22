const input = require('./input.js');

function findYourSeat(input){
    const seats = mapSeatIDs(input);
    const possibleSeats = [];

    // find possible seats (seat ids two apart);
    for(let i=0; i<seats.length; i++){
        for(let j=i+1; j<seats.length; j++){
            let difference = seats[i] - seats[j];
            if(Math.abs(difference) === 2){
                possibleSeats.push(Math.min(seats[i], seats[j]) + 1);
            }
        }
    }

    // find the possibleSeat that's not in the seats list
    for(let seat of possibleSeats){
        if(!seats.includes(seat)){
            return seat;
        }
    }

    console.log('couldn\'t find your seat');
}

function mapSeatIDs(input){
    return seats = input
        //split input into individual seats
        .split(/\n\s*/g)
        //map seat IDs to the seats arr
        .map(seat => getSeatID(seat));
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

console.log(findYourSeat(input));