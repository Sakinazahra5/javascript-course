// function sayMyName(){
//     console.log("J");
//     console.log("E");
//     console.log("R");
//     console.log("R");
//     console.log("Y");
// }
//sayMyName()

// function addTwoNumbers (number1, number2){     // here number1, number2 are parameters
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)          //passing values are arguments e.g null, 3, 4, a etc

function addTwoNumbers (number1, number2){     // here number1, number2 are parameters
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)
//console.log("Result", result)

//**************** 

// function loginUserMessage (username = "sam"){
//     if (username === undefined){
//         console.log("Please enter a username");
// }
//     return '$ {username} just logged in'
// }
// //console.log(loginUserMessage("Dee & Joey"));
// console.log(loginUserMessage());


//************** Functions with array & objects *************** */
function calculateCartprice(...num1){
return num1
}
//console.log(calculateCartprice(200, 300, 400));

const user = {
    username: "Bob",
    price: 199
}
function displayUserInfo (anyobject) {
 //   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//displayUserInfo(user)
function displayUserInfo(){
     return{
    username: "sam",
    price: 399
};
}

//**************** */
const myNewArray = [100, 200, 300, 400] 
function getSecondvalue (getArray){
    return getArray[1]
}
console.log(getSecondvalue(myNewArray));
console.log(getSecondvalue([200, 400, 500, 1000]));







