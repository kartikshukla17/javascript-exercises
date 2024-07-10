const fibonacci = function() {
    let start = [0,1]
    for (let i = 2; i < 100; i++) {
        start.push(start[i-1] + start[i-2])
        }
    return start.slice(0,100)
};

fibonacci()

// Do not edit below this line
module.exports = fibonacci;
