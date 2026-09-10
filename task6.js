//Task 1 — Student Result Analyzer
function studentResult(name, department, mark1, mark2, mark3, mark4, mark5){
    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let avg = total/5;
    
    let result;
    if(avg >= 50){
        result = "Pass";
    }else{
        result = "Fail";
    }

    
    if(avg >= 90){
        grade = "A";
    }else if(avg >= 75){
        grade = "B";
    }else if(avg >= 60){
        grade = "C";
    }else if(avg >= 50){
        grade = "D";
    }else{
        grade = "Fail";
    }
    console.log("Name :", name);
    console.log("Department :", department);
    console.log("Total Marks :", total);
    console.log("Average :", avg);
    console.log("Result :", result);
    console.log("Grade :", grade);
 }
 studentResult("Chaitra", "IT", 90, 85, 80, 75, 95);



 //Task 2 — Employee Salary Calculator
 let employee = {
    name : "Chaitra",
    role : "Developer",
    salary : 45000,
    experience : 6
 };

 function calculateSalary(employee){
    let basicSalary = employee.salary;

    let bonus = 0;
    if(employee.experience >= 5){
        bonus = (basicSalary * 15) / 100;
    }else if(employee.experience >= 2){
        bonus = (basicSalary *10) / 100;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Name :", employee.name);
    console.log("Role :", employee.role);
    console.log("Basic Salary :", basicSalary);
    console.log("Bonus :", bonus);
    console.log("Final Salary :", finalSalary);
}
calculateSalary(employee);



//Task 3 — Product Filter System
let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

//1. Get products above ₹2,000
let expensiveProducts = products.filter((product) => {
    return product.price > 2000;
});
console.log("Products above 2000 :", expensiveProducts);


// 2. Get only electronics
let electronics = products.filter((product) => {
    return product.category === "electronics";
});
console.log("Electronics :", electronics);


// 3. Find the first product below ₹1,000
let cheapProduct = products.find((product) => {
    return product.price < 1000;
});
console.log("First product below 1000 :", cheapProduct);


// 4. Calculate total price of all products
let totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);
console.log("Total Price :", totalPrice);


// 5. Check whether any product costs more than ₹50,000
let expensive = products.some((product) => {
    return product.price > 50000;
});
console.log("Any product above 50000 :", expensive);


// 6. Check whether every product has a price above ₹500
let above500 = products.every((product) => {
    return product.price > 500;
});
console.log("Every product above 500 :", above500);




//Task 4 — Employee Management
let employeeData = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 45000
    },
    {
        id: 103,
        name: "Priya",
        role: "HR Executive",
        salary: 50000
    },
    {
        id: 104,
        name: "Rahul",
        role: "Full Stack Developer",
        salary: 60000
    },
    {
        id: 105,
        name: "Divya",
        role: "UI Designer",
        salary: 35000
    },
    {
        id: 106,
        name: "Karthi",
        role: "Software Engineer",
        salary: 55000
    }
];


// 1. Display all employee names
let allNames = employeeData.map((person) => {
    return person.name;
});
console.log("Employee Names :", allNames);


// 2. Display employees earning above ₹40,000
let highSalary = employeeData.filter((person) => {
    return person.salary > 40000;
});
console.log("Employees earning above 40000 :", highSalary);


// 3. Find employee with ID 103
let selectedEmployee = employeeData.find((person) => {
    return person.id === 103;
});
console.log("Employee with ID 103 :", selectedEmployee);


// 4. Calculate total salary
let salaryTotal = employeeData.reduce((total, person) => {
    return total + person.salary;
}, 0);
console.log("Total Salary :", salaryTotal);


// 5. Find highest-paid employee
let topEmployee = employeeData.reduce((highest, person) => {
    return person.salary > highest.salary ? person : highest;
});
console.log("Highest Paid Employee :", topEmployee);


// 6. Sort employees from highest salary to lowest
let salaryOrder = [...employeeData].sort((a, b) => {
    return b.salary - a.salary;
});
console.log("Employees sorted by salary :", salaryOrder);


// 7. New array containing only employee names
let nameList = employeeData.map((person) => {
    return person.name;
});
console.log("Names Only :", nameList);




//Task 5 — Shopping Cart
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

let calculateCart = (cart) => {
    let total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    let discount = 0;
    if(total > 50000){
        discount = total * 10 / 100;
    }

    let finalAmount = total - discount;
    
    console.log("Total Cart Value :", total);
    console.log("Discount:", discount);
    console.log("Final Payable Amount :", finalAmount);
};
calculateCart(cart);




//Task 6 — Student Search System
let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

// 1. Display all student names
let studentNames = students.map((student) => {
    return student.name;
});
console.log("Students Names :", studentNames);


// 2. Display students who scored above 80
let above80 = students.filter((student) => {
    return student.mark > 80;
});
console.log("Students above 80 :", above80);


