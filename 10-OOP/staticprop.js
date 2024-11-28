class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // whenever we create  a user, it will automatically get a unique_id with underscore
    static createId(){           // static restrict the access to the id
        return `123`
    }
}
const oogy = new User("oogy")
//console.log(oogy.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher ("iphone", "i@phone.com")
//console.log();
//console.log(iphone.logMe());
console.log(iphone.createId());




