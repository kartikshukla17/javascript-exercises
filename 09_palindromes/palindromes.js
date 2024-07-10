const palindromes = function (string) {
    return (string == string.toLowerString().split("").reverse().join(""));
};
palindromes('racecar')
palindromes('tacos')

// Do not edit below this line
module.exports = palindromes;
