//IIFE ===> immediately invoked function expression
// IIFE is used to prevent the global scope manipulation,means that it is used where global scope variables cannot affect the block scope variables.



// NAMED IIFE
(function Hello(){
    console.log("hello there");
    
})(); // semicolon is important in the iife, it denotes the end of iife function



///UNNAMED  // arrow function

( (name) =>{
    console.log(`hello ${name}, are u fine`);
    
})("laxmi")