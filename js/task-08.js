const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
        if (email.value === "" || password.value === "") {
        return alert("Пустое поле!");
        }
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
})

