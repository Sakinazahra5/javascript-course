// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
     //   console.log("5 is best number");
        
    }
    //console.log(element);
    
}

for (let i = 5; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);

    for (let j = 5; j <= 10; j++) {
        //console.log(`Inner loop[ value: ${j}] and inner loop ${i}`);
    //console.log(i + '*' + j + '=' + i*j);

    }
}

let myArray = ["tom", "jerry", "spike"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
}


// break and continue

// for (let a = 1; a <= 20; a++) {
// if (a == 5) {
//     console.log(`detedced 5`);
//     break
// }
// console.log(`VAlue of a is ${a}`);
// }


for (let a = 1; a <= 20; a++) {
if (a == 5) {
    console.log(`detedced 5`);
    continue
}
console.log(`Value of a is ${a}`);
}







