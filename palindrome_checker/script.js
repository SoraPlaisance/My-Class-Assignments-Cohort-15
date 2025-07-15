//'palindrome' is the function's identifier, which must adhere to valid naming conventions (letters, digits, underscores, and dollar signs; not starting with a digit).
//'(str)' defines a single parameter named 'str'. Upon invocation, e.g., 'palindrome("racecar"), the argument "racecar" is assigned to 'str; within the function's scope.

function palindrome(str) {
    //'var regularStr' declares a function-scoped variable.
    //The '=' assignment operator stores the result of the right-hand expression.
    //'str.replace(/[\\W_]/g'')' employs the .replace() string method to remove unwanted characters

    var regularStr = str.replace(/[\\W_]/g, '').toLowerCase();
    

    //`regularStr.split('')`: ○  The `.split()` string method, when passed an empty string `''`, divides `regularStr` into an array of single-character strings. 
    //`.reverse()`:  This array method reverses the order of elements in place. 
    //`.join('')`:  This array method, when passed `''`, concatenates array elements back into a single string without separators. 

    var reverseStr = regularStr.split('').reverse().join('');


    //'return' terminates the function's execution and transmits a value back to the caller
    // uses '===' to make sure everything is strictly equal; it compares both value and type.
    // if the cleaned string reads identically forwards and backwards, the function returns 'true'; otherwise it returns 'false'.

    return regularStr === reverseStr;
}

var revHippo = "Hippopotamus"
"Hippopotamus".split(",").reverse().join("");