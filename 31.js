// function inside function 

function app(){
    const myfunc = () => {
        console.log("hello from myfunc");
        
    }
    const addtwo = (num1,num2) => {
        return num1+num2;
    }
    const mul = (num1,num2)=>num1*num2
    console.log("inside app");
    myfunc();
    console.log(addtwo(2,5));
    console.log(mul(2,5));
    
    
}
app();   