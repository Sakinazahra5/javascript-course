// singleton
// Object.create

//objects literals

let JsUser ={
    name: "Oogy",
    "full name": "Mr Oogy",
    age: 44,
    location: "france",
    email: "oogyandcockroaches@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Sunday"],

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);



JsUser.email = "oogyandcockroaches@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())


