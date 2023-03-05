
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







// let counterValue = 0;

// const counterEl = document.querySelector("#counter");
// const valueEl = document.querySelector("#value");
// const firstBtnEl = document.querySelector("#decrement");
// const lastBtnEl = document.querySelector("#increment");

// const decrementEl = () => {
//     counterValue -= 1;
//     valueEl.textContent = counterValue;
// }

// const incrementEl = () => {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
// };

// firstBtnEl.addEventListener("click", decrementEl);
// lastBtnEl.addEventListener("click", incrementEl);

