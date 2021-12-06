const inputValueEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function onInputValueInput(event) {
    if (!event.currentTarget.value.trim()) { return outputEl.textContent = 'Anonymous'}
    outputEl.textContent = event.currentTarget.value.trim();
}

inputValueEl.addEventListener("input", onInputValueInput);