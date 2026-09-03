//Task 1 — Variables
var name = "Chaitra";
let age = 23;
const city = "Belagavi";
let college = "SMVIT Bangalore";

console.log("Name :", name);
console.log("Age :", age);
console.log("City :", city);
console.log("College :", college);

var name = "Sushmita";
console.log("Name :", name); // var allows redeclaration

age = 25;
college = "SDM Dharawad"; // let does not allows Redeclaration
console.log("Age :", age);
console.log("College :", college);

// city = "Bengaluru";
// Error: Assignment to constant variable
// const does not allow redeclaration



//Task 2 — Printing Statements
console.log("Hello, Priya!");
alert("Welcome to JS class!");
confirm("Do you want to continue?");
prompt("What is your qualification?");
document.writeln("JavaScript is easy to learn!");



//Task 3 — User Details
let userName = prompt("Enter Your Name");
let userAge = prompt("Enter Your Age");
let userCity = prompt("Enter Your City");
let userQualification = prompt("Enter Your Qualification");

console.log("userName :", userName);
console.log("userAge :", userAge);
console.log("userCity :", userCity);
console.log("userQualification :", userQualification);



//Task 4 — Find Data Types
let language = "JavaScript";
let number = 100;
let decimal = 99.5;
let isLearning = true;
let isCompleted = false;
let notDefined = undefined;
let emptyValue = null;

console.log(language);
console.log(number);
console.log(decimal);
console.log(isLearning);
console.log(isCompleted);
console.log(notDefined);
console.log(emptyValue);

console.log(typeof(language));
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof isLearning);
console.log(typeof isCompleted);
console.log(typeof notDefined);
console.log(typeof(emptyValue));



//Task 5 — Student Array
let studentNames = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log(studentNames[0]);
console.log(studentNames[1]);
console.log(studentNames[studentNames.length - 1]);
console.log(studentNames.length);



//Task 6 — Employee Object
let employee = {
    name : "Chaitra",
    age : 23,
    role : "Full Stack Developer",
    skills : ["HTML", "CSS", "JavaScript"],
    isWorking : true,
    qualification : ["B.E" , "JavaScript Course"] 
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.role);
console.log(employee.skills[0]);
console.log(employee.qualification[employee.qualification.length - 1]);
console.log(employee.isWorking);



//Task 7 — Calculator
let a = 20;
let b = 5;

console.log("Addition :", a+b);
console.log("Subtraction :", a-b);
console.log("Multiplication :", a*b);
console.log("Division :", a/b);
console.log("Modulus :", a%b);
console.log("Exponentiation:", a**b);



//Task 8 — Shopping Bill
let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;
let totalPrice = shirt + pant + shoes + bag;
console.log("Total Price :", totalPrice);



//Task 9 — Increment & Decrement
let c = 10;
let d = c++;
console.log(c);
console.log(d);

let e = 10;
let f = ++e;
console.log(e);
console.log(f);

let g = 10;
let h = g--;
console.log(g);
console.log(h);

let i = 10;
let j = --i;
console.log(i);
console.log(j);



//Task 10. Assignment Operator Tasks
let num = 10;

num = 10;
num += 5
console.log(num);

num = 10;
num -= 3
console.log(num);

num = 10;
num *= 2
console.log(num);

num = 10;
num /= 4
console.log(num);

num = 10;
num %= 3
console.log(num);

num = 10;
num **= 2
console.log(num);



//Task 11 — Find Output
console.log(10 > 5);      //true
console.log(10 < 5);      //false
console.log(10 >= 10);    //true
console.log(10 <= 9);     //false

console.log(5 == "5");    //true
console.log(5 === "5");   //false

console.log(10 != "10");  //false
console.log(10 !== "10"); //true



//Task 12 — AND
console.log(true && true);   //true
console.log(true && false);  //false
console.log(false && true);  //false
console.log(false && false); //false


//Task 13 — OR
console.log(true || true);   //true
console.log(true || false);  //true
console.log(false || true);  //true
console.log(false || false); // false


//Task 14 — NOT
console.log(!true);         //false
console.log(!false);        //true
console.log(!(5 > 10));     //true
console.log(!(10 > 5));     //false



//Task 15 — Combination
console.log(5 == "5" && !(5 === 5) || 6 > 7); 
            //true && false || false
            //false || false  = false

console.log(10 > 5 && 8 < 12 || 4 === "4"); 
            //true && true || false
            //true || false  = true

console.log(7 === 7 && 10 != "10" || 5 >= 5);
            //true && false || true 
            //false || true  = true

console.log(15 < 10 || 20 > 15 && 5 == "5"); 
           //false || true && true
           //true && true  =  true   



