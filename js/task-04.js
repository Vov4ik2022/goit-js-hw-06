
let counterValue = 0;
const counterEl = document.querySelector("#counter");
const valueEl = document.querySelector("#value");

counterEl.firstElementChild.addEventListener("click", (handleClick) => {
    counterValue -= handleClick;
    console.log("Click -");
});

counterEl.lastElementChild.addEventListener("click", (handleClick) => {
    counterValue += handleClick;
    console.log("Click +");
});

const handleClick = () => {
  valueEl.textContent = counterValue;
};

// Не знаю как подвязать span (valueEl). Не считает счетчик



