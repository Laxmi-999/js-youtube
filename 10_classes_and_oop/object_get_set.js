const User = {
    username:"userOne",
    _email:"userOne@gmail.com",

    get email(){
        return this._email.toUpperCase();

    },
    set email(value){
        this._email = value

    }
}

const myUser = Object.create(User); // it uses factory function like object.create while other uses constructor function
console.log(myUser.email);
