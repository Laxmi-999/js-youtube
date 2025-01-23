// const JsUsers = new Object(); // it is singleton object

const  JsUsers = {} // non singleton object

JsUsers.email = "user!@gmail.com";
JsUsers.id = 12,
JsUsers.isLoggedIn = false
JsUsers.name = {
    fullName : {
        firstName:"laxmi",
        lastName :"regmi",
    }
}

console.log(JsUsers);
console.log(JsUsers.name.fullName.firstName); // objects of objecst

const obj1 = {1:"l", 2:"a",3:"x"}
const obj2 = {1:"m", 2:"i"}
const obj5 ={1:"r", 2:"e", 3: "g", 4:"m", 5:"i"}

// const obj3 =  {obj1, obj2}; // not a good idea
const obj3 = Object.assign(obj1, obj2); // merge two objects to the obj1
const obj4 = Object.assign({}, obj1, obj2, obj5) // merge both obj1 and obj2 to the  empty objects
const obj6 = {...obj1, ...obj2, ...obj5} // most latest method to merge objects
console.log(obj3);
console.log(obj4);
console.log(obj6);


/// when data comes from database, it comes as array of objects

const arrayObj = [
    {
        email:"regmi@gmail.com",
        add:"bharatpur"
    },
    {
        email:"r@gmail.com",
        add:"bhaktapur"
    },
]

console.log(JsUsers);
console.log(Object.keys(JsUsers)); // it returns the array of keys from the Jsusers object
console.log(Object.values(JsUsers)); 

console.log(Object.entries(JsUsers)); // returns array inside array of objects
console.log(JsUsers.hasOwnProperty('email')); // u can ask the object is given properties is available or not









