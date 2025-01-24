const user = {
    username: "laxmi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "laxmi"
//     console.log(this.username);
// }

// chai();

// const chai = function () {
//     let username = "laxmi"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "laxmi"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "laxmi"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


// arrow functions are compact alternative to the traditional normal function, "this", inside the arrow function worsks bt differently
// because arrow function doesnot have their own binding to this.

// this can be perfectly works inside the object 