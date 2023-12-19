//1.  Add two Numbers ----------------------------------------------------------

function additionFunction(a, b) {
	return a + b;
}

let num1 = 2;
let num2 = 5;
let sum = additionFunction(num1, num2);
console.log("Sum of given numbers is :", sum);
//2. Find if the conditions are obeyed or not? -----------------------------

//3. .Check the conditions ----------------------------------------
 function Check(x, y){
    if(x%10==0 || y%10==0){
        console.log("true");
    }
    else{
        console.log("false");
    }
    return 0;
}
let x = 12;
let y = 20;
let z = Check(x, y);

//4. Find the first digit of a 4 digit number -----------------------------
function First_Digit(num){
    while (num >= 10)  
    num /= 10; 
    return Math.floor(num);    //The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
                                 //Without using Math.floor() output is 4.567 .
}
let num = 4567;
console.log(First_Digit(num));

//5. Find the last digit of a 4 digit number ----------------------------------------------
function Last_Digit(last){
    return (last % 10);  
}
let last = 4567;
console.log(Last_Digit(last));

//6.Find the remainder ---------------------------------
function  Find_the_remainder(p , q){
  rem = q%p;
  return rem;
}
let p = 2;
let q = 9;
let rem;
console.log(Find_the_remainder(p,q));

//7.Multiply two Numbers ----------------------------------------
function  Multiply_two_number(j , k){
    mul = j*k;
    return mul;
  }
  let j = 2;
  let k = 5;
  let mul;
  console.log(Multiply_two_number(j,k));

  //8.Marks Calculator---------------------------------------
function Sum(a,b,c){
    let add=a+b+c;
    return add;
}
function Average(add){
     avg=d/300;
     avg=avg*100;
    return avg;
}
let a= 50;
let b= 20;
let c =100;
let add=Sum(a,b,c);
let d=add;
avg=Average(sum);
console.log("Shayam's t0tal marks = "+ add);
console.log("Shayam's average  = "+ avg);





////////////////////////////////////////////////////////////////