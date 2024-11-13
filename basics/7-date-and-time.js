//    DATE

// const myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);


//let myCreatedDate = new Date (2023, 0, 23)
//let myCreatedDate = new Date (2023, 0, 23, 5, 14)
let myCreatedDate = new Date("1-14-2023")
//console.log(myCreatedDate.toDateString());

//****** TIME ********

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


//const newDate = new Date ()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

const newDate = new Date ()
const toLocaleString = newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "UTC",
});

console.log(toLocaleString);
