
let a, b, c;

if (true) {
    a = 10        // blocked-scope variable
    b = 20      // blocked-scope variable
    c = 30        // function & globally-scope variable
}
// console.log(a);
// console.log(b);
// console.log(c);

//for (let i = 0; i < array.length; i++) {
    //const element = array[i];
    
//}

//****************** */

function one (){
    const username = "Joey"         //parent function

    function two (){                //...
        const website = "youtube"   // child function
        //console.log(username);    //...
    }
    //console.log(website)
    two()
}
one()



