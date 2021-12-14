const testInput = `acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab | cdfeb fcadb cdfeb cdbaf`;
const input = require('./input.js');

function findEasyNumbers(input) {
    let totalCount = 0;

    //split segments by delimiter
    const segments = input.split(/\s\|\s|\n/g);
    // console.log(segments);

    //loop through all segments
    let display;
    let segmentResult = {};
    for (i = 0; i < segments.length; i++) {

        //decode using even indexes
        if (i % 2 === 0) {
            let codedNums = segments[i].split(' ');
            let fiveSegments = codedNums.filter(str => str.length === 5)
                .map(segment => segment.split(''));
            let sixSegments = codedNums.filter(str => str.length === 6)
                .map(segment => segment.split(''));

            display = {
                //filter to single num of unique length, split the possible letters into arr
                one: codedNums.filter(str => str.length === 2)[0].split(''),
                seven: codedNums.filter(str => str.length === 3)[0].split(''),
                four: codedNums.filter(str => str.length === 4)[0].split(''),
                eight: codedNums.filter(str => str.length === 7)[0].split(''),
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

            //===========find 2 and 3
            // if 2 diff (4 U top) is an array of length two, it's 2, else 3
            let checkTwoThree = [...display.four, segmentResult.top];
            fiveSegments.forEach(num => {
                if (num.filter(seg => !checkTwoThree.includes(seg)).length === 2) {
                    display.two = num;
                } else {
                    display.three = num;
                }
            });

            //==========find bottom left
            segmentResult.bottomLeft = display.two.filter(seg => {
                return !display.three.includes(seg);
            })[0];

            //==========find bottom Right
            segmentResult.bottomRight = display.three.filter(seg => {
                return !display.two.includes(seg);
            })[0];

            //==========find six or nine
            sixSegments.forEach(num => {
                if (num.includes(segmentResult.bottomLeft)) {
                    display.six = num;
                } else {
                    display.nine = num;
                }
            })
            // console.log('display ', display);
            // console.log('segmentResult ', segmentResult);
        } else {
            /******DECODE**********/
            let code = '';
            for (let displayedNum of segments[i].split(' ')) {
                //find the num that exactly matches the letters in the code
                let spelledNum;
                for (let num in display) {     
                    if (display[num].length === displayedNum.length
                        && display[num].every(letter => {
                            return displayedNum.split('').includes(letter);
                        })) {
                        spelledNum = num;
                    }
                }

                console.log(spelledNum);
                switch (spelledNum) {
                    case 'one':
                        code += '1';
                        break;
                    case 'two':
                        code += '2';
                        break;
                    case 'three':
                        code += '3';
                        break;
                    case 'four':
                        code += '4';
                        break;
                    case 'five':
                        code += '5';
                        break;
                    case 'six':
                        code += '6';
                        break;
                    case 'seven':
                        code += '7';
                        break;
                    case 'eight':
                        code += '8';
                        break;
                    case 'nine':
                        code += '9';
                        break;
                    default:
                        console.log('switch err');
                        console.log(segments[i]);
                        console.log(display);
                }
            }
            console.log('code ', code);
            totalCount += Number(code);
        }
    }
    return totalCount;
}

// console.log(findEasyNumbers(testInput)); // 5353
console.log(findEasyNumbers(input));