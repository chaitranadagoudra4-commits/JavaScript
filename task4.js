// Task 1 — For Loop
for(let i=1; i<=10; i++){
    console.log(i);
}



//Task 2 — Reverse Number
for (let a=10; a>=1; a--){
    console.log(a);
    
}



// Task 3 — Even Numbers
for(let i=1; i<=20; i++){
    if(i%2 === 0){
        console.log(i);
    }
}



//Task 4 — Odd Numbers
for(let i=1; i<=20; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}



// Task 5 — Multiplication Table
let tableNumber = Number(prompt("Enter a number"));

for(let i=1; i<=10; i++){
    let result = tableNumber * i;
    console.log(tableNumber + " * " + i + " = " + result);
}



//While Loop
//Task 6 — Countdown
let count = 10;
while(count >= 1){
    console.log(count);
    count--;
}



//Task 7 — Sum of Numbers
let i = 1;
let sum = 0;
while(i <= 10){
    sum = sum + i;
    i++;
}
console.log("The total sum is :", sum);



// Do While
//Task 8 — Print Numbers
let x = 1;
do{
    console.log(x);
    x++;
}while(x <= 5);



//Task 9 — Do While Understanding
let a = 10;
do {
    console.log("The o/p is =",a);
    a++;
} while (a <= 5);
//o/p is 10
//why because in do, while loop, the do block executes first before the condition is checked



//Task 10 — String Characters
let name = "javascript";
for(let character of name){
    console.log(character);
}



//Task 11 — Array Values
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for (let fruit of fruits){
    console.log(fruit);
}



//Task 12 — Student Names
let students = ["Chaitra", "Arun", "Priya", "Sushmita", "Venkatesh"];
for(let student of students){
    console.log("Student :", student);
}



//Task 13 — Employee Object
let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};
for(let key in employee){
    console.log(key + ":", employee[key]);
}



//Task 14 — Product Object
let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};
for(let key in product){
    console.log(key + ":", product[key]);
}



//Task 15 — Simple Function
function welcome(){
    console.log("Welcome to JavaScript");
}
welcome();
welcome();
welcome();



//Task 16 — Function With Parameter
function greet(name){
    console.log("Hello", name);
}
greet("Naveen");
greet("Arun");
greet("Priya");



//Task 17 — Multiple Parameters
function student(name, age, department){
    console.log("Name :", name);
    console.log("Age :", age);
    console.log("Department :", department);
}
student("Chaitra", 23, "ECE");
student("Sushmita", 25, "CSE");
student("Venkatesh", 19, "CSE");



//Task 18 — Addition Function
function add(a, b){
    return a + b;
}
let result = add(10 , 20);
console.log(result);



//Task 19 — Salary
function salary(amount){
    return amount;
}
let Amount = salary(30000);
console.log(Amount);



//Task 20 — Bonus Calculator
function bonus(salary, bonusAmount){
    return salary + bonusAmount;
}
let totalAmount = bonus(50000, 5000);
console.log(totalAmount);



//Task 21 Default Parameter
function employees(name, role = "Developer"){
    console.log("Name :", name);
    console.log("Role :", role);
}
employees("Chaitra");
employees("Priya", "Designer");



//Task 22 — Named Function
function square(number){
    return number * number;
}
console.log(square(2));
console.log(square(5));
console.log(square(8));
console.log(square(10));
console.log( square(15));



//Task 23 — Anonymous Function
let calculate = function(a, b){
    return a+b;
};
let c = calculate(2 , 3);
console.log("Result :", c);



//Task 24 — Arrow Function
let multiply = (a, b) => {
    return a*b;
};
let d = multiply(10 , 5);
console.log("Result =", d);



//Task 25 — Predict the Output
// function test() {

//     if (true) {

//         var x = 10;
//         let o = 20;
//         const z = 30;

//         console.log(x);
//         console.log(o);
//         console.log(z);
//     }

//     console.log(x);
//     console.log(o);
//     console.log(z);
// }
//test();
//o/p is 10 20 30 10
//bcz:
//var a can be accessed because var is function-scoped
//let b can't be accessed because let is block-scoped
//const c can't be accessed because const is block-scoped




//Task 26 — Predict
console.log(f);
var f = 10;
//undefined bcz var declarations are hoisted



//Task 27
//console.log(g);
//let g = 20;
//let is hoisted but cannot be accessed before its declaration so it gives a ReferenceError



//Task 28
// console.log(m);
// const m = 30;
//const is hoisted but cannot be accessed before its declaration, so it gives a ReferenceError

// var --- before declaration, it gives undefined
// let --- before declaration, it gives a ReferenceError
// const --- before declaration, it gives a ReferenceError



//IIFE
//Task 29 — Self Invoking Function
(function (){
    console.log("Welcome to JavaScript");
})();

(function (product, discount){
    console.log(product + " has a " + discount + "% discount");
})("Laptop", 20)



//Task 30. callback / Higher-Order Function
function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}
execute(welcome);
//welcome---Callback function,bcz we pass welcome as an argument to another function
//execute---Higher-order function, bcz it accepts another function (callback) as a parameter



//Generator Function
//Task 31 — Cashback
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackResult = cashback();

for (let value of cashbackResult) {
    console.log(value);
}
//yield returns values one by one from generator while return ends the function




//🏆 FINAL MINI PROJECT
//Task 32 — Employee Management Console
let employeeData = [
    {
        name : "Chaitra",
        age : 23,
        department : "IT",
        role : "Full Stack Developer",
        salary : 30000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];

for(let employee of employeeData){
    console.log(employee);
}

for(let employee of employeeData){
    for(let key in employee){
        console.log(key + " : ", employee[key]);
    }
}


function displayEmployee(name , age , department, role, salary){
    console.log("Name :", name);
    console.log("Age :", age);
    console.log("Department :", department);
    console.log("Role :", role);
    console.log("Salary :", salary);
}
displayEmployee("Chaitra", 23, "IT", "Full Stack Developer", 30000);


//5. Return
function getSalary(salary){
    return salary;
}

let returnSalary = getSalary(30000);
console.log("Returned Salary :", returnSalary);


//6. Condition
if(returnSalary >= 40000){
    console.log("Salary is 40000 or above");
}else{
    console.log("Salary is below 40000");
}


//7. Arrow function
let calculateBonus = (salary, bonusAmount) => {
    return salary + bonusAmount;
};
let salaryWithBonus = calculateBonus(30000 , 50000);
console.log("Salary With Bonus :", salaryWithBonus);


//8. Generator
function* employeeBenefits(){
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}
let benefits = employeeBenefits();
for(let benefit of benefits){
    console.log(benefit);
    
}
