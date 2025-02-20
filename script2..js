// Q1 Log your name and favorite hoppy to the console.
let name="Munawar";
let favoiteHoppy="Coding";

console.log("My name is "+name+ " and my favorite Hoppy is "+favoiteHoppy)

//Q 2 Perform and Log the result of 45*-10;

console.log(45*2-10);

// Q3 Use console.log() to display the current year.
const date = new Date();
console.log(date.getFullYear());
// Q4 Create two variables for first and last name concate and log them.

let firstName="Munawar"
let lastName="Johar"
console.log(firstName.concat(lastName))

// Q5 Track the value of a variable by logging it before and after updating
let value=10
console.log(value)
value++
console.log("after update the value ",value);
// Q6 Use the console.error() to simulate an error message 
console.error("Try error is occuring")

// Q7 log the square of the number 12 to the console.

console.log(12**2)

// Q8 Print the tyoe of a variable holding the value true.
let variable=true
console.log(typeof(variable))


// Q9 Create a variable holding your age and log wheter it's greater than 18.
let age=26
if(age>18){
    console.log("My Age is greater than 18")
}
else{
    console.log("My age is less than 18")
}


// Q10 Log the result of 100/0 and observe the output.

console.log(100/0)

// Q11 Decrease a variable using let and  log its value.
let variableValue=100
console.log(variableValue)

// Q12 Create a constant to store the value of PI and log it.
const constant=3.14
console.log(constant)

// Q13 Reassign to a vlaue to a variable declared with let and log the result.

let myValue=10
myValue=130
console.log(myValue)

// Q14 Check the type of null and log it.
console.log(typeof(null))

// Q15 Create a variable witha number as string e.g "24" and log its type
let myStrNumber="24"
console.log(typeof(myStrNumber))

// Q16 Use typeof to check the type of a boolean variable
let bool=false
console.log(typeof(bool))

// Q17 Create three variabes of types string , number and boolean and log their values.
let strVar="Kamal"
let numVar=11
let boolVar=true
console.log("String "+strVar+" Number "+numVar+" Boolean "+boolVar)

// Q18 Declare a variable without assigning a value log its type.
let nan;
console.log(typeof(nan))

//Q19 Create a varaible with underfined and log its types

var unvar=undefined
console.log(unvar)

// Q20 Use const to create an array. Try reassigning the array and observe the error.
const reAssign=20;
//reAssign=50;
 console.log(reAssign)

// Q21 Write a for loop to print numbers from 1 to 50
for(let i=1;i<=50;i++){
    console.log(i)
}

// Q22 Use a while loop to sum the numbers from 1 to 10.
var sumNum=0
let j=1
while (j<=10) {
    sumNum=sumNum+j;
    j++
}
console.log(sumNum)

// Q23 Create a for of loop to log each character of the string each character of the string "Javascript"
let charStr="Javascript"

for (const element of charStr) {
    console.log(element)
}

// Q24 Write a for loop that skips even numbers between 1 and 20.

for(let i=0;i<20;i++){
   if(i%2!==0){
    console.log(i)
   }
}

// Q25 Use a do while loop that skips even numbers from 5 to 1.
var numDecreament=5
do{
 
    console.log(numDecreament)
    numDecreament--

}while(numDecreament>=1)

//Q26 Create a for loop that calculates the factorial of 5.
let fact=1
for(let i=5;i>0;i--){
    fact=fact*i
}
console.log(fact)

// Q27 Write a nested loop to print a 3X3 grid of numbers.
let num = 1;

for (let i = 1; i <= 3; i++) { // Outer loop for rows
  let row = ''; // Start with an empty string for each row
  for (let j = 1; j <= 3; j++) { // Inner loop for columns
    row += num + ' '; // Add the current number to the row
    num++; // Increment the number for the next cell
  }
  console.log(row.trim()); // Print the row after trimming the trailing space
}

//Q28 Use a for loop to reverse an array [1,2,3,4].
let arr = [1, 2, 3, 4];
let reversedArr = [];

while (arr.length > 0) {
  reversedArr.push(arr.pop()); // Pop the last element and push it to the new array
}

console.log(reversedArr); // Output: [4, 3, 2, 1]

// Q29 Write a while loop that logs numbers  from 1 to 100 divisble by 5
for(let i=1;i<=100;i++){
    if(i%5==0){
        console.log(i)
    }
}
// Q30 Use a for in loop to iterate over an objects and log its keys
var obj={name:"kamal",salary:"5000",currentEmploye:true}

for (const key in obj) {
    console.log(key)
    }

