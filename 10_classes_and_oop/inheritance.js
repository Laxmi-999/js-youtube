class User {   
 constructor(username) {

    this.username = username;
 }

 logMe(){
    console.log(`USERNAME IS ${this.username}`);
 }

}

class Teacher extends User {
    constructor(username, email, password){
        
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`new course is added by ${this.username}`);
        
    }
}

const userOne = new Teacher ("userOne", "userOne@gmail.com", 345)

userOne.addCourse();


const userTwo = new User("userTwo");

// userTwo.addCourse();
userTwo.logMe();
userOne.logMe();
console.log(userOne === userTwo);

console.log(userOne instanceof Teacher);
console.log(userTwo instanceof Teacher);
console.log(userTwo instanceof User);

