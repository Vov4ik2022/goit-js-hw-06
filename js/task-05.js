const userTextInputEl = document.querySelector('#name-input');
const formTextOutputEl = document.querySelector('#name-output');


const textInputEl = (event) => {
    if (userTextInputEl.value === "") {
        formTextOutputEl.textContent = `Anonymous`;
    } else {
      formTextOutputEl.textContent = event.currentTarget.value;
    }
};

userTextInputEl.addEventListener("input", textInputEl);


// userTextInputEl.addEventListener('input', (event) => {
//     formTextOutputEl.textContent = event.currentTarget.value;

//     if (userTextInputEl.value === " ") {
//         formTextOutputEl.textContent = `Anonymous`;
//     };
// });