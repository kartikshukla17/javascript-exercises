const sumAll = function(a,b) {
    for (let sum = a ; sum <b+1 ; sum++){
        sum += sum
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
