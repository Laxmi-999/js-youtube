class User{
    constructor(email, password){

        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }

    set email(value){ // always have to send value to setter method whethe it is empty
         this._email = value;
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}laxxu`;
    }
    set password(value){
        this._password = value 
    }
}
const myUser = new User ("user@gmail.com", "qcy");
console.log(myUser.password);
