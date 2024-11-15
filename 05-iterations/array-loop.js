// high order array loop

["", "", ""]            // strings in array
[{}, {}, {}]           //  objects in array


const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
}
const greeting = "hello world"
for (const greet of greeting) {
    //console.log(`Each character is ${greet}`);
}

//-------------Strings in array-----------------

const map = new Map()
map.set ('P', "Pakistan")
map.set ('I', "Iran")
map.set ('S', "Spain")
map.set ('F', "France")
map.set ('P', "Pakistan")

console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

//-------------Objects in array-----------------
const myObject1 = {
    'game1': 'GTA',
    'game2': 'NFS'
}
for (const [key, value] of myObject) {
    //console.log(key, ':-', value);
}

//-------------------- here forof loop didn't work-------------------------------------
//The issue in the code is that the for...of loop is not directly applicable to objects. 
//The for...of loop is designed to work with iterable objects like arrays,
//strings, and other objects that implement the Symbol.iterator method. 
//Objects, however, do not implement this method by default.

//In your code, myObject is a plain object, and you can't directly iterate over it with a for...of loop.
//Instead, you need to use a different method to extract the key-value pairs from the object, 
//such as Object.entries().


