const formEl = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();
    const options = {
        email: event.currentTarget.elements.email.value.trim(),
        password: event.currentTarget.elements.password.value.trim()
    }
    if (!options.email || !options.password) {
        return alert('Please fill in all the fields!')
    };
    console.log(options);
    formEl.reset();
}

formEl.addEventListener('submit', onFormSubmit);