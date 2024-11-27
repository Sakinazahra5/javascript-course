// let myName = "Sakina    "
// console.log(myName.trueLength);

let myHeros = ["thor", "hulk", "spiderman"]
 
let heroPower={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.superPower}`);
        
    }
}

// if we pass any value to the object it will definitely pass to the string, array... etc
Object.prototype.sakina = function(){
    console.log(`sakina is present in all objects`);
    
}
//------- as we know----- Array ------>Object------>null
// if we pass any value to array it will definitely pass to the object.
Array.prototype.hisakina = function(){
    console.log(`sakina says hello`);
    
}

// heroPower.sakina()
// myHeros.sakina()
// myHeros.hisakina()

//heroPower.hisakina()         // function has no access.


//------INHERTANCE--------

const User = {
    name: "chai",
    email: "chai@google.com"
} 

const Teacher = {
    makeVideo: true
}

const TeachingSupport= {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User          //old syntax approach

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = 'ChaiAurCode'
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUser.trueLength()
"sakina".trueLength()
"icetea".trueLength()

