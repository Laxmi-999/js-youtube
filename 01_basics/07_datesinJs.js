
//dates
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString());


let myCreatedDate = new Date(2024,0,99,6,3,6);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myNewDate = new Date("2022-04-23")
console.log(myNewDate.toLocaleString());


////comparing dates and time////
let myTime = Date.now();
console.log(myTime);
console.log(myCreatedDate.getTime());


///camparing in seconds 
console.log(Math.floor(Date.now()/1000));// convertig into seconds and taking floor value.



let newDate = new Date();
console.log(newDate);
console.log(newDate.toDateString());
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

//more about toLocaleString() method

newDate.toLocaleString('default',{
     weekday:"long"               
}

)





