function multipleBy5 (num){
    return num*5
}
multipleBy5.power=2

// .power jo kay object k sath use hota hai yahan
//multipleBy5 jo k aik function hai isky sath use
//hua hai... jiska matlab hai k function bhi technically aik object hi hai.

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


function createUser (username, score){
this.username = username
this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()



