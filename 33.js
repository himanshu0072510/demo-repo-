// function returning function 
function myfunc(){    
    function hello(){
        console.log("calling from hello function ");
    }
    return hello;
}
const ans = myfunc()
ans();



// kya ye my function myfunc hello naam ke function ko return kar sakta hai bilkul kar sakta hai that is what we call as function returning function