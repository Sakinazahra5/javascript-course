class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    // ----------Check get set on Email
    get email (){
        return this._email.toUpperCase()
    }
    set email (value){
        return this._email = value
    }
    // ----------Check get set on Password

    get password(){
        //return this._password.toUpperCase()
        return `${this._password}tom&jerry`
    }
    set password(value){
        this._password = value.toUpperCase()
    }

}
const mario = new User("marios@mario.com", "abcd")
console.log(mario.password);
console.log(mario.email);
