class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`UserName ${this.username}`);
        
    }
    static createId(){
        return `123`
    }
}

const lax = new User ("laxmi");
// console.log(lax.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;

    }
}

const userOne = new Teacher ("userOne", "UserOne@gmail.com");
console.log(userOne.createId());