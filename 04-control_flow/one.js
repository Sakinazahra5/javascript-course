// if statement

// const ifUserLoggedIn = true 
// if (2 == 2){
//     console.log("executed");   
// }


// const temperature = 20 
// if (temperature > 50){
//     console.log("less than 50");   
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("execute");


// const score = 500
// if (score > 200) {
//     let power = "fly"                                 // blocked-scope
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// const balance = 1000
// if (balance > 500){
//  console.log("Greater than 500");
// } else if (balance < 750 ) {
//     console.log("less than 500");
// }else if (balance == 1000){
//     console.log("equal to 500");
// } else {
//     console.log("Less than 1200");
// }


const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserLoggedIn && debitCard && 2==3){
    console.log("Allow to buy the course");
}
if (loggedInFromGoogle || loggedInFromEmail){          // sign || used to check multiple conditions
    console.log("User logged in");
}


