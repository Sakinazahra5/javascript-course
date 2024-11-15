// const coding = ["js", "py", "rb", "java", "cpp"]

// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumbers = myNumbers.filter((num) => num > 5)

const newNumbers = myNumbers.filter((num) => {
    return num > 5
})

//console.log(newNumbers);

//---------------------------------
// const newNums = []
// myNumbers.forEach( () => {
// if (num > 5) {
//     newNums.push(num)
// }
// } )
// console.log(newNums);

//---------------FILTER-------------------
const books = [                      // books array
    {title: 'Book one' , genre: 'Fiction' , publish: '1981',
    edition: '2004'},
    {title: 'Book two' , genre: 'Non-Fiction' , publish: '1985',
    edition: '2006'},
    {title: 'Book three' , genre: 'History' , publish: '1990',
    edition: '2010'},
    {title: 'Book four' , genre: 'Science' , publish: '1992',
    edition: '2012'},
    {title: 'Book five' , genre: 'Fiction' , publish: '1995',
    edition: '2015'},
    {title: 'Book six' , genre: 'Novelistic' , publish: '1998',
    edition: '20017'},
    {title: 'Book seven' , genre: 'Fantacy' , publish: '1999',
    edition: '2019'},
    {title: 'Book eight' , genre: 'Knowledge' , publish: '2000',
    edition: '2020'},
    {title: 'Book nine' , genre: 'Novelistic' , publish: '2002',
    edition: '2022'}
]                               // books array
//const userBooks = books.filter ( (bk) => bk.genre === 'Fiction')
const userBooks = books.filter ( (bk) => bk.publish >= 2000)

console.log(userBooks);



