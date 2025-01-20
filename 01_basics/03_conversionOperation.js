let score = "laxmi";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);


// "33" => 33
// "22abc" => NaN
// true =>1 , false =>0

let isLoggedIn = "";

console.log(typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

//NOTES
//1 => ture,
//0 ==> false,
//"laxu" => true,
//"" => false,

let someNumber = 77

let stringNumber = String(someNumber);

// console.log(typeof stringNumber);f
// console.log(stringNumber);

/*----------------------OPERATIONS IN JS--------------------------------------------*/

let str1 = "hi";
let str2= " lax";

let str3 = str1 + str2 ;
console.log(str3);

console.log("1" +6);
console.log(1 +"6");
console.log("1" +6+5);
console.log(1 +6+"6");


// tricky conversions//
console.log(true);
console.log(+true);
// console.log(true+);
console.log(+ "");



// console.log(3+4*7%3); // not appriciated use paranthesis

let num1, num2, num3

num1 = num2 = num3 = 2+2;


let gameCounter = 100;
++gameCounter; // prefix operator
gameCounter++; // postfix operator
console.log(gameCounter);









