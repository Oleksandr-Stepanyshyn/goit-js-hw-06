const textInputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", event => {
    if (!event.currentTarget.value.trim()) { return outputEl.textContent = 'Anonymous'}
    outputEl.textContent = event.currentTarget.value.trim();
    // console.log(!event.currentTarget.value.trim());
})