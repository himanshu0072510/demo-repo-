// arrays are reference type 
// ordered collection of elements
// to access index we use square brackets
let exam = ["neet" , "upsc" , "jee" , "cat" ]
console.log(exam);
exam[0] = "coding"  // change the position of o index from neet to coding 
console.log(exam);
console.log(Array.isArray(exam)); // this is used to check the above is array or not so it will give true as output 
console.log(typeof exam);  // this tells that exam is object 
 
