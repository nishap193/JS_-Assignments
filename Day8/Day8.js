// Q1. Write a JavaScript function to check whether an input is an array or not.

let arr=[1,3,5,8];
let a=2;
function CheckArray(){
if(typeof arr =='object'){
    console.log("input is an array");
}
else{
    console.log("input is not an array");
}
}
CheckArray();

// Q2.Write a JavaScript program that prints the elements of the following array.Note : Use nested for loops.

let arr3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3[i].length; j++) {
        console.log(arr3[i][j])
    }
}


//Q3. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

let arr1=[1,0,2,3,4];
let arr2=[3,5,6,7,8,13];
if(arr1.length<arr2.length){
    for(let i=0;i<arr1.length;i++){
        arr2[i]=arr1[i]+arr2[i];
    }
    console.log(arr2);
}
else{
    for(let i=0;i<arr2.length;i++){
        arr1[i]=arr1[i]+arr2[i];
    }
    console.log(arr1);
}


// Q4. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample Array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

let myColor = ["Red", "Green", "White", "Black"];
let result='';
let result1='';
let result2='';
for(let i=0;i<myColor.length;i++){
     result=result.concat(myColor[i]);
}
console.log(result);

for (let i = 0; i < myColor.length; i++) {
    result1 = result1.concat(myColor[i]);
    if (i < myColor.length - 1) {
        result1 = result1.concat(",");
    }
}

console.log(result1);

for (let i = 0; i < myColor.length; i++) {
    result2 = result2.concat(myColor[i]);
    if (i < myColor.length - 1) {
        result2 = result2.concat("+");
    }
}

console.log(result2);


//Q5. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

var array =[-3,8,7,6,5,-4,3,2,1];
let sorting = array.sort();
console.log(sorting);