//Task 16 — Ternary Operator Tasks
let votingAge = 20;
let votingResult = votingAge >= 18 ? "Eligible to vote" : "Not eligible";
console.log(votingResult);



//Task 17 — Password
let password = true;
let loginResult = password === true ? "Login successful" : "Wrong password";
console.log(loginResult);



//Task 18 — User Introduction
let personName = "Chaitra";
let age1 = 23;
let city1 = "Belagavi";
console.log("My name is " + personName + ". I am " + age1 + " years old. I live in " + city1 + ".");
console.log(`My name is ${personName}. I am ${age1} years old. I live in ${city1}.`);



//Task 19 — String Conversion
console.log(String(100));
console.log(String(true));
console.log(String(undefined));
console.log(String(null));
console.log(String([1, 2]));

console.log(typeof(String(100)));
console.log(typeof(String(true)));
console.log(typeof(String(undefined)));
console.log(typeof(String(null)));
console.log(typeof(String([1, 2])));



//Task 20 — Number Conversion
console.log(Number());            //0
console.log(Number(""));          //0
console.log(Number("123"));       // 123
console.log(Number("a1"));        //NaN
console.log(Number(true));        //1
console.log(Number(false));       //0
console.log(Number(undefined));   //NaN
console.log(Number(null));        //0



//Task 21 — Boolean Conversion
console.log(Boolean());              //false
console.log(Boolean(""));            //false
console.log(Boolean("hello"));       //true
console.log(Boolean(123));           //true
console.log(Boolean(true));          //true
console.log(Boolean(false));         //false
console.log(Boolean(undefined));     //false
console.log(Boolean(null));          //false
console.log(Boolean([]));            //true
console.log(Boolean({}));            //true



//Task 22 — Voting Eligibility
let votingUserAge = Number(prompt("Enter your age"));

if(votingUserAge >= 18){
    console.log("You can vote");
    
}else{
    console.log("You can't vote");
    
}



//ask 23 — Positive or Negative
let checkNumber = Number(prompt("Enter a number"));

if(checkNumber > 0){
    console.log("Positive");
    
}else if(checkNumber < 0){
    console.log("Negative");
    
}else{
    console.log("Zero");
    
}



//Task 24 — Grade System
let marks = Number(prompt("Enter your marks"));

if(marks >= 90 && marks <= 100){
    console.log("A Grade");
    
}else if(marks >= 80 && marks <=89){
    console.log("B Grade");
    
}else if(marks >= 70 && marks <= 79){
    console.log("C Grade");
    
}else if(marks >= 60 && marks <= 69){
    console.log("D Grade");
    
}else{
    console.log("Fail");
    
}



//Task 25 — Job Eligibility
let jobAge = Number(prompt("Enter your age"));
let jobHeight = Number(prompt("Enter your height"));
let jobWeight = Number(prompt("Enter your weight"));

if(jobAge >= 18){
    if(jobHeight >= 160){
        if(jobWeight >= 60){
            console.log("Congratulations! You are selected");
            
        }else{
            console.log("You are not selected because your weight is below 60");
            
        }
    }else{
        console.log("You are not selected because your height is below 160");
        
    }
}else{
    console.log("You are not selected because your age is below 18");
    
}



//Task 26 — Traffic Light
let trafficColor = prompt("Enter traffic light color");

switch(trafficColor){
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}



//Task 27 — Day
let day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;
        
    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;
        
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}



// FINAL MINI PROJECT
//Task 28 — Student Result System
let resultStudentName = prompt("Enter your name");
let resultStudentAge = Number(prompt("Enter your age"));
let resultStudentCity = prompt("Enter your city");

let kannadaMarks = Number(prompt("Enter Kannada marks"));
let englishMarks = Number(prompt("Enter English marks"));
let mathsMarks = Number(prompt("Enter Maths marks"));

let resultTotalMarks = kannadaMarks + englishMarks + mathsMarks;
let resultAverageMarks = resultTotalMarks / 3;

let resultGrade;
if (resultAverageMarks >= 90) {
    resultGrade = "A";
} else if (resultAverageMarks >= 80) {
    resultGrade = "B";
} else if (resultAverageMarks >= 70) {
    resultGrade = "C";
} else if (resultAverageMarks >= 60) {
    resultGrade = "D";
} else {
    resultGrade = "Fail";
}


let resultVotingStatus;
if (resultStudentAge >= 18) {
    resultVotingStatus = "Eligible";
} else {
    resultVotingStatus = "Not Eligible";
}

console.log(`
Name: ${resultStudentName}
Age: ${resultStudentAge}
City: ${resultStudentCity}
Total: ${resultTotalMarks}
Average: ${resultAverageMarks.toFixed(2)}
Grade: ${resultGrade}
Voting: ${resultVotingStatus}
`);






















