

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



