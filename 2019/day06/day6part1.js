const { test, full } = require('./input.js');

function getOrbits(map){
    map = map.split(/\n\s*/g).map(orbit => {
        return orbit.split(')');
    });

    let totalCount = 0;
    
    for(let i=0; i<map.length; i++){
        totalCount += findCOM(map[i], map);
    }
    return totalCount;
}

function findCOM(active, map, count){
    if(!count) count = 0;
    count++;
    // console.log('current node: ', active);

    if(active[0] === 'COM'){
        console.log('exit');
        return count;
    }else{
        let next = map.filter(orbit => orbit[1] === active[0]);
        for(let path of next){
            return findCOM(path, map, count);
        }
    }
}

// console.log(getOrbits(test));
console.log(getOrbits(full));