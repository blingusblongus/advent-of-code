const { test, test2, full } = require('./input.js');

function getJumps(map){
    map = map.split(/\n\s*/g).map(orbit => {
        return orbit.split(')');
    });

    // find your starting and ending tag
    let start = map.filter(x => x[1] === 'YOU')[0];
    let end = map.filter(x => x[1] === 'SAN')[0];

    // find the paths to universal center of mass
    let startToCOM = findTarget(start, map, 'COM');
    let endToCOM = findTarget(end, map, 'COM');

    // find the first place where the paths intersect 
    let joint;
    for(let node of startToCOM){
        if(endToCOM.includes(node)){
            joint = node;
            break;
        }
    }

    // slice the paths at the intersection
    let startToJoint = startToCOM.slice(0, startToCOM.indexOf(joint));
    let endToJoint = endToCOM.slice(0, endToCOM.indexOf(joint));

    // add the lengths of the routes, 
    // subtract one each for the starting and ending tags
    return startToJoint.length + endToJoint.length - 2;
}

// this function now returns a route to the target, rather than the count
function findTarget(active, map, target, route = []){
    route.push(active[1]);

    if(active[0] === target){
        console.log('exit');
        console.log(route);
        return route;
    }else{
        let next = map.filter(orbit => orbit[1] === active[0]);
        for(let path of next){
            return findTarget(path, map, target, route);
        }
    }
}

// console.log(getJumps(test2));
console.log(getJumps(full));