// 3. Find student named "Priya"
let student = students.find((student) => {
    return student.name === "Priya";
});
console.log("Student Priya :", student);


// 4. Calculate average mark
let totalMarks = students.reduce((total, student) => {
    return total + student.mark;
}, 0);

let avgMark = totalMarks / students.length;
console.log("Average Marks :", avgMark);


// 5. Check whether anyone failed
let failed = students.some((student) => {
    return student.mark < 50;
});
console.log("Anyone failed :", failed);


// 6. Check whether everyone scored above 40
let everyOneAbove40 = students.every((student) => {
    return student.mark > 40;
});
console.log("Everone above 40 :", everyOneAbove40);


// 7. Sort students by marks
let sortedStudents = students.sort((a, b) => {
    return b.mark - a.mark;
});
console.log("Students sorted by marks :",sortedStudents);




//Task 7 — Array Transformation Challenge
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// 1. Create a new array containing numbers × 2
let doubledNumbers = numbers.map((number) => {
    return number * 2;
});
console.log("Numbers *2 :", doubledNumbers);


// 2. Get only even numbers
let evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log("Even Numbers :", evenNumbers);


// 3. Get numbers greater than 15
let graterThan15 = numbers.filter((number) => {
    return number > 15;
});
console.log("Numbers greate than 15 :", graterThan15);


// 4. Find the first number greater than 20
let firstGreateThan20 = numbers.find((number) => {
    return number > 20;
});
console.log("First number greater than 20 :",firstGreateThan20);


//// 5. Find total of all numbers
let total = numbers.reduce((sum, number) => {
    return sum + number;
},0);
console.log("Total :", total);


// 6. Check whether any number is greater than 40
let anyGreaterThan40 = numbers.some((number) => {
    return number > 40;
});
console.log("Any number grater than 40 :", anyGreaterThan40);


// 7. Check whether every number is positive
let allPositiveNumber = numbers.every((number) => {
    return number > 0;
});
console.log("Every number is positive :", allPositiveNumber);


// 8. Sort from highest to lowest
let sortedNumbers = numbers.sort((a, b) => {
    return b - a;
});
console.log("Highest to lowest :", sortedNumbers);




//Task 8 — String Analyzer
let sentence = prompt("Enter a sentence");
console.log("Total Characters :",sentence.length);
console.log("Uppercase Sentences :",sentence.toUpperCase());
console.log("Lowercase Sentences :",sentence.toLowerCase());
console.log("Contains JavaScript :",sentence.includes("JavaScript"));
console.log("First Character :",sentence.slice(0, 1));
console.log("Last Character :",sentence.slice(-1));

let words = sentence.split(" ");
console.log("Number of Words :",words.length);
console.log("After Replace :",sentence.replace("JavaScript", "Python"));
console.log("Sentence Array :",sentence.split(" "));




// Final Mini Project — Employee Dashboard
// 🔥 Final Mini Project — Employee Dashboard

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Employee List
console.log("----- Employee List -----");

employees.forEach((employee) => {
    console.log(employee);
});


// 2. Search Employee by Name
let searchName = prompt("Enter employee name to search");

let searchedEmployee = employees.find((employee) => {
    return employee.name.toLowerCase() === searchName.toLowerCase();
});
console.log("----- Search Result -----");
console.log(searchedEmployee);


// 3. Department Filter
let departmentEmployees = employees.filter((employee) => {
    return employee.department === "IT";
});
console.log("----- IT Employees -----");
console.log(departmentEmployees);


// 4. Salary Filter
let highSalaryEmployees = employees.filter((employee) => {
    return employee.salary > 50000;
});
console.log("----- Employees Earning More Than 50000 -----");
console.log(highSalaryEmployees);


// 5. Total Company Salary
let totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);
console.log("Total Company Salary :", totalSalary);


// 6. Highest Salary
let highestSalaryEmployee = employees.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
});
console.log("----- Highest Paid Employee -----");
console.log(highestSalaryEmployee);


// 7. Employees with More Than 3 Years Experience
let experiencedEmployees = employees.filter((employee) => {
    return employee.experience > 3;
});
console.log("----- Employees With More Than 3 Years Experience -----");
console.log(experiencedEmployees);


// 8. Sorting Low to High
let lowToHigh = [...employees].sort((a, b) => {
    return a.salary - b.salary;
});
console.log("----- Salary Low to High -----");
console.log(lowToHigh);


// Sorting High to Low
let highToLow = [...employees].sort((a, b) => {
    return b.salary - a.salary;
});
console.log("----- Salary High to Low -----");
console.log(highToLow);


// 9. Statistics
let totalEmployees = employees.length;
let averageSalary = totalSalary / totalEmployees;
console.log("----- Employee Statistics -----");
console.log("Total Employees :", totalEmployees);
console.log("Total Salary : ₹" + totalSalary);
console.log("Highest Salary : ₹" + highestSalaryEmployee.salary);
console.log("Average Salary : ₹" + Math.round(averageSalary));












