const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currentvalue){
//     console.log(`acc: ${acc} and currentvalue: ${currentvalue}`);
    
//     return acc, currentvalue
// }, 10)
const myTotal = myNums.reduce((acc, currentvalue) => acc+currentvalue,0)
//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "web development",
        price: 3999
    },
    {
        itemName: "data science",
        price: 4999
    }
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);