// Q31 Create an array of your top 5 favorite movies and log it.

let arrMovies=["Chup k Chup k","Doll","Golmal","damal","mere baap phalay ap"]
arrMovies.forEach(element => {
    console.log(element)
});

// Q32 Find and log the second element of an array

let arrElements=[1,2,3,4]
console.log(arrElements[1])

// Q33 Add two new elements to the start of an array using .unshift().
let oldArr=[5,7,9]
oldArr.unshift(1,3)
console.log(oldArr)

// Q34 Remove the last element of an array and log the updated array.
let FirstArr=[1,2,3,4,5]
FirstArr.pop()
console.log(FirstArr)

// Q35 Use .slice to extract the first three elements of an array.
let ArrSlice = [1, 3, 4, 5, 6];
console.log(ArrSlice.slice(0, 3));

// Q36 Find the index of a specific element in an array using .indexOf().
let indexArr = ["Ali", "Munawar", "Shazil", "Kamal"];
console.log(indexArr.indexOf("Munawar"));
// Q37 Check if a values exists in an array using .includes
let includeArr=["Ali", "Munawar", "Shazil", "Kamal"];
console.log(includeArr.includes("Raziq"))

// Q38 Combine two arrays [1,2] and [3,4] using .concat().
let arrFirst=[1,2]
let arrSecond=[3,4]
let combined=arrFirst.concat(arrSecond)
console.log(combined) 

// 39. Sort an array of numbers [5,2,9,1] in assending order.
let notSortArr = [5, 2, 9, 1];
console.log(notSortArr.sort())
// Bubble Sort using while loop
let swapped;
do {
    swapped = false;  // Flag to track if any swaps happen in each iteration
    for (let i = 0; i < notSortArr.length - 1; i++) {
        if (notSortArr[i] > notSortArr[i + 1]) {
            // Swap elements
            let temp = notSortArr[i];
            notSortArr[i] = notSortArr[i + 1];
            notSortArr[i + 1] = temp;
            swapped = true; // Mark that a swap has occurred
        }
    }
} while (swapped);  // Continue looping until no swaps are made

console.log(notSortArr);  // Output the sorted array


// 40 Write a program that creates a copy of an array without mutatating the oringal.
let originalArr=[2,4,6]
let copyArr=[...originalArr]
console.log(copyArr)
//Q41 Create a function to check if a number is even or odd.

function checkNumber(){
 let number=11;
 if(number%2==0){
console.log("I am Even")
 }
 else{
    console.log("I am Odd")
 }
}

checkNumber()

// Q42 Create a function to calculate the area of a circle with a given radius.
function areaCircle(){
    let pi=3.14
    let r=10
    let area=pi*r**2
    console.log(area)
}
areaCircle()

// Q43 Write a function that accepts an array and returns the sum of its elements.

function sumArrayElement(arr){
    let sum=0
    arr.forEach(element => {
        sum=sum+element
    });
    return sum
}
console.log(sumArrayElement([,1,2,3,4,5]))

// Q44 Create a function that checks if a sting starts with a specific character.

function stringCheck(str){
    let result=str.startsWith("M")
    console.log(result)
}
stringCheck("Munawar")

// Q 45 Write a function to find the maximum of two numbers.
function findNum(first,second){
    if(first>second){
        console.log("First is maximum")
    }
    else if(second>first){
        console.log("second is greater")
    }
    else{
        console.log("Both are equal")
    }

}
findNum(12,1)

// Q46 Create a function  that takes a number and returns its factorial.

function Factorial(number){
    let fact=1;
    for(let i=1;i<=number;i++){
        fact=fact*i
    }
    return fact
}

console.log(Factorial(5))

// Q47 Write a function thats accepts a string and returns its reverse.
function stringReverse(stringArr){
 return stringArr.split("").reverse().join(" ")
}

console.log(stringReverse("Munawar"))

// Q48 Create a function to find the largest number in an array.
function largestNumberArr(numbers){
    let ans = numbers[0];  // Initialize ans with the first element
    numbers.forEach(element => {
        if(element > ans) {
            ans = element;  // Update ans if the current element is larger
        }
    });
    return ans;  // Return the largest number
}

console.log(largestNumberArr([1, 2, 3, 4, 5]));  // Outputs: 5

// Q49 Write a function that convert hello World

function hellocase(str){
    return str.split("-").join(" ")
}

console.log(hellocase("Hello-World"))

// Q50 Create a function that log hello word every time when it called.

function hello(){
    console.log("Hello world")
}
hello()
hello()