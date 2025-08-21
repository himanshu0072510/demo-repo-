// functions - a block of reusable code that performs a specific task
// function → keyword to declare

// greet → name of the function

// () → holds parameters (if any)

// {} → code block
// function greet(){
//     console.log("hello");
// }
// greet();

/*function greetuser(name){
  console.log("hello,  " + name + "!" );
}
greetuser("Himanshu");

// or by using 
function greetuser(name){
  console.log(`hello ${name}!`); 
}
greetuser("Himanshu");

// function can give back us a value by return

 function toadd(num1 , num2){
    return num1+num2
 }
let ans =  toadd(5,3);
console.log(ans);

// same by using arrow function 
const mul = (num1,num2)=>{
    return num1*num2
}
const ans2 = mul(5,6)
console.log(ans2);

// If only one statement, you can skip {} and return:
const square = x => x * x;
console.log(square(5)); // 25 

// function calling other function 
function double(num){
    return num*2
}
function doubleandadd(num){
  // Call 'double' function inside this function
     return double(num) + 5;
}
console.log(doubleandadd(10));
// ques

//  Write a function that takes a number and returns its cube.
function cube(number){
  return number*number*number
}
let ans = cube(2);
console.log(ans);
// Write a function that greets the user by their name.
function greet(name){
    console.log(`hello, ${name}! ` );    
}
greet("himanshu");

//Write a function that takes 3 numbers and returns the largest
function largest(a,b,c){
     return Math.max(a,b,c)
}
let ans1 = largest(2,3,5)
console.log(ans1); 

// other method 
function largest(a,b,c){
  let max = a;
  if (b>max) {
    max = b
  }
  if (c>max) {
    max = c
  }
  return max;
}
let ans = largest(5,68,96)
console.log(ans);

// Write a function that reverses a string.

// normal method 
let str = "himanshu"
let arr = str.split("")
console.log(arr);

let reverse = arr.reverse();
console.log(reverse);

let joins = reverse.join();
console.log(joins);

// function method 
function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

console.log(reverse("rishu")); 

// wap to check prime numbers
  function isPrime(num){
    if(num<= 1) return false;
    for(let i = 2 ; i<= Math.sqrt(num); i++){
      if(num%i===0){
        return false;
      }
    }
    return true;
  }
  let ans = isPrime(21);
  console.log(ans);

//"Write a function that takes an array of numbers and returns the sum of all even numbers."

function sumEven(arr){
    let sum = 0;
    for(let i = 0; i < arr.length ; i++ )
    {
      if(arr[i] % 2 === 0) {
        sum +=arr[i];  // sum = sum + arr[i]
      }
    }
    return sum;
}
let num = [1,2,3,4,5,6,7,8,9];
console.log(sumEven(num));  */

/*
let sum = 0;

We create a variable to store the sum of even numbers.

It starts from 0 because we havenâ€™t added anything yet.

for (let i = 0; i < arr.length; i++) {

A for loop to go through every element in the array.

i starts at 0 (first element) and increases by 1 until it reaches arr.length - 1 (last element).

if (arr[i] % 2 === 0)

% is the modulus operator; it gives the remainder when dividing numbers.

If a number is even, dividing it by 2 leaves a remainder of 0.

Example:

4 % 2 = 0 âœ… (even)

5 % 2 = 1 âŒ (odd)

sum += arr[i];

This is shorthand for sum = sum + arr[i].

If the number is even, we add it to our running total.

return sum;

After checking all elements, return the final sum.
// wap to find


// wap to count the number of vowels in a string

function countVowels(string){
  let count = 0
  let vowels = "aeiouAEIOU"
  for(let i = 0 ; i<string.length ; i++){
    if(vowels.includes(string[i])){
      count++
    }
  }
  return count;
}
let ans = countVowels("himanshu")
console.log(ans);*/
// now Write a function that counts the number of consonants in a string.

// function countVowels(string){
//   let count = 0
//   let vowels = "aeiouAEIOU"
//   for(let i = 0 ; i<string.length ; i++){
//     if(vowels.includes(string[i])){
//       count++
//     }
//   }
//   return count;
// }
// let ans = countVowels("himanshu")
// console.log(ans);

// `(){}

function print(){
  
}
