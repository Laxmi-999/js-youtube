

/// global scopes
const a =100;
let b = 300;
var c =500;

if(true){
    // block scopes
    const a =10;
    let b=30;
    var c=50;
    console.log("inner A", a);
    console.log("inner B", b);
    console.log("inner c", c);

}
console.log("outer A",a);
console.log("outer B",b);
console.log("outer C", c);


/// nested functions concept

function one(){  // here one is parent function and two is child function
    return userName = "laxmi";

    function two(){
        return website = "laxmi.com";
        console.log("user is ", userName);  // child functions can access the properties of parent function
        
    }
    // console.log("website is ", website); // parent function can not access the property of child function
    console.log("i am the child function", two());
}
console.log(" i am the parent function ", one());



//// nested if else 

if(true){
    const userName = "vicky"

    if(userName){
        const website =" youtube"
        console.log(userName + website);
        
    }
   console.log(userName); 
}

addOne(8) // in this u can use function call before function initialization 
function addOne(num){ /// this is basic function
    return num+2
}
console.log(addOne(5));


// addTwo(6)  this is case u can not use function call before function initializations;// this case is called hosting
const addTwo = function(num) { // another method to declare function,, it is called expression where variable holds functions, and variables are very powerfull in javascript it can hold any type of data= like array, object, functions and more.
    return num +2;
}
console.log(addTwo(4));