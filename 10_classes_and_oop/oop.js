// example of object literal
 
const user = {
    username:"laxmi",
    email:"lax@gmail.com",

    getUserData : function (){
        console.log("got user details");
        console.log(this.username);
        console.log(this);
        
    }
}
console.log(this);
console.log(user.getUserData());

// constructor function
function User(username, loginCount, isLoggedIn){
    
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetigs = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this;
}

// const userOne = User("lax", 4, true);
// const userTwo = User("atit", 8, false); this overide the values of userOne

// console.log(userOne);

const userOne = new User("lax", 4, true);
const userTwo = new User("atit", 8, false); // this provides the new copy of User intance


console.log(userOne.constructor); // constructor is basically reference to the same object  of the instance.
// console.log(userTwo);





