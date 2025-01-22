//singleton ==> when we create object using constructor it goes through singleton
// object literals ==> object created without using contructor .

// object literals example :




/// when u r asked to declare a symbol and add it into the object as key 

const mySymbl = Symbol ("key1");

const JsUsers = {
    name: "laxmi",
    "fullName" :"Laxmi Regmi", // here very keys by default works as string and the valus are of different datatypes.
    email :"laxmi@gmail.com",
    age:23,
    [mySymbl] :"myKey1",
    loggedIn:false,
    lastLoggedInDays:["sunday", "monday","tuesday"]

}

// methods of accessing objects
console.log(JsUsers.name); // one method
console.log(JsUsers["email"]); // it access object's properties as 
console.log(JsUsers["fullName"]); // when keys are manually declared as string, by using only this method object's properties can be accessed


//accessing symbol key
console.log(typeof JsUsers[mySymbl]);
console.log(JsUsers[mySymbl]);


// changing the values of objects

JsUsers.fullName ="Hema Regmi";
console.log(JsUsers["fullName"]);

//to prevent the change in object
// Object.freeze(JsUsers);
JsUsers.email = "regmi@gmail.com"
console.log(JsUsers["email"]);

console.log(JsUsers);



// adding function to the object
JsUsers.greeting = function(){
    console.log("hello js user");
    
}

console.log(JsUsers.greeting());

JsUsers.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`); // when u need to address to the current object we use "this" 
    
}
console.log(JsUsers.greetingTwo());





