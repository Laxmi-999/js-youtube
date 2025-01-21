//Primitive datatypes ==> predefined by the language and named by reserved keywords

// 7 types of primitive datatypes in JS. They are:
// string, number, boolean, null, undefined, symbol,bigInt

const name = "lax" // string
const age = 23 // number
const isLoggedIn = true // boolean
const temp = null // null or empty
let email; // reserved memory space bt value is undefinded
const id = Symbol('333');
const anotherId = Symbol('333');

const bigNum = 794383573238695n;

console.log(id === anotherId);
console.log(id);


// Reference types or NON-Primitive datatypes
//Array, object , function

const  persons = ["sita", "ram", "hari"] // array

const details= {
    name:"sita",
    age: "23"

}

const myFunction = function(){

    console.log("this is my function");

}
myFunction();
console.log(typeof persons);
console.log(typeof details);
console.log(typeof myFunction);


// stact (primitive), Heap(non-primitive)

let chanelName = "myYouTubegmaidotcom";

let anotherChanelName = chanelName;
anotherChanelName =" laxYouTubegmaildotcom";


console.log(chanelName);

console.log(anotherChanelName);

///Heap

let userOne = {
    email:"user1@gmail.com",
    id:"user123"
}

console.log(userOne);

let userTwo = userOne;

userTwo.email = "user2@gmail.com";

console.log(userOne.email);

console.log(userTwo.email);








