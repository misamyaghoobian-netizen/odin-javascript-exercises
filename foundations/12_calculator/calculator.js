const add = function(a,b) { 
  return (+a+(+b))
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) { 
  let s=0
  for (let i = 0; i < array.length; i++) {
    s += array[i];  
  }
  return s;
};

const multiply = function(array) {
let s=1;
for (let i = 0; i < array.length; i++) {
  s *= array[i];
}
return s
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	let f=1;
  for (let i = 1; i <= a; i++) {
    f *= i;   
  }
  return f
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
