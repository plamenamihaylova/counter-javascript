/* FIRST SOLUTION */
document.addEventListener("DOMContentLoaded", initApp);

const initApp = () => {
  initCounter();
  increaseCounter();
  decreaseCounter();
  resetCounter();
};

const initCounter = () => {
  localStorage.setItem("counter", 0);
  setNewCounterValue();
};

const increaseCounter = () => {
  const decreaseButton = document.getElementById("increase");
  decreaseButton.addEventListener("click", () => {
    const increasedValue = parseInt(localStorage.getItem("counter")) + 1;
    localStorage.setItem("counter", increasedValue);
    setNewCounterValue();
    setCounterStyle();
  });
};

const decreaseCounter = () => {
  const decreaseButton = document.getElementById("decrease");
  decreaseButton.addEventListener("click", () => {
    const decreasedValue = parseInt(localStorage.getItem("counter")) - 1;
    localStorage.setItem("counter", decreasedValue);
    setNewCounterValue();
    setCounterStyle();
  });
};

const resetCounter = () => {
  const decreaseButton = document.getElementById("reset");
  decreaseButton.addEventListener("click", () => {
    initCounter();
    setCounterStyle();
  });
};

const setNewCounterValue = () => {
  const counterElement = document.getElementById("counter");
  counterElement.textContent = localStorage.getItem("counter");
};

const setCounterStyle = () => {
  const counterElement = document.getElementById("counter");
  const counter = parseInt(localStorage.getItem("counter"));
  if (counter === 0) {
    console.log(counterElement.classList);
    counterElement.classList.remove("below-zero");
    counterElement.classList.remove("above-zero");
    console.log(counterElement.classList);
  } else if (counter < 0) {
    counterElement.classList.add("below-zero");
  } else {
    counterElement.classList.add("above-zero");
  }
};

/* SECOND SOLUTION */
let count = 0;

const value = document.querySelector("#counter");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const classes = event.currentTarget.classList;
    if (classes.contains("decrease")) {
      count--;
    } else if (classes.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.classList.add("above-zero");
    } else if (count < 0) {
      value.classList.add("below-zero");
    } else {
      value.classList.remove("below-zero");
      value.classList.remove("above-zero");
    }

    value.textContent = count;
  });
});
