

//simple function operation and calling method
function addTwoNumbber(number1, number2) // parameter
{
        // console.log(number1 + number2);
        // const result = number1 + number2;
        // return result;
        // console.log(result);
        // number1+number2;
       return  number1 + number2;

}
const result = addTwoNumbber(5,7);
console.log("result is :", result);


function userLoggedInMessage(username) {
    return(`${username}  just logged in`)
}

// userLoggedInMessage("LAXMI")
console.log(
 (userLoggedInMessage("laxmi"))
);

// if else or conditional check

function loggedOutUser(username = "shyam") {

    if(username === undefined){

        console.log("please enter the user name");
        return;
    }
    return (`${username} is logged out`);
    return;
}

console.log(loggedOutUser("laxmi"));
// console.log(loggedOutUser());



// passing object to the function



function calculateCartPrice(value1,value2,...numb) // if u have to pass multiple value as a single argumment we use rest operator ...
{

    return numb

}
console.log(calculateCartPrice(300,500,400,200));

////
const user = {
    name:"syam",
   price:"400"
}

function handleObject(anyobject) {
    
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
    
}
handleObject(user);


//// passing array to the function 

const myArray =[400,500,200,600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([400,500,200,600]));


