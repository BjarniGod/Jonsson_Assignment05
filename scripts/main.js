/* Practice Assignment 6:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create an array named myPizzaOrder that cannot be reassigned and
// contains the 3 elements: "Pepperoni", 12.99, false

let myPizzaOrder = [ "Pepperoni", 12.99, false ];


// 2) Create a function named getPizzaType that will accept an array as a parameter and returns the 1st element from the array.

getPizzaType(myPizzaOrder);

function getPizzaType(array)
{     
    console.log(array[0]);
}

// 3) Create a function named addTax that will accept an array
// like your myPizzaOrder array as a parameter. The function will
// insert an element into the array between the 2nd and 3rd
// element in the array that is equal to the 2nd element multiplied
// by 0.0925 and rounded to the nearest penny (ie 0.95, 0.79, 0.42, etc).
// The function should return the array.
// ===========
// Hint: find the method that will allow you to set the decimals.

addTax(myPizzaOrder);

function addTax(array)
{
    let x = array[1] * 0.0925;
    let y = x.toFixed(2);
    array.splice(2, 0, y);
    console.log(array);
}

// 4) Create a function named completeOrder that will accept an array
// as a parameter. The function will change the value of the 4th
// element in the array to true and return the array.
let testArray = ["null", "einn", "tveir", "thrir", "fjorir", "fimm"];

completeOrder(testArray);

function completeOrder(array)
{
    array.splice(3, 1, true);
    console.log(array);
}

// 5) Create a function named allTheNumbers that accepts a number as
// a parameter. The function will create an array that contains all of
// the numbers from 1 to whatever number the parameter is. The array
// should not include the parameter number. The function returns
// the array.

allTheNumbers(10);

function allTheNumbers(number)
{
    let newArray = [];
    for(i = 0; i < number; i++)
    {
        newArray.splice(-1, 0, i);
    }
    newArray.splice(-1, 1);
    console.log(newArray);
}

// 6) Create a function named getEvens that accepts 2 parameters:
// startNum and endNum. The function should return an array that
// includes the even numbers from startNum to endNum. If the startNum
// or endNum are even, they should be included in the returned array.

getEvens(0, 21);

function getEvens(startNum, endNum)
{
    let newArray = [];
    for(i = startNum; i < endNum; i = i+2)
    {
        newArray.splice(-1, 0, i);
    }
    newArray.splice(-1, 1);
    console.log(newArray);
}

// 7) Create a function named getLastElement that accepts an array
// as a parameter and returns the last element of the array. The
// array can have any number of elements. The function should always
// return the last element.

getLastElement(testArray);

function getLastElement(array)
{
    lastElement = array.slice(-1);
    console.log(lastElement);
}

// 8) Create a function named combineArrays that accepts two arrays
// as parameters and combines them into one array. The function
// should return the new combined array.

combineArrays(myPizzaOrder, testArray);

function combineArrays(array1, array2)
{
    let newArray = array1.concat(array2);
    console.log(newArray);
}

// 9) Create a function named isPalindrome that accepts a string as
// a parameter. The function will return true if the string is a
// palindrome and false if the string is not. To check for a
// palindrome, remove all spaces and set to lowercase. The string
// will be identical both forward and reverse if it is a palindrome.
// For example: Taco Cat is a palindrome. tacocat is the same both
// forward and reverse.
// ==========
// Hints: There are several possible solutions for this. I use a
// combination of string and array methods. You can turn the string
// into an array, use arrays methods, and turn the array back into
// a string. This is also a challenge on freeCodeCamp. Check the
// help forums there if you get stuck!

isPalindrome("Race Car");

function isPalindrome(str)
{
    let newArray = /[\W_]/g;
    let originalStr = str.toLowerCase().replace(newArray, '');
    let reversedStr = originalStr.split('').reverse().join(''); 
    if(reversedStr == originalStr)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}


