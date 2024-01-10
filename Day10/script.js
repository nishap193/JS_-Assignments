//Write a JavaScript program to sum 3 and 5 multiples under 1000.

let sum=0;
for(let i=1;i<=1000;i++){
  if(i%3==0 && i%5==0)
  {
    sum=sum+i;
  }
}
console.log("Sum of  3 and 5 multiples under 1000 = "+sum);

//---------------------------------------------------------------
//Calculate the sum of all the numbers in the following array. var numbersArray = [1,13,22,123,49]

numbersArray = [1,13,22,123,49];
let sum1=0;
for(let i=0;i<numbersArray.length;i++){
    sum1=sum1+numbersArray[i];
}
console.log("Sum of all numbers of array is = "+sum1);

//---------------------------------------------------------
//Print the ODD numbers from 7 to 31
for(let i=7;i<=31;i++){
    if(i%2!=0){
        console.log("Odd of of 7 to 31 : "+i);
    }
}

//--------------------------------------------------------
//Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let str=prompt("Enter a string here :");
if(str=='Y' || str=='y'){
    console.log("YES");
}
else{
    console.log("NO");
}

//--------------------------------------------------------
//Write a JS code to print Even numbers in given array [13,23,12,45,22,48,66,100]

let array=[13,23,12,45,22,48,66,100];
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        console.log("Even number of array are :"+array[i]);
    }
}

//------------------------------------------------------------
//Write a JS code to print a 2D array [[1, 2],[3, 4],[5, 6]];
let arr1=[[1, 2],[3, 4],[5, 6]];
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j++){
        console.log(arr1[i][j]);
    }
}

