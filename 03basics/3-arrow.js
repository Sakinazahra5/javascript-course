//********** this Function works in Objects ************* */
const user = {
    username: "DeeDee",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }
}
// user.welcomeMessage ();
// user.username = "sam";
// user.welcomeMessage();

//console.log(this);


//********** this Function not works in Functions ************* */
// function chai (){
//     let username = "DooDoo"
//     console.log(this.username);
    
// }
// chai ()

//********** arrow Function ************* */
const chai = () => {
    let username = "DooDoo"
    //console.log(this);
    
}
//chai ()

//********** arrow Function 2 ************* */

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwoNumbers(11, 3))


//********** another way of writing arropw function ************* */

//const addTwoNumbers = (num1, num2) =>   num1 + num2
//const addTwoNumbers = (num1, num2) =>   (num1 + num2)
const addTwoNumbers = (num1, num2) =>   ({username: "Bob"})

//console.log(addTwoNumbers(5, 3))

//-----------------------

const myArray = [1, 2, 3, 4, 5]
//myArray.forEach(function () {})
myArray.forEach(() => {})















