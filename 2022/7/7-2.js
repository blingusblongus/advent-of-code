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
const getDirSizes = (dir, dirs = [], loc = '/') => {
    let sum = 0;
    for (let item in dir) {
        if (typeof dir[item] === 'object') {
            sum += getDirSizes(dir[item], dirs, item)[0];
        }
        else {
            sum += dir[item];
        }
    }
    dirs.push([loc, sum]);
    return [sum, dirs];
};
const solvePuzzle = (input) => {
    const totalSpace = 70000000;
    const files = getFileSystem(parseInput(input));
    console.log(files);
    const sizeMap = getDirSizes(files);
    const freeSpace = totalSpace - sizeMap[0];
    const spaceNeeded = 30000000 - freeSpace;
    sizeMap[1].sort((a, b) => a[1] - b[1]);
    for (let dir of sizeMap[1]) {
        if (dir[1] > spaceNeeded)
            return dir[1];
    }
    return -1;
};
console.log(solvePuzzle(input));
