function User (email, password){
    this.email = email
    this.password = password

    // function behaves in two ways, either as a function or as an object
    // deineProperty is actually a getter or setter property.
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    });
}
const oogy = new User ("oogy@oogy.nt", "jack ka bhai")
console.log(oogy.email);
//console.log(oogy.password);

