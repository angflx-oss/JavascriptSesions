//1. Common JS - require
//2. Import ES6 - import

// const moduleMaths = require("./moduos/maths");
// const { factorial, suma } = moduleMaths;

const {factorial,suma} = require("./moduos/maths");

const fact = factorial(5);
console.log(fact);

const sum = suma(12,90);
console.log(sum);