

function setUserName(username){
    this.username = username;


}

function createUser(username, email,password){

    setUserName.call(this,username);   // .call, this passes the current execution context to the another functions
    this.email = email;
    this.password = password;
}

const userOne = new createUser("userOne", "email", "123");
console.log(userOne);
