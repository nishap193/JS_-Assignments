// ques1 -- create the example for logical operators
let a = 10;
let b = 20;
let c = 30;
console.log((a<b && a<c));   //AND operator
console.log((c>b || a>c));    // OR operator
console.log((a!=b));          // Not operator

//ques -- Take input from user and find the odd and even number.

let num = prompt("enter a number here :");
num = Number(num);
let result = (num%2==0);
console.log("is "+num+" even ?"+result);