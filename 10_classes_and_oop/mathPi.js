
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);
// console.log(Math.PI);
// Math.PI = 10;
// console.log(Math.PI);


const UserOne ={
    username :"userOne",
    email:"userOne@gmail.com",
    password: "234",

    addUser : function(){
        console.log('user one is added');
        
    }
}
console.log(Object.getOwnPropertyDescriptor(UserOne, "username"));

Object.defineProperty(UserOne, "username",{
    writable:false,
    enumerable:false,

})
console.log(Object.getOwnPropertyDescriptor(UserOne, "username"));


for (const [key, value] of [Object.entries(UserOne)]) {

    if(typeof value !== 'function')
    {
        console.log(`${key}: ${value}`);
        
    }
    
}

