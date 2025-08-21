// map method 
// it takes as a input a call back function 
const numbers = [4,56,6,7]
const square = function(number){
    return number * number   // whenever we use map function we have to return 
}
const squarenum = numbers.map(square)
console.log(squarenum);


// map function always form a new array so we will use return here 

// now use of map method suppose we have a array of users so using map method make a array that contains userfirst name

const users = [{firstName: "himanshu" , age: 20},
  {   firstName: "akash" , age: 21 },
  {firstName: "shivangam" , age: 22 }
]
const userNames = users.map((user)=>{
    return user.firstName
})
console.log(userNames);
