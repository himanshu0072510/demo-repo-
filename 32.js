// // if assigned 3 values but you have given more values so extra values must be goes into array 

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ` , c  );
    
// }
// myfunc(3,4,5,6,7,8,9)

// wap to add all numbers 

// function addAll(...numbers){   // why ...numbers ?  so that all the numbers present in the bracket get used up for adding
//     let total = 0;
//     for(let number of numbers){
//         total = total+number;
//     }
//     return total;
// }
// const ans = addAll(25,5,15,95)
// console.log(ans);

// parameter destructuring 
// const person = {
//     firstName: "himanshu",
//     gender: "male",
//     age: 20
// }
// function printDetails({firstName , gender , age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
    
// }
// printDetails(person);