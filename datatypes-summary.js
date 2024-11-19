//how the data is stored in memory and how can you access them, 
//on these types the dat is categorized in two types majorly,
//that are primitives and non-primitives
//PRIMITIVE
// 7 types

//string
//number
//boolean
//undefined
//null
//symbol
//BigInt

//REFERENCE non-Primitive 

//array
//objects
//functions

const heros =["Oogy", "Joey", "Taplu"];
let myObj = {
    name: "Oogy",
    age: 40
};

const myFunction = function(){
//console.log("hello world");
}
//************************************

// Stack(Primitive), Heap(Non-Primitive)


const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector(`#subt`);
const userInput = document.querySelector(`#guessField`);
const guessSlot = document.querySelector(`.guesses`);
const remaining = document.querySelector(`.lastResult`);
const lowOrHi = document.querySelector(`.lowOrHi`);
const startOver = document.querySelector(`.resultParas`);
const p = document.createElement(`p`);

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener(`click`, function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  // Check if the guess is a number
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    // Fix the condition here
    alert(`Please enter a number more than 1`);
  } else if (guess > 100) {
    // Fix the condition here
    alert(`Please enter a  number less than 100`);
  } else {
    // Assuming `prevGuess` is an array and `numGuess` is the number of attempts
    prevGuess.push(guess);
    //how to check the number if guesses
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is TOOO Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is TOOO High`);
  }
  // clean-up guesses (previous)
  function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
  }
  function displayMessage() {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }
  function endGame() {
    //
  }
  function newGame() {
    //
  }
}

