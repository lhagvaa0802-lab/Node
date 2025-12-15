const {add, subtract} = require('./math');

console.log(add(5, 3)); // 8
console.log (subtract(5, 3)) // 2


const {sayHello} = require('./greething');
console.log(sayHello()); // "Hello"

const { isEven } = require("./numberCheck");
console.log(isEven(5));



const {toUpper, wordLength} = require('./textUtils')

console.log(toUpper("hello")); // "HELLO"
console.log(wordLength("hello")); // 5




const {isAdult} = require('./ageCheck');
console.log(isAdult(20)); // "Adult"
console.log(isAdult(25)); // "Minor"
