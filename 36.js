// filter nethod a part of array methods
// filter method always return value in bollean
// in this ques we will segregate even no. from the array into a new array 
const numbers = [1,2,3,4,5,6,7]  
const isEven = function(number){
    return number%2===0  // so if this is true then only filter will work 
}
const evenNum = numbers.filter(isEven)
console.log(evenNum);


