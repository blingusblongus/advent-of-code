import { input } from './input.js';
const parseInput = (input) => {
    let arr = input.split(/\n/g);
    return arr.map(x => x.split(/\s/g));
};
const getFileSystem = (lines, files = {}) => {
    let fileMap = {};
    let currDir = fileMap;
    const path = [];
    try {
        for (let line of lines) {
            // console.log(line);
            if (line[0] === '$') { //commands
                if (line[1] === 'cd') {
                    if (line[2] === '/') {
                        currDir = fileMap;
                        path.push('/');
                    }
                    else if (line[2] === '..') { // follow path to up one level
                        path.pop();
                        console.log('path ', path);
                        path.forEach(loc => loc === '/' ?
                            currDir = fileMap :
                            currDir = currDir[loc]);
                    }
                    else {
                        currDir = currDir[line[2]];
                        path.push(line[2]);
                    }
                    // console.log('path = ', path);
                    // console.log(fileMap);
                }
            }
            else if (line[0] === 'dir') { // directories
                currDir[line[1]] = {};
            }
            else {
                currDir[line[1]] = Number(line[0]);
            }
        }
    }
    catch (err) {
        console.log(err);
    }
    return fileMap;
};
const getDirSizes = (dir, dirs = new Map(), loc = '/') => {
    let sum = 0;
    for (let item in dir) {
        if (typeof dir[item] === 'object') {
            sum += getDirSizes(dir[item], dirs, item)[0];
        }
        else {
            sum += dir[item];
        }
    }
    console.log(`sum at ${loc}:`, sum);
    dirs.set(loc, sum);
    return [sum, dirs];
};
const solvePuzzle = (input) => {
    const files = getFileSystem(parseInput(input));
    console.log(files);
    const sizeMap = getDirSizes(files)[1];
    console.log('sizeMap', sizeMap);
    console.log('filtered sizeMap', Array.from(sizeMap.values())
        .filter(x => x <= 100000)
    // .reduce((sum, el) => sum += el, 0)
    );
    const sumDeletable = Array.from(sizeMap)
        .filter(x => x[1] <= 100000)
        .reduce((sum, el) => sum += el[1], 0);
    return sumDeletable;
};
console.log(solvePuzzle(input));
