const {full} = require('./input.js');

function getFuelReq(modules){
    const moduleList = modules.split(/\n\s*/g);

    return moduleList.reduce((sum, el) => sum += getModuleFuel(el), 0);
}

function getModuleFuel(mass){
    return Math.floor(Number(mass) / 3) - 2;
}

// console.log(getModuleFuel(1969)); // 654
console.log(getFuelReq(full));