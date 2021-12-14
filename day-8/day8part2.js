const testInput = `acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf`;
const input = require('./input.js');

function findEasyNumbers(input){
    //split segments by delimiter
    const segments = input.split(/\s\|\s|\n/g);
    // console.log(segments);

    //loop through all segments
    let segmentResult = {
    };
    for(i=0; i<segments.length; i++){
        let codedNums = segments[i].split(' ');
        let fiveSegments = codedNums.filter(str => str.length === 5)
                .map(segment => segment.split(''));
        let sixSegments = codedNums.filter(str => str.length === 6)
                .map(segment => segment.split(''));

        //decode using even indexes
        if(i % 2 === 0){
            let display = {
                //filter to single num of unique length, split the possible letters into arr
                one: codedNums.filter(str => str.length === 2)[0].split(''),
                seven: codedNums.filter(str => str.length === 3)[0].split(''),
                four: codedNums.filter(str => str.length === 4)[0].split('')
            }

            // =========find top seg
            // 7 sub 1
            segmentResult.top = display.seven.filter(seg => {
                return !display.one.includes(seg);
            })[0];
 
            // =========find five
            // (4 sub 1) U 5
            let topLeftOrMid = display.four.filter(seg => {
                return !display.one.includes(seg);
            });

            display.five = fiveSegments.filter(candidate => {
                return topLeftOrMid.every(letter => candidate.includes(letter));
            })[0];
            //update fiveSegments
            fiveSegments.splice(fiveSegments.indexOf(display.five), 1);

            //==========find topLeft
            segmentResult.topLeft = display.five.filter(seg => {
                return !fiveSegments.some(segArr => segArr.includes(seg));
            })[0];

            //===========find mid
            // topLeftOrMid sub topLeft
            segmentResult.mid = topLeftOrMid.filter(seg => {
                return seg !== segmentResult.topLeft;
            })[0];
            
            console.log(fiveSegments);
            console.log('display ', display);
            console.log('segmentResult ', segmentResult);
        }
        return;    
    }
}

// console.log(findEasyNumbers(testInput)); // 5353
console.log(findEasyNumbers(input));