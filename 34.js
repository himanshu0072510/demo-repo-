// imp array methods 
// function banao jo as a input lega array ka first element and uska index bhi lega and uska no. 2 se multiply karke print bhi kar dega 
const numbers = [15,20,30]
function multiplyby2(number ,  index ){
    console.log("index is " , index );
    console.log( `${number}*2 = ${number*2}` );
    
}
numbers.forEach(multiplyby2)

// for (let i = 0 ; i<numbers.length; i++) {
//     multiplyby2(numbers[i] , i );
// }
// for loop ke jagah we can use forEach array method

