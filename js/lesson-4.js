let numberToObject = {
    units: 1,
    tens: 2,
    hunders: 3
}

function numToObj(input){
    let digits = input.toString().split('');
    if(digits.length>3){
        console.log("Only 3 digits");
        numberToObject={};
    }
    else {
        numberToObject.hunders = digits[0];
        numberToObject.tens = digits[1];
        numberToObject.units = digits[2];
    }
    return numberToObject;
}

console.log(numToObj(4123));