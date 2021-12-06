let counterValue = 0;

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementtEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

function onDecrementClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};
 
function onIncrementClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
 };

decrementEl.addEventListener("click", onDecrementClick);
incrementtEl.addEventListener("click", onIncrementClick);