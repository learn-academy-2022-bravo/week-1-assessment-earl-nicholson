// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// creat a function
// two ranges to consider 0-212, 212-infanite
// one point to consider 212
// make a if else statment to log both ranges and set point
// use ${} to actively log the input into the output with the statment

const boilingPoint = (temp) => {
  if (temp == 212) {
    return `${temp} is at boiling point`
  } else if (temp > 212) {
    return `${temp} is above the boiling point`
  } else if (temp < 212) {
    return `${temp} is below the boiling point`
  }
}
console.log(boilingPoint(42));

const temp1 = 42
const temp2 = 350
const temp3 = 212


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// use .concat() to combine the array
// use .length to determine the length
// to maintain the two array create another varaible

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

let combinedArray = myNumbers1.concat(myNumbers2)
console.log(combinedArray.length);


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

// need to reverse the string
// change the string into an array
// reverse the array
// change the array back into a string
// make a new varaible to not change the base currentCohort

const currentCohort = "Bravo 2022"

let reverse = currentCohort.split(``).reverse().join(``)

console.log(reverse);


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// creat a loop
// use %2 to determin is the number is even or odd
// use a if else statment to log if each number is even or odd
// my loop is not giving the output expected
// i had to remove ${i} from console.log();

const myArray = [13, 34, 5, 10, 27, 42]

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] %2 === 0){
    console.log(`even`);
  } else if (myArray[i] %2 === 1) {
    console.log(`odd`);
  }
}


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// creat a function
// use an if else statement to determin the larger number1
// return larger number - smallest number
// console.log(); to test the funstion

const sub = (num1 , num2) => {
  if (num1 < num2) {
    return num2-num1
  } else if (num1 > num2){
    return num1-num2
  }
}
console.log(sub(27,24));

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24
