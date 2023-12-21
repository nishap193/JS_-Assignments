// Q 1. Find Grades-------------------------

function findGrades() {
    switch (true) {
        case (marks >= 0 && marks <= 10):
            console.log("E");
            break;

        case (marks >= 11 && marks <= 20):
            console.log("D");
            break;

        case (marks >= 21 && marks <= 30):
            console.log("C");
            break;

        case (marks >= 31 && marks <= 40):
            console.log("B");
            break;

        case (marks >= 41 && marks <= 50):
            console.log("A");
            break;

        default:
            console.log("Fail");
    }
}
let marks = Number(prompt("Enter marks here:"));
findGrades();


// Q 2. Get Value--------------------
let val = prompt("Enter a alphabet here");
function getValue(){
    if (val == "p" || val == "P") {
        console.log("PreBytes");
    } else if (val == "z" || val == "Z") {
        console.log("Zenith");
    } else if (val == "e" || val == "E") {
        console.log("Expert Coder");
    } else if (val == "d" || val == "D") {
        console.log("Data Structure");
    }
    else{
        console.log("oops.... invalid input");
    }
}
getValue();

// Q 3. Find the maximum out of three numbers---------------------------
let A= parseInt(prompt("Enter first number"));
let B = parseInt(prompt("Enter second number"));
let C = parseInt(prompt("Enter third number"));
function Max_out_of_three(){
       if (A > B && A > C)
        {
              console.log("A is the greatest");
        } 
        else if (B < A && B > C)
        {
             console.log("B is the greatest");
        } 
       else  (C > A  && C > B) 
       {
       console.log("C is the greatest");
       }
}
Max_out_of_three();

// Q 4.Second Smallest integer value among three numbers------------------------
let X = parseInt(prompt("Enter first number"));
let Y = parseInt(prompt("Enter second number"));
let Z = parseInt(prompt("Enter third number"));

function findSndSmallest() {
    if ((X > Y && X < Z) || (X < Y && X > Z)) {
        console.log(X + `number is second smallest`);
    }
    else if ((Y > X && Y < Z) || (Y < X && Y > Z)) {
        console.log(Y  + ` number is second smallest`);
    }
    else {
        console.log(Z + ` number is second smallest`);
    }
}
findSndSmallest();


// Q 5.   check whether the triangle is acute or obtuse ---------------------------

let S1 = parseInt(prompt("Enter first angles"));
let S2 = parseInt(prompt("Enter second angles"));
let S3 = parseInt(prompt("Enter third angles"));

        function Triangle_Check() {
            if ((S1 >= 0 && S1 <= 90) && (S2 >= 0 && S2 <= 90) && (S3 >= 0 && S3 <= 90)) {
                console.log(`The Trangle is acute`);
            }
            else {
                console.log(`The trange is obtuse`)
            }
        }
        Triangle_Check();