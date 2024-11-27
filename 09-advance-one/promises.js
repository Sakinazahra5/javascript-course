//---------------Promise Create--------------------
const promiseOne = new Promise(function(resolve, reject){
// Do an async task
// DB calls
// cryptography, network calls
setTimeout (function(){
//    console.log('Async task is complete');
    resolve()
} , 1000)
})

//---------------Promise Consume--------------------
promiseOne.then(function(){
//    console.log('Promise consumed');
})

//---------------Way 2 of writing the same code--------------------
new Promise(function(resolve, reject){
    setTimeout(function(){
 //       console.log("Promise consumed");
        resolve()
    }, 1000)
}).then(function(){
//   console.log("Async 2 resolved");
})

//---------------Promise 3--------------------

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Oogy",email: "https://oogy.com"});
    }, 1000)
}).then(function(user){
//    console.log("user");
})

//---------------Promise 4--------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false           // it is either true or false.
        if(!error){
            resolve({username:"Oogy",password: "0123"})
        }else{
            reject('Error: Something went wrong.')
        }
    }, 1000)
})
promiseFour.then(function(user){
//    console.log("user");
    return user.username
}).then((username) => {
//console.log(username); 

}).catch(function(error){
//console.log(error);
}).finally(() => {
//console.log("The promise is resolved or rejected");
})


//---------------Promise 5--------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: "Jack & Joey", password:"12345"})
        } else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})
// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
    
// }
async function consumePromiseFive() {
try {
        const response = await promiseFive
//        console.log(response);
} catch (error) {
//    console.log(error);  
} 
}
consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);
         const data = response.json()
         console.log(data);
        
    } catch (error) {
        console.log("E:", error);
        
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data);
})
.catch((error) => console.log(error)
)



