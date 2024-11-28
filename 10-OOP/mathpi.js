const chai ={
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    //to avoid the below code we use typeof code in "if statement" in the "forof loop".
    orderChai: function(){
        console.log("chai nhi bni");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


Object.defineProperty(chai, "name" , {
    //writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// apply loop

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }

}

