// Immediately Invoke Function Expression (IIFE)
//---------------
// first () shows func. definition & second () shows function execution
//    ( ) ( )

//----- global scope k pollution se problem hoti hai kai bar,
// to us global scope k jo bhi variables hain...declarations hain,
// usky pollution ko hatany k liye iife use karty hain -----//
//---------------//
(function chai (){
    console.log(`DB connected`);        // data base connected
    
})();

//  (function aurcode () {
//     console.log(`DB connected two`);
// } )()


( (name) => {
    console.log(`DB connected two ${name}`);
} )('OOGYY')






























