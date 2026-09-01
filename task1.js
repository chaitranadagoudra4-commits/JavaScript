// Task 1 — var, let, const

var studentName = "Chaitra";
let studentAge = 23;
const collegeName = "SMVIT Bangalore";

//1. Print all three values.
console.log(studentName);
console.log(studentAge);
console.log(collegeName);

//2. Change the var value
var studentName = "Sushmita";
console.log(studentName);


//3. Change the let value.
studentAge = 26;
console.log(studentAge);

//4. Try changing the const value and observe the error.
//collegeName = "SDM Dharwad"
//this gives an error bcz const cannot be reassigned

//5. Try redeclaring the var variable.
var studentName = "Priya";
console.log(studentName);

//6. Try redeclaring the let variable and observe the error.
// let studentAge = 28;
// this gives an error bcz let cannot be redeclared



//Task 2. User Information

let userName = prompt("Enter Your Name");
let age = prompt("Enter Your Age");
let city = prompt("Enter Your City");

console.log(userName);
console.log(age);
console.log(city);


// Task 3. Welcome Message
let name = prompt("Enter Your Name");
alert("Welcome" + " " +  name + "!");


// Task 4. Age Calculator 
let birthYear = prompt("Enter Your Birth Year");
let currentYear = 2026;
let Age = currentYear - birthYear;
console.log("Birth Year:", birthYear );
console.log("Age:", Age);


// Task 5. Identify Data Types
let text = "Hello";
let number = 100;
let decimal = 25.5;
let isTrue = false;
let valueUndefined;
let valueNull = null;

console.log(typeof text);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof isTrue);
console.log(typeof valueUndefined);
console.log(typeof valueNull);


// Task 6. Student Data
let student = {
    name: "Chaitra",
    age: 23,
    city: "Bangalore",
    qualification: "BE",
    isStudent: true
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);


//Task 7. Fruit Array
let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);


//Task 8. Basic Calculator
let a = 20;
let b = 5;

// Addition
console.log("Addition:", a + b);

// Subtraction
console.log("Subtraction:", a - b);

// Multiplication
console.log("Multiplication:", a * b);

// Division
console.log("Division:", a / b);

// Modulus
console.log("Modulus:", a % b);

// Exponentiation
console.log("Exponentiation:", a ** b);


//Task 9. Shopping Bill
let shirt = 999;
let pant = 1499;
let shoes = 1999;
let totalPrice = shirt + pant + shoes;
console.log("Total =", totalPrice);


//Task 10. Simple Marks Calculation
let tamil = 80;
let english = 75;
let maths = 90;
let total = tamil + english + maths;
let average = total / 3;
console.log("Total Marks:", total);
console.log("Average Marks:", average);


//Task 11. Post Increment
let c = 10;
let d = c++;
console.log(c);
console.log(d)


//Task 12. Pre Increment
let e = 10;
let f = ++e;
console.log(e);
console.log(f);


//Task 13. Post Decrement
let g = 20;
let h = g--;
console.log(g);
console.log(h);


//Task 14. Pre Decrement
let i = 20;
let j = --i;
console.log(i);
console.log(j);


//Task 15. Find the final values
let k = 5;
let l = k++;
let m = ++k;
let n = l--;
console.log(k);
console.log(l);
console.log(m);
console.log(n);


//Task 16. Assignment operators
let num = 10;
num += 5;
console.log(num);

num = 10;
num -= 5;
console.log(num);

num = 10;
num *= 5;
console.log(num);

num = 10;
num /= 5;
console.log(num);

num = 10;
num %= 5;
console.log(num);

num = 10;
num **= 5;
console.log(num);


//Task 17. Mini student profile
// Variables
let studentProfileName = "Chaitra";
let studentProfileAge = 23;
let studentProfileCity = "Bangalore";
let studentProfileCollege = "SMVIT Bangalore";

// Array
let favoriteSubjectList = [
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
    "SQL"
];

// Object
let studentProfileData = {
    name: studentProfileName,
    age: studentProfileAge,
    city: studentProfileCity,
    subjects: favoriteSubjectList,
    isStudent: true
};

console.log(studentProfileData.name);
console.log(studentProfileData.age);
console.log(studentProfileData.city);
console.log(studentProfileData.subjects[0]);
console.log(studentProfileData.subjects[studentProfileData.subjects.length - 1]);
console.log(studentProfileData.subjects.length);
console.log(studentProfileData);



//Final Challenge--- User + Calculator

let o= Number(prompt("Enter first number"));
let p = Number(prompt("Enter second number"));
console.log("Addition:", o + p);
console.log("Subtraction:", o - p);
console.log("Multiplication:", o * p);
console.log("Division:", o / p);
console.log("Modulus:", o % p);
console.log("Power:", o ** p);



