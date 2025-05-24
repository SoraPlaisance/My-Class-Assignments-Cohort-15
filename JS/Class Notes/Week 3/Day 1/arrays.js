///////////////////////////////////////////////Welcome To Arrays///////////////////////////////
///////////////////////////////////////////Non-primitive data type/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
// How to create an empty array. 
// This the most recommended way to create an empty list. Here is a general syntax
// let arr=[]




//////////////////////////////////////////////////////////////////////////////////////////////
// How to create an array with values


//.........................................To Do..............................................
//Create an array with values and then console log the list and its length  
// array of numbers



// array of strings, fruits


// array of web technologies


// /////////////////////////////////////////////////////////////////////////////////////////////
// Creating an array using split


//.........................................To Do..............................................
//For the two strings use a split method to conosole.log and see the list of arrays





// /////////////////////////////////////////////////////////////////////////////////////////////
//Accessing array items using index

const fruits = ['banana', 'orange', 'mango', 'lemon']
//index of Fruit////0/////////1////////2////////3////





//.........................................To Do..............................................
//console how many are in  my shoping bag, just accsess and pring potato, Milk and sugar. Replace Avocado with Onion
const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
  ] // List of food products




//////////////////////////////////////////////////////////////////////////////////////////////
// Modifying array element
const numbers = [1, 2, 3, 4, 5]
/////////////////0//1//2




//////////////////////////////////////////////////////////////////////////////////////////////
// Methods to manipulate array

//push(item): add to end
nums.push(6);
console.log('After push:', nums);
// -> [1,2,30,4,5,6]

//pop(): remove and return last element
let last = nums.pop();
console.log('Popped value:', last); //6
console.log('After pop:', nums); //[1,2,30,4,5]

// unshift(item): add to front
nums.unshift(0);
console.log('After unshift:', nums); //[0,1,2,30,4,5]

//shift(): remove and return first element
let first = nums.shift();
console.log('Shifted value:', first); // 0
console.log('After shift:', nums); //[1,2,30,4,5]

//splice(start, deleteCount, ...items): modify at arbitrary position
//at index 3, remove 1, insert 40, 50
nums.splice(3, 1, 40, 50);
console.log('After splice', nums);
// -> [1,2,30,40,50,5}

//slice(start, end): make a shallow copy (end not included)
let part - nums.slice(2, 5);
console.log('Slice 2-4:', part);
// -> [30,40,50]




//Getting index an element in arr array (To check if an item exist in an array.)

// index


//Getting index an element in arr array (To check if an item exist in an array.)



//Arrays of arrays