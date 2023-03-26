const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
};