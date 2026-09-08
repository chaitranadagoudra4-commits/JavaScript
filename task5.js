// Q1: Difference between var, let, and const?
// var is function scoped and can be redeclared
// let is blocknscoped and cannot be redeclared in the same scope
// const is block scoped and cannot be redeclared or reassigned


// Q2: Can you re-declare a variable?
// var - Yes
// let - No
// const - No


// Q3: Output
var x = 5;
let y = 10;
const z = 15;

// x = 20;
// y = 25;
// z = 30;

// Output:
// 20 25
// z gives TypeError because const cannot be reassigned


// Q4: What is the difference between declaring and initializing a variable?
// Declaration means creating a variable.
// Initialization means assigning a value to the variable.

// Example:
let age;       // Declaration
age = 23;      // Initialization
// Or:
let name = "Chaitra"; // Declaration + Initialization


// Q5: Output
let a;
console.log(a);
// Output: undefined


// Q6: What is hoisting?
// Hoisting means JavaScript moves declarations to the top
// of their scope during execution.

// Example:
console.log(num);
var num = 10;
// Output: undefined


// Q7: Difference between null and undefined?
// undefined means a variable is declared but has no value.
// null means an intentional empty value.


// Q8: Output
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined
console.log(typeof []);         // object
console.log(typeof {});         // object



// Q9: Difference between == and ===?
// == checks value after type conversion.
// === checks both value and data type.

// Example:
console.log(5 == "5");   // true
console.log(5 === "5");  // false


// Q10: Difference between ++i and i++?
// ++i - increments first, then returns the value.
// i++ - returns the value first, then increments.


// Q11: Output
let x1 = 10;
let y1 = "5";

console.log(x1 + y1); // 105
console.log(x1 - y1); // 5
console.log(x1 * y1); // 50
console.log(x1 / y1); // 2


// Q12: Logical operators
// && - AND
// || - OR
// !  - NOT

console.log(true && true);   // true
console.log(true || false);  // true
console.log(!true);          // false


// Q13: Output
console.log(5 > 3 && 10 > 5);  // true
console.log(5 > 10 || 10 > 5); // true
console.log(!(5 > 3));         // false


// Q14: Ternary operator
// It is a short form of if-else.

// condition ? trueValue : falseValue

let age1 = 20;
let result1 = age1 >= 18 ? "Adult" : "Minor";
console.log(result1);
// Output: Adult



// Q15: Implicit vs Explicit type casting
// Implicit type casting is automatically done by JavaScript.
// Explicit type casting is manually done by the programmer.

// Example:

console.log("5" + 2);       // 52 - implicit conversion
console.log(Number("5"));   // 5  - explicit conversion


// Q16: Output
console.log(Number("123"));    // 123
console.log(Number("hello"));  // NaN
console.log(Number(true));     // 1
console.log(Number(false));    // 0
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true


// Q17: What is NaN?
// NaN means "Not a Number".
// It occurs when a value cannot be converted into a valid number.

// Example:
let number = Number("hello");
console.log(number);
// Output: NaN



// Q18: Difference between if-else and switch?
// if-else is useful for conditions and ranges.
// switch is useful for checking multiple fixed values.


// Q19: Output
let age2 = 20;

if(age2 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Output: Adult


// Q20: What is nested if?
// An if statement inside another if statement.

// Example:
let age3 = 20;

if(age3 >= 18) {

    if(age3 >= 21) {
        console.log("Eligible");
    } else {
        console.log("Not eligible");
    }

}


// Q21: Even or Odd using ternary

let number1 = 7;

let evenOdd = number1 % 2 === 0 ? "Even" : "Odd";

console.log(evenOdd);
// Output: Odd



// Q22: Difference between while and do-while?
// while checks the condition before executing the block.
// do-while executes the block first and checks the condition later.
// Therefore, do-while executes at least once.


// Q23: Output
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5


// Q24: Difference between for-of and for-in?
// for-of is used to get values from arrays or strings.
// for-in is used to get keys/indexes from objects or arrays.

// Example:
let fruits = ["Apple", "Banana"];

for(let fruit of fruits) {
    console.log(fruit);
}
// Apple
// Banana

for(let key in fruits) {
    console.log(key);
}
// 0
// 1


// Q25: Sum of numbers from 1 to 100

let sum = 0;

for(let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);
// Output: 5050



// Q26: Difference between slice and splice?
// slice() does NOT change the original array.
// splice() changes the original array.

// Example:

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(1, 3));
// Output: [2, 3]
// Original array remains unchanged.

arr1.splice(1, 2);
console.log(arr1);
// Output: [1, 4, 5]
// Original array is changed.


// Q27: Output
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);

// Output:
// [1, 2, 3]




// Q28: Function declaration vs function expression?
// Function declaration:
function add(a, b) {
    return a + b;
}

// Function expression:
let addition = function(a, b) {
    return a + b;
};

// Function declarations can be called before their declaration.
// Function expressions cannot be used before they are initialized.


// Q29: What is an arrow function?
// Arrow function is a shorter way to write a function.
// Example:

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 2));
// Output: 10


// Q30: Output
function greet() {
    return "Hello";
}

let message = greet();

console.log(message);

// Output:
// Hello