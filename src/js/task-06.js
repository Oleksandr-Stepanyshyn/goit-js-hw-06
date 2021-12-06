const inputTextEl = document.querySelector('#validation-input');

function onInputTextBlur (event) {
    // console.log(event.currentTarget.value.length);
    // console.log(Number(inputTextEl.dataset.length));
    inputTextEl.classList.add('invalid');
    if (event.currentTarget.value.length === Number(inputTextEl.dataset.length)) {
      return inputTextEl.classList.replace('invalid','valid');
    };
    inputTextEl.classList.add('invalid');
};

inputTextEl.addEventListener('blur', onInputTextBlur);
