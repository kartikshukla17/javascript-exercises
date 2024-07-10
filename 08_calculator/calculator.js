const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, Current) = total + Current,0);
};

const multiply = function(a,b) {
  return a*b;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  let fact = 1
	for (i =1; i< a; i++){
    fact = fact * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
