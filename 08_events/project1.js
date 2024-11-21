// generate a random color
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 16);
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      // to change the color using start...apply method of setInterval....
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.background = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  