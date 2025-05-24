///////////////////////////////////////////////Welcome To Booleans, Null, Undfined ///////////////////////////////
///////////////////////////////////////////primitive data types/////////////////////////////

//What is a boolean data type? 

//A Boolean is a Primative data type that can hold only one of two values: true or false
let isLoggedIn = false;
const HASPERMISSION = true

//check if user is an adult
let age = 21
let isAdult = (age >= 18);
console.log(isAdult); true

/////////////////////what are Truthy values?/////////////////////////////

// Javascript treats all values as either truthy or falsy when used in a Boolean context (inside an if statement)

// Everything else is truthy-- including non-empty strings, non-zero numbers, objects, arrays, and functions
if ('hello') {
    console.log('This runs because non-empty strings are truthy.'); 'This runs because non-empty strings are truthy.'
}

if ({} && []) {
    console.log("Empty object/array are truthy!"); 'Empty object/array are truthy!'
}
//Rely on ===(strict equality) rather than truthiness alone when exact type matching matters

///////////////////////what are falsy values?/////////////////////////// 

// Falsy values: false, 0(zero), ''or"", null, undefined, NAN(Not-a-Number)
if (0){
    //never run, because 0 falsy
}

///////////////////////////Undefined ////////////////////////////////

//It's the default value for:
//variables declared but not initialized
//missing function parameters
//object properties/array indices that do not exist
let allArr = [1,2,3];
console.log(allArr[3])

let foo;
console.log(foo);

function greet(name) {
    console.log('Hello' + name) 'Hello, undefined'
}
console.log(greet())

///////////////////////////Null//////////////////////////////////////

