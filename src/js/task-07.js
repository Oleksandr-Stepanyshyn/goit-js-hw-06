const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

function replaceFontSize(event) {
    console.log(event.currentTarget.value);
    textEl.style.fontSize = `${event.currentTarget.value}px`;
};

inputRangeEl.addEventListener('input', replaceFontSize);