//////////////////////////// Primitive Data //////////////////////////
// Primitive data types in JavaScript include:
///////////// Numbers - Integers, floats
///////////// Strings - Any data under single quote, double quote or backtick quote
///////////// Booleans - true or false value
///////////// Null - empty value or no value
///////////// Undefined - a declared variable without a value
///////////// Symbol - A unique value that can be generated by Symbol constructor

// Non-primitive data types in JavaScript includes:
///////////// Objects
///////////// Arrays
///////////// Functions

//Non-primitive data types  
//Primitive Data Types are immutable (non-modifyable) You can't change them
let word = "JavaScript";
word[0] = "Y";
console.log(word);

let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo)

let js = 'javascript';
let py = 'Python';

console.log(js == py);

let lightsOn = true;
let lightsOff = false;

console.log(lightsOn == lightsOff); false

//Non-Primitive Data Types are mutable (you can change them)

let myArr = [ 4, 5, 8, 9];
console.log(myArr[2]);
console.log(myArr);

let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums == numbers);
//This comes out false because they're non primative values, and they are "reference" type values, so the numerical value cannot be compared.

let userOne = {}

