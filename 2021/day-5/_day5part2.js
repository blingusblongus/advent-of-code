const testInput = require('./day5testInput.js');
const input = require('./day5input.js');

function findVents(input){
    const regex = /\n/;
    const lines = input.split(regex);
    const endpoints = lines.map(line => line.split(' -> '));
    const vents = endpoints.map(el => el.map(xy => xy.split(',')));

    let maxX = 0;
    let maxY = 0;

    // Get the bounds
    for(let line of vents){
        let xy0 = line[0];
        let xy1 = line[1];

        maxX = Math.max(maxX, xy0[0]);
        maxX = Math.max(maxX, xy1[0]);
        maxY = Math.max(maxX, xy0[1]);
        maxY = Math.max(maxX, xy1[1]);
    }

    //init map
    let map = [];
    for(let y = 0; y<=maxY; y++){
        map.push([]);
        for(let x=0; x<=maxX; x++){
            map[y][x] = 0;
        }
    }

    console.log('maxX',maxX);
    console.log('maxY', maxY)
    
    for(let line of vents){
        let x1 = Number(line[0][0]);
        let x2 = Number(line[1][0]);
        let y1 = Number(line[0][1]);
        let y2 = Number(line[1][1]);

        if(x1 === x2){
            for(let y=Math.min(y1,y2); y<=Math.max(y1,y2); y++){
                map[y][x1] += 1;
            }
        }else if (y1 === y2){
            for(let x=Math.min(x1,x2); x<=Math.max(x1,x2); x++){
                map[y1][x] += 1;
            }
        }else if(Math.abs(y2 - y1) === Math.abs(x2 - x1)){
            // Write diagonal lines
            console.log('line', line);

            let backwards = Number(x1) > Number(x2);
            console.log(backwards);

            if(!backwards){
                console.log('y2, y1', y2,' ', y1);
                let slope = y2 > y1 ? 1 : -1;
                let y = Number(y1);

                for(let x = Math.min(x1,x2); x<=Math.max(x1,x2); x++){
                    map[y][x] += 1;
                    y += slope;
                }
            }else{
                let slope = y2 > y1 ? 1 : -1;
                let y = Number(y1);

                for(let x = Math.max(x1,x2); x>=Math.min(x1,x2); x--){
                    map[y][x] += 1;
                    y += slope;
                }
            }
        }else{
            console.log('err');
        }
    }

    return map.flat().filter(el => el > 1).length;
}

console.log(findVents(testInput)); // 12
console.log(findVents(input));