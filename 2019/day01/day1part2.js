const {full} = require('./input.js');

function getFuelReq(modules){
    const moduleList = modules.split(/\n\s*/g);

    return moduleList.reduce((sum, el) => sum += getModuleFuel(el), 0);
}

function getModuleFuel(mass){
    let fuel = Math.floor(Number(mass) / 3) - 2;
    // console.log(fuel);
    if(fuel < 0){
        return 0;
    }else{
        return fuel + getModuleFuel(fuel);
    }
}

// console.log(getModuleFuel(1969)); // 966
console.log(getFuelReq(full));