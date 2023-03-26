const inputEl = document.querySelector(`#validation-input`);
console.log(inputEl);

inputEl.addEventListener('focus', handeleInputFocus);
inputEl.addEventListener('blur', handeleInputBlur);

function handeleInputFocus() {
    console.log('focus')
}

function handeleInputBlur(event) {
    if (event.target.value.trim().length === Number(inputEl.getAttribute('data-length'))) {
        event.target.style.outline = ' 5px solid green';
    } else {
        event.target.style.outline = ' 5px solid red';
    };
};


