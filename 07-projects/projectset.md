# md = Mark down
# projects related to DOM
## project 1
# Color Changer

# Solution Code
```javascript

const buttons = document.querySelectorAll(`.button`)
const body = document.querySelector( `body`)

buttons.forEach(function (button){
console.log(button);
button.addEventListener(`click`, function(e){
console.log(e);
console.log(e.target);
if(e.target.id === `grey`){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === `white`){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === `blue`){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === `yellow`){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === `purple`){
  body.style.backgroundColor = e.target.id
}
})
});

```


# project 2 
# BMI Generator
```javascript

const form = document.querySelector(`form`);
// This use case will give you empty value.
// const height = parseInt(document.querySelector(`#height`).value);
// const weight = parseInt(document.querySelector(`#weight`).value);

form.addEventListener(`submit`, function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector(`#height`).value);
  const weight = parseInt(document.querySelector(`#weight`).value);
  const results = document.querySelector(`#results`);

  // Check if height is valid
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  // Check if weight is valid
  else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Determine BMI category
    let category = '';
    if (bmi < 18.6) {
      category = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = 'Normal BMI';
    } else {
      category = 'Overweight';
    }

    // Display results
    results.innerHTML = `<span>BMI: ${bmi}</span><br>Category: <strong>${category}</strong>`;
  }
});

```
## project 3
# Digital Clock
```Javascript

const clock = document.getElementById(`clock`);

let date = new Date();

setInterval(function () {
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
# project 4
# Guess a Number

```javascript
const randomNumber = Math.floor(Math.random() * 100) + 1;

//const randomNumber = parseInt(Math.random() * 100 + 1);
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
}
  // clean-up guesses (previous)
  function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
  }
  function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
  }
  function endGame() {
    userInput.value = '';
    userInput.setAttribute(`disabled`, '');
    p.classList.add(`button`);
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }
  function newGame() {
    const newGamebutton = document.querySelector('newGame')
    newGamebutton.addEventListener(`click`, function(e){
      randomNumber = parseInt(Math.random()* 100 + 1);
      prevGuess = []
      numGuess= 1
      guessSlot.innerHTML = ''
      remaining.innerHTML = `${11 - numbers}`;
      userInput.removeAttribute(`disabled`)
      startOver.removeChild(p)

      playGame = true
    })
  }


```