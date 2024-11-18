# md = Mark down
# projects related to DOM
## project 1

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
```Javascript

const clock = document.getElementById(`clock`);

let date = new Date();

setInterval(function () {
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
