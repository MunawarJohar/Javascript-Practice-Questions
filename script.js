// Question 1 - Given string reverse each word in the sentence Munawar bhai How are you?
// Expected Output: rawanuM iahb woH era ?uoy 

var sentence = "Munawar bhai how are you?";
var reSentence;

// Reverse each word in the sentence
reSentence = sentence.split(" ").map(function (word) {
    return word.split("").reverse().join("");
});

// Combine the reversed words back into a sentence
var result = reSentence.join(" ");
console.log(result)
// Display the result in the HTML element with ID 'question1'
document.getElementById("question1").textContent = "Solution: " + result;

// Question 2 - How to check if an object is an array or not?
// 

function checkArray(elem){
    return Array.isArray(elem);
}

console.log(checkArray({}));
console.log(checkArray([]));

// Question 3 How to empty an array in Javascript?
// dont reset it to a new array
let newarr=[1,3,4,5]
newarr.length=0;
console.log(newarr)

// Question 4 How would you check if a number is an integer?
var num=13.1
if(num%1===0){
    console.log("an integer")
}
else(
    console.log("not an integer")
)

//Question 5 Make this work
// duplicate ([1,2,3,4,5]) to ([1,2,3,4,5,1,2,3,4,5])

function duplicate(arr){
    return arr.concat(arr);
}

console.log(duplicate([1,2,3,4,5]))

//Question 6 write a function to revese a number

function reverseNum(num) {
    return Number(num.toString().split("").reverse().join(""));
}

console.log(reverseNum(12)); // Output: 21

//Question 7 Check whether a number (or string) is a palindrome or not
function checkPalindrome(str) {
    var reversed = str.split("").reverse().join(""); // Reverse the string correctly
    if (reversed === str) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPalindrome("lool")); // true
console.log(checkPalindrome("loop")); // false


// Question 8 write a javascript function that returns a passed string with letters in alphabetical order 
// munawar
// aamnruw
function stringAlphaBeticalOrder(str){
    return str.split("").sort().join("")
}
console.log(stringAlphaBeticalOrder("munawar"))

// Question 9 write a javascript function that accepts a string as a paramter and converts the first letter of each word of the string in upper case
// munawar bhai kaisa ho 
// Munawar Bhai Kaisa Ho
function upperCase(str){
 var upper=str.split(" ").map(function(word){
    return word.charAt(0).toUpperCase()+word.substring(1);
    })
    return upper.join(" ")
}
console.log(upperCase(" munawar bhai kaisa ho "))

// Question 10 write a javascript function to get the number of occurrences of each letter in a specified string.
function occ(str) {
    var occurrences = {};
    str.split("").forEach((element) => {
        if (!occurrences.hasOwnProperty(element)) {
            occurrences[element] = 1;
        } else {
            occurrences[element]++;
        }
    });
    return occurrences;  // Don't forget to return the result
}

console.log(occ("apple"));  // Output: { a: 1, p: 2, l: 1, e: 1 }

//Question 11 loop an array and add all memeber of it.
var plus = 0;
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(e) {
   plus += e; // Add the value of e to plus
});

console.log(plus); // Outputs the sum: 15


// Question 12 in array of numbers and strings only add those members which are not strings

var comarr=["munawar","kamal",12,3,41,"hasan"];
var comsum=0;
comarr.forEach(function(elem){
    if(typeof(elem)==="number"){
        comsum+=elem;
}
})
console.log(comsum)

//Question 13  loop an array of objects and remove all object which don't have gender's value male.
var arrobj = [
    { name: "kamal", gender: "male" },
    { name: "Shazil", gender: "male" },
    { name: "Marzia", gender: "female" },
    { name: "sharesh", gender: "female" },
    { name: "Munawar", gender: "male" }
];

// Question 14 Loop in reverse order to avoid issues when removing items
for (var i = arrobj.length - 1; i >= 0; i--) {
    if (arrobj[i].gender !== "male") {
        arrobj.splice(i, 1);
    }
}

console.log(arrobj);

// Question 15 write a function to clone an array

function clonearr(arr){
 return [...arr]
}

console.log(clonearr([1,3,4,5,]))

// Question 16 write a javascript function which accepts an argument and returns the type

function typeOfFunction(arr) {
    return arr.map(function(e) {
        return typeof e;
    });
}

console.log(typeOfFunction([12, "hello", true, {}, []]));
// Output: ["number", "string", "boolean", "object", "object"]


// Question 17 Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function firstelement(arr, n = 1) {
    return arr.slice(0, n);  // Using slice to get the first 'n' elements
}

console.log(firstelement([1, 2, 3, 4, 5, 6], 3));  // Output: [1, 2, 3]
console.log(firstelement([1, 2, 3, 4, 5, 6]));     // Output: [1]

// Question 18 Write a javascript function to get the last element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.


function lastElement(arr,n=1){
    if(n<=arr.length){
        for(var i=0;i<n;i++){
            console.log(arr.length-1-i)
        }
    }
    else{
        console.log(n+"don't element")
    }
}

lastElement([1,2,3,4,5],2)

//Question 19 Write a javascript program to find the most frequent item of an array
function mostElement(arr) {
    let frequency = {};  // To store the frequency of each element
    let maxCount = 0;    // To store the highest frequency
    let mostFrequent;    // To store the most frequent element

    // Count the frequency of each element
    arr.forEach(function(item) {
        frequency[item] = (frequency[item] || 0) + 1;
    });

    // Find the most frequent element
    for (let key in frequency) {
        if (frequency[key] > maxCount) {
            maxCount = frequency[key];
            mostFrequent = key;
        }
    }

    return mostFrequent;  // Return the most frequent element
}

console.log(mostElement([1, 2, 3, 4, 5, 2, 6]));  // Output: 2

//Question 20 write a javascript program to shuffle an array

function shuffleArray(arr){
    var totalShuffleArea=arr.length;
 while(totalShuffleArea>0){
    totalShuffleArea--;
    var changeindex= Math.floor(Math.random()*totalShuffleArea);
    var temp=arr[totalShuffleArea];
    arr[totalShuffleArea]=arr[changeindex];
    arr[changeindex]=temp; 
 }
 return arr;

}
console.log(shuffleArray([1,2,3,4,5,6]))

// Question 21: Write a JavaScript program to compute the union of two arrays
function union(arr1, arr2) {
    // Combine both arrays and convert to a Set to remove duplicates
    let combined = [...arr1, ...arr2];
    let uniqueElements = [...new Set(combined)];  // Convert the Set back to an array
    return uniqueElements;
}

// Sample data
console.log(union([1, 2, 3], [100, 2, 1, 10]));  // Output: [1, 2, 3, 100, 10]
